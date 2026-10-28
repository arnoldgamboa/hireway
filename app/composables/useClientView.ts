import type { Applicant, Recommendation } from '~/data/types'

/** Client-visible presentation for a recommended candidate (HR preview or client dossier). */
export function useClientCandidatePresentation (
  applicant: Ref<Applicant | undefined>,
  rec: Ref<Recommendation | undefined>,
  orgId: Ref<string | undefined>,
) {
  const store = useDemoStore()

  const revealed = computed(() => {
    const a = applicant.value
    const o = orgId.value
    if (!a || !o) return false
    return store.hasReveal(a.id, o)
  })

  const displayTitle = computed(() => {
    const a = applicant.value
    const r = rec.value
    if (!a) return ''
    if (revealed.value) return a.name
    return r ? aliasTitle(r.alias) : a.name
  })

  const showContact = computed(() => revealed.value)
  const showInternalNotes = computed(() => false)

  return { revealed, displayTitle, showContact, showInternalNotes }
}

export function scanPiiFlags (text: string, applicantName: string) {
  const flags: { id: string; label: string }[] = []
  if (applicantName && text.toLowerCase().includes(applicantName.toLowerCase())) {
    flags.push({ id: 'name', label: 'Applicant name detected' })
  }
  if (/[\w.-]+@[\w.-]+\.\w+/.test(text)) {
    flags.push({ id: 'email', label: 'Email pattern detected' })
  }
  if (/(\+63|09)\d/.test(text.replace(/\s/g, ''))) {
    flags.push({ id: 'mobile', label: 'PH mobile pattern detected' })
  }
  if (/https?:\/\//.test(text)) {
    flags.push({ id: 'url', label: 'URL detected' })
  }
  return flags
}

export function generateAlias () {
  const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  let suffix = ''
  for (let i = 0; i < 4; i++) suffix += chars[Math.floor(Math.random() * chars.length)]
  return `HW-${suffix}`
}
