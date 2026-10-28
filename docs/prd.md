# Hireway — Product Requirements Document (Full Version)

| Field | Value |
|---|---|
| Product | Hireway: hiring platform for a single HR agency |
| Document type | PRD, full version (phased) |
| Status | Draft v1.0, for review |
| Date | 2026-10-28 |
| Owner | Agency owner (Product), with the HR operations lead |
| Target timeline | None set. Phasing below shows order, not dates |

> **How to read this:** Sections 1–3 explain the product. Section 4 is the end-to-end workflow and status lifecycles. Sections 5–9 are the detailed requirements. Section 13 lists open questions and assumptions. Anything marked **[OQ-n]** is an open question and **[A-n]** is an assumption (see Section 13).

---

## Table of contents

1. [Overview](#1-overview)
2. [Goals and non-goals](#2-goals-and-non-goals)
3. [Personas, roles and permissions](#3-personas-roles-and-permissions)
4. [End-to-end workflow and status lifecycles](#4-end-to-end-workflow-and-status-lifecycles)
5. [Functional requirements by role](#5-functional-requirements-by-role)
6. [Credits and billing model](#6-credits-and-billing-model)
7. [Anonymization, privacy and reveal logic](#7-anonymization-privacy-and-reveal-logic)
8. [Notifications](#8-notifications)
9. [Admin, reporting and audit](#9-admin-reporting-and-audit)
10. [Non-functional requirements](#10-non-functional-requirements)
11. [Success metrics](#11-success-metrics)
12. [Phased roadmap](#12-phased-roadmap)
13. [Open questions and assumptions](#13-open-questions-and-assumptions)
14. [Glossary](#14-glossary)

---

## 1. Overview

### 1.1 Problem

The agency currently brokers hiring between clients (companies that need staff) and applicants by hand, across email, chat, spreadsheets, and video calls. This causes:

- Job requests arriving in inconsistent formats and needing repeated follow-up.
- No single place to track an applicant from application through hire.
- Clients bypassing the agency once they learn an applicant's identity, before the agency has captured value.
- No reliable way to charge clients per introduction.
- Personal data scattered across tools, which creates risk under the Philippines Data Privacy Act of 2012 (RA 10173).

### 1.2 Solution

Hireway is a single-tenant web platform for the agency (**[A-1]**). It connects three groups:

- **HR operators (the agency)** review job requests, publish jobs, screen and interview applicants, and recommend the best ones.
- **Hiring clients** submit job requests, review **anonymized** recommended applicants, and spend **credits** to invite them to a client-run interview.
- **Applicants** create accounts, apply to jobs, and accept or decline client invites. Their identity is revealed to a client only when they **accept**.

The agency facilitates every step and sees everything. Clients pay in credits per invite, and credits are refunded when an applicant declines.

### 1.3 One-line flow

Client submits a job request → HR approves and posts it → applicants apply → HR interviews, records, and writes notes → HR recommends to the client (anonymized) → client spends credits to invite → applicant accepts (identity revealed) or declines (credit refunded) → client interviews → client accepts or rejects with feedback → HR sees the outcome.

---

## 2. Goals and non-goals

### 2.1 Goals

| # | Goal | Why it matters |
|---|---|---|
| G1 | Run the whole hiring pipeline in one system | Replaces spreadsheets and email threads; gives HR full visibility |
| G2 | Protect applicant identity until the applicant consents | Protects the agency's value and applicant privacy |
| G3 | Monetize introductions through prepaid credits | Predictable revenue, and clients only pay for invites that can lead somewhere |
| G4 | Give clients rich, trustworthy information before they invite | HR notes, recordings, and redacted CVs reduce wasted interviews |
| G5 | Close the feedback loop from client to HR | HR learns what clients want and improves future recommendations |
| G6 | Comply with RA 10173 by design | Consent, minimization, access control, audit, and retention |

### 2.2 Non-goals (for this product version)

- Multi-agency SaaS. There is one agency, so no tenant isolation between agencies (**[A-1]**).
- Job syndication to third-party boards such as LinkedIn, Indeed, or JobStreet (**[A-2]**).
- Payroll, onboarding, contracts, or employer-of-record services after hire.
- Hosting video calls natively. Meet and Zoom stay external.
- Automated, AI-only screening decisions. AI can assist in later phases, but humans decide.

---

## 3. Personas, roles and permissions

### 3.1 Personas

**Hana, HR operator (recruiter).** Manages 5–15 open jobs at once. Needs a fast queue of new applications, an easy way to log interviews, and confidence that nothing she shares leaks applicant identity.

**Ramon, agency admin and owner.** Sets credit prices, manages clients and staff, watches revenue and pipeline health, and is accountable for data privacy compliance. He may also act as the Data Protection Officer (DPO) or appoint one.

**Carla, client hiring manager.** Fills 1–3 roles per quarter. Wants to describe a role once, see a short list of vetted applicants, and only pay for candidates who are interested.

**Dennis, client account owner (finance or HR head at the client).** Buys credits, controls who on his team can spend them, and needs receipts or invoices.

**Joy, applicant.** Is looking for work, often on a phone. Wants a simple application, clear status updates, and control over who learns her identity.

### 3.2 Roles

| Role | Belongs to | Summary |
|---|---|---|
| Super admin | Agency | Full system access, settings, pricing, staff management, privacy operations |
| HR operator | Agency | Manages jobs, applications, interviews, recommendations, and client communication |
| HR viewer (optional) | Agency | Read-only access for trainees or auditors |
| Client owner | Client organization | Manages the client account, users, credits, billing, and all of the client's jobs |
| Client member | Client organization | Submits job requests, reviews recommendations, sends invites (if allowed), and gives feedback |
| Applicant | Self | Manages their profile, applications, and invite responses |
| Public visitor | Anonymous | Browses the job board and starts an application, which requires an account |

### 3.3 Permission matrix

Legend: ✅ allowed, ◐ limited or conditional, — not allowed.

| Capability | Super admin | HR operator | Client owner | Client member | Applicant |
|---|---|---|---|---|---|
| Submit job request | ✅ (on behalf) | ✅ (on behalf) | ✅ | ✅ | — |
| Approve, edit, or publish job | ✅ | ✅ | — | — | — |
| View applications for a job | ✅ | ✅ | — | — | Own only |
| Schedule and log HR interviews, notes, recordings | ✅ | ✅ | — | — | — |
| Create a recommendation | ✅ | ✅ | — | — | — |
| View anonymized recommended profile | ✅ | ✅ | ✅ (own org) | ✅ (own org, assigned jobs) ◐ | — |
| View applicant identity and contact details | ✅ | ✅ | ◐ after acceptance | ◐ after acceptance | Own |
| Send invite (spends credits) | — | — | ✅ | ◐ if granted "can spend credits" | — |
| Accept or decline an invite | — | — | — | — | ✅ |
| Record client interview outcome and feedback | ✅ (on behalf) | ✅ (on behalf) | ✅ | ✅ | — |
| Buy credits | — | — | ✅ | ◐ if granted | — |
| Manually adjust credits | ✅ | ◐ request only, needs admin approval **[OQ-12]** | — | — | — |
| Manage client users | ✅ | ✅ | ✅ (own org) | — | — |
| Configure pricing and system settings | ✅ | — | — | — | — |
| View audit logs | ✅ | ◐ own actions | — | — | — |
| Handle data subject requests (export or delete) | ✅ | — | — | — | Request own |

**Rules**

- R-PERM-1: Client users only see data about their own organization's jobs, recommendations, and invites.
- R-PERM-2: Client member access can be scoped to specific jobs (default: all of the organization's jobs) **[A-3]**.
- R-PERM-3: Applicants never see other applicants, HR-internal notes marked "internal", or client feedback, unless HR chooses to share a summary **[OQ-9]**.
- R-PERM-4: Every permission check is enforced on the server. Hiding something in the UI is not enough.

---

## 4. End-to-end workflow and status lifecycles

### 4.1 Swimlane summary

| Step | Client | HR operator | Applicant | System |
|---|---|---|---|---|
| 1 | Submits job request | | | Notifies HR |
| 2 | Answers clarifications | Reviews; requests changes, approves, or rejects | | |
| 3 | | Publishes job to the board | | Job is live on the public board |
| 4 | | | Creates account, applies | Confirms receipt |
| 5 | | Screens; shortlists for HR interview | | Notifies applicant of status |
| 6 | | Schedules interview, pastes Meet/Zoom link | Attends | Sends reminders |
| 7 | | Pastes recording link, writes notes, uploads redacted CV | | Runs PII checks |
| 8 | | Recommends to client | | Builds anonymized profile, notifies client |
| 9 | Reviews profile, sends invite | | | Deducts credits, notifies applicant |
| 10 | | Follows up if no response | Accepts or declines | Accept: reveals identity. Decline: refunds credits |
| 11 | Runs client interview | Monitors | Attends | Tracks schedule |
| 12 | Accepts or rejects, enters feedback | Receives feedback, closes the loop | Informed of outcome | Updates statuses and reports |

### 4.2 Core objects

| Object | Description |
|---|---|
| Client organization | A company buying the agency's services; holds the credit wallet |
| Job request | What the client submits; becomes a job once approved |
| Job (posting) | The approved, publishable version of a job request |
| Applicant profile | Account-level profile: experience, skills, CV, and so on |
| Application | One applicant applying to one job |
| HR interview | A scheduled or completed interview run by HR for an application |
| Recommendation | HR's decision to put an application in front of the client, with an anonymized dossier |
| Invite | A client's paid invitation to a recommended applicant for a client-run interview |
| Client interview | The interview the client runs after the invite is accepted |
| Outcome and feedback | The client's accept or reject decision plus their thoughts |
| Credit ledger entry | An immutable record of each credit movement |

### 4.3 Job request and job lifecycle

```
Draft ──submit──► Submitted ──HR opens──► Under review
                                             │
            ┌──── Changes requested ◄────────┤
            │  (client edits, resubmits)     │
            └──────────► Submitted           ├──► Rejected (reason required)
                                             │
                                             ▼
                                         Approved ──publish──► Published (open)
                                                                  │   ▲
                                                           pause  │   │ resume
                                                                  ▼   │
                                                                 Paused
                                                                  │
                                         Published / Paused ──► Closed
                                                                  (filled | cancelled | expired)
                                                                  │
                                                                  ▼
                                                               Archived
```

| Status | Meaning | Who moves it |
|---|---|---|
| Draft | Client is still writing the request | Client |
| Submitted | Waiting for HR | Client |
| Under review | HR is reviewing | HR |
| Changes requested | HR needs edits or more information (comment required) | HR |
| Rejected | Agency won't take this role (reason required) | HR |
| Approved | Ready to publish; HR may still polish the copy | HR |
| Published | Visible on the job board and accepting applications | HR |
| Paused | Hidden from the board; the pipeline continues | HR |
| Closed | No new applications. Sub-reason: filled, cancelled by client, or expired | HR (client can request cancellation) |
| Archived | Read-only historical record | System or HR |

**Rules**

- R-JOB-1: Only HR can publish. Client edits after publication create a "change request" that HR must approve.
- R-JOB-2: A published job shows the client's company name by default. HR can set it to "Confidential client" **[OQ-8]**.
- R-JOB-3: An optional auto-close date is supported (default 30 days, configurable) **[A-4]**.
- R-JOB-4: Closing a job does not cancel pending invites. HR is warned and must resolve them.

### 4.4 Application lifecycle

```
Submitted ─► Screening ─► Shortlisted ─► HR interview scheduled ─► HR interviewed
     │           │             │                  │                     │
     └───────────┴─────────────┴──────────────────┴──► Not progressed (HR, reason)
                                                                        │
                                                                        ▼
                                                                   Recommended
                                                                        │
                                       (driven by recommendation / invite / client outcome)
                                                                        ▼
                                                    Invited ─► Accepted invite ─► Client interviewing
                                                       │                               │
                                                       ▼                               ▼
                                                 Declined invite              Client accepted ─► Hired*
                                                                               Client rejected
Any status (before Hired) ─► Withdrawn (applicant)
```

\* "Hired" is optional confirmation that the applicant actually started work. See **[OQ-15]**.

| Status | Visible to applicant as |
|---|---|
| Submitted | "Application received" |
| Screening | "Under review" |
| Shortlisted / HR interview scheduled | "Interview with Hireway" and the scheduled time |
| HR interviewed | "Interview completed" |
| Not progressed | "Not moving forward" (gentle copy; reason is not shown by default) |
| Recommended | "Under review" (applicants are not told they are being shown to clients) **[OQ-10]** |
| Invited | "You have an interview invitation", with accept and decline actions |
| Accepted invite / Client interviewing | "Interview with {Client}" |
| Client accepted | "Good news: {Client} wants to move forward" |
| Client rejected | "Not moving forward" |
| Withdrawn | "Withdrawn" |

**Rules**

- R-APP-1: One application per applicant per job. Reapplying is allowed only after "Not progressed" plus a cooldown (configurable; default off).
- R-APP-2: Applicants can withdraw at any time before "Hired". If they withdraw after accepting an invite, HR and the client are notified and no refund is given. See **[OQ-4]**.
- R-APP-3: An applicant may have many active applications across different jobs and clients.

### 4.5 HR interview lifecycle

```
Scheduled ─► Completed ─► Notes finalized
    │  ▲          
    │  └ rescheduled
    ├─► No-show (applicant)
    └─► Cancelled
```

- R-INT-1: Each HR interview stores the date and time (Asia/Manila by default), platform (Google Meet, Zoom, phone, in person, other), meeting link, interviewer(s), and status.
- R-INT-2: After completion, HR adds a **recording link** (optional but strongly encouraged), **structured notes** (scorecard), and **free-text notes**.
- R-INT-3: Notes have two visibility levels: **Client-shareable** (included in the anonymized dossier, PII-checked) and **Internal** (never shown to clients).
- R-INT-4: Applicant consent to recording is captured before the interview (a checkbox in the booking confirmation, re-confirmed verbally on the recording). See Section 7.
- R-INT-5: An application can have more than one HR interview, for example a technical round.

### 4.6 Recommendation lifecycle

```
Draft ─► Ready for review (optional 2nd HR approval) ─► Shared with client ─► Viewed
                                                               │              │
                                                               │              ├─► Invite sent (→ Invite lifecycle)
                                                               │              └─► Passed by client (reason optional)
                                                               ├─► Retracted by HR
                                                               └─► Expired (no action within N days) [OQ-6]
```

- R-REC-1: A recommendation can't be shared until the **anonymization checklist** passes (Section 7.4).
- R-REC-2: HR can recommend the same applicant to multiple jobs or clients. Each recommendation is separate and has its own anonymized alias.
- R-REC-3: "Passed by client" costs nothing. The client can say why ("not enough experience", "salary mismatch", and so on).
- R-REC-4: HR can retract a recommendation before an invite is sent, for example if the applicant got hired elsewhere.

### 4.7 Invite lifecycle (paid step)

```
                    ┌─────────► Accepted ──► (identity revealed) ──► Client interview lifecycle
                    │
Sent (credits ──────┼─────────► Declined ──► credits refunded
deducted)           │
                    ├─────────► Expired (no reply in N days) ──► refund? [OQ-3]
                    │
                    ├─────────► Cancelled by client (before reply) ──► refund? [OQ-3]
                    │
                    └─────────► Voided by HR (e.g., applicant unavailable) ──► credits refunded
```

| Status | Credit effect | Notes |
|---|---|---|
| Sent | Deduct flat invite price | Fails if the balance is too low |
| Accepted | None (the charge stands) | Identity and contact details are revealed to the client organization |
| Declined | Full refund | Applicant may give an optional reason (shared with HR, and anonymized for the client) |
| Expired | Proposed: full refund **[OQ-3]** | Default response window: 5 business days **[A-5]** |
| Cancelled by client | Proposed: full refund if before the applicant responds **[OQ-3]** | |
| Voided by HR | Full refund | Used for agency-side problems |

**Rules**

- R-INV-1: An invite includes the job, the client's company name **[OQ-8]**, a message from the client, and proposed interview format and time options (or "the client will contact you to schedule").
- R-INV-2: The applicant must actively accept or decline. On accept, the applicant sees and confirms a consent statement: "I agree to share my name, contact details and full CV with {Client}."
- R-INV-3: Only one active invite per recommendation. Re-inviting after a decline is controlled by **[OQ-2]**.
- R-INV-4: HR is notified of every invite and response, and can nudge the applicant.
- R-INV-5: Sending an invite and deducting credits happen in a single atomic, idempotent operation. Double-clicking or retrying must never charge twice.

### 4.8 Client interview and outcome lifecycle

```
Awaiting scheduling ─► Scheduled ─► Completed ─► Outcome recorded: Accepted | Rejected
        │                  │  ▲
        │                  │  └ rescheduled
        │                  ├─► No-show (applicant) [OQ-4]
        │                  └─► No-show / cancelled (client)
        └─► Applicant withdrew
```

- R-CI-1: After acceptance, the client schedules the interview, either in Hireway (date, time, link) or off-platform. Off-platform scheduling is allowed, but the client is prompted to log the date **[A-6]**.
- R-CI-2: The client records the **outcome** (Accepted or Rejected) and **feedback**: a structured rating (1–5) on fit, skills, and communication, a free-text comment, and, if rejected, a reason code.
- R-CI-3: Feedback goes to HR immediately. Feedback is **never shown to the applicant verbatim**. HR may send a summary **[OQ-9]**.
- R-CI-4: If no outcome is recorded N days after the interview date (default 7), the client is reminded, then HR is alerted.
- R-CI-5: "Accepted" means the client wants to proceed (offer or hire). HR then confirms whether the applicant was actually hired (**[OQ-15]**, possible placement fee **[OQ-14]**).

---

## 5. Functional requirements by role

Priority: **P0** = MVP (Phase 1), **P1** = Phase 2, **P2** = Phase 3 and later.

### 5.1 Public job board

| ID | Requirement | Priority |
|---|---|---|
| FR-PUB-1 | Public, mobile-friendly job board listing published jobs | P0 |
| FR-PUB-2 | Search and filter by keyword, location, work setup (on-site, hybrid, remote), employment type, category, and salary range | P0 |
| FR-PUB-3 | Job detail page with description, requirements, benefits, salary (if disclosed), client name or "Confidential client", and an Apply button | P0 |
| FR-PUB-4 | Shareable job URLs and social share previews (Open Graph) | P0 |
| FR-PUB-5 | Search-engine-friendly pages with schema.org `JobPosting` structured data, so jobs can appear in Google search **[OQ-16]** | P1 |
| FR-PUB-6 | Agency branding, About and Contact pages, and a "For employers" page with a request-a-demo or sign-up form | P0 |
| FR-PUB-7 | Job alerts: applicants subscribe to saved searches | P1 |

### 5.2 Applicant

| ID | Requirement | Priority |
|---|---|---|
| FR-APL-1 | Sign up with email and password (email verification required). Google sign-in is optional | P0 (email), P1 (Google) |
| FR-APL-2 | Privacy notice and consent capture at sign-up (Section 7.6), with versioned consent records | P0 |
| FR-APL-3 | Profile: name, contact details (email, mobile), location (city or province), headline, summary, work experience, education, skills, certifications, languages, expected salary, availability or notice period, work setup preference, links (portfolio, LinkedIn), and photo (optional, never shown to clients pre-reveal) | P0 |
| FR-APL-4 | Upload CV (PDF or DOCX, max 10 MB). Multiple CV versions allowed, with one set as default | P0 |
| FR-APL-5 | Apply to a job using the profile and CV, plus optional screening questions set by HR and an optional cover note | P0 |
| FR-APL-6 | "My applications" dashboard with applicant-friendly statuses (Section 4.4) | P0 |
| FR-APL-7 | View HR interview invitations with time, link, and instructions. Confirm attendance and request a reschedule | P0 |
| FR-APL-8 | Recording consent before the HR interview | P0 |
| FR-APL-9 | Receive a client invite: see the job, client name, message, and proposed times. Accept (with consent to reveal) or decline (optional reason) | P0 |
| FR-APL-10 | Withdraw an application | P0 |
| FR-APL-11 | Notification preferences (email always on for critical events; others optional) | P0 |
| FR-APL-12 | Data subject rights: download my data, correct my data, request account deletion (Section 10.3) | P0 (request flow), P1 (self-serve export) |
| FR-APL-13 | Profile visibility setting: "Allow Hireway to consider me for other roles" (talent pool opt-in) | P1 |
| FR-APL-14 | SMS notifications for invites and interview reminders | P1 |

### 5.3 Client (owner and member)

| ID | Requirement | Priority |
|---|---|---|
| FR-CLI-1 | Client onboarding: the agency creates the organization and invites the owner, or self-sign-up is followed by agency approval **[OQ-11]** | P0 |
| FR-CLI-2 | Manage team: invite members, set roles, and grant or revoke "can spend credits" and job-level access | P0 |
| FR-CLI-3 | Submit a job request using a structured form: title, department, number of openings, description, must-have and nice-to-have skills, experience level, location and work setup, employment type, salary range and whether to disclose it, benefits, start date, interview process, confidentiality toggle, and attachments | P0 |
| FR-CLI-4 | Save as draft. Track request status. Reply to HR change requests through comments on the request | P0 |
| FR-CLI-5 | View their jobs and per-job pipeline counts (applied, interviewed by HR, recommended, invited, accepted, hired). Counts only; no applicant data before recommendation | P0 |
| FR-CLI-6 | Recommendations inbox per job: list of anonymized candidate cards (alias, headline, years of experience, top skills, HR rating, expected salary, availability) | P0 |
| FR-CLI-7 | Anonymized candidate dossier: full profile minus identity, HR client-shareable notes and scorecard, recording link (Section 7.5), redacted CV viewer and download (watermarked) | P0 |
| FR-CLI-8 | Pass on a recommendation with an optional reason | P0 |
| FR-CLI-9 | Send invite: shows the credit cost and current balance, asks for confirmation, and collects a message plus proposed times. Blocked if the balance is too low, with a "Buy credits" path | P0 |
| FR-CLI-10 | Track invite status. Cancel a pending invite (refund per **[OQ-3]**) | P0 |
| FR-CLI-11 | On acceptance: see full name, email, mobile, original (unredacted) CV, and links. A "revealed" badge and timestamp are shown | P0 |
| FR-CLI-12 | Log the client interview schedule and link, then mark it completed or no-show | P0 |
| FR-CLI-13 | Record the outcome (Accepted or Rejected) with structured and free-text feedback | P0 |
| FR-CLI-14 | Credits wallet: balance, ledger history, purchase, invoices and receipts | P0 (manual top-up), P1 (online checkout) |
| FR-CLI-15 | Comments thread with HR per job and per candidate | P0 |
| FR-CLI-16 | Compare up to 3 anonymized candidates side by side | P1 |
| FR-CLI-17 | Request more candidates for a job (signals HR) | P1 |
| FR-CLI-18 | Bulk-invite several recommended candidates at once (with total cost confirmation) | P1 |

### 5.4 HR operator

| ID | Requirement | Priority |
|---|---|---|
| FR-HR-1 | Job request queue with filters (status, client, age) and SLA indicators (for example, "submitted more than 2 business days ago") | P0 |
| FR-HR-2 | Review a request: comment, request changes, reject (with reason), or approve. Edit the public job copy, add screening questions, and set the confidentiality flag and auto-close date | P0 |
| FR-HR-3 | Publish, pause, resume, close, and archive jobs. Create jobs on a client's behalf | P0 |
| FR-HR-4 | Applications list per job, in Kanban and table views, with filters and bulk status changes | P0 |
| FR-HR-5 | Applicant 360 view: profile, all applications, interviews, notes, recommendations, invites, outcomes, and communication history | P0 |
| FR-HR-6 | Schedule an HR interview: date and time, platform, **manually pasted** Meet or Zoom link, and interviewers. The system sends the invite and reminders | P0 |
| FR-HR-7 | Log the interview: status, **manually pasted recording link**, scorecard (configurable criteria, 1–5), client-shareable notes, and internal notes | P0 |
| FR-HR-8 | Upload a **redacted CV**, or use the redaction helper (Section 7.4) | P0 (upload), P1 (helper) |
| FR-HR-9 | Create a recommendation: select the application, write a client-facing summary ("why this candidate"), choose which notes, recording, and CV to include, run the anonymization checklist, then share | P0 |
| FR-HR-10 | Optional four-eyes rule: a second HR operator approves a recommendation before it is shared (configurable) | P1 |
| FR-HR-11 | Monitor invites. Nudge the applicant. Void an invite with an automatic refund | P0 |
| FR-HR-12 | Receive and view client outcomes and feedback. Mark as hired or not hired | P0 |
| FR-HR-13 | Message templates for common emails (interview invite, rejection, and so on) | P1 |
| FR-HR-14 | Manage client organizations and users (create, deactivate, reset access) | P0 |
| FR-HR-15 | Talent pool search across all applicants (consented), by skills, location, and experience, to recommend existing applicants for new jobs. The applicant is attached to the job as a "sourced" application | P1 |
| FR-HR-16 | Personal task list: "My follow-ups" (pending invites, overdue feedback, unscheduled interviews) | P0 |
| FR-HR-17 | Duplicate detection: flag applicants with the same email, mobile, or a near-identical name | P1 |

### 5.5 Super admin

| ID | Requirement | Priority |
|---|---|---|
| FR-ADM-1 | Manage agency staff accounts and roles; enforce MFA | P0 |
| FR-ADM-2 | Configure credit pricing: invite cost (flat credits per invite), credit packages and prices, and credit validity **[OQ-7]** | P0 |
| FR-ADM-3 | Manual credit operations: grant (for example, after a paid invoice), bonus, correction, and reversal. Reason and reference are required, and every action is logged | P0 |
| FR-ADM-4 | Configure timers: invite response window, recommendation expiry, feedback reminder, and job auto-close | P0 |
| FR-ADM-5 | Configure HR scorecard criteria, rejection reason codes, job categories, and screening question templates | P0 |
| FR-ADM-6 | Manage legal content: privacy notice, terms for applicants, terms for clients, consent text versions | P0 |
| FR-ADM-7 | Data privacy console: data subject requests queue, exports, deletion and anonymization, retention jobs, breach log | P0 (manual), P1 (automated) |
| FR-ADM-8 | Reporting dashboards (Section 9) | P0 (core), P1 (advanced) |
| FR-ADM-9 | Audit log viewer with filters and export | P0 |
| FR-ADM-10 | Payment provider configuration (keys, webhooks) when online payments ship | P1 |

---

## 6. Credits and billing model

### 6.1 Principles

- Credits are **prepaid**, held in a **wallet per client organization**, and consumed by **invites only** **[A-7]**.
- Each invite costs a **flat number of credits**, configured by the admin (example: 1 invite = 1 credit) **[A-8]**.
- Credits are deducted **when the invite is sent** and **refunded in full when the applicant declines**.
- Every credit movement is an **immutable ledger entry**. The balance always equals the sum of the ledger. Nothing is edited in place.

### 6.2 Purchase

| Aspect | Requirement |
|---|---|
| Packages | Admin-defined packages, for example 5, 10, or 25 credits, with optional volume discounts. Custom amounts are allowed for manual invoicing |
| Currency | Philippine peso (PHP) by default **[A-9]** |
| Taxes | Prices shown VAT-inclusive or VAT-exclusive per admin setting. Official receipt and invoice requirements (BIR) apply **[OQ-13]** |
| Methods, Phase 1 | **Manual invoicing**: the client requests a package, the agency sends an invoice (bank transfer or check), and on payment the admin grants credits with the invoice reference |
| Methods, Phase 2 | **Online checkout** through a payment provider **[OQ-1]**. Candidates: **PayMongo** and **Xendit** (local cards, GCash, Maya, online banking, QR Ph) and **Stripe** (international cards). Manual invoicing stays available |
| Confirmation | Credits are granted only after payment is confirmed (provider webhook or admin action), never on redirect alone |
| Documents | A downloadable receipt or invoice for each purchase |
| Failed or reversed payments | Chargebacks and refunds of purchases create a negative adjustment. If the balance goes negative, invites are blocked until it is resolved |

### 6.3 Ledger

Each entry stores: entry ID, client organization, type, amount (+ or −), balance after, related object (purchase, invite, or adjustment), actor (user or system), reason or note, external reference (invoice number or payment ID), and timestamp.

| Entry type | Sign | Created by |
|---|---|---|
| `purchase` | + | Payment webhook or admin grant |
| `invite_charge` | − | System, when an invite is sent |
| `invite_refund` | + | System, on decline, void, or other refundable outcome |
| `bonus` | + | Admin (promotions, goodwill) |
| `adjustment` | ± | Admin (corrections; reason required) |
| `purchase_reversal` | − | Payment chargeback or refund |
| `expiry` | − | System, if credits expire **[OQ-7]** |

### 6.4 Deduction rules

- D-1: When an invite is sent, the system checks that balance ≥ invite price. If so, it writes `invite_charge` and creates the invite in the same transaction.
- D-2: If the balance is too low, the invite is blocked with the message "You need X more credits", and a buy-credits link is shown.
- D-3: Only users with "can spend credits" permission can send invites.
- D-4: The price is snapshotted on the invite. Later price changes don't affect pending invites or their refunds.
- D-5: Optional per-organization spending controls, such as a monthly cap or owner approval above N invites per day **[A-10]**, P1.

### 6.5 Refund rules

| Scenario | Refund | Status |
|---|---|---|
| Applicant **declines** invite | **Full refund** | Confirmed by user |
| HR **voids** invite (agency-side issue, applicant no longer available, data error) | Full refund | Proposed |
| Invite **expires** with no response | Full refund (proposed default) | **[OQ-3]** |
| Client **cancels** before the applicant responds | Full refund (proposed default) | **[OQ-3]** |
| Applicant **accepts** then withdraws before the client interview | No automatic refund; HR may grant a goodwill adjustment | **[OQ-4]** |
| Applicant accepts then **no-shows** the client interview | No automatic refund; HR may grant a goodwill adjustment | **[OQ-4]** |
| Client **rejects** after the interview | No refund | Proposed |
| **Repeat declines** (same applicant declines again, or a client re-invites someone who declined) | To be decided | **[OQ-2]** |
| Recommendation **passed** without an invite | Nothing charged | Confirmed by design |

- Refunds go back to the **credit wallet**, not to the original payment method. Cash refunds of unused credits are a separate admin process **[OQ-7]**.
- Every refund references the original `invite_charge` entry. An invite can be refunded at most once.

### 6.6 Billing views

- **Client:** balance, ledger with filters, pending invites ("credits at stake"), purchase history and receipts.
- **Admin:** all wallets, outstanding manual invoices, credits sold vs. used vs. refunded, and the liability of unused credits.

---

## 7. Anonymization, privacy and reveal logic

### 7.1 Principle

Before acceptance, a client sees **everything useful for evaluating the applicant and nothing that identifies or contacts them**. Identity and contact details are revealed **only to the inviting client organization** and **only when the applicant accepts that client's invite**.

### 7.2 Field visibility to clients

| Data | Before acceptance | After acceptance (inviting org only) |
|---|---|---|
| Full name | Hidden; shown as an alias, for example "Candidate HW-7Q3K" | Shown |
| Email, mobile, home address | Hidden | Shown (address: city or province only unless the applicant shares more **[A-11]**) |
| Photo | Hidden | Shown, if provided |
| Social and portfolio links (LinkedIn, GitHub, personal site) | Hidden; they identify the person | Shown |
| City or province, work setup preference | Shown | Shown |
| Headline, summary | Shown, PII-checked | Shown |
| Work experience: titles, durations, responsibilities | Shown | Shown |
| Employer names | Shown by default; HR can generalize, e.g. "a Top-5 BPO" **[OQ-5]** | Shown |
| Education: degree, field | Shown; school name configurable **[OQ-5]** | Shown |
| Skills, certifications, languages | Shown (certificate IDs hidden) | Shown |
| Expected salary, availability | Shown | Shown |
| HR scorecard and client-shareable notes | Shown | Shown |
| HR internal notes | Never | Never |
| HR interview recording | Shown, under the controls in 7.5 | Shown |
| CV | **Redacted version only**, watermarked | Original CV |
| Age, gender, civil status, religion, government IDs | Not collected or not shown; avoid discrimination-prone and sensitive data **[A-12]** | Not shown unless needed and consented |

### 7.3 Alias rules

- A random, non-sequential alias is generated **per recommendation**, so the same applicant has different aliases at different clients and clients can't correlate them.
- The alias never contains initials, dates, or location.

### 7.4 Redaction and the anonymization checklist

**Redacted CV**

- Phase 1: HR uploads a redacted CV (a PDF with name, contact details, photo, links, and addresses removed). The system requires a redacted CV, or an explicit "No CV shared" choice, before the recommendation can be shared.
- Phase 2: A **redaction helper** detects names, emails, phone numbers, URLs, addresses, and faces in the CV, proposes redactions, and HR reviews and approves. Output is flattened to PDF so redactions can't be undone, and metadata (author, file name) is stripped.
- Redacted files are served with a **viewer watermark** (client organization name, user, timestamp) to discourage leaks.

**Automated PII scan (Phase 1)** of all client-facing text fields (summary, experience descriptions, HR shareable notes, recommendation summary). It flags the applicant's own name, email patterns, PH mobile patterns (+63 / 09xx), URLs, and social handles. HR must fix or explicitly override each flag, and overrides are logged.

**Anonymization checklist (required before sharing)**

1. Redacted CV attached, or "No CV" confirmed.
2. PII scan passes, or each flag has a logged override.
3. Recording reviewed for identity exposure (7.5), or "No recording" selected.
4. File names and metadata contain no name (the system renames files automatically).
5. HR attests: "I confirm this profile does not reveal the applicant's identity or contact details."

### 7.5 Recordings (special risk)

Video recordings inherently show the applicant's **face and voice**, and may include their **name being spoken**. A pasted Meet or Zoom link may also expose the **file owner's account or the applicant's name in the file title**. Requirements:

- R-REC-V-1: HR interview scripts must avoid saying the applicant's full name on the record. Recording starts after introductions.
- R-REC-V-2: Recording links must be shared with **restricted access**. Hireway shows them through a **link-out with a click-to-view audit log**, and HR must confirm that the link's sharing settings don't expose names (for example, a renamed file in a neutral agency-owned folder).
- R-REC-V-3: The applicant's recording consent must explicitly say the recording **may be shown to prospective employers before their identity is revealed**, and that their face and voice will be visible. Applicants can opt out of sharing the recording with clients, in which case only notes are shared.
- R-REC-V-4: Phase 2+: Hireway stores or proxies recordings itself (uploaded from, or fetched through the API from, Meet or Zoom) with signed, expiring URLs, no download, and watermarking. Optional audio-only or transcript-only sharing.
- Whether showing face and voice before reveal is acceptable at all is **[OQ-5]**. The default proposed here is "yes, with explicit applicant consent and an opt-out."

### 7.6 Consent

| Moment | Consent captured |
|---|---|
| Account sign-up | Privacy notice acknowledgement; processing of personal data for recruitment purposes |
| Application | Sharing an **anonymized** profile, notes, and redacted CV with the hiring client |
| HR interview booking | Recording; showing the recording to prospective clients (opt-out available) |
| Invite acceptance | **Reveal** of name, contact details, and full CV to the named client organization |
| Talent pool opt-in (P1) | Being considered and recommended for other roles |

Consents are versioned, timestamped, and withdrawable. Withdrawal stops future processing but doesn't undo a reveal that already happened. The client is then a separate personal information controller for data it already received, under the client terms or data sharing agreement.

### 7.7 Reveal logic

```
on InviteAccepted(invite):
    require invite.status == Sent and applicant confirms reveal consent
    create RevealGrant(applicant, client_org = invite.client_org, job, invite, timestamp)
    set invite.status = Accepted
    notify client (identity now available), HR, applicant (confirmation)
    audit_log("identity_revealed", applicant, client_org)
```

- A reveal is **scoped to one client organization**. Other clients still see the anonymized version.
- A reveal grant is **permanent for that organization** for that applicant, including if the same organization later sees the applicant on another job. There's no second charge just to see identity; another invite still costs credits **[A-13]**.
- Revealed contact details appear only in authenticated views. They are not included in notification emails (emails link back to the app).
- All views of revealed data and redacted CVs are logged.

### 7.8 Anti-circumvention

- Watermarked CVs, alias-per-recommendation, no contact data before reveal, and PII scans.
- Client terms prohibit attempts to identify applicants outside the platform, with contractual penalties **[OQ-14]**.
- HR can flag suspicious client behavior, such as very high profile-view volume with no invites.

---

## 8. Notifications

**Channels:** email (P0), in-app notification center (P0), SMS (P1, applicant-critical events), and optionally Viber or WhatsApp (P2). Emails never contain applicant contact details or sensitive notes. They summarize and link back to the app.

| Event | Applicant | Client | HR | Channel |
|---|---|---|---|---|
| Job request submitted / resubmitted | | Confirmation | ✅ | Email, in-app |
| Changes requested / request rejected / approved / published | | ✅ | | Email, in-app |
| Application submitted | Confirmation | | ✅ (digest option) | Email, in-app |
| Application status changed (shortlisted, not progressed) | ✅ | | | Email, in-app |
| HR interview scheduled, rescheduled, or cancelled | ✅ | | ✅ interviewer | Email, in-app, calendar file (.ics); SMS P1 |
| HR interview reminder (24 h and 1 h) | ✅ | | ✅ | Email; SMS P1 |
| Recommendation shared | | ✅ | | Email, in-app |
| Recommendation expiring soon | | ✅ | ✅ | Email |
| Invite received | ✅ (high priority) | | ✅ | Email, in-app; SMS P1 |
| Invite reminder (halfway through the window and 24 h before expiry) | ✅ | | | Email; SMS P1 |
| Invite accepted (identity revealed) | Confirmation | ✅ | ✅ | Email, in-app |
| Invite declined, expired, cancelled, or voided (with refund note) | | ✅ | ✅ | Email, in-app |
| Client interview scheduled or reminder | ✅ | ✅ | ✅ | Email, in-app |
| Outcome or feedback overdue | | ✅ | ✅ (escalation) | Email, in-app |
| Client outcome recorded | ✅ (gentle outcome) **[OQ-9]** | | ✅ (full feedback) | Email, in-app |
| Credits purchased, granted, or refunded | | ✅ owner | ✅ admin | Email, in-app |
| Low credit balance (below the configured threshold) | | ✅ owner | | Email, in-app |
| New comment or mention | | ✅ | ✅ | In-app; email digest |
| Data subject request submitted | Confirmation | | ✅ admin | Email |

**Rules**

- N-1: Users can mute non-critical notifications. Critical ones (invites, interview schedules, security, billing) can't be disabled.
- N-2: Daily digest option for HR and clients.
- N-3: All notification templates are editable by the admin, with variables. Templates never include contact data before reveal.

---

## 9. Admin, reporting and audit

### 9.1 Dashboards

**Operations (HR):**
- Open job requests by age; jobs by status; applications per job.
- Funnel per job and overall: applied → HR interviewed → recommended → invited → accepted → client accepted → hired.
- SLA timers: request review time, time to first recommendation, invite response time, and feedback turnaround.
- Workload per HR operator.

**Client health:**
- Active clients; jobs per client; invites sent; accept and decline rates; outcome rates; credit balance; last activity.

**Revenue and credits (admin):**
- Credits sold (count and PHP), used, refunded, and outstanding (liability); revenue by client and by month; refund rate and its causes.

**Quality:**
- Client acceptance rate of recommended candidates; average client rating per HR operator; rejection reason breakdown; decline reasons.

**Privacy:**
- Reveals per period; recording and CV views; PII-scan overrides; open data subject requests and their age.

### 9.2 Reports and exports

- CSV export of any list view (admin and HR), with exports logged.
- Monthly client statement: credits purchased, used, and refunded, plus invite outcomes.
- Scheduled email reports (P1).

### 9.3 Audit log

Immutable record of security- and privacy-relevant events: sign-ins, role changes, job status changes, recommendation shares, PII overrides, invite and credit events, reveals, views of revealed data, recordings and CVs, exports, data subject request actions, and settings changes. Each record includes actor, action, target, timestamp, and IP address or device. Retained for at least 3 years **[A-14]**.

---

## 10. Non-functional requirements

### 10.1 Security

| ID | Requirement |
|---|---|
| NFR-SEC-1 | Role-based access control enforced on the server for every request (Section 3.3) |
| NFR-SEC-2 | MFA required for agency staff and client owners. Optional for client members and applicants |
| NFR-SEC-3 | Passwords hashed with a modern algorithm (Argon2 or bcrypt). Rate limiting and lockout on sign-in. Breached-password check |
| NFR-SEC-4 | TLS 1.2+ everywhere. Encryption at rest for databases and file storage. Field-level encryption for contact details and government IDs (if any) |
| NFR-SEC-5 | Files (CVs, redacted CVs) stored privately and served through short-lived signed URLs. Malware scanning on upload |
| NFR-SEC-6 | Strict separation between redacted and original CVs at the storage and authorization layer. The original is unreachable by any client without a reveal grant |
| NFR-SEC-7 | Idempotency and transactional integrity for all credit operations. Payment webhooks verified by signature. No card data stored (PCI scope stays with the provider) |
| NFR-SEC-8 | Protection against OWASP Top 10 risks. Annual penetration test before and after major releases |
| NFR-SEC-9 | Session timeout (staff: 12 h absolute, 30 min idle, configurable). Device and session management |
| NFR-SEC-10 | Least-privilege access for the agency's own infrastructure and admin tools. Secrets kept in a managed vault |

### 10.2 Data privacy: Philippines Data Privacy Act of 2012 (RA 10173)

The agency acts as a **personal information controller (PIC)** for applicant data. Clients become PICs for data revealed to them. The hosting and service vendors (cloud provider, email or SMS provider, payment provider) are **personal information processors (PIPs)**.

| ID | Requirement |
|---|---|
| NFR-DPA-1 | **Lawful basis and consent:** consent captured as described in Section 7.6, freely given, specific, informed, and recorded with version and time |
| NFR-DPA-2 | **Transparency:** a clear privacy notice that covers purposes, data collected, recipients (clients and vendors), retention, rights, and DPO contact |
| NFR-DPA-3 | **Proportionality and minimization:** collect only what recruitment needs. Don't collect sensitive personal information (age, religion, health, government IDs, etc.) unless legally required and justified **[A-12]** |
| NFR-DPA-4 | **Data subject rights:** be informed, access, object, erasure or blocking, rectification, data portability, and complaint. Requests tracked with a response target (for example, 15 business days) **[A-15]** |
| NFR-DPA-5 | **Data Protection Officer** appointed and registered. **NPC registration** of the data processing system if the agency meets the thresholds **[OQ-17]** |
| NFR-DPA-6 | **Data sharing agreement** or client terms covering the client's obligations for revealed data (use only for recruiting, security, retention, no onward sharing) |
| NFR-DPA-7 | **Outsourcing agreements** with processors (cloud, email, SMS, payments) |
| NFR-DPA-8 | **Breach management:** an incident response plan; notify the National Privacy Commission (NPC) and affected data subjects **within 72 hours** of knowledge of a qualifying breach; keep a breach log |
| NFR-DPA-9 | **Retention:** configurable policies. Proposed: inactive applicant accounts anonymized after 2 years without activity, after a reminder; HR recordings links removed and notes anonymized after 1 year from job close; ledger and financial records kept for the period required by tax law (10 years proposed) **[OQ-18]** |
| NFR-DPA-10 | **Privacy impact assessment (PIA)** completed before launch and updated each phase |
| NFR-DPA-11 | **Cross-border transfer:** if hosting is outside the Philippines, this is disclosed in the privacy notice and covered by processor agreements **[OQ-19]** |
| NFR-DPA-12 | **Deletion vs. records:** on erasure, personal data is removed or anonymized, but anonymized aggregate metrics and financial ledger entries (which contain no applicant PII) remain |

### 10.3 Performance and reliability

- Page load (p75) under 2.5 s on 4G mobile for the job board and applicant pages. Staff and client app actions under 1 s server time (p95).
- Availability target: 99.5% monthly (MVP), 99.9% (later).
- Daily backups with 30-day retention; point-in-time recovery for the database; recovery point objective (RPO) of 24 h or less and recovery time objective (RTO) of 8 h or less (MVP).
- Scales comfortably to about 50 concurrent staff and client users, 200 open jobs, and 100k applicant profiles without redesign.

### 10.4 Usability, accessibility and localization

- Responsive design. Applicant flows are designed mobile-first.
- WCAG 2.1 AA for public and applicant pages.
- English UI at launch; Filipino copy for applicant-facing pages is optional in P1 **[A-16]**.
- Default timezone Asia/Manila, with times shown in the user's timezone if it differs. PHP currency formatting.

### 10.5 Maintainability and operations

- Environments: development, staging, production. Staging uses synthetic data only.
- Centralized logs (without PII in log lines), metrics, uptime monitoring, and error alerting.
- Feature flags for phased rollouts.
- Configurable settings for business rules (timers, prices, reason codes) without code changes.

---

## 11. Success metrics

### 11.1 North-star metric

**Accepted introductions per month**: invites accepted by applicants, which is the point where the client pays and identity is revealed.

### 11.2 Supporting metrics

| Area | Metric | Initial target (to calibrate after 3 months) |
|---|---|---|
| Speed | Median time from job request submitted to published | ≤ 2 business days |
| Speed | Median time from published to first recommendation | ≤ 10 business days |
| Speed | Median applicant response time to invites | ≤ 2 days |
| Quality | Invite acceptance rate (accepted ÷ invites sent) | ≥ 70% |
| Quality | Client interview "accepted" rate (client accepted ÷ client interviews completed) | ≥ 40% |
| Quality | Recommendations passed without invite | ≤ 40% |
| Quality | Average client feedback rating of recommended candidates | ≥ 4.0 / 5 |
| Engagement | Feedback submission rate after client interviews | ≥ 90% within 7 days |
| Revenue | Credits purchased per active client per quarter | Baseline, then +20% |
| Revenue | Refund rate (refunded ÷ charged) | ≤ 30% |
| Applicant | Application completion rate (started → submitted) | ≥ 60% |
| Operations | Share of the pipeline managed in Hireway (vs. spreadsheets) | 100% by end of Phase 1 rollout |
| Privacy | Identity leaks before reveal (confirmed incidents) | 0 |
| Privacy | Data subject requests answered on time | 100% |

---

## 12. Phased roadmap

Phases are sequenced by dependency and value, not dates.

### Phase 1: MVP (run the full workflow end to end)

- Public job board (search, filter, job pages, Apply).
- Accounts for all roles; email sign-in; MFA for staff and client owners.
- Client job requests; HR review, approval, and publishing.
- Applications, HR pipeline (Kanban), Applicant 360.
- HR interviews with **manually pasted** Meet or Zoom links and **recording links**; scorecards and notes (shareable and internal).
- Redacted CV upload, PII scan, anonymization checklist, aliases.
- Recommendations; client anonymized dossier; pass on a recommendation.
- Invites with credit deduction; accept (reveal) and decline (refund); expiry and void handling.
- Client interview logging; outcome and feedback to HR; HR hired confirmation.
- Credits wallet and ledger; **manual invoicing** with admin credit grants; receipts.
- Email and in-app notifications.
- Core dashboards, CSV export, audit log.
- RA 10173 essentials: privacy notice, consents, data subject request handling (manual), retention settings, PIA.

### Phase 2: Monetization and efficiency

- **Online payments** through the chosen provider (**[OQ-1]**: PayMongo, Xendit, or Stripe) with webhook-confirmed credit grants; keep manual invoicing.
- SMS notifications; Google sign-in.
- **Redaction helper** for CVs.
- Secure, Hireway-hosted recording playback (signed URLs, watermark, no download).
- Talent pool search and sourcing; duplicate detection; four-eyes recommendation approval.
- Candidate comparison, bulk invites, "request more candidates".
- Job alerts; `JobPosting` structured data **[OQ-16]**.
- Spending controls for client organizations; low-balance alerts; scheduled reports.
- Self-serve data export for applicants.

### Phase 3: Integrations

- **Google Meet / Google Calendar and Zoom API integration**: create meetings automatically, sync calendars, and import recordings automatically.
- Two-way calendar sync for HR and clients; self-scheduling links for applicants.
- Accounting integration (for example, an export to the agency's accounting software).

### Phase 4: AI assistance (human-in-the-loop)

- **AI transcripts** of HR interviews (Filipino, English, and Taglish support).
- **AI-drafted interview notes and summaries** for HR to edit and approve.
- Automatic PII redaction of transcripts and notes.
- Candidate-to-job match suggestions for HR (assistive, explainable, bias-monitored).
- AI must never make final screening decisions. All client-facing AI output requires HR review.
- Privacy review of AI vendors (data residency, no training on agency data) before rollout.

### Later or optional

- Viber or WhatsApp notifications; Filipino-language UI; native mobile apps; post-hire tracking (probation outcomes, replacement guarantees); a client satisfaction survey.

---

## 13. Open questions and assumptions

### 13.1 Open questions (need a decision)

| # | Question | Proposed default (if any) | Blocks |
|---|---|---|---|
| **OQ-1** | **Payment provider:** PayMongo, Xendit, Stripe, or a combination? Which methods are needed (cards, GCash, Maya, bank transfer, QR Ph)? Manual invoicing stays regardless | Phase 1 manual invoicing; pick a local provider (PayMongo or Xendit) for Phase 2; Stripe only if foreign clients are expected | Phase 2 |
| **OQ-2** | **Repeat declines and re-invites:** Can a client re-invite an applicant who declined? Is a re-invite charged and refunded again? Are there limits or penalties for applicants who repeatedly decline, or for clients who repeatedly get declined? | Allow one re-invite per recommendation after 14 days; same charge and refund rules; no applicant penalty | Phase 1 |
| **OQ-3** | **Expiry and client cancellation:** Is a refund given when an invite expires unanswered, or when the client cancels before a reply? | Full refund for both | Phase 1 |
| **OQ-4** | **After acceptance:** refund or credit if the applicant withdraws or no-shows the client interview? | No automatic refund; HR goodwill adjustment at its discretion | Phase 1 |
| **OQ-5** | **Depth of anonymization:** Should employer names, school names, and the **recording (face and voice)** be visible before reveal, given that they may identify the applicant? | Employers and schools visible, with an HR option to generalize; recording visible with explicit applicant consent and opt-out | Phase 1 |
| **OQ-6** | **Recommendation expiry:** Does a shared recommendation expire if the client takes no action? After how long? | 14 days, extendable by HR | Phase 1 |
| **OQ-7** | **Credit validity and refunds to cash:** Do credits expire? Can unused credits be refunded in cash? | Credits valid 12 months from purchase; no cash refunds except at admin discretion | Phase 1 |
| **OQ-8** | **Client confidentiality:** Can a client stay anonymous on the job board and/or in the invite until the applicant accepts? | Confidential on the board allowed; client name always shown in the invite so the applicant's consent is informed | Phase 1 |
| **OQ-9** | **Feedback to applicants:** Do applicants receive any version of client feedback or rejection reasons? | No verbatim feedback; HR can send an optional summary | Phase 1 |
| **OQ-10** | **Transparency to applicants:** Are applicants told when they've been recommended to a client (before an invite)? | Not shown, to avoid false expectations; covered generally by the privacy notice | Phase 1 |
| **OQ-11** | **Client onboarding:** Do clients self-register, or are they created by the agency only? Is there a contract or KYC step? | Agency-created, or self-sign-up with agency approval; client terms accepted on first sign-in | Phase 1 |
| **OQ-12** | **Who can adjust credits:** Can HR operators grant refunds or bonuses, or only super admins? | Super admin only; HR can request | Phase 1 |
| **OQ-13** | **Tax and invoicing:** Is VAT applied? Are BIR-compliant official receipts and invoices generated in Hireway, or in existing accounting software? | Generate an acknowledgment receipt in Hireway; official invoice from existing accounting | Phase 1 |
| **OQ-14** | **Other revenue and anti-circumvention:** Are there placement fees on hire, subscriptions, or penalties for clients who hire outside the platform? | Credits only in-product; placement fees handled contractually off-platform | Phase 1 (terms) |
| **OQ-15** | **Hire confirmation:** Does the agency need to track actual hire and start date, probation, or replacement guarantees? | Track "Hired" plus start date in Phase 1; guarantees later | Phase 1 |
| **OQ-16** | **Search engine visibility:** Is Google Jobs structured data acceptable under the "own board only" rule? It's discoverability, not syndication | Yes, in Phase 2 | Phase 2 |
| **OQ-17** | **NPC registration and DPO:** Does the agency meet registration thresholds? Who is the DPO? | Appoint a DPO before launch; get a legal check on registration | Launch |
| **OQ-18** | **Retention periods** for applicants, recordings, notes, and financial records | Values proposed in NFR-DPA-9; needs legal sign-off | Launch |
| **OQ-19** | **Hosting location:** Philippine region vs. Singapore or other (affects cross-border disclosure and latency) | Singapore region cloud with disclosure, unless a PH region is required | Phase 1 |
| **OQ-20** | **Multiple openings per job:** Can a client accept several applicants for one job, and does the job auto-close when the openings are filled? | Yes; prompt HR to close when accepted count ≥ openings | Phase 1 |

### 13.2 Assumptions (proceeding unless corrected)

| # | Assumption |
|---|---|
| **A-1** | **Single-tenant:** one HR agency (the user's own). No multi-agency features or white-labelling |
| **A-2** | **"Posted on the web" means the agency's own Hireway job board only.** No syndication to LinkedIn, Indeed, JobStreet, Facebook Jobs, etc. HR may still share job links manually on social media |
| **A-3** | Client members can access all of their organization's jobs by default; the owner can restrict them to specific jobs |
| **A-4** | Published jobs auto-close after 30 days unless extended (configurable) |
| **A-5** | The invite response window is 5 business days (configurable), with reminders |
| **A-6** | The client interview can be scheduled off-platform; Hireway only needs the date logged and the outcome recorded |
| **A-7** | Credits are spent **only** on invites. Viewing recommendations, passing, and messaging HR are free |
| **A-8** | The invite price is a single flat amount for all jobs and clients (no per-role or seniority pricing). Per-client custom pricing can be added later |
| **A-9** | All prices and payments are in PHP |
| **A-10** | Spending controls (caps, approvals) are a Phase 2 nice-to-have |
| **A-11** | Even after reveal, the client sees city or province rather than full street address unless the applicant adds it |
| **A-12** | Hireway does not collect sensitive personal information (age or birthdate, gender, religion, health, government IDs) during recruitment. If needed at hire, it's handled outside Hireway |
| **A-13** | Once revealed to a client organization, an applicant stays revealed to that organization, but each new invite (for another job) still costs credits |
| **A-14** | Audit logs are retained for at least 3 years |
| **A-15** | The agency targets responding to data subject requests within 15 business days, pending legal confirmation |
| **A-16** | The UI is English at launch |
| **A-17** | Meeting and recording links are **pasted manually** by HR in Phase 1. Meet and Zoom API integration and AI transcripts or notes come in later phases (Sections 12, Phase 3 and Phase 4) |
| **A-18** | Applicants must create an account to apply. There's no guest application |
| **A-19** | The client invite is an invitation to a **client-run interview**, not a job offer. The applicant can accept or decline it |

---

## 14. Glossary

| Term | Definition |
|---|---|
| Alias | The random, per-recommendation pseudonym shown to clients instead of the applicant's name |
| Anonymized dossier | The client-facing candidate profile before reveal: profile minus identity, HR notes, recording, and redacted CV |
| Credit | Prepaid unit spent by a client to send one invite (flat price) |
| Invite | A client's paid invitation to a recommended applicant for a client-run interview |
| Ledger | The append-only record of all credit movements for a client organization |
| PIC / PIP | Personal information controller / processor, as defined in RA 10173 |
| Recommendation | HR's decision to present an applicant's anonymized dossier to a client for a specific job |
| Reveal | Granting a client organization access to an applicant's identity and contact details, triggered by the applicant accepting an invite |
| NPC | National Privacy Commission (Philippines) |
| DPO | Data Protection Officer |
