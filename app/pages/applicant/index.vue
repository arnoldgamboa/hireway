<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const router = useRouter()

const apps = computed(() =>
  store.data.applications
    .filter(a => a.applicantId === store.ui.applicantId)
    .map((a) => {
      const job = store.jobById(a.jobId)!
      const invite = store.inviteForApp(a.id)
      return {
        app: a,
        job,
        clientName: clientDisplayName(job.orgId, job.confidential, !!invite, store),
        statusLine: applicantFacingStatus(a, job.orgId, job.confidential, store),
      }
    }),
)
</script>

<template>
  <div>
    <PageHeader title="My applications" />
    <div v-if="!apps.length" class="card meta">No applications yet.</div>
    <div v-else class="stack-md">
      <div v-for="row in apps" :key="row.app.id" class="card row" style="justify-content: space-between;">
        <div>
          <NuxtLink :to="`/applicant/applications/${row.app.id}`"><strong>{{ row.job.title }}</strong></NuxtLink>
          <p class="meta">{{ row.clientName }} · Updated {{ formatPht(row.app.updatedAt) }}</p>
          <p>{{ row.statusLine }}</p>
        </div>
        <div class="row">
          <NuxtLink v-if="row.app.status === 'Invited'" :to="`/applicant/applications/${row.app.id}`" class="btn btn--primary">Respond</NuxtLink>
          <NuxtLink :to="`/applicant/applications/${row.app.id}`" class="btn btn--secondary">Open</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
