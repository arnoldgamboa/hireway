<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const appId = computed(() => String(route.params.id))
const app = computed(() => store.applicationById(appId.value))
const job = computed(() => app.value ? store.jobById(app.value.jobId) : undefined)
const applicant = computed(() => app.value ? store.applicantById(app.value.applicantId) : undefined)
const interview = computed(() => store.data.interviews.find(i => i.applicationId === appId.value))
const invite = computed(() => store.inviteForApp(appId.value))
const org = computed(() => job.value ? store.orgById(job.value.orgId) : undefined)

const consentRecording = ref(false)
const acceptConsent = ref(false)
const declineOpen = ref(false)
const declineReason = ref('')

const gentleOutcome = computed(() => {
  if (!app.value) return ''
  if (app.value.status === 'Client rejected' || app.value.status === 'Not progressed') return 'Not moving forward'
  if (app.value.status === 'Client accepted' || app.value.status === 'Hired') return `Good news: ${org.value?.name} wants to move forward`
  return ''
})

function withdraw () {
  if (!app.value || !confirm('Withdraw this application?')) return
  store.withdrawApplication(app.value.id)
  toast.show('Application withdrawn')
}

function confirmAttendance () {
  toast.show('Attendance confirmed')
}

function reschedule () {
  const note = prompt('Reschedule note')
  if (note) toast.show('Reschedule requested')
}

function acceptInvite () {
  if (!acceptConsent.value) return
  if (store.acceptInvite(appId.value)) toast.show('Invitation accepted')
}

function declineInvite () {
  store.declineInvite(appId.value, declineReason.value)
  declineOpen.value = false
  toast.show('Invite declined')
}
</script>

<template>
  <div v-if="!app || !job || !applicant" class="card">Application not found</div>
  <div v-else>
    <PageHeader :title="job.title" :subtitle="applicantFacingStatus(app, job.orgId, job.confidential, store)" />
    <div class="card stack-md">
      <StatusBadge :status="app.status" />
      <button v-if="app.status !== 'Hired' && app.status !== 'Withdrawn'" type="button" class="btn btn--danger" @click="withdraw">Withdraw</button>
      <p v-if="gentleOutcome" class="meta">{{ gentleOutcome }}</p>
    </div>

    <div v-if="interview" class="card stack-md">
      <h2 class="section-title">HR interview</h2>
      <p>{{ formatPht(interview.scheduledAt) }} PHT · {{ interview.platform }}</p>
      <a :href="interview.link" target="_blank" rel="noopener">Meeting link</a>
      <p class="meta">Interviewer: {{ interview.interviewer }}</p>
      <div class="row">
        <button type="button" class="btn btn--secondary" @click="confirmAttendance">Confirm attendance</button>
        <button type="button" class="btn btn--secondary" @click="reschedule">Request a reschedule</button>
      </div>
      <label v-if="interview.status === 'Scheduled' && interview.recordingConsent === null" class="stack-sm">
        <input v-model="consentRecording" type="checkbox">
        Hireway may record this interview and show the recording, including my face and voice, to prospective employers before my identity is revealed.
      </label>
    </div>

    <div v-if="invite && invite.status === 'Sent'" class="card stack-md">
      <h2 class="section-title">Interview invitation</h2>
      <p><strong>{{ org?.name }}</strong></p>
      <p>{{ invite.message }}</p>
      <p class="meta">Proposed: {{ invite.proposedTimes.join(' · ') }}</p>
      <p class="meta">Expires {{ formatPht(invite.expiresAt) }}</p>
      <label class="stack-sm">
        <input v-model="acceptConsent" type="checkbox">
        I agree to share my name, contact details and full CV with {{ org?.name }}.
      </label>
      <div class="row">
        <button type="button" class="btn btn--primary" :disabled="!acceptConsent" @click="acceptInvite">Accept</button>
        <button type="button" class="btn btn--danger" @click="declineOpen = true">Decline</button>
      </div>
    </div>

    <UiModal v-model:open="declineOpen" title="Decline invitation">
      <label class="stack-sm"><span>Reason (optional)</span><textarea v-model="declineReason" class="textarea" /></label>
      <template #footer>
        <button type="button" class="btn btn--secondary" @click="declineOpen = false">Cancel</button>
        <button type="button" class="btn btn--danger" @click="declineInvite">Decline</button>
      </template>
    </UiModal>
  </div>
</template>
