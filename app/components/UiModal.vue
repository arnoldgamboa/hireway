<script setup lang="ts">
const open = defineModel<boolean>('open', { default: false })
defineProps<{ title: string }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-scrim" @click.self="open = false; emit('close')">
      <div class="modal card" role="dialog" :aria-label="title">
        <h2 class="section-title">{{ title }}</h2>
        <slot />
        <div v-if="$slots.footer" class="footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-scrim {
  position: fixed;
  inset: 0;
  background: rgba(28, 36, 48, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 900;
}

.modal {
  width: min(100%, 32rem);
  max-height: 90vh;
  overflow: auto;
}

.footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>
