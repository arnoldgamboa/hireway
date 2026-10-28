<script setup lang="ts">
definePageMeta({ layout: 'public' })
</script>

<template>
  <StaticPage
    title="About Hireway"
    :paragraphs="[
      'Hireway helps a single HR agency run hiring end to end for clients and applicants.',
      'The agency screens and interviews candidates, shares anonymized profiles, and coordinates client interviews.',
      'This demo uses seeded data only — there is no live backend.',
    ]"
  />
</template>
