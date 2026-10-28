<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()

interface FollowUp { label: string; to: string; reason: string }

const items = computed(() => {
  const rows: FollowUp[] = []
  const sales = store.data.requests.find(r => r.id === 'req-sales')
  if (sales && ['Submitted', 'Under review'].includes(sales.status) && businessDaysSince(sales.submittedAt || '2026-10-23') >= 2) {
    rows.push({ label: 'Sales Associate · Harbor Logistics', to: '/hr/requests/req-sales', reason: 'Submitted 23 Oct 2026, past SLA' })
  }
  const felixInvite = store.data.invites.find(i => i.id === 'inv-felix-csr' && i.status === 'Sent')
  if (felixInvite) {
    rows.push({ label: 'Felix Navarro · invite unanswered', to: '/applicant/applications/app-felix-csr', reason: 'Sent 27 Oct, expires 3 Nov' })
  }
  const omar = store.applicationById('app-omar-csr')
  if (omar && omar.status === 'Accepted invite' && !store.data.clientInterviews.some(c => c.applicationId === 'app-omar-csr')) {
    rows.push({ label: 'Omar Santos · not scheduled', to: '/hr/jobs/job-csr/applications/app-omar-csr', reason: 'Accepted 20 Oct, no client interview' })
  }
  const caraInt = store.data.interviews.find(i => i.applicationId === 'app-cara-csr' && i.status === 'Scheduled')
  if (caraInt) {
    rows.push({ label: 'Cara Santos · HR interview', to: '/hr/jobs/job-csr/applications/app-cara-csr', reason: '30 Oct 2026, 10:00, Google Meet' })
  }
  const pkg = store.data.packageRequests.find(p => p.id === 'prq-lumen-1' && p.status === 'open')
  if (pkg) {
    rows.push({ label: 'Lumen package request', to: '/hr/clients/lumen', reason: '5 credits, ₱15,000, open since 25 Oct' })
  }
  store.data.invites.filter(i => i.status === 'Sent').forEach((inv) => {
    const app = store.applicationById(inv.applicationId)
    const applicant = app ? store.applicantById(app.applicantId) : null
    if (inv.id !== 'inv-felix-csr' && applicant) {
      rows.push({ label: `${applicant.name} · pending invite`, to: `/hr/jobs/${app?.jobId}/applications/${inv.applicationId}`, reason: 'Awaiting applicant response' })
    }
  })
  return rows
})
</script>

<template>
  <div>
    <PageHeader title="Follow-ups" subtitle="Hana's queue" />
    <div v-if="!items.length" class="card meta">Queue is clear.</div>
    <div v-else class="stack-md">
      <NuxtLink v-for="(item, idx) in items" :key="idx" :to="item.to" class="card" style="color: inherit">
        <strong>{{ item.label }}</strong>
        <p class="meta">{{ item.reason }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
