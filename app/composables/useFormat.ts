import type { Application, ApplicationStatus } from '~/data/types'

export function formatPht (iso: string) {
  const d = new Date(iso.includes('T') ? iso : `${iso}T12:00:00+08:00`)
  return d.toLocaleString('en-GB', {
    timeZone: 'Asia/Manila',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: iso.includes('T') ? '2-digit' : undefined,
    minute: iso.includes('T') ? '2-digit' : undefined,
    hour12: false,
  }).replace(',', ',') + (iso.includes('T') ? '' : '')
}

export function clientDisplayName (orgId: string, confidential: boolean, hasInvite: boolean, store: ReturnType<typeof useDemoStore>) {
  const org = store.orgById(orgId)
  if (!org) return 'Client'
  if (confidential && !hasInvite) return 'Confidential client'
  return org.name
}

export function applicantFacingStatus (
  app: Application,
  jobOrgId: string,
  confidential: boolean,
  store: ReturnType<typeof useDemoStore>,
): string {
  const invite = store.inviteForApp(app.id)
  const org = store.orgById(jobOrgId)
  const clientName = org?.name || 'Client'
  const status = app.status
  const map: Partial<Record<ApplicationStatus, string>> = {
    Submitted: 'Application received',
    Screening: 'Under review',
    Shortlisted: 'Interview with Hireway',
    'HR interview scheduled': 'Interview with Hireway',
    'HR interviewed': 'Interview completed',
    'Not progressed': 'Not moving forward',
    Recommended: 'Under review',
    Invited: 'You have an interview invitation',
    'Accepted invite': `Interview with ${clientName}`,
    'Client interviewing': `Interview with ${clientName}`,
    'Client accepted': `Good news: ${clientName} wants to move forward`,
    'Client rejected': 'Not moving forward',
    Hired: `Good news: ${clientName} wants to move forward`,
    Withdrawn: 'Withdrawn',
    'Declined invite': 'You declined this invitation',
  }
  let line = map[status] || status
  if (status === 'HR interview scheduled') {
    const interview = useDemoStore().data.interviews.find(i => i.applicationId === app.id)
    if (interview) line += ` — ${formatPht(interview.scheduledAt)} PHT`
  }
  if (confidential && !invite && ['Submitted', 'Screening', 'Shortlisted', 'HR interview scheduled', 'HR interviewed', 'Recommended', 'Not progressed'].includes(status)) {
    /* list view uses client name helper separately */
  }
  return line
}

export function initials (name: string) {
  return name.split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase()
}

export function applicantStatusLabel (status: string) {
  if (status === 'Recommended') return 'Under review'
  return status
}

export function formatSalary (job: { salaryDisclosed: boolean; salaryMin?: number; salaryMax?: number }) {
  if (!job.salaryDisclosed || (!job.salaryMin && !job.salaryMax)) return 'Salary not disclosed'
  const fmt = (n: number) => `₱${n.toLocaleString('en-PH')}`
  if (job.salaryMin && job.salaryMax) return `${fmt(job.salaryMin)}–${fmt(job.salaryMax)}`
  return fmt(job.salaryMin || job.salaryMax || 0)
}

export function aliasTitle (alias: string) {
  return `Candidate ${alias}`
}
