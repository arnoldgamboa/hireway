<script setup lang="ts">
definePageMeta({ layout: 'public' })
const toast = useToast()
const name = ref('')
const company = ref('')
const message = ref('')
function submit () {
  toast.show('Request received')
  name.value = ''
  company.value = ''
  message.value = ''
}
</script>

<template>
  <div>
    <PageHeader title="For employers" />
    <div class="card stack-md">
      <p>Hireway partners with companies that want vetted candidates without running full recruiting in-house.</p>
      <p>Clients purchase credits, review anonymized recommendations, and invite applicants to interviews.</p>
      <form class="stack-md" @submit.prevent="submit">
        <input v-model="name" class="input" required placeholder="Your name">
        <input v-model="company" class="input" required placeholder="Company">
        <textarea v-model="message" class="textarea" required placeholder="How can we help?" />
        <button type="submit" class="btn btn--primary">Send</button>
      </form>
    </div>
  </div>
</template>
