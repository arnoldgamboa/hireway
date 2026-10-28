<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const view = ref<'kanban' | 'table'>('kanban')

const jobId = computed(() => String(route.params.id))
const job = computed(() => store.jobById(jobId.value))

const columns: { title: string; statuses: string[] }[] = [
  { title: 'New', statuses: ['Submitted', 'Screening'] },
  { title: 'Interview', statuses: ['Shortlisted', 'HR interview scheduled', 'HR interviewed'] },
  { title: 'Recommended', statuses: ['Recommended'] },
  { title: 'Invited', statuses: ['Invited', 'Declined invite'] },
  { title: 'With client', statuses: ['Accepted invite', 'Client interviewing'] },
  { title: 'Decided', statuses: ['Client accepted', 'Client rejected', 'Hired', 'Not progressed', 'Withdrawn'] },
]

const apps = computed(() => store.data.applications.filter(a => a.jobId === jobId.value))

function appsIn (statuses: string[]) {
  return apps.value.filter(a => statuses.includes(a.status))
}
</script>

<template>
  <div v-if="!job" class="card">Job not found</div>
  <div v-else>
    <PageHeader :title="job.title" subtitle="Pipeline">
      <template #actions>
        <button type="button" class="btn" :class="view === 'kanban' ? 'btn--primary' : 'btn--secondary'" @click="view = 'kanban'">Kanban</button>
        <button type="button" class="btn" :class="view === 'table' ? 'btn--primary' : 'btn--secondary'" @click="view = 'table'">Table</button>
      </template>
    </PageHeader>
    <div v-if="view === 'kanban'" class="kanban">
      <div v-for="col in columns" :key="col.title" class="col card">
        <h3 class="section-title">{{ col.title }}</h3>
        <NuxtLink
          v-for="a in appsIn(col.statuses)"
          :key="a.id"
          :to="`/hr/jobs/${jobId}/applications/${a.id}`"
          class="kanban-card"
        >
          <strong>{{ store.applicantById(a.applicantId)?.name }}</strong>
          <p class="meta">{{ store.applicantById(a.applicantId)?.city }}</p>
          <StatusBadge :status="a.status" />
        </NuxtLink>
      </div>
    </div>
    <div v-else class="card table-wrap">
      <table class="data">
        <thead><tr><th>Name</th><th>Status</th><th>Updated</th></tr></thead>
        <tbody>
          <tr v-for="a in apps" :key="a.id">
            <td><NuxtLink :to="`/hr/jobs/${jobId}/applications/${a.id}`">{{ store.applicantById(a.applicantId)?.name }}</NuxtLink></td>
            <td>{{ a.status }}</td>
            <td>{{ a.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.kanban {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 0.75rem;
}
.col { min-height: 8rem; }
.kanban-card {
  display: block;
  padding: 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-btn);
  margin-top: 0.5rem;
  color: inherit;
  text-decoration: none;
}
</style>
