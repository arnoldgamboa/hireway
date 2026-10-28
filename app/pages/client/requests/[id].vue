<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const req = computed(() => store.data.requests.find(r => r.id === route.params.id))
const editable = computed(() => req.value?.status === 'Changes requested')

const form = reactive({
  department: '',
  location: '',
  workSetup: '',
  employmentType: '',
  openings: 1,
  description: '',
})

watch(req, (r) => {
  if (!r) return
  form.department = String(r.fields.department || '')
  form.location = String(r.fields.location || '')
  form.workSetup = String(r.fields.workSetup || 'On-site')
  form.employmentType = String(r.fields.employmentType || 'Full-time')
  form.openings = Number(r.fields.openings || 1)
  form.description = r.summary
}, { immediate: true })

function resubmit () {
  if (!req.value) return
  Object.assign(req.value.fields, {
    department: form.department,
    location: form.location,
    workSetup: form.workSetup,
    employmentType: form.employmentType,
    openings: form.openings,
  })
  req.value.summary = form.description
  req.value.status = 'Submitted'
  store.persist()
  toast.show('Request resubmitted')
}
</script>

<template>
  <div v-if="!req" class="card">Request not found</div>
  <div v-else>
    <PageHeader :title="req.title">
      <template #actions><StatusBadge :status="req.status" /></template>
    </PageHeader>
    <div class="card stack-md">
      <template v-if="editable">
        <form class="form-grid form-grid--2 stack-md" @submit.prevent="resubmit">
          <label class="stack-sm"><span>Department</span><input v-model="form.department" class="input"></label>
          <label class="stack-sm"><span>Location</span><input v-model="form.location" class="input" required></label>
          <label class="stack-sm"><span>Work setup</span><input v-model="form.workSetup" class="input"></label>
          <label class="stack-sm"><span>Employment type</span><input v-model="form.employmentType" class="input"></label>
          <label class="stack-sm"><span>Openings</span><input v-model.number="form.openings" type="number" class="input"></label>
          <label class="stack-sm form-grid" style="grid-column: 1 / -1"><span>Description</span><textarea v-model="form.description" class="textarea" /></label>
          <button type="submit" class="btn btn--primary">Resubmit</button>
        </form>
      </template>
      <template v-else>
        <dl class="fields">
          <div><dt>Department</dt><dd>{{ req.fields.department }}</dd></div>
          <div><dt>Location</dt><dd>{{ req.fields.location }}</dd></div>
          <div><dt>Work setup</dt><dd>{{ req.fields.workSetup }}</dd></div>
          <div><dt>Employment type</dt><dd>{{ req.fields.employmentType }}</dd></div>
          <div><dt>Openings</dt><dd>{{ req.fields.openings }}</dd></div>
        </dl>
        <p>{{ req.summary }}</p>
      </template>
      <div class="thread">
        <h3 class="section-title">Comments</h3>
        <div v-for="c in req.comments" :key="c.id">
          <strong>{{ c.authorName }}</strong> <span class="meta">{{ c.createdAt }}</span>
          <p>{{ c.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fields { display: grid; gap: 0.5rem; }
.fields dt { font-size: 0.8125rem; color: var(--ink-soft); }
.fields dd { margin: 0 0 0.5rem; }
.thread { border-top: 1px solid var(--line); padding-top: 1rem; }
</style>
