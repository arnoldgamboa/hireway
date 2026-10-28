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

const viewAsClient = ref(false)

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
</script>

<template>
  <div v-if="!app || !applicant || !job" class="card">Not found</div>
  <div v-else>
    <PageHeader :title="applicant.name" :subtitle="applicant.headline">
      <template #actions>
        <select class="select" :value="app.status" @change="store.setApplicationStatus(app.id, ($event.target as HTMLSelectElement).value as any)">
          <option v-for="s in ['Submitted','Screening','Recommended','Invited','Hired','Not progressed']" :key="s" :value="s">{{ s }}</option>
        </select>
        <button v-if="rec" type="button" class="btn btn--secondary" @click="viewAsClient = !viewAsClient">View as client</button>
      </template>
    </PageHeader>
    <div v-if="viewAsClient && rec" class="banner banner--info">Preview for {{ store.orgById(job.orgId)?.name }}</div>
    <div class="card stack-md">
      <p>{{ applicant.email }} · {{ applicant.mobile }}</p>
      <p>{{ applicant.expectedSalary }} · {{ applicant.city }}</p>
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
  </div>
</template>
