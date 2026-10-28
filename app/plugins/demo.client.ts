export default defineNuxtPlugin(() => {
  const store = useDemoStore()
  store.hydrate()
})
