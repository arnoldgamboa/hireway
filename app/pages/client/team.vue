<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const orgId = computed(() => store.ui.clientOrgId)
const members = computed(() => store.data.users.filter(u => u.orgId === orgId.value))

const name = ref('')
const email = ref('')

function invite () {
  if (!name.value || !email.value) return
  store.addTeammate(orgId.value, name.value, email.value)
  name.value = ''
  email.value = ''
}
</script>

<template>
  <div>
    <PageHeader title="Team" />
    <div class="card table-wrap">
      <table class="data">
        <thead><tr><th>Name</th><th>Role</th><th>Can spend credits</th></tr></thead>
        <tbody>
          <tr v-for="u in members" :key="u.id">
            <td>{{ u.name }}</td>
            <td>{{ u.role }}</td>
            <td><input type="checkbox" :checked="u.canSpend" @change="store.toggleTeamSpend(u.id, ($event.target as HTMLInputElement).checked)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <form class="card row" style="margin-top: 1rem" @submit.prevent="invite">
      <input v-model="name" class="input" placeholder="Name" required>
      <input v-model="email" class="input" type="email" placeholder="Email" required>
      <button type="submit" class="btn btn--primary">Invite teammate</button>
    </form>
  </div>
</template>
