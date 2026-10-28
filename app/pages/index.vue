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
  <div>
    <PageHeader title="Open roles" subtitle="Published positions with Hireway" />
    <div class="filters card stack-md">
      <input v-model="q" class="input" type="search" placeholder="Search jobs" aria-label="Search jobs">
      <div class="row">
        <select v-model="location" class="select">
          <option value="">All locations</option>
          <option v-for="l in locations" :key="l" :value="l">{{ l }}</option>
        </select>
        <select v-model="setup" class="select">
          <option value="">Work setup</option>
          <option v-for="s in setups" :key="s" :value="s">{{ s }}</option>
        </select>
        <select v-model="empType" class="select">
          <option value="">Employment type</option>
          <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
        </select>
        <select v-model="category" class="select">
          <option value="">Category</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        <select v-model="salaryBand" class="select">
          <option value="">Salary band</option>
          <option value="under30">Up to ₱32,000</option>
          <option value="30-40">₱25,000 – ₱40,000</option>
          <option value="40-55">₱35,000 – ₱55,000</option>
          <option value="55plus">₱50,000 and above</option>
        </select>
      </div>
    </div>
    <div v-if="!jobs.length" class="card stack-sm">
      <p>No jobs match these filters</p>
      <button type="button" class="btn btn--secondary" @click="clearFilters">Clear filters</button>
    </div>
    <div v-else class="card-grid">
      <NuxtLink v-for="job in jobs" :key="job.id" :to="`/jobs/${job.slug}`" class="card job-card">
        <h2 class="section-title">{{ job.title }}</h2>
        <p class="meta">{{ job.location }} · {{ job.workSetup }} · {{ job.employmentType }}</p>
        <p>{{ formatSalary(job) }}</p>
        <p class="meta">{{ clientLabel(job) }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.job-card {
  color: inherit;
  text-decoration: none;
  display: block;
}

.job-card:hover {
  border-color: var(--primary);
}
</style>
