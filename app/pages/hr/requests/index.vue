<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const statusFilter = ref('')
const clientFilter = ref('')
const slaOnly = ref(false)

const rows = computed(() => {
  return store.data.requests.filter(r => !['Published', 'Paused', 'Closed'].includes(r.status as string)).map((r) => {
    const age = r.submittedAt ? Math.floor((new Date('2026-10-28').getTime() - new Date(r.submittedAt).getTime()) / 86400000) : 0
    const sla = ['Submitted', 'Under review'].includes(r.status) && businessDaysSince(r.submittedAt || '2026-10-28') >= 2
    return { r, age, sla, client: store.orgById(r.orgId)?.name }
  }).filter((row) => {
    if (statusFilter.value && row.r.status !== statusFilter.value) return false
    if (clientFilter.value && row.r.orgId !== clientFilter.value) return false
    if (slaOnly.value && !row.sla) return false
    return true
  })
})
</script>

<template>
  <div>
    <PageHeader title="Request queue" />
    <div class="row card">
      <select v-model="statusFilter" class="select"><option value="">All statuses</option><option>Draft</option><option>Submitted</option><option>Under review</option></select>
      <select v-model="clientFilter" class="select"><option value="">All clients</option><option value="lumen">Lumen</option><option value="harbor">Harbor</option></select>
      <label class="row"><input v-model="slaOnly" type="checkbox"> SLA only</label>
    </div>
    <div class="card table-wrap" style="margin-top: 1rem">
      <table class="data">
        <thead><tr><th>Title</th><th>Client</th><th>Status</th><th>Age</th><th>Owner</th></tr></thead>
        <tbody>
          <tr v-for="row in rows" :key="row.r.id">
            <td><NuxtLink :to="`/hr/requests/${row.r.id}`">{{ row.r.title }}</NuxtLink></td>
            <td>{{ row.client }}</td>
            <td><StatusBadge :status="row.r.status" /> <StatusBadge v-if="row.sla" status="SLA" tone="attention" /></td>
            <td>{{ row.age }}d</td>
            <td>Hana Cruz</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
