<script setup lang="ts">
definePageMeta({ layout: 'public' })
</script>

<template>
  <StaticPage
    title="Privacy notice"
    :paragraphs="[
      'Hireway Agency is the personal information controller for applicant data processed in this platform.',
      'Clients see an anonymized profile until an applicant accepts an interview invitation and consents to reveal identity.',
      'Questions or data subject requests: dpo@hireway.example',
    ]"
  />
</template>
