<script setup lang="ts">
definePageMeta({ layout: 'public' })
const toast = useToast()
const email = ref('')
const message = ref('')
function submit () {
  toast.show('Request received')
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div>
    <PageHeader title="Contact" />
    <div class="card stack-md">
      <p>Reach the Hireway team for employer onboarding or applicant support.</p>
      <form class="stack-md" @submit.prevent="submit">
        <input v-model="email" class="input" type="email" required placeholder="Email">
        <textarea v-model="message" class="textarea" required placeholder="Message" />
        <button type="submit" class="btn btn--primary">Send</button>
      </form>
    </div>
  </div>
</template>
