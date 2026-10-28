<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()
const comment = ref('')

const req = computed(() => store.data.requests.find(r => r.id === route.params.id))

onMounted(() => {
  if (req.value) store.openRequestReview(req.value.id)
})

function addComment () {
  if (!req.value || !comment.value) return
  store.appendRequestComment(req.value.id, comment.value)
  comment.value = ''
}

function requestChanges () {
  if (!req.value || !comment.value) {
    toast.show('Comment required', 'danger')
    return
  }
  store.setRequestStatus(req.value.id, 'Changes requested', comment.value)
  comment.value = ''
}

function reject () {
  const reason = prompt('Rejection reason')
  if (reason && req.value) store.setRequestStatus(req.value.id, 'Rejected', reason)
}

function approve () {
  if (req.value) {
    store.approveRequest(req.value.id)
    toast.show('Request approved')
  }
}
</script>

<template>
  <div v-if="!req" class="card">Not found</div>
  <div v-else>
    <PageHeader :title="req.title">
      <template #actions><StatusBadge :status="req.status" /></template>
    </PageHeader>
    <div class="card stack-md">
      <p>{{ req.summary }}</p>
      <div v-for="c in req.comments" :key="c.id"><strong>{{ c.authorName }}</strong> — {{ c.body }}</div>
      <textarea v-model="comment" class="textarea" placeholder="Comment" />
      <div class="row">
        <button type="button" class="btn btn--secondary" @click="addComment">Comment</button>
        <button type="button" class="btn btn--secondary" @click="requestChanges">Request changes</button>
        <button type="button" class="btn btn--danger" @click="reject">Reject</button>
        <button type="button" class="btn btn--primary" @click="approve">Approve</button>
      </div>
    </div>
  </div>
</template>
