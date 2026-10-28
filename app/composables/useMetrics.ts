import type { Application } from '~/data/types'

export function jobApplicationStats (jobId: string, applications: Application[]) {
  const apps = applications.filter(a => a.jobId === jobId)
  const applied = apps.filter(a => a.status !== 'Withdrawn').length
  const hrInterviewed = apps.filter(a =>
    !['Withdrawn', 'Not progressed', 'Submitted', 'Screening', 'Shortlisted'].includes(a.status) ||
    ['HR interviewed', 'Recommended', 'Invited', 'Accepted invite', 'Client interviewing', 'Client accepted', 'Client rejected', 'Hired', 'Declined invite'].includes(a.status),
  ).length
  // Simpler per spec:
  const hrInt = apps.filter(a => {
    const order = ['HR interviewed', 'Recommended', 'Invited', 'Accepted invite', 'Client interviewing', 'Client accepted', 'Client rejected', 'Hired', 'Declined invite']
    return order.includes(a.status)
  }).length
  return {
    applied,
    hrInterviewed: hrInt,
    recommended: apps.filter(a => ['Recommended', 'Invited', 'Accepted invite', 'Client interviewing', 'Client accepted', 'Client rejected', 'Hired', 'Declined invite'].includes(a.status)).length,
    invited: apps.filter(a => ['Invited', 'Accepted invite', 'Client interviewing', 'Client accepted', 'Client rejected', 'Hired', 'Declined invite'].includes(a.status)).length,
    accepted: apps.filter(a => storeInviteAccepted(apps, a.id)).length,
    hired: apps.filter(a => a.status === 'Hired').length,
  }
}

function storeInviteAccepted (apps: Application[], appId: string) {
  const app = apps.find(a => a.id === appId)
  if (!app) return false
  return ['Accepted invite', 'Client interviewing', 'Client accepted', 'Client rejected', 'Hired'].includes(app.status)
}

export function businessDaysSince (iso: string, today = '2026-10-28') {
  const start = new Date(iso)
  const end = new Date(today)
  let days = 0
  const cur = new Date(start)
  while (cur < end) {
    cur.setDate(cur.getDate() + 1)
    const dow = cur.getDay()
    if (dow !== 0 && dow !== 6) days++
  }
  return days
}
