<script setup lang="ts">
definePageMeta({ layout: 'public' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const job = computed(() => store.jobBySlug(String(route.params.slug)))

function clientLabel () {
  const j = job.value
  if (!j) return ''
  if (j.confidential) return 'Confidential client'
  return store.orgById(j.orgId)?.name || ''
}

async function share () {
  if (!import.meta.client) return
  await navigator.clipboard.writeText(window.location.href)
  toast.show('Link copied')
}
</script>

<template>
  <div v-if="!job" class="card">Job not found.</div>
  <div v-else-if="job.status !== 'Published'" class="card stack-sm">
    <p>This job is not open</p>
    <NuxtLink to="/" class="btn btn--primary">Back to job board</NuxtLink>
  </div>
  <div v-else>
    <PageHeader :title="job.title">
      <template #actions>
        <NuxtLink :to="`/jobs/${job.slug}/apply`" class="btn btn--primary">Apply</NuxtLink>
        <button type="button" class="btn btn--secondary" @click="share">Share</button>
      </template>
    </PageHeader>
    <div class="card stack-md">
      <p class="meta">{{ job.location }} · {{ job.workSetup }} · {{ job.employmentType }} · {{ job.category }}</p>
      <p>{{ formatSalary(job) }}</p>
      <p class="meta">{{ clientLabel() }}</p>
      <p>{{ job.description }}</p>
      <div>
        <h3 class="section-title">Requirements</h3>
        <ul>
          <li v-for="(r, i) in job.requirements" :key="i">{{ r }}</li>
        </ul>
      </div>
      <p><strong>Benefits:</strong> {{ job.benefits }}</p>
      <p class="meta">Openings: {{ job.openings }}</p>
    </div>
  </div>
</template>
