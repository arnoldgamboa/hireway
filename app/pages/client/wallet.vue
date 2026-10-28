<script setup lang="ts">
definePageMeta({ layout: 'portal' })
const store = useDemoStore()
const toast = useToast()
const orgId = computed(() => store.ui.clientOrgId)
const org = computed(() => store.orgById(orgId.value)!)

const ledger = computed(() =>
  store.data.ledger.filter(l => l.orgId === orgId.value).sort((a, b) => b.when.localeCompare(a.when)),
)

const atStake = computed(() => store.creditsAtStake(orgId.value))
const packages = [
  { credits: 5, price: 15000 },
  { credits: 10, price: 28000 },
  { credits: 25, price: 60000 },
]

function requestPackage (credits: number, price: number) {
  store.requestPackage(orgId.value, credits, price)
  toast.show('Package requested')
}
</script>

<template>
  <div>
    <PageHeader title="Wallet" :subtitle="org.name" />
    <div v-if="org.balance < org.threshold" class="banner banner--warn">Balance is below threshold ({{ org.threshold }} credits).</div>
    <div class="card row" style="justify-content: space-between">
      <div>
        <p class="meta">Available balance</p>
        <p style="font-size: 1.25rem; font-weight: 600; font-variant-numeric: tabular-nums">{{ org.balance }} credits</p>
      </div>
      <div>
        <p class="meta">Credits at stake</p>
        <p style="font-weight: 600">{{ atStake }}</p>
      </div>
    </div>
    <div class="card stack-md" style="margin-top: 1rem">
      <h2 class="section-title">Request a package (VAT-inclusive)</h2>
      <div class="row">
        <button v-for="p in packages" :key="p.credits" type="button" class="btn btn--secondary" @click="requestPackage(p.credits, p.price)">
          {{ p.credits }} credits · ₱{{ p.price.toLocaleString() }}
        </button>
      </div>
    </div>
    <div class="card" style="margin-top: 1rem">
      <h2 class="section-title">Ledger</h2>
      <div v-if="!ledger.length" class="meta">No credit activity yet.</div>
      <div v-else class="table-wrap">
        <table class="data">
          <thead>
            <tr><th>Date</th><th>Type</th><th>Amount</th><th>Balance</th><th>Note</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in ledger" :key="row.id">
              <td>{{ formatPht(row.when) }}</td>
              <td>{{ row.type }}</td>
              <td>{{ row.amount > 0 ? '+' : '' }}{{ row.amount }}</td>
              <td>{{ row.balanceAfter }}</td>
              <td>{{ row.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
