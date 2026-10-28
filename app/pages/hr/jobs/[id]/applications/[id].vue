<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const app = computed(() => store.applicationById(String(route.params.id)))
const applicant = computed(() => app.value ? store.applicantById(app.value.applicantId) : undefined)
const job = computed(() => app.value ? store.jobById(app.value.jobId) : undefined)
const rec = computed(() => app.value ? store.recForApp(app.value.id) : undefined)
const invite = computed(() => app.value ? store.inviteForApp(app.value.id) : undefined)
const interview = computed(() => store.data.interviews.find(i => i.applicationId === app.value?.id))
const orgId = computed(() => job.value?.orgId ?? '')
const org = computed(() => (orgId.value ? store.orgById(orgId.value) : undefined))

const viewAsClient = ref(false)

const clientView = useClientCandidatePresentation(applicant, rec, orgId)

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

const headerTitle = computed(() => {
  if (viewAsClient.value && rec.value) return clientView.displayTitle.value
  return applicant.value?.name || ''
})
</script>

<template>
  <div v-if="!app || !applicant || !job" class="card">Not found</div>
  <div v-else>
    <PageHeader :title="headerTitle" :subtitle="applicant.headline">
      <template #actions>
        <template v-if="!viewAsClient">
          <select class="select" :value="app.status" @change="store.setApplicationStatus(app.id, ($event.target as HTMLSelectElement).value as any)">
            <option v-for="s in ['Submitted','Screening','Recommended','Invited','Hired','Not progressed']" :key="s" :value="s">{{ s }}</option>
          </select>
        </template>
        <button v-if="rec" type="button" class="btn btn--secondary" @click="viewAsClient = !viewAsClient">
          {{ viewAsClient ? 'Back to HR view' : 'View as client' }}
        </button>
      </template>
    </PageHeader>

    <div v-if="viewAsClient && rec" class="banner banner--info">
      Client preview — {{ org?.name }}
    </div>

    <!-- Client dossier preview (matches client candidate view rules) -->
    <div v-if="viewAsClient && rec" class="card stack-md">
      <StatusBadge v-if="clientView.revealed.value" status="Revealed" tone="done" />
      <p v-if="clientView.showContact.value">{{ applicant.email }} · {{ applicant.mobile }}</p>
      <p v-if="clientView.showContact.value">
        <a :href="applicant.linkedInUrl">LinkedIn</a> · <a :href="applicant.portfolioUrl">Portfolio</a>
      </p>
      <p class="meta">{{ applicant.city }} · {{ applicant.workSetup }}</p>
      <p>{{ applicant.summary }}</p>
      <p><strong>Experience:</strong> {{ applicant.experience.title }} at {{ applicant.experience.employer }}</p>
      <p><strong>Education:</strong> {{ applicant.education.degree }}, {{ applicant.education.school }}</p>
      <p>{{ applicant.skills.join(' · ') }}</p>
      <p>{{ applicant.expectedSalary }} · {{ applicant.availability }}</p>
      <p>{{ rec.shareableNotes }}</p>
      <div v-if="interview?.scorecard" class="meta">
        Scorecard — Communication {{ interview.scorecard.communication }}, Reliability {{ interview.scorecard.reliability }}, Role fit {{ interview.scorecard.roleFit }}
      </div>
      <div class="cv-panel watermark">
        <h3 class="section-title">{{ clientView.revealed.value ? 'Original CV' : 'Redacted CV' }}</h3>
        <p v-for="n in 8" :key="n" class="meta">CV line {{ n }} — placeholder content for demo.</p>
      </div>
    </div>

    <!-- Full HR view -->
    <template v-else>
      <div class="card stack-md">
        <p>{{ applicant.email }} · {{ applicant.mobile }}</p>
        <p>{{ applicant.expectedSalary }} · {{ applicant.city }}</p>
        <p v-if="applicant.linkedInUrl" class="meta"><a :href="applicant.linkedInUrl">LinkedIn</a> · <a :href="applicant.portfolioUrl">Portfolio</a></p>
        <div v-if="rec">
          <h3 class="section-title">Recommendation</h3>
          <p>Alias {{ rec.alias }} — {{ rec.shareableNotes }}</p>
          <p v-if="rec.internalNotes" class="banner" style="background: var(--warn-tint)"><strong>Internal</strong> {{ rec.internalNotes }}</p>
        </div>
        <div v-if="invite">
          <h3 class="section-title">Invite</h3>
          <StatusBadge :status="invite.status" />
          <div class="row">
            <button type="button" class="btn btn--secondary" @click="nudge">Nudge</button>
            <button v-if="invite.status === 'Sent'" type="button" class="btn btn--danger" @click="voidInvite">Void</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.cv-panel {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius-btn);
  padding: 1rem;
}
</style>
