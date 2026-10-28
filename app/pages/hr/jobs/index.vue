<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const toast = useToast()

const jobs = computed(() =>
  store.data.jobs.filter(j => ['Approved', 'Published', 'Paused', 'Closed'].includes(j.status)),
)

function publish (jobId: string) {
  store.publishJob(jobId)
  toast.show('Job published')
}
</script>

<template>
  <div>
    <PageHeader title="Jobs" />
    <div class="card table-wrap">
      <table class="data">
        <thead><tr><th>Title</th><th>Client</th><th>Status</th><th>Applicants</th><th /></tr></thead>
        <tbody>
          <tr v-for="j in jobs" :key="j.id">
            <td><NuxtLink :to="`/hr/jobs/${j.id}`">{{ j.title }}</NuxtLink></td>
            <td>{{ store.orgById(j.orgId)?.name }}</td>
            <td><StatusBadge :status="j.status" /></td>
            <td>{{ store.data.applications.filter(a => a.jobId === j.id).length }}</td>
            <td>
              <button v-if="j.status === 'Approved'" type="button" class="btn btn--secondary" @click="publish(j.id)">Publish</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
