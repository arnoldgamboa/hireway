import type { ApplicationStatus, DemoRole, Job } from '~/data/types'
import { createSeed, DEMO_TODAY, STORAGE_KEY } from '~/data/seed'
import type { DemoState } from '~/data/types'

export interface DemoUiState {
  role: DemoRole
  applicantId: string
  clientOrgId: string
  lastPaths: Partial<Record<DemoRole, string>>
}

export interface PersistedDemo {
  data: DemoState
  ui: DemoUiState
}

function defaultUi (): DemoUiState {
  return {
    role: 'public',
    applicantId: 'felix-navarro',
    clientOrgId: 'northwind',
    lastPaths: {},
  }
}

function generateAlias () {
  const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  let suffix = ''
  for (let i = 0; i < 4; i++) suffix += chars[Math.floor(Math.random() * chars.length)]
  return `HW-${suffix}`
}

function syncOrgBalances (state: DemoState) {
  for (const org of state.orgs) {
    const rows = state.ledger.filter(l => l.orgId === org.id).sort((a, b) => a.when.localeCompare(b.when))
    org.balance = rows.length ? rows[rows.length - 1].balanceAfter : 0
  }
}

export const useDemoStore = defineStore('demo', {
  state: (): PersistedDemo => ({
    data: createSeed(),
    ui: defaultUi(),
  }),

  getters: {
    orgById: state => (id: string) => state.data.orgs.find(o => o.id === id),
    jobById: state => (id: string) => state.data.jobs.find(j => j.id === id),
    jobBySlug: state => (slug: string) => state.data.jobs.find(j => j.slug === slug),
    applicantById: state => (id: string) => state.data.applicants.find(a => a.id === id),
    applicationById: state => (id: string) => state.data.applications.find(a => a.id === id),
    publishedJobs: state => state.data.jobs.filter(j => j.status === 'Published'),
    hasReveal: state => (applicantId: string, orgId: string) =>
      state.data.revealGrants.some(g => g.applicantId === applicantId && g.orgId === orgId),
    inviteForApp: state => (applicationId: string) =>
      state.data.invites.find(i => i.applicationId === applicationId && i.status !== 'Voided'),
    recForApp: state => (applicationId: string) =>
      state.data.recommendations.find(r => r.applicationId === applicationId),
    orgBalance: state => (orgId: string) => {
      const org = state.data.orgs.find(o => o.id === orgId)
      return org?.balance ?? 0
    },
    creditsAtStake: state => (orgId: string) =>
      state.data.invites
        .filter(i => i.orgId === orgId && i.status === 'Sent')
        .reduce((sum, i) => sum + i.price, 0),
    clientOwner: state => (orgId: string) => {
      const org = state.data.orgs.find(o => o.id === orgId)
      return org ? state.data.users.find(u => u.id === org.ownerUserId) : undefined
    },
  },

  actions: {
    hydrate () {
      if (!import.meta.client) return
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as PersistedDemo
          this.data = parsed.data
          this.ui = { ...defaultUi(), ...parsed.ui }
          syncOrgBalances(this.data)
          return
        } catch {
          /* fall through */
        }
      }
      this.resetDataOnly()
    },

    persist () {
      if (!import.meta.client) return
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ data: this.data, ui: this.ui }))
    },

    resetDataOnly () {
      this.data = createSeed()
      syncOrgBalances(this.data)
      this.persist()
    },

    resetDemo (currentPath?: string) {
      if (!import.meta.client) return
      this.data = createSeed()
      syncOrgBalances(this.data)
      if (currentPath) this.syncRoleFromPath(currentPath)
      this.persist()
    },

    setRole (role: DemoRole, navigate?: (path: string) => void) {
      this.ui.role = role
      const homes: Record<DemoRole, string> = {
        public: '/',
        applicant: '/applicant',
        client: '/client',
        hr: '/hr',
      }
      const target = this.ui.lastPaths[role] || homes[role]
      if (navigate) navigate(target)
      this.persist()
    },

    rememberPath (path: string) {
      const role = this.ui.role
      if (role !== 'public') this.ui.lastPaths[role] = path
      this.persist()
    },

    setApplicant (id: string, currentPath?: string, navigate?: (path: string) => void) {
      this.ui.applicantId = id
      const appMatch = currentPath?.match(/^\/applicant\/applications\/([^/]+)/)
      if (appMatch) {
        const app = this.data.applications.find(a => a.id === appMatch[1])
        if (app && app.applicantId !== id) {
          navigate?.('/applicant')
        }
      } else if (navigate && !this.data.applications.some(a => a.applicantId === id)) {
        navigate('/applicant')
      }
      this.persist()
    },

    setClientOrg (orgId: string, navigate?: (path: string) => void) {
      this.ui.clientOrgId = orgId
      if (navigate) navigate('/client')
      this.persist()
    },

    syncRoleFromPath (path: string) {
      if (path.startsWith('/hr')) this.ui.role = 'hr'
      else if (path.startsWith('/client')) this.ui.role = 'client'
      else if (path.startsWith('/applicant')) this.ui.role = 'applicant'
      this.persist()
    },

    applyToJob (jobId: string, applicantId: string, coverNote?: string) {
      const existing = this.data.applications.find(a => a.applicantId === applicantId && a.jobId === jobId)
      if (existing) return existing
      const id = `app-${applicantId.split('-')[0]}-${jobId.replace('job-', '')}-${Date.now()}`
      const app = {
        id,
        applicantId,
        jobId,
        status: 'Submitted' as ApplicationStatus,
        updatedAt: DEMO_TODAY,
        coverNote,
      }
      this.data.applications.push(app)
      this.persist()
      return app
    },

    withdrawApplication (applicationId: string) {
      const app = this.data.applications.find(a => a.id === applicationId)
      if (!app || app.status === 'Hired' || app.status === 'Withdrawn') return
      app.status = 'Withdrawn'
      app.updatedAt = DEMO_TODAY
      app.withdrawnAt = DEMO_TODAY
      this.persist()
    },

    acceptInvite (applicationId: string) {
      const invite = this.data.invites.find(i => i.applicationId === applicationId && i.status === 'Sent')
      const app = this.data.applications.find(a => a.id === applicationId)
      if (!invite || !app) return false
      invite.status = 'Accepted'
      app.status = 'Accepted invite'
      app.updatedAt = DEMO_TODAY
      const job = this.data.jobs.find(j => j.id === app.jobId)
      if (job) {
        this.data.revealGrants.push({
          id: `rg-${Date.now()}`,
          applicantId: app.applicantId,
          orgId: job.orgId,
          grantedAt: new Date().toISOString(),
          inviteId: invite.id,
        })
      }
      this.persist()
      return true
    },

    declineInvite (applicationId: string, reason?: string) {
      const invite = this.data.invites.find(i => i.applicationId === applicationId && i.status === 'Sent')
      const app = this.data.applications.find(a => a.id === applicationId)
      if (!invite || !app || invite.refunded) return false
      invite.status = 'Declined'
      invite.declineReason = reason
      app.status = 'Declined invite'
      app.updatedAt = DEMO_TODAY
      this.refundInvite(invite)
      this.persist()
      return true
    },

    refundInvite (invite: { id: string; orgId: string; price: number; ledgerChargeId?: string; refunded: boolean }) {
      if (invite.refunded) return
      const org = this.data.orgs.find(o => o.id === invite.orgId)
      if (!org) return
      const balanceAfter = org.balance + invite.price
      this.data.ledger.push({
        id: `led-ref-${Date.now()}`,
        orgId: invite.orgId,
        when: DEMO_TODAY,
        type: 'invite_refund',
        amount: invite.price,
        balanceAfter,
        note: 'Invite refund',
        refundOf: invite.ledgerChargeId,
      })
      org.balance = balanceAfter
      invite.refunded = true
    },

    sendInvite (params: {
      applicationId: string
      recommendationId: string
      orgId: string
      message: string
      proposedTimes: string[]
    }) {
      const org = this.data.orgs.find(o => o.id === params.orgId)
      const app = this.data.applications.find(a => a.id === params.applicationId)
      if (!org || !app || org.balance < 1) return { ok: false as const, reason: 'balance' }
      const price = 1
      const balanceAfter = org.balance - price
      const chargeId = `led-ch-${Date.now()}`
      this.data.ledger.push({
        id: chargeId,
        orgId: params.orgId,
        when: DEMO_TODAY,
        type: 'invite_charge',
        amount: -price,
        balanceAfter,
        note: this.data.applicants.find(a => a.id === app.applicantId)?.name || 'Candidate',
      })
      org.balance = balanceAfter
      const inviteId = `inv-${Date.now()}`
      this.data.invites.push({
        id: inviteId,
        applicationId: params.applicationId,
        recommendationId: params.recommendationId,
        orgId: params.orgId,
        status: 'Sent',
        sentAt: DEMO_TODAY,
        expiresAt: '2026-11-04',
        price,
        message: params.message,
        proposedTimes: params.proposedTimes,
        ledgerChargeId: chargeId,
        refunded: false,
      })
      app.status = 'Invited'
      app.updatedAt = DEMO_TODAY
      this.persist()
      return { ok: true as const, inviteId }
    },

    passRecommendation (recId: string, reason?: string) {
      const rec = this.data.recommendations.find(r => r.id === recId)
      if (!rec) return
      rec.status = 'Passed'
      rec.passedReason = reason
      this.persist()
    },

    grantCredits (params: {
      orgId: string
      amount: number
      type: 'purchase' | 'bonus' | 'adjustment'
      reason: string
      invoiceRef?: string
    }) {
      const org = this.data.orgs.find(o => o.id === params.orgId)
      if (!org) return
      const balanceAfter = org.balance + params.amount
      this.data.ledger.push({
        id: `led-grant-${Date.now()}`,
        orgId: params.orgId,
        when: DEMO_TODAY,
        type: params.type,
        amount: params.amount,
        balanceAfter,
        note: params.reason,
        reference: params.invoiceRef,
      })
      org.balance = balanceAfter
      const open = this.data.packageRequests.find(
        p => p.orgId === params.orgId && p.status === 'open' && p.credits === params.amount,
      )
      if (open) open.status = 'fulfilled'
      this.persist()
    },

    requestPackage (orgId: string, credits: number, pricePhp: number) {
      this.data.packageRequests.push({
        id: `prq-${Date.now()}`,
        orgId,
        credits,
        pricePhp,
        requestedAt: DEMO_TODAY,
        status: 'open',
      })
      this.persist()
    },

    openRequestReview (requestId: string) {
      const req = this.data.requests.find(r => r.id === requestId)
      if (req && req.status === 'Submitted') {
        req.status = 'Under review'
        this.persist()
      }
    },

    appendRequestComment (requestId: string, body: string, authorName = 'Hana Cruz') {
      const req = this.data.requests.find(r => r.id === requestId)
      if (!req) return
      req.comments.push({
        id: `rc-${Date.now()}`,
        authorName,
        createdAt: DEMO_TODAY,
        body,
      })
      this.persist()
    },

    setRequestStatus (requestId: string, status: Job['status'] | import('~/data/types').RequestStatus, comment?: string) {
      const req = this.data.requests.find(r => r.id === requestId)
      if (!req) return
      req.status = status as import('~/data/types').RequestStatus
      if (comment) this.appendRequestComment(requestId, comment)
      this.persist()
    },

    approveRequest (requestId: string) {
      const req = this.data.requests.find(r => r.id === requestId)
      if (!req) return
      req.status = 'Approved'
      const exists = this.data.jobs.some(j => j.title === req.title && j.orgId === req.orgId)
      if (!exists) {
        this.data.jobs.push({
          id: `job-${requestId}`,
          slug: req.title.toLowerCase().replace(/\s+/g, '-'),
          title: req.title,
          orgId: req.orgId,
          status: 'Approved',
          confidential: false,
          location: String(req.fields.location || 'TBD'),
          workSetup: String(req.fields.workSetup || 'On-site'),
          employmentType: String(req.fields.employmentType || 'Full-time'),
          salaryDisclosed: false,
          openings: Number(req.fields.openings || 1),
          category: 'General',
          description: req.summary,
          requirements: ['See client request', 'HR to refine', 'Publish when ready'],
          benefits: 'Standard agency benefits',
          autoCloseDays: 30,
        })
      }
      this.persist()
    },

    publishJob (jobId: string) {
      const job = this.data.jobs.find(j => j.id === jobId)
      if (!job) return
      job.status = 'Published'
      job.publishedAt = DEMO_TODAY
      this.persist()
    },

    shareRecommendation (applicationId: string, shareableNotes: string, overrides: Record<string, string>) {
      const app = this.data.applications.find(a => a.id === applicationId)
      if (!app || this.data.recommendations.some(r => r.applicationId === applicationId)) return false
      const alias = generateAlias()
      this.data.recommendations.push({
        id: `rec-${applicationId}`,
        applicationId,
        alias,
        status: 'shared',
        whySummary: 'HR recommendation',
        includeNotes: true,
        includeRecording: true,
        includeCv: true,
        shareableNotes,
        internalNotes: overrides.internal || undefined,
      })
      app.status = 'Recommended'
      app.updatedAt = DEMO_TODAY
      this.persist()
      return true
    },

    setApplicationStatus (applicationId: string, status: ApplicationStatus) {
      const app = this.data.applications.find(a => a.id === applicationId)
      if (!app) return
      app.status = status
      app.updatedAt = DEMO_TODAY
      this.persist()
    },

    submitClientOutcome (applicationId: string, outcome: import('~/data/types').ClientOutcome) {
      const existing = this.data.clientOutcomes.findIndex(o => o.applicationId === applicationId)
      if (existing >= 0) this.data.clientOutcomes.splice(existing, 1)
      this.data.clientOutcomes.push(outcome)
      const app = this.data.applications.find(a => a.id === applicationId)
      if (app) {
        app.status = outcome.result === 'Accepted' ? 'Client accepted' : 'Client rejected'
        app.updatedAt = DEMO_TODAY
      }
      this.persist()
    },

    toggleTeamSpend (userId: string, canSpend: boolean) {
      const user = this.data.users.find(u => u.id === userId)
      if (user) {
        user.canSpend = canSpend
        this.persist()
      }
    },

    addTeammate (orgId: string, name: string, email: string) {
      const id = `user-${Date.now()}`
      this.data.users.push({
        id,
        name,
        orgId,
        role: 'Client member',
        canSpend: false,
      })
      this.persist()
    },

    requestApplicantData (applicantId: string) {
      this.data.dataSubjectRequests.push({
        id: `dsr-${Date.now()}`,
        applicantId,
        status: 'Open',
        createdAt: DEMO_TODAY,
      })
      this.persist()
    },

    markNotificationRead (id: string) {
      const n = this.data.notifications.find(x => x.id === id)
      if (n) {
        n.read = true
        this.persist()
      }
    },
  },
})
