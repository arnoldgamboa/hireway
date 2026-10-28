<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const req = computed(() => store.data.requests.find(r => r.id === route.params.id))
</script>

<template>
  <div v-if="!req" class="card">Request not found</div>
  <div v-else>
    <PageHeader :title="req.title">
      <template #actions><StatusBadge :status="req.status" /></template>
    </PageHeader>
    <div class="card stack-md">
      <p>{{ req.summary }}</p>
      <pre class="meta">{{ JSON.stringify(req.fields, null, 2) }}</pre>
      <div v-for="c in req.comments" :key="c.id">
        <strong>{{ c.authorName }}</strong> <span class="meta">{{ c.createdAt }}</span>
        <p>{{ c.body }}</p>
      </div>
      <button v-if="req.status === 'Changes requested'" type="button" class="btn btn--primary" @click="req.status = 'Submitted'; store.persist()">Resubmit</button>
    </div>
  </div>
</template>
