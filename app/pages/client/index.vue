<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const orgId = computed(() => store.ui.clientOrgId)
const org = computed(() => store.orgById(orgId.value)!)

const jobs = computed(() =>
  store.data.jobs.filter(j => j.orgId === orgId.value && ['Published', 'Paused', 'Closed'].includes(j.status.replace(', filled', ''))),
)

function stats (jobId: string) {
  return jobApplicationStats(jobId, store.data.applications)
}

const lowBalance = computed(() => org.value.balance < org.value.threshold)
</script>

<template>
  <div>
    <PageHeader title="Jobs" :subtitle="org.name">
      <template #actions>
        <span class="meta">Balance <strong style="font-variant-numeric: tabular-nums">{{ org.balance }}</strong> credits</span>
        <NuxtLink to="/client/wallet" class="btn btn--secondary">Wallet</NuxtLink>
      </template>
    </PageHeader>
    <div v-if="lowBalance" class="banner banner--warn">Credit balance is below your threshold ({{ org.threshold }} credits).</div>
    <div class="card-grid">
      <NuxtLink v-for="job in jobs" :key="job.id" :to="`/client/jobs/${job.id}`" class="card">
        <div class="row" style="justify-content: space-between">
          <h2 class="section-title">{{ job.title }}</h2>
          <StatusBadge :status="job.status" />
        </div>
        <div class="tiles">
          <div v-for="(val, key) in stats(job.id)" :key="key" class="tile">
            <span class="meta">{{ key }}</span>
            <strong>{{ val }}</strong>
          </div>
        </div>
      </NuxtLink>
    </div>
    <NuxtLink to="/client/requests" class="btn btn--secondary" style="margin-top: 1rem">View requests</NuxtLink>
  </div>
</template>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  text-transform: capitalize;
}
.tile strong { display: block; font-variant-numeric: tabular-nums; }
</style>
