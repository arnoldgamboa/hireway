<script setup lang="ts">
definePageMeta({ layout: 'public' })
const props = defineProps<{ title: string; paragraphs: string[] }>()
</script>

<template>
  <div>
    <PageHeader :title="title" />
    <div class="card stack-md">
      <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
      <slot />
    </div>
  </div>
</template>
