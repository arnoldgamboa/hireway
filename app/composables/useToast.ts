export const useToast = () => {
  const message = useState<string | null>('toast-message', () => null)
  const variant = useState<'default' | 'danger'>('toast-variant', () => 'default')
  let timer: ReturnType<typeof setTimeout> | null = null

  function show (text: string, kind: 'default' | 'danger' = 'default') {
    message.value = text
    variant.value = kind
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      message.value = null
    }, 3200)
  }

  return { message, variant, show }
}
