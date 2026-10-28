<script setup lang="ts">
import type { Interview } from '~/data/types'
import { DEMO_TODAY } from '~/data/seed'

definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const APPLICATION_STATUSES = [
  'Submitted', 'Screening', 'Shortlisted', 'HR interview scheduled', 'HR interviewed',
  'Not progressed', 'Recommended', 'Invited', 'Accepted invite', 'Client interviewing',
  'Client accepted', 'Client rejected', 'Hired', 'Withdrawn', 'Declined invite',
] as const

const app = computed(() => store.applicationById(String(route.params.id)))
const applicant = computed(() => app.value ? store.applicantById(app.value.applicantId) : undefined)
const job = computed(() => app.value ? store.jobById(app.value.jobId) : undefined)
const rec = computed(() => app.value ? store.recForApp(app.value.id) : undefined)
const invite = computed(() => app.value ? store.inviteForApp(app.value.id) : undefined)
const interview = computed(() => store.data.interviews.find(i => i.applicationId === app.value?.id))
const clientOutcome = computed(() => store.data.clientOutcomes.find(o => o.applicationId === app.value?.id))
const orgId = computed(() => job.value?.orgId ?? '')
const org = computed(() => (orgId.value ? store.orgById(orgId.value) : undefined))

const allApps = computed(() =>
  store.data.applications
    .filter(a => a.applicantId === applicant.value?.id)
    .map(a => ({ app: a, job: store.jobById(a.jobId) })),
)

const viewAsClient = ref(false)
const clientView = useClientCandidatePresentation(applicant, rec, orgId)

const interviewForm = reactive({
  scheduledAt: '',
  platform: 'Google Meet',
  link: '',
  interviewer: 'Hana Cruz',
  status: 'Scheduled' as Interview['status'],
  recordingLink: '',
  communication: 3,
  reliability: 3,
  roleFit: 3,
  shareableNotes: '',
  internalNotes: '',
})

watch(interview, (int) => {
  if (!int) return
  interviewForm.scheduledAt = int.scheduledAt.slice(0, 16)
  interviewForm.platform = int.platform
  interviewForm.link = int.link
  interviewForm.interviewer = int.interviewer
  interviewForm.status = int.status
  interviewForm.recordingLink = int.recordingLink || ''
  interviewForm.communication = int.scorecard?.communication ?? 3
  interviewForm.reliability = int.scorecard?.reliability ?? 3
  interviewForm.roleFit = int.scorecard?.roleFit ?? 3
  interviewForm.shareableNotes = int.shareableNotes || ''
  interviewForm.internalNotes = int.internalNotes || ''
}, { immediate: true })

function saveInterviewLog () {
  if (!app.value) return
  const patch: Partial<Interview> = {
    scheduledAt: interviewForm.scheduledAt.includes('T') ? `${interviewForm.scheduledAt}:00+08:00` : interviewForm.scheduledAt,
    platform: interviewForm.platform,
    link: interviewForm.link,
    interviewer: interviewForm.interviewer,
    status: interviewForm.status,
    shareableNotes: interviewForm.shareableNotes,
    internalNotes: interviewForm.internalNotes,
  }
  if (interviewForm.status === 'Completed') {
    patch.recordingLink = interviewForm.recordingLink
    patch.scorecard = {
      communication: interviewForm.communication,
      reliability: interviewForm.reliability,
      roleFit: interviewForm.roleFit,
    }
  }
  store.saveInterview(app.value.id, patch)
  toast.show('Interview saved')
}

const recommendOpen = ref(false)
const whySummary = ref('')
const shareableNotes = ref('')
const checkCv = ref(false)
const noCv = ref(false)
const noRecording = ref(false)
const recordingReviewed = ref(false)
const attestation = ref(false)
const piiOverrides = reactive<Record<string, string>>({})

watch(recommendOpen, (open) => {
  if (!open || !applicant.value) return
  whySummary.value = `${applicant.value.headline} for ${job.value?.title || 'this role'}.`
  shareableNotes.value = interview.value?.shareableNotes || applicant.value.summary
  Object.keys(piiOverrides).forEach(k => delete piiOverrides[k])
})

const piiFlags = computed(() =>
  scanPiiFlags(shareableNotes.value, applicant.value?.name || ''),
)

const piiClear = computed(() =>
  piiFlags.value.every(f => (piiOverrides[f.id] || '').trim().length > 0),
)

const canShareRecommend = computed(() => {
  if (!attestation.value) return false
  if (!checkCv.value && !noCv.value) return false
  if (!noRecording.value && !recordingReviewed.value) return false
  if (!piiClear.value) return false
  return whySummary.value.trim().length > 0
})

function shareRecommend () {
  if (!app.value || !canShareRecommend.value) {
    toast.show('Checklist incomplete', 'danger')
    return
  }
  if (store.shareRecommendation(app.value.id, {
    whySummary: whySummary.value,
    shareableNotes: shareableNotes.value,
    internalNotes: interviewForm.internalNotes,
  })) {
    recommendOpen.value = false
    toast.show('Recommendation shared')
  }
}

function nudge () {
  toast.show('Reminder queued')
}

function voidInvite () {
  const reason = prompt('Void reason')
  if (!invite.value || !reason) return
  store.refundInvite(invite.value)
  invite.value.status = 'Voided'
  invite.value.voidReason = reason
  store.persist()
}

function markHired () {
  const start = prompt('Start date (YYYY-MM-DD)', DEMO_TODAY)
  if (!start || !app.value) return
  store.markHired(app.value.id, start)
  toast.show('Marked hired')
}

function notHired () {
  const note = prompt('Terminal note')
  if (!note || !app.value) return
  store.notHiredAfterAccept(app.value.id, note)
  toast.show('Note saved')
}

const headerTitle = computed(() => {
  if (viewAsClient.value && rec.value) return clientView.displayTitle.value
  return applicant.value?.name || ''
})
</script>

<template>
  <div v-if="!app || !applicant || !job" class="card">Not found</div>
  <div v-else class="stack-md">
    <PageHeader :title="headerTitle" :subtitle="`${applicant.city} · ${applicant.headline}`">
      <template #actions>
        <template v-if="!viewAsClient">
          <select class="select status-select" :value="app.status" @change="store.setApplicationStatus(app.id, ($event.target as HTMLSelectElement).value as any)">
            <option v-for="s in APPLICATION_STATUSES" :key="s" :value="s">{{ s }}</option>
          </select>
        </template>
        <button v-if="rec" type="button" class="btn btn--secondary" @click="viewAsClient = !viewAsClient">
          {{ viewAsClient ? 'Back to HR view' : 'View as client' }}
        </button>
      </template>
    </PageHeader>

    <div v-if="!viewAsClient" class="card stack-sm">
      <p>{{ applicant.email }} · {{ applicant.mobile }}</p>
      <p>{{ applicant.expectedSalary }}</p>
      <p class="meta"><a :href="applicant.linkedInUrl">LinkedIn</a> · <a :href="applicant.portfolioUrl">Portfolio</a></p>
    </div>

    <div v-if="viewAsClient && rec" class="banner banner--info">Client preview — {{ org?.name }}</div>

    <div v-if="viewAsClient && rec" class="card stack-md">
      <StatusBadge v-if="clientView.revealed.value" status="Revealed" tone="done" />
      <p v-if="clientView.showContact.value">{{ applicant.email }} · {{ applicant.mobile }}</p>
      <p v-if="clientView.showContact.value">
        <a :href="applicant.linkedInUrl">LinkedIn</a> · <a :href="applicant.portfolioUrl">Portfolio</a>
      </p>
      <p class="meta">{{ applicant.city }}</p>
      <p>{{ applicant.summary }}</p>
      <p>{{ rec.shareableNotes }}</p>
      <div class="cv-panel">
        <h3 class="section-title">{{ clientView.revealed.value ? 'Original CV' : 'Redacted CV' }}</h3>
        <p v-for="n in 8" :key="n" class="meta">CV line {{ n }}</p>
      </div>
    </div>

    <template v-else>
      <div class="card stack-md">
        <h2 class="section-title">All applications</h2>
        <ul>
          <li v-for="row in allApps" :key="row.app.id">
            <NuxtLink :to="`/hr/jobs/${row.app.jobId}/applications/${row.app.id}`">
              {{ row.job?.title }} — {{ row.app.status }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="card stack-md">
        <h2 class="section-title">HR interview log</h2>
        <div class="form-grid form-grid--2">
          <label class="stack-sm"><span>Date & time</span><input v-model="interviewForm.scheduledAt" type="datetime-local" class="input"></label>
          <label class="stack-sm"><span>Platform</span>
            <select v-model="interviewForm.platform" class="select">
              <option>Google Meet</option><option>Zoom</option><option>phone</option><option>in person</option><option>other</option>
            </select>
          </label>
          <label class="stack-sm form-grid" style="grid-column: 1 / -1"><span>Meeting link</span><input v-model="interviewForm.link" class="input"></label>
          <label class="stack-sm"><span>Interviewer</span><input v-model="interviewForm.interviewer" class="input"></label>
          <label class="stack-sm"><span>Status</span>
            <select v-model="interviewForm.status" class="select">
              <option>Scheduled</option><option>Completed</option><option>No-show</option><option>Cancelled</option>
            </select>
          </label>
        </div>
        <template v-if="interviewForm.status === 'Completed'">
          <label class="stack-sm"><span>Recording link</span><input v-model="interviewForm.recordingLink" class="input"></label>
          <div class="row">
            <label>Communication <input v-model.number="interviewForm.communication" type="number" min="1" max="5" class="input" style="width:4rem"></label>
            <label>Reliability <input v-model.number="interviewForm.reliability" type="number" min="1" max="5" class="input" style="width:4rem"></label>
            <label>Role fit <input v-model.number="interviewForm.roleFit" type="number" min="1" max="5" class="input" style="width:4rem"></label>
          </div>
        </template>
        <label class="stack-sm"><span>Client-shareable notes</span><textarea v-model="interviewForm.shareableNotes" class="textarea" /></label>
        <label class="stack-sm"><span>Internal notes</span><textarea v-model="interviewForm.internalNotes" class="textarea internal" /></label>
        <button type="button" class="btn btn--primary" @click="saveInterviewLog">Save interview</button>
      </div>

      <div v-if="rec" class="card stack-md">
        <h2 class="section-title">Recommendation</h2>
        <p>Alias {{ rec.alias }} · {{ rec.whySummary }}</p>
        <p>{{ rec.shareableNotes }}</p>
        <p v-if="rec.internalNotes" class="internal-block"><strong>Internal</strong> {{ rec.internalNotes }}</p>
      </div>
      <div v-else class="card stack-md">
        <h2 class="section-title">Recommend to client</h2>
        <button type="button" class="btn btn--primary" @click="recommendOpen = true">Recommend</button>
      </div>

      <div v-if="invite" class="card stack-md">
        <h2 class="section-title">Invite</h2>
        <StatusBadge :status="invite.status" />
        <div class="row">
          <button type="button" class="btn btn--secondary" @click="nudge">Nudge</button>
          <button v-if="invite.status === 'Sent'" type="button" class="btn btn--danger" @click="voidInvite">Void</button>
        </div>
      </div>

      <div v-if="clientOutcome" class="card stack-md">
        <h2 class="section-title">Client outcome</h2>
        <p>{{ clientOutcome.result }} — ratings {{ clientOutcome.ratings.fit }}/{{ clientOutcome.ratings.skills }}/{{ clientOutcome.ratings.communication }}</p>
        <p>{{ clientOutcome.comment }}</p>
        <div v-if="clientOutcome.result === 'Accepted' && app.status !== 'Hired'" class="row">
          <button type="button" class="btn btn--primary" @click="markHired">Mark hired</button>
          <button type="button" class="btn btn--secondary" @click="notHired">Not hired</button>
        </div>
      </div>
    </template>

    <UiModal v-model:open="recommendOpen" title="Share recommendation">
      <label class="stack-sm"><span>Why this candidate</span><textarea v-model="whySummary" class="textarea" /></label>
      <label class="stack-sm"><span>Client-shareable notes</span><textarea v-model="shareableNotes" class="textarea" /></label>
      <div v-if="piiFlags.length" class="stack-sm">
        <p class="section-title">PII scan</p>
        <div v-for="flag in piiFlags" :key="flag.id" class="stack-sm">
          <span class="meta">{{ flag.label }}</span>
          <input v-model="piiOverrides[flag.id]" class="input" placeholder="Override reason (required)">
        </div>
      </div>
      <label class="row"><input v-model="checkCv" type="checkbox"> Redacted CV attached</label>
      <label class="row"><input v-model="noCv" type="checkbox"> No CV</label>
      <label class="row"><input v-model="recordingReviewed" type="checkbox"> Recording reviewed</label>
      <label class="row"><input v-model="noRecording" type="checkbox"> No recording</label>
      <label class="row"><input v-model="attestation" type="checkbox"> I confirm this profile does not reveal the applicant's identity or contact details.</label>
      <template #footer>
        <button type="button" class="btn btn--secondary" @click="recommendOpen = false">Cancel</button>
        <button type="button" class="btn btn--primary" :disabled="!canShareRecommend" @click="shareRecommend">Share</button>
      </template>
    </UiModal>
  </div>
</template>

<style scoped>
.internal-block, .internal {
  background: var(--warn-tint);
  padding: 0.75rem;
  border-radius: var(--radius-btn);
}
.status-select { max-width: 14rem; }
.cv-panel {
  border: 1px solid var(--line);
  border-radius: var(--radius-btn);
  padding: 1rem;
}
</style>
