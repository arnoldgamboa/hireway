export type DemoRole = 'public' | 'applicant' | 'client' | 'hr'

export type JobStatus =
  | 'Approved'
  | 'Published'
  | 'Paused'
  | 'Closed'

export type RequestStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under review'
  | 'Changes requested'
  | 'Rejected'
  | 'Approved'

export type ApplicationStatus =
  | 'Submitted'
  | 'Screening'
  | 'Shortlisted'
  | 'HR interview scheduled'
  | 'HR interviewed'
  | 'Not progressed'
  | 'Recommended'
  | 'Invited'
  | 'Accepted invite'
  | 'Client interviewing'
  | 'Client accepted'
  | 'Client rejected'
  | 'Hired'
  | 'Withdrawn'
  | 'Declined invite'

export type InviteStatus = 'Sent' | 'Accepted' | 'Declined' | 'Voided' | 'Cancelled'

export type LedgerType =
  | 'purchase'
  | 'bonus'
  | 'adjustment'
  | 'purchase_reversal'
  | 'invite_charge'
  | 'invite_refund'

export interface Org {
  id: string
  name: string
  city: string
  balance: number
  threshold: number
  ownerUserId: string
}

export interface User {
  id: string
  name: string
  orgId: string | 'agency'
  role: string
  canSpend: boolean
}

export interface Job {
  id: string
  slug: string
  title: string
  orgId: string
  status: JobStatus | 'Closed, filled'
  confidential: boolean
  location: string
  workSetup: string
  employmentType: string
  salaryMin?: number
  salaryMax?: number
  salaryDisclosed: boolean
  openings: number
  publishedAt?: string
  category: string
  description: string
  requirements: string[]
  benefits: string
  closeReason?: string
  autoCloseDays: number
}

export interface JobRequest {
  id: string
  title: string
  orgId: string
  status: RequestStatus
  submittedAt?: string
  summary: string
  fields: Record<string, string | number | boolean>
  comments: Comment[]
}

export interface Comment {
  id: string
  authorName: string
  createdAt: string
  body: string
}

export interface Applicant {
  id: string
  name: string
  email: string
  mobile: string
  city: string
  headline: string
  summary: string
  yearsExperience: number
  expectedSalary: string
  availability: string
  workSetup: string
  skills: string[]
  experience: {
    title: string
    employer: string
    start: string
    end: string
    description: string
  }
  education: {
    school: string
    degree: string
    year: string
  }
  portfolioUrl: string
  linkedInUrl: string
  photoOnFile: boolean
  cvFiles: { name: string; isDefault: boolean }[]
  digestEmail: boolean
  recordingConsent?: boolean
}

export interface Application {
  id: string
  applicantId: string
  jobId: string
  status: ApplicationStatus
  updatedAt: string
  coverNote?: string
  hrRejectReason?: string
  startDate?: string
  withdrawnAt?: string
}

export interface Interview {
  id: string
  applicationId: string
  scheduledAt: string
  platform: string
  link: string
  interviewer: string
  status: 'Scheduled' | 'Completed' | 'No-show' | 'Cancelled'
  recordingLink?: string
  scorecard?: { communication: number; reliability: number; roleFit: number }
  shareableNotes?: string
  internalNotes?: string
  recordingConsent?: boolean | null
}

export interface ClientInterview {
  id: string
  applicationId: string
  scheduledAt: string
  link: string
  status: 'Scheduled' | 'Completed'
}

export interface Recommendation {
  id: string
  applicationId: string
  alias: string
  status: 'shared' | 'Passed'
  whySummary: string
  includeNotes: boolean
  includeRecording: boolean
  includeCv: boolean
  shareableNotes: string
  internalNotes?: string
  passedReason?: string
}

export interface Invite {
  id: string
  applicationId: string
  recommendationId: string
  orgId: string
  status: InviteStatus
  sentAt: string
  expiresAt: string
  price: number
  message: string
  proposedTimes: string[]
  declineReason?: string
  voidReason?: string
  ledgerChargeId?: string
  refunded: boolean
}

export interface RevealGrant {
  id: string
  applicantId: string
  orgId: string
  grantedAt: string
  inviteId: string
}

export interface ClientOutcome {
  applicationId: string
  result: 'Accepted' | 'Rejected'
  ratings: { fit: number; skills: number; communication: number }
  comment: string
  reasonCode?: string
}

export interface LedgerEntry {
  id: string
  orgId: string
  when: string
  type: LedgerType
  amount: number
  balanceAfter: number
  note: string
  reference?: string
  refundOf?: string
}

export interface PackageRequest {
  id: string
  orgId: string
  credits: number
  pricePhp: number
  requestedAt: string
  status: 'open' | 'fulfilled'
}

export interface Notification {
  id: string
  userId: string
  title: string
  body: string
  read: boolean
  createdAt: string
}

export interface DataSubjectRequest {
  id: string
  applicantId: string
  status: 'Open'
  createdAt: string
}

export interface DemoState {
  orgs: Org[]
  users: User[]
  jobs: Job[]
  requests: JobRequest[]
  applicants: Applicant[]
  applications: Application[]
  interviews: Interview[]
  clientInterviews: ClientInterview[]
  recommendations: Recommendation[]
  invites: Invite[]
  revealGrants: RevealGrant[]
  clientOutcomes: ClientOutcome[]
  ledger: LedgerEntry[]
  packageRequests: PackageRequest[]
  notifications: Notification[]
  dataSubjectRequests: DataSubjectRequest[]
  jobComments: Record<string, Comment[]>
}
