<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const orgId = computed(() => store.ui.clientOrgId)

const list = computed(() =>
  store.data.requests.filter(r => r.orgId === orgId.value && !['Published', 'Paused', 'Closed'].includes(r.status as string)),
)
</script>

<template>
  <div>
    <PageHeader title="Requests">
      <template #actions>
        <NuxtLink to="/client/requests/new" class="btn btn--primary">New request</NuxtLink>
      </template>
    </PageHeader>
    <div class="stack-md">
      <NuxtLink v-for="r in list" :key="r.id" :to="`/client/requests/${r.id}`" class="card row" style="justify-content: space-between; color: inherit">
        <div>
          <strong>{{ r.title }}</strong>
          <p class="meta">{{ r.summary }}</p>
        </div>
        <StatusBadge :status="r.status" />
      </NuxtLink>
    </div>
  </div>
</template>
