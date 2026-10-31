<script setup lang="ts">
const store = useDemoStore()
const route = useRoute()
const router = useRouter()
const toast = useToast()

watch(() => route.path, (path) => {
  store.syncRoleFromPath(path)
  store.rememberPath(path)
}, { immediate: true })

const applicants = computed(() => store.data.applicants)
const orgs = computed(() => store.data.orgs)

function goRole (role: 'public' | 'applicant' | 'client' | 'hr') {
  store.setRole(role, p => router.push(p))
}

function onApplicantChange (e: Event) {
  const id = (e.target as HTMLSelectElement).value
  store.setApplicant(id, route.path, p => router.push(p))
}

function onClientChange (e: Event) {
  const id = (e.target as HTMLSelectElement).value
  store.setClientOrg(id, p => router.push(p))
}

function resetDemo () {
  if (!confirm('Reset all demo data to the seed?')) return
  store.resetDemo(route.path)
  toast.show('Demo reset')
}
</script>

<template>
  <div class="root">
    <header class="demo-bar">
      <div class="demo-bar__inner">
        <span class="demo-label"><span /> DEMO WORKSPACE</span>
        <div class="segments" role="tablist" aria-label="Demo role">
          <button type="button" :class="{ active: store.ui.role === 'public' }" @click="goRole('public')">Public</button>
          <button type="button" :class="{ active: store.ui.role === 'applicant' }" @click="goRole('applicant')">Applicant</button>
          <button type="button" :class="{ active: store.ui.role === 'client' }" @click="goRole('client')">Client</button>
          <button type="button" :class="{ active: store.ui.role === 'hr' }" @click="goRole('hr')">HR</button>
        </div>
        <div v-if="store.ui.role === 'applicant'" class="picker">
          <label class="meta">Applicant</label>
          <select class="select picker-select" :value="store.ui.applicantId" @change="onApplicantChange">
            <option v-for="a in applicants" :key="a.id" :value="a.id">{{ a.name }}</option>
          </select>
        </div>
        <div v-if="store.ui.role === 'client'" class="picker">
          <label class="meta">Client</label>
          <select class="select picker-select" :value="store.ui.clientOrgId" @change="onClientChange">
            <option v-for="o in orgs" :key="o.id" :value="o.id">{{ o.name }}</option>
          </select>
        </div>
        <div v-if="store.ui.role === 'hr'" class="picker meta">Hana Cruz · HR operator</div>
        <button type="button" class="btn btn--secondary reset" @click="resetDemo">Reset demo</button>
      </div>
    </header>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToastHost />
  </div>
</template>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-bar {
  min-height: 3rem;
  background: var(--canvas);
  border-bottom: 1px solid var(--line);
  flex-shrink: 0;
}

.demo-bar__inner {
  width: 100%;
  max-width: var(--layout-max-width);
  margin-inline: auto;
  min-height: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 2rem;
  flex-wrap: wrap;
}

.segments {
  display: flex;
  gap: 0.25rem;
}

.segments button {
  height: 2rem;
  padding: 0 0.75rem;
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: var(--radius-btn);
  cursor: pointer;
  font-size: 0.8125rem;
}

.segments button.active {
  background: var(--tint);
  border-color: var(--primary);
  color: var(--primary);
  font-weight: 500;
}

.picker {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.picker-select {
  width: auto;
  min-width: 10rem;
}

.reset {
  margin-left: auto;
}
.demo-bar{background:var(--sky);min-height:42px;border-bottom-color:#CDDFE5}.demo-bar__inner{min-height:42px;padding-block:6px;gap:18px}.demo-label{display:flex;align-items:center;gap:6px;font-size:8px;font-weight:600;letter-spacing:1.2px;color:var(--sky-ink)}.demo-label>span{width:5px;height:5px;background:var(--primary);border-radius:50%}.segments{gap:3px}.segments button{border:0;background:transparent;font-size:10px;height:26px;border-radius:5px;color:var(--sky-ink);padding:0 12px}.segments button.active{background:white;box-shadow:0 1px 3px #29452c0a;color:var(--primary)}.reset{background:transparent;border:0;font-size:10px;min-height:26px;height:26px;color:var(--sky-ink);padding:0}.picker .meta,.picker.meta{font-size:10px}.picker-select{min-height:28px;font-size:11px;padding-block:2px}@media(max-width:600px){.demo-bar__inner{gap:8px;padding-inline:20px}.demo-label{display:none}.segments button{padding-inline:9px}.picker{order:3;width:100%}.reset{margin-left:auto}}
</style>
