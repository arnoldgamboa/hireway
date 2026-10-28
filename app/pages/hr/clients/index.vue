<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
</script>

<template>
  <div>
    <PageHeader title="Clients" />
    <div class="card-grid">
      <NuxtLink v-for="o in store.data.orgs" :key="o.id" :to="`/hr/clients/${o.id}`" class="card" style="color: inherit">
        <h2 class="section-title">{{ o.name }}</h2>
        <p class="meta">{{ o.city }}</p>
        <p>Balance: {{ o.balance }} credits</p>
      </NuxtLink>
    </div>
  </div>
</template>
