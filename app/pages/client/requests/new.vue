<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const router = useRouter()
const store = useDemoStore()
const orgId = computed(() => store.ui.clientOrgId)

const form = reactive({
  title: '',
  department: '',
  openings: 1,
  description: '',
  mustHave: '',
  niceToHave: '',
  experience: '',
  location: '',
  workSetup: 'On-site',
  employmentType: 'Full-time',
  salaryMin: '',
  salaryMax: '',
  discloseSalary: true,
  benefits: '',
  startDate: '',
  interviewProcess: '',
  confidential: false,
  attachment: '',
})

function save (status: 'Draft' | 'Submitted') {
  if (status === 'Submitted' && (!form.title || !form.description || !form.location || !form.openings)) return
  const id = `req-${Date.now()}`
  store.data.requests.push({
    id,
    title: form.title,
    orgId: orgId.value,
    status,
    submittedAt: status === 'Submitted' ? '2026-10-28' : undefined,
    summary: form.description.slice(0, 80),
    fields: { ...form },
    comments: [],
  })
  store.persist()
  router.push(`/client/requests/${id}`)
}
</script>

<template>
  <div>
    <PageHeader title="New request" />
    <form class="card form-grid form-grid--2 stack-md" @submit.prevent="save('Submitted')">
      <label class="stack-sm"><span>Title</span><input v-model="form.title" class="input" required></label>
      <label class="stack-sm"><span>Department</span><input v-model="form.department" class="input"></label>
      <label class="stack-sm"><span>Openings</span><input v-model.number="form.openings" type="number" class="input" required></label>
      <label class="stack-sm form-grid" style="grid-column: 1 / -1"><span>Description</span><textarea v-model="form.description" class="textarea" required /></label>
      <label class="stack-sm"><span>Location</span><input v-model="form.location" class="input" required></label>
      <label class="stack-sm"><span>Work setup</span><input v-model="form.workSetup" class="input"></label>
      <label class="stack-sm"><span>Employment type</span><input v-model="form.employmentType" class="input"></label>
      <div class="row" style="grid-column: 1 / -1">
        <button type="button" class="btn btn--secondary" @click="save('Draft')">Save draft</button>
        <button type="submit" class="btn btn--primary">Submit</button>
      </div>
    </form>
  </div>
</template>
