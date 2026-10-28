<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <Transition name="toast">
    <div v-if="toast.message.value" class="toast" :class="toast.variant.value === 'danger' ? 'toast--danger' : ''" role="status">
      {{ toast.message.value }}
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: var(--ink);
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-btn);
  box-shadow: var(--shadow-card);
  z-index: 1000;
  max-width: 24rem;
}

.toast--danger {
  background: var(--danger);
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}
</style>
