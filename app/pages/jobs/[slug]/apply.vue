<script setup lang="ts">
definePageMeta({ layout: 'public' })
const route = useRoute()
const router = useRouter()
const store = useDemoStore()
const toast = useToast()

const job = computed(() => store.jobBySlug(String(route.params.slug)))
const applicantId = computed(() => store.ui.applicantId)

const existing = computed(() => {
  const j = job.value
  if (!j) return null
  return store.data.applications.find(a => a.applicantId === applicantId.value && a.jobId === j.id)
})

const coverNote = ref('')
const consent = ref(false)

function switchApplicant () {
  store.setRole('applicant', p => router.push(route.fullPath))
}

function submit () {
  if (!job.value || !consent.value) return
  const app = store.applyToJob(job.value.id, applicantId.value, coverNote.value)
  toast.show('Application submitted')
  router.push(`/applicant/applications/${app.id}`)
}
</script>

<template>
  <div v-if="!job" class="card">Job not found</div>
  <div v-else-if="job.status !== 'Published'" class="card stack-sm">
    <p>This job is not open</p>
    <NuxtLink to="/" class="btn btn--primary">Back to job board</NuxtLink>
  </div>
  <div v-else>
    <PageHeader title="Apply" :subtitle="job.title" />
    <div v-if="store.ui.role !== 'applicant'" class="banner banner--info row">
      <span>Switch to Applicant to apply as yourself.</span>
      <button type="button" class="btn btn--primary" @click="switchApplicant">Switch to Applicant</button>
    </div>
    <div v-if="existing" class="card stack-sm">
      <StatusBadge :status="existing.status" />
      <p>You already applied to this role.</p>
      <NuxtLink :to="`/applicant/applications/${existing.id}`" class="btn btn--primary">View application</NuxtLink>
    </div>
    <form v-else class="card stack-md" @submit.prevent="submit">
      <p class="meta">{{ store.applicantById(applicantId)?.city }}</p>
      <p>Default CV: {{ store.applicantById(applicantId)?.cvFiles.find(c => c.isDefault)?.name }}</p>
      <label class="stack-sm">
        <span>Cover note (optional)</span>
        <textarea v-model="coverNote" class="textarea" />
      </label>
      <label class="row">
        <input v-model="consent" type="checkbox" required>
        <span>I agree to share an anonymized profile, interview notes, and a redacted CV with the hiring client.</span>
      </label>
      <button type="submit" class="btn btn--primary" :disabled="!consent">Submit application</button>
    </form>
  </div>
</template>
