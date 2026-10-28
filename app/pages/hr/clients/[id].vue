<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const route = useRoute()
const store = useDemoStore()
const toast = useToast()

const org = computed(() => store.orgById(String(route.params.id)))
const ledger = computed(() => store.data.ledger.filter(l => l.orgId === org.value?.id).sort((a, b) => b.when.localeCompare(a.when)))
const packages = computed(() => store.data.packageRequests.filter(p => p.orgId === org.value?.id))

const grantOpen = ref(false)
const amount = ref(5)
const type = ref<'purchase' | 'bonus' | 'adjustment'>('purchase')
const reason = ref('Package fulfillment')
const invoice = ref('INV-DEMO')

function grant () {
  if (!org.value) return
  if (type.value === 'purchase' && !invoice.value) {
    toast.show('Invoice reference required', 'danger')
    return
  }
  store.grantCredits({
    orgId: org.value.id,
    amount: amount.value,
    type: type.value,
    reason: reason.value,
    invoiceRef: invoice.value,
  })
  grantOpen.value = false
  toast.show('Credits granted')
}
</script>

<template>
  <div v-if="!org" class="card">Client not found</div>
  <div v-else>
    <PageHeader :title="org.name" :subtitle="`${org.city} · Balance ${org.balance} credits`">
      <template #actions>
        <button type="button" class="btn btn--primary" @click="grantOpen = true">Grant credits</button>
      </template>
    </PageHeader>
    <div v-for="p in packages.filter(x => x.status === 'open')" :key="p.id" class="banner banner--warn">
      Open package: {{ p.credits }} credits · ₱{{ p.pricePhp.toLocaleString() }} · requested {{ p.requestedAt }}
    </div>
    <div class="card table-wrap">
      <table class="data">
        <thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Balance</th><th>Note</th></tr></thead>
        <tbody>
          <tr v-for="row in ledger" :key="row.id">
            <td>{{ row.when }}</td><td>{{ row.type }}</td><td>{{ row.amount }}</td><td>{{ row.balanceAfter }}</td><td>{{ row.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <UiModal v-model:open="grantOpen" title="Grant credits">
      <label class="stack-sm">Amount <input v-model.number="amount" type="number" class="input"></label>
      <select v-model="type" class="select"><option value="purchase">purchase</option><option value="bonus">bonus</option><option value="adjustment">adjustment</option></select>
      <input v-model="reason" class="input" placeholder="Reason">
      <input v-if="type === 'purchase'" v-model="invoice" class="input" placeholder="Invoice reference">
      <template #footer>
        <button type="button" class="btn btn--primary" @click="grant">Grant</button>
      </template>
    </UiModal>
  </div>
</template>
