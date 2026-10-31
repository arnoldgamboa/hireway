<script setup lang="ts">
definePageMeta({ layout: 'public' })

const store = useDemoStore()
const q = ref('')
const location = ref('')
const setup = ref('')
const empType = ref('')
const category = ref('')
const salaryBand = ref('')

function jobMaxSalary (job: { salaryMin?: number; salaryMax?: number }) {
  return job.salaryMax ?? job.salaryMin ?? 0
}

function jobMinSalary (job: { salaryMin?: number; salaryMax?: number }) {
  return job.salaryMin ?? job.salaryMax ?? 0
}

function matchesSalaryBand (job: { salaryDisclosed: boolean; salaryMin?: number; salaryMax?: number }) {
  if (!salaryBand.value) return true
  if (!job.salaryDisclosed) return salaryBand.value === 'undisclosed'
  const min = jobMinSalary(job)
  const max = jobMaxSalary(job)
  switch (salaryBand.value) {
    case 'under30':
      return max > 0 && max <= 32000
    case '30-40':
      return min >= 25000 && max <= 40000
    case '40-55':
      return min >= 35000 && max <= 55000
    case '55plus':
      return min >= 50000
    default:
      return true
  }
}

const jobs = computed(() => {
  return store.publishedJobs.filter((j) => {
    if (q.value && !j.title.toLowerCase().includes(q.value.toLowerCase())) return false
    if (location.value && j.location !== location.value) return false
    if (setup.value && j.workSetup !== setup.value) return false
    if (empType.value && j.employmentType !== empType.value) return false
    if (category.value && j.category !== category.value) return false
    if (!matchesSalaryBand(j)) return false
    return true
  })
})

const locations = computed(() => [...new Set(store.publishedJobs.map(j => j.location))])
const setups = computed(() => [...new Set(store.publishedJobs.map(j => j.workSetup))])
const types = computed(() => [...new Set(store.publishedJobs.map(j => j.employmentType))])
const categories = computed(() => [...new Set(store.publishedJobs.map(j => j.category))])

function clearFilters () {
  q.value = ''
  location.value = ''
  setup.value = ''
  empType.value = ''
  category.value = ''
  salaryBand.value = ''
}

function clientLabel (job: { orgId: string; confidential: boolean }) {
  if (job.confidential) return 'Confidential client'
  return store.orgById(job.orgId)?.name || 'Client'
}
</script>

<template>
  <div class="job-board">
    <section class="board-hero">
      <div class="hero-copy">
        <div class="eyebrow"><span class="live-dot" /> GOOD PEOPLE. GREAT POSSIBILITIES.</div>
        <h1>Your next chapter<br>starts <em>here.</em></h1>
        <p>Find work that fits your life. Explore opportunities<br class="desktop-break"> with teams ready to meet you.</p>
        <div class="hero-note"><span class="mini-mark"><UiArrow /></span> A clearer path from application to opportunity.</div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one" /><div class="orbit orbit-two" />
        <div class="art-label">ROOM TO GROW</div>
        <div class="step step-one"><span>01</span><b>Find your fit</b><i><UiArrow /></i></div>
        <div class="step step-two"><span>02</span><b>Make a connection</b><i><UiArrow /></i></div>
        <div class="step step-three"><span>03</span><b>Move forward</b><i><UiArrow /></i></div>
        <span class="art-spark">✳</span>
      </div>
    </section>
    <section class="open-roles" aria-labelledby="roles-title">
      <div class="board-heading"><div><div class="eyebrow">FIND YOUR NEXT OPPORTUNITY</div><h2 id="roles-title">Open roles <span>{{ jobs.length }}</span></h2></div><p class="meta">A fresh start is closer than you think.</p></div>
      <div class="filters">
        <div class="search-field"><span aria-hidden="true">⌕</span><input v-model="q" class="input" type="search" placeholder="Search by job title…" aria-label="Search jobs"><span class="search-hint">Find your fit</span></div>
        <div class="filter-row">
          <select v-model="location" class="select" aria-label="Location"><option value="">All locations</option><option v-for="l in locations" :key="l" :value="l">{{ l }}</option></select>
          <select v-model="setup" class="select" aria-label="Work setup"><option value="">Work setup</option><option v-for="s in setups" :key="s" :value="s">{{ s }}</option></select>
          <select v-model="empType" class="select" aria-label="Employment type"><option value="">Employment type</option><option v-for="t in types" :key="t" :value="t">{{ t }}</option></select>
          <select v-model="category" class="select" aria-label="Category"><option value="">Category</option><option v-for="c in categories" :key="c" :value="c">{{ c }}</option></select>
          <select v-model="salaryBand" class="select" aria-label="Salary band"><option value="">Salary band</option><option value="under30">Up to ₱32,000</option><option value="30-40">₱25,000 – ₱40,000</option><option value="40-55">₱35,000 – ₱55,000</option><option value="55plus">₱50,000 and above</option></select>
        </div>
      </div>
      <div class="results-caption"><span>{{ jobs.length }} {{ jobs.length === 1 ? 'opportunity' : 'opportunities' }} to explore</span><button type="button" class="clear-filters" @click="clearFilters">Clear filters ↺</button></div>
      <div v-if="!jobs.length" class="card empty-state"><span class="empty-symbol">⌕</span><h3>No jobs match these filters</h3><p class="meta">Try a different title or broaden your search.</p><button type="button" class="btn btn--secondary" @click="clearFilters">Clear filters</button></div>
      <div v-else class="jobs-grid">
        <NuxtLink v-for="job in jobs" :key="job.id" :to="`/jobs/${job.slug}`" class="card job-card">
          <div class="job-card-top"><span class="company-avatar" :class="`company-avatar--${job.orgId}`">{{ clientLabel(job).split(' ').map(w => w[0]).slice(0, 2).join('') }}</span><span class="job-category">{{ job.category }}</span><span class="card-arrow"><UiArrow /></span></div>
          <p class="company-name">{{ clientLabel(job) }}</p><h3>{{ job.title }}</h3>
          <p class="job-location"><span aria-hidden="true">⌖</span> {{ job.location }}</p>
          <div class="job-tags"><span>{{ job.workSetup }}</span><span>{{ job.employmentType }}</span></div>
          <div class="job-card-bottom"><strong>{{ formatSalary(job) }}</strong><span>View role <span aria-hidden="true">→</span></span></div>
        </NuxtLink>
      </div>
    </section>
    <div class="board-end"><span class="live-dot" /> Your next step matters. Let’s make it a good one.</div>
  </div>
</template>

<style scoped>
.board-hero{display:grid;grid-template-columns:1.3fr 1fr;min-height:340px;background:var(--hero-surface);border:1px solid var(--line);border-radius:20px;overflow:hidden;margin:8px 0 48px;}
.hero-copy{padding:42px 46px;position:relative;z-index:1}.eyebrow{font-size:10px;letter-spacing:1.6px;font-weight:600;color:var(--primary);display:flex;gap:8px;align-items:center}.live-dot{display:inline-block;width:6px;height:6px;background:var(--primary);border-radius:50%;flex-shrink:0}h1{font-size:52px;line-height:1.08;font-weight:500;letter-spacing:-2px;margin:20px 0 16px}h1 em{font-family:Georgia,serif;font-weight:400;color:var(--primary)}.hero-copy>p{color:var(--ink-soft);font-size:14px;line-height:1.8;margin:0}.hero-note{display:flex;align-items:center;gap:9px;font-size:11px;color:var(--ink-soft);margin-top:26px}.mini-mark{font-size:17px;color:var(--primary)}
.hero-art{position:relative;display:flex;flex-direction:column;justify-content:center;padding:45px 42px 36px 0;gap:13px}.art-label{font-size:9px;letter-spacing:2px;margin-left:28px;color:var(--ink-soft);margin-bottom:10px}.step{position:relative;z-index:1;display:flex;align-items:center;gap:16px;padding:17px 20px;border-radius:10px;box-shadow:0 9px 24px #34482a0a;background:#ffffffc9;border:1px solid #ffffffb3;font-size:13px;max-width:300px}.step span{font-size:10px;color:var(--ink-soft)}.step b{font-weight:500}.step i{margin-left:auto;font-size:20px;font-style:normal}.step-one{background:var(--sky);margin-left:5px;transform:rotate(-4deg)}.step-two{margin-left:30px;background:var(--sage);transform:rotate(2deg)}.step-three{margin-left:60px;background:var(--primary);color:white;transform:rotate(-3deg)}.step-three span{color:var(--sage)}.orbit{position:absolute;border:1px solid #E4E3C7;border-radius:50%;width:350px;height:350px;top:5px;left:10px}.orbit-two{width:450px;height:450px;top:-45px;left:-40px}.art-spark{position:absolute;right:32px;top:35px;font-size:46px;color:var(--sunlight);line-height:1}
.board-heading{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px}.board-heading h2{font-size:28px;letter-spacing:-.9px;font-weight:500;margin:8px 0 0}.board-heading h2>span{font-size:12px;vertical-align:middle;display:inline-grid;place-items:center;background:var(--sage);border-radius:7px;width:25px;height:25px;margin-left:8px;color:var(--primary)}.board-heading .meta{margin:0 0 5px;font-size:12px}.search-field{display:flex;align-items:center;gap:12px;border:1px solid var(--line);background:white;border-radius:10px;padding:4px 16px}.search-field>span:first-child{font-size:28px;color:var(--ink-soft)}.search-field .input{border:0;padding:8px 0;background:transparent}.search-hint{white-space:nowrap;font-size:10px;color:var(--ink-soft);border:1px solid var(--line);border-radius:5px;padding:3px 7px}.filter-row{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-top:12px}.filter-row .select{font-size:12px;color:var(--ink-soft);min-height:40px}.results-caption{display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--ink-soft);margin:21px 0 16px}.clear-filters{border:0;background:none;cursor:pointer;font-size:11px;color:var(--primary);padding:5px}.jobs-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.job-card{color:var(--ink);text-decoration:none;padding:22px;transition:transform .2s,border-color .2s,box-shadow .2s}.job-card:hover{transform:translateY(-4px);border-color:var(--border-hover);box-shadow:0 10px 24px #243e2e0a;text-decoration:none}.job-card-top{display:flex;align-items:center;gap:10px}.company-avatar{height:39px;width:39px;border-radius:10px;background:var(--sunlight);color:var(--sunlight-ink);display:grid;place-items:center;font-weight:600;font-size:12px}.company-avatar--lumen{background:var(--sky);color:var(--sky-ink)}.company-avatar--harbor{background:var(--sage);color:var(--primary)}.job-category{font-size:9px;color:var(--ink-soft)}.card-arrow{margin-left:auto;color:var(--ink-soft);font-size:21px}.company-name{font-size:11px;color:var(--ink-soft);margin:22px 0 6px}.job-card h3{font-size:17px;line-height:1.4;font-weight:500;letter-spacing:-.3px;margin:0;min-height:48px}.job-location{font-size:11px;color:var(--ink-soft);margin:10px 0 15px}.job-location span{font-size:15px}.job-tags{display:flex;gap:6px;flex-wrap:wrap}.job-tags>span{font-size:10px;background:var(--surface-soft);border:1px solid var(--line);border-radius:5px;padding:4px 8px;color:var(--ink-soft)}.job-card-bottom{display:flex;justify-content:space-between;gap:8px;align-items:center;border-top:1px solid var(--line);padding-top:17px;margin-top:20px;font-size:10px;color:var(--primary)}.job-card-bottom strong{font-size:12px;font-weight:500;color:var(--primary)}.job-card-bottom>span{white-space:nowrap}.board-end{text-align:center;display:flex;justify-content:center;gap:8px;align-items:center;font-size:11px;color:var(--ink-soft);margin:38px 0 4px}.empty-state{text-align:center;padding:45px}.empty-symbol{font-size:36px;color:var(--primary)}
@media(min-width:1400px){.board-hero{min-height:365px}.hero-copy{padding:46px 50px}}
@media(max-width:900px){.hero-copy{padding:30px}h1{font-size:43px}.hero-art{padding-right:20px}.step{padding:14px;gap:9px}.step-three{margin-left:30px}.art-spark{right:15px}.jobs-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.job-category{font-size:8px}.filter-row{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:600px){.board-hero{grid-template-columns:1fr;margin-bottom:30px}.hero-copy{padding:28px}.hero-art{display:none}h1{font-size:43px}.board-heading .meta{display:none}.board-heading h2{font-size:25px}.filter-row{grid-template-columns:repeat(2,minmax(0,1fr))}.filter-row .select:last-child{grid-column:1/-1}.jobs-grid{grid-template-columns:1fr}.search-hint{display:none}.board-end{font-size:10px}.job-card h3{min-height:0}.desktop-break{display:none}}
</style>
