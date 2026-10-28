<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const jobId = computed(() => String(route.params.id))
const job = computed(() => store.jobById(jobId.value))
const orgId = computed(() => store.ui.clientOrgId)

const recs = computed(() => {
  if (!job.value) return []
  return store.data.recommendations
    .filter(r => r.status === 'shared')
    .filter((r) => {
      const app = store.applicationById(r.applicationId)
      return app?.jobId === jobId.value
    })
    .map((r) => {
      const app = store.applicationById(r.applicationId)!
      const applicant = store.applicantById(app.applicantId)!
      const invite = store.data.invites.find(i => i.recommendationId === r.id)
      const revealed = store.hasReveal(app.applicantId, orgId.value)
      const interview = store.data.interviews.find(i => i.applicationId === app.id)
      const avg = interview?.scorecard
        ? (interview.scorecard.communication + interview.scorecard.reliability + interview.scorecard.roleFit) / 3
        : null
      return { r, app, applicant, invite, revealed, avg }
    })
})

const comments = computed(() => store.data.jobComments[jobId.value] || [])

function passRec (recId: string) {
  const reason = prompt('Optional reason')
  store.passRecommendation(recId, reason || undefined)
  toast.show('Candidate passed')
}
</script>

<template>
  <div v-if="!job || job.orgId !== orgId" class="card">Job not found for this client.</div>
  <div v-else>
    <PageHeader :title="job.title" subtitle="Recommendations inbox">
      <template #actions>
        <NuxtLink to="/client" class="btn btn--secondary">All jobs</NuxtLink>
      </template>
    </PageHeader>
    <div v-if="job.status === 'Paused'" class="banner banner--warn">Paused. Current candidates stay available.</div>
    <div v-if="job.status === 'Closed'" class="banner banner--info">Closed — {{ job.closeReason || 'filled' }}. Inbox remains readable.</div>
    <div v-if="!recs.length" class="card meta">No recommended candidates yet.</div>
    <div v-else class="card-grid">
      <div v-for="item in recs" :key="item.r.id" class="card stack-sm">
        <div class="row">
          <strong>{{ item.revealed ? item.applicant.name : aliasTitle(item.r.alias) }}</strong>
          <StatusBadge v-if="item.revealed" status="Revealed" tone="done" />
        </div>
        <p class="meta">{{ item.applicant.headline }} · {{ item.applicant.yearsExperience }} yrs</p>
        <p>{{ item.applicant.skills.slice(0, 3).join(' · ') }}</p>
        <p v-if="item.avg" class="meta">HR rating {{ item.avg.toFixed(1) }}/5</p>
        <p>{{ item.applicant.expectedSalary }} · {{ item.applicant.availability }}</p>
        <p v-if="item.invite" class="meta">Invite {{ item.invite.status }}</p>
        <div class="row">
          <NuxtLink :to="`/client/jobs/${jobId}/candidates/${item.r.id}`" class="btn btn--secondary">Open dossier</NuxtLink>
          <NuxtLink
            v-if="!item.invite && item.app.status === 'Recommended'"
            :to="`/client/jobs/${jobId}/candidates/${item.r.id}`"
            class="btn btn--primary"
          >Invite</NuxtLink>
          <button v-if="!item.invite" type="button" class="btn btn--danger" @click="passRec(item.r.id)">Pass</button>
        </div>
      </div>
    </div>
    <div v-if="comments.length" class="card stack-md" style="margin-top: 1rem">
      <h2 class="section-title">Comments with HR</h2>
      <div v-for="c in comments" :key="c.id">
        <strong>{{ c.authorName }}</strong> <span class="meta">{{ c.createdAt }}</span>
        <p>{{ c.body }}</p>
      </div>
    </div>
  </div>
</template>
