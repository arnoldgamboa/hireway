<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()

const jobs = computed(() =>
  store.data.jobs.filter(j => ['Approved', 'Published', 'Paused', 'Closed'].includes(j.status)),
)
</script>

<template>
  <div>
    <PageHeader title="Jobs" />
    <div class="card table-wrap">
      <table class="data">
        <thead><tr><th>Title</th><th>Client</th><th>Status</th><th>Applicants</th></tr></thead>
        <tbody>
          <tr v-for="j in jobs" :key="j.id">
            <td><NuxtLink :to="`/hr/jobs/${j.id}`">{{ j.title }}</NuxtLink></td>
            <td>{{ store.orgById(j.orgId)?.name }}</td>
            <td><StatusBadge :status="j.status" /></td>
            <td>{{ store.data.applications.filter(a => a.jobId === j.id).length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
