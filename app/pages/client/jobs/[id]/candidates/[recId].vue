<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const jobId = computed(() => String(route.params.id))
const recId = computed(() => String(route.params.recId))
const job = computed(() => store.jobById(jobId.value))
const rec = computed(() => store.data.recommendations.find(r => r.id === recId.value))
const app = computed(() => rec.value ? store.applicationById(rec.value.applicationId) : undefined)
const applicant = computed(() => app.value ? store.applicantById(app.value.applicantId) : undefined)
const orgId = computed(() => store.ui.clientOrgId)
const org = computed(() => store.orgById(orgId.value)!)
const owner = computed(() => store.clientOwner(orgId.value)!)

const revealed = computed(() => applicant.value ? store.hasReveal(applicant.value.id, orgId.value) : false)
const grant = computed(() =>
  store.data.revealGrants.find(g => g.applicantId === applicant.value?.id && g.orgId === orgId.value),
)
const invite = computed(() => store.data.invites.find(i => i.recommendationId === recId.value && i.orgId === orgId.value))
const interview = computed(() => store.data.interviews.find(i => i.applicationId === app.value?.id))
const outcome = computed(() => store.data.clientOutcomes.find(o => o.applicationId === app.value?.id))

const inviteOpen = ref(false)
const recordingOpen = ref(false)
const outcomeOpen = ref(false)
const inviteMessage = ref('We would like to schedule an interview.')
const inviteTimes = ref('Next week, flexible')
const passOpen = ref(false)
const passReason = ref('')

const balance = computed(() => org.value.balance)
const needCredits = computed(() => Math.max(0, 1 - balance.value))

const watermark = computed(() => `${org.value.name} · ${owner.value.name} · ${formatPht('2026-10-28T12:00:00+08:00')}`)

const showRecording = computed(() => {
  if (!applicant.value) return false
  if (applicant.value.recordingConsent === false) return false
  return !!interview.value?.recordingLink
})

function sendInvite () {
  if (!app.value || !rec.value || balance.value < 1) return
  const result = store.sendInvite({
    applicationId: app.value.id,
    recommendationId: rec.value.id,
    orgId: orgId.value,
    message: inviteMessage.value,
    proposedTimes: inviteTimes.value.split(',').map(s => s.trim()),
  })
  if (result.ok) {
    inviteOpen.value = false
    toast.show('Invite sent')
  } else toast.show('Low balance', 'danger')
}

function pass () {
  store.passRecommendation(recId.value, passReason.value)
  passOpen.value = false
  toast.show('Candidate passed')
}

function downloadCv () {
  toast.show('Download started')
}

const outcomeForm = reactive({ result: 'Accepted' as 'Accepted' | 'Rejected', fit: 3, skills: 3, communication: 3, comment: '', reasonCode: '' })

function saveOutcome () {
  if (!app.value) return
  store.submitClientOutcome(app.value.id, {
    applicationId: app.value.id,
    result: outcomeForm.result,
    ratings: { fit: outcomeForm.fit, skills: outcomeForm.skills, communication: outcomeForm.communication },
    comment: outcomeForm.comment,
    reasonCode: outcomeForm.reasonCode || undefined,
  })
  outcomeOpen.value = false
  toast.show('Outcome recorded')
}
</script>

<template>
  <div v-if="!job || !rec || !app || !applicant || job.orgId !== orgId" class="card">Candidate not found.</div>
  <div v-else class="stack-md">
    <PageHeader
      :title="revealed ? applicant.name : aliasTitle(rec.alias)"
      :subtitle="revealed && grant ? `Revealed ${formatPht(grant.grantedAt)}` : applicant.city"
    >
      <template #actions>
        <StatusBadge v-if="revealed" status="Revealed" tone="done" />
        <span v-if="revealed" class="meta">{{ rec.alias }}</span>
        <button
          v-if="rec.status === 'shared' && (!invite || invite.status === 'Declined')"
          type="button"
          class="btn btn--primary"
          :disabled="balance < 1 && app.status === 'Recommended'"
          @click="inviteOpen = true"
        >
          {{ balance < 1 ? `You need ${needCredits} more credit${needCredits === 1 ? '' : 's'}.` : 'Invite' }}
        </button>
        <button v-if="!invite" type="button" class="btn btn--danger" @click="passOpen = true">Pass</button>
      </template>
    </PageHeader>

    <p v-if="revealed" class="meta">Already revealed to {{ org.name }}. A new invite still costs 1 credit.</p>

    <div class="card stack-md">
      <template v-if="!revealed">
        <p>{{ applicant.summary }}</p>
        <p class="meta">{{ applicant.workSetup }} · {{ applicant.expectedSalary }} · {{ applicant.availability }}</p>
        <p><strong>Experience:</strong> {{ applicant.experience.title }} at {{ applicant.experience.employer }}</p>
        <p><strong>Education:</strong> {{ applicant.education.degree }}, {{ applicant.education.school }}</p>
        <p>{{ applicant.skills.join(' · ') }}</p>
        <p>{{ rec.shareableNotes }}</p>
        <div v-if="interview?.scorecard" class="meta">
          Scorecard — Communication {{ interview.scorecard.communication }}, Reliability {{ interview.scorecard.reliability }}, Role fit {{ interview.scorecard.roleFit }}
        </div>
      </template>
      <template v-else>
        <p>{{ applicant.email }} · {{ applicant.mobile }}</p>
        <p><a :href="applicant.linkedInUrl">LinkedIn</a> · <a :href="applicant.portfolioUrl">Portfolio</a></p>
        <p>{{ applicant.summary }}</p>
      </template>

      <div v-if="showRecording">
        <button type="button" class="btn btn--secondary" @click="recordingOpen = true">View recording</button>
      </div>
      <p v-else-if="applicant.recordingConsent === false" class="meta">No recording shared</p>

      <div class="cv-panel" :class="{ watermark: !revealed }">
        <h3 class="section-title">{{ revealed ? 'Original CV' : 'Redacted CV' }}</h3>
        <p v-for="n in 8" :key="n" class="meta">CV line {{ n }} — placeholder content for demo.</p>
        <span v-if="!revealed" class="wm">{{ watermark }}</span>
      </div>
      <button type="button" class="btn btn--secondary" @click="downloadCv">Download</button>
    </div>

    <div v-if="outcome && revealed" class="card stack-sm">
      <h3 class="section-title">Client feedback (internal)</h3>
      <p>Ratings: fit {{ outcome.ratings.fit }}, skills {{ outcome.ratings.skills }}, communication {{ outcome.ratings.communication }}</p>
      <p v-if="outcome.reasonCode">Reason: {{ outcome.reasonCode }}</p>
      <p>{{ outcome.comment }}</p>
    </div>

    <div v-if="revealed && invite?.status === 'Accepted'" class="card stack-md">
      <button type="button" class="btn btn--primary" @click="outcomeOpen = true">Record outcome</button>
    </div>

    <UiModal v-model:open="inviteOpen" title="Send interview invite">
      <p>Cost: 1 credit · Balance: {{ balance }}</p>
      <label class="stack-sm"><span>Message</span><textarea v-model="inviteMessage" class="textarea" /></label>
      <label class="stack-sm"><span>Proposed times (comma separated)</span><input v-model="inviteTimes" class="input"></label>
      <p v-if="balance < 1" class="meta">You need {{ needCredits }} more credits. <NuxtLink to="/client/wallet">Wallet</NuxtLink></p>
      <template #footer>
        <button type="button" class="btn btn--secondary" @click="inviteOpen = false">Cancel</button>
        <button type="button" class="btn btn--primary" :disabled="balance < 1" @click="sendInvite">Confirm invite</button>
      </template>
    </UiModal>

    <UiModal v-model:open="recordingOpen" title="Interview recording">
      <p>{{ interview?.recordingLink }}</p>
      <p class="meta">View recorded for this demo.</p>
    </UiModal>

    <UiModal v-model:open="passOpen" title="Pass candidate">
      <textarea v-model="passReason" class="textarea" placeholder="Optional reason" />
      <template #footer>
        <button type="button" class="btn btn--secondary" @click="passOpen = false">Cancel</button>
        <button type="button" class="btn btn--danger" @click="pass">Pass</button>
      </template>
    </UiModal>

    <UiModal v-model:open="outcomeOpen" title="Record outcome">
      <select v-model="outcomeForm.result" class="select">
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>
      <label>Fit <input v-model.number="outcomeForm.fit" type="number" min="1" max="5" class="input"></label>
      <label>Skills <input v-model.number="outcomeForm.skills" type="number" min="1" max="5" class="input"></label>
      <label>Communication <input v-model.number="outcomeForm.communication" type="number" min="1" max="5" class="input"></label>
      <textarea v-model="outcomeForm.comment" class="textarea" placeholder="Comment" />
      <input v-if="outcomeForm.result === 'Rejected'" v-model="outcomeForm.reasonCode" class="input" placeholder="Reason code">
      <template #footer>
        <button type="button" class="btn btn--primary" @click="saveOutcome">Save</button>
      </template>
    </UiModal>
  </div>
</template>

<style scoped>
.cv-panel {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius-btn);
  padding: 1rem;
  overflow: hidden;
}
.cv-panel.watermark .wm {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-18deg);
  font-size: 1rem;
  color: rgba(94, 106, 120, 0.35);
  pointer-events: none;
  text-align: center;
  padding: 1rem;
}
</style>
