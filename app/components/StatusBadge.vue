<script setup lang="ts">
const props = defineProps<{ status: string; tone?: 'quiet' | 'moving' | 'attention' | 'done' | 'stopped' }>()

const toneClass = computed(() => {
  if (props.tone) return props.tone
  const s = props.status.toLowerCase()
  if (['draft', 'submitted', 'screening', 'shortlisted', 'closed', 'archived'].some(x => s.includes(x))) return 'quiet'
  if (['rejected', 'declined', 'withdrawn', 'not progressed'].some(x => s.includes(x))) return 'stopped'
  if (['approved', 'published', 'hired', 'revealed', 'client accepted'].some(x => s.includes(x))) return 'done'
  if (['paused', 'changes requested', 'sla'].some(x => s.includes(x))) return 'attention'
  return 'moving'
})
</script>

<template>
  <span class="badge" :class="`badge--${toneClass}`">{{ status }}</span>
</template>

<style scoped>
.badge--quiet { background: var(--sky); color: var(--ink-soft); }
.badge--moving { background: var(--tint); color: var(--primary); }
.badge--attention { background: var(--warn-tint); color: var(--warn); }
.badge--done { background: var(--good-tint); color: var(--good); }
.badge--stopped { background: var(--danger-tint); color: var(--danger); }
</style>
