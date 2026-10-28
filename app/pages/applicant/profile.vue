<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const toast = useToast()
const modalOpen = ref(false)

const applicant = computed({
  get: () => store.applicantById(store.ui.applicantId)!,
  set: () => {},
})

function save () {
  store.persist()
  toast.show('Profile saved')
}

function requestData () {
  store.requestApplicantData(store.ui.applicantId)
  modalOpen.value = false
  toast.show('Request received')
}

function addCv () {
  const name = prompt('CV file name')
  if (name) applicant.value.cvFiles.push({ name, isDefault: false })
}
</script>

<template>
  <div v-if="applicant">
    <PageHeader title="Profile">
      <template #actions>
        <button type="button" class="btn btn--primary" @click="save">Save</button>
      </template>
    </PageHeader>
    <form class="card stack-md form-grid form-grid--2" @submit.prevent="save">
      <label class="stack-sm"><span>Name</span><input v-model="applicant.name" class="input"></label>
      <label class="stack-sm"><span>Email</span><input v-model="applicant.email" class="input"></label>
      <label class="stack-sm"><span>Mobile</span><input v-model="applicant.mobile" class="input"></label>
      <label class="stack-sm"><span>City</span><input v-model="applicant.city" class="input"></label>
      <label class="stack-sm form-grid" style="grid-column: 1 / -1"><span>Headline</span><input v-model="applicant.headline" class="input"></label>
      <label class="stack-sm form-grid" style="grid-column: 1 / -1"><span>Summary</span><textarea v-model="applicant.summary" class="textarea" /></label>
      <label class="stack-sm"><span>Expected salary</span><input v-model="applicant.expectedSalary" class="input"></label>
      <label class="stack-sm"><span>Availability</span><input v-model="applicant.availability" class="input"></label>
      <label class="stack-sm"><span>Work setup</span><input v-model="applicant.workSetup" class="input"></label>
      <label class="stack-sm form-grid" style="grid-column: 1 / -1"><span>Skills (comma separated)</span>
        <input :value="applicant.skills.join(', ')" class="input" @change="applicant.skills = ($event.target as HTMLInputElement).value.split(',').map(s => s.trim())">
      </label>
      <fieldset class="form-grid form-grid--2" style="grid-column: 1 / -1">
        <legend class="section-title">Experience</legend>
        <input v-model="applicant.experience.title" class="input" placeholder="Title">
        <input v-model="applicant.experience.employer" class="input" placeholder="Employer">
        <input v-model="applicant.experience.start" class="input" placeholder="Start">
        <input v-model="applicant.experience.end" class="input" placeholder="End">
        <textarea v-model="applicant.experience.description" class="textarea" style="grid-column: 1 / -1" />
      </fieldset>
      <fieldset class="form-grid form-grid--2" style="grid-column: 1 / -1">
        <legend class="section-title">Education</legend>
        <input v-model="applicant.education.school" class="input">
        <input v-model="applicant.education.degree" class="input">
        <input v-model="applicant.education.year" class="input">
      </fieldset>
      <label class="stack-sm"><span>Portfolio URL</span><input v-model="applicant.portfolioUrl" class="input"></label>
      <label class="stack-sm"><span>LinkedIn URL</span><input v-model="applicant.linkedInUrl" class="input"></label>
      <label class="row"><input v-model="applicant.photoOnFile" type="checkbox"> Photo on file</label>
      <div class="avatar">{{ initials(applicant.name) }}</div>
      <div class="stack-sm" style="grid-column: 1 / -1">
        <span class="section-title">CV</span>
        <div v-for="cv in applicant.cvFiles" :key="cv.name" class="row">
          {{ cv.name }} <span v-if="cv.isDefault" class="badge badge--moving">Default</span>
        </div>
        <button type="button" class="btn btn--secondary" @click="addCv">Add CV</button>
      </div>
      <div style="grid-column: 1 / -1">
        <h3 class="section-title">Notifications</h3>
        <label class="row"><input type="checkbox" checked disabled> Critical email (locked on)</label>
        <label class="row"><input v-model="applicant.digestEmail" type="checkbox"> Daily digest email</label>
      </div>
      <button type="button" class="btn btn--secondary" @click="modalOpen = true">Request my data</button>
    </form>
    <UiModal v-model:open="modalOpen" title="Data subject request">
      <p>Submit a request to export or review your personal data.</p>
      <template #footer>
        <button type="button" class="btn btn--secondary" @click="modalOpen = false">Cancel</button>
        <button type="button" class="btn btn--primary" @click="requestData">Submit</button>
      </template>
    </UiModal>
  </div>
</template>

<style scoped>
.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--tint);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
</style>
