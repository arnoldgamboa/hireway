var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  } catch (e8) {
    throw err = [e8], e8;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/chunks/_/error-template.mjs
var error_template_exports = {};
__export(error_template_exports, {
  template: () => template
});
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
var t, template;
var init_error_template = __esm({
  "server/chunks/_/error-template.mjs"() {
    init_nitro();
    t = { appName: "Nuxt", status: 500, statusText: "Internal server error", description: "This page is temporarily unavailable.", refresh: "Refresh this page" };
    template = /* @__PURE__ */ __name((n8) => (n8 = { ...t, ...n8 }, '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(n8.status) + " - " + escapeHtml(n8.statusText) + " | " + escapeHtml(n8.appName) + '</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb);--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[56px\\]{font-size:56px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-neutral-500{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-neutral-950{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(width>=640px){.sm\\:text-\\[72px\\]{font-size:72px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide"><div class="max-w-520px text-center"><h1 class="font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]">' + escapeHtml(n8.status) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(n8.statusText) + '</h2><p class="mb-4 px-2 text-md text-neutral-500">' + escapeHtml(n8.description) + "</p></div></body></html>"), "template");
  }
});

// server/chunks/build/pages-rKeP87el.mjs
var o, c, n;
var init_pages_rKeP87el = __esm({
  "server/chunks/build/pages-rKeP87el.mjs"() {
    init_entry();
    init_renderer();
    init_nitro();
    o = defineComponent({ __name: "PageHeader", __ssrInlineRender: true, props: { title: {}, subtitle: {} }, setup: /* @__PURE__ */ __name((a13) => (d7, i9, o6, c5) => {
      i9(`<div${ssrRenderAttrs(mergeProps({ class: "page-header" }, c5))} data-v-1d5c932f><div data-v-1d5c932f><h1 class="page-title" data-v-1d5c932f>${ssrInterpolate(a13.title)}</h1>`), a13.subtitle ? i9(`<p class="meta" data-v-1d5c932f>${ssrInterpolate(a13.subtitle)}</p>`) : i9("<!---->"), i9("</div>"), d7.$slots.actions ? (i9('<div class="actions" data-v-1d5c932f>'), ssrRenderSlot(d7.$slots, "actions", {}, null, i9, o6), i9("</div>")) : i9("<!---->"), i9("</div>");
    }, "setup") });
    c = o.setup;
    o.setup = (a13, e8) => {
      const s5 = useSSRContext();
      return (s5.modules || (s5.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue"), c ? c(a13, e8) : void 0;
    };
    n = Object.assign(_plugin_vue_export_helper_default(o, [["__scopeId", "data-v-1d5c932f"]]), { __name: "PageHeader" });
  }
});

// server/chunks/build/new-DKrkv_I0.mjs
var new_DKrkv_I0_exports = {};
__export(new_DKrkv_I0_exports, {
  default: () => b
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var c2, d, b;
var init_new_DKrkv_I0 = __esm({
  "server/chunks/build/new-DKrkv_I0.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_renderer();
    init_nitro();
    c2 = defineComponent({ __name: "new", __ssrInlineRender: true, setup(o6) {
      useRouter(), ga();
      const m8 = reactive({ title: "", department: "", openings: 1, description: "", mustHave: "", niceToHave: "", experience: "", location: "", workSetup: "On-site", employmentType: "Full-time", salaryMin: "", salaryMax: "", discloseSalary: true, benefits: "", startDate: "", interviewProcess: "", confidential: false, attachment: "" });
      return (e8, s5, o7, u9) => {
        const c5 = n;
        s5(`<div${ssrRenderAttrs(u9)}>`), s5(ssrRenderComponent(c5, { title: "New request" }, null, o7)), s5(`<form class="card form-grid form-grid--2 stack-md"><label class="stack-sm"><span>Title</span><input${ssrRenderAttr("value", unref(m8).title)} class="input" required></label><label class="stack-sm"><span>Department</span><input${ssrRenderAttr("value", unref(m8).department)} class="input"></label><label class="stack-sm"><span>Openings</span><input${ssrRenderAttr("value", unref(m8).openings)} type="number" class="input" required></label><label class="stack-sm form-grid" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}"><span>Description</span><textarea class="textarea" required>${ssrInterpolate(unref(m8).description)}</textarea></label><label class="stack-sm"><span>Location</span><input${ssrRenderAttr("value", unref(m8).location)} class="input" required></label><label class="stack-sm"><span>Work setup</span><input${ssrRenderAttr("value", unref(m8).workSetup)} class="input"></label><label class="stack-sm"><span>Employment type</span><input${ssrRenderAttr("value", unref(m8).employmentType)} class="input"></label><div class="row" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}"><button type="button" class="btn btn--secondary">Save draft</button><button type="submit" class="btn btn--primary">Submit</button></div></form></div>`);
      };
    } });
    d = c2.setup;
    c2.setup = (e8, s5) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/client/requests/new.vue"), d ? d(e8, s5) : void 0;
    };
    b = c2;
  }
});

// server/chunks/build/StatusBadge-yWQyWbUP.mjs
var u, i, m;
var init_StatusBadge_yWQyWbUP = __esm({
  "server/chunks/build/StatusBadge-yWQyWbUP.mjs"() {
    init_entry();
    init_renderer();
    init_nitro();
    u = defineComponent({ __name: "StatusBadge", __ssrInlineRender: true, props: { status: {}, tone: {} }, setup(e8) {
      const a13 = e8, o6 = computed(() => {
        if (a13.tone) return a13.tone;
        const e9 = a13.status.toLowerCase();
        return ["draft", "submitted", "screening", "shortlisted", "closed", "archived"].some((s5) => e9.includes(s5)) ? "quiet" : ["rejected", "declined", "withdrawn", "not progressed"].some((s5) => e9.includes(s5)) ? "stopped" : ["approved", "published", "hired", "revealed", "client accepted"].some((s5) => e9.includes(s5)) ? "done" : ["paused", "changes requested", "sla"].some((s5) => e9.includes(s5)) ? "attention" : "moving";
      });
      return (a14, n8, u9, i9) => {
        n8(`<span${ssrRenderAttrs(mergeProps({ class: ["badge", `badge--${unref(o6)}`] }, i9))} data-v-91995d1d>${ssrInterpolate(e8.status)}</span>`);
      };
    } });
    i = u.setup;
    u.setup = (e8, s5) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("components/StatusBadge.vue"), i ? i(e8, s5) : void 0;
    };
    m = Object.assign(_plugin_vue_export_helper_default(u, [["__scopeId", "data-v-91995d1d"]]), { __name: "StatusBadge" });
  }
});

// server/chunks/build/UiModal-D63DZHvN.mjs
var n2, m2, p;
var init_UiModal_D63DZHvN = __esm({
  "server/chunks/build/UiModal-D63DZHvN.mjs"() {
    init_entry();
    init_nitro();
    init_renderer();
    n2 = defineComponent({ __name: "UiModal", __ssrInlineRender: true, props: mergeModels({ title: {} }, { open: { type: Boolean, default: false }, openModifiers: {} }), emits: mergeModels(["close"], ["update:open"]), setup(e8, { emit: a13 }) {
      const o6 = useModel(e8, "open");
      return (a14, s5, t8, n8) => {
        ssrRenderTeleport(s5, (s6) => {
          o6.value ? (s6(`<div class="modal-scrim" data-v-03b41ed7><div class="modal card" role="dialog"${ssrRenderAttr("aria-label", e8.title)} data-v-03b41ed7><h2 class="section-title" data-v-03b41ed7>${ssrInterpolate(e8.title)}</h2>`), ssrRenderSlot(a14.$slots, "default", {}, null, s6, t8), a14.$slots.footer ? (s6('<div class="footer" data-v-03b41ed7>'), ssrRenderSlot(a14.$slots, "footer", {}, null, s6, t8), s6("</div>")) : s6("<!---->"), s6("</div></div>")) : s6("<!---->");
        }, "body", false, t8);
      };
    } });
    m2 = n2.setup;
    n2.setup = (e8, a13) => {
      const s5 = useSSRContext();
      return (s5.modules || (s5.modules = /* @__PURE__ */ new Set())).add("components/UiModal.vue"), m2 ? m2(e8, a13) : void 0;
    };
    p = Object.assign(_plugin_vue_export_helper_default(n2, [["__scopeId", "data-v-03b41ed7"]]), { __name: "UiModal" });
  }
});

// server/chunks/build/useFormat-D5t1w13n.mjs
function formatPht(e8) {
  return new Date(e8.includes("T") ? e8 : `${e8}T12:00:00+08:00`).toLocaleString("en-GB", { timeZone: "Asia/Manila", day: "numeric", month: "short", year: "numeric", hour: e8.includes("T") ? "2-digit" : void 0, minute: e8.includes("T") ? "2-digit" : void 0, hour12: false }).replace(",", ",") + (e8.includes("T"), "");
}
function clientDisplayName(e8, i9, t8, n8) {
  const a13 = n8.orgById(e8);
  return a13 ? i9 && !t8 ? "Confidential client" : a13.name : "Client";
}
function applicantFacingStatus(i9, t8, n8, a13) {
  a13.inviteForApp(i9.id);
  const r3 = a13.orgById(t8)?.name || "Client", o6 = i9.status;
  let s5 = { Submitted: "Application received", Screening: "Under review", Shortlisted: "Interview with Hireway", "HR interview scheduled": "Interview with Hireway", "HR interviewed": "Interview completed", "Not progressed": "Not moving forward", Recommended: "Under review", Invited: "You have an interview invitation", "Accepted invite": `Interview with ${r3}`, "Client interviewing": `Interview with ${r3}`, "Client accepted": `Good news: ${r3} wants to move forward`, "Client rejected": "Not moving forward", Hired: `Good news: ${r3} wants to move forward`, Withdrawn: "Withdrawn", "Declined invite": "You declined this invitation" }[o6] || o6;
  if ("HR interview scheduled" === o6) {
    const t9 = ga().data.interviews.find((e8) => e8.applicationId === i9.id);
    t9 && (s5 += ` \u2014 ${formatPht(t9.scheduledAt)} PHT`);
  }
  return s5;
}
function initials(e8) {
  return e8.split(/\s+/).map((e9) => e9[0]).join("").slice(0, 2).toUpperCase();
}
function applicantStatusLabel(e8) {
  return "Recommended" === e8 ? "Under review" : e8;
}
function formatSalary(e8) {
  if (!e8.salaryDisclosed || !e8.salaryMin && !e8.salaryMax) return "Salary not disclosed";
  const fmt = /* @__PURE__ */ __name((e9) => `\u20B1${e9.toLocaleString("en-PH")}`, "fmt");
  return e8.salaryMin && e8.salaryMax ? `${fmt(e8.salaryMin)}\u2013${fmt(e8.salaryMax)}` : fmt(e8.salaryMin || e8.salaryMax || 0);
}
function aliasTitle(e8) {
  return `Candidate ${e8}`;
}
var init_useFormat_D5t1w13n = __esm({
  "server/chunks/build/useFormat-D5t1w13n.mjs"() {
    init_entry();
    __name(formatPht, "formatPht");
    __name(clientDisplayName, "clientDisplayName");
    __name(applicantFacingStatus, "applicantFacingStatus");
    __name(initials, "initials");
    __name(applicantStatusLabel, "applicantStatusLabel");
    __name(formatSalary, "formatSalary");
    __name(aliasTitle, "aliasTitle");
  }
});

// server/chunks/build/_recId_-DRamf9Sl.mjs
var recId_DRamf9Sl_exports = {};
__export(recId_DRamf9Sl_exports, {
  default: () => N
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var W, L, N;
var init_recId_DRamf9Sl = __esm({
  "server/chunks/build/_recId_-DRamf9Sl.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_UiModal_D63DZHvN();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    W = defineComponent({ __name: "[recId]", __ssrInlineRender: true, setup(e8) {
      const x7 = useRoute$1(), D5 = ga(), W3 = useToast(), L3 = computed(() => String(x7.params.id)), N3 = computed(() => String(x7.params.recId)), F2 = computed(() => D5.jobById(L3.value)), M3 = computed(() => D5.data.recommendations.find((e9) => e9.id === N3.value)), T3 = computed(() => M3.value ? D5.applicationById(M3.value.applicationId) : void 0), Y2 = computed(() => T3.value ? D5.applicantById(T3.value.applicantId) : void 0), E2 = computed(() => D5.ui.clientOrgId), z2 = computed(() => D5.orgById(E2.value)), H2 = computed(() => D5.clientOwner(E2.value)), q4 = computed(() => !!Y2.value && D5.hasReveal(Y2.value.id, E2.value)), G2 = computed(() => D5.data.revealGrants.find((e9) => e9.applicantId === Y2.value?.id && e9.orgId === E2.value)), K2 = computed(() => D5.data.invites.find((e9) => e9.recommendationId === N3.value && e9.orgId === E2.value)), Q2 = computed(() => D5.data.interviews.find((e9) => e9.applicationId === T3.value?.id)), Z2 = computed(() => D5.data.clientOutcomes.find((e9) => e9.applicationId === T3.value?.id)), J2 = ref(false), X2 = ref(false), ee2 = ref(false), ae2 = ref("We would like to schedule an interview."), te2 = ref("Next week, flexible"), ne2 = ref(false), le2 = ref(""), de3 = computed(() => z2.value.balance), se2 = computed(() => Math.max(0, 1 - de3.value)), oe2 = computed(() => `${z2.value.name} \xB7 ${H2.value.name} \xB7 ${formatPht("2026-10-28T12:00:00+08:00")}`), ce2 = computed(() => !!Y2.value && (false !== Y2.value.recordingConsent && !!Q2.value?.recordingLink));
      function sendInvite() {
        !T3.value || !M3.value || de3.value < 1 || (D5.sendInvite({ applicationId: T3.value.id, recommendationId: M3.value.id, orgId: E2.value, message: ae2.value, proposedTimes: te2.value.split(",").map((e9) => e9.trim()) }).ok ? (J2.value = false, W3.show("Invite sent")) : W3.show("Low balance", "danger"));
      }
      __name(sendInvite, "sendInvite");
      function pass() {
        D5.passRecommendation(N3.value, le2.value), ne2.value = false, W3.show("Candidate passed");
      }
      __name(pass, "pass");
      const ie2 = reactive({ result: "Accepted", fit: 3, skills: 3, communication: 3, comment: "", reasonCode: "" });
      function saveOutcome() {
        T3.value && (D5.submitClientOutcome(T3.value.id, { applicationId: T3.value.id, result: ie2.result, ratings: { fit: ie2.fit, skills: ie2.skills, communication: ie2.communication }, comment: ie2.comment, reasonCode: ie2.reasonCode || void 0 }), ee2.value = false, W3.show("Outcome recorded"));
      }
      __name(saveOutcome, "saveOutcome");
      return (e9, a13, t8, n8) => {
        const x8 = n, g9 = m, I4 = p, B3 = na;
        unref(F2) && unref(M3) && unref(T3) && unref(Y2) && unref(F2).orgId === unref(E2) ? (a13(`<div${ssrRenderAttrs(mergeProps({ class: "stack-md" }, n8))} data-v-b63bf1cd>`), a13(ssrRenderComponent(x8, { title: unref(q4) ? unref(Y2).name : ("aliasTitle" in e9 ? e9.aliasTitle : unref(aliasTitle))(unref(M3).alias), subtitle: unref(q4) && unref(G2) ? `Revealed ${("formatPht" in e9 ? e9.formatPht : unref(formatPht))(unref(G2).grantedAt)}` : unref(Y2).city }, { actions: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [unref(q4) ? (openBlock(), createBlock(g9, { key: 0, status: "Revealed", tone: "done" })) : createCommentVNode("", true), unref(q4) ? (openBlock(), createBlock("span", { key: 1, class: "meta" }, toDisplayString(unref(M3).alias), 1)) : createCommentVNode("", true), "shared" !== unref(M3).status || unref(K2) && "Declined" !== unref(K2).status ? createCommentVNode("", true) : (openBlock(), createBlock("button", { key: 2, type: "button", class: "btn btn--primary", disabled: unref(de3) < 1 && "Recommended" === unref(T3).status, onClick: /* @__PURE__ */ __name((e11) => J2.value = true, "onClick") }, toDisplayString(unref(de3) < 1 ? `You need ${unref(se2)} more credit${1 === unref(se2) ? "" : "s"}.` : "Invite"), 9, ["disabled", "onClick"])), unref(K2) ? createCommentVNode("", true) : (openBlock(), createBlock("button", { key: 3, type: "button", class: "btn btn--danger", onClick: /* @__PURE__ */ __name((e11) => ne2.value = true, "onClick") }, "Pass", 8, ["onClick"]))];
          unref(q4) ? a14(ssrRenderComponent(g9, { status: "Revealed", tone: "done" }, null, t9, n9)) : a14("<!---->"), unref(q4) ? a14(`<span class="meta" data-v-b63bf1cd${n9}>${ssrInterpolate(unref(M3).alias)}</span>`) : a14("<!---->"), "shared" !== unref(M3).status || unref(K2) && "Declined" !== unref(K2).status ? a14("<!---->") : a14(`<button type="button" class="btn btn--primary"${includeBooleanAttr(unref(de3) < 1 && "Recommended" === unref(T3).status) ? " disabled" : ""} data-v-b63bf1cd${n9}>${ssrInterpolate(unref(de3) < 1 ? `You need ${unref(se2)} more credit${1 === unref(se2) ? "" : "s"}.` : "Invite")}</button>`), unref(K2) ? a14("<!---->") : a14(`<button type="button" class="btn btn--danger" data-v-b63bf1cd${n9}>Pass</button>`);
        }), _: 1 }, t8)), unref(q4) ? a13(`<p class="meta" data-v-b63bf1cd>Already revealed to ${ssrInterpolate(unref(z2).name)}. A new invite still costs 1 credit.</p>`) : a13("<!---->"), a13('<div class="card stack-md" data-v-b63bf1cd>'), unref(q4) ? a13(`<!--[--><p data-v-b63bf1cd>${ssrInterpolate(unref(Y2).email)} \xB7 ${ssrInterpolate(unref(Y2).mobile)}</p><p data-v-b63bf1cd><a${ssrRenderAttr("href", unref(Y2).linkedInUrl)} data-v-b63bf1cd>LinkedIn</a> \xB7 <a${ssrRenderAttr("href", unref(Y2).portfolioUrl)} data-v-b63bf1cd>Portfolio</a></p><p data-v-b63bf1cd>${ssrInterpolate(unref(Y2).summary)}</p><!--]-->`) : (a13(`<!--[--><p data-v-b63bf1cd>${ssrInterpolate(unref(Y2).summary)}</p><p class="meta" data-v-b63bf1cd>${ssrInterpolate(unref(Y2).workSetup)} \xB7 ${ssrInterpolate(unref(Y2).expectedSalary)} \xB7 ${ssrInterpolate(unref(Y2).availability)}</p><p data-v-b63bf1cd><strong data-v-b63bf1cd>Experience:</strong> ${ssrInterpolate(unref(Y2).experience.title)} at ${ssrInterpolate(unref(Y2).experience.employer)}</p><p data-v-b63bf1cd><strong data-v-b63bf1cd>Education:</strong> ${ssrInterpolate(unref(Y2).education.degree)}, ${ssrInterpolate(unref(Y2).education.school)}</p><p data-v-b63bf1cd>${ssrInterpolate(unref(Y2).skills.join(" \xB7 "))}</p><p data-v-b63bf1cd>${ssrInterpolate(unref(M3).shareableNotes)}</p>`), unref(Q2)?.scorecard ? a13(`<div class="meta" data-v-b63bf1cd> Scorecard \u2014 Communication ${ssrInterpolate(unref(Q2).scorecard.communication)}, Reliability ${ssrInterpolate(unref(Q2).scorecard.reliability)}, Role fit ${ssrInterpolate(unref(Q2).scorecard.roleFit)}</div>`) : a13("<!---->"), a13("<!--]-->")), unref(ce2) ? a13('<div data-v-b63bf1cd><button type="button" class="btn btn--secondary" data-v-b63bf1cd>View recording</button></div>') : false === unref(Y2).recordingConsent ? a13('<p class="meta" data-v-b63bf1cd>No recording shared</p>') : a13("<!---->"), a13(`<div class="${ssrRenderClass([{ watermark: !unref(q4) }, "cv-panel"])}" data-v-b63bf1cd><h3 class="section-title" data-v-b63bf1cd>${ssrInterpolate(unref(q4) ? "Original CV" : "Redacted CV")}</h3><!--[-->`), ssrRenderList$2(8, (e10) => {
          a13(`<p class="meta" data-v-b63bf1cd>CV line ${ssrInterpolate(e10)} \u2014 placeholder content for demo.</p>`);
        }), a13("<!--]-->"), unref(q4) ? a13("<!---->") : a13(`<span class="wm" data-v-b63bf1cd>${ssrInterpolate(unref(oe2))}</span>`), a13('</div><button type="button" class="btn btn--secondary" data-v-b63bf1cd>Download</button></div>'), unref(Z2) && unref(q4) ? (a13(`<div class="card stack-sm" data-v-b63bf1cd><h3 class="section-title" data-v-b63bf1cd>Client feedback (internal)</h3><p data-v-b63bf1cd>Ratings: fit ${ssrInterpolate(unref(Z2).ratings.fit)}, skills ${ssrInterpolate(unref(Z2).ratings.skills)}, communication ${ssrInterpolate(unref(Z2).ratings.communication)}</p>`), unref(Z2).reasonCode ? a13(`<p data-v-b63bf1cd>Reason: ${ssrInterpolate(unref(Z2).reasonCode)}</p>`) : a13("<!---->"), a13(`<p data-v-b63bf1cd>${ssrInterpolate(unref(Z2).comment)}</p></div>`)) : a13("<!---->"), unref(q4) && "Accepted" === unref(K2)?.status ? a13('<div class="card stack-md" data-v-b63bf1cd><button type="button" class="btn btn--primary" data-v-b63bf1cd>Record outcome</button></div>') : a13("<!---->"), a13(ssrRenderComponent(I4, { open: unref(J2), "onUpdate:open": /* @__PURE__ */ __name((e10) => isRef(J2) ? J2.value = e10 : null, "onUpdate:open"), title: "Send interview invite" }, { footer: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [createVNode("button", { type: "button", class: "btn btn--secondary", onClick: /* @__PURE__ */ __name((e11) => J2.value = false, "onClick") }, "Cancel", 8, ["onClick"]), createVNode("button", { type: "button", class: "btn btn--primary", disabled: unref(de3) < 1, onClick: sendInvite }, "Confirm invite", 8, ["disabled"])];
          a14(`<button type="button" class="btn btn--secondary" data-v-b63bf1cd${n9}>Cancel</button><button type="button" class="btn btn--primary"${includeBooleanAttr(unref(de3) < 1) ? " disabled" : ""} data-v-b63bf1cd${n9}>Confirm invite</button>`);
        }), default: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [createVNode("p", null, "Cost: 1 credit \xB7 Balance: " + toDisplayString(unref(de3)), 1), createVNode("label", { class: "stack-sm" }, [createVNode("span", null, "Message"), withDirectives(createVNode("textarea", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => isRef(ae2) ? ae2.value = e11 : null, "onUpdate:modelValue"), class: "textarea" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ae2)]])]), createVNode("label", { class: "stack-sm" }, [createVNode("span", null, "Proposed times (comma separated)"), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => isRef(te2) ? te2.value = e11 : null, "onUpdate:modelValue"), class: "input" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(te2)]])]), unref(de3) < 1 ? (openBlock(), createBlock("p", { key: 0, class: "meta" }, [createTextVNode("You need " + toDisplayString(unref(se2)) + " more credits. ", 1), createVNode(B3, { to: "/client/wallet" }, { default: withCtx(() => [createTextVNode("Wallet")]), _: 1 })])) : createCommentVNode("", true)];
          a14(`<p data-v-b63bf1cd${n9}>Cost: 1 credit \xB7 Balance: ${ssrInterpolate(unref(de3))}</p><label class="stack-sm" data-v-b63bf1cd${n9}><span data-v-b63bf1cd${n9}>Message</span><textarea class="textarea" data-v-b63bf1cd${n9}>${ssrInterpolate(unref(ae2))}</textarea></label><label class="stack-sm" data-v-b63bf1cd${n9}><span data-v-b63bf1cd${n9}>Proposed times (comma separated)</span><input${ssrRenderAttr("value", unref(te2))} class="input" data-v-b63bf1cd${n9}></label>`), unref(de3) < 1 ? (a14(`<p class="meta" data-v-b63bf1cd${n9}>You need ${ssrInterpolate(unref(se2))} more credits. `), a14(ssrRenderComponent(B3, { to: "/client/wallet" }, { default: withCtx((e11, a15, t10, n10) => {
            if (!a15) return [createTextVNode("Wallet")];
            a15("Wallet");
          }), _: 1 }, t9, n9)), a14("</p>")) : a14("<!---->");
        }), _: 1 }, t8)), a13(ssrRenderComponent(I4, { open: unref(X2), "onUpdate:open": /* @__PURE__ */ __name((e10) => isRef(X2) ? X2.value = e10 : null, "onUpdate:open"), title: "Interview recording" }, { default: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [createVNode("p", null, toDisplayString(unref(Q2)?.recordingLink), 1), createVNode("p", { class: "meta" }, "View recorded for this demo.")];
          a14(`<p data-v-b63bf1cd${n9}>${ssrInterpolate(unref(Q2)?.recordingLink)}</p><p class="meta" data-v-b63bf1cd${n9}>View recorded for this demo.</p>`);
        }), _: 1 }, t8)), a13(ssrRenderComponent(I4, { open: unref(ne2), "onUpdate:open": /* @__PURE__ */ __name((e10) => isRef(ne2) ? ne2.value = e10 : null, "onUpdate:open"), title: "Pass candidate" }, { footer: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [createVNode("button", { type: "button", class: "btn btn--secondary", onClick: /* @__PURE__ */ __name((e11) => ne2.value = false, "onClick") }, "Cancel", 8, ["onClick"]), createVNode("button", { type: "button", class: "btn btn--danger", onClick: pass }, "Pass")];
          a14(`<button type="button" class="btn btn--secondary" data-v-b63bf1cd${n9}>Cancel</button><button type="button" class="btn btn--danger" data-v-b63bf1cd${n9}>Pass</button>`);
        }), default: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [withDirectives(createVNode("textarea", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => isRef(le2) ? le2.value = e11 : null, "onUpdate:modelValue"), class: "textarea", placeholder: "Optional reason" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(le2)]])];
          a14(`<textarea class="textarea" placeholder="Optional reason" data-v-b63bf1cd${n9}>${ssrInterpolate(unref(le2))}</textarea>`);
        }), _: 1 }, t8)), a13(ssrRenderComponent(I4, { open: unref(ee2), "onUpdate:open": /* @__PURE__ */ __name((e10) => isRef(ee2) ? ee2.value = e10 : null, "onUpdate:open"), title: "Record outcome" }, { footer: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [createVNode("button", { type: "button", class: "btn btn--primary", onClick: saveOutcome }, "Save")];
          a14(`<button type="button" class="btn btn--primary" data-v-b63bf1cd${n9}>Save</button>`);
        }), default: withCtx((e10, a14, t9, n9) => {
          if (!a14) return [withDirectives(createVNode("select", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => unref(ie2).result = e11, "onUpdate:modelValue"), class: "select" }, [createVNode("option", { value: "Accepted" }, "Accepted"), createVNode("option", { value: "Rejected" }, "Rejected")], 8, ["onUpdate:modelValue"]), [[ui, unref(ie2).result]]), createVNode("label", null, [createTextVNode("Fit "), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => unref(ie2).fit = e11, "onUpdate:modelValue"), type: "number", min: "1", max: "5", class: "input" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ie2).fit, void 0, { number: true }]])]), createVNode("label", null, [createTextVNode("Skills "), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => unref(ie2).skills = e11, "onUpdate:modelValue"), type: "number", min: "1", max: "5", class: "input" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ie2).skills, void 0, { number: true }]])]), createVNode("label", null, [createTextVNode("Communication "), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => unref(ie2).communication = e11, "onUpdate:modelValue"), type: "number", min: "1", max: "5", class: "input" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ie2).communication, void 0, { number: true }]])]), withDirectives(createVNode("textarea", { "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => unref(ie2).comment = e11, "onUpdate:modelValue"), class: "textarea", placeholder: "Comment" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ie2).comment]]), "Rejected" === unref(ie2).result ? withDirectives((openBlock(), createBlock("input", { key: 0, "onUpdate:modelValue": /* @__PURE__ */ __name((e11) => unref(ie2).reasonCode = e11, "onUpdate:modelValue"), class: "input", placeholder: "Reason code" }, null, 8, ["onUpdate:modelValue"])), [[ci, unref(ie2).reasonCode]]) : createCommentVNode("", true)];
          a14(`<select class="select" data-v-b63bf1cd${n9}><option value="Accepted" data-v-b63bf1cd${includeBooleanAttr(Array.isArray(unref(ie2).result) ? ssrLooseContain(unref(ie2).result, "Accepted") : we(unref(ie2).result, "Accepted")) ? " selected" : ""}${n9}>Accepted</option><option value="Rejected" data-v-b63bf1cd${includeBooleanAttr(Array.isArray(unref(ie2).result) ? ssrLooseContain(unref(ie2).result, "Rejected") : we(unref(ie2).result, "Rejected")) ? " selected" : ""}${n9}>Rejected</option></select><label data-v-b63bf1cd${n9}>Fit <input${ssrRenderAttr("value", unref(ie2).fit)} type="number" min="1" max="5" class="input" data-v-b63bf1cd${n9}></label><label data-v-b63bf1cd${n9}>Skills <input${ssrRenderAttr("value", unref(ie2).skills)} type="number" min="1" max="5" class="input" data-v-b63bf1cd${n9}></label><label data-v-b63bf1cd${n9}>Communication <input${ssrRenderAttr("value", unref(ie2).communication)} type="number" min="1" max="5" class="input" data-v-b63bf1cd${n9}></label><textarea class="textarea" placeholder="Comment" data-v-b63bf1cd${n9}>${ssrInterpolate(unref(ie2).comment)}</textarea>`), "Rejected" === unref(ie2).result ? a14(`<input${ssrRenderAttr("value", unref(ie2).reasonCode)} class="input" placeholder="Reason code" data-v-b63bf1cd${n9}>`) : a14("<!---->");
        }), _: 1 }, t8)), a13("</div>")) : a13(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, n8))} data-v-b63bf1cd>Candidate not found.</div>`);
      };
    } });
    L = W.setup;
    W.setup = (e8, a13) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/client/jobs/[id]/candidates/[recId].vue"), L ? L(e8, a13) : void 0;
    };
    N = _plugin_vue_export_helper_default(W, [["__scopeId", "data-v-b63bf1cd"]]);
  }
});

// server/chunks/build/_id_-C_CeCOA8.mjs
var id_C_CeCOA8_exports = {};
__export(id_C_CeCOA8_exports, {
  default: () => O
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var D, M, O;
var init_id_C_CeCOA8 = __esm({
  "server/chunks/build/_id_-C_CeCOA8.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_UiModal_D63DZHvN();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    D = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(a13) {
      const $4 = useRoute$1(), F2 = ga(), D5 = useToast(), M3 = ["Submitted", "Screening", "Shortlisted", "HR interview scheduled", "HR interviewed", "Not progressed", "Recommended", "Invited", "Accepted invite", "Client interviewing", "Client accepted", "Client rejected", "Hired", "Withdrawn", "Declined invite"], O3 = computed(() => F2.applicationById(String($4.params.id))), W3 = computed(() => O3.value ? F2.applicantById(O3.value.applicantId) : void 0), q4 = computed(() => O3.value ? F2.jobById(O3.value.jobId) : void 0), z2 = computed(() => O3.value ? F2.recForApp(O3.value.id) : void 0), E2 = computed(() => O3.value ? F2.inviteForApp(O3.value.id) : void 0), G2 = computed(() => F2.data.interviews.find((a14) => a14.applicationId === O3.value?.id)), T3 = computed(() => F2.data.clientOutcomes.find((a14) => a14.applicationId === O3.value?.id)), Z2 = computed(() => q4.value?.orgId ?? ""), K2 = computed(() => Z2.value ? F2.orgById(Z2.value) : void 0), Q2 = computed(() => F2.data.applications.filter((a14) => a14.applicantId === W3.value?.id).map((a14) => ({ app: a14, job: F2.jobById(a14.jobId) }))), J2 = ref(false), X2 = (function(a14, e8, l8) {
        const s5 = ga(), d7 = computed(() => {
          const e9 = a14.value, t8 = l8.value;
          return !(!e9 || !t8) && s5.hasReveal(e9.id, t8);
        });
        return { revealed: d7, displayTitle: computed(() => {
          const t8 = a14.value, l9 = e8.value;
          return t8 ? d7.value ? t8.name : l9 ? aliasTitle(l9.alias) : t8.name : "";
        }), showContact: computed(() => d7.value), showInternalNotes: computed(() => false) };
      })(W3, z2, Z2), Y2 = reactive({ scheduledAt: "", platform: "Google Meet", link: "", interviewer: "Hana Cruz", status: "Scheduled", recordingLink: "", communication: 3, reliability: 3, roleFit: 3, shareableNotes: "", internalNotes: "" });
      watch(G2, (a14) => {
        a14 && (Y2.scheduledAt = a14.scheduledAt.slice(0, 16), Y2.platform = a14.platform, Y2.link = a14.link, Y2.interviewer = a14.interviewer, Y2.status = a14.status, Y2.recordingLink = a14.recordingLink || "", Y2.communication = a14.scorecard?.communication ?? 3, Y2.reliability = a14.scorecard?.reliability ?? 3, Y2.roleFit = a14.scorecard?.roleFit ?? 3, Y2.shareableNotes = a14.shareableNotes || "", Y2.internalNotes = a14.internalNotes || "");
      }, { immediate: true });
      const aa2 = ref(false), ea2 = ref(""), ta2 = ref(""), la2 = ref(false), sa2 = ref(false), da2 = ref(false), ca2 = ref(false), na2 = ref(false), ia2 = reactive({});
      watch(aa2, (a14) => {
        a14 && W3.value && (ea2.value = `${W3.value.headline} for ${q4.value?.title || "this role"}.`, ta2.value = G2.value?.shareableNotes || W3.value.summary, Object.keys(ia2).forEach((a15) => delete ia2[a15]));
      });
      const oa2 = computed(() => (function(a14, e8) {
        const t8 = [];
        return e8 && a14.toLowerCase().includes(e8.toLowerCase()) && t8.push({ id: "name", label: "Applicant name detected" }), /[\w.-]+@[\w.-]+\.\w+/.test(a14) && t8.push({ id: "email", label: "Email pattern detected" }), /(\+63|09)\d/.test(a14.replace(/\s/g, "")) && t8.push({ id: "mobile", label: "PH mobile pattern detected" }), /https?:\/\//.test(a14) && t8.push({ id: "url", label: "URL detected" }), t8;
      })(ta2.value, W3.value?.name || "")), ra2 = computed(() => oa2.value.every((a14) => (ia2[a14.id] || "").trim().length > 0)), ua2 = computed(() => !!na2.value && (!(!la2.value && !sa2.value) && (!(!da2.value && !ca2.value) && (!!ra2.value && ea2.value.trim().length > 0))));
      function shareRecommend() {
        O3.value && ua2.value ? F2.shareRecommendation(O3.value.id, { whySummary: ea2.value, shareableNotes: ta2.value, internalNotes: Y2.internalNotes }) && (aa2.value = false, D5.show("Recommendation shared")) : D5.show("Checklist incomplete", "danger");
      }
      __name(shareRecommend, "shareRecommend");
      const ba2 = computed(() => J2.value && z2.value ? X2.displayTitle.value : W3.value?.name || "");
      return (a14, e8, t8, l8) => {
        const r3 = n, $5 = m, x7 = na, A3 = p;
        unref(O3) && unref(W3) && unref(q4) ? (e8(`<div${ssrRenderAttrs(mergeProps({ class: "stack-md" }, l8))} data-v-bd27155c>`), e8(ssrRenderComponent(r3, { title: unref(ba2), subtitle: `${unref(W3).city} \xB7 ${unref(W3).headline}` }, { actions: withCtx((a15, e9, t9, l9) => {
          if (!e9) return [unref(J2) ? createCommentVNode("", true) : (openBlock(), createBlock("select", { key: 0, class: "select status-select", value: unref(O3).status, onChange: /* @__PURE__ */ __name((a16) => unref(F2).setApplicationStatus(unref(O3).id, a16.target.value), "onChange") }, [(openBlock(), createBlock(So, null, renderList$2(M3, (a16) => createVNode("option", { key: a16, value: a16 }, toDisplayString(a16), 9, ["value"])), 64))], 40, ["value", "onChange"])), unref(z2) ? (openBlock(), createBlock("button", { key: 1, type: "button", class: "btn btn--secondary", onClick: /* @__PURE__ */ __name((a16) => J2.value = !unref(J2), "onClick") }, toDisplayString(unref(J2) ? "Back to HR view" : "View as client"), 9, ["onClick"])) : createCommentVNode("", true)];
          unref(J2) ? e9("<!---->") : (e9(`<select class="select status-select"${ssrRenderAttr("value", unref(O3).status)} data-v-bd27155c${l9}><!--[-->`), ssrRenderList$2(M3, (a16) => {
            e9(`<option${ssrRenderAttr("value", a16)} data-v-bd27155c${l9}>${ssrInterpolate(a16)}</option>`);
          }), e9("<!--]--></select>")), unref(z2) ? e9(`<button type="button" class="btn btn--secondary" data-v-bd27155c${l9}>${ssrInterpolate(unref(J2) ? "Back to HR view" : "View as client")}</button>`) : e9("<!---->");
        }), _: 1 }, t8)), unref(J2) ? e8("<!---->") : e8(`<div class="card stack-sm" data-v-bd27155c><p data-v-bd27155c>${ssrInterpolate(unref(W3).email)} \xB7 ${ssrInterpolate(unref(W3).mobile)}</p><p data-v-bd27155c>${ssrInterpolate(unref(W3).expectedSalary)}</p><p class="meta" data-v-bd27155c><a${ssrRenderAttr("href", unref(W3).linkedInUrl)} data-v-bd27155c>LinkedIn</a> \xB7 <a${ssrRenderAttr("href", unref(W3).portfolioUrl)} data-v-bd27155c>Portfolio</a></p></div>`), unref(J2) && unref(z2) ? e8(`<div class="banner banner--info" data-v-bd27155c>Client preview \u2014 ${ssrInterpolate(unref(K2)?.name)}</div>`) : e8("<!---->"), unref(J2) && unref(z2) ? (e8('<div class="card stack-md" data-v-bd27155c>'), unref(X2).revealed.value ? e8(ssrRenderComponent($5, { status: "Revealed", tone: "done" }, null, t8)) : e8("<!---->"), unref(X2).showContact.value ? e8(`<p data-v-bd27155c>${ssrInterpolate(unref(W3).email)} \xB7 ${ssrInterpolate(unref(W3).mobile)}</p>`) : e8("<!---->"), unref(X2).showContact.value ? e8(`<p data-v-bd27155c><a${ssrRenderAttr("href", unref(W3).linkedInUrl)} data-v-bd27155c>LinkedIn</a> \xB7 <a${ssrRenderAttr("href", unref(W3).portfolioUrl)} data-v-bd27155c>Portfolio</a></p>`) : e8("<!---->"), e8(`<p class="meta" data-v-bd27155c>${ssrInterpolate(unref(W3).city)}</p><p data-v-bd27155c>${ssrInterpolate(unref(W3).summary)}</p><p data-v-bd27155c>${ssrInterpolate(unref(z2).shareableNotes)}</p><div class="cv-panel" data-v-bd27155c><h3 class="section-title" data-v-bd27155c>${ssrInterpolate(unref(X2).revealed.value ? "Original CV" : "Redacted CV")}</h3><!--[-->`), ssrRenderList$2(8, (a15) => {
          e8(`<p class="meta" data-v-bd27155c>CV line ${ssrInterpolate(a15)}</p>`);
        }), e8("<!--]--></div></div>")) : (e8('<!--[--><div class="card stack-md" data-v-bd27155c><h2 class="section-title" data-v-bd27155c>All applications</h2><ul data-v-bd27155c><!--[-->'), ssrRenderList$2(unref(Q2), (a15) => {
          e8("<li data-v-bd27155c>"), e8(ssrRenderComponent(x7, { to: `/hr/jobs/${a15.app.jobId}/applications/${a15.app.id}` }, { default: withCtx((e9, t9, l9, s5) => {
            if (!t9) return [createTextVNode(toDisplayString(a15.job?.title) + " \u2014 " + toDisplayString(a15.app.status), 1)];
            t9(`${ssrInterpolate(a15.job?.title)} \u2014 ${ssrInterpolate(a15.app.status)}`);
          }), _: 2 }, t8)), e8("</li>");
        }), e8(`<!--]--></ul></div><div class="card stack-md" data-v-bd27155c><h2 class="section-title" data-v-bd27155c>HR interview log</h2><div class="form-grid form-grid--2" data-v-bd27155c><label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Date &amp; time</span><input${ssrRenderAttr("value", unref(Y2).scheduledAt)} type="datetime-local" class="input" data-v-bd27155c></label><label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Platform</span><select class="select" data-v-bd27155c><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).platform) ? ssrLooseContain(unref(Y2).platform, null) : we(unref(Y2).platform, null)) ? " selected" : ""}>Google Meet</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).platform) ? ssrLooseContain(unref(Y2).platform, null) : we(unref(Y2).platform, null)) ? " selected" : ""}>Zoom</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).platform) ? ssrLooseContain(unref(Y2).platform, null) : we(unref(Y2).platform, null)) ? " selected" : ""}>phone</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).platform) ? ssrLooseContain(unref(Y2).platform, null) : we(unref(Y2).platform, null)) ? " selected" : ""}>in person</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).platform) ? ssrLooseContain(unref(Y2).platform, null) : we(unref(Y2).platform, null)) ? " selected" : ""}>other</option></select></label><label class="stack-sm form-grid" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-bd27155c><span data-v-bd27155c>Meeting link</span><input${ssrRenderAttr("value", unref(Y2).link)} class="input" data-v-bd27155c></label><label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Interviewer</span><input${ssrRenderAttr("value", unref(Y2).interviewer)} class="input" data-v-bd27155c></label><label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Status</span><select class="select" data-v-bd27155c><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).status) ? ssrLooseContain(unref(Y2).status, null) : we(unref(Y2).status, null)) ? " selected" : ""}>Scheduled</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).status) ? ssrLooseContain(unref(Y2).status, null) : we(unref(Y2).status, null)) ? " selected" : ""}>Completed</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).status) ? ssrLooseContain(unref(Y2).status, null) : we(unref(Y2).status, null)) ? " selected" : ""}>No-show</option><option data-v-bd27155c${includeBooleanAttr(Array.isArray(unref(Y2).status) ? ssrLooseContain(unref(Y2).status, null) : we(unref(Y2).status, null)) ? " selected" : ""}>Cancelled</option></select></label></div>`), "Completed" === unref(Y2).status ? e8(`<!--[--><label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Recording link</span><input${ssrRenderAttr("value", unref(Y2).recordingLink)} class="input" data-v-bd27155c></label><div class="row" data-v-bd27155c><label data-v-bd27155c>Communication <input${ssrRenderAttr("value", unref(Y2).communication)} type="number" min="1" max="5" class="input" style="${ssrRenderStyle({ width: "4rem" })}" data-v-bd27155c></label><label data-v-bd27155c>Reliability <input${ssrRenderAttr("value", unref(Y2).reliability)} type="number" min="1" max="5" class="input" style="${ssrRenderStyle({ width: "4rem" })}" data-v-bd27155c></label><label data-v-bd27155c>Role fit <input${ssrRenderAttr("value", unref(Y2).roleFit)} type="number" min="1" max="5" class="input" style="${ssrRenderStyle({ width: "4rem" })}" data-v-bd27155c></label></div><!--]-->`) : e8("<!---->"), e8(`<label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Client-shareable notes</span><textarea class="textarea" data-v-bd27155c>${ssrInterpolate(unref(Y2).shareableNotes)}</textarea></label><label class="stack-sm" data-v-bd27155c><span data-v-bd27155c>Internal notes</span><textarea class="textarea internal" data-v-bd27155c>${ssrInterpolate(unref(Y2).internalNotes)}</textarea></label><button type="button" class="btn btn--primary" data-v-bd27155c>Save interview</button></div>`), unref(z2) ? (e8(`<div class="card stack-md" data-v-bd27155c><h2 class="section-title" data-v-bd27155c>Recommendation</h2><p data-v-bd27155c>Alias ${ssrInterpolate(unref(z2).alias)} \xB7 ${ssrInterpolate(unref(z2).whySummary)}</p><p data-v-bd27155c>${ssrInterpolate(unref(z2).shareableNotes)}</p>`), unref(z2).internalNotes ? e8(`<p class="internal-block" data-v-bd27155c><strong data-v-bd27155c>Internal</strong> ${ssrInterpolate(unref(z2).internalNotes)}</p>`) : e8("<!---->"), e8("</div>")) : e8('<div class="card stack-md" data-v-bd27155c><h2 class="section-title" data-v-bd27155c>Recommend to client</h2><button type="button" class="btn btn--primary" data-v-bd27155c>Recommend</button></div>'), unref(E2) ? (e8('<div class="card stack-md" data-v-bd27155c><h2 class="section-title" data-v-bd27155c>Invite</h2>'), e8(ssrRenderComponent($5, { status: unref(E2).status }, null, t8)), e8('<div class="row" data-v-bd27155c><button type="button" class="btn btn--secondary" data-v-bd27155c>Nudge</button>'), "Sent" === unref(E2).status ? e8('<button type="button" class="btn btn--danger" data-v-bd27155c>Void</button>') : e8("<!---->"), e8("</div></div>")) : e8("<!---->"), unref(T3) ? (e8(`<div class="card stack-md" data-v-bd27155c><h2 class="section-title" data-v-bd27155c>Client outcome</h2><p data-v-bd27155c>${ssrInterpolate(unref(T3).result)} \u2014 ratings ${ssrInterpolate(unref(T3).ratings.fit)}/${ssrInterpolate(unref(T3).ratings.skills)}/${ssrInterpolate(unref(T3).ratings.communication)}</p><p data-v-bd27155c>${ssrInterpolate(unref(T3).comment)}</p>`), "Accepted" === unref(T3).result && "Hired" !== unref(O3).status ? e8('<div class="row" data-v-bd27155c><button type="button" class="btn btn--primary" data-v-bd27155c>Mark hired</button><button type="button" class="btn btn--secondary" data-v-bd27155c>Not hired</button></div>') : e8("<!---->"), e8("</div>")) : e8("<!---->"), e8("<!--]-->")), e8(ssrRenderComponent(A3, { open: unref(aa2), "onUpdate:open": /* @__PURE__ */ __name((a15) => isRef(aa2) ? aa2.value = a15 : null, "onUpdate:open"), title: "Share recommendation" }, { footer: withCtx((a15, e9, t9, l9) => {
          if (!e9) return [createVNode("button", { type: "button", class: "btn btn--secondary", onClick: /* @__PURE__ */ __name((a16) => aa2.value = false, "onClick") }, "Cancel", 8, ["onClick"]), createVNode("button", { type: "button", class: "btn btn--primary", disabled: !unref(ua2), onClick: shareRecommend }, "Share", 8, ["disabled"])];
          e9(`<button type="button" class="btn btn--secondary" data-v-bd27155c${l9}>Cancel</button><button type="button" class="btn btn--primary"${includeBooleanAttr(!unref(ua2)) ? " disabled" : ""} data-v-bd27155c${l9}>Share</button>`);
        }), default: withCtx((a15, e9, t9, l9) => {
          if (!e9) return [createVNode("label", { class: "stack-sm" }, [createVNode("span", null, "Why this candidate"), withDirectives(createVNode("textarea", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(ea2) ? ea2.value = a16 : null, "onUpdate:modelValue"), class: "textarea" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ea2)]])]), createVNode("label", { class: "stack-sm" }, [createVNode("span", null, "Client-shareable notes"), withDirectives(createVNode("textarea", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(ta2) ? ta2.value = a16 : null, "onUpdate:modelValue"), class: "textarea" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ta2)]])]), unref(oa2).length ? (openBlock(), createBlock("div", { key: 0, class: "stack-sm" }, [createVNode("p", { class: "section-title" }, "PII scan"), (openBlock(true), createBlock(So, null, renderList$2(unref(oa2), (a16) => (openBlock(), createBlock("div", { key: a16.id, class: "stack-sm" }, [createVNode("span", { class: "meta" }, toDisplayString(a16.label), 1), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e10) => unref(ia2)[a16.id] = e10, "onUpdate:modelValue"), class: "input", placeholder: "Override reason (required)" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(ia2)[a16.id]]])]))), 128))])) : createCommentVNode("", true), createVNode("label", { class: "row" }, [withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(la2) ? la2.value = a16 : null, "onUpdate:modelValue"), type: "checkbox" }, null, 8, ["onUpdate:modelValue"]), [[li, unref(la2)]]), createTextVNode(" Redacted CV attached")]), createVNode("label", { class: "row" }, [withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(sa2) ? sa2.value = a16 : null, "onUpdate:modelValue"), type: "checkbox" }, null, 8, ["onUpdate:modelValue"]), [[li, unref(sa2)]]), createTextVNode(" No CV")]), createVNode("label", { class: "row" }, [withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(ca2) ? ca2.value = a16 : null, "onUpdate:modelValue"), type: "checkbox" }, null, 8, ["onUpdate:modelValue"]), [[li, unref(ca2)]]), createTextVNode(" Recording reviewed")]), createVNode("label", { class: "row" }, [withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(da2) ? da2.value = a16 : null, "onUpdate:modelValue"), type: "checkbox" }, null, 8, ["onUpdate:modelValue"]), [[li, unref(da2)]]), createTextVNode(" No recording")]), createVNode("label", { class: "row" }, [withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((a16) => isRef(na2) ? na2.value = a16 : null, "onUpdate:modelValue"), type: "checkbox" }, null, 8, ["onUpdate:modelValue"]), [[li, unref(na2)]]), createTextVNode(" I confirm this profile does not reveal the applicant's identity or contact details.")])];
          e9(`<label class="stack-sm" data-v-bd27155c${l9}><span data-v-bd27155c${l9}>Why this candidate</span><textarea class="textarea" data-v-bd27155c${l9}>${ssrInterpolate(unref(ea2))}</textarea></label><label class="stack-sm" data-v-bd27155c${l9}><span data-v-bd27155c${l9}>Client-shareable notes</span><textarea class="textarea" data-v-bd27155c${l9}>${ssrInterpolate(unref(ta2))}</textarea></label>`), unref(oa2).length ? (e9(`<div class="stack-sm" data-v-bd27155c${l9}><p class="section-title" data-v-bd27155c${l9}>PII scan</p><!--[-->`), ssrRenderList$2(unref(oa2), (a16) => {
            e9(`<div class="stack-sm" data-v-bd27155c${l9}><span class="meta" data-v-bd27155c${l9}>${ssrInterpolate(a16.label)}</span><input${ssrRenderAttr("value", unref(ia2)[a16.id])} class="input" placeholder="Override reason (required)" data-v-bd27155c${l9}></div>`);
          }), e9("<!--]--></div>")) : e9("<!---->"), e9(`<label class="row" data-v-bd27155c${l9}><input${includeBooleanAttr(Array.isArray(unref(la2)) ? ssrLooseContain(unref(la2), null) : unref(la2)) ? " checked" : ""} type="checkbox" data-v-bd27155c${l9}> Redacted CV attached</label><label class="row" data-v-bd27155c${l9}><input${includeBooleanAttr(Array.isArray(unref(sa2)) ? ssrLooseContain(unref(sa2), null) : unref(sa2)) ? " checked" : ""} type="checkbox" data-v-bd27155c${l9}> No CV</label><label class="row" data-v-bd27155c${l9}><input${includeBooleanAttr(Array.isArray(unref(ca2)) ? ssrLooseContain(unref(ca2), null) : unref(ca2)) ? " checked" : ""} type="checkbox" data-v-bd27155c${l9}> Recording reviewed</label><label class="row" data-v-bd27155c${l9}><input${includeBooleanAttr(Array.isArray(unref(da2)) ? ssrLooseContain(unref(da2), null) : unref(da2)) ? " checked" : ""} type="checkbox" data-v-bd27155c${l9}> No recording</label><label class="row" data-v-bd27155c${l9}><input${includeBooleanAttr(Array.isArray(unref(na2)) ? ssrLooseContain(unref(na2), null) : unref(na2)) ? " checked" : ""} type="checkbox" data-v-bd27155c${l9}> I confirm this profile does not reveal the applicant&#39;s identity or contact details.</label>`);
        }), _: 1 }, t8)), e8("</div>")) : e8(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, l8))} data-v-bd27155c>Not found</div>`);
      };
    } });
    M = D.setup;
    D.setup = (a13, e8) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/hr/jobs/[id]/applications/[id].vue"), M ? M(a13, e8) : void 0;
    };
    O = _plugin_vue_export_helper_default(D, [["__scopeId", "data-v-bd27155c"]]);
  }
});

// server/chunks/build/_id_-DsyUQQPy.mjs
var id_DsyUQQPy_exports = {};
__export(id_DsyUQQPy_exports, {
  default: () => D2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var A, P, D2;
var init_id_DsyUQQPy = __esm({
  "server/chunks/build/_id_-DsyUQQPy.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_UiModal_D63DZHvN();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    A = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(b6) {
      const S5 = useRoute$1(), A3 = useRouter(), P3 = ga(), D5 = useToast(), H2 = computed(() => String(S5.params.id)), B3 = computed(() => P3.applicationById(H2.value)), U3 = computed(() => B3.value ? P3.jobById(B3.value.jobId) : void 0), _7 = computed(() => B3.value ? P3.applicantById(B3.value.applicantId) : void 0), R2 = computed(() => P3.data.interviews.find((t8) => t8.applicationId === H2.value)), F2 = computed(() => P3.inviteForApp(H2.value)), V3 = computed(() => U3.value ? P3.orgById(U3.value.orgId) : void 0), W3 = ref(false), N3 = ref(false), q4 = ref(false), z2 = ref("");
      watch(() => [P3.ui.applicantId, B3.value?.id, B3.value?.applicantId], () => {
        B3.value && B3.value.applicantId !== P3.ui.applicantId && A3.replace("/applicant");
      }, { immediate: true });
      const L3 = computed(() => B3.value ? "Client rejected" === B3.value.status || "Not progressed" === B3.value.status ? "Not moving forward" : "Client accepted" === B3.value.status || "Hired" === B3.value.status ? `Good news: ${V3.value?.name} wants to move forward` : "" : "");
      function declineInvite() {
        P3.declineInvite(H2.value, z2.value), q4.value = false, D5.show("Invite declined");
      }
      __name(declineInvite, "declineInvite");
      return (t8, a13, e8, n8) => {
        const b7 = n, y7 = m, j7 = p;
        unref(B3) && unref(U3) && unref(_7) ? (a13(`<div${ssrRenderAttrs(n8)}>`), a13(ssrRenderComponent(b7, { title: unref(U3).title, subtitle: ("applicantFacingStatus" in t8 ? t8.applicantFacingStatus : unref(applicantFacingStatus))(unref(B3), unref(U3).orgId, unref(U3).confidential, unref(P3)) }, null, e8)), a13('<div class="card stack-md">'), a13(ssrRenderComponent(y7, { status: ("applicantStatusLabel" in t8 ? t8.applicantStatusLabel : unref(applicantStatusLabel))(unref(B3).status) }, null, e8)), "Hired" !== unref(B3).status && "Withdrawn" !== unref(B3).status ? a13('<button type="button" class="btn btn--danger">Withdraw</button>') : a13("<!---->"), unref(L3) ? a13(`<p class="meta">${ssrInterpolate(unref(L3))}</p>`) : a13("<!---->"), a13("</div>"), unref(R2) ? (a13(`<div class="card stack-md"><h2 class="section-title">HR interview</h2><p>${ssrInterpolate(("formatPht" in t8 ? t8.formatPht : unref(formatPht))(unref(R2).scheduledAt))} PHT \xB7 ${ssrInterpolate(unref(R2).platform)}</p><a${ssrRenderAttr("href", unref(R2).link)} target="_blank" rel="noopener">Meeting link</a><p class="meta">Interviewer: ${ssrInterpolate(unref(R2).interviewer)}</p><div class="row"><button type="button" class="btn btn--secondary">Confirm attendance</button><button type="button" class="btn btn--secondary">Request a reschedule</button></div>`), "Scheduled" === unref(R2).status && null === unref(R2).recordingConsent ? a13(`<label class="stack-sm"><input${includeBooleanAttr(Array.isArray(unref(W3)) ? ssrLooseContain(unref(W3), null) : unref(W3)) ? " checked" : ""} type="checkbox"> Hireway may record this interview and show the recording, including my face and voice, to prospective employers before my identity is revealed. </label>`) : a13("<!---->"), a13("</div>")) : a13("<!---->"), unref(F2) && "Sent" === unref(F2).status ? a13(`<div class="card stack-md"><h2 class="section-title">Interview invitation</h2><p><strong>${ssrInterpolate(unref(V3)?.name)}</strong></p><p>${ssrInterpolate(unref(F2).message)}</p><p class="meta">Proposed: ${ssrInterpolate(unref(F2).proposedTimes.join(" \xB7 "))}</p><p class="meta">Expires ${ssrInterpolate(("formatPht" in t8 ? t8.formatPht : unref(formatPht))(unref(F2).expiresAt))}</p><label class="stack-sm"><input${includeBooleanAttr(Array.isArray(unref(N3)) ? ssrLooseContain(unref(N3), null) : unref(N3)) ? " checked" : ""} type="checkbox"> I agree to share my name, contact details and full CV with ${ssrInterpolate(unref(V3)?.name)}. </label><div class="row"><button type="button" class="btn btn--primary"${includeBooleanAttr(!unref(N3)) ? " disabled" : ""}>Accept</button><button type="button" class="btn btn--danger">Decline</button></div></div>`) : a13("<!---->"), a13(ssrRenderComponent(j7, { open: unref(q4), "onUpdate:open": /* @__PURE__ */ __name((t9) => isRef(q4) ? q4.value = t9 : null, "onUpdate:open"), title: "Decline invitation" }, { footer: withCtx((t9, a14, e9, n9) => {
          if (!a14) return [createVNode("button", { type: "button", class: "btn btn--secondary", onClick: /* @__PURE__ */ __name((t10) => q4.value = false, "onClick") }, "Cancel", 8, ["onClick"]), createVNode("button", { type: "button", class: "btn btn--danger", onClick: declineInvite }, "Decline")];
          a14(`<button type="button" class="btn btn--secondary"${n9}>Cancel</button><button type="button" class="btn btn--danger"${n9}>Decline</button>`);
        }), default: withCtx((t9, a14, e9, n9) => {
          if (!a14) return [createVNode("label", { class: "stack-sm" }, [createVNode("span", null, "Reason (optional)"), withDirectives(createVNode("textarea", { "onUpdate:modelValue": /* @__PURE__ */ __name((t10) => isRef(z2) ? z2.value = t10 : null, "onUpdate:modelValue"), class: "textarea" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(z2)]])])];
          a14(`<label class="stack-sm"${n9}><span${n9}>Reason (optional)</span><textarea class="textarea"${n9}>${ssrInterpolate(unref(z2))}</textarea></label>`);
        }), _: 1 }, e8)), a13("</div>")) : a13(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, n8))}>Application not found</div>`);
      };
    } });
    P = A.setup;
    A.setup = (t8, a13) => {
      const e8 = useSSRContext();
      return (e8.modules || (e8.modules = /* @__PURE__ */ new Set())).add("pages/applicant/applications/[id].vue"), P ? P(t8, a13) : void 0;
    };
    D2 = A;
  }
});

// server/chunks/build/_id_-V9RHShli.mjs
var id_V9RHShli_exports = {};
__export(id_V9RHShli_exports, {
  default: () => j
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var $, I, j;
var init_id_V9RHShli = __esm({
  "server/chunks/build/_id_-V9RHShli.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    $ = defineComponent({ __name: "index", __ssrInlineRender: true, setup(m8) {
      const g9 = useRoute$1(), $4 = ga();
      useToast();
      const I4 = computed(() => String(g9.params.id)), j7 = computed(() => $4.jobById(I4.value)), h8 = computed(() => $4.ui.clientOrgId), _7 = computed(() => j7.value ? $4.data.recommendations.filter((a13) => "shared" === a13.status).filter((a13) => $4.applicationById(a13.applicationId)?.jobId === I4.value).map((a13) => {
        const e8 = $4.applicationById(a13.applicationId), t8 = $4.applicantById(e8.applicantId), s5 = $4.data.invites.find((e9) => e9.recommendationId === a13.id), i9 = $4.hasReveal(e8.applicantId, h8.value), n8 = $4.data.interviews.find((a14) => a14.applicationId === e8.id);
        return { r: a13, app: e8, applicant: t8, invite: s5, revealed: i9, avg: n8?.scorecard ? (n8.scorecard.communication + n8.scorecard.reliability + n8.scorecard.roleFit) / 3 : null };
      }) : []), w7 = computed(() => $4.data.jobComments[I4.value] || []);
      return (a13, e8, t8, m9) => {
        const y7 = n, g10 = na, $5 = m;
        unref(j7) && unref(j7).orgId === unref(h8) ? (e8(`<div${ssrRenderAttrs(m9)}>`), e8(ssrRenderComponent(y7, { title: unref(j7).title, subtitle: "Recommendations inbox" }, { actions: withCtx((a14, e9, t9, s5) => {
          if (!e9) return [createVNode(g10, { to: "/client", class: "btn btn--secondary" }, { default: withCtx(() => [createTextVNode("All jobs")]), _: 1 })];
          e9(ssrRenderComponent(g10, { to: "/client", class: "btn btn--secondary" }, { default: withCtx((a15, e10, t10, s6) => {
            if (!e10) return [createTextVNode("All jobs")];
            e10("All jobs");
          }), _: 1 }, t9, s5));
        }), _: 1 }, t8)), "Paused" === unref(j7).status ? e8('<div class="banner banner--warn">Paused. Current candidates stay available.</div>') : e8("<!---->"), "Closed" === unref(j7).status ? e8(`<div class="banner banner--info">Closed \u2014 ${ssrInterpolate(unref(j7).closeReason || "filled")}. Inbox remains readable.</div>`) : e8("<!---->"), unref(_7).length ? (e8('<div class="card-grid"><!--[-->'), ssrRenderList$2(unref(_7), (s5) => {
          e8(`<div class="card stack-sm"><div class="row"><strong>${ssrInterpolate(s5.revealed ? s5.applicant.name : ("aliasTitle" in a13 ? a13.aliasTitle : unref(aliasTitle))(s5.r.alias))}</strong>`), s5.revealed ? e8(ssrRenderComponent($5, { status: "Revealed", tone: "done" }, null, t8)) : e8("<!---->"), e8(`</div><p class="meta">${ssrInterpolate(s5.applicant.headline)} \xB7 ${ssrInterpolate(s5.applicant.yearsExperience)} yrs</p><p>${ssrInterpolate(s5.applicant.skills.slice(0, 3).join(" \xB7 "))}</p>`), s5.avg ? e8(`<p class="meta">HR rating ${ssrInterpolate(s5.avg.toFixed(1))}/5</p>`) : e8("<!---->"), e8(`<p>${ssrInterpolate(s5.applicant.expectedSalary)} \xB7 ${ssrInterpolate(s5.applicant.availability)}</p>`), s5.invite ? e8(`<p class="meta">Invite ${ssrInterpolate(s5.invite.status)}</p>`) : e8("<!---->"), e8('<div class="row">'), e8(ssrRenderComponent(g10, { to: `/client/jobs/${unref(I4)}/candidates/${s5.r.id}`, class: "btn btn--secondary" }, { default: withCtx((a14, e9, t9, s6) => {
            if (!e9) return [createTextVNode("Open dossier")];
            e9("Open dossier");
          }), _: 2 }, t8)), s5.invite || "Recommended" !== s5.app.status ? e8("<!---->") : e8(ssrRenderComponent(g10, { to: `/client/jobs/${unref(I4)}/candidates/${s5.r.id}`, class: "btn btn--primary" }, { default: withCtx((a14, e9, t9, s6) => {
            if (!e9) return [createTextVNode("Invite")];
            e9("Invite");
          }), _: 2 }, t8)), s5.invite ? e8("<!---->") : e8('<button type="button" class="btn btn--danger">Pass</button>'), e8("</div></div>");
        }), e8("<!--]--></div>")) : e8('<div class="card meta">No recommended candidates yet.</div>'), unref(w7).length ? (e8(`<div class="card stack-md" style="${ssrRenderStyle({ "margin-top": "1rem" })}"><h2 class="section-title">Comments with HR</h2><!--[-->`), ssrRenderList$2(unref(w7), (a14) => {
          e8(`<div><strong>${ssrInterpolate(a14.authorName)}</strong> <span class="meta">${ssrInterpolate(a14.createdAt)}</span><p>${ssrInterpolate(a14.body)}</p></div>`);
        }), e8("<!--]--></div>")) : e8("<!---->"), e8("</div>")) : e8(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, m9))}>Job not found for this client.</div>`);
      };
    } });
    I = $.setup;
    $.setup = (a13, e8) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/client/jobs/[id]/index.vue"), I ? I(a13, e8) : void 0;
    };
    j = $;
  }
});

// server/chunks/build/_id_-C2D8g0e0.mjs
var id_C2D8g0e0_exports = {};
__export(id_C2D8g0e0_exports, {
  default: () => _
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var x, S, _;
var init_id_C2D8g0e0 = __esm({
  "server/chunks/build/_id_-C2D8g0e0.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_renderer();
    init_nitro();
    x = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(a13) {
      const p6 = useRoute$1(), k5 = ga();
      useToast();
      const x7 = computed(() => k5.data.requests.find((a14) => a14.id === p6.params.id)), S5 = computed(() => "Changes requested" === x7.value?.status), _7 = reactive({ department: "", location: "", workSetup: "", employmentType: "", openings: 1, description: "" });
      return watch(x7, (a14) => {
        a14 && (_7.department = String(a14.fields.department || ""), _7.location = String(a14.fields.location || ""), _7.workSetup = String(a14.fields.workSetup || "On-site"), _7.employmentType = String(a14.fields.employmentType || "Full-time"), _7.openings = Number(a14.fields.openings || 1), _7.description = a14.summary);
      }, { immediate: true }), (a14, t8, s5, e8) => {
        const p7 = n, m8 = m;
        unref(x7) ? (t8(`<div${ssrRenderAttrs(e8)} data-v-17fbf5b1>`), t8(ssrRenderComponent(p7, { title: unref(x7).title }, { actions: withCtx((a15, t9, s6, e9) => {
          if (!t9) return [createVNode(m8, { status: unref(x7).status }, null, 8, ["status"])];
          t9(ssrRenderComponent(m8, { status: unref(x7).status }, null, s6, e9));
        }), _: 1 }, s5)), t8('<div class="card stack-md" data-v-17fbf5b1>'), unref(S5) ? t8(`<form class="form-grid form-grid--2 stack-md" data-v-17fbf5b1><label class="stack-sm" data-v-17fbf5b1><span data-v-17fbf5b1>Department</span><input${ssrRenderAttr("value", unref(_7).department)} class="input" data-v-17fbf5b1></label><label class="stack-sm" data-v-17fbf5b1><span data-v-17fbf5b1>Location</span><input${ssrRenderAttr("value", unref(_7).location)} class="input" required data-v-17fbf5b1></label><label class="stack-sm" data-v-17fbf5b1><span data-v-17fbf5b1>Work setup</span><input${ssrRenderAttr("value", unref(_7).workSetup)} class="input" data-v-17fbf5b1></label><label class="stack-sm" data-v-17fbf5b1><span data-v-17fbf5b1>Employment type</span><input${ssrRenderAttr("value", unref(_7).employmentType)} class="input" data-v-17fbf5b1></label><label class="stack-sm" data-v-17fbf5b1><span data-v-17fbf5b1>Openings</span><input${ssrRenderAttr("value", unref(_7).openings)} type="number" class="input" data-v-17fbf5b1></label><label class="stack-sm form-grid" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-17fbf5b1><span data-v-17fbf5b1>Description</span><textarea class="textarea" data-v-17fbf5b1>${ssrInterpolate(unref(_7).description)}</textarea></label><button type="submit" class="btn btn--primary" data-v-17fbf5b1>Resubmit</button></form>`) : t8(`<!--[--><dl class="fields" data-v-17fbf5b1><div data-v-17fbf5b1><dt data-v-17fbf5b1>Department</dt><dd data-v-17fbf5b1>${ssrInterpolate(unref(x7).fields.department)}</dd></div><div data-v-17fbf5b1><dt data-v-17fbf5b1>Location</dt><dd data-v-17fbf5b1>${ssrInterpolate(unref(x7).fields.location)}</dd></div><div data-v-17fbf5b1><dt data-v-17fbf5b1>Work setup</dt><dd data-v-17fbf5b1>${ssrInterpolate(unref(x7).fields.workSetup)}</dd></div><div data-v-17fbf5b1><dt data-v-17fbf5b1>Employment type</dt><dd data-v-17fbf5b1>${ssrInterpolate(unref(x7).fields.employmentType)}</dd></div><div data-v-17fbf5b1><dt data-v-17fbf5b1>Openings</dt><dd data-v-17fbf5b1>${ssrInterpolate(unref(x7).fields.openings)}</dd></div></dl><p data-v-17fbf5b1>${ssrInterpolate(unref(x7).summary)}</p><!--]-->`), t8('<div class="thread" data-v-17fbf5b1><h3 class="section-title" data-v-17fbf5b1>Comments</h3><!--[-->'), ssrRenderList$2(unref(x7).comments, (a15) => {
          t8(`<div data-v-17fbf5b1><strong data-v-17fbf5b1>${ssrInterpolate(a15.authorName)}</strong> <span class="meta" data-v-17fbf5b1>${ssrInterpolate(a15.createdAt)}</span><p data-v-17fbf5b1>${ssrInterpolate(a15.body)}</p></div>`);
        }), t8("<!--]--></div></div></div>")) : t8(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, e8))} data-v-17fbf5b1>Request not found</div>`);
      };
    } });
    S = x.setup;
    x.setup = (a13, t8) => {
      const s5 = useSSRContext();
      return (s5.modules || (s5.modules = /* @__PURE__ */ new Set())).add("pages/client/requests/[id].vue"), S ? S(a13, t8) : void 0;
    };
    _ = _plugin_vue_export_helper_default(x, [["__scopeId", "data-v-17fbf5b1"]]);
  }
});

// server/chunks/build/_id_-CS57XeMT.mjs
var id_CS57XeMT_exports = {};
__export(id_CS57XeMT_exports, {
  default: () => q
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var C, _2, q;
var init_id_CS57XeMT = __esm({
  "server/chunks/build/_id_-CS57XeMT.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_UiModal_D63DZHvN();
    init_renderer();
    init_nitro();
    C = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(p6) {
      const I4 = useRoute$1(), C3 = ga(), _7 = useToast(), q4 = computed(() => C3.orgById(String(I4.params.id))), G2 = computed(() => C3.data.ledger.filter((e8) => e8.orgId === q4.value?.id).sort((e8, t8) => t8.when.localeCompare(e8.when))), R2 = computed(() => C3.data.packageRequests.filter((e8) => e8.orgId === q4.value?.id)), B3 = ref(false), D5 = ref(5), P3 = ref("purchase"), N3 = ref("Package fulfillment"), S5 = ref("INV-DEMO");
      function grant() {
        q4.value && ("purchase" !== P3.value || S5.value ? (C3.grantCredits({ orgId: q4.value.id, amount: D5.value, type: P3.value, reason: N3.value, invoiceRef: S5.value }), B3.value = false, _7.show("Credits granted")) : _7.show("Invoice reference required", "danger"));
      }
      __name(grant, "grant");
      return (e8, t8, a13, p7) => {
        const V3 = n, w7 = p;
        unref(q4) ? (t8(`<div${ssrRenderAttrs(p7)}>`), t8(ssrRenderComponent(V3, { title: unref(q4).name, subtitle: `${unref(q4).city} \xB7 Balance ${unref(q4).balance} credits` }, { actions: withCtx((e9, t9, a14, s5) => {
          if (!t9) return [createVNode("button", { type: "button", class: "btn btn--primary", onClick: /* @__PURE__ */ __name((e10) => B3.value = true, "onClick") }, "Grant credits", 8, ["onClick"])];
          t9(`<button type="button" class="btn btn--primary"${s5}>Grant credits</button>`);
        }), _: 1 }, a13)), t8("<!--[-->"), ssrRenderList$2(unref(R2).filter((e9) => "open" === e9.status), (e9) => {
          t8(`<div class="banner banner--warn"> Open package: ${ssrInterpolate(e9.credits)} credits \xB7 \u20B1${ssrInterpolate(e9.pricePhp.toLocaleString())} \xB7 requested ${ssrInterpolate(e9.requestedAt)}</div>`);
        }), t8('<!--]--><div class="card table-wrap"><table class="data"><thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Balance</th><th>Note</th></tr></thead><tbody><!--[-->'), ssrRenderList$2(unref(G2), (e9) => {
          t8(`<tr><td>${ssrInterpolate(e9.when)}</td><td>${ssrInterpolate(e9.type)}</td><td>${ssrInterpolate(e9.amount)}</td><td>${ssrInterpolate(e9.balanceAfter)}</td><td>${ssrInterpolate(e9.note)}</td></tr>`);
        }), t8("<!--]--></tbody></table></div>"), t8(ssrRenderComponent(w7, { open: unref(B3), "onUpdate:open": /* @__PURE__ */ __name((e9) => isRef(B3) ? B3.value = e9 : null, "onUpdate:open"), title: "Grant credits" }, { footer: withCtx((e9, t9, a14, s5) => {
          if (!t9) return [createVNode("button", { type: "button", class: "btn btn--primary", onClick: grant }, "Grant")];
          t9(`<button type="button" class="btn btn--primary"${s5}>Grant</button>`);
        }), default: withCtx((e9, t9, a14, s5) => {
          if (!t9) return [createVNode("label", { class: "stack-sm" }, [createTextVNode("Amount "), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e10) => isRef(D5) ? D5.value = e10 : null, "onUpdate:modelValue"), type: "number", class: "input" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(D5), void 0, { number: true }]])]), withDirectives(createVNode("select", { "onUpdate:modelValue": /* @__PURE__ */ __name((e10) => isRef(P3) ? P3.value = e10 : null, "onUpdate:modelValue"), class: "select" }, [createVNode("option", { value: "purchase" }, "purchase"), createVNode("option", { value: "bonus" }, "bonus"), createVNode("option", { value: "adjustment" }, "adjustment")], 8, ["onUpdate:modelValue"]), [[ui, unref(P3)]]), withDirectives(createVNode("input", { "onUpdate:modelValue": /* @__PURE__ */ __name((e10) => isRef(N3) ? N3.value = e10 : null, "onUpdate:modelValue"), class: "input", placeholder: "Reason" }, null, 8, ["onUpdate:modelValue"]), [[ci, unref(N3)]]), "purchase" === unref(P3) ? withDirectives((openBlock(), createBlock("input", { key: 0, "onUpdate:modelValue": /* @__PURE__ */ __name((e10) => isRef(S5) ? S5.value = e10 : null, "onUpdate:modelValue"), class: "input", placeholder: "Invoice reference" }, null, 8, ["onUpdate:modelValue"])), [[ci, unref(S5)]]) : createCommentVNode("", true)];
          t9(`<label class="stack-sm"${s5}>Amount <input${ssrRenderAttr("value", unref(D5))} type="number" class="input"${s5}></label><select class="select"${s5}><option value="purchase"${includeBooleanAttr(Array.isArray(unref(P3)) ? ssrLooseContain(unref(P3), "purchase") : we(unref(P3), "purchase")) ? " selected" : ""}${s5}>purchase</option><option value="bonus"${includeBooleanAttr(Array.isArray(unref(P3)) ? ssrLooseContain(unref(P3), "bonus") : we(unref(P3), "bonus")) ? " selected" : ""}${s5}>bonus</option><option value="adjustment"${includeBooleanAttr(Array.isArray(unref(P3)) ? ssrLooseContain(unref(P3), "adjustment") : we(unref(P3), "adjustment")) ? " selected" : ""}${s5}>adjustment</option></select><input${ssrRenderAttr("value", unref(N3))} class="input" placeholder="Reason"${s5}>`), "purchase" === unref(P3) ? t9(`<input${ssrRenderAttr("value", unref(S5))} class="input" placeholder="Invoice reference"${s5}>`) : t9("<!---->");
        }), _: 1 }, a13)), t8("</div>")) : t8(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, p7))}>Client not found</div>`);
      };
    } });
    _2 = C.setup;
    C.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/hr/clients/[id].vue"), _2 ? _2(e8, t8) : void 0;
    };
    q = C;
  }
});

// server/chunks/build/_id_-DTV0nJIc.mjs
var id_DTV0nJIc_exports = {};
__export(id_DTV0nJIc_exports, {
  default: () => g
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var x2, k, g;
var init_id_DTV0nJIc = __esm({
  "server/chunks/build/_id_-DTV0nJIc.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_renderer();
    init_nitro();
    x2 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(a13) {
      const c5 = useRoute$1(), I4 = ga(), x7 = ref("kanban"), k5 = computed(() => String(c5.params.id)), g9 = computed(() => I4.jobById(k5.value)), j7 = [{ title: "New", statuses: ["Submitted", "Screening"] }, { title: "Interview", statuses: ["Shortlisted", "HR interview scheduled", "HR interviewed"] }, { title: "Recommended", statuses: ["Recommended"] }, { title: "Invited", statuses: ["Invited", "Declined invite"] }, { title: "With client", statuses: ["Accepted invite", "Client interviewing"] }, { title: "Decided", statuses: ["Client accepted", "Client rejected", "Hired", "Not progressed", "Withdrawn"] }], _7 = computed(() => I4.data.applications.filter((a14) => a14.jobId === k5.value));
      return (a14, t8, e8, c6) => {
        const m8 = n, f6 = na, w7 = m;
        unref(g9) ? (t8(`<div${ssrRenderAttrs(c6)} data-v-5b289daf>`), t8(ssrRenderComponent(m8, { title: unref(g9).title, subtitle: "Pipeline" }, { actions: withCtx((a15, t9, e9, d7) => {
          if (!t9) return [createVNode("button", { type: "button", class: ["btn", "kanban" === unref(x7) ? "btn--primary" : "btn--secondary"], onClick: /* @__PURE__ */ __name((a16) => x7.value = "kanban", "onClick") }, "Kanban", 10, ["onClick"]), createVNode("button", { type: "button", class: ["btn", "table" === unref(x7) ? "btn--primary" : "btn--secondary"], onClick: /* @__PURE__ */ __name((a16) => x7.value = "table", "onClick") }, "Table", 10, ["onClick"])];
          t9(`<button type="button" class="${ssrRenderClass(["kanban" === unref(x7) ? "btn--primary" : "btn--secondary", "btn"])}" data-v-5b289daf${d7}>Kanban</button><button type="button" class="${ssrRenderClass(["table" === unref(x7) ? "btn--primary" : "btn--secondary", "btn"])}" data-v-5b289daf${d7}>Table</button>`);
        }), _: 1 }, e8)), "kanban" === unref(x7) ? (t8('<div class="kanban" data-v-5b289daf><!--[-->'), ssrRenderList$2(j7, (a15) => {
          var s5;
          t8(`<div class="col card" data-v-5b289daf><h3 class="section-title" data-v-5b289daf>${ssrInterpolate(a15.title)}</h3><!--[-->`), ssrRenderList$2((s5 = a15.statuses, _7.value.filter((a16) => s5.includes(a16.status))), (a16) => {
            t8(ssrRenderComponent(f6, { key: a16.id, to: `/hr/jobs/${unref(k5)}/applications/${a16.id}`, class: "kanban-card" }, { default: withCtx((t9, e9, d7, s6) => {
              if (!e9) return [createVNode("strong", null, toDisplayString(unref(I4).applicantById(a16.applicantId)?.name), 1), createVNode("p", { class: "meta" }, toDisplayString(unref(I4).applicantById(a16.applicantId)?.city), 1), createVNode(w7, { status: a16.status }, null, 8, ["status"])];
              e9(`<strong data-v-5b289daf${s6}>${ssrInterpolate(unref(I4).applicantById(a16.applicantId)?.name)}</strong><p class="meta" data-v-5b289daf${s6}>${ssrInterpolate(unref(I4).applicantById(a16.applicantId)?.city)}</p>`), e9(ssrRenderComponent(w7, { status: a16.status }, null, d7, s6));
            }), _: 2 }, e8));
          }), t8("<!--]--></div>");
        }), t8("<!--]--></div>")) : (t8('<div class="card table-wrap" data-v-5b289daf><table class="data" data-v-5b289daf><thead data-v-5b289daf><tr data-v-5b289daf><th data-v-5b289daf>Name</th><th data-v-5b289daf>Status</th><th data-v-5b289daf>Updated</th></tr></thead><tbody data-v-5b289daf><!--[-->'), ssrRenderList$2(unref(_7), (a15) => {
          t8("<tr data-v-5b289daf><td data-v-5b289daf>"), t8(ssrRenderComponent(f6, { to: `/hr/jobs/${unref(k5)}/applications/${a15.id}` }, { default: withCtx((t9, e9, d7, s5) => {
            if (!e9) return [createTextVNode(toDisplayString(unref(I4).applicantById(a15.applicantId)?.name), 1)];
            e9(`${ssrInterpolate(unref(I4).applicantById(a15.applicantId)?.name)}`);
          }), _: 2 }, e8)), t8(`</td><td data-v-5b289daf>${ssrInterpolate(a15.status)}</td><td data-v-5b289daf>${ssrInterpolate(a15.updatedAt)}</td></tr>`);
        }), t8("<!--]--></tbody></table></div>")), t8("</div>")) : t8(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, c6))} data-v-5b289daf>Job not found</div>`);
      };
    } });
    k = x2.setup;
    x2.setup = (a13, t8) => {
      const e8 = useSSRContext();
      return (e8.modules || (e8.modules = /* @__PURE__ */ new Set())).add("pages/hr/jobs/[id]/index.vue"), k ? k(a13, t8) : void 0;
    };
    g = _plugin_vue_export_helper_default(x2, [["__scopeId", "data-v-5b289daf"]]);
  }
});

// server/chunks/build/_id_-DtF2W_lB.mjs
var id_DtF2W_lB_exports = {};
__export(id_DtF2W_lB_exports, {
  default: () => g2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var y, x3, g2;
var init_id_DtF2W_lB = __esm({
  "server/chunks/build/_id_-DtF2W_lB.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_renderer();
    init_nitro();
    y = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(m8) {
      const f6 = useRoute$1(), y7 = ga();
      useToast();
      const x7 = ref(""), g9 = computed(() => y7.data.requests.find((t8) => t8.id === f6.params.id));
      return (t8, s5, a13, m9) => {
        const l8 = n, v7 = m;
        unref(g9) ? (s5(`<div${ssrRenderAttrs(m9)}>`), s5(ssrRenderComponent(l8, { title: unref(g9).title }, { actions: withCtx((t9, s6, a14, e8) => {
          if (!s6) return [createVNode(v7, { status: unref(g9).status }, null, 8, ["status"])];
          s6(ssrRenderComponent(v7, { status: unref(g9).status }, null, a14, e8));
        }), _: 1 }, a13)), s5(`<div class="card stack-md"><p>${ssrInterpolate(unref(g9).summary)}</p><!--[-->`), ssrRenderList$2(unref(g9).comments, (t9) => {
          s5(`<div><strong>${ssrInterpolate(t9.authorName)}</strong> \u2014 ${ssrInterpolate(t9.body)}</div>`);
        }), s5(`<!--]--><textarea class="textarea" placeholder="Comment">${ssrInterpolate(unref(x7))}</textarea><div class="row"><button type="button" class="btn btn--secondary">Comment</button><button type="button" class="btn btn--secondary">Request changes</button><button type="button" class="btn btn--danger">Reject</button><button type="button" class="btn btn--primary">Approve</button></div></div></div>`)) : s5(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, m9))}>Not found</div>`);
      };
    } });
    x3 = y.setup;
    y.setup = (t8, s5) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/hr/requests/[id].vue"), x3 ? x3(t8, s5) : void 0;
    };
    g2 = y;
  }
});

// server/chunks/build/profile-Cj-aNBNR.mjs
var profile_Cj_aNBNR_exports = {};
__export(profile_Cj_aNBNR_exports, {
  default: () => S2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var h, w, S2;
var init_profile_Cj_aNBNR = __esm({
  "server/chunks/build/profile-Cj-aNBNR.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_UiModal_D63DZHvN();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    h = defineComponent({ __name: "profile", __ssrInlineRender: true, setup(a13) {
      const p6 = ga(), k5 = useToast(), h8 = ref(false), w7 = computed({ get: /* @__PURE__ */ __name(() => p6.applicantById(p6.ui.applicantId), "get"), set: /* @__PURE__ */ __name(() => {
      }, "set") });
      function save() {
        p6.persist(), k5.show("Profile saved");
      }
      __name(save, "save");
      function requestData() {
        p6.requestApplicantData(p6.ui.applicantId), h8.value = false, k5.show("Request received");
      }
      __name(requestData, "requestData");
      return (a14, e8, t8, p7) => {
        const y7 = n, $4 = p;
        unref(w7) ? (e8(`<div${ssrRenderAttrs(p7)} data-v-7fbfe43b>`), e8(ssrRenderComponent(y7, { title: "Profile" }, { actions: withCtx((a15, e9, t9, s5) => {
          if (!e9) return [createVNode("button", { type: "button", class: "btn btn--primary", onClick: save }, "Save")];
          e9(`<button type="button" class="btn btn--primary" data-v-7fbfe43b${s5}>Save</button>`);
        }), _: 1 }, t8)), e8(`<form class="card stack-md form-grid form-grid--2" data-v-7fbfe43b><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Name</span><input${ssrRenderAttr("value", unref(w7).name)} class="input" data-v-7fbfe43b></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Email</span><input${ssrRenderAttr("value", unref(w7).email)} class="input" data-v-7fbfe43b></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Mobile</span><input${ssrRenderAttr("value", unref(w7).mobile)} class="input" data-v-7fbfe43b></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>City</span><input${ssrRenderAttr("value", unref(w7).city)} class="input" data-v-7fbfe43b></label><label class="stack-sm form-grid" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><span data-v-7fbfe43b>Headline</span><input${ssrRenderAttr("value", unref(w7).headline)} class="input" data-v-7fbfe43b></label><label class="stack-sm form-grid" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><span data-v-7fbfe43b>Summary</span><textarea class="textarea" data-v-7fbfe43b>${ssrInterpolate(unref(w7).summary)}</textarea></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Expected salary</span><input${ssrRenderAttr("value", unref(w7).expectedSalary)} class="input" data-v-7fbfe43b></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Availability</span><input${ssrRenderAttr("value", unref(w7).availability)} class="input" data-v-7fbfe43b></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Work setup</span><input${ssrRenderAttr("value", unref(w7).workSetup)} class="input" data-v-7fbfe43b></label><label class="stack-sm form-grid" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><span data-v-7fbfe43b>Skills (comma separated)</span><input${ssrRenderAttr("value", unref(w7).skills.join(", "))} class="input" data-v-7fbfe43b></label><fieldset class="form-grid form-grid--2" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><legend class="section-title" data-v-7fbfe43b>Experience</legend><input${ssrRenderAttr("value", unref(w7).experience.title)} class="input" placeholder="Title" data-v-7fbfe43b><input${ssrRenderAttr("value", unref(w7).experience.employer)} class="input" placeholder="Employer" data-v-7fbfe43b><input${ssrRenderAttr("value", unref(w7).experience.start)} class="input" placeholder="Start" data-v-7fbfe43b><input${ssrRenderAttr("value", unref(w7).experience.end)} class="input" placeholder="End" data-v-7fbfe43b><textarea class="textarea" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b>${ssrInterpolate(unref(w7).experience.description)}</textarea></fieldset><fieldset class="form-grid form-grid--2" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><legend class="section-title" data-v-7fbfe43b>Education</legend><input${ssrRenderAttr("value", unref(w7).education.school)} class="input" data-v-7fbfe43b><input${ssrRenderAttr("value", unref(w7).education.degree)} class="input" data-v-7fbfe43b><input${ssrRenderAttr("value", unref(w7).education.year)} class="input" data-v-7fbfe43b></fieldset><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>Portfolio URL</span><input${ssrRenderAttr("value", unref(w7).portfolioUrl)} class="input" data-v-7fbfe43b></label><label class="stack-sm" data-v-7fbfe43b><span data-v-7fbfe43b>LinkedIn URL</span><input${ssrRenderAttr("value", unref(w7).linkedInUrl)} class="input" data-v-7fbfe43b></label><label class="row" data-v-7fbfe43b><input${includeBooleanAttr(Array.isArray(unref(w7).photoOnFile) ? ssrLooseContain(unref(w7).photoOnFile, null) : unref(w7).photoOnFile) ? " checked" : ""} type="checkbox" data-v-7fbfe43b> Photo on file</label><div class="avatar" data-v-7fbfe43b>${ssrInterpolate(("initials" in a14 ? a14.initials : unref(initials))(unref(w7).name))}</div><div class="stack-sm" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><span class="section-title" data-v-7fbfe43b>CV</span><!--[-->`), ssrRenderList$2(unref(w7).cvFiles, (a15) => {
          e8(`<div class="row" data-v-7fbfe43b>${ssrInterpolate(a15.name)} `), a15.isDefault ? e8('<span class="badge badge--moving" data-v-7fbfe43b>Default</span>') : e8("<!---->"), e8("</div>");
        }), e8(`<!--]--><button type="button" class="btn btn--secondary" data-v-7fbfe43b>Add CV</button></div><div style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-7fbfe43b><h3 class="section-title" data-v-7fbfe43b>Notifications</h3><label class="row" data-v-7fbfe43b><input type="checkbox" checked disabled data-v-7fbfe43b> Critical email (locked on)</label><label class="row" data-v-7fbfe43b><input${includeBooleanAttr(Array.isArray(unref(w7).digestEmail) ? ssrLooseContain(unref(w7).digestEmail, null) : unref(w7).digestEmail) ? " checked" : ""} type="checkbox" data-v-7fbfe43b> Daily digest email</label></div><button type="button" class="btn btn--secondary" data-v-7fbfe43b>Request my data</button></form>`), e8(ssrRenderComponent($4, { open: unref(h8), "onUpdate:open": /* @__PURE__ */ __name((a15) => isRef(h8) ? h8.value = a15 : null, "onUpdate:open"), title: "Data subject request" }, { footer: withCtx((a15, e9, t9, s5) => {
          if (!e9) return [createVNode("button", { type: "button", class: "btn btn--secondary", onClick: /* @__PURE__ */ __name((a16) => h8.value = false, "onClick") }, "Cancel", 8, ["onClick"]), createVNode("button", { type: "button", class: "btn btn--primary", onClick: requestData }, "Submit")];
          e9(`<button type="button" class="btn btn--secondary" data-v-7fbfe43b${s5}>Cancel</button><button type="button" class="btn btn--primary" data-v-7fbfe43b${s5}>Submit</button>`);
        }), default: withCtx((a15, e9, t9, s5) => {
          if (!e9) return [createVNode("p", null, "Submit a request to export or review your personal data.")];
          e9(`<p data-v-7fbfe43b${s5}>Submit a request to export or review your personal data.</p>`);
        }), _: 1 }, t8)), e8("</div>")) : e8("<!---->");
      };
    } });
    w = h.setup;
    h.setup = (a13, e8) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/applicant/profile.vue"), w ? w(a13, e8) : void 0;
    };
    S2 = _plugin_vue_export_helper_default(h, [["__scopeId", "data-v-7fbfe43b"]]);
  }
});

// server/chunks/build/requests-DXrIEGLd.mjs
var requests_DXrIEGLd_exports = {};
__export(requests_DXrIEGLd_exports, {
  default: () => b2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var q2, y2, b2;
var init_requests_DXrIEGLd = __esm({
  "server/chunks/build/requests-DXrIEGLd.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_renderer();
    init_nitro();
    q2 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(o6) {
      const f6 = ga(), q4 = computed(() => f6.ui.clientOrgId), y7 = computed(() => f6.data.requests.filter((e8) => e8.orgId === q4.value && !["Published", "Paused", "Closed"].includes(e8.status)));
      return (e8, o7, p6, f7) => {
        const q5 = n, b6 = na, w7 = m;
        o7(`<div${ssrRenderAttrs(f7)}>`), o7(ssrRenderComponent(q5, { title: "Requests" }, { actions: withCtx((e9, s5, t8, r3) => {
          if (!s5) return [createVNode(b6, { to: "/client/requests/new", class: "btn btn--primary" }, { default: withCtx(() => [createTextVNode("New request")]), _: 1 })];
          s5(ssrRenderComponent(b6, { to: "/client/requests/new", class: "btn btn--primary" }, { default: withCtx((e10, s6, t9, r4) => {
            if (!s6) return [createTextVNode("New request")];
            s6("New request");
          }), _: 1 }, t8, r3));
        }), _: 1 }, p6)), o7('<div class="stack-md"><!--[-->'), ssrRenderList$2(unref(y7), (e9) => {
          o7(ssrRenderComponent(b6, { key: e9.id, to: `/client/requests/${e9.id}`, class: "card row", style: { "justify-content": "space-between", color: "inherit" } }, { default: withCtx((s5, t8, r3, a13) => {
            if (!t8) return [createVNode("div", null, [createVNode("strong", null, toDisplayString(e9.title), 1), createVNode("p", { class: "meta" }, toDisplayString(e9.summary), 1)]), createVNode(w7, { status: e9.status }, null, 8, ["status"])];
            t8(`<div${a13}><strong${a13}>${ssrInterpolate(e9.title)}</strong><p class="meta"${a13}>${ssrInterpolate(e9.summary)}</p></div>`), t8(ssrRenderComponent(w7, { status: e9.status }, null, r3, a13));
          }), _: 2 }, p6));
        }), o7("<!--]--></div></div>");
      };
    } });
    y2 = q2.setup;
    q2.setup = (e8, s5) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/client/requests/index.vue"), y2 ? y2(e8, s5) : void 0;
    };
    b2 = q2;
  }
});

// server/chunks/build/team-BVG358Cw.mjs
var team_BVG358Cw_exports = {};
__export(team_BVG358Cw_exports, {
  default: () => b3
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var v, h2, b3;
var init_team_BVG358Cw = __esm({
  "server/chunks/build/team-BVG358Cw.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_renderer();
    init_nitro();
    v = defineComponent({ __name: "team", __ssrInlineRender: true, setup(n8) {
      const u9 = ga(), v7 = computed(() => u9.ui.clientOrgId), h8 = computed(() => u9.data.users.filter((e8) => e8.orgId === v7.value)), b6 = ref(""), f6 = ref("");
      return (e8, n9, l8, p6) => {
        const u10 = n;
        n9(`<div${ssrRenderAttrs(p6)}>`), n9(ssrRenderComponent(u10, { title: "Team" }, null, l8)), n9('<div class="card table-wrap"><table class="data"><thead><tr><th>Name</th><th>Role</th><th>Can spend credits</th></tr></thead><tbody><!--[-->'), ssrRenderList$2(unref(h8), (e9) => {
          n9(`<tr><td>${ssrInterpolate(e9.name)}</td><td>${ssrInterpolate(e9.role)}</td><td><input type="checkbox"${includeBooleanAttr(e9.canSpend) ? " checked" : ""}></td></tr>`);
        }), n9(`<!--]--></tbody></table></div><form class="card row" style="${ssrRenderStyle({ "margin-top": "1rem" })}"><input${ssrRenderAttr("value", unref(b6))} class="input" placeholder="Name" required><input${ssrRenderAttr("value", unref(f6))} class="input" type="email" placeholder="Email" required><button type="submit" class="btn btn--primary">Invite teammate</button></form></div>`);
      };
    } });
    h2 = v.setup;
    v.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/client/team.vue"), h2 ? h2(e8, t8) : void 0;
    };
    b3 = v;
  }
});

// server/chunks/build/wallet-qQEjqYVV.mjs
var wallet_qQEjqYVV_exports = {};
__export(wallet_qQEjqYVV_exports, {
  default: () => h3
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var v2, u2, h3;
var init_wallet_qQEjqYVV = __esm({
  "server/chunks/build/wallet-qQEjqYVV.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    v2 = defineComponent({ __name: "wallet", __ssrInlineRender: true, setup(l8) {
      const p6 = ga();
      useToast();
      const v7 = computed(() => p6.ui.clientOrgId), u9 = computed(() => p6.orgById(v7.value)), h8 = computed(() => p6.data.ledger.filter((t8) => t8.orgId === v7.value).sort((t8, e8) => e8.when.localeCompare(t8.when))), b6 = computed(() => p6.creditsAtStake(v7.value)), f6 = [{ credits: 5, price: 15e3 }, { credits: 10, price: 28e3 }, { credits: 25, price: 6e4 }];
      return (t8, e8, l9, m8) => {
        const p7 = n;
        e8(`<div${ssrRenderAttrs(m8)}>`), e8(ssrRenderComponent(p7, { title: "Wallet", subtitle: unref(u9).name }, null, l9)), unref(u9).balance < unref(u9).threshold ? e8(`<div class="banner banner--warn">Balance is below threshold (${ssrInterpolate(unref(u9).threshold)} credits).</div>`) : e8("<!---->"), e8(`<div class="card row" style="${ssrRenderStyle({ "justify-content": "space-between" })}"><div><p class="meta">Available balance</p><p style="${ssrRenderStyle({ "font-size": "1.25rem", "font-weight": "600", "font-variant-numeric": "tabular-nums" })}">${ssrInterpolate(unref(u9).balance)} credits</p></div><div><p class="meta">Credits at stake</p><p style="${ssrRenderStyle({ "font-weight": "600" })}">${ssrInterpolate(unref(b6))}</p></div></div><div class="card stack-md" style="${ssrRenderStyle({ "margin-top": "1rem" })}"><h2 class="section-title">Request a package (VAT-inclusive)</h2><div class="row"><!--[-->`), ssrRenderList$2(f6, (t9) => {
          e8(`<button type="button" class="btn btn--secondary">${ssrInterpolate(t9.credits)} credits \xB7 \u20B1${ssrInterpolate(t9.price.toLocaleString())}</button>`);
        }), e8(`<!--]--></div></div><div class="card" style="${ssrRenderStyle({ "margin-top": "1rem" })}"><h2 class="section-title">Ledger</h2>`), unref(h8).length ? (e8('<div class="table-wrap"><table class="data"><thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Balance</th><th>Note</th></tr></thead><tbody><!--[-->'), ssrRenderList$2(unref(h8), (a13) => {
          e8(`<tr><td>${ssrInterpolate(("formatPht" in t8 ? t8.formatPht : unref(formatPht))(a13.when))}</td><td>${ssrInterpolate(a13.type)}</td><td>${ssrInterpolate(a13.amount > 0 ? "+" : "")}${ssrInterpolate(a13.amount)}</td><td>${ssrInterpolate(a13.balanceAfter)}</td><td>${ssrInterpolate(a13.note)}</td></tr>`);
        }), e8("<!--]--></tbody></table></div>")) : e8('<div class="meta">No credit activity yet.</div>'), e8("</div></div>");
      };
    } });
    u2 = v2.setup;
    v2.setup = (t8, e8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/client/wallet.vue"), u2 ? u2(t8, e8) : void 0;
    };
    h3 = v2;
  }
});

// server/chunks/build/clients-BKuaFhO5.mjs
var clients_BKuaFhO5_exports = {};
__export(clients_BKuaFhO5_exports, {
  default: () => v3
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var u3, f, v3;
var init_clients_BKuaFhO5 = __esm({
  "server/chunks/build/clients-BKuaFhO5.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_renderer();
    init_nitro();
    u3 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(o6) {
      const c5 = ga();
      return (e8, o7, u9, f6) => {
        const v7 = n, $4 = na;
        o7(`<div${ssrRenderAttrs(f6)}>`), o7(ssrRenderComponent(v7, { title: "Clients" }, null, u9)), o7('<div class="card-grid"><!--[-->'), ssrRenderList$2(unref(c5).data.orgs, (e9) => {
          o7(ssrRenderComponent($4, { key: e9.id, to: `/hr/clients/${e9.id}`, class: "card", style: { color: "inherit" } }, { default: withCtx((s5, a13, t8, r3) => {
            if (!a13) return [createVNode("h2", { class: "section-title" }, toDisplayString(e9.name), 1), createVNode("p", { class: "meta" }, toDisplayString(e9.city), 1), createVNode("p", null, "Balance: " + toDisplayString(e9.balance) + " credits", 1)];
            a13(`<h2 class="section-title"${r3}>${ssrInterpolate(e9.name)}</h2><p class="meta"${r3}>${ssrInterpolate(e9.city)}</p><p${r3}>Balance: ${ssrInterpolate(e9.balance)} credits</p>`);
          }), _: 2 }, u9));
        }), o7("<!--]--></div></div>");
      };
    } });
    f = u3.setup;
    u3.setup = (e8, s5) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/hr/clients/index.vue"), f ? f(e8, s5) : void 0;
    };
    v3 = u3;
  }
});

// server/chunks/build/jobs-Coe_SPSP.mjs
var jobs_Coe_SPSP_exports = {};
__export(jobs_Coe_SPSP_exports, {
  default: () => j2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var f2, v4, j2;
var init_jobs_Coe_SPSP = __esm({
  "server/chunks/build/jobs-Coe_SPSP.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_renderer();
    init_nitro();
    f2 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(l8) {
      const m8 = ga();
      useToast();
      const f6 = computed(() => m8.data.jobs.filter((t8) => ["Approved", "Published", "Paused", "Closed"].includes(t8.status)));
      return (t8, s5, l9, p6) => {
        const v7 = n, j7 = na, x7 = m;
        s5(`<div${ssrRenderAttrs(p6)}>`), s5(ssrRenderComponent(v7, { title: "Jobs" }, null, l9)), s5('<div class="card table-wrap"><table class="data"><thead><tr><th>Title</th><th>Client</th><th>Status</th><th>Applicants</th><th></th></tr></thead><tbody><!--[-->'), ssrRenderList$2(unref(f6), (t9) => {
          s5("<tr><td>"), s5(ssrRenderComponent(j7, { to: `/hr/jobs/${t9.id}` }, { default: withCtx((s6, e8, a13, r3) => {
            if (!e8) return [createTextVNode(toDisplayString(t9.title), 1)];
            e8(`${ssrInterpolate(t9.title)}`);
          }), _: 2 }, l9)), s5(`</td><td>${ssrInterpolate(unref(m8).orgById(t9.orgId)?.name)}</td><td>`), s5(ssrRenderComponent(x7, { status: t9.status }, null, l9)), s5(`</td><td>${ssrInterpolate(unref(m8).data.applications.filter((s6) => s6.jobId === t9.id).length)}</td><td>`), "Approved" === t9.status ? s5('<button type="button" class="btn btn--secondary">Publish</button>') : s5("<!---->"), s5("</td></tr>");
        }), s5("<!--]--></tbody></table></div></div>");
      };
    } });
    v4 = f2.setup;
    f2.setup = (t8, s5) => {
      const e8 = useSSRContext();
      return (e8.modules || (e8.modules = /* @__PURE__ */ new Set())).add("pages/hr/jobs/index.vue"), v4 ? v4(t8, s5) : void 0;
    };
    j2 = f2;
  }
});

// server/chunks/build/useMetrics-C0fuTlnc.mjs
function jobApplicationStats(e8, t8) {
  const i9 = t8.filter((t9) => t9.jobId === e8), n8 = i9.filter((e9) => "Withdrawn" !== e9.status).length;
  return i9.filter((e9) => !["Withdrawn", "Not progressed", "Submitted", "Screening", "Shortlisted"].includes(e9.status) || ["HR interviewed", "Recommended", "Invited", "Accepted invite", "Client interviewing", "Client accepted", "Client rejected", "Hired", "Declined invite"].includes(e9.status)).length, { applied: n8, hrInterviewed: i9.filter((e9) => ["HR interviewed", "Recommended", "Invited", "Accepted invite", "Client interviewing", "Client accepted", "Client rejected", "Hired", "Declined invite"].includes(e9.status)).length, recommended: i9.filter((e9) => ["Recommended", "Invited", "Accepted invite", "Client interviewing", "Client accepted", "Client rejected", "Hired", "Declined invite"].includes(e9.status)).length, invited: i9.filter((e9) => ["Invited", "Accepted invite", "Client interviewing", "Client accepted", "Client rejected", "Hired", "Declined invite"].includes(e9.status)).length, accepted: i9.filter((e9) => (function(e10, t9) {
    const i10 = e10.find((e11) => e11.id === t9);
    return !!i10 && ["Accepted invite", "Client interviewing", "Client accepted", "Client rejected", "Hired"].includes(i10.status);
  })(i9, e9.id)).length, hired: i9.filter((e9) => "Hired" === e9.status).length };
}
function businessDaysSince(e8, t8 = "2026-10-28") {
  const i9 = new Date(e8), n8 = new Date(t8);
  let d7 = 0;
  const c5 = new Date(i9);
  for (; c5 < n8; ) {
    c5.setDate(c5.getDate() + 1);
    const e9 = c5.getDay();
    0 !== e9 && 6 !== e9 && d7++;
  }
  return d7;
}
var init_useMetrics_C0fuTlnc = __esm({
  "server/chunks/build/useMetrics-C0fuTlnc.mjs"() {
    __name(jobApplicationStats, "jobApplicationStats");
    __name(businessDaysSince, "businessDaysSince");
  }
});

// server/chunks/build/requests-DFSnfr5f.mjs
var requests_DFSnfr5f_exports = {};
__export(requests_DFSnfr5f_exports, {
  default: () => x4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var g3, w2, x4;
var init_requests_DFSnfr5f = __esm({
  "server/chunks/build/requests-DFSnfr5f.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_useMetrics_C0fuTlnc();
    init_renderer();
    init_nitro();
    g3 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(c5) {
      const b6 = ga(), g9 = ref(""), w7 = ref(""), x7 = ref(false), S5 = computed(() => b6.data.requests.filter((e8) => !["Published", "Paused", "Closed"].includes(e8.status)).map((e8) => ({ r: e8, age: e8.submittedAt ? Math.floor(((/* @__PURE__ */ new Date("2026-10-28")).getTime() - new Date(e8.submittedAt).getTime()) / 864e5) : 0, sla: ["Submitted", "Under review"].includes(e8.status) && businessDaysSince(e8.submittedAt || "2026-10-28") >= 2, client: b6.orgById(e8.orgId)?.name })).filter((e8) => (!g9.value || e8.r.status === g9.value) && ((!w7.value || e8.r.orgId === w7.value) && !(x7.value && !e8.sla))));
      return (e8, l8, c6, A3) => {
        const v7 = n, b7 = na, j7 = m;
        l8(`<div${ssrRenderAttrs(A3)}>`), l8(ssrRenderComponent(v7, { title: "Request queue" }, null, c6)), l8(`<div class="row card"><select class="select"><option value=""${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), "") : we(unref(g9), "")) ? " selected" : ""}>All statuses</option><option${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), null) : we(unref(g9), null)) ? " selected" : ""}>Draft</option><option${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), null) : we(unref(g9), null)) ? " selected" : ""}>Submitted</option><option${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), null) : we(unref(g9), null)) ? " selected" : ""}>Under review</option></select><select class="select"><option value=""${includeBooleanAttr(Array.isArray(unref(w7)) ? ssrLooseContain(unref(w7), "") : we(unref(w7), "")) ? " selected" : ""}>All clients</option><option value="lumen"${includeBooleanAttr(Array.isArray(unref(w7)) ? ssrLooseContain(unref(w7), "lumen") : we(unref(w7), "lumen")) ? " selected" : ""}>Lumen</option><option value="harbor"${includeBooleanAttr(Array.isArray(unref(w7)) ? ssrLooseContain(unref(w7), "harbor") : we(unref(w7), "harbor")) ? " selected" : ""}>Harbor</option></select><label class="row"><input${includeBooleanAttr(Array.isArray(unref(x7)) ? ssrLooseContain(unref(x7), null) : unref(x7)) ? " checked" : ""} type="checkbox"> SLA only</label></div><div class="card table-wrap" style="${ssrRenderStyle({ "margin-top": "1rem" })}"><table class="data"><thead><tr><th>Title</th><th>Client</th><th>Status</th><th>Age</th><th>Owner</th></tr></thead><tbody><!--[-->`), ssrRenderList$2(unref(S5), (e9) => {
          l8("<tr><td>"), l8(ssrRenderComponent(b7, { to: `/hr/requests/${e9.r.id}` }, { default: withCtx((t8, r3, s5, a13) => {
            if (!r3) return [createTextVNode(toDisplayString(e9.r.title), 1)];
            r3(`${ssrInterpolate(e9.r.title)}`);
          }), _: 2 }, c6)), l8(`</td><td>${ssrInterpolate(e9.client)}</td><td>`), l8(ssrRenderComponent(j7, { status: e9.r.status }, null, c6)), l8(" "), e9.sla ? l8(ssrRenderComponent(j7, { status: "SLA", tone: "attention" }, null, c6)) : l8("<!---->"), l8(`</td><td>${ssrInterpolate(e9.age)}d</td><td>Hana Cruz</td></tr>`);
        }), l8("<!--]--></tbody></table></div></div>");
      };
    } });
    w2 = g3.setup;
    g3.setup = (e8, t8) => {
      const r3 = useSSRContext();
      return (r3.modules || (r3.modules = /* @__PURE__ */ new Set())).add("pages/hr/requests/index.vue"), w2 ? w2(e8, t8) : void 0;
    };
    x4 = g3;
  }
});

// server/chunks/build/apply-3NuH28pX.mjs
var apply_3NuH28pX_exports = {};
__export(apply_3NuH28pX_exports, {
  default: () => k2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var w3, g4, k2;
var init_apply_3NuH28pX = __esm({
  "server/chunks/build/apply-3NuH28pX.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_renderer();
    init_nitro();
    w3 = defineComponent({ __name: "apply", __ssrInlineRender: true, setup(d7) {
      const h8 = useRoute$1();
      useRouter();
      const w7 = ga();
      useToast();
      const g9 = computed(() => w7.jobBySlug(String(h8.params.slug))), k5 = computed(() => w7.ui.applicantId), $4 = computed(() => {
        const a13 = g9.value;
        return a13 ? w7.data.applications.find((t8) => t8.applicantId === k5.value && t8.jobId === a13.id) : null;
      }), S5 = ref(""), x7 = ref(false);
      return (a13, t8, s5, e8) => {
        const d8 = na, v7 = n, j7 = m;
        unref(g9) ? "Published" !== unref(g9).status ? (t8(`<div${ssrRenderAttrs(mergeProps({ class: "card stack-sm" }, e8))}><p>This job is not open</p>`), t8(ssrRenderComponent(d8, { to: "/", class: "btn btn--primary" }, { default: withCtx((a14, t9, s6, e9) => {
          if (!t9) return [createTextVNode("Back to job board")];
          t9("Back to job board");
        }), _: 1 }, s5)), t8("</div>")) : (t8(`<div${ssrRenderAttrs(e8)}>`), t8(ssrRenderComponent(v7, { title: "Apply", subtitle: unref(g9).title }, null, s5)), "applicant" !== unref(w7).ui.role ? t8('<div class="banner banner--info row"><span>Switch to Applicant to apply as yourself.</span><button type="button" class="btn btn--primary">Switch to Applicant</button></div>') : t8("<!---->"), unref($4) ? (t8('<div class="card stack-sm">'), t8(ssrRenderComponent(j7, { status: unref($4).status }, null, s5)), t8("<p>You already applied to this role.</p>"), t8(ssrRenderComponent(d8, { to: `/applicant/applications/${unref($4).id}`, class: "btn btn--primary" }, { default: withCtx((a14, t9, s6, e9) => {
          if (!t9) return [createTextVNode("View application")];
          t9("View application");
        }), _: 1 }, s5)), t8("</div>")) : t8(`<form class="card stack-md"><p class="meta">${ssrInterpolate(unref(w7).applicantById(unref(k5))?.city)}</p><p>Default CV: ${ssrInterpolate(unref(w7).applicantById(unref(k5))?.cvFiles.find((a14) => a14.isDefault)?.name)}</p><label class="stack-sm"><span>Cover note (optional)</span><textarea class="textarea">${ssrInterpolate(unref(S5))}</textarea></label><label class="row"><input${includeBooleanAttr(Array.isArray(unref(x7)) ? ssrLooseContain(unref(x7), null) : unref(x7)) ? " checked" : ""} type="checkbox" required><span>I agree to share an anonymized profile, interview notes, and a redacted CV with the hiring client.</span></label><button type="submit" class="btn btn--primary"${includeBooleanAttr(!unref(x7)) ? " disabled" : ""}>Submit application</button></form>`), t8("</div>")) : t8(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, e8))}>Job not found</div>`);
      };
    } });
    g4 = w3.setup;
    w3.setup = (a13, t8) => {
      const s5 = useSSRContext();
      return (s5.modules || (s5.modules = /* @__PURE__ */ new Set())).add("pages/jobs/[slug]/apply.vue"), g4 ? g4(a13, t8) : void 0;
    };
    k2 = w3;
  }
});

// server/chunks/build/_slug_-C0kmxfoJ.mjs
var slug_C0kmxfoJ_exports = {};
__export(slug_C0kmxfoJ_exports, {
  default: () => j3
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var $2, g5, j3;
var init_slug_C0kmxfoJ = __esm({
  "server/chunks/build/_slug_-C0kmxfoJ.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    $2 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(d7) {
      const v7 = useRoute$1(), $4 = ga();
      useToast();
      const g9 = computed(() => $4.jobBySlug(String(v7.params.slug)));
      async function share() {
      }
      __name(share, "share");
      return (t8, s5, a13, d8) => {
        const y7 = na, v8 = n;
        unref(g9) ? "Published" !== unref(g9).status ? (s5(`<div${ssrRenderAttrs(mergeProps({ class: "card stack-sm" }, d8))}><p>This job is not open</p>`), s5(ssrRenderComponent(y7, { to: "/", class: "btn btn--primary" }, { default: withCtx((t9, s6, a14, e8) => {
          if (!s6) return [createTextVNode("Back to job board")];
          s6("Back to job board");
        }), _: 1 }, a13)), s5("</div>")) : (s5(`<div${ssrRenderAttrs(d8)}>`), s5(ssrRenderComponent(v8, { title: unref(g9).title }, { actions: withCtx((t9, s6, a14, e8) => {
          if (!s6) return [createVNode(y7, { to: `/jobs/${unref(g9).slug}/apply`, class: "btn btn--primary" }, { default: withCtx(() => [createTextVNode("Apply")]), _: 1 }, 8, ["to"]), createVNode("button", { type: "button", class: "btn btn--secondary", onClick: share }, "Share")];
          s6(ssrRenderComponent(y7, { to: `/jobs/${unref(g9).slug}/apply`, class: "btn btn--primary" }, { default: withCtx((t10, s7, a15, e9) => {
            if (!s7) return [createTextVNode("Apply")];
            s7("Apply");
          }), _: 1 }, a14, e8)), s6(`<button type="button" class="btn btn--secondary"${e8}>Share</button>`);
        }), _: 1 }, a13)), s5(`<div class="card stack-md"><p class="meta">${ssrInterpolate(unref(g9).location)} \xB7 ${ssrInterpolate(unref(g9).workSetup)} \xB7 ${ssrInterpolate(unref(g9).employmentType)} \xB7 ${ssrInterpolate(unref(g9).category)}</p><p>${ssrInterpolate(("formatSalary" in t8 ? t8.formatSalary : unref(formatSalary))(unref(g9)))}</p><p class="meta">${ssrInterpolate((function() {
          const t9 = g9.value;
          return t9 ? t9.confidential ? "Confidential client" : $4.orgById(t9.orgId)?.name || "" : "";
        })())}</p><p>${ssrInterpolate(unref(g9).description)}</p><div><h3 class="section-title">Requirements</h3><ul><!--[-->`), ssrRenderList$2(unref(g9).requirements, (t9, a14) => {
          s5(`<li>${ssrInterpolate(t9)}</li>`);
        }), s5(`<!--]--></ul></div><p><strong>Benefits:</strong> ${ssrInterpolate(unref(g9).benefits)}</p><p class="meta">Openings: ${ssrInterpolate(unref(g9).openings)}</p></div></div>`)) : s5(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, d8))}>Job not found.</div>`);
      };
    } });
    g5 = $2.setup;
    $2.setup = (t8, s5) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/jobs/[slug]/index.vue"), g5 ? g5(t8, s5) : void 0;
    };
    j3 = $2;
  }
});

// server/chunks/build/StaticPage-2oBdhQva.mjs
var n3, p2, l;
var init_StaticPage_2oBdhQva = __esm({
  "server/chunks/build/StaticPage-2oBdhQva.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_renderer();
    init_nitro();
    n3 = defineComponent({ __name: "StaticPage", __ssrInlineRender: true, props: { title: {}, paragraphs: {} }, setup: /* @__PURE__ */ __name((i9) => (m8, n8, p6, l8) => {
      const d7 = n;
      n8(`<div${ssrRenderAttrs(l8)}>`), n8(ssrRenderComponent(d7, { title: i9.title }, null, p6)), n8('<div class="card stack-md"><!--[-->'), ssrRenderList$2(i9.paragraphs, (a13, s5) => {
        n8(`<p>${ssrInterpolate(a13)}</p>`);
      }), n8("<!--]-->"), ssrRenderSlot(m8.$slots, "default", {}, null, n8, p6), n8("</div></div>");
    }, "setup") });
    p2 = n3.setup;
    n3.setup = (a13, s5) => {
      const e8 = useSSRContext();
      return (e8.modules || (e8.modules = /* @__PURE__ */ new Set())).add("components/StaticPage.vue"), p2 ? p2(a13, s5) : void 0;
    };
    l = Object.assign(n3, { __name: "StaticPage" });
  }
});

// server/chunks/build/about-BcCFCQ63.mjs
var about_BcCFCQ63_exports = {};
__export(about_BcCFCQ63_exports, {
  default: () => i2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var o2, n4, i2;
var init_about_BcCFCQ63 = __esm({
  "server/chunks/build/about-BcCFCQ63.mjs"() {
    init_StaticPage_2oBdhQva();
    init_renderer();
    init_nitro();
    init_entry();
    init_pages_rKeP87el();
    o2 = defineComponent({ __name: "about", __ssrInlineRender: true, setup: /* @__PURE__ */ __name((s5) => (s6, t8, o6, n8) => {
      t8(ssrRenderComponent(l, mergeProps({ title: "About Hireway", paragraphs: ["Hireway helps a single HR agency run hiring end to end for clients and applicants.", "The agency screens and interviews candidates, shares anonymized profiles, and coordinates client interviews.", "This demo uses seeded data only \u2014 there is no live backend."] }, n8), null, o6));
    }, "setup") });
    n4 = o2.setup;
    o2.setup = (e8, r3) => {
      const s5 = useSSRContext();
      return (s5.modules || (s5.modules = /* @__PURE__ */ new Set())).add("pages/about.vue"), n4 ? n4(e8, r3) : void 0;
    };
    i2 = o2;
  }
});

// server/chunks/build/applicant-Om2BrZkG.mjs
var applicant_Om2BrZkG_exports = {};
__export(applicant_Om2BrZkG_exports, {
  default: () => I2
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var g6, y3, I2;
var init_applicant_Om2BrZkG = __esm({
  "server/chunks/build/applicant-Om2BrZkG.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    g6 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(m8) {
      const v7 = ga();
      useRouter();
      const g9 = computed(() => v7.data.applications.filter((a13) => a13.applicantId === v7.ui.applicantId).map((a13) => {
        const t8 = v7.jobById(a13.jobId), s5 = v7.inviteForApp(a13.id);
        return { app: a13, job: t8, clientName: clientDisplayName(t8.orgId, t8.confidential, !!s5, v7), statusLine: applicantFacingStatus(a13, t8.orgId, t8.confidential, v7) };
      }));
      return (a13, t8, n8, p6) => {
        const m9 = n, f6 = na;
        t8(`<div${ssrRenderAttrs(p6)}>`), t8(ssrRenderComponent(m9, { title: "My applications" }, null, n8)), unref(g9).length ? (t8('<div class="stack-md"><!--[-->'), ssrRenderList$2(unref(g9), (s5) => {
          t8(`<div class="card row" style="${ssrRenderStyle({ "justify-content": "space-between" })}"><div>`), t8(ssrRenderComponent(f6, { to: `/applicant/applications/${s5.app.id}` }, { default: withCtx((a14, t9, e8, i9) => {
            if (!t9) return [createVNode("strong", null, toDisplayString(s5.job.title), 1)];
            t9(`<strong${i9}>${ssrInterpolate(s5.job.title)}</strong>`);
          }), _: 2 }, n8)), t8(`<p class="meta">${ssrInterpolate(s5.clientName)} \xB7 Updated ${ssrInterpolate(("formatPht" in a13 ? a13.formatPht : unref(formatPht))(s5.app.updatedAt))}</p><p>${ssrInterpolate(s5.statusLine)}</p></div><div class="row">`), "Invited" === s5.app.status ? t8(ssrRenderComponent(f6, { to: `/applicant/applications/${s5.app.id}`, class: "btn btn--primary" }, { default: withCtx((a14, t9, s6, e8) => {
            if (!t9) return [createTextVNode("Respond")];
            t9("Respond");
          }), _: 2 }, n8)) : t8("<!---->"), t8(ssrRenderComponent(f6, { to: `/applicant/applications/${s5.app.id}`, class: "btn btn--secondary" }, { default: withCtx((a14, t9, s6, e8) => {
            if (!t9) return [createTextVNode("Open")];
            t9("Open");
          }), _: 2 }, n8)), t8("</div></div>");
        }), t8("<!--]--></div>")) : t8('<div class="card meta">No applications yet.</div>'), t8("</div>");
      };
    } });
    y3 = g6.setup;
    g6.setup = (a13, t8) => {
      const s5 = useSSRContext();
      return (s5.modules || (s5.modules = /* @__PURE__ */ new Set())).add("pages/applicant/index.vue"), y3 ? y3(a13, t8) : void 0;
    };
    I2 = g6;
  }
});

// server/chunks/build/client-Bg5r0XLd.mjs
var client_Bg5r0XLd_exports = {};
__export(client_Bg5r0XLd_exports, {
  default: () => j4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var k3, _3, j4;
var init_client_Bg5r0XLd = __esm({
  "server/chunks/build/client-Bg5r0XLd.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_StatusBadge_yWQyWbUP();
    init_useMetrics_C0fuTlnc();
    init_renderer();
    init_nitro();
    k3 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(e8) {
      const v7 = ga(), g9 = computed(() => v7.ui.clientOrgId), k5 = computed(() => v7.orgById(g9.value)), _7 = computed(() => v7.data.jobs.filter((e9) => e9.orgId === g9.value && ["Published", "Paused", "Closed"].includes(e9.status.replace(", filled", "")))), j7 = [{ key: "applied", label: "Applied" }, { key: "hrInterviewed", label: "HR interviewed" }, { key: "recommended", label: "Recommended" }, { key: "invited", label: "Invited" }, { key: "accepted", label: "Accepted" }, { key: "hired", label: "Hired" }];
      function stats(e9) {
        return jobApplicationStats(e9, v7.data.applications);
      }
      __name(stats, "stats");
      const I4 = computed(() => k5.value.balance < k5.value.threshold);
      return (e9, a13, i9, v8) => {
        const b6 = n, g10 = na, B3 = m;
        a13(`<div${ssrRenderAttrs(v8)} data-v-68c61133>`), a13(ssrRenderComponent(b6, { title: "Jobs", subtitle: unref(k5).name }, { actions: withCtx((e10, a14, t8, s5) => {
          if (!a14) return [createVNode("span", { class: "meta" }, [createTextVNode("Balance "), createVNode("strong", { style: { "font-variant-numeric": "tabular-nums" } }, toDisplayString(unref(k5).balance), 1), createTextVNode(" credits")]), createVNode(g10, { to: "/client/wallet", class: "btn btn--secondary" }, { default: withCtx(() => [createTextVNode("Wallet")]), _: 1 })];
          a14(`<span class="meta" data-v-68c61133${s5}>Balance <strong style="${ssrRenderStyle({ "font-variant-numeric": "tabular-nums" })}" data-v-68c61133${s5}>${ssrInterpolate(unref(k5).balance)}</strong> credits</span>`), a14(ssrRenderComponent(g10, { to: "/client/wallet", class: "btn btn--secondary" }, { default: withCtx((e11, a15, t9, s6) => {
            if (!a15) return [createTextVNode("Wallet")];
            a15("Wallet");
          }), _: 1 }, t8, s5));
        }), _: 1 }, i9)), unref(I4) ? a13(`<div class="banner banner--warn" data-v-68c61133>Credit balance is below your threshold (${ssrInterpolate(unref(k5).threshold)} credits).</div>`) : a13("<!---->"), a13('<div class="card-grid" data-v-68c61133><!--[-->'), ssrRenderList$2(unref(_7), (e10) => {
          a13(ssrRenderComponent(g10, { key: e10.id, to: `/client/jobs/${e10.id}`, class: "card" }, { default: withCtx((a14, s5, r3, n8) => {
            if (!s5) return [createVNode("div", { class: "row", style: { "justify-content": "space-between" } }, [createVNode("h2", { class: "section-title" }, toDisplayString(e10.title), 1), createVNode(B3, { status: e10.status }, null, 8, ["status"])]), createVNode("div", { class: "tiles" }, [(openBlock(), createBlock(So, null, renderList$2(j7, (a15) => createVNode("div", { key: a15.key, class: "tile" }, [createVNode("span", { class: "meta" }, toDisplayString(a15.label), 1), createVNode("strong", null, toDisplayString(stats(e10.id)[a15.key]), 1)])), 64))])];
            s5(`<div class="row" style="${ssrRenderStyle({ "justify-content": "space-between" })}" data-v-68c61133${n8}><h2 class="section-title" data-v-68c61133${n8}>${ssrInterpolate(e10.title)}</h2>`), s5(ssrRenderComponent(B3, { status: e10.status }, null, r3, n8)), s5(`</div><div class="tiles" data-v-68c61133${n8}><!--[-->`), ssrRenderList$2(j7, (a15) => {
              s5(`<div class="tile" data-v-68c61133${n8}><span class="meta" data-v-68c61133${n8}>${ssrInterpolate(a15.label)}</span><strong data-v-68c61133${n8}>${ssrInterpolate(stats(e10.id)[a15.key])}</strong></div>`);
            }), s5("<!--]--></div>");
          }), _: 2 }, i9));
        }), a13("<!--]--></div>"), a13(ssrRenderComponent(g10, { to: "/client/requests", class: "btn btn--secondary", style: { "margin-top": "1rem" } }, { default: withCtx((e10, a14, t8, s5) => {
          if (!a14) return [createTextVNode("View requests")];
          a14("View requests");
        }), _: 1 }, i9)), a13("</div>");
      };
    } });
    _3 = k3.setup;
    k3.setup = (e8, a13) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/client/index.vue"), _3 ? _3(e8, a13) : void 0;
    };
    j4 = _plugin_vue_export_helper_default(k3, [["__scopeId", "data-v-68c61133"]]);
  }
});

// server/chunks/build/contact-f0Hlh92S.mjs
var contact_f0Hlh92S_exports = {};
__export(contact_f0Hlh92S_exports, {
  default: () => u4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var l2, d2, u4;
var init_contact_f0Hlh92S = __esm({
  "server/chunks/build/contact-f0Hlh92S.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_renderer();
    init_nitro();
    l2 = defineComponent({ __name: "contact", __ssrInlineRender: true, setup(n8) {
      useToast();
      const m8 = ref(""), l8 = ref(""), d7 = ref("");
      return (e8, n9, p6, u9) => {
        const c5 = n;
        n9(`<div${ssrRenderAttrs(u9)}>`), n9(ssrRenderComponent(c5, { title: "Contact" }, null, p6)), n9(`<div class="card stack-md"><p>Reach the Hireway team for employer onboarding or applicant support.</p><form class="stack-md"><input${ssrRenderAttr("value", unref(m8))} class="input" required placeholder="Your name"><input${ssrRenderAttr("value", unref(l8))} class="input" type="email" required placeholder="Email"><textarea class="textarea" required placeholder="Message">${ssrInterpolate(unref(d7))}</textarea><button type="submit" class="btn btn--primary">Send</button></form></div></div>`);
      };
    } });
    d2 = l2.setup;
    l2.setup = (e8, r3) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue"), d2 ? d2(e8, r3) : void 0;
    };
    u4 = l2;
  }
});

// server/chunks/build/employers-FCMJjUGI.mjs
var employers_FCMJjUGI_exports = {};
__export(employers_FCMJjUGI_exports, {
  default: () => u5
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var d3, l3, u5;
var init_employers_FCMJjUGI = __esm({
  "server/chunks/build/employers-FCMJjUGI.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_renderer();
    init_nitro();
    d3 = defineComponent({ __name: "employers", __ssrInlineRender: true, setup(o6) {
      useToast();
      const m8 = ref(""), d7 = ref(""), l8 = ref("");
      return (e8, o7, p6, u9) => {
        const c5 = n;
        o7(`<div${ssrRenderAttrs(u9)}>`), o7(ssrRenderComponent(c5, { title: "For employers" }, null, p6)), o7(`<div class="card stack-md"><p>Hireway partners with companies that want vetted candidates without running full recruiting in-house.</p><p>Clients purchase credits, review anonymized recommendations, and invite applicants to interviews.</p><form class="stack-md"><input${ssrRenderAttr("value", unref(m8))} class="input" required placeholder="Your name"><input${ssrRenderAttr("value", unref(d7))} class="input" required placeholder="Company"><textarea class="textarea" required placeholder="How can we help?">${ssrInterpolate(unref(l8))}</textarea><button type="submit" class="btn btn--primary">Send</button></form></div></div>`);
      };
    } });
    l3 = d3.setup;
    d3.setup = (e8, r3) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/employers.vue"), l3 ? l3(e8, r3) : void 0;
    };
    u5 = d3;
  }
});

// server/chunks/build/hr-CMJobIgR.mjs
var hr_CMJobIgR_exports = {};
__export(hr_CMJobIgR_exports, {
  default: () => h4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var b4, f3, h4;
var init_hr_CMJobIgR = __esm({
  "server/chunks/build/hr-CMJobIgR.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_useMetrics_C0fuTlnc();
    init_renderer();
    init_nitro();
    b4 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(p6) {
      const d7 = ga(), b6 = computed(() => {
        const e8 = [], s5 = d7.data.requests.find((e9) => "req-sales" === e9.id);
        s5 && ["Submitted", "Under review"].includes(s5.status) && businessDaysSince(s5.submittedAt || "2026-10-23") >= 2 && e8.push({ label: "Sales Associate \xB7 Harbor Logistics", to: "/hr/requests/req-sales", reason: "Submitted 23 Oct 2026, past SLA" }), d7.data.invites.find((e9) => "inv-felix-csr" === e9.id && "Sent" === e9.status) && e8.push({ label: "Felix Navarro \xB7 invite unanswered", to: "/hr/jobs/job-csr/applications/app-felix-csr", reason: "Sent 27 Oct, expires 3 Nov" });
        const a13 = d7.applicationById("app-omar-csr");
        return a13 && "Accepted invite" === a13.status && !d7.data.clientInterviews.some((e9) => "app-omar-csr" === e9.applicationId) && e8.push({ label: "Omar Santos \xB7 not scheduled", to: "/hr/jobs/job-csr/applications/app-omar-csr", reason: "Accepted 20 Oct, no client interview" }), d7.data.interviews.find((e9) => "app-cara-csr" === e9.applicationId && "Scheduled" === e9.status) && e8.push({ label: "Cara Santos \xB7 HR interview", to: "/hr/jobs/job-csr/applications/app-cara-csr", reason: "30 Oct 2026, 10:00, Google Meet" }), d7.data.packageRequests.find((e9) => "prq-lumen-1" === e9.id && "open" === e9.status) && e8.push({ label: "Lumen package request", to: "/hr/clients/lumen", reason: "5 credits, \u20B115,000, open since 25 Oct" }), d7.data.invites.filter((e9) => "Sent" === e9.status).forEach((s6) => {
          const a14 = d7.applicationById(s6.applicationId), t8 = a14 ? d7.applicantById(a14.applicantId) : null;
          "inv-felix-csr" !== s6.id && t8 && e8.push({ label: `${t8.name} \xB7 pending invite`, to: `/hr/jobs/${a14?.jobId}/applications/${s6.applicationId}`, reason: "Awaiting applicant response" });
        }), e8;
      });
      return (e8, r3, p7, c5) => {
        const d8 = n, f6 = na;
        r3(`<div${ssrRenderAttrs(c5)}>`), r3(ssrRenderComponent(d8, { title: "Follow-ups", subtitle: "Hana's queue" }, null, p7)), unref(b6).length ? (r3('<div class="stack-md"><!--[-->'), ssrRenderList$2(unref(b6), (e9, s5) => {
          r3(ssrRenderComponent(f6, { key: s5, to: e9.to, class: "card", style: { color: "inherit" } }, { default: withCtx((s6, a13, t8, r4) => {
            if (!a13) return [createVNode("strong", null, toDisplayString(e9.label), 1), createVNode("p", { class: "meta" }, toDisplayString(e9.reason), 1)];
            a13(`<strong${r4}>${ssrInterpolate(e9.label)}</strong><p class="meta"${r4}>${ssrInterpolate(e9.reason)}</p>`);
          }), _: 2 }, p7));
        }), r3("<!--]--></div>")) : r3('<div class="card meta">Queue is clear.</div>'), r3("</div>");
      };
    } });
    f3 = b4.setup;
    b4.setup = (e8, s5) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("pages/hr/index.vue"), f3 ? f3(e8, s5) : void 0;
    };
    h4 = b4;
  }
});

// server/chunks/build/privacy-CdC7-38D.mjs
var privacy_CdC7_38D_exports = {};
__export(privacy_CdC7_38D_exports, {
  default: () => n5
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var i3, s, n5;
var init_privacy_CdC7_38D = __esm({
  "server/chunks/build/privacy-CdC7-38D.mjs"() {
    init_StaticPage_2oBdhQva();
    init_renderer();
    init_nitro();
    init_entry();
    init_pages_rKeP87el();
    i3 = defineComponent({ __name: "privacy", __ssrInlineRender: true, setup: /* @__PURE__ */ __name((t8) => (t9, o6, i9, s5) => {
      o6(ssrRenderComponent(l, mergeProps({ title: "Privacy notice", paragraphs: ["Hireway Agency is the personal information controller for applicant data processed in this platform.", "Clients see an anonymized profile until an applicant accepts an interview invitation and consents to reveal identity.", "Questions or data subject requests: dpo@hireway.example"] }, s5), null, i9));
    }, "setup") });
    s = i3.setup;
    i3.setup = (e8, r3) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue"), s ? s(e8, r3) : void 0;
    };
    n5 = i3;
  }
});

// server/chunks/build/terms-D7_8G52c.mjs
var terms_D7_8G52c_exports = {};
__export(terms_D7_8G52c_exports, {
  default: () => i4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var a, n6, i4;
var init_terms_D7_8G52c = __esm({
  "server/chunks/build/terms-D7_8G52c.mjs"() {
    init_StaticPage_2oBdhQva();
    init_renderer();
    init_nitro();
    init_entry();
    init_pages_rKeP87el();
    a = defineComponent({ __name: "terms", __ssrInlineRender: true, setup: /* @__PURE__ */ __name((t8) => (t9, s5, a13, n8) => {
      s5(ssrRenderComponent(l, mergeProps({ title: "Terms of use", paragraphs: ["Credits pay for interview invites on Hireway. Unused invites may be refunded when an applicant declines before accepting.", "Clients agree not to attempt to identify applicants off-platform before consent is given.", "These terms are placeholders for the demo and are not legal advice."] }, n8), null, a13));
    }, "setup") });
    n6 = a.setup;
    a.setup = (e8, r3) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue"), n6 ? n6(e8, r3) : void 0;
    };
    i4 = a;
  }
});

// server/chunks/build/pages-CV72xBFx.mjs
var pages_CV72xBFx_exports = {};
__export(pages_CV72xBFx_exports, {
  default: () => S3
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var h5, w4, S3;
var init_pages_CV72xBFx = __esm({
  "server/chunks/build/pages-CV72xBFx.mjs"() {
    init_entry();
    init_pages_rKeP87el();
    init_useFormat_D5t1w13n();
    init_renderer();
    init_nitro();
    h5 = defineComponent({ __name: "index", __ssrInlineRender: true, setup(e8) {
      const u9 = ga(), b6 = ref(""), h8 = ref(""), w7 = ref(""), S5 = ref(""), j7 = ref(""), g9 = ref("");
      const k5 = computed(() => u9.publishedJobs.filter((e9) => !(b6.value && !e9.title.toLowerCase().includes(b6.value.toLowerCase())) && ((!h8.value || e9.location === h8.value) && ((!w7.value || e9.workSetup === w7.value) && ((!S5.value || e9.employmentType === S5.value) && ((!j7.value || e9.category === j7.value) && !!(function(e10) {
        if (!g9.value) return true;
        if (!e10.salaryDisclosed) return "undisclosed" === g9.value;
        const a13 = (function(e11) {
          return e11.salaryMin ?? e11.salaryMax ?? 0;
        })(e10), t8 = (function(e11) {
          return e11.salaryMax ?? e11.salaryMin ?? 0;
        })(e10);
        switch (g9.value) {
          case "under30":
            return t8 > 0 && t8 <= 32e3;
          case "30-40":
            return a13 >= 25e3 && t8 <= 4e4;
          case "40-55":
            return a13 >= 35e3 && t8 <= 55e3;
          case "55plus":
            return a13 >= 5e4;
          default:
            return true;
        }
      })(e9))))))), _7 = computed(() => [...new Set(u9.publishedJobs.map((e9) => e9.location))]), C3 = computed(() => [...new Set(u9.publishedJobs.map((e9) => e9.workSetup))]), J2 = computed(() => [...new Set(u9.publishedJobs.map((e9) => e9.employmentType))]), L3 = computed(() => [...new Set(u9.publishedJobs.map((e9) => e9.category))]);
      function clientLabel(e9) {
        return e9.confidential ? "Confidential client" : u9.orgById(e9.orgId)?.name || "Client";
      }
      __name(clientLabel, "clientLabel");
      return (e9, a13, u10, m8) => {
        const $4 = n, I4 = na;
        a13(`<div${ssrRenderAttrs(m8)} data-v-4d53ae47>`), a13(ssrRenderComponent($4, { title: "Open roles", subtitle: "Published positions with Hireway" }, null, u10)), a13(`<div class="filters card stack-md" data-v-4d53ae47><input${ssrRenderAttr("value", unref(b6))} class="input" type="search" placeholder="Search jobs" aria-label="Search jobs" data-v-4d53ae47><div class="row" data-v-4d53ae47><select class="select" data-v-4d53ae47><option value="" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(h8)) ? ssrLooseContain(unref(h8), "") : we(unref(h8), "")) ? " selected" : ""}>All locations</option><!--[-->`), ssrRenderList$2(unref(_7), (e10) => {
          a13(`<option${ssrRenderAttr("value", e10)} data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(h8)) ? ssrLooseContain(unref(h8), e10) : we(unref(h8), e10)) ? " selected" : ""}>${ssrInterpolate(e10)}</option>`);
        }), a13(`<!--]--></select><select class="select" data-v-4d53ae47><option value="" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(w7)) ? ssrLooseContain(unref(w7), "") : we(unref(w7), "")) ? " selected" : ""}>Work setup</option><!--[-->`), ssrRenderList$2(unref(C3), (e10) => {
          a13(`<option${ssrRenderAttr("value", e10)} data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(w7)) ? ssrLooseContain(unref(w7), e10) : we(unref(w7), e10)) ? " selected" : ""}>${ssrInterpolate(e10)}</option>`);
        }), a13(`<!--]--></select><select class="select" data-v-4d53ae47><option value="" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(S5)) ? ssrLooseContain(unref(S5), "") : we(unref(S5), "")) ? " selected" : ""}>Employment type</option><!--[-->`), ssrRenderList$2(unref(J2), (e10) => {
          a13(`<option${ssrRenderAttr("value", e10)} data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(S5)) ? ssrLooseContain(unref(S5), e10) : we(unref(S5), e10)) ? " selected" : ""}>${ssrInterpolate(e10)}</option>`);
        }), a13(`<!--]--></select><select class="select" data-v-4d53ae47><option value="" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(j7)) ? ssrLooseContain(unref(j7), "") : we(unref(j7), "")) ? " selected" : ""}>Category</option><!--[-->`), ssrRenderList$2(unref(L3), (e10) => {
          a13(`<option${ssrRenderAttr("value", e10)} data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(j7)) ? ssrLooseContain(unref(j7), e10) : we(unref(j7), e10)) ? " selected" : ""}>${ssrInterpolate(e10)}</option>`);
        }), a13(`<!--]--></select><select class="select" data-v-4d53ae47><option value="" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), "") : we(unref(g9), "")) ? " selected" : ""}>Salary band</option><option value="under30" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), "under30") : we(unref(g9), "under30")) ? " selected" : ""}>Up to \u20B132,000</option><option value="30-40" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), "30-40") : we(unref(g9), "30-40")) ? " selected" : ""}>\u20B125,000 \u2013 \u20B140,000</option><option value="40-55" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), "40-55") : we(unref(g9), "40-55")) ? " selected" : ""}>\u20B135,000 \u2013 \u20B155,000</option><option value="55plus" data-v-4d53ae47${includeBooleanAttr(Array.isArray(unref(g9)) ? ssrLooseContain(unref(g9), "55plus") : we(unref(g9), "55plus")) ? " selected" : ""}>\u20B150,000 and above</option></select></div></div>`), unref(k5).length ? (a13('<div class="card-grid" data-v-4d53ae47><!--[-->'), ssrRenderList$2(unref(k5), (t8) => {
          a13(ssrRenderComponent(I4, { key: t8.id, to: `/jobs/${t8.slug}`, class: "card job-card" }, { default: withCtx((a14, s5, r3, l8) => {
            if (!s5) return [createVNode("h2", { class: "section-title" }, toDisplayString(t8.title), 1), createVNode("p", { class: "meta" }, toDisplayString(t8.location) + " \xB7 " + toDisplayString(t8.workSetup) + " \xB7 " + toDisplayString(t8.employmentType), 1), createVNode("p", null, toDisplayString(("formatSalary" in e9 ? e9.formatSalary : unref(formatSalary))(t8)), 1), createVNode("p", { class: "meta" }, toDisplayString(clientLabel(t8)), 1)];
            s5(`<h2 class="section-title" data-v-4d53ae47${l8}>${ssrInterpolate(t8.title)}</h2><p class="meta" data-v-4d53ae47${l8}>${ssrInterpolate(t8.location)} \xB7 ${ssrInterpolate(t8.workSetup)} \xB7 ${ssrInterpolate(t8.employmentType)}</p><p data-v-4d53ae47${l8}>${ssrInterpolate(("formatSalary" in e9 ? e9.formatSalary : unref(formatSalary))(t8))}</p><p class="meta" data-v-4d53ae47${l8}>${ssrInterpolate(clientLabel(t8))}</p>`);
          }), _: 2 }, u10));
        }), a13("<!--]--></div>")) : a13('<div class="card stack-sm" data-v-4d53ae47><p data-v-4d53ae47>No jobs match these filters</p><button type="button" class="btn btn--secondary" data-v-4d53ae47>Clear filters</button></div>'), a13("</div>");
      };
    } });
    w4 = h5.setup;
    h5.setup = (e8, a13) => {
      const t8 = useSSRContext();
      return (t8.modules || (t8.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), w4 ? w4(e8, a13) : void 0;
    };
    S3 = _plugin_vue_export_helper_default(h5, [["__scopeId", "data-v-4d53ae47"]]);
  }
});

// server/chunks/build/portal-qve5xPQR.mjs
var portal_qve5xPQR_exports = {};
__export(portal_qve5xPQR_exports, {
  default: () => y4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var _4, w5, y4;
var init_portal_qve5xPQR = __esm({
  "server/chunks/build/portal-qve5xPQR.mjs"() {
    init_entry();
    init_renderer();
    init_nitro();
    _4 = defineComponent({ __name: "portal", __ssrInlineRender: true, setup(a13) {
      const c5 = useRoute$1(), h8 = ga(), _7 = computed(() => c5.path.startsWith("/hr") ? "hr" : c5.path.startsWith("/client") ? "client" : "applicant"), w7 = computed(() => "applicant" === _7.value ? [{ to: "/applicant", label: "Applications" }, { to: "/applicant/profile", label: "Profile" }] : "client" === _7.value ? [{ to: "/client", label: "Jobs" }, { to: "/client/requests", label: "Requests" }, { to: "/client/wallet", label: "Wallet" }, { to: "/client/team", label: "Team" }] : [{ to: "/hr", label: "Follow-ups" }, { to: "/hr/requests", label: "Requests" }, { to: "/hr/jobs", label: "Jobs" }, { to: "/hr/clients", label: "Clients" }]), y7 = computed(() => "applicant" === _7.value ? "Applicant portal" : "client" === _7.value ? "Client portal" : "HR portal"), I4 = computed(() => {
        if ("hr" === _7.value) return h8.data.notifications.filter((a14) => "hana-cruz" === a14.userId);
        if ("client" === _7.value) {
          const a14 = h8.clientOwner(h8.ui.clientOrgId);
          return h8.data.notifications.filter((t8) => t8.userId === a14?.id);
        }
        return h8.data.notifications.filter((a14) => a14.userId === h8.ui.applicantId);
      }), $4 = ref(false);
      return (a14, t8, e8, c6) => {
        const b6 = na;
        t8(`<div${ssrRenderAttrs(mergeProps({ class: "portal-shell" }, c6))} data-v-49e0fd48><aside class="sidenav" data-v-49e0fd48><div class="brand" data-v-49e0fd48><div class="wordmark" data-v-49e0fd48>Hireway</div><div class="meta" data-v-49e0fd48>${ssrInterpolate(unref(y7))}</div></div><nav class="side-links" data-v-49e0fd48><!--[-->`), ssrRenderList$2(unref(w7), (a15) => {
          t8(ssrRenderComponent(b6, { key: a15.to, to: a15.to }, { default: withCtx((t9, e9, s5, l8) => {
            if (!e9) return [createTextVNode(toDisplayString(a15.label), 1)];
            e9(`${ssrInterpolate(a15.label)}`);
          }), _: 2 }, e8));
        }), t8('<!--]--></nav><div class="sidenav-foot" data-v-49e0fd48><button type="button" class="bell" data-v-49e0fd48> Notifications '), unref(I4).some((a15) => !a15.read) ? t8('<span class="dot" data-v-49e0fd48></span>') : t8("<!---->"), t8("</button>"), unref($4) ? (t8('<div class="notif-panel card" data-v-49e0fd48>'), unref(I4).length ? t8("<!---->") : t8('<div class="meta" data-v-49e0fd48>No notifications</div>'), t8("<!--[-->"), ssrRenderList$2(unref(I4), (a15) => {
          t8(`<button type="button" class="${ssrRenderClass([{ unread: !a15.read }, "notif"])}" data-v-49e0fd48><strong data-v-49e0fd48>${ssrInterpolate(a15.title)}</strong><span class="meta" data-v-49e0fd48>${ssrInterpolate(a15.body)}</span></button>`);
        }), t8("<!--]--></div>")) : t8("<!---->"), t8('</div></aside><main class="portal-main" data-v-49e0fd48>'), ssrRenderSlot(a14.$slots, "default", {}, null, t8, e8), t8("</main></div>");
      };
    } });
    w5 = _4.setup;
    _4.setup = (a13, t8) => {
      const e8 = useSSRContext();
      return (e8.modules || (e8.modules = /* @__PURE__ */ new Set())).add("layouts/portal.vue"), w5 ? w5(a13, t8) : void 0;
    };
    y4 = _plugin_vue_export_helper_default(_4, [["__scopeId", "data-v-49e0fd48"]]);
  }
});

// server/chunks/build/public-L4LFeNcy.mjs
var public_L4LFeNcy_exports = {};
__export(public_L4LFeNcy_exports, {
  default: () => m3
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var i5, l4, m3;
var init_public_L4LFeNcy = __esm({
  "server/chunks/build/public-L4LFeNcy.mjs"() {
    init_entry();
    init_renderer();
    init_nitro();
    i5 = {};
    l4 = i5.setup;
    i5.setup = (a13, t8) => {
      const e8 = useSSRContext();
      return (e8.modules || (e8.modules = /* @__PURE__ */ new Set())).add("layouts/public.vue"), l4 ? l4(a13, t8) : void 0;
    };
    m3 = _plugin_vue_export_helper_default(i5, [["ssrRender", function(a13, d7, i9, l8) {
      const m8 = na;
      d7(`<div${ssrRenderAttrs(mergeProps({ class: "public-layout" }, l8))} data-v-909b3630><header class="public-header" data-v-909b3630>`), d7(ssrRenderComponent(m8, { to: "/", class: "logo" }, { default: withCtx((a14, t8, e8, r3) => {
        if (!t8) return [createTextVNode("Hireway")];
        t8("Hireway");
      }), _: 1 }, i9)), d7('<nav class="nav" data-v-909b3630>'), d7(ssrRenderComponent(m8, { to: "/" }, { default: withCtx((a14, t8, e8, r3) => {
        if (!t8) return [createTextVNode("Jobs")];
        t8("Jobs");
      }), _: 1 }, i9)), d7(ssrRenderComponent(m8, { to: "/about" }, { default: withCtx((a14, t8, e8, r3) => {
        if (!t8) return [createTextVNode("About")];
        t8("About");
      }), _: 1 }, i9)), d7(ssrRenderComponent(m8, { to: "/employers" }, { default: withCtx((a14, t8, e8, r3) => {
        if (!t8) return [createTextVNode("For employers")];
        t8("For employers");
      }), _: 1 }, i9)), d7(ssrRenderComponent(m8, { to: "/contact" }, { default: withCtx((a14, t8, e8, r3) => {
        if (!t8) return [createTextVNode("Contact")];
        t8("Contact");
      }), _: 1 }, i9)), d7('</nav></header><main class="public-main" data-v-909b3630>'), ssrRenderSlot(a13.$slots, "default", {}, null, d7, i9), d7("</main></div>");
    }], ["__scopeId", "data-v-909b3630"]]);
  }
});

// server/chunks/build/error-404-D7_HZ4JB.mjs
var error_404_D7_HZ4JB_exports = {};
__export(error_404_D7_HZ4JB_exports, {
  default: () => m4
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var l5, p3, m4;
var init_error_404_D7_HZ4JB = __esm({
  "server/chunks/build/error-404-D7_HZ4JB.mjs"() {
    init_entry();
    init_renderer();
    init_nitro();
    l5 = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, status: { type: Number, default: 404 }, statusText: { type: String, default: "Page not found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" }, backToPrevious: { type: String, default: "Go back" } }, setup(t8) {
      const c5 = t8;
      return useHead({ title: `${c5.status} - ${c5.statusText} | ${c5.appName}`, script: [{ innerHTML: '(()=>{if(!(window.history.state&&window.history.state.back||document.referrer.startsWith(window.location.origin+"/")))return;const t=document.querySelector("[data-back-home]"),e=document.querySelector("[data-back-previous]");t&&e&&(e.onclick=()=>window.history.back(),t.hidden=!0,e.hidden=!1)})();', tagPosition: "bodyClose" }], style: [{ innerHTML: '*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb);--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body,button{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}a{-webkit-text-decoration:inherit;text-decoration:inherit}a,button{color:inherit}button{font-feature-settings:inherit;font-variation-settings:inherit;font-family:inherit;font-size:100%;font-weight:inherit;padding:0;text-transform:none;cursor:pointer}[type=button],button{-webkit-appearance:button;background-color:#0000;background-image:none}h1,h2,p{margin:0}[hidden]:where(:not([hidden=until-found])){display:none}' }] }), (e8, c6, l8, p6) => {
        const m8 = na;
        c6(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide" }, p6))} data-v-55415188><div class="max-w-520px text-center" data-v-55415188><h1 class="font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]" data-v-55415188>${ssrInterpolate(t8.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-55415188>${ssrInterpolate(t8.statusText)}</h2><p class="mb-4 px-2 text-md text-neutral-500" data-v-55415188>${ssrInterpolate(t8.description)}</p><div class="flex items-center justify-center w-full" data-v-55415188>`), c6(ssrRenderComponent(m8, { to: "/", "data-back-home": "", class: "font-medium hover:text-[#00DC82] text-sm underline underline-offset-3" }, { default: withCtx((e9, n8, r3, a13) => {
          if (!n8) return [createTextVNode(toDisplayString(t8.backHome), 1)];
          n8(`${ssrInterpolate(t8.backHome)}`);
        }), _: 1 }, l8)), c6(` <button type="button" data-back-previous hidden class="appearance-none bg-transparent border-0 cursor-pointer font-medium font-sans hover:text-[#00DC82] p-0 text-inherit text-sm underline underline-offset-3" data-v-55415188>${ssrInterpolate(t8.backToPrevious)}</button></div></div></div>`);
      };
    } };
    p3 = l5.setup;
    l5.setup = (t8, e8) => {
      const n8 = useSSRContext();
      return (n8.modules || (n8.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/error-404.vue"), p3 ? p3(t8, e8) : void 0;
    };
    m4 = _plugin_vue_export_helper_default(l5, [["__scopeId", "data-v-55415188"]]);
  }
});

// server/chunks/build/error-500-DzIRuSEs.mjs
var error_500_DzIRuSEs_exports = {};
__export(error_500_DzIRuSEs_exports, {
  default: () => u6
});
import "node:buffer";
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:timers";
var o3, i6, u6;
var init_error_500_DzIRuSEs = __esm({
  "server/chunks/build/error-500-DzIRuSEs.mjs"() {
    init_entry();
    init_renderer();
    init_nitro();
    o3 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, status: { type: Number, default: 500 }, statusText: { type: String, default: "Internal server error" }, description: { type: String, default: "This page is temporarily unavailable." }, refresh: { type: String, default: "Refresh this page" } }, setup(e8) {
      const s5 = e8;
      return useHead({ title: `${s5.status} - ${s5.statusText} | ${s5.appName}`, script: [], style: [{ innerHTML: '*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb);--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}' }] }), (t8, s6, o6, i9) => {
        s6(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide" }, i9))} data-v-30c65fa3><div class="max-w-520px text-center" data-v-30c65fa3><h1 class="font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]" data-v-30c65fa3>${ssrInterpolate(e8.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-30c65fa3>${ssrInterpolate(e8.statusText)}</h2><p class="mb-4 px-2 text-md text-neutral-500" data-v-30c65fa3>${ssrInterpolate(e8.description)}</p></div></div>`);
      };
    } };
    i6 = o3.setup;
    o3.setup = (e8, t8) => {
      const n8 = useSSRContext();
      return (n8.modules || (n8.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/error-500.vue"), i6 ? i6(e8, t8) : void 0;
    };
    u6 = _plugin_vue_export_helper_default(o3, [["__scopeId", "data-v-30c65fa3"]]);
  }
});

// server/chunks/virtual/entry.mjs
var entry_exports = {};
__export(entry_exports, {
  N: () => na,
  _: () => _plugin_vue_export_helper_default,
  a: () => ga,
  b: () => useRoute$1,
  c: () => useToast,
  d: () => useHead,
  e: () => ja,
  r: () => renderList$2,
  s: () => ssrRenderList$2,
  u: () => useRouter
});
function createContext(e8 = {}) {
  let t8, a13 = false;
  const checkConflict = /* @__PURE__ */ __name((e9) => {
    if (t8 && t8 !== e9) throw new Error("Context conflict");
  }, "checkConflict");
  let n8;
  if (e8.asyncContext) {
    const t9 = e8.AsyncLocalStorage || globalThis.AsyncLocalStorage || globalThis.process?.getBuiltinModule?.("node:async_hooks")?.AsyncLocalStorage;
    t9 ? n8 = new t9() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const _wrapInstance = /* @__PURE__ */ __name((e9) => n8 && null !== e9 && "object" == typeof e9 ? { __unctx_weak: new ge(e9) } : e9, "_wrapInstance"), _getCurrentInstance = /* @__PURE__ */ __name(() => {
    if (n8) {
      const e9 = n8.getStore();
      if (void 0 !== e9) return ((e10) => e10 && e10.__unctx_weak ? e10.__unctx_weak.deref() : e10)(e9);
    }
    return t8;
  }, "_getCurrentInstance");
  return { use: /* @__PURE__ */ __name(() => {
    const e9 = _getCurrentInstance();
    if (void 0 === e9) throw new Error("Context is not available");
    return e9;
  }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance() ?? null, "tryUse"), set: /* @__PURE__ */ __name((e9, n9) => {
    n9 || checkConflict(e9), t8 = e9, a13 = true;
  }, "set"), unset: /* @__PURE__ */ __name(() => {
    t8 = void 0, a13 = false;
  }, "unset"), call: /* @__PURE__ */ __name((e9, r3) => {
    checkConflict(e9), t8 = e9;
    try {
      return n8 ? n8.run(_wrapInstance(e9), r3) : r3();
    } finally {
      a13 || (t8 = void 0);
    }
  }, "call"), async callAsync(e9, r3) {
    t8 = e9;
    const onRestore = /* @__PURE__ */ __name(() => {
      t8 = e9;
    }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t8 === e9 ? onRestore : void 0, "onLeave");
    Re.add(onLeave);
    try {
      const o6 = n8 ? n8.run(_wrapInstance(e9), r3) : r3();
      return a13 || (t8 = void 0), await o6;
    } finally {
      Re.delete(onLeave);
    }
  } };
}
function executeAsync(e8) {
  const t8 = [];
  for (const e9 of Re) {
    const a14 = e9();
    a14 && t8.push(a14);
  }
  const restore = /* @__PURE__ */ __name(() => {
    for (const e9 of t8) e9();
  }, "restore");
  let a13 = e8();
  return a13 && "object" == typeof a13 && "catch" in a13 && (a13 = a13.catch((e9) => {
    throw restore(), e9;
  })), [a13, restore];
}
function docsBase(e8) {
  return `https://nuxt.com/docs/4.x/errors/${e8.replace("NUXT_", "").toLowerCase()}`;
}
function getContext$2(e8, t8) {
  return ((e9, t9 = {}) => be.get(e9, t9))(e8, t8);
}
function getNuxtAppCtx(e8 = "nuxt-app") {
  return getContext$2(e8, { asyncContext: false });
}
function registerPluginHooks(e8, t8) {
  t8.hooks && e8.hooks.addHooks(t8.hooks);
}
async function applyPlugin(e8, t8) {
  if ("function" == typeof t8) {
    const run = /* @__PURE__ */ __name(() => e8.runWithContext(() => t8(e8)), "run"), { provide: a13 } = await run() || {};
    if (a13 && "object" == typeof a13) for (const t9 in a13) e8.provide(t9, a13[t9]);
  }
}
function defineNuxtPlugin(e8) {
  if ("function" == typeof e8) return e8;
  const t8 = e8._name || e8.name;
  return delete e8.name, Object.assign(e8.setup || (() => {
  }), e8, { [xe]: true, _name: t8 });
}
function callWithNuxt(e8, t8, a13) {
  const fn2 = /* @__PURE__ */ __name(() => t8(), "fn"), n8 = getNuxtAppCtx(e8._id);
  return e8.vueApp.runWithContext(() => n8.callAsync(e8, fn2));
}
function tryUseNuxtApp(e8) {
  let t8;
  return hasInjectionContext() && (t8 = getCurrentInstance()?.appContext.app.$nuxt), t8 ||= getNuxtAppCtx(e8).tryUse(), t8 || null;
}
function useNuxtApp(e8) {
  const t8 = tryUseNuxtApp(e8);
  if (!t8) throw Se.NUXT_E1001();
  return t8;
}
function useRuntimeConfig(e8) {
  return useNuxtApp().$config;
}
function defineGetter(e8, t8, a13) {
  Object.defineProperty(e8, t8, { get: /* @__PURE__ */ __name(() => a13, "get") });
}
function useState(...e8) {
  const t8 = "string" == typeof e8[e8.length - 1] ? e8.pop() : void 0;
  "string" != typeof e8[0] && e8.unshift(t8);
  const [a13, n8] = e8;
  if (!a13 || "string" != typeof a13) throw je.NUXT_E7009({ key: a13 });
  if (void 0 !== n8 && "function" != typeof n8) throw je.NUXT_E7007({ type: typeof n8 });
  const r3 = "$s" + a13, o6 = useNuxtApp(), i9 = toRef(o6.payload.state, r3);
  if (n8 && (o6._state[r3] ??= { _default: n8 }), void 0 === i9.value && n8) {
    const e9 = n8();
    if (isRef(e9)) return o6.payload.state[r3] = e9, i9;
    i9.value = e9;
  }
  return i9;
}
function isPlainObject(e8) {
  return e8 && "object" == typeof e8 && "[object Object]" === Object.prototype.toString.call(e8) && "function" != typeof e8.toJSON;
}
function createPinia() {
  const e8 = effectScope(true), t8 = e8.run(() => ref({}));
  let a13 = [], n8 = [];
  const r3 = markRaw({ install(e9) {
    setActivePinia(r3), r3._a = e9, e9.provide(Pe, r3), e9.config.globalProperties.$pinia = r3, n8.forEach((e10) => a13.push(e10)), n8 = [];
  }, use(e9) {
    return this._a ? a13.push(e9) : n8.push(e9), this;
  }, _p: a13, _a: null, _e: e8, _s: /* @__PURE__ */ new Map(), state: t8 });
  return r3;
}
function addSubscription(e8, t8, a13, n8 = noop$1) {
  e8.add(t8);
  const removeSubscription = /* @__PURE__ */ __name(() => {
    e8.delete(t8) && n8();
  }, "removeSubscription");
  return !a13 && getCurrentScope() && onScopeDispose(removeSubscription), removeSubscription;
}
function triggerSubscriptions(e8, ...t8) {
  e8.forEach((e9) => {
    e9(...t8);
  });
}
function mergeReactiveObjects(e8, t8) {
  e8 instanceof Map && t8 instanceof Map ? t8.forEach((t9, a13) => e8.set(a13, t9)) : e8 instanceof Set && t8 instanceof Set && t8.forEach(e8.add, e8);
  for (const a13 in t8) {
    if (!Object.hasOwn(t8, a13)) continue;
    const n8 = t8[a13], r3 = e8[a13];
    if (isPlainObject(r3) && isPlainObject(n8) && Object.hasOwn(e8, a13) && !isRef(n8) && !isReactive(n8)) {
      e8[a13] = mergeReactiveObjects(r3, n8);
      const t9 = toRaw(e8)[a13];
      isRef(t9) && isShallow(t9) && triggerRef(t9);
    } else e8[a13] = n8;
  }
  return e8;
}
function shouldHydrate(e8) {
  return !e8 || "object" != typeof e8 || !Object.hasOwn(e8, Te);
}
function isComputed(e8) {
  return !(!isRef(e8) || !e8.effect);
}
function createSetupStore(e8, t8, a13 = {}, n8, r3, o6) {
  let i9;
  const s5 = Ee({ actions: {} }, a13), c5 = { deep: true };
  let l8, u9, d7, p6 = /* @__PURE__ */ new Set(), h8 = /* @__PURE__ */ new Set();
  const m8 = n8.state.value[e8];
  let g9;
  function $patch(t9) {
    let a14;
    l8 = u9 = false, "function" == typeof t9 ? (t9(n8.state.value[e8]), a14 = { type: "patch function", storeId: e8, events: d7 }) : (mergeReactiveObjects(n8.state.value[e8], t9), a14 = { type: "patch object", payload: t9, storeId: e8, events: d7 });
    const r4 = g9 = /* @__PURE__ */ Symbol();
    nextTick().then(() => {
      g9 === r4 && (l8 = true);
    }), u9 = true, triggerSubscriptions(p6, a14, n8.state.value[e8]);
  }
  __name($patch, "$patch");
  o6 || m8 || (n8.state.value[e8] = {});
  const y7 = o6 ? function() {
    const { state: e9 } = a13, t9 = e9 ? e9() : {};
    this.$patch((e10) => {
      Ee(e10, t9);
    });
  } : noop$1;
  const action = /* @__PURE__ */ __name((t9, a14 = "") => {
    if (Oe in t9) return t9[Ne] = a14, t9;
    const wrappedAction = /* @__PURE__ */ __name(function() {
      setActivePinia(n8);
      const a15 = Array.from(arguments), r4 = /* @__PURE__ */ new Set(), o7 = /* @__PURE__ */ new Set();
      let i10;
      triggerSubscriptions(h8, { args: a15, name: wrappedAction[Ne], store: R2, after: /* @__PURE__ */ __name(function(e9) {
        r4.add(e9);
      }, "after"), onError: /* @__PURE__ */ __name(function(e9) {
        o7.add(e9);
      }, "onError") });
      try {
        i10 = t9.apply(this && this.$id === e8 ? this : R2, a15);
      } catch (e9) {
        throw triggerSubscriptions(o7, e9), e9;
      }
      return i10 instanceof Promise ? i10.then((e9) => (triggerSubscriptions(r4, e9), e9)).catch((e9) => (triggerSubscriptions(o7, e9), Promise.reject(e9))) : (triggerSubscriptions(r4, i10), i10);
    }, "wrappedAction");
    return wrappedAction[Oe] = true, wrappedAction[Ne] = a14, wrappedAction;
  }, "action"), w7 = { _p: n8, $id: e8, $onAction: addSubscription.bind(null, h8), $patch, $reset: y7, $subscribe(t9, a14 = {}) {
    if (p6.has(t9)) return noop$1;
    const r4 = addSubscription(p6, t9, a14.detached, () => o7()), o7 = i9.run(() => watch(() => n8.state.value[e8], (n9) => {
      ("sync" === a14.flush ? u9 : l8) && t9({ storeId: e8, type: "direct", events: d7 }, n9);
    }, Ee({}, c5, a14)));
    return r4;
  }, $dispose: /* @__PURE__ */ __name(function() {
    i9.stop(), p6.clear(), h8.clear(), n8._s.delete(e8);
  }, "$dispose") }, R2 = reactive(w7);
  n8._s.set(e8, R2);
  const A3 = (n8._a && n8._a.runWithContext || fallbackRunWithContext)(() => n8._e.run(() => (i9 = effectScope()).run(() => t8({ action }))));
  for (const t9 in A3) {
    const a14 = A3[t9];
    isRef(a14) && !isComputed(a14) || isReactive(a14) ? o6 || (m8 && shouldHydrate(a14) && (isRef(a14) ? a14.value = m8[t9] : ((a14 instanceof Set || a14 instanceof Map) && a14.clear(), mergeReactiveObjects(a14, m8[t9]))), n8.state.value[e8][t9] = a14) : "function" == typeof a14 && (A3[t9] = action(a14, t9), s5.actions[t9] = a14);
  }
  return Ee(R2, A3), Ee(toRaw(R2), A3), Object.defineProperty(R2, "$state", { get: /* @__PURE__ */ __name(() => n8.state.value[e8], "get"), set: /* @__PURE__ */ __name((e9) => {
    $patch((t9) => {
      Ee(t9, e9);
    });
  }, "set") }), n8._p.forEach((e9) => {
    const t9 = i9.run(() => e9({ store: R2, app: n8._a, pinia: n8, options: s5 }));
    Ee(R2, t9);
  }), m8 && o6 && a13.hydrate && a13.hydrate(R2.$state, m8), l8 = true, u9 = true, R2;
}
function mapState(e8, t8) {
  return Array.isArray(t8) ? t8.reduce((t9, a13) => (t9[a13] = function() {
    return e8(this.$pinia)[a13];
  }, t9), {}) : Object.keys(t8).reduce((a13, n8) => (a13[n8] = function() {
    const a14 = e8(this.$pinia), r3 = t8[n8];
    return "function" == typeof r3 ? r3.call(this, a14) : a14[r3];
  }, a13), {});
}
function isRouteComponent(e8) {
  return "object" == typeof e8 || "displayName" in e8 || "props" in e8 || "__vccOpts" in e8;
}
function applyToParams(e8, t8) {
  const a13 = {};
  for (const n8 in t8) {
    const r3 = t8[n8];
    a13[n8] = Me(r3) ? r3.map(e8) : e8(r3);
  }
  return a13;
}
function mergeOptions(e8, t8) {
  const a13 = {};
  for (const n8 in e8) a13[n8] = n8 in t8 ? t8[n8] : e8[n8];
  return a13;
}
function createRouterError(e8, t8) {
  return Be(new Error(), { type: e8, [qe]: true }, t8);
}
function isNavigationFailure(e8, t8) {
  return e8 instanceof Error && qe in e8 && (null == t8 || !!(e8.type & t8));
}
function useRoute(e8) {
  return inject(Ue);
}
function commonEncode(e8) {
  return null == e8 ? "" : encodeURI("" + e8).replace(it, "|").replace(tt, "[").replace(at, "]");
}
function encodeQueryValue(e8) {
  return commonEncode(e8).replace(et, "%2B").replace(ct, "+").replace(Ke, "%23").replace(Je, "%26").replace(rt, "`").replace(ot, "{").replace(st, "}").replace(nt, "^");
}
function encodeQueryKey(e8) {
  return encodeQueryValue(e8).replace(Ye, "%3D");
}
function encodeParam(e8) {
  return (function(e9) {
    return commonEncode(e9).replace(Ke, "%23").replace(Ze, "%3F");
  })(e8).replace(Xe, "%2F");
}
function decode(e8) {
  if (null == e8) return null;
  try {
    return decodeURIComponent("" + e8);
  } catch {
  }
  return "" + e8;
}
function parseURL2(e8, t8, a13 = "/") {
  let n8, r3 = {}, o6 = "", i9 = "";
  const s5 = t8.indexOf("#");
  let c5 = t8.indexOf("?");
  return c5 = s5 >= 0 && c5 > s5 ? -1 : c5, c5 >= 0 && (n8 = t8.slice(0, c5), o6 = t8.slice(c5, s5 > 0 ? s5 : t8.length), r3 = e8(o6.slice(1))), s5 >= 0 && (n8 = n8 || t8.slice(0, s5), i9 = t8.slice(s5, t8.length)), n8 = (function(e9, t9) {
    if (isAbsolutePath(e9)) return e9;
    if (!e9) return t9;
    const a14 = t9.split("/"), n9 = e9.split("/"), r4 = n9[n9.length - 1];
    ".." !== r4 && "." !== r4 || n9.push("");
    let o7, i10, s6 = a14.length - 1;
    for (o7 = 0; o7 < n9.length; o7++) if (i10 = n9[o7], "." !== i10) {
      if (".." !== i10) break;
      s6 > 1 && s6--;
    }
    return a14.slice(0, s6).join("/") + "/" + n9.slice(o7).join("/");
  })(null != n8 ? n8 : t8, a13), { fullPath: n8 + o6 + i9, path: n8, query: r3, hash: decode(i9) };
}
function isSameRouteRecord$1(e8, t8) {
  return (e8.aliasOf || e8) === (t8.aliasOf || t8);
}
function isSameRouteLocationParams$1(e8, t8) {
  if (Object.keys(e8).length !== Object.keys(t8).length) return false;
  for (var a13 in e8) if (!isSameRouteLocationParamsValue(e8[a13], t8[a13])) return false;
  return true;
}
function isSameRouteLocationParamsValue(e8, t8) {
  return Me(e8) ? isEquivalentArray$1(e8, t8) : Me(t8) ? isEquivalentArray$1(t8, e8) : (e8 && e8.valueOf()) === (t8 && t8.valueOf());
}
function isEquivalentArray$1(e8, t8) {
  return Me(t8) ? e8.length === t8.length && e8.every((e9, a13) => e9 === t8[a13]) : 1 === e8.length && e8[0] === t8;
}
function normalizeBase(e8) {
  if (!e8) if (Qe) {
    const t8 = document.querySelector("base");
    e8 = (e8 = t8 && t8.getAttribute("href") || "/").replace(/^\w+:\/\/[^/]+/, "");
  } else e8 = "/";
  return "/" !== e8[0] && "#" !== e8[0] && (e8 = "/" + e8), e8.replace(lt, "");
}
function createHref(e8, t8) {
  return e8.replace(dt, "#") + t8;
}
function scrollToPosition(e8) {
  let t8;
  if ("el" in e8) {
    const a13 = e8.el, n8 = "string" == typeof a13 && a13.startsWith("#"), r3 = "string" == typeof a13 ? n8 ? document.getElementById(a13.slice(1)) : document.querySelector(a13) : a13;
    if (!r3) return;
    t8 = (function(e9, t9) {
      const a14 = document.documentElement.getBoundingClientRect(), n9 = e9.getBoundingClientRect();
      return { behavior: t9.behavior, left: n9.left - a14.left - (t9.left || 0), top: n9.top - a14.top - (t9.top || 0) };
    })(r3, e8);
  } else t8 = e8;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t8) : window.scrollTo(null != t8.left ? t8.left : window.scrollX, null != t8.top ? t8.top : window.scrollY);
}
function getScrollKey(e8, t8) {
  return (history.state ? history.state.position - t8 : -1) + e8;
}
function saveScrollPosition(e8) {
  pt.set(e8, "manual" === history.scrollRestoration ? { left: window.scrollX, top: window.scrollY } : null);
}
function isRouteName(e8) {
  return "string" == typeof e8 || "symbol" == typeof e8;
}
function parseQuery2(e8) {
  const t8 = {};
  if ("" === e8 || "?" === e8) return t8;
  const a13 = ("?" === e8[0] ? e8.slice(1) : e8).split("&");
  for (let e9 = 0; e9 < a13.length; ++e9) {
    const n8 = a13[e9].replace(et, " "), r3 = n8.indexOf("="), o6 = decode(r3 < 0 ? n8 : n8.slice(0, r3)), i9 = r3 < 0 ? null : decode(n8.slice(r3 + 1));
    if (o6 in t8) {
      let e10 = t8[o6];
      Me(e10) || (e10 = t8[o6] = [e10]), e10.push(i9);
    } else t8[o6] = i9;
  }
  return t8;
}
function stringifyQuery(e8) {
  let t8 = "";
  for (let a13 in e8) {
    const n8 = e8[a13];
    a13 = encodeQueryKey(a13), null != n8 ? (Me(n8) ? n8.map((e9) => e9 && encodeQueryValue(e9)) : [n8 && encodeQueryValue(n8)]).forEach((e9) => {
      void 0 !== e9 && (t8 += (t8.length ? "&" : "") + a13, null != e9 && (t8 += "=" + e9));
    }) : void 0 !== n8 && (t8 += (t8.length ? "&" : "") + a13);
  }
  return t8;
}
function normalizeQuery(e8) {
  const t8 = {};
  for (const a13 in e8) {
    const n8 = e8[a13];
    void 0 !== n8 && (t8[a13] = Me(n8) ? n8.map((e9) => null == e9 ? null : "" + e9) : null == n8 ? n8 : "" + n8);
  }
  return t8;
}
function useCallbacks() {
  let e8 = [];
  return { add: /* @__PURE__ */ __name(function(t8) {
    return e8.push(t8), () => {
      const a13 = e8.indexOf(t8);
      a13 > -1 && e8.splice(a13, 1);
    };
  }, "add"), list: /* @__PURE__ */ __name(() => e8.slice(), "list"), reset: /* @__PURE__ */ __name(function() {
    e8 = [];
  }, "reset") };
}
function guardToPromiseFn(e8, t8, a13, n8, r3, o6 = (e9) => e9()) {
  const i9 = n8 && (n8.enterCallbacks[r3] = n8.enterCallbacks[r3] || []);
  return () => new Promise((s5, c5) => {
    const next = /* @__PURE__ */ __name((e9) => {
      var o7;
      false === e9 ? c5(createRouterError(4, { from: a13, to: t8 })) : e9 instanceof Error ? c5(e9) : "string" == typeof (o7 = e9) || o7 && "object" == typeof o7 ? c5(createRouterError(2, { from: t8, to: e9 })) : (i9 && n8.enterCallbacks[r3] === i9 && "function" == typeof e9 && i9.push(e9), s5());
    }, "next"), l8 = o6(() => e8.call(n8 && n8.instances[r3], t8, a13, next));
    let u9 = Promise.resolve(l8);
    e8.length < 3 && (u9 = u9.then(next)), u9.catch((e9) => c5(e9));
  });
}
function extractComponentsGuards(e8, t8, a13, n8, r3 = (e9) => e9()) {
  const o6 = [];
  for (const i9 of e8) for (const e9 in i9.components) {
    let s5 = i9.components[e9];
    if ("beforeRouteEnter" === t8 || i9.instances[e9]) if (isRouteComponent(s5)) {
      const c5 = (s5.__vccOpts || s5)[t8];
      c5 && o6.push(guardToPromiseFn(c5, a13, n8, i9, e9, r3));
    } else {
      let c5 = s5();
      o6.push(() => c5.then((o7) => {
        if (!o7) throw new Error(`Couldn't resolve component "${e9}" at "${i9.path}"`);
        const s6 = (c6 = o7).__esModule || "Module" === c6[Symbol.toStringTag] || c6.default && isRouteComponent(c6.default) ? o7.default : o7;
        var c6;
        i9.mods[e9] = o7, i9.components[e9] = s6;
        const l8 = (s6.__vccOpts || s6)[t8];
        return l8 && guardToPromiseFn(l8, a13, n8, i9, e9, r3)();
      }));
    }
  }
  return o6;
}
function createMemoryHistory(e8 = "") {
  let t8 = [], a13 = [["", {}]], n8 = 0;
  function setLocation(e9, t9 = {}) {
    n8++, n8 !== a13.length && a13.splice(n8), a13.push([e9, t9]);
  }
  __name(setLocation, "setLocation");
  const r3 = { location: "", state: {}, base: e8 = normalizeBase(e8), createHref: createHref.bind(null, e8), replace(e9, t9) {
    a13.splice(n8--, 1), setLocation(e9, t9);
  }, push(e9, t9) {
    setLocation(e9, t9);
  }, listen: /* @__PURE__ */ __name((e9) => (t8.push(e9), () => {
    const a14 = t8.indexOf(e9);
    a14 > -1 && t8.splice(a14, 1);
  }), "listen"), destroy() {
    t8 = [], a13 = [["", {}]], n8 = 0;
  }, go(e9, r4 = true) {
    const o6 = this.location, i9 = e9 < 0 ? "back" : "forward";
    n8 = Math.max(0, Math.min(n8 + e9, a13.length - 1)), r4 && (function(e10, a14, { direction: n9, delta: r5 }) {
      const o7 = { direction: n9, delta: r5, type: "pop" };
      for (const n10 of t8) n10(e10, a14, o7);
    })(this.location, o6, { direction: i9, delta: e9 });
  } };
  return Object.defineProperty(r3, "location", { enumerable: true, get: /* @__PURE__ */ __name(() => a13[n8][0], "get") }), Object.defineProperty(r3, "state", { enumerable: true, get: /* @__PURE__ */ __name(() => a13[n8][1], "get") }), r3;
}
function compareScoreArray(e8, t8) {
  let a13 = 0;
  for (; a13 < e8.length && a13 < t8.length; ) {
    const n8 = t8[a13] - e8[a13];
    if (n8) return n8;
    a13++;
  }
  return e8.length < t8.length ? 1 === e8.length && 80 === e8[0] ? -1 : 1 : e8.length > t8.length ? 1 === t8.length && 80 === t8[0] ? 1 : -1 : 0;
}
function comparePathParserScore(e8, t8) {
  let a13 = 0;
  const n8 = e8.score, r3 = t8.score;
  for (; a13 < n8.length && a13 < r3.length; ) {
    const e9 = compareScoreArray(n8[a13], r3[a13]);
    if (e9) return e9;
    a13++;
  }
  if (1 === Math.abs(r3.length - n8.length)) {
    if (isLastScoreNegative(n8)) return 1;
    if (isLastScoreNegative(r3)) return -1;
  }
  return r3.length - n8.length;
}
function isLastScoreNegative(e8) {
  const t8 = e8[e8.length - 1];
  return e8.length > 0 && t8[t8.length - 1] < 0;
}
function createRouteRecordMatcher(e8, t8, a13) {
  const n8 = (function(e9, t9) {
    const a14 = Be({}, gt, t9), n9 = [];
    let r4 = a14.start ? "^" : "";
    const o6 = [];
    for (const t10 of e9) {
      const e10 = t10.length ? [] : [90];
      a14.strict && !t10.length && (r4 += "/");
      for (let n10 = 0; n10 < t10.length; n10++) {
        const i10 = t10[n10];
        let s5 = 40 + (a14.sensitive ? 0.25 : 0);
        if (0 === i10.type) n10 || (r4 += "/"), r4 += i10.value.replace(vt, "\\$&"), s5 += 40;
        else if (1 === i10.type) {
          const { value: e11, repeatable: a15, optional: c5, regexp: l8 } = i10;
          o6.push({ name: e11, repeatable: a15, optional: c5 });
          const u9 = l8 || mt;
          if (u9 !== mt) {
            s5 += 10;
            try {
              new RegExp(`(${u9})`);
            } catch (t11) {
              throw new Error(`Invalid custom RegExp for param "${e11}" (${u9}): ` + t11.message);
            }
          }
          let d7 = a15 ? `((?:${u9})(?:/(?:${u9}))*)` : `(${u9})`;
          n10 || (d7 = c5 && t10.length < 2 ? `(?:/${d7})` : "/" + d7), c5 && (d7 += "?"), r4 += d7, s5 += 20, c5 && (s5 += -8), a15 && (s5 += -20), ".*" === u9 && (s5 += -50);
        }
        e10.push(s5);
      }
      n9.push(e10);
    }
    if (a14.strict && a14.end) {
      const e10 = n9.length - 1;
      n9[e10][n9[e10].length - 1] += 0.7000000000000001;
    }
    a14.strict || (r4 += "/?"), a14.end ? r4 += "$" : a14.strict && !r4.endsWith("/") && (r4 += "(?:/|$)");
    const i9 = new RegExp(r4, a14.sensitive ? "" : "i");
    return { re: i9, score: n9, keys: o6, parse: /* @__PURE__ */ __name(function(e10) {
      const t10 = e10.match(i9), a15 = {};
      if (!t10) return null;
      for (let e11 = 1; e11 < t10.length; e11++) {
        const n10 = t10[e11] || "", r5 = o6[e11 - 1];
        a15[r5.name] = n10 && r5.repeatable ? n10.split("/") : n10;
      }
      return a15;
    }, "parse"), stringify: /* @__PURE__ */ __name(function(t10) {
      let a15 = "", n10 = false;
      for (const r5 of e9) {
        n10 && a15.endsWith("/") || (a15 += "/"), n10 = false;
        for (const e10 of r5) if (0 === e10.type) a15 += e10.value;
        else if (1 === e10.type) {
          const { value: o7, repeatable: i10, optional: s5 } = e10, c5 = o7 in t10 ? t10[o7] : "";
          if (Me(c5) && !i10) throw new Error(`Provided param "${o7}" is an array but it is not repeatable (* or + modifiers)`);
          const l8 = Me(c5) ? c5.join("/") : c5;
          if (!l8) {
            if (!s5) throw new Error(`Missing required param "${o7}"`);
            r5.length < 2 && (a15.endsWith("/") ? a15 = a15.slice(0, -1) : n10 = true);
          }
          a15 += l8;
        }
      }
      return a15 || "/";
    }, "stringify") };
  })((function(e9) {
    if (!e9) return [[]];
    if ("/" === e9) return [[ht]];
    if (!isAbsolutePath(e9)) throw new Error(`Invalid path "${e9}"`);
    function crash(e10) {
      throw new Error(`ERR (${t9})/"${s5}": ${e10}`);
    }
    __name(crash, "crash");
    let t9 = 0, a14 = t9;
    const n9 = [];
    let r4;
    function finalizeSegment() {
      r4 && n9.push(r4), r4 = [];
    }
    __name(finalizeSegment, "finalizeSegment");
    let o6, i9 = 0, s5 = "", c5 = "";
    function consumeBuffer() {
      s5 && (0 === t9 ? r4.push({ type: 0, value: s5 }) : 1 === t9 || 2 === t9 || 3 === t9 ? (r4.length > 1 && ("*" === o6 || "+" === o6) && crash(`A repeatable param (${s5}) must be alone in its segment. eg: '/:ids+.`), r4.push({ type: 1, value: s5, regexp: c5, repeatable: "*" === o6 || "+" === o6, optional: "*" === o6 || "?" === o6 })) : crash("Invalid state to consume buffer"), s5 = "");
    }
    __name(consumeBuffer, "consumeBuffer");
    function addCharToBuffer() {
      s5 += o6;
    }
    __name(addCharToBuffer, "addCharToBuffer");
    for (; i9 < e9.length; ) switch (o6 = e9[i9++], t9) {
      case 0:
        "\\" === o6 ? (a14 = t9, t9 = 4) : "/" === o6 ? (s5 && consumeBuffer(), finalizeSegment()) : ":" === o6 ? (consumeBuffer(), t9 = 1) : addCharToBuffer();
        break;
      case 4:
        addCharToBuffer(), t9 = a14;
        break;
      case 1:
        "(" === o6 ? t9 = 2 : ft.test(o6) ? addCharToBuffer() : (consumeBuffer(), t9 = 0, "*" !== o6 && "?" !== o6 && "+" !== o6 && i9--);
        break;
      case 2:
        ")" === o6 ? "\\" == c5[c5.length - 1] ? c5 = c5.slice(0, -1) + o6 : t9 = 3 : c5 += o6;
        break;
      case 3:
        consumeBuffer(), t9 = 0, "*" !== o6 && "?" !== o6 && "+" !== o6 && i9--, c5 = "";
        break;
      default:
        crash("Unknown state");
    }
    return 2 === t9 && crash(`Unfinished custom RegExp for param "${s5}"`), consumeBuffer(), finalizeSegment(), n9;
  })(e8.path), a13), r3 = Be(n8, { record: e8, parent: t8, children: [], alias: [] });
  return t8 && !r3.record.aliasOf == !t8.record.aliasOf && t8.children.push(r3), r3;
}
function createRouterMatcher(e8, t8) {
  const a13 = [], n8 = /* @__PURE__ */ new Map();
  function addRoute(e9, a14, n9) {
    const r3 = !n9, o6 = normalizeRouteRecord(e9);
    o6.aliasOf = n9 && n9.record;
    const i9 = mergeOptions(t8, e9), s5 = [o6];
    if ("alias" in e9) {
      const t9 = "string" == typeof e9.alias ? [e9.alias] : e9.alias;
      for (const e10 of t9) s5.push(normalizeRouteRecord(Be({}, o6, { components: n9 ? n9.record.components : o6.components, path: e10, aliasOf: n9 ? n9.record : o6 })));
    }
    let c5, l8;
    for (const t9 of s5) {
      const { path: s6 } = t9;
      if (a14 && !isAbsolutePath(s6)) {
        const e10 = a14.record.path, n10 = "/" === e10[e10.length - 1] ? "" : "/";
        t9.path = a14.record.path + (s6 && n10 + s6);
      }
      if (c5 = createRouteRecordMatcher(t9, a14, i9), n9 ? n9.alias.push(c5) : (l8 = l8 || c5, l8 !== c5 && l8.alias.push(c5), r3 && e9.name && !isAliasRecord(c5) && removeRoute(e9.name)), isMatchable(c5) && insertMatcher(c5), o6.children) {
        const e10 = o6.children;
        for (let t10 = 0; t10 < e10.length; t10++) addRoute(e10[t10], c5, n9 && n9.children[t10]);
      }
      n9 = n9 || c5;
    }
    return l8 ? () => {
      removeRoute(l8);
    } : noop;
  }
  __name(addRoute, "addRoute");
  function removeRoute(e9) {
    if (isRouteName(e9)) {
      const t9 = n8.get(e9);
      t9 && (n8.delete(e9), a13.splice(a13.indexOf(t9), 1), t9.children.forEach(removeRoute), t9.alias.forEach(removeRoute));
    } else {
      const t9 = a13.indexOf(e9);
      t9 > -1 && (a13.splice(t9, 1), e9.record.name && n8.delete(e9.record.name), e9.children.forEach(removeRoute), e9.alias.forEach(removeRoute));
    }
  }
  __name(removeRoute, "removeRoute");
  function insertMatcher(e9) {
    const t9 = (function(e10, t10) {
      let a14 = 0, n9 = t10.length;
      for (; a14 !== n9; ) {
        const r4 = a14 + n9 >> 1;
        comparePathParserScore(e10, t10[r4]) < 0 ? n9 = r4 : a14 = r4 + 1;
      }
      const r3 = (function(e11) {
        let t11 = e11;
        for (; t11 = t11.parent; ) if (isMatchable(t11) && 0 === comparePathParserScore(e11, t11)) return t11;
      })(e10);
      r3 && (n9 = t10.lastIndexOf(r3, n9 - 1));
      return n9;
    })(e9, a13);
    a13.splice(t9, 0, e9), e9.record.name && !isAliasRecord(e9) && n8.set(e9.record.name, e9);
  }
  __name(insertMatcher, "insertMatcher");
  return t8 = mergeOptions(yt, t8), e8.forEach((e9) => addRoute(e9)), { addRoute, resolve: /* @__PURE__ */ __name(function(e9, t9) {
    let r3, o6, i9, s5 = {};
    if ("name" in e9 && e9.name) {
      if (r3 = n8.get(e9.name), !r3) throw createRouterError(1, { location: e9 });
      i9 = r3.record.name, s5 = Be(pickParams(t9.params, r3.keys.filter((e10) => !e10.optional).concat(r3.parent ? r3.parent.keys.filter((e10) => e10.optional) : []).map((e10) => e10.name)), e9.params && pickParams(e9.params, r3.keys.map((e10) => e10.name))), o6 = r3.stringify(s5);
    } else if (null != e9.path) o6 = e9.path, r3 = a13.find((e10) => e10.re.test(o6)), r3 && (s5 = r3.parse(o6), i9 = r3.record.name, r3.keys.forEach((e10) => {
      e10.optional && !s5[e10.name] && delete s5[e10.name];
    }));
    else {
      if (r3 = t9.name ? n8.get(t9.name) : a13.find((e10) => e10.re.test(t9.path)), !r3) throw createRouterError(1, { location: e9, currentLocation: t9 });
      i9 = r3.record.name, s5 = Be({}, t9.params, e9.params), o6 = r3.stringify(s5);
    }
    const c5 = [];
    let l8 = r3;
    for (; l8; ) c5.unshift(l8.record), l8 = l8.parent;
    return { name: i9, path: o6, params: s5, matched: c5, meta: mergeMetaFields(c5) };
  }, "resolve"), removeRoute, clearRoutes: /* @__PURE__ */ __name(function() {
    a13.length = 0, n8.clear();
  }, "clearRoutes"), getRoutes: /* @__PURE__ */ __name(function() {
    return a13;
  }, "getRoutes"), getRecordMatcher: /* @__PURE__ */ __name(function(e9) {
    return n8.get(e9);
  }, "getRecordMatcher") };
}
function pickParams(e8, t8) {
  const a13 = {};
  for (const n8 of t8) n8 in e8 && (a13[n8] = e8[n8]);
  return a13;
}
function normalizeRouteRecord(e8) {
  const t8 = { path: e8.path, redirect: e8.redirect, name: e8.name, meta: e8.meta || {}, aliasOf: e8.aliasOf, beforeEnter: e8.beforeEnter, props: normalizeRecordProps(e8), children: e8.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e8 ? e8.components || null : e8.component && { default: e8.component } };
  return Object.defineProperty(t8, "mods", { value: {} }), t8;
}
function normalizeRecordProps(e8) {
  const t8 = {}, a13 = e8.props || false;
  if ("component" in e8) t8.default = a13;
  else for (const n8 in e8.components) t8[n8] = "object" == typeof a13 ? a13[n8] : a13;
  return t8;
}
function isAliasRecord(e8) {
  for (; e8; ) {
    if (e8.record.aliasOf) return true;
    e8 = e8.parent;
  }
  return false;
}
function mergeMetaFields(e8) {
  return e8.reduce((e9, t8) => Be(e9, t8.meta), {});
}
function isMatchable({ record: e8 }) {
  return !!(e8.name || e8.components && Object.keys(e8.components).length || e8.redirect);
}
function useLink(e8) {
  const t8 = inject(ze), a13 = inject(Ue), n8 = computed(() => {
    const a14 = unref(e8.to);
    return t8.resolve(a14);
  }), r3 = computed(() => {
    const { matched: e9 } = n8.value, { length: t9 } = e9, r4 = e9[t9 - 1], o7 = a13.matched;
    if (!r4 || !o7.length) return -1;
    const i10 = o7.findIndex(isSameRouteRecord$1.bind(null, r4));
    if (i10 > -1) return i10;
    const s5 = getOriginalPath$1(e9[t9 - 2]);
    return t9 > 1 && getOriginalPath$1(r4) === s5 && o7[o7.length - 1].path !== s5 ? o7.findIndex(isSameRouteRecord$1.bind(null, e9[t9 - 2])) : i10;
  }), o6 = computed(() => r3.value > -1 && (function(e9, t9) {
    for (const a14 in t9) {
      const n9 = t9[a14], r4 = e9[a14];
      if (Me(n9)) {
        if (!Me(r4) || r4.length !== n9.length || n9.some((e10, t10) => e10.valueOf() !== r4[t10].valueOf())) return false;
      } else if (n9 !== r4) return false;
    }
    return true;
  })(a13.params, n8.value.params)), i9 = computed(() => r3.value > -1 && r3.value === a13.matched.length - 1 && isSameRouteLocationParams$1(a13.params, n8.value.params));
  return { route: n8, href: computed(() => n8.value.href), isActive: o6, isExactActive: i9, navigate: /* @__PURE__ */ __name(function(a14 = {}) {
    if ((function(e9) {
      if (e9.metaKey || e9.altKey || e9.ctrlKey || e9.shiftKey) return;
      if (e9.defaultPrevented) return;
      if (void 0 !== e9.button && 0 !== e9.button) return;
      if (e9.currentTarget && e9.currentTarget.getAttribute) {
        const t9 = e9.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t9)) return;
      }
      e9.preventDefault && e9.preventDefault();
      return true;
    })(a14)) {
      const a15 = t8[unref(e8.replace) ? "replace" : "push"](unref(e8.to)).catch(noop);
      return e8.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => a15), a15;
    }
    return Promise.resolve();
  }, "navigate") };
}
function getOriginalPath$1(e8) {
  return e8 ? e8.aliasOf ? e8.aliasOf.path : e8.path : "";
}
function normalizeSlot$1(e8, t8) {
  if (!e8) return null;
  const a13 = e8(t8);
  return 1 === a13.length ? a13[0] : a13;
}
function createRouter(e8) {
  const t8 = e8.matcher || createRouterMatcher(e8.routes, e8), a13 = e8.parseQuery || parseQuery2, n8 = e8.stringifyQuery || stringifyQuery, r3 = e8.history, o6 = useCallbacks(), i9 = useCallbacks(), s5 = useCallbacks(), c5 = shallowRef(ut), l8 = shallowRef(0);
  let u9 = ut;
  Qe && e8.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const p6 = applyToParams.bind(null, (e9) => "" + e9), h8 = applyToParams.bind(null, encodeParam), f6 = applyToParams.bind(null, decode);
  function resolve3(e9, o7) {
    if (l8.value, "string" == typeof e9) {
      o7 = o7 || (e9.startsWith("/") ? ut : c5.value);
      const n9 = parseURL2(a13, e9, o7.path), i11 = t8.resolve({ path: n9.path }, o7), s7 = r3.createHref(n9.fullPath);
      return Be(n9, i11, { params: f6(i11.params), redirectedFrom: void 0, href: s7 });
    }
    let i10;
    if (o7 = Be({}, o7 || (null == e9.path || !e9.path.startsWith("/") || "name" in e9 && e9.name ? c5.value : ut)), null != e9.path) i10 = Be({}, e9, { path: parseURL2(a13, e9.path, o7.path).path });
    else {
      const t9 = Be({}, e9.params);
      for (const e10 in t9) null == t9[e10] && delete t9[e10];
      i10 = Be({}, e9, { params: h8(t9) }), o7.params = h8(o7.params);
    }
    const s6 = t8.resolve(i10, o7), u10 = e9.hash || "";
    s6.params = p6(f6(s6.params));
    const d7 = (function(e10, t9) {
      const a14 = t9.query ? e10(t9.query) : "";
      return t9.path + (a14 && "?") + a14 + (t9.hash || "");
    })(n8, Be({}, e9, { hash: (m9 = u10, commonEncode(m9).replace(ot, "{").replace(st, "}").replace(nt, "^")), path: s6.path }));
    var m9;
    const g10 = r3.createHref(d7);
    return Be({ fullPath: d7, hash: u10, query: n8 === stringifyQuery ? normalizeQuery(e9.query) : e9.query || {} }, s6, { redirectedFrom: void 0, href: g10 });
  }
  __name(resolve3, "resolve");
  function locationAsObject(e9) {
    return "string" == typeof e9 ? parseURL2(a13, e9, c5.value.path) : Be({}, e9);
  }
  __name(locationAsObject, "locationAsObject");
  function checkCanceledNavigation(e9, t9) {
    if (u9 !== e9) return createRouterError(8, { from: t9, to: e9 });
  }
  __name(checkCanceledNavigation, "checkCanceledNavigation");
  function push(e9) {
    return pushWithRedirect(e9);
  }
  __name(push, "push");
  function handleRedirectRecord(e9, t9) {
    const a14 = e9.matched[e9.matched.length - 1];
    if (a14 && a14.redirect) {
      const { redirect: n9 } = a14;
      let r4 = "function" == typeof n9 ? n9(e9, t9) : n9;
      return "string" == typeof r4 && (r4 = r4.includes("?") || r4.includes("#") ? r4 = locationAsObject(r4) : { path: r4 }, r4.params = {}), Be({ query: e9.query, hash: e9.hash, params: null != r4.path ? {} : e9.params }, r4);
    }
  }
  __name(handleRedirectRecord, "handleRedirectRecord");
  function pushWithRedirect(e9, t9) {
    const a14 = u9 = resolve3(e9), r4 = c5.value, o7 = e9.state, i10 = e9.force, s6 = true === e9.replace, l9 = handleRedirectRecord(a14, r4);
    if (l9) return pushWithRedirect(Be(locationAsObject(l9), { state: "object" == typeof l9 ? Be({}, o7, l9.state) : o7, force: i10, replace: s6 }), t9 || a14);
    const d7 = a14;
    let p7;
    return d7.redirectedFrom = t9, !i10 && (function(e10, t10, a15) {
      const n9 = t10.matched.length - 1, r5 = a15.matched.length - 1;
      return n9 > -1 && n9 === r5 && isSameRouteRecord$1(t10.matched[n9], a15.matched[r5]) && isSameRouteLocationParams$1(t10.params, a15.params) && e10(t10.query) === e10(a15.query) && t10.hash === a15.hash;
    })(n8, r4, a14) && (p7 = createRouterError(16, { to: d7, from: r4 }), handleScroll(r4, r4, true, false)), (p7 ? Promise.resolve(p7) : navigate(d7, r4)).catch((e10) => isNavigationFailure(e10) ? isNavigationFailure(e10, 2) ? e10 : markAsReady(e10) : triggerError(e10, d7, r4)).then((e10) => {
      if (e10) {
        if (isNavigationFailure(e10, 2)) return pushWithRedirect(Be({ replace: s6 }, locationAsObject(e10.to), { state: "object" == typeof e10.to ? Be({}, o7, e10.to.state) : o7, force: i10 }), t9 || d7);
      } else e10 = finalizeNavigation(d7, r4, true, s6, o7);
      return triggerAfterEach(d7, r4, e10), e10;
    });
  }
  __name(pushWithRedirect, "pushWithRedirect");
  function checkCanceledNavigationAndReject(e9, t9) {
    const a14 = checkCanceledNavigation(e9, t9);
    return a14 ? Promise.reject(a14) : Promise.resolve();
  }
  __name(checkCanceledNavigationAndReject, "checkCanceledNavigationAndReject");
  function runWithContext(e9) {
    const t9 = w7.values().next().value;
    return t9 && "function" == typeof t9.runWithContext ? t9.runWithContext(e9) : e9();
  }
  __name(runWithContext, "runWithContext");
  function navigate(e9, t9) {
    let a14;
    const [n9, r4, s6] = (function(e10, t10) {
      const a15 = [], n10 = [], r5 = [], o7 = Math.max(t10.matched.length, e10.matched.length);
      for (let i10 = 0; i10 < o7; i10++) {
        const o8 = t10.matched[i10];
        o8 && (e10.matched.find((e11) => isSameRouteRecord$1(e11, o8)) ? n10.push(o8) : a15.push(o8));
        const s7 = e10.matched[i10];
        s7 && (t10.matched.find((e11) => isSameRouteRecord$1(e11, s7)) || r5.push(s7));
      }
      return [a15, n10, r5];
    })(e9, t9);
    a14 = extractComponentsGuards(n9.reverse(), "beforeRouteLeave", e9, t9);
    for (const r5 of n9) r5.leaveGuards.forEach((n10) => {
      a14.push(guardToPromiseFn(n10, e9, t9));
    });
    const c6 = checkCanceledNavigationAndReject.bind(null, e9, t9);
    return a14.push(c6), runGuardQueue(a14).then(() => {
      a14 = [];
      for (const n10 of o6.list()) a14.push(guardToPromiseFn(n10, e9, t9));
      return a14.push(c6), runGuardQueue(a14);
    }).then(() => {
      a14 = extractComponentsGuards(r4, "beforeRouteUpdate", e9, t9);
      for (const n10 of r4) n10.updateGuards.forEach((n11) => {
        a14.push(guardToPromiseFn(n11, e9, t9));
      });
      return a14.push(c6), runGuardQueue(a14);
    }).then(() => {
      a14 = [];
      for (const n10 of s6) if (n10.beforeEnter) if (Me(n10.beforeEnter)) for (const r5 of n10.beforeEnter) a14.push(guardToPromiseFn(r5, e9, t9));
      else a14.push(guardToPromiseFn(n10.beforeEnter, e9, t9));
      return a14.push(c6), runGuardQueue(a14);
    }).then(() => (e9.matched.forEach((e10) => e10.enterCallbacks = {}), a14 = extractComponentsGuards(s6, "beforeRouteEnter", e9, t9, runWithContext), a14.push(c6), runGuardQueue(a14))).then(() => {
      a14 = [];
      for (const n10 of i9.list()) a14.push(guardToPromiseFn(n10, e9, t9));
      return a14.push(c6), runGuardQueue(a14);
    }).catch((e10) => isNavigationFailure(e10, 8) ? e10 : Promise.reject(e10));
  }
  __name(navigate, "navigate");
  function triggerAfterEach(e9, t9, a14) {
    s5.list().forEach((n9) => runWithContext(() => n9(e9, t9, a14)));
  }
  __name(triggerAfterEach, "triggerAfterEach");
  function finalizeNavigation(e9, t9, a14, n9, o7) {
    const i10 = checkCanceledNavigation(e9, t9);
    if (i10) return i10;
    const s6 = t9 === ut, l9 = Qe ? history.state : {};
    a14 && (n9 || s6 ? r3.replace(e9.fullPath, Be({ scroll: s6 && l9 && l9.scroll }, o7)) : r3.push(e9.fullPath, o7)), c5.value = e9, handleScroll(e9, t9, a14, s6), markAsReady();
  }
  __name(finalizeNavigation, "finalizeNavigation");
  let m8;
  let g9, v7 = useCallbacks(), y7 = useCallbacks();
  function triggerError(e9, t9, a14) {
    markAsReady(e9);
    const n9 = y7.list();
    return n9.length ? n9.forEach((n10) => n10(e9, t9, a14)) : console.error(e9), Promise.reject(e9);
  }
  __name(triggerError, "triggerError");
  function markAsReady(e9) {
    return g9 || (g9 = !e9, m8 || (m8 = r3.listen((e10, t9, a14) => {
      if (!R2.listening) return;
      const n9 = resolve3(e10), o7 = handleRedirectRecord(n9, R2.currentRoute.value);
      if (o7) return void pushWithRedirect(Be(o7, { replace: true, force: true }), n9).catch(noop);
      u9 = n9;
      const i10 = c5.value;
      Qe && a14.delta && saveScrollPosition(getScrollKey(i10.fullPath, a14.delta)), navigate(n9, i10).catch((e11) => isNavigationFailure(e11, 12) ? e11 : isNavigationFailure(e11, 2) ? (pushWithRedirect(Be(locationAsObject(e11.to), { force: true }), n9).then((e12) => {
        isNavigationFailure(e12, 20) && !a14.delta && "pop" === a14.type && r3.go(-1, false);
      }).catch(noop), Promise.reject()) : (a14.delta && r3.go(-a14.delta, false), triggerError(e11, n9, i10))).then((e11) => {
        (e11 = e11 || finalizeNavigation(n9, i10, false)) && (a14.delta && !isNavigationFailure(e11, 8) ? r3.go(-a14.delta, false) : "pop" === a14.type && isNavigationFailure(e11, 20) && r3.go(-1, false)), triggerAfterEach(n9, i10, e11);
      }).catch(noop);
    })), v7.list().forEach(([t9, a14]) => e9 ? a14(e9) : t9()), v7.reset()), e9;
  }
  __name(markAsReady, "markAsReady");
  function handleScroll(t9, a14, n9, r4) {
    const { scrollBehavior: o7 } = e8;
    if (!Qe || !o7) return Promise.resolve();
    const i10 = !n9 && (function(e9) {
      const t10 = pt.get(e9);
      return pt.delete(e9), t10;
    })(getScrollKey(t9.fullPath, 0)) || (r4 || !n9) && history.state && history.state.scroll || null;
    return nextTick().then(() => o7(t9, a14, i10)).then((e9) => t9 === c5.value && e9 && scrollToPosition(e9)).catch((e9) => t9 === c5.value && triggerError(e9, t9, a14));
  }
  __name(handleScroll, "handleScroll");
  const go2 = /* @__PURE__ */ __name((e9) => r3.go(e9), "go");
  let b6;
  const w7 = /* @__PURE__ */ new Set(), R2 = { currentRoute: c5, listening: true, addRoute: /* @__PURE__ */ __name(function(e9, a14) {
    let n9, r4;
    isRouteName(e9) ? (n9 = t8.getRecordMatcher(e9), r4 = a14) : r4 = e9;
    const o7 = t8.addRoute(r4, n9);
    return l8.value++, () => {
      o7(), l8.value++;
    };
  }, "addRoute"), removeRoute: /* @__PURE__ */ __name(function(e9) {
    const a14 = t8.getRecordMatcher(e9);
    a14 && (t8.removeRoute(a14), l8.value++);
  }, "removeRoute"), clearRoutes: /* @__PURE__ */ __name(function() {
    t8.clearRoutes(), l8.value++;
  }, "clearRoutes"), hasRoute: /* @__PURE__ */ __name(function(e9) {
    return !!t8.getRecordMatcher(e9);
  }, "hasRoute"), getRoutes: /* @__PURE__ */ __name(function() {
    return t8.getRoutes().map((e9) => e9.record);
  }, "getRoutes"), resolve: resolve3, options: e8, push, replace: /* @__PURE__ */ __name(function(e9) {
    return push(Be(locationAsObject(e9), { replace: true }));
  }, "replace"), go: go2, back: /* @__PURE__ */ __name(() => go2(-1), "back"), forward: /* @__PURE__ */ __name(() => go2(1), "forward"), beforeEach: o6.add, beforeResolve: i9.add, afterEach: s5.add, onError: y7.add, isReady: /* @__PURE__ */ __name(function() {
    return g9 && c5.value !== ut ? Promise.resolve() : new Promise((e9, t9) => {
      v7.add([e9, t9]);
    });
  }, "isReady"), install(e9) {
    e9.component("RouterLink", bt), e9.component("RouterView", wt), e9.config.globalProperties.$router = R2, Object.defineProperty(e9.config.globalProperties, "$route", { enumerable: true, get: /* @__PURE__ */ __name(() => unref(c5), "get") }), Qe && !b6 && c5.value === ut && (b6 = true, push(r3.location).catch((e10) => {
    }));
    const t9 = {};
    for (const e10 in ut) Object.defineProperty(t9, e10, { get: /* @__PURE__ */ __name(() => c5.value[e10], "get"), enumerable: true });
    e9.provide(ze, R2), e9.provide(Ue, shallowReactive(t9)), e9.provide(Ve, c5);
    const a14 = e9.unmount;
    w7.add(e9), e9.unmount = function() {
      w7.delete(e9), w7.size < 1 && (u9 = ut, m8 && m8(), m8 = null, c5.value = ut, b6 = false, g9 = false), a14();
    };
  } };
  function runGuardQueue(e9) {
    return e9.reduce((e10, t9) => e10.then(() => runWithContext(t9)), Promise.resolve());
  }
  __name(runGuardQueue, "runGuardQueue");
  return R2;
}
function parseAnchorURL(e8, t8 = "https://a.invalid/probe/") {
  try {
    return new URL(e8, t8);
  } catch {
    return null;
  }
}
function resolvesWithoutBase(e8) {
  const t8 = parseAnchorURL(e8);
  return !!t8 && t8.href === parseAnchorURL(e8, "https://b.invalid/probe/")?.href;
}
function isRootedPath(e8) {
  return "/" === e8[0] && "/" !== e8[1] && "\\" !== e8[1] && ("	" !== e8[1] && "\n" !== e8[1] && "\r" !== e8[1] || !resolvesWithoutBase(e8));
}
function isAbsoluteHref(e8) {
  return !!e8 && !isRootedPath(e8) && resolvesWithoutBase(e8);
}
function getScriptProtocol(e8) {
  if (!e8 || isRootedPath(e8)) return null;
  let t8 = parseAnchorURL(e8.replace(/[\u0000-\u001F\u007F\s]+/g, ""));
  for (; "view-source:" === t8?.protocol; ) t8 = parseAnchorURL(t8.pathname);
  return t8 ? isScriptProtocol(t8.protocol) ? t8.protocol : null : "";
}
function sanitizeAnchorHref(e8) {
  return null === getScriptProtocol(e8) ? e8 : null;
}
function getParentScope(e8) {
  const t8 = e8;
  return t8.parent ?? t8.subs?.sub;
}
function defineNuxtRouteMiddleware(e8) {
  return e8;
}
function navigateTo(e8, t8) {
  e8 ||= "/";
  const a13 = "string" == typeof e8 ? e8 : "path" in e8 ? resolveRouteObject(e8) : useRouter().resolve(e8).href, n8 = isAbsoluteHref(a13), r3 = t8?.external || n8;
  if (r3) {
    if (!t8?.external) throw kt.NUXT_E2001({ toPath: a13 });
    const e9 = getScriptProtocol(a13);
    if (null !== e9) throw kt.NUXT_E2002({ toPath: a13, protocol: e9 });
  }
  const o6 = (() => {
    try {
      if (useNuxtApp()._processingMiddleware) return true;
    } catch {
      return false;
    }
    return false;
  })(), i9 = useRouter(), s5 = useNuxtApp();
  if (s5.ssrContext) {
    const c6 = "string" == typeof e8 || r3 ? a13 : i9.resolve(e8).fullPath || "/", l8 = r3 ? a13 : joinURL(useRuntimeConfig().app.baseURL, c6), redirect = /* @__PURE__ */ __name(async function(e9) {
      await s5.callHook("app:redirected");
      const a14 = (function(e10, t9 = false) {
        const a15 = new URL(e10, "http://localhost");
        return t9 ? e10.startsWith("//") ? a15.toString().replace(a15.protocol, "") : a15.toString() : a15.pathname.replace(/^\/{2,}/, "/") + a15.search + a15.hash;
      })(l8, n8), r4 = a14.replace(Pt, (e10) => _t[e10]);
      return s5.ssrContext["~renderResponse"] = { statusCode: sanitizeStatusCode(t8?.redirectCode || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${r4}"></head></html>`, headers: { location: a14 } }, e9;
    }, "redirect");
    if (!r3 && o6) {
      let t9 = c6;
      if ("string" == typeof e8 && a13.includes("?")) {
        const a14 = i9.resolve(e8);
        t9 = i9.resolve({ path: a14.path, query: a14.query, hash: a14.hash }).fullPath || "/";
      }
      return i9.afterEach((e9) => e9.fullPath === t9 ? redirect(false) : void 0), e8;
    }
    return redirect(!o6 && void 0);
  }
  if (r3) return s5._cookieWriters?.forEach((e9) => e9()), (void 0).addEventListener("pagehide", (e9) => {
    e9.persisted || s5._scope.stop();
  }, { once: true }), t8?.replace ? (void 0).replace(a13) : (void 0).href = a13, o6 ? !!s5.isHydrating && new Promise(() => {
  }) : Promise.resolve();
  const c5 = "string" == typeof e8 ? encodeRoutePath(e8) : e8;
  return t8?.replace ? i9.replace(c5) : i9.push(c5);
}
function resolveRouteObject(e8) {
  return withQuery(e8.path || "", e8.query || {}) + (e8.hash || "");
}
function encodeRoutePath(e8) {
  const t8 = parseURL(e8);
  return a13 = decodePath(t8.pathname), encodeURI(a13).replace(Ot, "|").replace(Nt, "[").replace(Tt, "]").replace($t, "%23").replace(Ht, "%3F").replace(Et, "%2F") + t8.search + t8.hash;
  var a13;
}
function injectHead$1() {
  if (hasInjectionContext()) {
    const e8 = inject("usehead");
    if (e8) return e8;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead$1(e8, t8 = {}) {
  const a13 = t8.head || injectHead$1();
  return a13.ssr ? a13.push(e8 || {}, t8) : (function(e9, t9, a14 = {}) {
    const n8 = getCurrentScope();
    if (n8 && !n8.active) return { patch() {
    }, dispose() {
    }, _i: -1 };
    const r3 = ref(false);
    if (a14.onRendered && n8) {
      const e10 = a14.onRendered;
      a14 = { ...a14, onRendered: /* @__PURE__ */ __name((t10) => n8.run(() => e10(t10)), "onRendered") };
    }
    let o6;
    watchEffect(() => {
      const n9 = r3.value ? {} : walkResolver(t9, Bt);
      o6 ? o6.patch(n9) : o6 = e9.push(n9, a14);
    }), getCurrentInstance() || n8 && onScopeDispose(() => o6.dispose());
    return o6;
  })(a13, e8, t8);
}
function injectHead(e8) {
  const t8 = e8 || useNuxtApp();
  return t8.ssrContext?.head || t8.runWithContext(() => {
    if (hasInjectionContext()) {
      const e9 = inject("usehead");
      if (!e9) throw Lt.NUXT_E6001();
      return e9;
    }
  });
}
function useHead(e8, t8 = {}) {
  return useHead$1(e8, { head: t8.head || injectHead(t8.nuxt), ...t8 });
}
function getRouteRules(e8) {
  const t8 = "string" == typeof e8 ? e8 : e8.path;
  try {
    return {};
  } catch (e9) {
    return Mt.NUXT_E5003({ path: t8, cause: e9 }), {};
  }
}
function definePayloadReducer(e8, t8) {
  useNuxtApp().ssrContext["~payloadReducers"][e8] = t8;
}
function toArray$1(e8) {
  return Array.isArray(e8) ? e8 : [e8];
}
function generateRouteKey(e8) {
  const t8 = e8?.meta.key ?? e8.path.replace(Ut2, "$1").replace(Vt, "$1").replace(Gt, (t9) => e8.params[t9.slice(1)]?.toString() || "");
  return "function" == typeof t8 ? t8(e8) : t8;
}
function isChangingPage(e8, t8) {
  return e8 !== t8 && t8 !== ut && (generateRouteKey(e8) !== generateRouteKey(t8) || !e8.matched.every((e9, a13) => e9.components && e9.components.default === t8.matched[a13]?.components?.default));
}
function toArray(e8) {
  return Array.isArray(e8) ? e8 : [e8];
}
function _getHashElementScrollMarginTop(e8) {
  const t8 = (void 0).getElementById(e8.slice(1));
  return t8 ? (Number.parseFloat(getComputedStyle(t8).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0) : 0;
}
function _calculatePosition(e8, t8, a13, n8) {
  return a13 || (e8.hash ? { el: e8.hash, top: _getHashElementScrollMarginTop(e8.hash), behavior: isChangingPage(e8, t8) ? n8 : "instant" } : { left: 0, top: 0 });
}
function resolveLayoutName(e8, t8) {
  return unref(t8) ?? e8?.meta.layout ?? {}.appLayout ?? "default";
}
function defineNuxtLink(e8) {
  const t8 = e8.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(e9) {
    return "string" == typeof e9 && e9.startsWith("#");
  }
  __name(isHashLinkWithoutHashMode, "isHashLinkWithoutHashMode");
  function resolveTrailingSlashBehavior(t9, a13, n8) {
    const r3 = n8 ?? e8.trailingSlash;
    if (!t9 || "append" !== r3 && "remove" !== r3) return t9;
    if ("string" == typeof t9) return applyTrailingSlashBehavior(t9, r3);
    const o6 = "path" in t9 && void 0 !== t9.path ? t9.path : a13(t9).path;
    return { ...t9, name: void 0, path: applyTrailingSlashBehavior(o6, r3) };
  }
  __name(resolveTrailingSlashBehavior, "resolveTrailingSlashBehavior");
  function useLinkTarget(t9) {
    const a13 = useRouter(), n8 = useRuntimeConfig(), r3 = a13.options?.history?.createHref ?? ((e9) => joinURL(n8.app.baseURL, e9)), o6 = computed(() => !!unref(t9.target) && "_self" !== unref(t9.target)), i9 = computed(() => {
      const e9 = unref(t9.to) || unref(t9.href) || "";
      return "string" == typeof e9 && isAbsoluteHref(e9);
    }), s5 = computed(() => {
      if (unref(t9.external)) return true;
      const e9 = unref(t9.to) || unref(t9.href) || "";
      return "object" != typeof e9 && ("" === e9 || i9.value);
    }), c5 = computed(() => {
      const e9 = unref(t9.to) || unref(t9.href) || "";
      return s5.value ? e9 : resolveTrailingSlashBehavior(e9, a13.resolve, unref(t9.trailingSlash));
    }), l8 = computed(() => {
      const n9 = unref(t9.trailingSlash) ?? e8.trailingSlash;
      if (!c5.value || i9.value || isHashLinkWithoutHashMode(c5.value)) {
        const e9 = c5.value;
        return "string" == typeof e9 ? sanitizeAnchorHref(e9) : e9;
      }
      if (s5.value) {
        const e9 = "object" == typeof c5.value && "path" in c5.value ? resolveRouteObject(c5.value) : c5.value, t10 = "object" == typeof e9 ? a13.resolve(e9).href : e9, r4 = "string" == typeof t10 ? sanitizeAnchorHref(t10) : t10;
        return null === r4 ? null : applyTrailingSlashBehavior(r4, n9);
      }
      return "object" == typeof c5.value ? a13.resolve(c5.value)?.href ?? null : applyTrailingSlashBehavior(isRootedPath(c5.value) ? r3(c5.value) : a13.resolve(c5.value).href, n9);
    });
    return { to: c5, hasTarget: o6, isAbsoluteUrl: i9, isExternal: s5, href: l8, async navigate(e9) {
      null !== l8.value && await navigateTo(l8.value, { replace: unref(t9.replace), external: s5.value || o6.value });
    } };
  }
  __name(useLinkTarget, "useLinkTarget");
  function resolveStaticLink(e9, t9, a13) {
    const n8 = t9.resolve(resolveTrailingSlashBehavior(a13, t9.resolve, e9.trailingSlash)), r3 = t9.currentRoute.value, o6 = (function(e10, t10) {
      const { matched: a14 } = e10, { length: n9 } = a14, r4 = a14[n9 - 1], o7 = t10.matched;
      if (!r4 || !o7.length) return -1;
      const i9 = o7.findIndex(isSameRouteRecord.bind(null, r4));
      if (i9 > -1) return i9;
      const s5 = getOriginalPath(a14[n9 - 2]);
      return n9 > 1 && getOriginalPath(r4) === s5 && o7[o7.length - 1].path !== s5 ? o7.findIndex(isSameRouteRecord.bind(null, a14[n9 - 2])) : i9;
    })(n8, r3);
    return { route: n8, href: sanitizeAnchorHref(n8.href), isActive: o6 > -1 && includesParams(r3.params, n8.params), isExactActive: o6 > -1 && o6 === r3.matched.length - 1 && isSameRouteLocationParams(r3.params, n8.params), navigate: /* @__PURE__ */ __name(async () => {
      await navigateTo(n8.href, { replace: e9.replace });
    }, "navigate") };
  }
  __name(resolveStaticLink, "resolveStaticLink");
  return defineComponent({ name: t8, props: { to: { type: [String, Object], required: false }, href: { type: [String, Object], required: false }, target: { type: String, required: false }, rel: { type: String, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, prefetchedClass: { type: String, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, required: false } }, useLink: /* @__PURE__ */ __name(function(e9) {
    const t9 = useRouter(), a13 = useLinkTarget(e9), n8 = resolveComponent("RouterLink"), r3 = "string" != typeof n8 ? n8.useLink : void 0, o6 = a13.isExternal.value ? void 0 : r3?.({ ...e9, to: a13.to, viewTransition: unref(e9.viewTransition) });
    return { ...a13, isActive: o6?.isActive ?? computed(() => a13.to.value === t9.currentRoute.value.path), isExactActive: o6?.isExactActive ?? computed(() => a13.to.value === t9.currentRoute.value.path), route: o6?.route ?? computed(() => t9.resolve(a13.to.value)) };
  }, "useLink"), setup(t9, { slots: a13 }) {
    const n8 = useRouter();
    {
      const r4 = t9.to || t9.href || "";
      if (!(t9.external || "string" == typeof r4 && ("" === r4 || isAbsoluteHref(r4)) || isHashLinkWithoutHashMode(r4) || t9.target && "_self" !== t9.target)) return t9.custom ? () => (function(t10, a14, n9, r5) {
        const o7 = resolveStaticLink(t10, n9, r5), i10 = a14.default?.({ ...o7, rel: firstNonUndefined(t10.noRel ? "" : t10.rel, e8.externalRelAttribute, "") || null, target: t10.target || null, isExternal: false, prefetch: /* @__PURE__ */ __name(async () => {
        }, "prefetch"), prefetched: false, shouldPrefetch: /* @__PURE__ */ __name(() => false, "shouldPrefetch") });
        return 1 === i10?.length ? i10[0] : i10;
      })(t9, a13, n8, r4) : () => (function(t10, a14, n9, r5) {
        const o7 = resolveStaticLink(t10, n9, r5), i10 = n9.options;
        return h6("a", { "aria-current": o7.isExactActive ? t10.ariaCurrentValue ?? "page" : null, href: o7.href, class: { [getLinkClass(t10.activeClass || e8.activeClass, i10.linkActiveClass, "router-link-active")]: o7.isActive, [getLinkClass(t10.exactActiveClass || e8.exactActiveClass, i10.linkExactActiveClass, "router-link-exact-active")]: o7.isExactActive }, rel: t10.rel || void 0, "data-internal": void 0 }, a14.default?.(o7));
      })(t9, a13, n8, r4);
    }
    const r3 = resolveComponent("RouterLink"), { to: o6, href: i9, navigate: s5, isExternal: c5, hasTarget: l8, isAbsoluteUrl: u9 } = useLinkTarget(t9), d7 = shallowRef(false);
    function shouldPrefetch(e9) {
      return false;
    }
    __name(shouldPrefetch, "shouldPrefetch");
    async function prefetch(e9 = useNuxtApp()) {
    }
    __name(prefetch, "prefetch");
    return () => {
      const p6 = t9.target || null, h8 = firstNonUndefined(t9.noRel ? "" : t9.rel, e8.externalRelAttribute, u9.value || l8.value ? "noopener noreferrer" : "") || null, getCustomSlotProps = /* @__PURE__ */ __name((e9) => ({ navigate: s5, get route() {
        if (!i9.value) return;
        const e10 = new URL(i9.value, "http://localhost");
        return { path: e10.pathname, fullPath: e10.pathname, get query() {
          return parseQuery(e10.search);
        }, hash: e10.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: i9.value };
      }, rel: h8, target: p6, isExternal: c5.value || l8.value, isActive: false, isExactActive: false, ...e9, href: "string" == typeof e9?.href ? sanitizeAnchorHref(e9.href) : i9.value, prefetch, prefetched: d7.value, shouldPrefetch }), "getCustomSlotProps");
      if (!c5.value && !l8.value && !isHashLinkWithoutHashMode(o6.value)) {
        const n9 = { ref: void 0, to: o6.value, activeClass: t9.activeClass || e8.activeClass, exactActiveClass: t9.exactActiveClass || e8.exactActiveClass, replace: t9.replace, ariaCurrentValue: t9.ariaCurrentValue, custom: t9.custom };
        return t9.custom || (n9.rel = t9.rel || void 0), h6(r3, n9, t9.custom && a13.default ? { default: /* @__PURE__ */ __name((e9) => a13.default(getCustomSlotProps(e9)), "default") } : a13.default);
      }
      return t9.custom ? a13.default ? a13.default(getCustomSlotProps()) : null : h6("a", { ref: void 0, href: i9.value || null, rel: h8, target: p6, onClick: /* @__PURE__ */ __name(async (e9) => {
        if (!c5.value && !l8.value) {
          e9.preventDefault();
          try {
            const e10 = encodeRoutePath(i9.value ?? "");
            return await (t9.replace ? n8.replace(e10) : n8.push(e10));
          } finally {
          }
        }
      }, "onClick") }, a13.default?.());
    };
  } });
}
function isSameRouteRecord(e8, t8) {
  return (e8.aliasOf || e8) === (t8.aliasOf || t8);
}
function getOriginalPath(e8) {
  return e8 ? e8.aliasOf ? e8.aliasOf.path : e8.path : "";
}
function isEquivalentArray(e8, t8) {
  return Array.isArray(t8) ? e8.length === t8.length && e8.every((e9, a13) => e9 === t8[a13]) : 1 === e8.length && e8[0] === t8;
}
function isSameParamValue(e8, t8) {
  return Array.isArray(e8) ? isEquivalentArray(e8, t8) : Array.isArray(t8) ? isEquivalentArray(t8, e8) : (e8 && e8.valueOf()) === (t8 && t8.valueOf());
}
function isSameRouteLocationParams(e8, t8) {
  if (Object.keys(e8).length !== Object.keys(t8).length) return false;
  for (const a13 in e8) if (!isSameParamValue(e8[a13], t8[a13])) return false;
  return true;
}
function includesParams(e8, t8) {
  for (const a13 in t8) {
    const n8 = t8[a13], r3 = e8[a13];
    if ("string" == typeof n8) {
      if (n8 !== r3) return false;
    } else if (!Array.isArray(r3) || r3.length !== n8.length || n8.some((e9, t9) => e9.valueOf() !== r3[t9].valueOf())) return false;
  }
  return true;
}
function getLinkClass(e8, t8, a13) {
  return e8 ?? t8 ?? a13;
}
function applyTrailingSlashBehavior(e8, t8) {
  if ("append" !== t8 && "remove" !== t8) return e8;
  const a13 = "append" === t8 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e8) && !e8.startsWith("http") ? e8 : a13(e8, true);
}
function markStableSlot(e8) {
  const wrapped = /* @__PURE__ */ __name((t8) => {
    const a13 = e8(t8);
    return Array.isArray(a13) ? a13 : null != a13 && isVNode(a13) ? [a13] : [createCommentVNode()];
  }, "wrapped");
  return wrapped._n = true, wrapped;
}
function normalizeSlot(e8, t8) {
  const a13 = e8(t8);
  return 1 === a13.length ? h6(a13[0]) : h6(So, void 0, a13);
}
function mkApplicant(e8, t8, a13, n8, r3, o6, i9, s5, c5 = {}) {
  return { id: e8, name: t8, email: `${e8}@example.com`, mobile: `+63 917 555 01${s5}`, city: a13, headline: n8, summary: c5.summary || `${n8} based in ${a13}.`, yearsExperience: r3, expectedSalary: o6, availability: "2 weeks notice", workSetup: "On-site or hybrid", skills: i9, experience: { title: n8, employer: "Previous employer", start: "2020", end: "Present", description: `Hands-on ${n8.toLowerCase()} work.` }, education: { school: `${a13} State University`, degree: "Bachelor's degree", year: "2018" }, portfolioUrl: `https://portfolio.example/${e8}`, linkedInUrl: `https://linkedin.example/in/${e8}`, photoOnFile: false, cvFiles: [{ name: `${t8.replace(/\s/g, "_")}_CV.pdf`, isDefault: true }], digestEmail: true, recordingConsent: c5.recordingConsent, ...c5 };
}
function createSeed() {
  return { orgs: [{ id: "northwind", name: "Northwind BPO", city: "Manila", balance: 4, threshold: 2, ownerUserId: "carla-reyes" }, { id: "lumen", name: "Lumen Health Clinics", city: "Cebu City", balance: 0, threshold: 2, ownerUserId: "sofia-lim" }, { id: "harbor", name: "Harbor Logistics", city: "Batangas", balance: 0, threshold: 2, ownerUserId: "patrick-go" }], users: [{ id: "hana-cruz", name: "Hana Cruz", orgId: "agency", role: "HR operator", canSpend: false }, { id: "ramon-villanueva", name: "Ramon Villanueva", orgId: "agency", role: "Super admin", canSpend: false }, { id: "carla-reyes", name: "Carla Reyes", orgId: "northwind", role: "Client owner", canSpend: true }, { id: "dennis-aquino", name: "Dennis Aquino", orgId: "northwind", role: "Client member", canSpend: false }, { id: "sofia-lim", name: "Sofia Lim", orgId: "lumen", role: "Client owner", canSpend: true }, { id: "patrick-go", name: "Patrick Go", orgId: "harbor", role: "Client owner", canSpend: true }], jobs: [{ id: "job-csr", slug: "customer-support-representative", title: "Customer Support Representative", orgId: "northwind", status: "Published", confidential: false, location: "Manila", workSetup: "On-site", employmentType: "Full-time", salaryMin: 25e3, salaryMax: 32e3, salaryDisclosed: true, openings: 2, publishedAt: "2026-10-01", category: "Customer Support", description: "Voice and chat support for a consumer account, day shift.", requirements: ["2+ years in BPO voice or chat", "Clear English communication", "Comfortable with CRM tools"], benefits: "HMO, night differential where applicable, performance bonus", autoCloseDays: 30 }, { id: "job-nurse", slug: "clinic-nurse", title: "Clinic Nurse", orgId: "lumen", status: "Published", confidential: true, location: "Cebu City", workSetup: "On-site", employmentType: "Full-time", salaryMin: 28e3, salaryMax: 35e3, salaryDisclosed: true, openings: 1, publishedAt: "2026-10-10", category: "Healthcare", description: "Outpatient clinic nursing, day shift.", requirements: ["Valid nursing license", "Outpatient clinic experience", "BLS certification"], benefits: "HMO, clinic allowance, continuing education", autoCloseDays: 30 }, { id: "job-analyst", slug: "data-analyst", title: "Data Analyst", orgId: "northwind", status: "Published", confidential: false, location: "Makati", workSetup: "Hybrid", employmentType: "Full-time", salaryMin: 4e4, salaryMax: 55e3, salaryDisclosed: true, openings: 1, publishedAt: "2026-10-18", category: "Data", description: "Reporting and dashboards for operations data.", requirements: ["SQL and Excel proficiency", "Dashboard experience", "Operations reporting background"], benefits: "HMO, hybrid allowance, learning budget", autoCloseDays: 30 }, { id: "job-warehouse", slug: "warehouse-supervisor", title: "Warehouse Supervisor", orgId: "harbor", status: "Paused", confidential: false, location: "Batangas", workSetup: "On-site", employmentType: "Full-time", salaryDisclosed: false, openings: 1, publishedAt: "2026-10-05", category: "Warehouse", description: "Supervise daily warehouse operations and inbound/outbound teams.", requirements: ["Warehouse leadership experience", "Inventory systems knowledge", "Safety compliance"], benefits: "HMO, transport allowance", autoCloseDays: 30 }, { id: "job-accountant", slug: "junior-accountant", title: "Junior Accountant", orgId: "northwind", status: "Closed", confidential: false, location: "Makati", workSetup: "Hybrid", employmentType: "Full-time", salaryMin: 3e4, salaryMax: 38e3, salaryDisclosed: true, openings: 1, publishedAt: "2026-09-01", category: "Finance", description: "Support AP/AR and month-end close tasks.", requirements: ["Accounting degree", "Excel reconciliation", "Attention to detail"], benefits: "HMO, hybrid setup", closeReason: "filled", autoCloseDays: 30 }, { id: "job-qa", slug: "qa-analyst", title: "QA Analyst", orgId: "northwind", status: "Approved", confidential: false, location: "Taguig", workSetup: "Hybrid", employmentType: "Full-time", salaryMin: 35e3, salaryMax: 45e3, salaryDisclosed: true, openings: 1, category: "Quality", description: "Quality audits for voice and chat programs.", requirements: ["QA in BPO", "Scorecard calibration", "Coaching feedback"], benefits: "HMO, performance bonus", autoCloseDays: 30 }], requests: [{ id: "req-it", title: "IT Support Specialist", orgId: "lumen", status: "Changes requested", submittedAt: "2026-10-22", summary: "Staff IT support for clinic sites. Day shift.", fields: { department: "IT", openings: 1, location: "Cebu City", workSetup: "On-site", employmentType: "Full-time" }, comments: [{ id: "c1", authorName: "Hana Cruz", createdAt: "2026-10-24", body: "Please add the on-call rotation and whether the role is day shift only." }, { id: "c2", authorName: "Sofia Lim", createdAt: "2026-10-26", body: "Day shift only. On-call one weekend a month." }] }, { id: "req-sales", title: "Sales Associate", orgId: "harbor", status: "Submitted", submittedAt: "2026-10-23", summary: "New-business sales for freight accounts.", fields: { department: "Sales", openings: 2, location: "Batangas", workSetup: "On-site", employmentType: "Full-time" }, comments: [] }, { id: "req-ops", title: "Operations Assistant", orgId: "harbor", status: "Draft", summary: "Coordinate daily warehouse paperwork. Location blank.", fields: { department: "Operations", openings: 1, location: "", workSetup: "On-site", employmentType: "Full-time" }, comments: [] }], applicants: [mkApplicant("ana-reyes", "Ana Reyes", "Quezon City", "Support specialist", 4, "\u20B128,000", ["Customer support", "Chat", "English"], "01"), mkApplicant("ben-cruz", "Ben Cruz", "Pasig", "Voice support agent", 3, "\u20B126,000", ["Customer support", "Voice", "CRM"], "02"), mkApplicant("cara-santos", "Cara Santos", "Manila", "Technical support agent", 5, "\u20B130,000", ["Technical support", "Troubleshooting", "English"], "03"), mkApplicant("diego-lim", "Diego Lim", "Cebu City", "Billing support agent", 4, "\u20B140,000", ["Customer support", "Billing", "Escalations"], "04"), mkApplicant("elena-vargas", "Elena Vargas", "Mandaluyong", "Support team lead", 6, "\u20B132,000", ["Customer support", "Zendesk", "Escalations"], "05", { summary: "Support lead with six years on voice and chat, comfortable coaching new hires." }), mkApplicant("felix-navarro", "Felix Navarro", "Makati", "Support coach", 5, "\u20B134,000", ["Customer support", "QA", "Coaching"], "06"), mkApplicant("omar-santos", "Omar Santos", "Taguig", "Night-shift support agent", 4, "\u20B130,000", ["Customer support", "Night shift", "Voice"], "07"), mkApplicant("grace-uy", "Grace Uy", "Pasay", "Senior support specialist", 7, "\u20B136,000", ["Customer support", "Coaching", "QA"], "08", { summary: "Senior agent who has run shift handovers and QA calibration.", recordingConsent: true }), mkApplicant("lea-ong", "Lea Ong", "Quezon City", "Support specialist", 5, "\u20B145,000", ["Customer support", "Voice", "Escalations"], "09"), mkApplicant("iris-mendoza", "Iris Mendoza", "Manila", "Support team lead", 8, "\u20B138,000", ["Customer support", "Leadership", "Voice"], "10"), mkApplicant("paolo-diaz", "Paolo Diaz", "Makati", "Junior accountant", 3, "\u20B132,000", ["Accounting", "Excel", "Reconciliation"], "11"), mkApplicant("hugo-tan", "Hugo Tan", "Antipolo", "Support agent", 2, "\u20B124,000", ["Customer support", "Chat", "English"], "12"), mkApplicant("jake-ramos", "Jake Ramos", "Cavite", "Career shifter", 1, "\u20B122,000", ["Retail", "English", "Typing"], "13"), mkApplicant("kim-bautista", "Kim Bautista", "Manila", "Support agent", 3, "\u20B127,000", ["Customer support", "Chat", "CRM"], "14"), mkApplicant("maya-flores", "Maya Flores", "Cebu City", "Staff nurse", 6, "\u20B130,000", ["Nursing", "Patient care", "BLS"], "15", { summary: "Staff nurse in outpatient clinics, day shift.", recordingConsent: false }), mkApplicant("nico-garcia", "Nico Garcia", "Mandaue", "Clinic nurse", 4, "\u20B128,000", ["Nursing", "Triage", "BLS"], "16"), mkApplicant("ria-castro", "Ria Castro", "Makati", "Junior analyst", 2, "\u20B142,000", ["Excel", "SQL", "Reporting"], "17")], applications: [{ id: "app-ana-csr", applicantId: "ana-reyes", jobId: "job-csr", status: "Submitted", updatedAt: "2026-10-20" }, { id: "app-ana-warehouse", applicantId: "ana-reyes", jobId: "job-warehouse", status: "Screening", updatedAt: "2026-10-21" }, { id: "app-ben-csr", applicantId: "ben-cruz", jobId: "job-csr", status: "Screening", updatedAt: "2026-10-15" }, { id: "app-cara-csr", applicantId: "cara-santos", jobId: "job-csr", status: "HR interview scheduled", updatedAt: "2026-10-27" }, { id: "app-diego-csr", applicantId: "diego-lim", jobId: "job-csr", status: "HR interviewed", updatedAt: "2026-10-21" }, { id: "app-elena-csr", applicantId: "elena-vargas", jobId: "job-csr", status: "Recommended", updatedAt: "2026-10-26" }, { id: "app-felix-csr", applicantId: "felix-navarro", jobId: "job-csr", status: "Invited", updatedAt: "2026-10-27" }, { id: "app-omar-csr", applicantId: "omar-santos", jobId: "job-csr", status: "Accepted invite", updatedAt: "2026-10-20" }, { id: "app-grace-csr", applicantId: "grace-uy", jobId: "job-csr", status: "Client interviewing", updatedAt: "2026-10-29" }, { id: "app-grace-nurse", applicantId: "grace-uy", jobId: "job-nurse", status: "Recommended", updatedAt: "2026-10-25" }, { id: "app-grace-analyst", applicantId: "grace-uy", jobId: "job-analyst", status: "Recommended", updatedAt: "2026-10-24" }, { id: "app-lea-csr", applicantId: "lea-ong", jobId: "job-csr", status: "Client rejected", updatedAt: "2026-10-18" }, { id: "app-iris-csr", applicantId: "iris-mendoza", jobId: "job-csr", status: "Client accepted", updatedAt: "2026-10-12" }, { id: "app-paolo-accountant", applicantId: "paolo-diaz", jobId: "job-accountant", status: "Hired", updatedAt: "2026-10-01", startDate: "2026-10-01" }, { id: "app-hugo-csr", applicantId: "hugo-tan", jobId: "job-csr", status: "Declined invite", updatedAt: "2026-10-15" }, { id: "app-jake-csr", applicantId: "jake-ramos", jobId: "job-csr", status: "Not progressed", updatedAt: "2026-10-10", hrRejectReason: "Insufficient BPO experience." }, { id: "app-kim-csr", applicantId: "kim-bautista", jobId: "job-csr", status: "Withdrawn", updatedAt: "2026-10-12", withdrawnAt: "2026-10-12" }, { id: "app-maya-nurse", applicantId: "maya-flores", jobId: "job-nurse", status: "Recommended", updatedAt: "2026-10-26" }, { id: "app-nico-nurse", applicantId: "nico-garcia", jobId: "job-nurse", status: "Shortlisted", updatedAt: "2026-10-22" }, { id: "app-ria-analyst", applicantId: "ria-castro", jobId: "job-analyst", status: "Submitted", updatedAt: "2026-10-27", coverNote: "I can start in two weeks." }], interviews: [{ id: "int-cara", applicationId: "app-cara-csr", scheduledAt: "2026-10-30T10:00:00+08:00", platform: "Google Meet", link: "https://meet.example/hw-cara", interviewer: "Hana Cruz", status: "Scheduled", recordingConsent: null }, { id: "int-diego", applicationId: "app-diego-csr", scheduledAt: "2026-10-21T14:00:00+08:00", platform: "Google Meet", link: "https://meet.example/hw-diego", interviewer: "Hana Cruz", status: "Completed", recordingLink: "https://meet.example/hw-diego", scorecard: { communication: 3, reliability: 4, roleFit: 3 }, shareableNotes: "Strong billing background. Reach at 09171234567 for scheduling.", internalNotes: "Salary above band.", recordingConsent: true }], clientInterviews: [{ id: "ci-grace", applicationId: "app-grace-csr", scheduledAt: "2026-10-29T14:00:00+08:00", link: "https://zoom.example/hw-grace", status: "Scheduled" }], recommendations: [{ id: "rec-elena-csr", applicationId: "app-elena-csr", alias: "HW-7Q3K", status: "shared", whySummary: "Strong lead for voice programs.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "Clear spoken English, calm with angry callers, wants day shift.", internalNotes: "Unhappy with her current team lead. Do not share." }, { id: "rec-felix-csr", applicationId: "app-felix-csr", alias: "HW-4M2P", status: "shared", whySummary: "Coaching experience on CSR floor.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "QA and coaching background." }, { id: "rec-omar-csr", applicationId: "app-omar-csr", alias: "HW-9K1D", status: "shared", whySummary: "Night-shift voice experience.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "Available for night programs." }, { id: "rec-grace-csr", applicationId: "app-grace-csr", alias: "HW-2L8C", status: "shared", whySummary: "Senior agent with QA calibration.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "Shift handover lead." }, { id: "rec-grace-analyst", applicationId: "app-grace-analyst", alias: "HW-6P0E", status: "shared", whySummary: "Operations reporting strength.", includeNotes: true, includeRecording: false, includeCv: true, shareableNotes: "Excel and coaching skills transfer to analyst work." }, { id: "rec-grace-nurse", applicationId: "app-grace-nurse", alias: "HW-8R4N", status: "shared", whySummary: "Not primary for nurse role but transferable care skills.", includeNotes: true, includeRecording: false, includeCv: true, shareableNotes: "Patient-facing experience." }, { id: "rec-lea-csr", applicationId: "app-lea-csr", alias: "HW-1C5V", status: "shared", whySummary: "Voice escalations.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "Strong communication." }, { id: "rec-iris-csr", applicationId: "app-iris-csr", alias: "HW-3N8B", status: "shared", whySummary: "Team lead for consumer account.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "Leadership on floor." }, { id: "rec-paolo-accountant", applicationId: "app-paolo-accountant", alias: "HW-5W2J", status: "shared", whySummary: "Junior accountant placement.", includeNotes: true, includeRecording: false, includeCv: true, shareableNotes: "Reconciliation experience." }, { id: "rec-hugo-csr", applicationId: "app-hugo-csr", alias: "HW-0H6T", status: "shared", whySummary: "Chat support.", includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: "Chat-first profile." }, { id: "rec-maya-nurse", applicationId: "app-maya-nurse", alias: "HW-5T7W", status: "shared", whySummary: "Outpatient nurse.", includeNotes: true, includeRecording: false, includeCv: true, shareableNotes: "Day shift clinic nurse." }], invites: [{ id: "inv-paolo-accountant", applicationId: "app-paolo-accountant", recommendationId: "rec-paolo-accountant", orgId: "northwind", status: "Accepted", sentAt: "2026-09-20", expiresAt: "2026-09-27", price: 1, message: "Interview for junior accountant.", proposedTimes: [], ledgerChargeId: "led-nw-2", refunded: false }, { id: "inv-iris-csr", applicationId: "app-iris-csr", recommendationId: "rec-iris-csr", orgId: "northwind", status: "Accepted", sentAt: "2026-10-08", expiresAt: "2026-10-15", price: 1, message: "Team lead interview.", proposedTimes: [], ledgerChargeId: "led-nw-3", refunded: false }, { id: "inv-lea-csr", applicationId: "app-lea-csr", recommendationId: "rec-lea-csr", orgId: "northwind", status: "Accepted", sentAt: "2026-10-10", expiresAt: "2026-10-17", price: 1, message: "Voice interview.", proposedTimes: [], ledgerChargeId: "led-nw-4", refunded: false }, { id: "inv-hugo-csr", applicationId: "app-hugo-csr", recommendationId: "rec-hugo-csr", orgId: "northwind", status: "Declined", sentAt: "2026-10-14", expiresAt: "2026-10-21", price: 1, message: "Chat interview.", proposedTimes: [], declineReason: "Accepted another offer", ledgerChargeId: "led-nw-5", refunded: true }, { id: "inv-grace-csr", applicationId: "app-grace-csr", recommendationId: "rec-grace-csr", orgId: "northwind", status: "Accepted", sentAt: "2026-10-16T08:40:00+08:00", expiresAt: "2026-10-23", price: 1, message: "Senior CSR interview.", proposedTimes: [], ledgerChargeId: "led-nw-7", refunded: false }, { id: "inv-omar-csr", applicationId: "app-omar-csr", recommendationId: "rec-omar-csr", orgId: "northwind", status: "Accepted", sentAt: "2026-10-20T08:00:00+08:00", expiresAt: "2026-10-27", price: 1, message: "Night shift discussion.", proposedTimes: [], ledgerChargeId: "led-nw-8", refunded: false }, { id: "inv-felix-csr", applicationId: "app-felix-csr", recommendationId: "rec-felix-csr", orgId: "northwind", status: "Sent", sentAt: "2026-10-27", expiresAt: "2026-11-03", price: 1, message: "We'd like to meet you next week.", proposedTimes: ["2 Nov 2026, 10:00", "3 Nov 2026, 15:00"], ledgerChargeId: "led-nw-9", refunded: false }], revealGrants: [{ id: "rg-grace", applicantId: "grace-uy", orgId: "northwind", grantedAt: "2026-10-16T11:02:00+08:00", inviteId: "inv-grace-csr" }, { id: "rg-omar", applicantId: "omar-santos", orgId: "northwind", grantedAt: "2026-10-20T09:14:00+08:00", inviteId: "inv-omar-csr" }, { id: "rg-lea", applicantId: "lea-ong", orgId: "northwind", grantedAt: "2026-10-11T15:40:00+08:00", inviteId: "inv-lea-csr" }, { id: "rg-iris", applicantId: "iris-mendoza", orgId: "northwind", grantedAt: "2026-10-09T10:05:00+08:00", inviteId: "inv-iris-csr" }, { id: "rg-paolo", applicantId: "paolo-diaz", orgId: "northwind", grantedAt: "2026-09-20T13:30:00+08:00", inviteId: "inv-paolo-accountant" }], clientOutcomes: [{ applicationId: "app-lea-csr", result: "Rejected", ratings: { fit: 2, skills: 3, communication: 4 }, comment: "Strong communication, salary expectation is above the band.", reasonCode: "Salary mismatch" }, { applicationId: "app-iris-csr", result: "Accepted", ratings: { fit: 5, skills: 4, communication: 5 }, comment: "We want to proceed to an offer." }], ledger: [{ id: "led-nw-1", orgId: "northwind", when: "2026-09-15", type: "purchase", amount: 10, balanceAfter: 10, note: "INV-1042, actor Ramon Villanueva" }, { id: "led-nw-2", orgId: "northwind", when: "2026-09-20", type: "invite_charge", amount: -1, balanceAfter: 9, note: "Paolo Diaz" }, { id: "led-nw-3", orgId: "northwind", when: "2026-10-08", type: "invite_charge", amount: -1, balanceAfter: 8, note: "Iris Mendoza" }, { id: "led-nw-4", orgId: "northwind", when: "2026-10-10", type: "invite_charge", amount: -1, balanceAfter: 7, note: "Lea Ong" }, { id: "led-nw-5", orgId: "northwind", when: "2026-10-14", type: "invite_charge", amount: -1, balanceAfter: 6, note: "Hugo Tan" }, { id: "led-nw-6", orgId: "northwind", when: "2026-10-15", type: "invite_refund", amount: 1, balanceAfter: 7, note: "Hugo Tan declined", refundOf: "led-nw-5" }, { id: "led-nw-7", orgId: "northwind", when: "2026-10-16", type: "invite_charge", amount: -1, balanceAfter: 6, note: "Grace Uy" }, { id: "led-nw-8", orgId: "northwind", when: "2026-10-20", type: "invite_charge", amount: -1, balanceAfter: 5, note: "Omar Santos" }, { id: "led-nw-9", orgId: "northwind", when: "2026-10-27", type: "invite_charge", amount: -1, balanceAfter: 4, note: "Felix Navarro" }, { id: "led-lu-1", orgId: "lumen", when: "2026-10-06", type: "purchase", amount: 3, balanceAfter: 3, note: "INV-1101" }, { id: "led-lu-2", orgId: "lumen", when: "2026-10-07", type: "purchase_reversal", amount: -3, balanceAfter: 0, note: "Bank transfer failed", refundOf: "led-lu-1" }], packageRequests: [{ id: "prq-lumen-1", orgId: "lumen", credits: 5, pricePhp: 15e3, requestedAt: "2026-10-25", status: "open" }], notifications: [{ id: "n-felix", userId: "felix-navarro", title: "Interview invitation", body: "Interview invitation from Northwind BPO", read: false, createdAt: "2026-10-27" }, { id: "n-carla", userId: "carla-reyes", title: "New candidate", body: "New candidate on Customer Support Representative", read: false, createdAt: "2026-10-27" }, { id: "n-sofia", userId: "sofia-lim", title: "Credit balance", body: "Credit balance is empty", read: false, createdAt: "2026-10-26" }, { id: "n-hana", userId: "hana-cruz", title: "SLA", body: "Sales Associate request is past SLA", read: false, createdAt: "2026-10-28" }], dataSubjectRequests: [], jobComments: { "job-csr": [{ id: "jc1", authorName: "Carla Reyes", createdAt: "2026-10-27", body: "Can she work nights?" }, { id: "jc2", authorName: "Hana Cruz", createdAt: "2026-10-27", body: "She prefers days. I can ask." }] } };
}
function bound(e8) {
  return "number" == typeof e8 && e8 > 1e4 && tryUseNuxtApp()?.ssrContext?.islandContext ? (function(e9) {
    return "number" != typeof e9 || e9 <= 1e4 ? e9 : 1e4;
  })(e8) : e8;
}
function ssrRenderList$2(e8, t8) {
  ssrRenderList(bound(e8), t8);
}
var ge, ve, ye, be, we2, Re, Ae, Se, Ce, xe, Ie, _plugin_vue_export_helper_default, je, ke, setActivePinia, Pe, _e, noop$1, fallbackRunWithContext, Oe, Ne, Te, Ee, $e, He, Le, isAbsolutePath, Be, noop, Me, qe, De, We, Fe, ze, Ue, Ve, Ge, Qe, Ke, Je, Xe, Ye, Ze, et, tt, at, nt, rt, ot, it, st, ct, lt, ut, dt, pt, ht, ft, mt, gt, vt, yt, bt, getLinkClass$1, wt, Rt, At, St, Ct, __exportAll, isNuxtError, createError$2, xt, It, jt, kt, useRouter, useRoute$1, Pt, _t, Ot, Nt, Tt, Et, $t, Ht, useError, showError, _showErrorUnlessCrawler, Lt, Bt, Mt, qt, Dt, Wt, Ft, zt, generateRouteKey$1, Ut2, Vt, Gt, Qt, Kt, Jt, Xt, Yt, Zt, ea, ta, aa, firstNonUndefined, na, ra, oa, ia, sa, ca, la, ua, useToast, da, pa, ha, fa, usePinia, ma, ga, renderList$2, va, ya, ba, wa, Ra, Aa, Sa, Ca, IslandRenderer, xa, Ia, entry$1, ja;
var init_entry = __esm({
  "server/chunks/virtual/entry.mjs"() {
    init_renderer();
    init_nitro();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    ge = globalThis.WeakRef || class {
      #e;
      constructor(e8) {
        this.#e = e8;
      }
      deref() {
        return this.#e;
      }
    };
    __name(createContext, "createContext");
    ve = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ln ? ln : {};
    ye = "__unctx__";
    be = ve[ye] || (ve[ye] = /* @__PURE__ */ (function(e8 = {}) {
      const t8 = {};
      return { get: /* @__PURE__ */ __name((a13, n8 = {}) => (t8[a13] || (t8[a13] = createContext({ ...e8, ...n8 })), t8[a13]), "get") };
    })());
    we2 = "__unctx_async_handlers__";
    Re = ve[we2] || (ve[we2] = /* @__PURE__ */ new Set());
    __name(executeAsync, "executeAsync");
    __name(docsBase, "docsBase");
    Ae = [(e8) => {
      console.error(`[${e8.name}]`);
    }];
    Se = defineProdDiagnostics({ docsBase, reporters: Ae });
    __name(getContext$2, "getContext$2");
    globalThis.__nuxt_app_ctx__ ||= {};
    Ce = { componentName: "NuxtLink" };
    __name(getNuxtAppCtx, "getNuxtAppCtx");
    xe = "__nuxt_plugin";
    __name(registerPluginHooks, "registerPluginHooks");
    __name(applyPlugin, "applyPlugin");
    __name(defineNuxtPlugin, "defineNuxtPlugin");
    Ie = defineNuxtPlugin;
    __name(callWithNuxt, "callWithNuxt");
    __name(tryUseNuxtApp, "tryUseNuxtApp");
    __name(useNuxtApp, "useNuxtApp");
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(defineGetter, "defineGetter");
    _plugin_vue_export_helper_default = /* @__PURE__ */ __name((e8, t8) => {
      const a13 = e8.__vccOpts || e8;
      for (const [e9, n8] of t8) a13[e9] = n8;
      return a13;
    }, "_plugin_vue_export_helper_default");
    je = defineProdDiagnostics({ docsBase, reporters: Ae });
    __name(useState, "useState");
    setActivePinia = /* @__PURE__ */ __name((e8) => ke = e8, "setActivePinia");
    Pe = /* @__PURE__ */ Symbol();
    __name(isPlainObject, "isPlainObject");
    _e = (function(e8) {
      return e8.direct = "direct", e8.patchObject = "patch object", e8.patchFunction = "patch function", e8;
    })({});
    __name(createPinia, "createPinia");
    noop$1 = /* @__PURE__ */ __name(() => {
    }, "noop$1");
    __name(addSubscription, "addSubscription");
    __name(triggerSubscriptions, "triggerSubscriptions");
    fallbackRunWithContext = /* @__PURE__ */ __name((e8) => e8(), "fallbackRunWithContext");
    Oe = /* @__PURE__ */ Symbol();
    Ne = /* @__PURE__ */ Symbol();
    __name(mergeReactiveObjects, "mergeReactiveObjects");
    Te = /* @__PURE__ */ Symbol();
    __name(shouldHydrate, "shouldHydrate");
    ({ assign: Ee } = Object);
    __name(isComputed, "isComputed");
    __name(createSetupStore, "createSetupStore");
    $e = "Store";
    __name(mapState, "mapState");
    He = mapState;
    Le = Object.freeze(Object.defineProperty({ __proto__: null, MutationType: _e, acceptHMRUpdate: /* @__PURE__ */ __name(function(e8, t8) {
      return () => {
      };
    }, "acceptHMRUpdate"), createPinia, defineStore: /* @__PURE__ */ __name(function(e8, t8, a13) {
      let n8;
      const r3 = "function" == typeof t8;
      function useStore(a14, o6) {
        const i9 = hasInjectionContext();
        (a14 = a14 || (i9 ? inject(Pe, null) : null)) && setActivePinia(a14), (a14 = ke)._s.has(e8) || (r3 ? createSetupStore(e8, t8, n8, a14) : (function(e9, t9, a15) {
          const { state: n9, actions: r4, getters: o7 } = t9, i10 = a15.state.value[e9];
          let s5;
          s5 = createSetupStore(e9, function() {
            i10 || (a15.state.value[e9] = n9 ? n9() : {});
            const t10 = toRefs(a15.state.value[e9]);
            return Ee(t10, r4, Object.keys(o7 || {}).reduce((t11, n10) => (t11[n10] = markRaw(computed(() => {
              setActivePinia(a15);
              const t12 = a15._s.get(e9);
              return o7[n10].call(t12, t12);
            })), t11), {}));
          }, t9, a15, 0, true);
        })(e8, n8, a14));
        return a14._s.get(e8);
      }
      __name(useStore, "useStore");
      return n8 = r3 ? a13 : t8, useStore.$id = e8, useStore;
    }, "defineStore"), disposePinia: /* @__PURE__ */ __name(function(e8) {
      e8._e.stop(), e8._s.clear(), e8._p.splice(0), e8.state.value = {}, e8._a = null;
    }, "disposePinia"), getActivePinia: /* @__PURE__ */ __name(() => hasInjectionContext() && inject(Pe) || ke, "getActivePinia"), getStores: /* @__PURE__ */ __name(function(e8) {
      return Array.from(e8._s.values());
    }, "getStores"), mapActions: /* @__PURE__ */ __name(function(e8, t8) {
      return Array.isArray(t8) ? t8.reduce((t9, a13) => (t9[a13] = function(...t10) {
        return e8(this.$pinia)[a13](...t10);
      }, t9), {}) : Object.keys(t8).reduce((a13, n8) => (a13[n8] = function(...a14) {
        return e8(this.$pinia)[t8[n8]](...a14);
      }, a13), {});
    }, "mapActions"), mapGetters: He, mapState, mapStores: /* @__PURE__ */ __name(function(...e8) {
      return e8.reduce((e9, t8) => (e9[t8.$id + $e] = function() {
        return t8(this.$pinia);
      }, e9), {});
    }, "mapStores"), mapWritableState: /* @__PURE__ */ __name(function(e8, t8) {
      return Array.isArray(t8) ? t8.reduce((t9, a13) => (t9[a13] = { get() {
        return e8(this.$pinia)[a13];
      }, set(t10) {
        return e8(this.$pinia)[a13] = t10;
      } }, t9), {}) : Object.keys(t8).reduce((a13, n8) => (a13[n8] = { get() {
        return e8(this.$pinia)[t8[n8]];
      }, set(a14) {
        return e8(this.$pinia)[t8[n8]] = a14;
      } }, a13), {});
    }, "mapWritableState"), piniaSymbol: Pe, setActivePinia, setMapStoreSuffix: /* @__PURE__ */ __name(function(e8) {
      $e = e8;
    }, "setMapStoreSuffix"), shouldHydrate, skipHydrate: /* @__PURE__ */ __name(function(e8) {
      return Object.defineProperty(e8, Te, {});
    }, "skipHydrate"), storeToRefs: /* @__PURE__ */ __name(function(e8) {
      const t8 = toRaw(e8), a13 = {};
      for (const n8 in t8) {
        const r3 = t8[n8];
        r3?.effect ? a13[n8] = computed({ get: /* @__PURE__ */ __name(() => e8[n8], "get"), set(t9) {
          e8[n8] = t9;
        } }) : (isRef(r3) || isReactive(r3)) && (a13[n8] = toRef(e8, n8));
      }
      return a13;
    }, "storeToRefs") }, Symbol.toStringTag, { value: "Module" }));
    isAbsolutePath = /* @__PURE__ */ __name((e8) => e8.startsWith("/"), "isAbsolutePath");
    __name(isRouteComponent, "isRouteComponent");
    Be = Object.assign;
    __name(applyToParams, "applyToParams");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    Me = Array.isArray;
    __name(mergeOptions, "mergeOptions");
    qe = /* @__PURE__ */ Symbol("");
    De = (function(e8) {
      return e8[e8.aborted = 4] = "aborted", e8[e8.cancelled = 8] = "cancelled", e8[e8.duplicated = 16] = "duplicated", e8;
    })({});
    __name(createRouterError, "createRouterError");
    __name(isNavigationFailure, "isNavigationFailure");
    We = /* @__PURE__ */ Symbol("");
    Fe = /* @__PURE__ */ Symbol("");
    ze = /* @__PURE__ */ Symbol("");
    Ue = /* @__PURE__ */ Symbol("");
    Ve = /* @__PURE__ */ Symbol("");
    Ge = /* @__PURE__ */ Symbol("");
    __name(useRoute, "useRoute");
    Qe = "undefined" != typeof document;
    Ke = /#/g;
    Je = /&/g;
    Xe = /\//g;
    Ye = /=/g;
    Ze = /\?/g;
    et = /\+/g;
    tt = /%5B/g;
    at = /%5D/g;
    nt = /%5E/g;
    rt = /%60/g;
    ot = /%7B/g;
    it = /%7C/g;
    st = /%7D/g;
    ct = /%20/g;
    __name(commonEncode, "commonEncode");
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(encodeParam, "encodeParam");
    __name(decode, "decode");
    lt = /\/$/;
    __name(parseURL2, "parseURL");
    __name(isSameRouteRecord$1, "isSameRouteRecord$1");
    __name(isSameRouteLocationParams$1, "isSameRouteLocationParams$1");
    __name(isSameRouteLocationParamsValue, "isSameRouteLocationParamsValue");
    __name(isEquivalentArray$1, "isEquivalentArray$1");
    ut = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
    __name(normalizeBase, "normalizeBase");
    dt = /^[^#]+#/;
    __name(createHref, "createHref");
    __name(scrollToPosition, "scrollToPosition");
    __name(getScrollKey, "getScrollKey");
    pt = /* @__PURE__ */ new Map();
    __name(saveScrollPosition, "saveScrollPosition");
    __name(isRouteName, "isRouteName");
    __name(parseQuery2, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    __name(normalizeQuery, "normalizeQuery");
    __name(useCallbacks, "useCallbacks");
    __name(guardToPromiseFn, "guardToPromiseFn");
    __name(extractComponentsGuards, "extractComponentsGuards");
    __name(createMemoryHistory, "createMemoryHistory");
    ht = { type: 0, value: "" };
    ft = /[a-zA-Z0-9_]/;
    mt = "[^/]+?";
    gt = { sensitive: false, strict: false, start: true, end: true };
    vt = /[.+*?^${}()[\]/\\]/g;
    __name(compareScoreArray, "compareScoreArray");
    __name(comparePathParserScore, "comparePathParserScore");
    __name(isLastScoreNegative, "isLastScoreNegative");
    yt = { strict: false, end: true, sensitive: false };
    __name(createRouteRecordMatcher, "createRouteRecordMatcher");
    __name(createRouterMatcher, "createRouterMatcher");
    __name(pickParams, "pickParams");
    __name(normalizeRouteRecord, "normalizeRouteRecord");
    __name(normalizeRecordProps, "normalizeRecordProps");
    __name(isAliasRecord, "isAliasRecord");
    __name(mergeMetaFields, "mergeMetaFields");
    __name(isMatchable, "isMatchable");
    __name(useLink, "useLink");
    bt = defineComponent({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink, setup(e8, { slots: t8 }) {
      const a13 = reactive(useLink(e8)), { options: n8 } = inject(ze), r3 = computed(() => ({ [getLinkClass$1(e8.activeClass, n8.linkActiveClass, "router-link-active")]: a13.isActive, [getLinkClass$1(e8.exactActiveClass, n8.linkExactActiveClass, "router-link-exact-active")]: a13.isExactActive }));
      return () => {
        const n9 = t8.default && (1 === (o6 = t8.default(a13)).length ? o6[0] : o6);
        var o6;
        return e8.custom ? n9 : h6("a", { "aria-current": a13.isExactActive ? e8.ariaCurrentValue : null, href: a13.href, onClick: a13.navigate, class: r3.value }, n9);
      };
    } });
    __name(getOriginalPath$1, "getOriginalPath$1");
    getLinkClass$1 = /* @__PURE__ */ __name((e8, t8, a13) => null != e8 ? e8 : null != t8 ? t8 : a13, "getLinkClass$1");
    __name(normalizeSlot$1, "normalizeSlot$1");
    wt = defineComponent({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e8, { attrs: t8, slots: a13 }) {
      const n8 = inject(Ve), r3 = computed(() => e8.route || n8.value), o6 = inject(Fe, 0), i9 = computed(() => {
        let e9 = unref(o6);
        const { matched: t9 } = r3.value;
        let a14;
        for (; (a14 = t9[e9]) && !a14.components; ) e9++;
        return e9;
      }), s5 = computed(() => r3.value.matched[i9.value]);
      provide(Fe, computed(() => i9.value + 1)), provide(We, s5), provide(Ve, r3);
      const c5 = /* @__PURE__ */ new Set();
      provide(Ge, c5);
      const l8 = ref();
      let u9 = ut;
      const { app: d7 } = getCurrentInstance().appContext;
      return watch(() => [l8.value, s5.value, e8.name], ([e9, t9, a14], [n9, r4, o7]) => {
        t9 && (t9.instances[a14] = e9, r4 && r4 !== t9 && e9 && e9 === n9 && (t9.leaveGuards.size || (t9.leaveGuards = r4.leaveGuards), t9.updateGuards.size || (t9.updateGuards = r4.updateGuards))), !e9 || !t9 || r4 && isSameRouteRecord$1(t9, r4) && n9 || (t9.enterCallbacks[a14] || []).forEach((t10) => t10(e9));
      }, { flush: "post" }), () => {
        const n9 = r3.value, o7 = e8.name, i10 = s5.value, p6 = i10 && i10.components[o7];
        if (!p6) return normalizeSlot$1(a13.default, { Component: p6, route: n9 });
        const h8 = i10.props[o7], f6 = h8 ? true === h8 ? n9.params : "function" == typeof h8 ? h8(n9) : h8 : null, onVnodeSettled = /* @__PURE__ */ __name((e9) => nextTick(() => {
          if (u9 === n9 || r3.value !== n9 || e9.el.getRootNode() !== d7._container.getRootNode()) return;
          const t9 = u9;
          u9 = n9;
          for (const e10 of c5) e10(n9, t9);
        }), "onVnodeSettled"), m8 = h6(p6, Be({}, f6, t8, { onVnodeUnmounted: /* @__PURE__ */ __name((e9) => {
          e9.component.isUnmounted && (i10.instances[o7] = null);
        }, "onVnodeUnmounted"), onVnodeMounted: onVnodeSettled, onVnodeUpdated: onVnodeSettled, ref: l8 }));
        return normalizeSlot$1(a13.default, { Component: m8, route: n9 }) || m8;
      };
    } });
    __name(createRouter, "createRouter");
    Rt = Object.defineProperty;
    At = Object.getOwnPropertyDescriptor;
    St = Object.getOwnPropertyNames;
    Ct = Object.prototype.hasOwnProperty;
    __exportAll = /* @__PURE__ */ __name((e8, t8) => {
      let a13 = {};
      for (var n8 in e8) Rt(a13, n8, { get: e8[n8], enumerable: true });
      return Rt(a13, Symbol.toStringTag, { value: "Module" }), a13;
    }, "__exportAll");
    isNuxtError = /* @__PURE__ */ __name((e8) => !!e8 && "object" == typeof e8 && "__nuxt_error" in e8, "isNuxtError");
    createError$2 = /* @__PURE__ */ __name((e8) => {
      if (isNuxtError(e8)) return e8;
      "string" != typeof e8 && e8?.statusText && (e8.message ??= e8.statusText);
      const t8 = createError(e8 ?? {});
      return Object.defineProperty(t8, "__nuxt_error", { value: true, configurable: false, writable: false }), Object.defineProperty(t8, "status", { get: /* @__PURE__ */ __name(() => t8.statusCode, "get"), configurable: true }), Object.defineProperty(t8, "statusText", { get: /* @__PURE__ */ __name(() => t8.statusMessage, "get"), configurable: true }), t8;
    }, "createError$2");
    __name(parseAnchorURL, "parseAnchorURL");
    __name(resolvesWithoutBase, "resolvesWithoutBase");
    __name(isRootedPath, "isRootedPath");
    __name(isAbsoluteHref, "isAbsoluteHref");
    __name(getScriptProtocol, "getScriptProtocol");
    __name(sanitizeAnchorHref, "sanitizeAnchorHref");
    xt = /* @__PURE__ */ Symbol("layout-meta");
    It = /* @__PURE__ */ Symbol("layout");
    jt = /* @__PURE__ */ Symbol("route");
    kt = defineProdDiagnostics({ docsBase, reporters: Ae });
    useRouter = /* @__PURE__ */ __name(() => useNuxtApp()?.$router, "useRouter");
    __name(getParentScope, "getParentScope");
    useRoute$1 = /* @__PURE__ */ __name(() => {
      if (hasInjectionContext()) {
        const e8 = getCurrentInstance();
        if (!e8 || (function(e9) {
          const t8 = e9.scope;
          let a13 = getCurrentScope();
          for (; a13; ) {
            if (a13 === t8) return true;
            a13 = getParentScope(a13);
          }
          return false;
        })(e8)) return inject(jt, useNuxtApp()._route);
      }
      return useNuxtApp()._route;
    }, "useRoute$1");
    __name(defineNuxtRouteMiddleware, "defineNuxtRouteMiddleware");
    Pt = /[&"'<>]/g;
    _t = { "&": "&amp;", '"': "&quot;", "'": "&#x27;", "<": "&lt;", ">": "&gt;" };
    __name(navigateTo, "navigateTo");
    __name(resolveRouteObject, "resolveRouteObject");
    __name(encodeRoutePath, "encodeRoutePath");
    Ot = /%7C/g;
    Nt = /%5B/g;
    Tt = /%5D/g;
    Et = /%252F/gi;
    $t = /#/g;
    Ht = /\?/g;
    useError = /* @__PURE__ */ __name(() => toRef(useNuxtApp().payload, "error"), "useError");
    showError = /* @__PURE__ */ __name((e8) => {
      const t8 = createError$2(e8);
      try {
        const e9 = useError();
        e9.value ||= t8;
      } catch {
        throw t8;
      }
      return t8;
    }, "showError");
    _showErrorUnlessCrawler = /* @__PURE__ */ __name(async (e8, t8) => {
      await e8.runWithContext(() => showError(t8));
    }, "_showErrorUnlessCrawler");
    globalThis.$fetch || (globalThis.$fetch = _n.create({ baseURL: baseURL() })), "global" in globalThis || (globalThis.global = globalThis);
    Lt = defineProdDiagnostics({ docsBase, reporters: Ae });
    __name(injectHead$1, "injectHead$1");
    Bt = Object.assign((e8, t8) => isRef(t8) ? toValue(t8) : t8, { _static: true });
    __name(useHead$1, "useHead$1");
    __name(injectHead, "injectHead");
    __name(useHead, "useHead");
    Mt = defineProdDiagnostics({ docsBase, reporters: Ae });
    __name(getRouteRules, "getRouteRules");
    __name(definePayloadReducer, "definePayloadReducer");
    qt = Ie(() => {
      definePayloadReducer("skipHydrate", (e8) => !shouldHydrate(e8) && 1);
    });
    Dt = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e8) {
      const t8 = e8.ssrContext.head;
      if (e8.ssrContext.islandContext) {
        const a13 = (function(e9) {
          const t9 = e9.push;
          return e9.push = () => ({ dispose: /* @__PURE__ */ __name(() => {
          }, "dispose"), patch: /* @__PURE__ */ __name(() => {
          }, "patch"), _i: 0 }), () => {
            e9.push = t9;
          };
        })(t8);
        e8.hooks.hookOnce("app:created", a13);
      }
      e8.vueApp.use(t8);
    } });
    Wt = /(:\w+)\([^)]+\)/g;
    Ft = /(:\w+)[?+*]/g;
    zt = /:\w+/g;
    generateRouteKey$1 = /* @__PURE__ */ __name((e8, t8) => {
      const a13 = e8.route.matched.find((t9) => t9.components?.default === e8.Component.type), n8 = a13?.meta.key ?? (a13 && (r3 = e8.route, a13.path.replace(Wt, "$1").replace(Ft, "$1").replace(zt, (e9) => r3.params[e9.slice(1)]?.toString() || "")));
      var r3;
      return "function" == typeof n8 ? n8(e8.route) : n8;
    }, "generateRouteKey$1");
    __name(toArray$1, "toArray$1");
    Ut2 = /(:\w+)\([^)]+\)/g;
    Vt = /(:\w+)[?+*]/g;
    Gt = /:\w+/g;
    __name(generateRouteKey, "generateRouteKey");
    __name(isChangingPage, "isChangingPage");
    __name(toArray, "toArray");
    __name(_getHashElementScrollMarginTop, "_getHashElementScrollMarginTop");
    __name(_calculatePosition, "_calculatePosition");
    Qt = { hashMode: false, scrollBehaviorType: "auto", sensitive: false, ...{ scrollBehavior(e8, t8, a13) {
      const n8 = useNuxtApp(), r3 = useRouter(), o6 = r3.options?.scrollBehaviorType ?? "auto";
      return e8.path.replace(/\/$/, "") === t8.path.replace(/\/$/, "") ? t8.hash && !e8.hash ? a13 ?? { left: 0, top: 0 } : !!e8.hash && { el: e8.hash, top: _getHashElementScrollMarginTop(e8.hash), behavior: o6 } : false !== ("function" == typeof e8.meta.scrollToTop ? e8.meta.scrollToTop(e8, t8) : e8.meta.scrollToTop) && (t8 === ut ? _calculatePosition(e8, t8, a13, o6) : new Promise((i9) => {
        const doScroll = /* @__PURE__ */ __name(() => {
          requestAnimationFrame(() => {
            r3.currentRoute.value.fullPath === e8.fullPath ? i9(_calculatePosition(e8, t8, a13, o6)) : i9(false);
          });
        }, "doScroll");
        n8.hooks.hookOnce("page:loading:end", () => {
          const e9 = n8["~transitionPromise"];
          e9 ? e9.then(doScroll) : doScroll();
        });
      }));
    } } };
    Object.assign(/* @__PURE__ */ Object.create(null), {});
    Kt = Object.assign(/* @__PURE__ */ Object.create(null), {});
    Jt = [defineNuxtRouteMiddleware(async (e8) => {
      let t8, a13;
      if (!e8.meta?.validate) return;
      const n8 = ([t8, a13] = executeAsync(() => Promise.resolve(e8.meta.validate(e8))), t8 = await t8, a13(), t8);
      return true !== n8 ? createError$2({ fatal: false, status: n8 && (n8.status || n8.statusCode) || 404, statusText: n8 && (n8.statusText || n8.statusMessage) || `Page Not Found: ${e8.fullPath}`, data: { path: e8.fullPath } }) : void 0;
    }), defineNuxtRouteMiddleware((e8) => {
      if (!useNuxtApp().ssrContext?.islandContext) return;
      const t8 = getRouteRules({ path: e8.path });
      if (t8.redirect) {
        const a13 = t8.redirect.includes("#") ? t8.redirect : t8.redirect + e8.hash;
        return navigateTo(a13, { external: isAbsoluteHref(a13) });
      }
    })];
    Xt = {};
    Yt = [{ name: "client-requests-new", path: "/client/requests/new", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_new_DKrkv_I0(), new_DKrkv_I0_exports)), "component") }, { name: "client-jobs-id-candidates-recId", path: "/client/jobs/:id()/candidates/:recId()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_recId_DRamf9Sl(), recId_DRamf9Sl_exports)), "component") }, { name: "hr-jobs-id-applications-id", path: "/hr/jobs/:id()/applications/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_C_CeCOA8(), id_C_CeCOA8_exports)), "component") }, { name: "applicant-applications-id", path: "/applicant/applications/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_DsyUQQPy(), id_DsyUQQPy_exports)), "component") }, { name: "client-jobs-id", path: "/client/jobs/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_V9RHShli(), id_V9RHShli_exports)), "component") }, { name: "client-requests-id", path: "/client/requests/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_C2D8g0e0(), id_C2D8g0e0_exports)), "component") }, { name: "hr-clients-id", path: "/hr/clients/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_CS57XeMT(), id_CS57XeMT_exports)), "component") }, { name: "hr-jobs-id", path: "/hr/jobs/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_DTV0nJIc(), id_DTV0nJIc_exports)), "component") }, { name: "hr-requests-id", path: "/hr/requests/:id()", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_DtF2W_lB(), id_DtF2W_lB_exports)), "component") }, { name: "applicant-profile", path: "/applicant/profile", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_profile_Cj_aNBNR(), profile_Cj_aNBNR_exports)), "component") }, { name: "client-requests", path: "/client/requests", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_requests_DXrIEGLd(), requests_DXrIEGLd_exports)), "component") }, { name: "client-team", path: "/client/team", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_team_BVG358Cw(), team_BVG358Cw_exports)), "component") }, { name: "client-wallet", path: "/client/wallet", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_wallet_qQEjqYVV(), wallet_qQEjqYVV_exports)), "component") }, { name: "hr-clients", path: "/hr/clients", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_clients_BKuaFhO5(), clients_BKuaFhO5_exports)), "component") }, { name: "hr-jobs", path: "/hr/jobs", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_jobs_Coe_SPSP(), jobs_Coe_SPSP_exports)), "component") }, { name: "hr-requests", path: "/hr/requests", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_requests_DFSnfr5f(), requests_DFSnfr5f_exports)), "component") }, { name: "jobs-slug-apply", path: "/jobs/:slug()/apply", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_apply_3NuH28pX(), apply_3NuH28pX_exports)), "component") }, { name: "jobs-slug", path: "/jobs/:slug()", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_slug_C0kmxfoJ(), slug_C0kmxfoJ_exports)), "component") }, { name: "about", path: "/about", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_about_BcCFCQ63(), about_BcCFCQ63_exports)), "component") }, { name: "applicant", path: "/applicant", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_applicant_Om2BrZkG(), applicant_Om2BrZkG_exports)), "component") }, { name: "client", path: "/client", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_client_Bg5r0XLd(), client_Bg5r0XLd_exports)), "component") }, { name: "contact", path: "/contact", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_contact_f0Hlh92S(), contact_f0Hlh92S_exports)), "component") }, { name: "employers", path: "/employers", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_employers_FCMJjUGI(), employers_FCMJjUGI_exports)), "component") }, { name: "hr", path: "/hr", meta: { layout: "portal" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_hr_CMJobIgR(), hr_CMJobIgR_exports)), "component") }, { name: "privacy", path: "/privacy", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_privacy_CdC7_38D(), privacy_CdC7_38D_exports)), "component") }, { name: "terms", path: "/terms", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_terms_D7_8G52c(), terms_D7_8G52c_exports)), "component") }, { name: "index", path: "/", meta: { layout: "public" }, component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_pages_CV72xBFx(), pages_CV72xBFx_exports)), "component") }];
    Zt = defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", async setup(e8) {
      let t8, a13, n8 = useRuntimeConfig().app.baseURL;
      const r3 = Qt.history?.(n8) ?? createMemoryHistory(n8), o6 = Qt.routes ? ([t8, a13] = executeAsync(() => Qt.routes(Yt)), t8 = await t8, a13(), t8 ?? Yt) : Yt;
      let i9;
      const s5 = createRouter({ ...Qt, scrollBehavior: /* @__PURE__ */ __name((e9, t9, a14) => {
        if (t9 !== ut) {
          if (Qt.scrollBehavior) {
            if (s5.options.scrollBehavior = Qt.scrollBehavior, "scrollRestoration" in (void 0).history) {
              const e10 = s5.beforeEach(() => {
                e10(), (void 0).history.scrollRestoration = "manual";
              });
            }
            return Qt.scrollBehavior(e9, ut, i9 || a14);
          }
        } else i9 = a14;
      }, "scrollBehavior"), history: r3, routes: o6 });
      e8.vueApp.use(s5);
      const c5 = shallowRef(s5.currentRoute.value);
      s5.afterEach((e9, t9) => {
        c5.value = t9;
      }), Object.defineProperty(e8.vueApp.config.globalProperties, "previousRoute", { get: /* @__PURE__ */ __name(() => c5.value, "get") });
      const l8 = e8.ssrContext.url, u9 = shallowRef(s5.currentRoute.value), syncCurrentRoute = /* @__PURE__ */ __name(() => {
        u9.value = s5.currentRoute.value;
      }, "syncCurrentRoute");
      s5.afterEach((e9, t9) => {
        const a14 = e9.matched.at(-1)?.components?.default, n9 = t9.matched.at(-1)?.components?.default;
        a14 !== n9 ? e9.matched.length < t9.matched.length && e9.matched.every((e10, a15) => e10.components?.default === t9.matched[a15]?.components?.default) && syncCurrentRoute() : generateRouteKey$1({ route: e9, Component: { type: a14 } }) === generateRouteKey$1({ route: t9, Component: { type: n9 } }) && syncCurrentRoute();
      });
      const p6 = { sync: syncCurrentRoute };
      for (const e9 in u9.value) Object.defineProperty(p6, e9, { get: /* @__PURE__ */ __name(() => u9.value[e9], "get"), enumerable: true });
      e8._route = shallowReactive(p6), e8._middleware ||= { global: [], named: {} };
      const h8 = useError(), f6 = e8.ssrContext?.islandContext?.name?.startsWith("page_");
      function endNavigation(t9) {
        delete e8._processingMiddleware, delete e8._middlewareTo;
      }
      __name(endNavigation, "endNavigation");
      e8.ssrContext?.islandContext && !f6 || s5.afterEach(async (t9, a14, n9) => {
        endNavigation(), n9 && await e8.callHook("page:loading:end"), 4 !== n9?.type && t9.redirectedFrom && t9.fullPath !== l8 && await e8.runWithContext(() => navigateTo(t9.fullPath || "/"));
      }), s5.onError(async (t9, a14) => {
        endNavigation(), await e8.callHook("page:loading:end");
      });
      try {
        [t8, a13] = executeAsync(() => s5.push(l8)), t8 = await t8, a13(), [t8, a13] = executeAsync(() => s5.isReady()), await t8, a13();
      } catch (h9) {
        [t8, a13] = executeAsync(() => _showErrorUnlessCrawler(e8, h9)), await t8, a13();
      }
      const m8 = s5.currentRoute.value;
      if (syncCurrentRoute(), e8.ssrContext?.islandContext && !f6) return { provide: { router: s5 } };
      const g9 = e8.payload.state._layout;
      return s5.beforeEach(async (t9, a14) => (async function(t10, a15) {
        await e8.callHook("page:loading:start"), t10.meta = reactive(t10.meta), e8.isHydrating && g9 && !isReadonly(t10.meta.layout) && (t10.meta.layout = g9);
        if (e8._processingMiddleware = true, e8._middlewareTo = t10, !e8.ssrContext?.islandContext || f6) {
          const n9 = /* @__PURE__ */ new Set([...Jt, ...e8._middleware.global]);
          for (const e9 of t10.matched) {
            const t11 = e9.meta.middleware;
            if (t11) for (const e10 of toArray$1(t11)) n9.add(e10);
          }
          const r4 = getRouteRules({ path: t10.path });
          if (r4.appMiddleware) for (const e9 in r4.appMiddleware) r4.appMiddleware[e9] ? n9.add(e9) : n9.delete(e9);
          for (const r5 of n9) {
            const n10 = "string" == typeof r5 ? e8._middleware.named[r5] || await Xt[r5]?.().then((e9) => e9.default || e9) : r5;
            if (!n10) throw kt.NUXT_E2004({ entry: String(r5), validMiddleware: void 0 });
            try {
              const run = /* @__PURE__ */ __name(() => e8.runWithContext(() => n10(t10, a15)), "run"), r6 = await run();
              if (false === r6 || r6 instanceof Error) {
                const t11 = r6 || createError$2({ status: 404, statusText: `Page Not Found: ${l8}` });
                return await e8.runWithContext(() => showError(t11)), false;
              }
              if (true === r6) continue;
              if (false === r6) return r6;
              if (r6) return isNuxtError(r6) && r6.fatal && await e8.runWithContext(() => showError(r6)), r6;
            } catch (t11) {
              const a16 = createError$2(t11);
              return a16.fatal && await e8.runWithContext(() => showError(a16)), a16;
            }
          }
        }
      })(t9, a14)), f6 && s5.beforeResolve((t9) => {
        const a14 = Kt[e8.ssrContext.islandContext.name], n9 = t9.matched.find((e9) => e9.components?.default?.__nuxt_island)?.components?.default;
        if (!a14 || a14 !== n9?.__nuxt_island) return e8.ssrContext["~renderResponse"] = { statusCode: 400, statusMessage: "Invalid island request path" }, false;
      }), s5.afterEach((t9, a14, n9) => {
        if (0 === t9.matched.length && !h8.value && !isNavigationFailure(n9, De.aborted | De.cancelled)) return e8.runWithContext(() => showError(createError$2({ status: 404, fatal: false, statusText: `Page not found: ${t9.fullPath}`, data: { path: t9.fullPath } })));
      }), e8.hooks.hookOnce("app:created", async () => {
        try {
          "name" in m8 && (m8.name = void 0), await s5.replace({ ...m8, force: true }), s5.options.scrollBehavior = Qt.scrollBehavior;
        } catch (t9) {
          await _showErrorUnlessCrawler(e8, t9);
        }
      }), { provide: { router: s5 } };
    } });
    ea = [["NuxtError", (e8) => isNuxtError(e8) && e8.toJSON()], ["EmptyShallowRef", (e8) => isRef(e8) && isShallow(e8) && !e8.value && ("bigint" == typeof e8.value ? "0n" : JSON.stringify(e8.value) || "_")], ["EmptyRef", (e8) => isRef(e8) && !e8.value && ("bigint" == typeof e8.value ? "0n" : JSON.stringify(e8.value) || "_")], ["ShallowRef", (e8) => isRef(e8) && isShallow(e8) && e8.value], ["ShallowReactive", (e8) => isReactive(e8) && isShallow(e8) && toRaw(e8)], ["Ref", (e8) => isRef(e8) && e8.value], ["Reactive", (e8) => isReactive(e8) && toRaw(e8)]];
    ta = defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const [e8, t8] of ea) definePayloadReducer(e8, t8);
    } });
    aa = defineComponent({ name: "ServerPlaceholder", render: /* @__PURE__ */ __name(() => createElementBlock("div"), "render") });
    __name(resolveLayoutName, "resolveLayoutName");
    firstNonUndefined = /* @__PURE__ */ __name((...e8) => e8.find((e9) => void 0 !== e9), "firstNonUndefined");
    __name(defineNuxtLink, "defineNuxtLink");
    na = defineNuxtLink(Ce);
    __name(isSameRouteRecord, "isSameRouteRecord");
    __name(getOriginalPath, "getOriginalPath");
    __name(isEquivalentArray, "isEquivalentArray");
    __name(isSameParamValue, "isSameParamValue");
    __name(isSameRouteLocationParams, "isSameRouteLocationParams");
    __name(includesParams, "includesParams");
    __name(getLinkClass, "getLinkClass");
    __name(applyTrailingSlashBehavior, "applyTrailingSlashBehavior");
    ra = [qt, Dt, Zt, ta, defineNuxtPlugin({ name: "pinia", setup(e8) {
      const t8 = createPinia();
      return e8.vueApp.use(t8), setActivePinia(t8), e8.payload && e8.payload.pinia && (t8.state.value = e8.payload.pinia), { provide: { pinia: t8 } };
    }, hooks: { "app:rendered"() {
      const e8 = useNuxtApp();
      e8.payload.pinia = toRaw(e8.$pinia).state.value, setActivePinia(void 0);
    } } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    oa = { portal: defineAsyncComponent(() => Promise.resolve().then(() => (init_portal_qve5xPQR(), portal_qve5xPQR_exports)).then((e8) => e8.default || e8)), public: defineAsyncComponent(() => Promise.resolve().then(() => (init_public_L4LFeNcy(), public_L4LFeNcy_exports)).then((e8) => e8.default || e8)) };
    ia = defineComponent({ name: "LayoutLoader", inheritAttrs: false, props: { name: String, layoutProps: Object }, setup: /* @__PURE__ */ __name((e8, t8) => () => h6(oa[e8.name], e8.layoutProps, t8.slots), "setup") });
    sa = defineComponent({ name: "NuxtLayout", inheritAttrs: false, props: { name: { type: [String, Boolean, Object], default: null }, fallback: { type: [String, Object], default: null } }, setup(e8, t8) {
      const a13 = useNuxtApp(), n8 = inject(jt), r3 = n8 && n8 !== useRoute$1() ? n8 : useRoute(), o6 = computed(() => {
        let t9 = resolveLayoutName(r3, e8.name);
        return t9 && !(t9 in oa) && e8.fallback && (t9 = unref(e8.fallback)), t9;
      });
      provide(It, o6);
      const resolveRouteLayout = /* @__PURE__ */ __name((t9) => resolveLayoutName(t9, e8.name), "resolveRouteLayout"), i9 = shallowRef();
      t8.expose({ layoutRef: i9 });
      const s5 = a13.deferHydration();
      let c5;
      return () => {
        const n9 = !!o6.value && o6.value in oa && !!r3?.meta.layoutTransition, l8 = (n9 && (function(e9) {
          const t9 = [];
          for (const a14 of e9) a14 && t9.push({ ...a14, onAfterLeave: a14.onAfterLeave ? toArray(a14.onAfterLeave) : void 0, onBeforeLeave: a14.onBeforeLeave ? toArray(a14.onBeforeLeave) : void 0 });
          Ut(...t9);
        })([r3?.meta.layoutTransition, false, { onBeforeLeave() {
          !(function(e9) {
            e9["~transitionPromise"] ||= new Promise((t9) => {
              e9["~transitionFinish"] = t9;
            });
          })(a13);
        }, onAfterLeave() {
          !(function(e9) {
            e9["~transitionFinish"]?.(), delete e9["~transitionFinish"], delete e9["~transitionPromise"];
          })(a13);
        } }]), c5);
        return c5 = o6.value, (u9 = { default: /* @__PURE__ */ __name(() => h6(Co, { suspensible: true, onResolve: /* @__PURE__ */ __name(async () => {
          await nextTick(s5);
        }, "onResolve") }, { default: /* @__PURE__ */ __name(() => h6(ca, { layoutProps: mergeProps(t8.attrs, r3.meta.layoutProps ?? {}, { ref: i9 }), key: o6.value || void 0, name: o6.value, shouldProvide: !e8.name, resolveRouteLayout, isRenderingNewLayout: /* @__PURE__ */ __name((e9) => e9 !== l8 && e9 === o6.value, "isRenderingNewLayout"), hasTransition: n9 }, t8.slots), "default") }), "default") }, { default: /* @__PURE__ */ __name(() => u9.default?.(), "default") }).default();
        var u9;
      };
    } });
    ca = defineComponent({ name: "NuxtLayoutProvider", inheritAttrs: false, props: { name: { type: [String, Boolean] }, layoutProps: { type: Object }, hasTransition: { type: Boolean }, shouldProvide: { type: Boolean }, isRenderingNewLayout: { type: Function, required: true }, resolveRouteLayout: { type: Function, required: true } }, setup(e8, t8) {
      const a13 = e8.name;
      e8.shouldProvide && provide(xt, { isCurrent: /* @__PURE__ */ __name((t9) => false === a13 || a13 === e8.resolveRouteLayout(t9), "isCurrent") });
      const n8 = inject(jt), r3 = n8 && n8 === useRoute$1(), o6 = inject(xt, null);
      if (r3) {
        const t9 = useRoute(), a14 = {};
        for (const r4 in t9) {
          const i9 = r4;
          Object.defineProperty(a14, i9, { enumerable: true, get: /* @__PURE__ */ __name(() => !e8.isRenderingNewLayout(e8.name) || o6 && !o6.isCurrent(t9) ? n8[i9] : t9[i9], "get") });
        }
        provide(jt, shallowReactive(a14));
      }
      return () => !a13 || "string" == typeof a13 && !(a13 in oa) ? t8.slots.default?.() : h6(ia, { key: a13, layoutProps: e8.layoutProps, name: a13 }, t8.slots);
    } });
    la = ((e8 = "RouteProvider") => defineComponent({ name: e8, props: { route: { type: Object, required: true }, vnode: Object, vnodeRef: Object, renderKey: String, trackRootNodes: Boolean, routeRecord: Object }, setup(e9) {
      const t8 = e9.renderKey, a13 = e9.route, n8 = {};
      for (const r3 in e9.route) Object.defineProperty(n8, r3, { get: /* @__PURE__ */ __name(() => t8 === e9.renderKey ? e9.route[r3] : a13[r3], "get"), enumerable: true });
      return provide(jt, shallowReactive(n8)), () => e9.vnode ? h6(e9.vnode, { ref: e9.vnodeRef }) : e9.vnode;
    } }))();
    ua = defineComponent({ name: "NuxtPage", inheritAttrs: false, props: { name: { type: String }, transition: { type: [Boolean, Object], default: void 0 }, keepalive: { type: [Boolean, Object], default: void 0 }, route: { type: Object }, pageKey: { type: [Function, String], default: null } }, setup(e8, { attrs: t8, slots: a13, expose: n8 }) {
      const r3 = useNuxtApp(), o6 = ref();
      return inject(jt, null), n8({ pageRef: o6 }), inject(xt, null), r3.deferHydration(), () => h6(wt, { name: e8.name, route: e8.route, ...t8 }, { default: markStableSlot((e9) => h6(Co, { suspensible: true }, { default: /* @__PURE__ */ __name(() => h6(la, { vnode: a13.default ? normalizeSlot(a13.default, e9) : e9.Component, route: e9.route, vnodeRef: o6 }), "default") })) });
    } });
    __name(markStableSlot, "markStableSlot");
    __name(normalizeSlot, "normalizeSlot");
    useToast = /* @__PURE__ */ __name(() => {
      const e8 = useState("toast-message", () => null), t8 = useState("toast-variant", () => "default");
      let a13 = null;
      return { message: e8, variant: t8, show: /* @__PURE__ */ __name(function(n8, r3 = "default") {
        e8.value = n8, t8.value = r3, a13 && clearTimeout(a13), a13 = setTimeout(() => {
          e8.value = null;
        }, 3200);
      }, "show") };
    }, "useToast");
    da = defineComponent({ __name: "ToastHost", __ssrInlineRender: true, setup(e8) {
      const t8 = useToast();
      return (e9, a13, n8, r3) => {
        unref(t8).message.value ? a13(`<div${ssrRenderAttrs(mergeProps({ class: ["toast", "danger" === unref(t8).variant.value ? "toast--danger" : ""], role: "status" }, r3))} data-v-478fc14f>${ssrInterpolate(unref(t8).message.value)}</div>`) : a13("<!---->");
      };
    } });
    pa = da.setup;
    da.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("components/ToastHost.vue"), pa ? pa(e8, t8) : void 0;
    };
    ha = Object.assign(_plugin_vue_export_helper_default(da, [["__scopeId", "data-v-478fc14f"]]), { __name: "ToastHost" });
    fa = __exportAll({ usePinia: /* @__PURE__ */ __name(() => usePinia, "usePinia") });
    ((e8, t8, a13, n8) => {
      if (t8 && "object" == typeof t8 || "function" == typeof t8) for (var r3, o6 = St(t8), i9 = 0, s5 = o6.length; i9 < s5; i9++) r3 = o6[i9], Ct.call(e8, r3) || r3 === a13 || Rt(e8, r3, { get: ((e9) => t8[e9]).bind(null, r3), enumerable: !(n8 = At(t8, r3)) || n8.enumerable });
    })(fa, Le, "default");
    usePinia = /* @__PURE__ */ __name(() => useNuxtApp().$pinia, "usePinia");
    __name(mkApplicant, "mkApplicant");
    __name(createSeed, "createSeed");
    ma = "2026-10-28";
    ga = (0, fa.defineStore)("demo", { state: /* @__PURE__ */ __name(() => ({ data: createSeed(), ui: { role: "public", applicantId: "felix-navarro", clientOrgId: "northwind", lastPaths: {} } }), "state"), getters: { orgById: /* @__PURE__ */ __name((e8) => (t8) => e8.data.orgs.find((e9) => e9.id === t8), "orgById"), jobById: /* @__PURE__ */ __name((e8) => (t8) => e8.data.jobs.find((e9) => e9.id === t8), "jobById"), jobBySlug: /* @__PURE__ */ __name((e8) => (t8) => e8.data.jobs.find((e9) => e9.slug === t8), "jobBySlug"), applicantById: /* @__PURE__ */ __name((e8) => (t8) => e8.data.applicants.find((e9) => e9.id === t8), "applicantById"), applicationById: /* @__PURE__ */ __name((e8) => (t8) => e8.data.applications.find((e9) => e9.id === t8), "applicationById"), publishedJobs: /* @__PURE__ */ __name((e8) => e8.data.jobs.filter((e9) => "Published" === e9.status), "publishedJobs"), hasReveal: /* @__PURE__ */ __name((e8) => (t8, a13) => e8.data.revealGrants.some((e9) => e9.applicantId === t8 && e9.orgId === a13), "hasReveal"), inviteForApp: /* @__PURE__ */ __name((e8) => (t8) => e8.data.invites.find((e9) => e9.applicationId === t8 && "Voided" !== e9.status), "inviteForApp"), recForApp: /* @__PURE__ */ __name((e8) => (t8) => e8.data.recommendations.find((e9) => e9.applicationId === t8), "recForApp"), orgBalance: /* @__PURE__ */ __name((e8) => (t8) => e8.data.orgs.find((e9) => e9.id === t8)?.balance ?? 0, "orgBalance"), creditsAtStake: /* @__PURE__ */ __name((e8) => (t8) => e8.data.invites.filter((e9) => e9.orgId === t8 && "Sent" === e9.status).reduce((e9, t9) => e9 + t9.price, 0), "creditsAtStake"), clientOwner: /* @__PURE__ */ __name((e8) => (t8) => {
      const a13 = e8.data.orgs.find((e9) => e9.id === t8);
      return a13 ? e8.data.users.find((e9) => e9.id === a13.ownerUserId) : void 0;
    }, "clientOwner") }, actions: { hydrate() {
    }, persist() {
    }, resetDataOnly() {
      this.data = createSeed(), (function(e8) {
        for (const t8 of e8.orgs) {
          const a13 = e8.ledger.filter((e9) => e9.orgId === t8.id).sort((e9, t9) => e9.when.localeCompare(t9.when));
          t8.balance = a13.length ? a13[a13.length - 1].balanceAfter : 0;
        }
      })(this.data), this.persist();
    }, resetDemo(e8) {
    }, setRole(e8, t8) {
      this.ui.role = e8;
      const a13 = this.ui.lastPaths[e8] || { public: "/", applicant: "/applicant", client: "/client", hr: "/hr" }[e8];
      t8 && t8(a13), this.persist();
    }, rememberPath(e8) {
      const t8 = this.ui.role;
      "public" !== t8 && (this.ui.lastPaths[t8] = e8), this.persist();
    }, setApplicant(e8, t8, a13) {
      this.ui.applicantId = e8;
      const n8 = t8?.match(/^\/applicant\/applications\/([^/]+)/);
      if (n8) {
        const t9 = this.data.applications.find((e9) => e9.id === n8[1]);
        t9 && t9.applicantId !== e8 && a13?.("/applicant");
      } else a13 && !this.data.applications.some((t9) => t9.applicantId === e8) && a13("/applicant");
      this.persist();
    }, setClientOrg(e8, t8) {
      this.ui.clientOrgId = e8, t8 && t8("/client"), this.persist();
    }, syncRoleFromPath(e8) {
      e8.startsWith("/hr") ? this.ui.role = "hr" : e8.startsWith("/client") ? this.ui.role = "client" : e8.startsWith("/applicant") && (this.ui.role = "applicant"), this.persist();
    }, applyToJob(e8, t8, a13) {
      const n8 = this.data.applications.find((a14) => a14.applicantId === t8 && a14.jobId === e8);
      if (n8) return n8;
      const r3 = { id: `app-${t8.split("-")[0]}-${e8.replace("job-", "")}-${Date.now()}`, applicantId: t8, jobId: e8, status: "Submitted", updatedAt: ma, coverNote: a13 };
      return this.data.applications.push(r3), this.persist(), r3;
    }, withdrawApplication(e8) {
      const t8 = this.data.applications.find((t9) => t9.id === e8);
      t8 && "Hired" !== t8.status && "Withdrawn" !== t8.status && (t8.status = "Withdrawn", t8.updatedAt = ma, t8.withdrawnAt = ma, this.persist());
    }, acceptInvite(e8) {
      const t8 = this.data.invites.find((t9) => t9.applicationId === e8 && "Sent" === t9.status), a13 = this.data.applications.find((t9) => t9.id === e8);
      if (!t8 || !a13) return false;
      t8.status = "Accepted", a13.status = "Accepted invite", a13.updatedAt = ma;
      const n8 = this.data.jobs.find((e9) => e9.id === a13.jobId);
      return n8 && this.data.revealGrants.push({ id: `rg-${Date.now()}`, applicantId: a13.applicantId, orgId: n8.orgId, grantedAt: (/* @__PURE__ */ new Date()).toISOString(), inviteId: t8.id }), this.persist(), true;
    }, declineInvite(e8, t8) {
      const a13 = this.data.invites.find((t9) => t9.applicationId === e8 && "Sent" === t9.status), n8 = this.data.applications.find((t9) => t9.id === e8);
      return !(!a13 || !n8 || a13.refunded) && (a13.status = "Declined", a13.declineReason = t8, n8.status = "Declined invite", n8.updatedAt = ma, this.refundInvite(a13), this.persist(), true);
    }, refundInvite(e8) {
      if (e8.refunded) return;
      const t8 = this.data.orgs.find((t9) => t9.id === e8.orgId);
      if (!t8) return;
      const a13 = t8.balance + e8.price;
      this.data.ledger.push({ id: `led-ref-${Date.now()}`, orgId: e8.orgId, when: ma, type: "invite_refund", amount: e8.price, balanceAfter: a13, note: "Invite refund", refundOf: e8.ledgerChargeId }), t8.balance = a13, e8.refunded = true;
    }, sendInvite(e8) {
      const t8 = this.data.orgs.find((t9) => t9.id === e8.orgId), a13 = this.data.applications.find((t9) => t9.id === e8.applicationId);
      if (!t8 || !a13 || t8.balance < 1) return { ok: false, reason: "balance" };
      const n8 = t8.balance - 1, r3 = `led-ch-${Date.now()}`;
      this.data.ledger.push({ id: r3, orgId: e8.orgId, when: ma, type: "invite_charge", amount: -1, balanceAfter: n8, note: this.data.applicants.find((e9) => e9.id === a13.applicantId)?.name || "Candidate" }), t8.balance = n8;
      const o6 = `inv-${Date.now()}`;
      return this.data.invites.push({ id: o6, applicationId: e8.applicationId, recommendationId: e8.recommendationId, orgId: e8.orgId, status: "Sent", sentAt: ma, expiresAt: "2026-11-04", price: 1, message: e8.message, proposedTimes: e8.proposedTimes, ledgerChargeId: r3, refunded: false }), a13.status = "Invited", a13.updatedAt = ma, this.persist(), { ok: true, inviteId: o6 };
    }, passRecommendation(e8, t8) {
      const a13 = this.data.recommendations.find((t9) => t9.id === e8);
      a13 && (a13.status = "Passed", a13.passedReason = t8, this.persist());
    }, grantCredits(e8) {
      const t8 = this.data.orgs.find((t9) => t9.id === e8.orgId);
      if (!t8) return;
      const a13 = t8.balance + e8.amount;
      this.data.ledger.push({ id: `led-grant-${Date.now()}`, orgId: e8.orgId, when: ma, type: e8.type, amount: e8.amount, balanceAfter: a13, note: e8.reason, reference: e8.invoiceRef }), t8.balance = a13;
      const n8 = this.data.packageRequests.find((t9) => t9.orgId === e8.orgId && "open" === t9.status && t9.credits === e8.amount);
      n8 && (n8.status = "fulfilled"), this.persist();
    }, requestPackage(e8, t8, a13) {
      this.data.packageRequests.push({ id: `prq-${Date.now()}`, orgId: e8, credits: t8, pricePhp: a13, requestedAt: ma, status: "open" }), this.persist();
    }, openRequestReview(e8) {
      const t8 = this.data.requests.find((t9) => t9.id === e8);
      t8 && "Submitted" === t8.status && (t8.status = "Under review", this.persist());
    }, appendRequestComment(e8, t8, a13 = "Hana Cruz") {
      const n8 = this.data.requests.find((t9) => t9.id === e8);
      n8 && (n8.comments.push({ id: `rc-${Date.now()}`, authorName: a13, createdAt: ma, body: t8 }), this.persist());
    }, setRequestStatus(e8, t8, a13) {
      const n8 = this.data.requests.find((t9) => t9.id === e8);
      n8 && (n8.status = t8, a13 && this.appendRequestComment(e8, a13), this.persist());
    }, approveRequest(e8) {
      const t8 = this.data.requests.find((t9) => t9.id === e8);
      t8 && (t8.status = "Approved", this.data.jobs.some((e9) => e9.title === t8.title && e9.orgId === t8.orgId) || this.data.jobs.push({ id: `job-${e8}`, slug: t8.title.toLowerCase().replace(/\s+/g, "-"), title: t8.title, orgId: t8.orgId, status: "Approved", confidential: false, location: String(t8.fields.location || "TBD"), workSetup: String(t8.fields.workSetup || "On-site"), employmentType: String(t8.fields.employmentType || "Full-time"), salaryDisclosed: false, openings: Number(t8.fields.openings || 1), category: "General", description: t8.summary, requirements: ["See client request", "HR to refine", "Publish when ready"], benefits: "Standard agency benefits", autoCloseDays: 30 }), this.persist());
    }, publishJob(e8) {
      const t8 = this.data.jobs.find((t9) => t9.id === e8);
      t8 && (t8.status = "Published", t8.publishedAt = ma, this.persist());
    }, shareRecommendation(e8, t8) {
      const a13 = this.data.applications.find((t9) => t9.id === e8);
      if (!a13 || this.data.recommendations.some((t9) => t9.applicationId === e8)) return false;
      const n8 = (function() {
        let e9 = "";
        for (let t9 = 0; t9 < 4; t9++) e9 += "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"[Math.floor(34 * Math.random())];
        return `HW-${e9}`;
      })();
      return this.data.recommendations.push({ id: `rec-${e8.replace("app-", "")}`, applicationId: e8, alias: n8, status: "shared", whySummary: t8.whySummary, includeNotes: true, includeRecording: true, includeCv: true, shareableNotes: t8.shareableNotes, internalNotes: t8.internalNotes }), a13.status = "Recommended", a13.updatedAt = ma, this.persist(), true;
    }, saveInterview(e8, t8) {
      let a13 = this.data.interviews.find((t9) => t9.applicationId === e8);
      if (a13 || (a13 = { id: `int-${Date.now()}`, applicationId: e8, scheduledAt: `${ma}T10:00:00+08:00`, platform: "Google Meet", link: "https://meet.example/hw-demo", interviewer: "Hana Cruz", status: "Scheduled" }, this.data.interviews.push(a13)), Object.assign(a13, t8), "Completed" === t8.status) {
        const t9 = this.data.applications.find((t10) => t10.id === e8);
        t9 && ["Submitted", "Screening", "Shortlisted", "HR interview scheduled", "HR interviewed"].includes(t9.status) && (t9.status = "HR interviewed", t9.updatedAt = ma);
      }
      this.persist();
    }, markHired(e8, t8) {
      const a13 = this.data.applications.find((t9) => t9.id === e8);
      a13 && (a13.status = "Hired", a13.startDate = t8, a13.updatedAt = ma, this.persist());
    }, notHiredAfterAccept(e8, t8) {
      const a13 = this.data.applications.find((t9) => t9.id === e8);
      a13 && (a13.hrRejectReason = t8, a13.updatedAt = ma, this.persist());
    }, setApplicationStatus(e8, t8) {
      const a13 = this.data.applications.find((t9) => t9.id === e8);
      a13 && (a13.status = t8, a13.updatedAt = ma, this.persist());
    }, submitClientOutcome(e8, t8) {
      const a13 = this.data.clientOutcomes.findIndex((t9) => t9.applicationId === e8);
      a13 >= 0 && this.data.clientOutcomes.splice(a13, 1), this.data.clientOutcomes.push(t8);
      const n8 = this.data.applications.find((t9) => t9.id === e8);
      n8 && (n8.status = "Accepted" === t8.result ? "Client accepted" : "Client rejected", n8.updatedAt = ma), this.persist();
    }, toggleTeamSpend(e8, t8) {
      const a13 = this.data.users.find((t9) => t9.id === e8);
      a13 && (a13.canSpend = t8, this.persist());
    }, addTeammate(e8, t8, a13) {
      const n8 = `user-${Date.now()}`;
      this.data.users.push({ id: n8, name: t8, orgId: e8, role: "Client member", canSpend: false }), this.persist();
    }, requestApplicantData(e8) {
      this.data.dataSubjectRequests.push({ id: `dsr-${Date.now()}`, applicantId: e8, status: "Open", createdAt: ma }), this.persist();
    }, markNotificationRead(e8) {
      const t8 = this.data.notifications.find((t9) => t9.id === e8);
      t8 && (t8.read = true, this.persist());
    } } });
    __name(bound, "bound");
    renderList$2 = /* @__PURE__ */ __name((e8, ...t8) => renderList(bound(e8), ...t8), "renderList$2");
    __name(ssrRenderList$2, "ssrRenderList$2");
    va = defineComponent({ __name: "DemoBar", __ssrInlineRender: true, setup(e8) {
      const t8 = ga(), a13 = useRoute$1();
      useRouter(), useToast(), watch(() => a13.path, (e9) => {
        t8.syncRoleFromPath(e9), t8.rememberPath(e9);
      }, { immediate: true });
      const r3 = computed(() => t8.data.applicants), o6 = computed(() => t8.data.orgs);
      return (e9, a14, u9, d7) => {
        const p6 = aa, h8 = sa, f6 = ua, m8 = ha;
        a14(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, d7))} data-v-fe147504><header class="demo-bar" data-v-fe147504><div class="demo-bar__inner" data-v-fe147504><div class="segments" role="tablist" aria-label="Demo role" data-v-fe147504><button type="button" class="${ssrRenderClass({ active: "public" === unref(t8).ui.role })}" data-v-fe147504>Public</button><button type="button" class="${ssrRenderClass({ active: "applicant" === unref(t8).ui.role })}" data-v-fe147504>Applicant</button><button type="button" class="${ssrRenderClass({ active: "client" === unref(t8).ui.role })}" data-v-fe147504>Client</button><button type="button" class="${ssrRenderClass({ active: "hr" === unref(t8).ui.role })}" data-v-fe147504>HR</button></div>`), "applicant" === unref(t8).ui.role ? (a14(`<div class="picker" data-v-fe147504><label class="meta" data-v-fe147504>Applicant</label><select class="select picker-select"${ssrRenderAttr("value", unref(t8).ui.applicantId)} data-v-fe147504><!--[-->`), ssrRenderList$2(unref(r3), (e10) => {
          a14(`<option${ssrRenderAttr("value", e10.id)} data-v-fe147504>${ssrInterpolate(e10.name)}</option>`);
        }), a14("<!--]--></select></div>")) : a14("<!---->"), "client" === unref(t8).ui.role ? (a14(`<div class="picker" data-v-fe147504><label class="meta" data-v-fe147504>Client</label><select class="select picker-select"${ssrRenderAttr("value", unref(t8).ui.clientOrgId)} data-v-fe147504><!--[-->`), ssrRenderList$2(unref(o6), (e10) => {
          a14(`<option${ssrRenderAttr("value", e10.id)} data-v-fe147504>${ssrInterpolate(e10.name)}</option>`);
        }), a14("<!--]--></select></div>")) : a14("<!---->"), "hr" === unref(t8).ui.role ? a14('<div class="picker meta" data-v-fe147504>Hana Cruz \xB7 HR operator</div>') : a14("<!---->"), a14('<button type="button" class="btn btn--secondary reset" data-v-fe147504>Reset demo</button></div></header>'), a14(ssrRenderComponent(p6, null, null, u9)), a14(ssrRenderComponent(h8, null, { default: withCtx((e10, t9, a15, r4) => {
          if (!t9) return [createVNode(f6)];
          t9(ssrRenderComponent(f6, null, null, a15, r4));
        }), _: 1 }, u9)), a14(ssrRenderComponent(m8, null, null, u9)), a14("</div>");
      };
    } });
    ya = va.setup;
    va.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("components/DemoBar.vue"), ya ? ya(e8, t8) : void 0;
    };
    ba = Object.assign(_plugin_vue_export_helper_default(va, [["__scopeId", "data-v-fe147504"]]), { __name: "DemoBar" });
    wa = {};
    Ra = wa.setup;
    wa.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("app.vue"), Ra ? Ra(e8, t8) : void 0;
    };
    Aa = _plugin_vue_export_helper_default(wa, [["ssrRender", function(e8, t8, a13, r3) {
      t8(ssrRenderComponent(ba, r3, null, a13));
    }]]);
    Sa = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e8) {
      const t8 = e8.error, a13 = Number(t8.statusCode || 500), r3 = 404 === a13, o6 = t8.statusMessage ?? (r3 ? "Page Not Found" : "Internal Server Error"), i9 = t8.message || t8.toString(), s5 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_D7_HZ4JB(), error_404_D7_HZ4JB_exports))), c5 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_DzIRuSEs(), error_500_DzIRuSEs_exports))), l8 = r3 ? s5 : c5;
      return (e9, t9, r4, s6) => {
        t9(ssrRenderComponent(unref(l8), mergeProps({ status: unref(a13), statusText: unref(o6), statusCode: unref(a13), statusMessage: unref(o6), description: unref(i9), stack: unref(void 0) }, s6), null, r4));
      };
    } };
    Ca = Sa.setup;
    Sa.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), Ca ? Ca(e8, t8) : void 0;
    };
    IslandRenderer = /* @__PURE__ */ __name(() => null, "IslandRenderer");
    xa = { __name: "nuxt-root", __ssrInlineRender: true, setup(e8) {
      const a13 = useNuxtApp();
      a13.deferHydration(), a13.ssrContext.url;
      const o6 = false;
      provide(jt, useRoute$1()), a13.hooks.callHookWith((e9) => e9.map((e10) => e10()), "vue:setup", []);
      const i9 = useError(), s5 = i9.value && !a13.ssrContext.error;
      onErrorCaptured((e9, t8, n8) => {
        a13.hooks.callHook("vue:error", e9, t8, n8)?.catch((e10) => console.error("[nuxt] Error in `vue:error` hook", e10));
        {
          const r3 = a13.runWithContext(() => showError(e9));
          return lo(() => r3), (function(e10, t9, n9) {
            const r4 = a13.vueApp.config.errorHandler;
            if (r4 && !r4.__nuxt_default) try {
              r4(e10, t9, n9);
            } catch (e11) {
              console.error("[nuxt] Error in `app.config.errorHandler`", e11);
            }
          })(e9, t8, n8), false;
        }
      });
      const c5 = a13.ssrContext.islandContext;
      return (e9, a14, l8, u9) => {
        ssrRenderSuspense(a14, { default: /* @__PURE__ */ __name(() => {
          unref(s5) ? a14("<div></div>") : unref(i9) ? a14(ssrRenderComponent(unref(Sa), { error: unref(i9) }, null, l8)) : unref(c5) ? a14(ssrRenderComponent(unref(IslandRenderer), { context: unref(c5) }, null, l8)) : unref(o6) ? renderVNode(a14, createVNode(resolveDynamicComponent(unref(o6)), null, null), l8) : a14(ssrRenderComponent(unref(Aa), null, null, l8));
        }, "default") });
      };
    } };
    Ia = xa.setup;
    xa.setup = (e8, t8) => {
      const a13 = useSSRContext();
      return (a13.modules || (a13.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue"), Ia ? Ia(e8, t8) : void 0;
    };
    entry$1 = /* @__PURE__ */ __name(async function(e8) {
      const t8 = createApp(xa), a13 = (function(e9) {
        let t9 = 0;
        const a14 = { _id: e9.id || "nuxt-app", _scope: effectScope(), provide: void 0, versions: { get nuxt() {
          return "4.6.3";
        }, get vue() {
          return a14.vueApp.version;
        } }, payload: shallowReactive({ ...e9.ssrContext?.payload || {}, data: shallowReactive({}), state: reactive({}), once: /* @__PURE__ */ new Set(), _errors: shallowReactive({}) }), static: { data: {} }, runWithContext: /* @__PURE__ */ __name((e10) => a14._scope.active && !getCurrentScope() ? a14._scope.run(() => callWithNuxt(a14, e10)) : callWithNuxt(a14, e10), "runWithContext"), isHydrating: false, deferHydration() {
          if (!a14.isHydrating) return () => {
          };
          t9++;
          let e10 = false;
          return () => {
            if (!e10) return e10 = true, t9--, 0 === t9 ? (a14.isHydrating = false, a14.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: shallowReactive({}), _state: shallowReactive({}), _payloadRevivers: {}, ...e9 };
        a14.payload.serverRendered = true, a14.ssrContext && (a14.payload.path = a14.ssrContext.url, a14.ssrContext.nuxt = a14, a14.ssrContext.payload = a14.payload, a14.ssrContext.config = { public: a14.ssrContext.runtimeConfig.public, app: a14.ssrContext.runtimeConfig.app }), a14.hooks = createHooks$1(), a14.hook = a14.hooks.hook;
        {
          const contextCaller = /* @__PURE__ */ __name(async (e10, t10) => {
            for (const n9 of e10) await a14.runWithContext(() => n9(...t10));
          }, "contextCaller");
          a14.hooks.callHook = (e10, ...t10) => a14.hooks.callHookWith(contextCaller, e10, t10);
        }
        a14.callHook = a14.hooks.callHook, a14.provide = (e10, t10) => {
          const n9 = "$" + e10;
          defineGetter(a14, n9, t10), defineGetter(a14.vueApp.config.globalProperties, n9, t10);
        }, defineGetter(a14.vueApp, "$nuxt", a14), defineGetter(a14.vueApp.config.globalProperties, "$nuxt", a14);
        const n8 = e9.ssrContext.runtimeConfig;
        return a14.provide("config", n8), a14;
      })({ vueApp: t8, ssrContext: e8 });
      try {
        await (async function(e9, t9) {
          let a14;
          for (const a15 of t9) registerPluginHooks(e9, a15);
          for (const n8 of t9) try {
            await applyPlugin(e9, n8);
          } catch (t10) {
            if (!e9.payload.error) throw t10;
            a14 ||= t10;
          }
          if (a14) throw e9.payload.error || a14;
        })(a13, ra), await a13.hooks.callHook("app:created", t8);
      } catch (e9) {
        await a13.hooks.callHook("app:error", e9), a13.payload.error ||= createError$2(e9);
      }
      if (e8 && (e8["~renderResponse"] || e8._renderResponse)) throw new Error("skipping render");
      return t8;
    }, "entry$1");
    ja = Object.freeze(Object.defineProperty({ __proto__: null, default: /* @__PURE__ */ __name((e8) => entry$1(e8), "default") }, Symbol.toStringTag, { value: "Module" }));
  }
});

// server/chunks/virtual/precomputed.mjs
var precomputed_exports = {};
__export(precomputed_exports, {
  default: () => s2
});
var s2, e, p4, r, t2, c3, i7, l6, o4, a2, d4, j5, n7, y5, u7, _5, m5, B, D3, g7, f4, v5, V, U, x5, T, h7;
var init_precomputed = __esm({
  "server/chunks/virtual/precomputed.mjs"() {
    s2 = { dependencies: { "_Cy-3SMU3.js": { scripts: {}, styles: {}, preload: { "_Cy-3SMU3.js": e = { resourceType: "script", module: true, prefetch: true, preload: true, file: "Cy-3SMU3.js", name: "_plugin-vue_export-helper" } }, prefetch: {} }, "_DoRJ1LK7.js": { scripts: {}, styles: {}, preload: { "_DoRJ1LK7.js": p4 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "DoRJ1LK7.js", name: "runtime-dom.esm-bundler", imports: ["_Cy-3SMU3.js"] }, "_Cy-3SMU3.js": e }, prefetch: {} }, "_DJy50lj5.js": { scripts: {}, styles: {}, preload: { "_DJy50lj5.js": r = { resourceType: "script", module: true, prefetch: true, preload: true, file: "DJy50lj5.js", name: "error", imports: ["_Cy-3SMU3.js"] }, "_Cy-3SMU3.js": e }, prefetch: {} }, "../node_modules/nuxt/dist/app/entry.js": { scripts: { "../node_modules/nuxt/dist/app/entry.js": c3 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "C6bivEq8.js", name: "entry", src: "../node_modules/nuxt/dist/app/entry.js", isEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js"], dynamicImports: t2 = ["layouts/portal.vue", "layouts/public.vue", "../node_modules/nuxt/dist/app/components/error-404.vue", "../node_modules/nuxt/dist/app/components/error-500.vue"], css: ["entry.DEX35-jb.css"] } }, styles: { "entry.DEX35-jb.css": i7 = { file: "entry.DEX35-jb.css", resourceType: "style", prefetch: true, preload: true } }, preload: { "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r }, prefetch: { "entry.DEX35-jb.css": i7 } }, "../node_modules/nuxt/dist/app/components/error-404.vue": { scripts: {}, styles: { "error-404.DpKY_dMl.css": l6 = { file: "error-404.DpKY_dMl.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7 }, preload: { "../node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DUPanOht.js", name: "error-404", src: "../node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js"], css: ["error-404.DpKY_dMl.css"] }, "error-404.DpKY_dMl.css": l6, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r }, prefetch: { "error-404.DpKY_dMl.css": l6, "entry.DEX35-jb.css": i7 } }, "error-404.DpKY_dMl.css": { scripts: {}, styles: {}, preload: { "error-404.DpKY_dMl.css": l6 }, prefetch: {} }, "../node_modules/nuxt/dist/app/components/error-500.vue": { scripts: {}, styles: { "error-500.CmR4p1fc.css": o4 = { file: "error-500.CmR4p1fc.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7 }, preload: { "../node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "Bb9PCuJ6.js", name: "error-500", src: "../node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js"], css: ["error-500.CmR4p1fc.css"] }, "error-500.CmR4p1fc.css": o4, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r }, prefetch: { "error-500.CmR4p1fc.css": o4, "entry.DEX35-jb.css": i7 } }, "error-500.CmR4p1fc.css": { scripts: {}, styles: {}, preload: { "error-500.CmR4p1fc.css": o4 }, prefetch: {} }, "entry.DEX35-jb.css": { scripts: {}, styles: {}, preload: { "entry.DEX35-jb.css": i7 }, prefetch: {} }, "_BfBhOUX5.js": { scripts: {}, styles: { "entry.DEX35-jb.css": i7 }, preload: { "_BfBhOUX5.js": a2 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "BfBhOUX5.js", name: "useFormat", imports: ["../node_modules/nuxt/dist/app/entry.js"] }, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r }, prefetch: { "entry.DEX35-jb.css": i7 } }, "_BswwKXkk.js": { scripts: {}, styles: {}, preload: { "_BswwKXkk.js": d4 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "BswwKXkk.js", name: "useMetrics" } }, prefetch: {} }, "_Cj_qxPw7.js": { scripts: {}, styles: { "pages.Ba3O-VlV.css": j5 = { file: "pages.Ba3O-VlV.css", resourceType: "style", prefetch: true, preload: true } }, preload: { "_Cj_qxPw7.js": n7 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "Cj_qxPw7.js", name: "pages", imports: ["_Cy-3SMU3.js"], css: ["pages.Ba3O-VlV.css"] }, "pages.Ba3O-VlV.css": j5, "_Cy-3SMU3.js": e }, prefetch: { "pages.Ba3O-VlV.css": j5 } }, "pages.Ba3O-VlV.css": { scripts: {}, styles: {}, preload: { "pages.Ba3O-VlV.css": j5 }, prefetch: {} }, "_DNmz-Owj.js": { scripts: {}, styles: { "pages.Ba3O-VlV.css": j5 }, preload: { "_DNmz-Owj.js": y5 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "DNmz-Owj.js", name: "StaticPage", imports: ["_Cy-3SMU3.js", "_Cj_qxPw7.js"] }, "_Cy-3SMU3.js": e, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5 }, prefetch: { "pages.Ba3O-VlV.css": j5 } }, "_Dje6XMHP.js": { scripts: {}, styles: { "StatusBadge.Bnd-q1nU.css": u7 = { file: "StatusBadge.Bnd-q1nU.css", resourceType: "style", prefetch: true, preload: true } }, preload: { "_Dje6XMHP.js": _5 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "Dje6XMHP.js", name: "StatusBadge", imports: ["_Cy-3SMU3.js"], css: ["StatusBadge.Bnd-q1nU.css"] }, "StatusBadge.Bnd-q1nU.css": u7, "_Cy-3SMU3.js": e }, prefetch: { "StatusBadge.Bnd-q1nU.css": u7 } }, "StatusBadge.Bnd-q1nU.css": { scripts: {}, styles: {}, preload: { "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: {} }, "_Drie8Mey.js": { scripts: {}, styles: { "UiModal.DBB4qB6Q.css": m5 = { file: "UiModal.DBB4qB6Q.css", resourceType: "style", prefetch: true, preload: true } }, preload: { "_Drie8Mey.js": B = { resourceType: "script", module: true, prefetch: true, preload: true, file: "Drie8Mey.js", name: "UiModal", imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js"], css: ["UiModal.DBB4qB6Q.css"] }, "UiModal.DBB4qB6Q.css": m5, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4 }, prefetch: { "UiModal.DBB4qB6Q.css": m5 } }, "UiModal.DBB4qB6Q.css": { scripts: {}, styles: {}, preload: { "UiModal.DBB4qB6Q.css": m5 }, prefetch: {} }, "_StatusBadge.Bnd-q1nU.css": { scripts: {}, styles: {}, preload: { "_StatusBadge.Bnd-q1nU.css": { resourceType: "style", prefetch: true, preload: true, file: "StatusBadge.Bnd-q1nU.css", src: "_StatusBadge.Bnd-q1nU.css" } }, prefetch: {} }, "_UiModal.DBB4qB6Q.css": { scripts: {}, styles: {}, preload: { "_UiModal.DBB4qB6Q.css": { resourceType: "style", prefetch: true, preload: true, file: "UiModal.DBB4qB6Q.css", src: "_UiModal.DBB4qB6Q.css" } }, prefetch: {} }, "_pages.Ba3O-VlV.css": { scripts: {}, styles: {}, preload: { "_pages.Ba3O-VlV.css": { resourceType: "style", prefetch: true, preload: true, file: "pages.Ba3O-VlV.css", src: "_pages.Ba3O-VlV.css" } }, prefetch: {} }, "layouts/portal.vue": { scripts: {}, styles: { "portal.klRHXpEn.css": D3 = { file: "portal.klRHXpEn.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7 }, preload: { "layouts/portal.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CGTBU1OG.js", name: "portal", src: "layouts/portal.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js"], css: ["portal.klRHXpEn.css"] }, "portal.klRHXpEn.css": D3, "_Cy-3SMU3.js": e, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4 }, prefetch: { "portal.klRHXpEn.css": D3, "entry.DEX35-jb.css": i7 } }, "portal.klRHXpEn.css": { scripts: {}, styles: {}, preload: { "portal.klRHXpEn.css": D3 }, prefetch: {} }, "layouts/public.vue": { scripts: {}, styles: { "public.DDYGdi06.css": g7 = { file: "public.DDYGdi06.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7 }, preload: { "layouts/public.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "Bw-AwTwM.js", name: "public", src: "layouts/public.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js"], css: ["public.DDYGdi06.css"] }, "public.DDYGdi06.css": g7, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r }, prefetch: { "public.DDYGdi06.css": g7, "entry.DEX35-jb.css": i7 } }, "public.DDYGdi06.css": { scripts: {}, styles: {}, preload: { "public.DDYGdi06.css": g7 }, prefetch: {} }, "pages/about.vue": { scripts: {}, styles: { "pages.Ba3O-VlV.css": j5 }, preload: { "pages/about.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DRPtDdyW.js", name: "about", src: "pages/about.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_Cj_qxPw7.js", "_DNmz-Owj.js"] }, "_Cy-3SMU3.js": e, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_DNmz-Owj.js": y5 }, prefetch: { "pages.Ba3O-VlV.css": j5 } }, "pages/applicant/applications/[id].vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7, "UiModal.DBB4qB6Q.css": m5 }, preload: { "pages/applicant/applications/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "LjUGY0W2.js", name: "_id_", src: "pages/applicant/applications/[id].vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js", "_Drie8Mey.js", "_BfBhOUX5.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7, "_Drie8Mey.js": B, "UiModal.DBB4qB6Q.css": m5, "_BfBhOUX5.js": a2 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7, "UiModal.DBB4qB6Q.css": m5 } }, "pages/applicant/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/applicant/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BpSbXgTD.js", name: "applicant", src: "pages/applicant/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_BfBhOUX5.js"] }, "_Cy-3SMU3.js": e, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_BfBhOUX5.js": a2 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/applicant/profile.vue": { scripts: {}, styles: { "profile.BeUgw6L1.css": f4 = { file: "profile.BeUgw6L1.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "UiModal.DBB4qB6Q.css": m5 }, preload: { "pages/applicant/profile.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DFn0F-hK.js", name: "profile", src: "pages/applicant/profile.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Drie8Mey.js", "_BfBhOUX5.js"], css: ["profile.BeUgw6L1.css"] }, "profile.BeUgw6L1.css": f4, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Drie8Mey.js": B, "UiModal.DBB4qB6Q.css": m5, "_BfBhOUX5.js": a2 }, prefetch: { "profile.BeUgw6L1.css": f4, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "UiModal.DBB4qB6Q.css": m5 } }, "profile.BeUgw6L1.css": { scripts: {}, styles: {}, preload: { "profile.BeUgw6L1.css": f4 }, prefetch: {} }, "pages/client/index.vue": { scripts: {}, styles: { "client.BKjTRYhf.css": v5 = { file: "client.BKjTRYhf.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/client/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BPDn-QWt.js", name: "client", src: "pages/client/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js", "_BswwKXkk.js"], css: ["client.BKjTRYhf.css"] }, "client.BKjTRYhf.css": v5, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7, "_BswwKXkk.js": d4 }, prefetch: { "client.BKjTRYhf.css": v5, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "client.BKjTRYhf.css": { scripts: {}, styles: {}, preload: { "client.BKjTRYhf.css": v5 }, prefetch: {} }, "pages/client/jobs/[id]/candidates/[recId].vue": { scripts: {}, styles: { "_recId_.ik-iL9lF.css": V = { file: "_recId_.ik-iL9lF.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7, "UiModal.DBB4qB6Q.css": m5 }, preload: { "pages/client/jobs/[id]/candidates/[recId].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CL3YpuSh.js", name: "_recId_", src: "pages/client/jobs/[id]/candidates/[recId].vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js", "_Drie8Mey.js", "_BfBhOUX5.js"], css: ["_recId_.ik-iL9lF.css"] }, "_recId_.ik-iL9lF.css": V, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7, "_Drie8Mey.js": B, "UiModal.DBB4qB6Q.css": m5, "_BfBhOUX5.js": a2 }, prefetch: { "_recId_.ik-iL9lF.css": V, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7, "UiModal.DBB4qB6Q.css": m5 } }, "_recId_.ik-iL9lF.css": { scripts: {}, styles: {}, preload: { "_recId_.ik-iL9lF.css": V }, prefetch: {} }, "pages/client/jobs/[id]/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/client/jobs/[id]/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DRoCcGAd.js", name: "_id_", src: "pages/client/jobs/[id]/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js", "_BfBhOUX5.js"] }, "_Cy-3SMU3.js": e, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7, "_BfBhOUX5.js": a2 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "pages/client/requests/[id].vue": { scripts: {}, styles: { "_id_.DZ2IOmF6.css": U = { file: "_id_.DZ2IOmF6.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/client/requests/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DoTJ3fRc.js", name: "_id_", src: "pages/client/requests/[id].vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js"], css: ["_id_.DZ2IOmF6.css"] }, "_id_.DZ2IOmF6.css": U, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: { "_id_.DZ2IOmF6.css": U, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "_id_.DZ2IOmF6.css": { scripts: {}, styles: {}, preload: { "_id_.DZ2IOmF6.css": U }, prefetch: {} }, "pages/client/requests/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/client/requests/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BQL4cDRA.js", name: "requests", src: "pages/client/requests/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js"] }, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "pages/client/requests/new.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/client/requests/new.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D_RMe9Vp.js", name: "new", src: "pages/client/requests/new.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/client/team.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/client/team.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BpKzGspg.js", name: "team", src: "pages/client/team.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/client/wallet.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/client/wallet.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BJcFph-C.js", name: "wallet", src: "pages/client/wallet.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_BfBhOUX5.js"] }, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_BfBhOUX5.js": a2 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/contact.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/contact.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "N2YC78jn.js", name: "contact", src: "pages/contact.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/employers.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/employers.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DiDZZEqL.js", name: "employers", src: "pages/employers.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/hr/clients/[id].vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "UiModal.DBB4qB6Q.css": m5 }, preload: { "pages/hr/clients/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D2FlIHZD.js", name: "_id_", src: "pages/hr/clients/[id].vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Drie8Mey.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Drie8Mey.js": B, "UiModal.DBB4qB6Q.css": m5 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "UiModal.DBB4qB6Q.css": m5 } }, "pages/hr/clients/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/hr/clients/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "gO-w-44M.js", name: "clients", src: "pages/hr/clients/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js"] }, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/hr/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/hr/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DOVKIWsO.js", name: "hr", src: "pages/hr/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_BswwKXkk.js"] }, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_BswwKXkk.js": d4 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/hr/jobs/[id]/applications/[id].vue": { scripts: {}, styles: { "_id_.CEypsjg0.css": x5 = { file: "_id_.CEypsjg0.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7, "UiModal.DBB4qB6Q.css": m5 }, preload: { "pages/hr/jobs/[id]/applications/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "RmaXoM4B.js", name: "_id_", src: "pages/hr/jobs/[id]/applications/[id].vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js", "_Drie8Mey.js", "_BfBhOUX5.js"], css: ["_id_.CEypsjg0.css"] }, "_id_.CEypsjg0.css": x5, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7, "_Drie8Mey.js": B, "UiModal.DBB4qB6Q.css": m5, "_BfBhOUX5.js": a2 }, prefetch: { "_id_.CEypsjg0.css": x5, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7, "UiModal.DBB4qB6Q.css": m5 } }, "_id_.CEypsjg0.css": { scripts: {}, styles: {}, preload: { "_id_.CEypsjg0.css": x5 }, prefetch: {} }, "pages/hr/jobs/[id]/index.vue": { scripts: {}, styles: { "_id_.vs7zx8Lw.css": T = { file: "_id_.vs7zx8Lw.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/hr/jobs/[id]/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BtKRVdOW.js", name: "_id_", src: "pages/hr/jobs/[id]/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js"], css: ["_id_.vs7zx8Lw.css"] }, "_id_.vs7zx8Lw.css": T, "_Cy-3SMU3.js": e, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: { "_id_.vs7zx8Lw.css": T, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "_id_.vs7zx8Lw.css": { scripts: {}, styles: {}, preload: { "_id_.vs7zx8Lw.css": T }, prefetch: {} }, "pages/hr/jobs/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/hr/jobs/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CbfbWFDk.js", name: "jobs", src: "pages/hr/jobs/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js"] }, "_Cy-3SMU3.js": e, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "pages/hr/requests/[id].vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/hr/requests/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BIr8ob7C.js", name: "_id_", src: "pages/hr/requests/[id].vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "pages/hr/requests/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/hr/requests/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "C8Mb2oub.js", name: "requests", src: "pages/hr/requests/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js", "_BswwKXkk.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7, "_BswwKXkk.js": d4 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "pages/index.vue": { scripts: {}, styles: { "pages.PW9KxdVE.css": h7 = { file: "pages.PW9KxdVE.css", resourceType: "style", prefetch: true, preload: true }, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BCnH4Cp6.js", name: "pages", src: "pages/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_BfBhOUX5.js"], css: ["pages.PW9KxdVE.css"] }, "pages.PW9KxdVE.css": h7, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DJy50lj5.js": r, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_BfBhOUX5.js": a2 }, prefetch: { "pages.PW9KxdVE.css": h7, "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages.PW9KxdVE.css": { scripts: {}, styles: {}, preload: { "pages.PW9KxdVE.css": h7 }, prefetch: {} }, "pages/jobs/[slug]/apply.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 }, preload: { "pages/jobs/[slug]/apply.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CLj74yN_.js", name: "apply", src: "pages/jobs/[slug]/apply.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DoRJ1LK7.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_Dje6XMHP.js"] }, "_Cy-3SMU3.js": e, "_DoRJ1LK7.js": p4, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_Dje6XMHP.js": _5, "StatusBadge.Bnd-q1nU.css": u7 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5, "StatusBadge.Bnd-q1nU.css": u7 } }, "pages/jobs/[slug]/index.vue": { scripts: {}, styles: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 }, preload: { "pages/jobs/[slug]/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CaL8Ygpz.js", name: "_slug_", src: "pages/jobs/[slug]/index.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_DJy50lj5.js", "../node_modules/nuxt/dist/app/entry.js", "_Cj_qxPw7.js", "_BfBhOUX5.js"] }, "_Cy-3SMU3.js": e, "_DJy50lj5.js": r, "../node_modules/nuxt/dist/app/entry.js": c3, "entry.DEX35-jb.css": i7, "_DoRJ1LK7.js": p4, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_BfBhOUX5.js": a2 }, prefetch: { "entry.DEX35-jb.css": i7, "pages.Ba3O-VlV.css": j5 } }, "pages/privacy.vue": { scripts: {}, styles: { "pages.Ba3O-VlV.css": j5 }, preload: { "pages/privacy.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "oYDUav9_.js", name: "privacy", src: "pages/privacy.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_Cj_qxPw7.js", "_DNmz-Owj.js"] }, "_Cy-3SMU3.js": e, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_DNmz-Owj.js": y5 }, prefetch: { "pages.Ba3O-VlV.css": j5 } }, "pages/terms.vue": { scripts: {}, styles: { "pages.Ba3O-VlV.css": j5 }, preload: { "pages/terms.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DsSn80zL.js", name: "terms", src: "pages/terms.vue", isDynamicEntry: true, imports: ["_Cy-3SMU3.js", "_Cj_qxPw7.js", "_DNmz-Owj.js"] }, "_Cy-3SMU3.js": e, "_Cj_qxPw7.js": n7, "pages.Ba3O-VlV.css": j5, "_DNmz-Owj.js": y5 }, prefetch: { "pages.Ba3O-VlV.css": j5 } } }, entrypoints: ["../node_modules/nuxt/dist/app/entry.js"], modules: { "../node_modules/nuxt/dist/app/components/error-404.vue": { file: "DUPanOht.js", resourceType: "script", mimeType: void 0, module: true }, "error-404.DpKY_dMl.css": { file: "error-404.DpKY_dMl.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/nuxt/dist/app/components/error-500.vue": { file: "Bb9PCuJ6.js", resourceType: "script", mimeType: void 0, module: true }, "error-500.CmR4p1fc.css": { file: "error-500.CmR4p1fc.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/nuxt/dist/app/entry.js": { file: "C6bivEq8.js", resourceType: "script", mimeType: void 0, module: true, dynamicImports: t2 }, "entry.DEX35-jb.css": { file: "entry.DEX35-jb.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_BfBhOUX5.js": { file: "BfBhOUX5.js", resourceType: "script", mimeType: void 0, module: true }, "_BswwKXkk.js": { file: "BswwKXkk.js", resourceType: "script", mimeType: void 0, module: true }, "_Cj_qxPw7.js": { file: "Cj_qxPw7.js", resourceType: "script", mimeType: void 0, module: true }, "pages.Ba3O-VlV.css": { file: "pages.Ba3O-VlV.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_Cy-3SMU3.js": { file: "Cy-3SMU3.js", resourceType: "script", mimeType: void 0, module: true }, "_DJy50lj5.js": { file: "DJy50lj5.js", resourceType: "script", mimeType: void 0, module: true }, "_DNmz-Owj.js": { file: "DNmz-Owj.js", resourceType: "script", mimeType: void 0, module: true }, "_Dje6XMHP.js": { file: "Dje6XMHP.js", resourceType: "script", mimeType: void 0, module: true }, "StatusBadge.Bnd-q1nU.css": { file: "StatusBadge.Bnd-q1nU.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_DoRJ1LK7.js": { file: "DoRJ1LK7.js", resourceType: "script", mimeType: void 0, module: true }, "_Drie8Mey.js": { file: "Drie8Mey.js", resourceType: "script", mimeType: void 0, module: true }, "UiModal.DBB4qB6Q.css": { file: "UiModal.DBB4qB6Q.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_StatusBadge.Bnd-q1nU.css": { file: "StatusBadge.Bnd-q1nU.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_UiModal.DBB4qB6Q.css": { file: "UiModal.DBB4qB6Q.css", resourceType: "style", mimeType: void 0, module: void 0 }, "_pages.Ba3O-VlV.css": { file: "pages.Ba3O-VlV.css", resourceType: "style", mimeType: void 0, module: void 0 }, "layouts/portal.vue": { file: "CGTBU1OG.js", resourceType: "script", mimeType: void 0, module: true }, "portal.klRHXpEn.css": { file: "portal.klRHXpEn.css", resourceType: "style", mimeType: void 0, module: void 0 }, "layouts/public.vue": { file: "Bw-AwTwM.js", resourceType: "script", mimeType: void 0, module: true }, "public.DDYGdi06.css": { file: "public.DDYGdi06.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/about.vue": { file: "DRPtDdyW.js", resourceType: "script", mimeType: void 0, module: true }, "pages/applicant/applications/[id].vue": { file: "LjUGY0W2.js", resourceType: "script", mimeType: void 0, module: true }, "pages/applicant/index.vue": { file: "BpSbXgTD.js", resourceType: "script", mimeType: void 0, module: true }, "pages/applicant/profile.vue": { file: "DFn0F-hK.js", resourceType: "script", mimeType: void 0, module: true }, "profile.BeUgw6L1.css": { file: "profile.BeUgw6L1.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/client/index.vue": { file: "BPDn-QWt.js", resourceType: "script", mimeType: void 0, module: true }, "client.BKjTRYhf.css": { file: "client.BKjTRYhf.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/client/jobs/[id]/candidates/[recId].vue": { file: "CL3YpuSh.js", resourceType: "script", mimeType: void 0, module: true }, "_recId_.ik-iL9lF.css": { file: "_recId_.ik-iL9lF.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/client/jobs/[id]/index.vue": { file: "DRoCcGAd.js", resourceType: "script", mimeType: void 0, module: true }, "pages/client/requests/[id].vue": { file: "DoTJ3fRc.js", resourceType: "script", mimeType: void 0, module: true }, "_id_.DZ2IOmF6.css": { file: "_id_.DZ2IOmF6.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/client/requests/index.vue": { file: "BQL4cDRA.js", resourceType: "script", mimeType: void 0, module: true }, "pages/client/requests/new.vue": { file: "D_RMe9Vp.js", resourceType: "script", mimeType: void 0, module: true }, "pages/client/team.vue": { file: "BpKzGspg.js", resourceType: "script", mimeType: void 0, module: true }, "pages/client/wallet.vue": { file: "BJcFph-C.js", resourceType: "script", mimeType: void 0, module: true }, "pages/contact.vue": { file: "N2YC78jn.js", resourceType: "script", mimeType: void 0, module: true }, "pages/employers.vue": { file: "DiDZZEqL.js", resourceType: "script", mimeType: void 0, module: true }, "pages/hr/clients/[id].vue": { file: "D2FlIHZD.js", resourceType: "script", mimeType: void 0, module: true }, "pages/hr/clients/index.vue": { file: "gO-w-44M.js", resourceType: "script", mimeType: void 0, module: true }, "pages/hr/index.vue": { file: "DOVKIWsO.js", resourceType: "script", mimeType: void 0, module: true }, "pages/hr/jobs/[id]/applications/[id].vue": { file: "RmaXoM4B.js", resourceType: "script", mimeType: void 0, module: true }, "_id_.CEypsjg0.css": { file: "_id_.CEypsjg0.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/hr/jobs/[id]/index.vue": { file: "BtKRVdOW.js", resourceType: "script", mimeType: void 0, module: true }, "_id_.vs7zx8Lw.css": { file: "_id_.vs7zx8Lw.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/hr/jobs/index.vue": { file: "CbfbWFDk.js", resourceType: "script", mimeType: void 0, module: true }, "pages/hr/requests/[id].vue": { file: "BIr8ob7C.js", resourceType: "script", mimeType: void 0, module: true }, "pages/hr/requests/index.vue": { file: "C8Mb2oub.js", resourceType: "script", mimeType: void 0, module: true }, "pages/index.vue": { file: "BCnH4Cp6.js", resourceType: "script", mimeType: void 0, module: true }, "pages.PW9KxdVE.css": { file: "pages.PW9KxdVE.css", resourceType: "style", mimeType: void 0, module: void 0 }, "pages/jobs/[slug]/apply.vue": { file: "CLj74yN_.js", resourceType: "script", mimeType: void 0, module: true }, "pages/jobs/[slug]/index.vue": { file: "CaL8Ygpz.js", resourceType: "script", mimeType: void 0, module: true }, "pages/privacy.vue": { file: "oYDUav9_.js", resourceType: "script", mimeType: void 0, module: true }, "pages/terms.vue": { file: "DsSn80zL.js", resourceType: "script", mimeType: void 0, module: true } }, resourceCount: 59 };
  }
});

// server/chunks/build/entry-styles-1.mjs-Covy7aAf.mjs
var a3;
var init_entry_styles_1_mjs_Covy7aAf = __esm({
  "server/chunks/build/entry-styles-1.mjs-Covy7aAf.mjs"() {
    a3 = ".toast[data-v-478fc14f]{background:var(--ink);color:#fff;border-radius:var(--radius-btn);box-shadow:var(--shadow-card);z-index:1000;max-width:24rem;padding:.75rem 1rem;position:fixed;bottom:1.5rem;right:1.5rem}.toast--danger[data-v-478fc14f]{background:var(--danger)}.toast-enter-active[data-v-478fc14f],.toast-leave-active[data-v-478fc14f]{transition:opacity .2s,transform .2s}.toast-enter-from[data-v-478fc14f],.toast-leave-to[data-v-478fc14f]{opacity:0;transform:translateY(.5rem)}";
  }
});

// server/chunks/build/entry-styles-2.mjs-oB8uxvEH.mjs
var e2;
var init_entry_styles_2_mjs_oB8uxvEH = __esm({
  "server/chunks/build/entry-styles-2.mjs-oB8uxvEH.mjs"() {
    e2 = ".root[data-v-fe147504]{flex-direction:column;min-height:100vh;display:flex}.demo-bar[data-v-fe147504]{background:var(--canvas);border-bottom:1px solid var(--line);flex-shrink:0;min-height:3rem}.demo-bar__inner[data-v-fe147504]{flex-wrap:wrap;align-items:center;gap:1rem;max-width:100%;min-height:3rem;padding:.5rem 1rem;display:flex}.segments[data-v-fe147504]{gap:.25rem;display:flex}.segments button[data-v-fe147504]{border:1px solid var(--line);background:var(--surface);border-radius:var(--radius-btn);cursor:pointer;height:2rem;padding:0 .75rem;font-size:.8125rem}.segments button.active[data-v-fe147504]{background:var(--tint);border-color:var(--primary);color:var(--primary);font-weight:500}.picker[data-v-fe147504]{align-items:center;gap:.5rem;display:flex}.picker-select[data-v-fe147504]{width:auto;min-width:10rem}.reset[data-v-fe147504]{margin-left:auto}";
  }
});

// server/chunks/build/entry-styles.CvjmjAsK.mjs
var entry_styles_CvjmjAsK_exports = {};
__export(entry_styles_CvjmjAsK_exports, {
  default: () => m6
});
var m6;
var init_entry_styles_CvjmjAsK = __esm({
  "server/chunks/build/entry-styles.CvjmjAsK.mjs"() {
    init_entry_styles_1_mjs_Covy7aAf();
    init_entry_styles_2_mjs_oB8uxvEH();
    m6 = [a3, e2];
  }
});

// server/chunks/build/ToastHost-styles.DuTsUA_4.mjs
var ToastHost_styles_DuTsUA_4_exports = {};
__export(ToastHost_styles_DuTsUA_4_exports, {
  default: () => t3
});
var t3;
var init_ToastHost_styles_DuTsUA_4 = __esm({
  "server/chunks/build/ToastHost-styles.DuTsUA_4.mjs"() {
    init_entry_styles_1_mjs_Covy7aAf();
    t3 = [a3];
  }
});

// server/chunks/build/DemoBar-styles.2WR639T_.mjs
var DemoBar_styles_2WR639T_exports = {};
__export(DemoBar_styles_2WR639T_exports, {
  default: () => t4
});
var t4;
var init_DemoBar_styles_2WR639T = __esm({
  "server/chunks/build/DemoBar-styles.2WR639T_.mjs"() {
    init_entry_styles_2_mjs_oB8uxvEH();
    t4 = [e2];
  }
});

// server/chunks/build/index-styles.CdKkkis3.mjs
var index_styles_CdKkkis3_exports = {};
__export(index_styles_CdKkkis3_exports, {
  default: () => a4
});
var a4;
var init_index_styles_CdKkkis3 = __esm({
  "server/chunks/build/index-styles.CdKkkis3.mjs"() {
    a4 = [".job-card[data-v-4d53ae47]{color:inherit;text-decoration:none;display:block}.job-card[data-v-4d53ae47]:hover{border-color:var(--primary)}"];
  }
});

// server/chunks/build/_recId_-styles.CSorjnQc.mjs
var recId_styles_CSorjnQc_exports = {};
__export(recId_styles_CSorjnQc_exports, {
  default: () => e3
});
var e3;
var init_recId_styles_CSorjnQc = __esm({
  "server/chunks/build/_recId_-styles.CSorjnQc.mjs"() {
    e3 = [".cv-panel[data-v-b63bf1cd]{border:1px solid var(--line);border-radius:var(--radius-btn);padding:1rem;position:relative;overflow:hidden}.cv-panel.watermark .wm[data-v-b63bf1cd]{color:#5e6a7859;pointer-events:none;text-align:center;justify-content:center;align-items:center;padding:1rem;font-size:1rem;display:flex;position:absolute;inset:0;transform:rotate(-18deg)}"];
  }
});

// server/chunks/build/_id_-styles.BPcyZ3zW.mjs
var id_styles_BPcyZ3zW_exports = {};
__export(id_styles_BPcyZ3zW_exports, {
  default: () => d5
});
var d5;
var init_id_styles_BPcyZ3zW = __esm({
  "server/chunks/build/_id_-styles.BPcyZ3zW.mjs"() {
    d5 = [".fields[data-v-17fbf5b1]{gap:.5rem;display:grid}.fields dt[data-v-17fbf5b1]{color:var(--ink-soft);font-size:.8125rem}.fields dd[data-v-17fbf5b1]{margin:0 0 .5rem}.thread[data-v-17fbf5b1]{border-top:1px solid var(--line);padding-top:1rem}"];
  }
});

// server/chunks/build/index-styles-2.CDq2e8zv.mjs
var index_styles_2_CDq2e8zv_exports = {};
__export(index_styles_2_CDq2e8zv_exports, {
  default: () => a5
});
var a5;
var init_index_styles_2_CDq2e8zv = __esm({
  "server/chunks/build/index-styles-2.CDq2e8zv.mjs"() {
    a5 = [".kanban[data-v-5b289daf]{grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:.75rem;display:grid}.col[data-v-5b289daf]{min-height:8rem}.kanban-card[data-v-5b289daf]{border:1px solid var(--line);border-radius:var(--radius-btn);color:inherit;margin-top:.5rem;padding:.75rem;text-decoration:none;display:block}"];
  }
});

// server/chunks/build/profile-styles.Dt32puYc.mjs
var profile_styles_Dt32puYc_exports = {};
__export(profile_styles_Dt32puYc_exports, {
  default: () => t5
});
var t5;
var init_profile_styles_Dt32puYc = __esm({
  "server/chunks/build/profile-styles.Dt32puYc.mjs"() {
    t5 = [".avatar[data-v-7fbfe43b]{background:var(--tint);width:3rem;height:3rem;color:var(--primary);border-radius:50%;justify-content:center;align-items:center;font-weight:600;display:flex}"];
  }
});

// server/chunks/build/index-styles-3.CVZ_3AJU.mjs
var index_styles_3_CVZ_3AJU_exports = {};
__export(index_styles_3_CVZ_3AJU_exports, {
  default: () => a6
});
var a6;
var init_index_styles_3_CVZ_3AJU = __esm({
  "server/chunks/build/index-styles-3.CVZ_3AJU.mjs"() {
    a6 = [".tiles[data-v-68c61133]{grid-template-columns:repeat(3,1fr);gap:.5rem;margin-top:.75rem;font-size:.8125rem;display:grid}.tile strong[data-v-68c61133]{font-variant-numeric:tabular-nums;display:block}"];
  }
});

// server/chunks/build/_id_-styles-2.CNJb40-F.mjs
var id_styles_2_CNJb40_F_exports = {};
__export(id_styles_2_CNJb40_F_exports, {
  default: () => a7
});
var a7;
var init_id_styles_2_CNJb40_F = __esm({
  "server/chunks/build/_id_-styles-2.CNJb40-F.mjs"() {
    a7 = [".internal[data-v-bd27155c],.internal-block[data-v-bd27155c]{background:var(--warn-tint);border-radius:var(--radius-btn);padding:.75rem}.status-select[data-v-bd27155c]{max-width:14rem}.cv-panel[data-v-bd27155c]{border:1px solid var(--line);border-radius:var(--radius-btn);padding:1rem}"];
  }
});

// server/chunks/build/error-404-styles.BF-pIkoo.mjs
var error_404_styles_BF_pIkoo_exports = {};
__export(error_404_styles_BF_pIkoo_exports, {
  default: () => t6
});
var t6;
var init_error_404_styles_BF_pIkoo = __esm({
  "server/chunks/build/error-404-styles.BF-pIkoo.mjs"() {
    t6 = [".grid[data-v-55415188]{display:grid}.mb-2[data-v-55415188]{margin-bottom:.5rem}.mb-4[data-v-55415188]{margin-bottom:1rem}.max-w-520px[data-v-55415188]{max-width:520px}.min-h-screen[data-v-55415188]{min-height:100vh}.w-full[data-v-55415188]{width:100%}.flex[data-v-55415188]{display:flex}.cursor-pointer[data-v-55415188]{cursor:pointer}.appearance-none[data-v-55415188]{appearance:none}.place-content-center[data-v-55415188]{place-content:center}.items-center[data-v-55415188]{align-items:center}.justify-center[data-v-55415188]{justify-content:center}.overflow-hidden[data-v-55415188]{overflow:hidden}.border-0[data-v-55415188]{border-width:0}.bg-transparent[data-v-55415188]{background-color:#0000}.bg-white[data-v-55415188]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-0[data-v-55415188]{padding:0}.px-2[data-v-55415188]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-55415188]{text-align:center}.text-\\[56px\\][data-v-55415188]{font-size:56px}.text-2xl[data-v-55415188]{font-size:1.5rem;line-height:2rem}.text-sm[data-v-55415188]{font-size:.875rem;line-height:1.25rem}.text-neutral-500[data-v-55415188]{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950[data-v-55415188]{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.hover\\:text-\\[\\#00DC82\\][data-v-55415188]:hover{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.text-inherit[data-v-55415188]{color:inherit}.font-medium[data-v-55415188]{font-weight:500}.font-semibold[data-v-55415188]{font-weight:600}.leading-none[data-v-55415188]{line-height:1}.tracking-wide[data-v-55415188]{letter-spacing:.025em}.font-sans[data-v-55415188]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-55415188]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.underline[data-v-55415188]{text-decoration-line:underline}.underline-offset-3[data-v-55415188]{text-underline-offset:3px}.antialiased[data-v-55415188]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-neutral-950[data-v-55415188]{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white[data-v-55415188]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (width>=640px){.sm\\:text-\\[72px\\][data-v-55415188]{font-size:72px}.sm\\:text-3xl[data-v-55415188]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// server/chunks/build/StatusBadge-styles.Ccw34qmw.mjs
var StatusBadge_styles_Ccw34qmw_exports = {};
__export(StatusBadge_styles_Ccw34qmw_exports, {
  default: () => a8
});
var a8;
var init_StatusBadge_styles_Ccw34qmw = __esm({
  "server/chunks/build/StatusBadge-styles.Ccw34qmw.mjs"() {
    a8 = [".badge--quiet[data-v-91995d1d]{color:var(--ink-soft);background:#eef1f4}.badge--moving[data-v-91995d1d]{background:var(--tint);color:var(--primary)}.badge--attention[data-v-91995d1d]{background:var(--warn-tint);color:var(--warn)}.badge--done[data-v-91995d1d]{background:var(--good-tint);color:var(--good)}.badge--stopped[data-v-91995d1d]{background:var(--danger-tint);color:var(--danger)}"];
  }
});

// server/chunks/build/error-500-styles.BipnMLxW.mjs
var error_500_styles_BipnMLxW_exports = {};
__export(error_500_styles_BipnMLxW_exports, {
  default: () => a9
});
var a9;
var init_error_500_styles_BipnMLxW = __esm({
  "server/chunks/build/error-500-styles.BipnMLxW.mjs"() {
    a9 = [".grid[data-v-30c65fa3]{display:grid}.mb-2[data-v-30c65fa3]{margin-bottom:.5rem}.mb-4[data-v-30c65fa3]{margin-bottom:1rem}.max-w-520px[data-v-30c65fa3]{max-width:520px}.min-h-screen[data-v-30c65fa3]{min-height:100vh}.place-content-center[data-v-30c65fa3]{place-content:center}.overflow-hidden[data-v-30c65fa3]{overflow:hidden}.bg-white[data-v-30c65fa3]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-30c65fa3]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-30c65fa3]{text-align:center}.text-\\[56px\\][data-v-30c65fa3]{font-size:56px}.text-2xl[data-v-30c65fa3]{font-size:1.5rem;line-height:2rem}.text-neutral-500[data-v-30c65fa3]{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950[data-v-30c65fa3]{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.font-medium[data-v-30c65fa3]{font-weight:500}.font-semibold[data-v-30c65fa3]{font-weight:600}.leading-none[data-v-30c65fa3]{line-height:1}.tracking-wide[data-v-30c65fa3]{letter-spacing:.025em}.font-sans[data-v-30c65fa3]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-30c65fa3]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased[data-v-30c65fa3]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-neutral-950[data-v-30c65fa3]{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white[data-v-30c65fa3]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (width>=640px){.sm\\:text-\\[72px\\][data-v-30c65fa3]{font-size:72px}.sm\\:text-3xl[data-v-30c65fa3]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// server/chunks/build/UiModal-styles.BPciU6Dd.mjs
var UiModal_styles_BPciU6Dd_exports = {};
__export(UiModal_styles_BPciU6Dd_exports, {
  default: () => e4
});
var e4;
var init_UiModal_styles_BPciU6Dd = __esm({
  "server/chunks/build/UiModal-styles.BPciU6Dd.mjs"() {
    e4 = [".modal-scrim[data-v-03b41ed7]{z-index:900;background:#1c243073;justify-content:center;align-items:center;padding:1rem;display:flex;position:fixed;inset:0}.modal[data-v-03b41ed7]{width:min(100%,32rem);max-height:90vh;overflow:auto}.footer[data-v-03b41ed7]{justify-content:flex-end;gap:.5rem;margin-top:1rem;display:flex}"];
  }
});

// server/chunks/build/PageHeader-styles.D7fkAPnT.mjs
var PageHeader_styles_D7fkAPnT_exports = {};
__export(PageHeader_styles_D7fkAPnT_exports, {
  default: () => a10
});
var a10;
var init_PageHeader_styles_D7fkAPnT = __esm({
  "server/chunks/build/PageHeader-styles.D7fkAPnT.mjs"() {
    a10 = [".page-header[data-v-1d5c932f]{justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:1.5rem}.actions[data-v-1d5c932f],.page-header[data-v-1d5c932f]{flex-wrap:wrap;display:flex}.actions[data-v-1d5c932f]{gap:.5rem}"];
  }
});

// server/chunks/build/public-styles.H_xvVNWt.mjs
var public_styles_H_xvVNWt_exports = {};
__export(public_styles_H_xvVNWt_exports, {
  default: () => a11
});
var a11;
var init_public_styles_H_xvVNWt = __esm({
  "server/chunks/build/public-styles.H_xvVNWt.mjs"() {
    a11 = [".public-layout[data-v-909b3630]{flex-direction:column;min-height:calc(100vh - 3rem);display:flex}.public-header[data-v-909b3630]{background:var(--surface);border-bottom:1px solid var(--line);justify-content:space-between;align-items:center;gap:1rem;padding:1rem 2rem;display:flex}.logo[data-v-909b3630]{color:var(--ink);font-size:1.125rem;font-weight:600;text-decoration:none}.nav[data-v-909b3630]{flex-wrap:wrap;gap:1rem;display:flex}.nav a[data-v-909b3630]{color:var(--ink-soft);font-size:.9375rem;text-decoration:none}.nav a.router-link-active[data-v-909b3630]{color:var(--primary);font-weight:500}.public-main[data-v-909b3630]{flex:1;min-width:0;padding:2rem}"];
  }
});

// server/chunks/build/portal-styles.D91EJ8Vf.mjs
var portal_styles_D91EJ8Vf_exports = {};
__export(portal_styles_D91EJ8Vf_exports, {
  default: () => e5
});
var e5;
var init_portal_styles_D91EJ8Vf = __esm({
  "server/chunks/build/portal-styles.D91EJ8Vf.mjs"() {
    e5 = [".portal-shell[data-v-49e0fd48]{align-items:stretch;min-height:calc(100vh - 3rem);display:flex}.sidenav[data-v-49e0fd48]{background:var(--surface);border-right:1px solid var(--line);flex-direction:column;flex-shrink:0;gap:1rem;width:15rem;padding:1.5rem 1rem;display:flex}.wordmark[data-v-49e0fd48]{letter-spacing:-.02em;font-weight:600}.side-links[data-v-49e0fd48]{flex-direction:column;gap:.25rem;display:flex}.side-links a[data-v-49e0fd48]{border-radius:var(--radius-btn);color:var(--ink-soft);padding:.5rem .75rem;text-decoration:none}.side-links a.router-link-active[data-v-49e0fd48]{background:var(--tint);color:var(--primary);font-weight:500}.sidenav-foot[data-v-49e0fd48]{margin-top:auto;position:relative}.bell[data-v-49e0fd48]{text-align:left;border:1px solid var(--line);border-radius:var(--radius-btn);cursor:pointer;background:0 0;width:100%;padding:.5rem .75rem;position:relative}.dot[data-v-49e0fd48]{background:var(--danger);border-radius:50%;width:.5rem;height:.5rem;position:absolute;top:50%;right:.75rem;transform:translateY(-50%)}.notif-panel[data-v-49e0fd48]{max-height:14rem;margin-bottom:.5rem;padding:.5rem;position:absolute;bottom:100%;left:0;right:0;overflow:auto}.notif[data-v-49e0fd48]{text-align:left;cursor:pointer;border-radius:var(--radius-btn);background:0 0;border:none;flex-direction:column;align-items:flex-start;width:100%;padding:.5rem;display:flex}.notif.unread[data-v-49e0fd48]{background:var(--tint)}.portal-main[data-v-49e0fd48]{flex:1;min-width:0;padding:2rem}@media (width<=60rem){.portal-shell[data-v-49e0fd48]{flex-direction:column}.sidenav[data-v-49e0fd48]{border-right:none;border-bottom:1px solid var(--line);width:100%;padding:.75rem 1rem}.side-links[data-v-49e0fd48]{white-space:nowrap;flex-direction:row;padding-bottom:.25rem;overflow-x:auto}.sidenav-foot[data-v-49e0fd48]{display:none}}"];
  }
});

// server/chunks/virtual/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e6,
  inlinedCSS: () => s3
});
var interopDefault, e6, s3;
var init_styles = __esm({
  "server/chunks/virtual/styles.mjs"() {
    interopDefault = /* @__PURE__ */ __name((e8) => e8.default || e8 || [], "interopDefault");
    e6 = { "../node_modules/nuxt/dist/app/entry.js": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_entry_styles_CvjmjAsK(), entry_styles_CvjmjAsK_exports)).then(interopDefault), "../node_modules/nuxt/dist/app/entry.js"), "components/ToastHost.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ToastHost_styles_DuTsUA_4(), ToastHost_styles_DuTsUA_4_exports)).then(interopDefault), "components/ToastHost.vue"), "components/DemoBar.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_DemoBar_styles_2WR639T(), DemoBar_styles_2WR639T_exports)).then(interopDefault), "components/DemoBar.vue"), "pages/index.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_CdKkkis3(), index_styles_CdKkkis3_exports)).then(interopDefault), "pages/index.vue"), "pages/client/jobs/[id]/candidates/[recId].vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_recId_styles_CSorjnQc(), recId_styles_CSorjnQc_exports)).then(interopDefault), "pages/client/jobs/[id]/candidates/[recId].vue"), "pages/client/requests/[id].vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_styles_BPcyZ3zW(), id_styles_BPcyZ3zW_exports)).then(interopDefault), "pages/client/requests/[id].vue"), "pages/hr/jobs/[id]/index.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_2_CDq2e8zv(), index_styles_2_CDq2e8zv_exports)).then(interopDefault), "pages/hr/jobs/[id]/index.vue"), "pages/applicant/profile.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_profile_styles_Dt32puYc(), profile_styles_Dt32puYc_exports)).then(interopDefault), "pages/applicant/profile.vue"), "pages/client/index.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_3_CVZ_3AJU(), index_styles_3_CVZ_3AJU_exports)).then(interopDefault), "pages/client/index.vue"), "pages/hr/jobs/[id]/applications/[id].vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_styles_2_CNJb40_F(), id_styles_2_CNJb40_F_exports)).then(interopDefault), "pages/hr/jobs/[id]/applications/[id].vue"), "../node_modules/nuxt/dist/app/components/error-404.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_BF_pIkoo(), error_404_styles_BF_pIkoo_exports)).then(interopDefault), "../node_modules/nuxt/dist/app/components/error-404.vue"), "components/StatusBadge.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_StatusBadge_styles_Ccw34qmw(), StatusBadge_styles_Ccw34qmw_exports)).then(interopDefault), "components/StatusBadge.vue"), "../node_modules/nuxt/dist/app/components/error-500.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_BipnMLxW(), error_500_styles_BipnMLxW_exports)).then(interopDefault), "../node_modules/nuxt/dist/app/components/error-500.vue"), "components/UiModal.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_UiModal_styles_BPciU6Dd(), UiModal_styles_BPciU6Dd_exports)).then(interopDefault), "components/UiModal.vue"), "components/PageHeader.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_PageHeader_styles_D7fkAPnT(), PageHeader_styles_D7fkAPnT_exports)).then(interopDefault), "components/PageHeader.vue"), "layouts/public.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_public_styles_H_xvVNWt(), public_styles_H_xvVNWt_exports)).then(interopDefault), "layouts/public.vue"), "layouts/portal.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_portal_styles_D91EJ8Vf(), portal_styles_D91EJ8Vf_exports)).then(interopDefault), "layouts/portal.vue") };
    s3 = { "error-404.DpKY_dMl.css": [["../node_modules/nuxt/dist/app/components/error-404.vue"]], "error-500.CmR4p1fc.css": [["../node_modules/nuxt/dist/app/components/error-500.vue"]], "pages.Ba3O-VlV.css": [["components/PageHeader.vue"]], "StatusBadge.Bnd-q1nU.css": [["components/StatusBadge.vue"]], "UiModal.DBB4qB6Q.css": [["components/UiModal.vue"]], "portal.klRHXpEn.css": [["layouts/portal.vue"]], "public.DDYGdi06.css": [["layouts/public.vue"]], "profile.BeUgw6L1.css": [["pages/applicant/profile.vue"]], "client.BKjTRYhf.css": [["pages/client/index.vue"]], "_recId_.ik-iL9lF.css": [["pages/client/jobs/[id]/candidates/[recId].vue"]], "_id_.DZ2IOmF6.css": [["pages/client/requests/[id].vue"]], "_id_.CEypsjg0.css": [["pages/hr/jobs/[id]/applications/[id].vue"]], "_id_.vs7zx8Lw.css": [["pages/hr/jobs/[id]/index.vue"]], "pages.PW9KxdVE.css": [["pages/index.vue"]] };
  }
});

// server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  a: () => ssrRenderComponent,
  b: () => baseURL,
  c: () => ssrRenderList,
  d: () => defineProdDiagnostics,
  e: () => ssrRenderAttrs,
  f: () => ssrInterpolate,
  g: () => ssrRenderClass,
  h: () => ssrRenderAttr,
  i: () => ssrRenderStyle,
  j: () => ssrLooseContain,
  k: () => we,
  l: () => ssrRenderTeleport,
  m: () => ssrRenderSlot,
  n: () => yt2,
  r: () => renderVNode,
  s: () => ssrRenderSuspense
});
import { Buffer as de } from "node:buffer";
function createResponseHeaderRecord(e8) {
  const read = /* @__PURE__ */ __name((t9) => {
    if ("string" != typeof t9 || "set-cookie" === t9.toLowerCase()) return;
    const r3 = e8.getHeader(t9);
    return void 0 !== r3 ? Array.isArray(r3) ? r3.join(", ") : String(r3) : void 0;
  }, "read"), t8 = {}, sync = /* @__PURE__ */ __name((e9) => {
    const r3 = read(e9);
    void 0 === r3 ? delete t8[e9.toLowerCase()] : t8[e9.toLowerCase()] = r3;
  }, "sync");
  for (const t9 of e8.getHeaderNames()) sync(t9);
  return new Proxy(t8, { get: /* @__PURE__ */ __name((e9, t9) => read(t9), "get"), has: /* @__PURE__ */ __name((e9, t9) => void 0 !== read(t9), "has"), set: /* @__PURE__ */ __name((t9, r3, n8) => ("string" == typeof r3 && (null == n8 ? e8.removeHeader(r3) : e8.setHeader(r3, n8), sync(r3)), true), "set"), deleteProperty: /* @__PURE__ */ __name((t9, r3) => ("string" == typeof r3 && (e8.removeHeader(r3), sync(r3)), true), "deleteProperty"), ownKeys: /* @__PURE__ */ __name(() => e8.getHeaderNames().filter((e9) => "set-cookie" !== e9), "ownKeys"), getOwnPropertyDescriptor(e9, t9) {
    const r3 = read(t9);
    return void 0 === r3 ? void 0 : { value: r3, writable: true, enumerable: true, configurable: true };
  } });
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...r3) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...r3);
}
function publicAssetsURL(...r3) {
  const n8 = useRuntimeConfig2().app, s5 = n8.cdnURL || n8.baseURL;
  return r3.length ? joinRelativeURL(s5, ...r3) : s5;
}
function lazyCachedFunction(e8) {
  let t8 = null;
  return () => (null === t8 && (t8 = e8().catch((e9) => {
    throw t8 = null, e9;
  })), t8);
}
function formatDiagnostic(e8) {
  const t8 = `[${e8.name}] ${e8.message}`, r3 = [];
  return e8.fix && r3.push(`fix: ${e8.fix}`), e8.sources?.length && r3.push(`sources: ${e8.sources.join(", ")}`), e8.docs && r3.push(`see: ${e8.docs}`), 0 === r3.length ? t8 : [t8, ...r3.map((e9, t9) => `${t9 < r3.length - 1 ? "\u251C\u25B6" : "\u2570\u25B6"} ${e9}`)].join("\n");
}
function toValueWithArgs(e8, ...t8) {
  return "function" == typeof e8 ? e8(...t8) : e8;
}
function createConsoleReporter({ method: e8 = "warn", formatter: t8 = formatDiagnostic } = {}) {
  return (r3, { method: n8 = e8 } = {}) => {
    console[n8](t8(r3));
  };
}
function deriveDocs(e8, t8) {
  return "string" == typeof e8 ? `${e8}/${t8.toLowerCase()}` : e8?.(t8);
}
function defineDiagnostics(e8) {
  const t8 = e8.reporters ?? [], r3 = {}, { docsBase: n8 } = e8;
  for (const s5 of Object.keys(e8.codes)) {
    const o6 = e8.codes[s5], i9 = false === o6.docs ? void 0 : o6.docs || deriveDocs(n8, s5), handle = /* @__PURE__ */ __name((e9 = {}, r4 = {}) => {
      const n9 = new ge2({ code: s5, why: toValueWithArgs(o6.why, e9), fix: toValueWithArgs(o6.fix, e9), docs: i9, cause: e9.cause, sources: e9.sources, data: toValueWithArgs(o6.data, e9) }, handle);
      for (const e10 of t8) e10(n9, r4);
      return n9;
    }, "handle");
    r3[s5] = handle;
  }
  return r3;
}
function defineProdDiagnostics(e8 = {}) {
  const { docsBase: t8, reporters: r3 = [] } = e8;
  return new Proxy({}, { get(e9, n8) {
    if ("string" != typeof n8) return;
    const handle = /* @__PURE__ */ __name((e10 = {}, s5 = {}) => {
      const o6 = deriveDocs(t8, n8), i9 = new ge2({ code: n8, why: o6 ?? "", docs: o6, cause: e10.cause, sources: e10.sources }, handle);
      for (const e11 of r3) e11(i9, s5);
      return i9;
    }, "handle");
    return handle;
  } });
}
function ssrRenderAttrs(e8, t8) {
  let r3 = "";
  for (let n8 in e8) {
    if (_e2(n8) || isOn(n8) || "textarea" === t8 && "value" === n8 || n8.startsWith(".")) continue;
    const s5 = e8[n8];
    n8.startsWith("^") && (n8 = n8.slice(1)), "class" === n8 ? r3 += ` class="${ssrRenderClass(s5)}"` : "style" === n8 ? r3 += ` style="${ssrRenderStyle(s5)}"` : "className" === n8 ? null != s5 && (r3 += ` class="${escapeHtml(String(s5))}"`) : r3 += ssrRenderDynamicAttr(n8, s5, t8);
  }
  return r3;
}
function ssrRenderDynamicAttr(e8, t8, r3) {
  if (!isRenderableAttrValue(t8)) return "";
  const n8 = r3 && (r3.indexOf("-") > 0 || ns(r3)) ? e8 : ls[e8] || e8.toLowerCase();
  return is(n8) || "hidden" === n8 && ("boolean" == typeof t8 || "number" == typeof t8) ? includeBooleanAttr(t8) ? ` ${n8}` : "" : isSSRSafeAttrName(n8) ? "" === t8 ? ` ${n8}` : ` ${n8}="${escapeHtml(t8)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${n8}`), "");
}
function ssrRenderAttr(e8, t8) {
  return isRenderableAttrValue(t8) ? ` ${e8}="${escapeHtml(t8)}"` : "";
}
function ssrRenderClass(e8) {
  return escapeHtml(normalizeClass(e8));
}
function ssrRenderStyle(e8) {
  if (!e8) return "";
  if (isString(e8)) return escapeHtml(e8);
  const t8 = normalizeStyle((function(e9) {
    if (!Ur(e9) && isObject(e9)) {
      const t9 = {};
      for (const r3 in e9) r3.startsWith(":--") ? t9[r3.slice(1)] = normalizeCssVarValue(e9[r3]) : t9[r3] = e9[r3];
      return t9;
    }
    return e9;
  })(e8));
  return escapeHtml(stringifyStyle(t8));
}
function ssrRenderComponent(e8, t8 = null, r3 = null, s5 = null, o6) {
  return renderComponentVNode(createVNode(e8, t8, r3), s5, o6);
}
function ssrRenderSlot(e8, t8, r3, n8, s5, o6, i9) {
  s5("<!--[-->"), (function(e9, t9, r4, n9, s6, o7, i10) {
    const a13 = e9[t9];
    if (a13) {
      const e10 = [], t10 = a13(r4 || {}, (t11) => {
        e10.push(t11);
      }, o7, "");
      if (Ur(t10)) {
        const e11 = be2(t10);
        e11 && renderVNodeChildren(s6, e11, o7, i10);
      } else {
        let t11 = true;
        for (let r5 = 0; r5 < e10.length; r5++) if (!isComment(e10[r5])) {
          t11 = false;
          break;
        }
        if (t11) ;
        else {
          let t12 = 0, r5 = e10.length;
          if (t12 < r5) for (let n10 = t12; n10 < r5; n10++) s6(e10[n10]);
        }
      }
    }
  })(e8, t8, r3, 0, s5, o6, i9), s5("<!--]-->");
}
function isComment(e8) {
  return !("string" != typeof e8 || !Se2.test(e8)) && (e8.length <= 8 || !e8.replace($e2, "").trim());
}
function ssrRenderTeleport(e8, t8, r3, n8, o6) {
  e8("<!--teleport start-->");
  const a13 = o6.appContext.provides[Xs], c5 = a13.__teleportBuffers || (a13.__teleportBuffers = {}), l8 = c5[r3] || (c5[r3] = []), f6 = l8.length;
  let u9;
  if (n8) t8(e8), u9 = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: e9, push: r4 } = createBuffer();
    r4("<!--teleport start anchor-->"), t8(r4), r4("<!--teleport anchor-->"), u9 = e9();
  }
  l8.splice(f6, 0, u9), (isPromise(u9) || Ur(u9) && u9.hasAsync) && (l8.hasAsync = true), e8("<!--teleport end-->");
}
function ssrInterpolate(e8) {
  return escapeHtml(toDisplayString(e8));
}
function ssrRenderList(e8, t8) {
  if (Ur(e8) || isString(e8)) for (let r3 = 0, n8 = e8.length; r3 < n8; r3++) t8(e8[r3], r3);
  else if ("number" == typeof e8) {
    if (!Number.isInteger(e8) || e8 < 0) return;
    for (let r3 = 0; r3 < e8; r3++) t8(r3 + 1, r3);
  } else if (isObject(e8)) if (e8[Symbol.iterator]) {
    let r3 = 0;
    for (const n8 of e8) t8(n8, r3++);
  } else {
    const r3 = Object.keys(e8);
    for (let n8 = 0, s5 = r3.length; n8 < s5; n8++) {
      const s6 = r3[n8];
      t8(e8[s6], s6, n8);
    }
  }
}
function ssrRenderSuspense(e8, { default: t8 }) {
  t8 ? t8() : e8("<!---->");
}
function ssrLooseContain(e8, t8) {
  return looseIndexOf(e8, t8) > -1;
}
function createBuffer() {
  let e8 = false;
  const t8 = [];
  return { getBuffer: /* @__PURE__ */ __name(() => t8, "getBuffer"), push(r3) {
    const n8 = isString(r3);
    e8 && n8 ? t8[t8.length - 1] += r3 : (t8.push(r3), e8 = n8, (isPromise(r3) || Ur(r3) && r3.hasAsync) && (t8.hasAsync = true));
  } };
}
function renderComponentVNode(e8, t8 = null, r3) {
  const n8 = e8.component = Re2(e8, t8, null), s5 = ve2(n8, true), o6 = isPromise(s5);
  let c5, l8 = n8.sp;
  if (o6 || l8) c5 = Promise.resolve(s5).then(() => {
    if (o6 && (l8 = n8.sp), l8) try {
      return Promise.all(l8.map((e9) => e9.call(n8.proxy))).catch(NOOP);
    } catch {
    }
  }).then(() => renderComponentSubTree(n8, r3));
  else try {
    return renderComponentSubTree(n8, r3);
  } catch (e9) {
    c5 = Promise.reject(e9);
  }
  return c5.catch(NOOP), c5;
}
function renderComponentSubTree(e8, t8) {
  const r3 = e8.type, { getBuffer: n8, push: s5 } = createBuffer();
  if (isFunction(r3)) {
    let n9 = Te2(e8);
    if (!r3.props) for (const t9 in e8.attrs) t9.startsWith("data-v-") && ((n9.props || (n9.props = {}))[t9] = "");
    renderVNode(s5, e8.subTree = n9, e8, t8);
  } else {
    e8.render && e8.render !== NOOP || e8.ssrRender || r3.ssrRender || !isString(r3.template) || (r3.ssrRender = (function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    })(r3.template));
    const n9 = e8.ssrRender || r3.ssrRender;
    if (n9) {
      let r4 = false !== e8.inheritAttrs ? e8.attrs : void 0, o6 = false, i9 = e8;
      for (; ; ) {
        const e9 = i9.vnode.scopeId;
        e9 && (o6 || (r4 = { ...r4 }, o6 = true), r4[e9] = "");
        const t9 = i9.parent;
        if (!t9 || !t9.subTree || t9.subTree !== i9.vnode) break;
        i9 = t9;
      }
      if (t8) {
        o6 || (r4 = { ...r4 });
        const e9 = t8.trim().split(" ");
        for (let t9 = 0; t9 < e9.length; t9++) r4[e9[t9]] = "";
      }
      const a13 = Ae2(e8);
      try {
        n9(e8.proxy, s5, e8, r4, e8.props, e8.setupState, e8.data, e8.ctx);
      } catch (t9) {
        handleError(t9, e8, 1);
      } finally {
        Ae2(a13);
      }
    } else e8.render && e8.render !== NOOP ? renderVNode(s5, e8.subTree = Te2(e8), e8, t8) : (r3.name || r3.__file, s5("<!---->"));
  }
  return n8();
}
function renderVNode(e8, t8, r3, n8) {
  const { type: s5, shapeFlag: o6, children: i9, dirs: a13, props: c5 } = t8;
  switch (a13 && (t8.props = (function(e9, t9, r4) {
    const n9 = [];
    for (let t10 = 0; t10 < r4.length; t10++) {
      const s6 = r4[t10], { dir: { getSSRProps: o7 } } = s6;
      if (o7) {
        const t11 = o7(s6, e9);
        t11 && n9.push(t11);
      }
    }
    return mergeProps(t9 || {}, ...n9);
  })(t8, c5, a13)), s5) {
    case To:
      e8(escapeHtml(i9));
      break;
    case Ao:
      e8(i9 ? `<!--${escapeHtmlComment(i9)}-->` : "<!---->");
      break;
    case Eo:
      e8(i9);
      break;
    case So:
      t8.slotScopeIds && (n8 = (n8 ? n8 + " " : "") + t8.slotScopeIds.join(" ")), e8("<!--[-->"), renderVNodeChildren(e8, i9, r3, n8), e8("<!--]-->");
      break;
    default:
      1 & o6 ? (function(e9, t9, r4, n9) {
        const s6 = t9.type;
        let { props: o7, children: i10, shapeFlag: a14, scopeId: c6 } = t9, l8 = `<${s6}`;
        o7 && (l8 += ssrRenderAttrs(o7, s6));
        const f6 = [], appendScopeId = /* @__PURE__ */ __name((e10) => {
          !e10 || o7 && hasOwn(o7, e10) || f6.includes(e10) || (l8 += ` ${e10}`, f6.push(e10));
        }, "appendScopeId");
        c6 && appendScopeId(c6);
        let u9 = r4, p6 = t9;
        for (; u9 && p6 === u9.subTree; ) p6 = u9.vnode, p6.scopeId && appendScopeId(p6.scopeId), u9 = u9.parent;
        if (n9) {
          const e10 = n9.trim().split(" ");
          for (let t10 = 0; t10 < e10.length; t10++) appendScopeId(e10[t10]);
        }
        if (e9(l8 + ">"), !rs(s6)) {
          let t10 = false;
          o7 && (null != o7.innerHTML ? (t10 = true, e9(String(o7.innerHTML))) : null != o7.textContent ? (t10 = true, e9(escapeHtml(o7.textContent))) : "textarea" === s6 && null != o7.value && (t10 = true, e9(escapeHtml(o7.value)))), t10 || (8 & a14 ? e9(escapeHtml(i10)) : 16 & a14 && renderVNodeChildren(e9, i10, r4, n9)), e9(`</${s6}>`);
        }
      })(e8, t8, r3, n8) : 6 & o6 ? e8(renderComponentVNode(t8, r3, n8)) : 64 & o6 ? (function(e9, t9, r4, n9) {
        const s6 = t9.props && t9.props.to, o7 = t9.props && t9.props.disabled;
        if (!s6) return [];
        if (!isString(s6)) return [];
        ssrRenderTeleport(e9, (e10) => {
          renderVNodeChildren(e10, t9.children, r4, n9);
        }, s6, o7 || "" === o7, r4);
      })(e8, t8, r3, n8) : 128 & o6 && renderVNode(e8, t8.ssContent, r3, n8);
  }
}
function renderVNodeChildren(e8, t8, r3, n8) {
  for (let s5 = 0; s5 < t8.length; s5++) renderVNode(e8, Oe2(t8[s5]), r3, n8);
}
function nestedUnrollBuffer(e8, t8, r3) {
  if (!e8.hasAsync) return t8 + unrollBufferSync$1(e8);
  let n8 = t8;
  for (let t9 = r3; t9 < e8.length; t9 += 1) {
    const r4 = e8[t9];
    if (isString(r4)) {
      n8 += r4;
      continue;
    }
    if (isPromise(r4)) return r4.then((r5) => (e8[t9] = r5, nestedUnrollBuffer(e8, n8, t9)));
    const s5 = nestedUnrollBuffer(r4, n8, 0);
    if (isPromise(s5)) return s5.then((r5) => (e8[t9] = r5, nestedUnrollBuffer(e8, "", t9)));
    n8 = s5;
  }
  return n8;
}
function unrollBuffer$1(e8) {
  return nestedUnrollBuffer(e8, "", 0);
}
function unrollBufferSync$1(e8) {
  let t8 = "";
  for (let r3 = 0; r3 < e8.length; r3++) {
    let n8 = e8[r3];
    isString(n8) ? t8 += n8 : t8 += unrollBufferSync$1(n8);
  }
  return t8;
}
async function renderToString(e8, t8 = {}) {
  if (xe2(e8)) return renderToString(createApp({ render: /* @__PURE__ */ __name(() => e8, "render") }), t8);
  const o6 = createVNode(e8._component, e8._props);
  let i9, c5;
  o6.appContext = e8._context, e8.provide(Xs, t8);
  try {
    i9 = await renderComponentVNode(o6), c5 = await unrollBuffer$1(i9), await (async function(e9) {
      if (e9.__teleportBuffers) {
        e9.teleports = e9.teleports || {};
        for (const t9 in e9.__teleportBuffers) e9.teleports[t9] = await unrollBuffer$1(e9.__teleportBuffers[t9]);
      }
    })(t8);
  } catch (e9) {
    throw (function(e10, t9) {
      const r3 = t9.__watcherHandles ? t9.__watcherHandles.length : 0;
      try {
        stopWatchers(t9);
      } catch {
      }
      (async () => {
        e10 && await settleBuffer(e10);
        for (const e11 in t9.__teleportBuffers) await settleBuffer(t9.__teleportBuffers[e11]);
        stopWatchers(t9, r3);
      })().catch(NOOP);
    })(i9, t8), e9;
  }
  return stopWatchers(t8), c5;
}
function stopWatchers(e8, t8 = 0) {
  const r3 = e8.__watcherHandles;
  if (r3) for (let e9 = t8; e9 < r3.length; e9++) r3[e9]();
}
async function settleBuffer(e8) {
  if (e8.hasAsync) for (let t8 of e8) try {
    isPromise(t8) && (t8 = await t8), isString(t8) || await settleBuffer(t8);
  } catch {
  }
}
function createMergeSlots(e8 = 16) {
  return { slotOf: /* @__PURE__ */ Object.create(null), count: 0, idOf: [], metaOf: [], scripts: new Uint8Array(e8), styles: new Uint8Array(e8), preload: new Uint8Array(e8), prefetch: new Uint8Array(e8), epoch: 0 };
}
function slotFor(e8, t8, r3) {
  let n8 = e8.slotOf[t8];
  if (void 0 === n8 && (n8 = e8.count++, e8.slotOf[t8] = n8, e8.idOf.push(t8), e8.metaOf.push(r3), n8 >= e8.scripts.length)) {
    const t9 = 2 * e8.scripts.length;
    for (const r4 of ["scripts", "styles", "preload", "prefetch"]) {
      const n9 = new Uint8Array(t9);
      n9.set(e8[r4]), e8[r4] = n9;
    }
  }
  return n8;
}
function getModuleDependencies(e8, t8) {
  if (t8._dependencies[e8]) return t8._dependencies[e8];
  const r3 = t8._dependencies[e8] = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
  if (!t8.manifest) return r3;
  const n8 = t8.manifest[e8];
  if (!n8) return r3;
  n8.file && (n8.preload && (r3.preload[e8] = n8), (n8.isEntry || n8.sideEffects) && (r3.scripts[e8] = n8));
  for (const e9 of n8.css || []) {
    const n9 = t8.manifest[e9];
    r3.styles[e9] = r3.prefetch[e9] = n9, n9.preload && (r3.preload[e9] = n9);
  }
  for (const e9 of n8.assets || []) {
    const n9 = t8.manifest[e9];
    r3.prefetch[e9] = n9, n9.preload && (r3.preload[e9] = n9);
  }
  if (n8.imports) for (const e9 of n8.imports) {
    const n9 = getModuleDependencies(e9, t8);
    Object.assign(r3.styles, n9.styles), Object.assign(r3.preload, n9.preload), Object.assign(r3.prefetch, n9.prefetch);
  }
  return r3;
}
function setAlias(e8, t8, r3, n8, s5) {
  const o6 = e8._dependencySetAliases;
  if (o6.set(t8, { ids: [...r3], deps: n8 }), o6.size > s5) {
    const e9 = o6.keys().next().value;
    void 0 !== e9 && o6.delete(e9);
  }
}
function collectInto(e8, t8, r3) {
  for (const n8 in e8) t8.push(slotFor(r3, n8, e8[n8]));
}
function collectPrefetch(e8, t8, r3, n8, s5) {
  const { styles: o6, preload: i9 } = e8;
  for (const e9 in t8) {
    const a13 = t8[e9];
    if (!a13.prefetch || e9 in i9 || e9 in o6) continue;
    const c5 = slotFor(s5, e9, a13);
    n8.has(c5) || (n8.add(c5), r3.push(c5));
  }
}
function getFlatDependencies(e8, t8) {
  const r3 = t8._flatDependencies[e8];
  if (void 0 !== r3) return r3;
  const n8 = getModuleDependencies(e8, t8), s5 = t8._mergeSlots, o6 = { scriptSlots: [], styleSlots: [], preloadSlots: [], prefetchSlots: [] };
  collectInto(n8.scripts, o6.scriptSlots, s5), collectInto(n8.styles, o6.styleSlots, s5), (function(e9, t9, r4) {
    const { styles: n9, preload: s6 } = e9;
    for (const e10 in s6) e10 in n9 || t9.push(slotFor(r4, e10, s6[e10]));
  })(n8, o6.preloadSlots, s5);
  const i9 = /* @__PURE__ */ new Set();
  collectPrefetch(n8, n8.prefetch, o6.prefetchSlots, i9, s5);
  const a13 = t8.manifest?.[e8]?.dynamicImports || t8.precomputed?.modules[e8]?.dynamicImports;
  if (a13) for (const e9 of a13) {
    const r4 = getModuleDependencies(e9, t8);
    collectPrefetch(n8, r4.scripts, o6.prefetchSlots, i9, s5), collectPrefetch(n8, r4.styles, o6.prefetchSlots, i9, s5), collectPrefetch(n8, r4.preload, o6.prefetchSlots, i9, s5);
  }
  return t8._flatDependencies[e8] = o6, o6;
}
function getRequestDependencies(e8, t8, r3) {
  const n8 = r3?.exclude ? new Set(r3.exclude) : void 0, s5 = n8 && n8.size > 0;
  if (!s5 && e8._requestDependencies) return e8._requestDependencies;
  const o6 = e8.modules || e8._registeredComponents;
  let i9 = 0, a13 = false;
  if (!s5 && t8._dependencySetsCacheSize > 0) {
    i9 = (function(e9, t9, r5) {
      let n9 = e9._aliasIdHashes;
      e9._aliasIdHashCount > 65536 && (n9 = e9._aliasIdHashes = /* @__PURE__ */ Object.create(null), e9._aliasIdHashCount = 0, e9._dependencySetAliases.clear());
      let s6 = 0, o7 = 1, i10 = 0;
      for (const r6 of t9) {
        let t10 = n9[r6];
        void 0 === t10 && (t10 = 2654435761 * e9._aliasIdHashCount++ | 0, n9[r6] = t10), s6 = s6 + t10 | 0, o7 = o7 ^ t10 + i10 | 0, i10++;
      }
      if (r5) for (const t10 of r5) {
        let r6 = n9[t10];
        void 0 === r6 && (r6 = 2654435761 * e9._aliasIdHashCount++ | 0, n9[t10] = r6), s6 = s6 + r6 | 0, o7 = o7 ^ r6 + i10 | 0, i10++;
      }
      return Math.imul(s6, 2654435761) ^ Math.imul(o7, 40503) ^ i10 | 0;
    })(t8, t8._entrypoints, o6), a13 = true;
    const r4 = (function(e9, t9, r5, n9, s6) {
      const o7 = e9._dependencySetAliases.get(t9);
      if (void 0 === o7) return;
      const { ids: i10 } = o7;
      let a14 = 0;
      for (const e10 of n9) if (i10[a14++] !== e10) return;
      if (s6) {
        for (const e10 of s6) if (i10[a14++] !== e10) return;
      }
      return a14 === i10.length ? o7.deps : void 0;
    })(t8, i9, 0, t8._entrypoints, o6);
    if (void 0 !== r4) return e8._requestDependencies = r4, r4;
  }
  const c5 = t8._idScratch;
  if (c5.length = 0, s5) {
    for (const e9 of t8._entrypoints) n8.has(e9) || c5.push(e9);
    if (o6) for (const e9 of o6) n8.has(e9) || c5.push(e9);
  } else {
    for (const e9 of t8._entrypoints) c5.push(e9);
    if (o6) for (const e9 of o6) c5.push(e9);
  }
  const l8 = (function(e9, t9, r4, n9) {
    const s6 = t9._dependencySetsCacheSize, o7 = s6 > 0;
    let i10 = "";
    if (o7) {
      i10 = e9.length <= 1 ? e9[0] || "" : [...new Set(e9)].sort().join(",");
      const o8 = t9._dependencySets.get(i10);
      if (void 0 !== o8) return t9._dependencySets.size >= s6 && (t9._dependencySets.delete(i10), t9._dependencySets.set(i10, o8)), n9 && setAlias(t9, r4, e9, o8, s6), o8;
    }
    const a14 = [], c6 = [], l9 = [], f6 = [], u9 = t9._mergeSlots;
    let p6 = u9.epoch + 1;
    p6 > 255 && (p6 = 1, u9.scripts.fill(0), u9.styles.fill(0), u9.preload.fill(0), u9.prefetch.fill(0)), u9.epoch = p6;
    let d7 = u9.scripts, h8 = u9.styles, y7 = u9.preload, g9 = u9.prefetch;
    for (let r5 = 0; r5 < e9.length; r5++) {
      const n10 = getFlatDependencies(e9[r5], t9);
      u9.scripts !== d7 && (d7 = u9.scripts, h8 = u9.styles, y7 = u9.preload, g9 = u9.prefetch);
      for (let e10 = 0; e10 < n10.scriptSlots.length; e10++) {
        const t10 = n10.scriptSlots[e10];
        d7[t10] !== p6 && (d7[t10] = p6, c6.push(t10));
      }
      for (let e10 = 0; e10 < n10.styleSlots.length; e10++) {
        const t10 = n10.styleSlots[e10];
        h8[t10] !== p6 && (h8[t10] = p6, a14.push(t10));
      }
      for (let e10 = 0; e10 < n10.preloadSlots.length; e10++) {
        const t10 = n10.preloadSlots[e10];
        y7[t10] !== p6 && (y7[t10] = p6, l9.push(t10));
      }
      for (let e10 = 0; e10 < n10.prefetchSlots.length; e10++) {
        const t10 = n10.prefetchSlots[e10];
        g9[t10] !== p6 && (g9[t10] = p6, f6.push(t10));
      }
    }
    let m8 = 0;
    for (let e10 = 0; e10 < l9.length; e10++) {
      const t10 = l9[e10];
      h8[t10] !== p6 && (l9[m8] = t10, m8++);
    }
    l9.length = m8, m8 = 0;
    const _7 = u9.metaOf;
    for (let e10 = 0; e10 < f6.length; e10++) {
      const t10 = f6[e10];
      _7[t10].prefetch && y7[t10] !== p6 && h8[t10] !== p6 && (f6[m8] = t10, m8++);
    }
    f6.length = m8;
    const b6 = { styleSlots: a14, scriptSlots: c6, preloadSlots: l9, prefetchSlots: f6, mergeSlots: u9 }, S5 = new Proxy({ [ke2]: b6 }, je2);
    if (t9._renderedCache.set(S5, { order: b6 }), o7) {
      if (t9._dependencySets.set(i10, S5), t9._dependencySets.size > s6) {
        const e10 = t9._dependencySets.keys().next().value;
        void 0 !== e10 && t9._dependencySets.delete(e10);
      }
      n9 && setAlias(t9, r4, e9, S5, s6);
    }
    return S5;
  })(c5, t8, i9, a13);
  return s5 || (e8._requestDependencies = l8), l8;
}
function getRenderedOutputs(e8, t8) {
  let r3 = e8._renderedCache.get(t8);
  return r3 || (r3 = {}, e8._renderedCache.set(t8, r3)), r3;
}
function isRecordKey(e8) {
  return "scripts" === e8 || "styles" === e8 || "preload" === e8 || "prefetch" === e8;
}
function materialiseRecord(e8, t8) {
  const r3 = e8[ke2], n8 = (function(e9, t9) {
    const { idOf: r4, metaOf: n9 } = e9, s5 = {};
    for (let e10 = 0; e10 < t9.length; e10++) {
      const o6 = t9[e10];
      s5[r4[o6]] = n9[o6];
    }
    return s5;
  })(r3.mergeSlots, r3[Ce2[t8]]);
  return e8[t8] = n8, n8;
}
function collectOrder(e8, t8, r3) {
  for (const n8 in e8) t8.push(slotFor(r3, n8, e8[n8]));
}
function getOrder(e8, t8, r3) {
  if (r3.order) return r3.order;
  const n8 = e8._mergeSlots, s5 = { styleSlots: [], scriptSlots: [], preloadSlots: [], prefetchSlots: [], mergeSlots: n8 };
  return collectOrder(t8.styles, s5.styleSlots, n8), collectOrder(t8.scripts, s5.scriptSlots, n8), collectOrder(t8.preload, s5.preloadSlots, n8), collectOrder(t8.prefetch, s5.prefetchSlots, n8), r3.order = s5, s5;
}
function renderStyles(e8, t8) {
  const r3 = getRequestDependencies(e8, t8), n8 = getRenderedOutputs(t8, r3);
  if (void 0 !== n8.styles) return n8.styles;
  const s5 = getOrder(t8, r3, n8), o6 = t8._mergeSlots.metaOf;
  let i9 = "";
  const a13 = t8._fragments.style;
  for (let e9 = 0; e9 < s5.styleSlots.length; e9++) {
    const r4 = s5.styleSlots[e9];
    let n9 = a13[r4];
    void 0 === n9 && (n9 = a13[r4] = `<link rel="stylesheet" href="${t8.buildAssetsURL(o6[r4].file)}" crossorigin>`), i9 += n9;
  }
  return n8.styles = i9, i9;
}
function isScriptResource(e8) {
  return !!e8.module || "script" === e8.resourceType;
}
function renderResourceHints(e8, t8, r3) {
  const n8 = getRequestDependencies(e8, t8, r3), s5 = getRenderedOutputs(t8, n8), o6 = false !== r3?.scripts, i9 = o6 ? s5.hints : s5.hintsWithoutScripts;
  if (void 0 !== i9) return i9;
  const a13 = getOrder(t8, n8, s5), c5 = t8._mergeSlots.metaOf;
  let l8 = "";
  const f6 = t8._fragments.preloadHint;
  for (let e9 = 0; e9 < a13.preloadSlots.length; e9++) {
    const r4 = a13.preloadSlots[e9];
    if (!o6 && isScriptResource(c5[r4])) continue;
    let n9 = f6[r4];
    if (void 0 === n9) {
      const e10 = c5[r4], s6 = t8.buildAssetsURL(e10.file), o7 = e10.module ? "modulepreload" : "preload", i10 = "style" === e10.resourceType || "font" === e10.resourceType || "script" === e10.resourceType || e10.module ? " crossorigin" : "";
      n9 = e10.resourceType && e10.mimeType ? `<link rel="${o7}" as="${e10.resourceType}" type="${e10.mimeType}"${i10} href="${s6}">` : e10.resourceType ? `<link rel="${o7}" as="${e10.resourceType}"${i10} href="${s6}">` : `<link rel="${o7}"${i10} href="${s6}">`, f6[r4] = n9;
    }
    l8 += n9;
  }
  const u9 = t8._fragments.prefetchHint;
  for (let e9 = 0; e9 < a13.prefetchSlots.length; e9++) {
    const r4 = a13.prefetchSlots[e9];
    if (!o6 && isScriptResource(c5[r4])) continue;
    let n9 = u9[r4];
    if (void 0 === n9) {
      const e10 = c5[r4], s6 = t8.buildAssetsURL(e10.file), o7 = "style" === e10.resourceType || "font" === e10.resourceType || "script" === e10.resourceType || e10.module ? " crossorigin" : "";
      n9 = e10.resourceType && e10.mimeType ? `<link rel="prefetch" as="${e10.resourceType}" type="${e10.mimeType}"${o7} href="${s6}">` : e10.resourceType ? `<link rel="prefetch" as="${e10.resourceType}"${o7} href="${s6}">` : `<link rel="prefetch"${o7} href="${s6}">`, u9[r4] = n9;
    }
    l8 += n9;
  }
  return o6 ? s5.hints = l8 : s5.hintsWithoutScripts = l8, l8;
}
function renderResourceHeaders(e8, t8, r3) {
  const n8 = getRequestDependencies(e8, t8, r3), s5 = getRenderedOutputs(t8, n8), o6 = false !== r3?.scripts, i9 = o6 ? s5.headerLink : s5.headerLinkWithoutScripts;
  if (void 0 !== i9) return { link: i9 };
  const a13 = getOrder(t8, n8, s5), c5 = t8._mergeSlots.metaOf;
  let l8 = "";
  const f6 = t8._fragments.preloadHeader;
  for (let e9 = 0; e9 < a13.preloadSlots.length; e9++) {
    const r4 = a13.preloadSlots[e9];
    if (!o6 && isScriptResource(c5[r4])) continue;
    let n9 = f6[r4];
    if (void 0 === n9) {
      const e10 = c5[r4];
      n9 = `<${t8.buildAssetsURL(e10.file).replace(Le2, encodeURIComponent)}>; rel="${e10.module ? "modulepreload" : "preload"}"`, e10.resourceType && (n9 += `; as="${e10.resourceType}"`), e10.mimeType && (n9 += `; type="${e10.mimeType}"`), ("style" === e10.resourceType || "font" === e10.resourceType || "script" === e10.resourceType || e10.module) && (n9 += "; crossorigin"), f6[r4] = n9;
    }
    l8 = l8 ? `${l8}, ${n9}` : n9;
  }
  const u9 = t8._fragments.prefetchHeader;
  for (let e9 = 0; e9 < a13.prefetchSlots.length; e9++) {
    const r4 = a13.prefetchSlots[e9];
    if (!o6 && isScriptResource(c5[r4])) continue;
    let n9 = u9[r4];
    if (void 0 === n9) {
      const e10 = c5[r4];
      n9 = `<${t8.buildAssetsURL(e10.file).replace(Le2, encodeURIComponent)}>; rel="prefetch"`, e10.resourceType && (n9 += `; as="${e10.resourceType}"`), e10.mimeType && (n9 += `; type="${e10.mimeType}"`), ("style" === e10.resourceType || "font" === e10.resourceType || "script" === e10.resourceType || e10.module) && (n9 += "; crossorigin"), u9[r4] = n9;
    }
    l8 = l8 ? `${l8}, ${n9}` : n9;
  }
  return o6 ? s5.headerLink = l8 : s5.headerLinkWithoutScripts = l8, { link: l8 };
}
function hrefFor(e8, t8, r3) {
  const n8 = e8._fragments.href;
  let s5 = n8[t8];
  return void 0 === s5 && (s5 = n8[t8] = e8.buildAssetsURL(r3.file)), s5;
}
function renderScripts(e8, t8) {
  const r3 = getRequestDependencies(e8, t8), n8 = getRenderedOutputs(t8, r3);
  if (void 0 !== n8.scripts) return n8.scripts;
  const s5 = getOrder(t8, r3, n8), o6 = t8._mergeSlots.metaOf;
  let i9 = "";
  const a13 = t8._fragments.script;
  for (let e9 = 0; e9 < s5.scriptSlots.length; e9++) {
    const r4 = s5.scriptSlots[e9];
    let n9 = a13[r4];
    if (void 0 === n9) {
      const i10 = o6[s5.scriptSlots[e9]];
      n9 = a13[r4] = i10.module ? `<script type="module" src="${t8.buildAssetsURL(i10.file)}" crossorigin><\/script>` : `<script src="${t8.buildAssetsURL(i10.file)}" defer crossorigin><\/script>`;
    }
    i9 += n9;
  }
  return n8.scripts = i9, i9;
}
function createRenderer(e8, t8) {
  const r3 = (function({ manifest: e9, precomputed: t9, buildAssetsURL: r4, dependencySetsCacheSize: n8 }) {
    if (!e9 && !t9) throw new Error("Either manifest or precomputed data must be provided");
    const s5 = "number" == typeof n8 && Number.isFinite(n8) && n8 > 0 ? Math.floor(n8) : void 0 === n8 ? 1e3 : 0, o6 = [];
    let i9 = 16;
    if (t9) i9 = t9.resourceCount ?? 16;
    else if (e9) for (const t10 in e9) i9++, e9[t10].isEntry && o6.push(t10);
    const a13 = { buildAssetsURL: r4 || withLeadingSlash, manifest: e9, precomputed: t9, updateManifest: /* @__PURE__ */ __name(function(e10) {
      a13.manifest = e10, a13._dependencies = {}, a13._dependencySets.clear(), a13._dependencySetAliases.clear(), a13._aliasIdHashes = /* @__PURE__ */ Object.create(null), a13._aliasIdHashCount = 0, a13._renderedCache = /* @__PURE__ */ new WeakMap(), a13._fragments = { style: [], script: [], preloadHint: [], prefetchHint: [], preloadHeader: [], prefetchHeader: [], href: [] }, a13._flatDependencies = /* @__PURE__ */ Object.create(null);
      let t10 = 16;
      const r5 = [];
      for (const n9 in e10) t10++, e10[n9].isEntry && r5.push(n9);
      a13._mergeSlots = createMergeSlots(Math.min(t10, 8192)), a13._entrypoints = r5;
    }, "updateManifest"), _dependencies: {}, _dependencySets: /* @__PURE__ */ new Map(), _dependencySetAliases: /* @__PURE__ */ new Map(), _aliasIdHashes: /* @__PURE__ */ Object.create(null), _aliasIdHashCount: 0, _dependencySetsCacheSize: s5, _entrypoints: [], _renderedCache: /* @__PURE__ */ new WeakMap(), _fragments: { style: [], script: [], preloadHint: [], prefetchHint: [], preloadHeader: [], prefetchHeader: [], href: [] }, _flatDependencies: /* @__PURE__ */ Object.create(null), _mergeSlots: createMergeSlots(Math.min(i9, 8192)), _idScratch: [] };
    return t9 ? (a13._dependencies = t9.dependencies, a13._entrypoints = t9.entrypoints) : e9 && (a13._entrypoints = o6), a13;
  })(t8);
  return { rendererContext: r3, async renderToString(n8) {
    n8._registeredComponents = n8._registeredComponents || /* @__PURE__ */ new Set();
    const s5 = await (await Promise.resolve(e8).then((e9) => "default" in e9 ? e9.default : e9))(n8), wrap = /* @__PURE__ */ __name((e9) => () => e9(n8, r3), "wrap");
    return { html: await t8.renderToString(s5, n8), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function createBuildFiles(e8) {
  const buildAssetsURL2 = /* @__PURE__ */ __name((...t9) => e8.buildAssetsURL(...t9), "buildAssetsURL"), t8 = lazyCachedFunction(async () => {
    const e9 = await getServerEntry();
    if (!e9) throw me.NUXT_E8004();
    return createRenderer(e9, { precomputed: await getPrecomputedDependencies(), manifest: void 0, renderToString: /* @__PURE__ */ __name(async function(e10, t9) {
      const r4 = await renderToString(e10, t9);
      return Pe2 + r4 + De2;
    }, "renderToString"), buildAssetsURL: buildAssetsURL2 });
  }), r3 = lazyCachedFunction(async () => {
    const e9 = await getPrecomputedDependencies(), t9 = (propsToString(Ti), Pe2 + De2 + ""), r4 = createRenderer(() => () => {
    }, { precomputed: e9, manifest: void 0, renderToString: /* @__PURE__ */ __name(() => t9, "renderToString"), buildAssetsURL: buildAssetsURL2 }), n8 = await r4.renderToString({});
    return { rendererContext: r4.rendererContext, renderToString: /* @__PURE__ */ __name((e10) => {
      const t10 = e10.runtimeConfig;
      return e10.modules ||= /* @__PURE__ */ new Set(), e10.payload.serverRendered = false, e10.config = { public: t10.public, app: t10.app }, Promise.resolve(n8);
    }, "renderToString") };
  });
  return { getRenderer: /* @__PURE__ */ __name((e9) => e9.noSSR ? r3() : t8(), "getRenderer"), getSSRRenderer: t8, getServerApp: lazyCachedFunction(getServerEntry) };
}
function createRendererInstance(e8) {
  return { options: e8, ...createBuildFiles(e8) };
}
function appEvent(e8) {
  return e8["~app"] ?? e8;
}
function getRequestState(e8) {
  return e8.context.nuxt;
}
function format_path(e8, t8) {
  const r3 = [];
  for (let n8 = 0; n8 < e8.length; n8 += 1) {
    const s5 = e8[n8];
    s5 === ze2 ? r3.push(`.get(${t8(e8[++n8])})`) : "number" == typeof s5 ? r3.push(`[${s5}]`) : r3.push(stringify_key(s5));
  }
  return r3;
}
function is_primitive(e8) {
  return null === e8 || "object" != typeof e8 && "function" != typeof e8;
}
function is_plain_object(e8) {
  const t8 = Object.getPrototypeOf(e8);
  return t8 === Object.prototype || null === t8 || null === Object.getPrototypeOf(t8) || Object.getOwnPropertyNames(t8).sort().join("\0") === Ve2;
}
function get_type(e8) {
  return Object.prototype.toString.call(e8).slice(8, -1);
}
function is_buffer(e8) {
  return void 0 !== de && de.isBuffer(e8);
}
function stringify_sparse_array(e8) {
  return `(function(a){a[4294967294]=0;delete a[4294967294];a.length=${e8};return a}([]))`;
}
function get_name(e8) {
  let t8 = "";
  do {
    t8 = Ne2[e8 % 54] + t8, e8 = ~~(e8 / 54) - 1;
  } while (e8 >= 0);
  return Ee2.test(t8) ? `${t8}0` : t8;
}
function escape_raw(e8) {
  return Je2[e8];
}
function stringify_string(e8) {
  return !We2.test(e8) && e8.isWellFormed() ? `"${e8}"` : JSON.stringify(e8).replace(qe2, escape_raw);
}
function quote_key(e8) {
  if (e8.length > 64) return stringify_string(e8);
  let t8 = Ze2.get(e8);
  return void 0 === t8 && (Ze2.size >= 1024 && Ze2.clear(), t8 = stringify_string(e8), Ze2.set(e8, t8)), t8;
}
function enumerable_symbols(e8) {
  const t8 = Object.getOwnPropertySymbols(e8);
  return 0 === t8.length ? t8 : t8.filter((t9) => Object.getOwnPropertyDescriptor(e8, t9)?.enumerable);
}
function stringify_key(e8) {
  return Xe2.test(e8) ? "." + e8 : "[" + JSON.stringify(e8) + "]";
}
function is_valid_array_index_string(e8) {
  if (0 === e8.length) return false;
  if (e8.length > 1 && 48 === e8.charCodeAt(0)) return false;
  for (let t9 = 0; t9 < e8.length; t9++) {
    const r3 = e8.charCodeAt(t9);
    if (r3 < 48 || r3 > 57) return false;
  }
  return t8 = +e8, !(!Number.isInteger(t8) || t8 < 0 || t8 > He2);
  var t8;
}
function valid_array_indices(e8) {
  const t8 = Object.keys(e8);
  return t8.length = (function(e9) {
    for (var t9 = e9.length - 1; t9 >= 0 && !is_valid_array_index_string(e9[t9]); t9--) ;
    return t9 + 1;
  })(t8), t8;
}
function uneval(e8, t8) {
  const r3 = /* @__PURE__ */ new Map(), n8 = /* @__PURE__ */ new Set(), s5 = /* @__PURE__ */ new Set(), o6 = [], i9 = /* @__PURE__ */ new Map();
  function error(t9, r4) {
    const n9 = format_path(o6, (e9) => is_primitive(e9) ? stringify_primitive$1(e9) : "...");
    throw new DevalueError(t9, n9, r4, e8);
  }
  __name(error, "error");
  let a13, c5;
  function stringify_cached_primitive(e9) {
    if ("string" == typeof e9 && e9.length >= 128 || "bigint" == typeof e9) {
      c5 ??= /* @__PURE__ */ new Map();
      let t9 = c5.get(e9);
      return void 0 === t9 && (t9 = stringify_primitive$1(e9), c5.set(e9, t9)), t9;
    }
    return stringify_primitive$1(e9);
  }
  __name(stringify_cached_primitive, "stringify_cached_primitive");
  !(/* @__PURE__ */ __name(function walk(e9) {
    if (is_primitive(e9)) "symbol" == typeof e9 ? error("Cannot stringify a Symbol primitive", e9) : ("string" == typeof e9 && e9.length >= 128 || "bigint" == typeof e9) && (a13 ??= /* @__PURE__ */ new Map(), a13.set(e9, (a13.get(e9) || 0) + 1));
    else {
      if (s5.has(e9)) return void (r3.has(e9) || r3.set(e9, ""));
      s5.add(e9), "function" == typeof e9 && error("Cannot stringify a function", e9);
      switch (get_type(e9)) {
        case "BigInt":
        case "String":
          return void walk(e9.valueOf());
        case "Number":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
        case "ArrayBuffer":
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        case "Array":
          for (const t9 of valid_array_indices(e9)) o6.push(+t9), walk(e9[t9]), o6.pop();
          break;
        case "Set":
          for (const t9 of e9) walk(t9);
          break;
        case "Map":
          for (const [t9, r4] of e9) o6.push(ze2, t9), walk(t9), walk(r4), o6.pop(), o6.pop();
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
          return void (is_buffer(e9) || walk(e9.buffer));
        default:
          is_plain_object(e9) || error("Cannot stringify arbitrary non-POJOs", e9), enumerable_symbols(e9).length > 0 && error("Cannot stringify POJOs with symbolic keys", e9);
          for (const t9 of Object.keys(e9)) "__proto__" === t9 && error("Cannot stringify objects with __proto__ keys", e9), o6.push(t9), walk(e9[t9]), o6.pop();
      }
    }
  }, "walk"))(e8);
  let l8 = 0;
  function next_name() {
    let e9;
    do {
      e9 = get_name(l8++);
    } while (n8.has(e9));
    return e9;
  }
  __name(next_name, "next_name");
  for (const e9 of r3.keys()) r3.set(e9, next_name());
  if (a13) for (const [e9, t9] of a13) {
    if (t9 < 2) continue;
    const n9 = next_name(), s6 = stringify_cached_primitive(e9).length;
    s6 * t9 > s6 + (t9 + 1) * n9.length + 40 && r3.set(e9, n9);
  }
  s5.clear();
  const f6 = i9.size > 0 ? /* @__PURE__ */ new Set() : null, u9 = /* @__PURE__ */ new Map(), p6 = [];
  function stringify3(e9) {
    const t9 = r3.get(e9);
    if (t9) {
      if (s5.has(e9)) u9.get(e9)?.();
      else {
        if (is_primitive(e9)) return s5.add(e9), p6.push(`let ${t9}=${stringify_cached_primitive(e9)}`), t9;
        const r4 = i9.has(e9) ? null : get_type(e9);
        switch (r4) {
          case "Object":
            s5.add(e9), p6.push(`let ${t9}=${null === Object.getPrototypeOf(e9) ? "Object.create(null)" : "{}"}`), Object.keys(e9).forEach((r5) => {
              p6.push(`${t9}${(function(e10) {
                return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e10) ? `.${e10}` : `[${escape_unsafe_chars(JSON.stringify(e10))}]`;
              })(r5)}=${stringify3(e9[r5])}`);
            });
            break;
          case "Array": {
            s5.add(e9);
            const r5 = valid_array_indices(e9), n11 = e9.length > 32 + 2 * r5.length ? stringify_sparse_array(e9.length) : `Array(${e9.length})`;
            p6.push(`let ${t9}=${n11}`);
            for (const n12 of r5) p6.push(`${t9}[${n12}]=${stringify3(e9[n12])}`);
            break;
          }
          case "Set":
          case "Map": {
            s5.add(e9);
            const n11 = [];
            let o7 = false, i10 = -1;
            const initialize = /* @__PURE__ */ __name(() => {
              o7 || (o7 = true, u9.delete(e9), p6.push(`let ${t9}=new ${r4}${n11.length ? `([${n11.join(",")}])` : ""}`));
            }, "initialize");
            u9.set(e9, initialize);
            for (const s6 of e9) {
              const e10 = "Map" === r4 ? `${stringify3(s6[0])},${stringify3(s6[1])}` : stringify3(s6);
              if (o7) {
                const n12 = `.${"Map" === r4 ? "set" : "add"}(${e10})`;
                i10 === p6.length - 1 ? p6[i10] += n12 : i10 = p6.push(t9 + n12) - 1;
              } else n11.push("Map" === r4 ? `[${e10}]` : e10);
            }
            initialize();
            break;
          }
          default:
            const n10 = actually_stringify(e9);
            s5.has(e9) || p6.push(`let ${t9}=${n10}`), s5.add(e9);
        }
      }
      return t9;
    }
    if (is_primitive(e9)) return stringify_cached_primitive(e9);
    if (null === f6) return actually_stringify(e9);
    if (f6.has(e9)) return r3.set(e9, next_name()), stringify3(e9);
    f6.add(e9);
    const n9 = actually_stringify(e9);
    return f6.delete(e9), r3.get(e9) || n9;
  }
  __name(stringify3, "stringify");
  function actually_stringify(e9) {
    const t9 = i9.get(e9);
    if (t9) return t9.render(stringify3);
    const n9 = get_type(e9);
    switch (n9) {
      case "Number":
      case "String":
      case "Boolean":
      case "BigInt":
        return `Object(${stringify3(e9.valueOf())})`;
      case "RegExp":
        const { source: t10, flags: s6 } = e9;
        return s6 ? `new RegExp(${stringify_string(t10)},"${s6}")` : `new RegExp(${stringify_string(t10)})`;
      case "Date":
        return `new Date(${e9.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(e9.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(e9.toString())})`;
      case "Array": {
        let t11 = false, r4 = "[";
        for (let n10 = 0; n10 < e9.length; n10 += 1) if (n10 > 0 && (r4 += ","), Object.hasOwn(e9, n10)) r4 += stringify3(e9[n10]);
        else if (!t11) {
          const r5 = valid_array_indices(e9), n11 = r5.length, s7 = String(e9.length).length, o8 = stringify_sparse_array(e9.length);
          if (e9.length + 2 > o8.length + 18 + n11 * (s7 + 2)) {
            return `Object.assign(${o8},{${r5.map((t12) => `${t12}:${stringify3(e9[t12])}`).join(",")}})`;
          }
          t11 = true;
        }
        return r4 + (0 === e9.length || Object.hasOwn(e9, e9.length - 1) ? "" : ",") + "]";
      }
      case "Set":
        return `new Set([${Array.from(e9, stringify3).join(",")}])`;
      case "Map":
        return `new Map([${Array.from(e9, ([e10, t11]) => `[${stringify3(e10)},${stringify3(t11)}]`).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Float16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        if (is_buffer(e9) && (e9 = new Uint8Array(e9)), e9.buffer.byteLength % e9.BYTES_PER_ELEMENT !== 0) return `new ${n9}(${stringify3(e9.buffer)},${e9.byteOffset},${e9.length})`;
        let t11 = `new ${n9}`;
        if (r3.has(e9.buffer) ? t11 += `(${stringify3(e9.buffer)})` : t11 += `([${(function(e10, t12) {
          const r4 = new globalThis[e10](t12);
          if ("BigInt64Array" === e10 || "BigUint64Array" === e10) return Array.from(r4, (e11) => `${e11}n`).join(",");
          if (r4 instanceof Float32Array || r4 instanceof Float64Array || "undefined" != typeof Float16Array && r4 instanceof Float16Array) return Array.from(r4, (e11) => Object.is(e11, -0) ? "-0" : `${e11}`).join(",");
          return r4.toString();
        })(n9, e9.buffer)}])`, e9.byteLength !== e9.buffer.byteLength) {
          const r4 = e9.byteOffset / e9.BYTES_PER_ELEMENT;
          t11 += `.subarray(${r4},${r4 + e9.length})`;
        }
        return t11;
      }
      case "DataView": {
        let t11 = "new DataView";
        return r3.has(e9.buffer) ? t11 += `(${stringify3(e9.buffer)}` : t11 += `(new Uint8Array([${new Uint8Array(e9.buffer)}]).buffer`, e9.byteLength !== e9.buffer.byteLength && (t11 += `,${e9.byteOffset},${e9.byteLength}`), t11 + ")";
      }
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e9).toString()}]).buffer`;
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${n9}.from(${stringify_string(e9.toString())})`;
      default:
        const o7 = Object.keys(e9), i10 = o7.map((t11) => `${(function(e10) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e10) ? e10 : escape_unsafe_chars(JSON.stringify(e10));
        })(t11)}:${stringify3(e9[t11])}`).join(",");
        return null === Object.getPrototypeOf(e9) ? o7.length > 0 ? `{${i10},__proto__:null}` : "{__proto__:null}" : `{${i10}}`;
    }
  }
  __name(actually_stringify, "actually_stringify");
  const d7 = stringify3(e8);
  return 0 === p6.length ? d7 : `(function(){${p6.join(";")};return ${d7}}())`;
}
function escape_unsafe_char(e8) {
  return Fe2[e8] || e8;
}
function escape_unsafe_chars(e8) {
  return e8.replace(Ke2, escape_unsafe_char);
}
function stringify_primitive$1(e8) {
  const t8 = typeof e8;
  if ("string" === t8) return stringify_string(e8);
  if (void 0 === e8) return "void 0";
  if (0 === e8 && 1 / e8 < 0) return "-0";
  const r3 = String(e8);
  return "number" === t8 ? r3.replace(/^(-)?0\./, "$1.") : "bigint" === t8 ? e8 + "n" : r3;
}
function stringify(e8, t8, r3) {
  const n8 = (function(e9, t9, r4) {
    const n9 = (a13 = nt2, a13), s5 = [], o6 = /* @__PURE__ */ new Map(), i9 = [];
    var a13;
    if (r4) for (const e10 of Object.getOwnPropertyNames(r4)) i9.push({ key: e10, fn: r4[e10] });
    let c5 = [], l8 = 0;
    function error(e10, r5) {
      const s6 = format_path(c5, (e11) => {
        const t10 = n9.typeOf(e11);
        return "object" !== t10 && "function" !== t10 && "symbol" !== t10 ? stringify_primitive(n9.toPrimitive(e11)) : "...";
      });
      throw new DevalueError(e10, s6, r5, t9);
    }
    __name(error, "error");
    function flatten(e10, t10) {
      const r5 = n9.typeOf(e10);
      if ("undefined" === r5) return -1;
      let a14;
      if ("number" === r5) {
        if (a14 = n9.toPrimitive(e10), Number.isNaN(a14)) return -3;
        if (a14 === 1 / 0) return -4;
        if (a14 === -1 / 0) return -5;
        if (0 === a14 && 1 / a14 < 0) return -6;
      }
      const f7 = n9.identify(e10);
      if (o6.has(f7)) return o6.get(f7);
      t10 ??= l8++, o6.set(f7, t10);
      for (const { key: r6, fn: n10 } of i9) {
        const o7 = n10(e10);
        if (o7) return s5[t10] = `["${r6}",${flatten(o7)}]`, t10;
      }
      "function" === r5 ? error("Cannot stringify a function", e10) : "symbol" === r5 && error("Cannot stringify a Symbol primitive", e10);
      let u9 = "";
      if ("object" !== r5) u9 = stringify_primitive("number" === r5 ? a14 : n9.toPrimitive(e10));
      else if (n9.isThenable(e10)) {
        error("Cannot stringify a Promise or thenable \u2014 use stringifyAsync instead", e10);
        const r6 = c5.slice();
        u9 = n9.toPromise(e10).then((e11) => {
          c5 = r6;
          const n10 = flatten(e11, t10);
          n10 < 0 && (s5[t10] = n10);
        }), u9.catch(() => {
        });
      } else {
        const t11 = n9.tagOf(e10);
        switch (t11) {
          case "Number":
          case "String":
          case "Boolean":
          case "BigInt":
            u9 = `["Object",${flatten(n9.unbox(e10))}]`;
            break;
          case "Date":
            u9 = `["Date","${n9.toISOString(e10)}"]`;
            break;
          case "URL":
            u9 = `["URL",${stringify_string(n9.toStringValue(e10))}]`;
            break;
          case "URLSearchParams":
            u9 = `["URLSearchParams",${stringify_string(n9.toStringValue(e10))}]`;
            break;
          case "RegExp":
            const { source: r6, flags: s6 } = n9.regExpInfo(e10);
            u9 = s6 ? `["RegExp",${stringify_string(r6)},"${s6}"]` : `["RegExp",${stringify_string(r6)}]`;
            break;
          case "Array": {
            let t12 = false;
            const r7 = n9.lengthOf(e10);
            u9 = "[";
            for (let s7 = 0; s7 < r7; s7 += 1) if (s7 > 0 && (u9 += ","), n9.hasOwn(e10, s7)) c5.push(s7), u9 += flatten(n9.get(e10, s7)), c5.pop();
            else if (t12) u9 += -2;
            else {
              const s8 = n9.indicesOf(e10), o7 = s8.length, i10 = String(r7).length;
              if (3 * (r7 - o7) > 4 + i10 + o7 * (i10 + 1)) {
                u9 = "[-7," + r7;
                for (let t13 = 0; t13 < s8.length; t13++) {
                  const r8 = s8[t13];
                  c5.push(+r8), u9 += "," + r8 + "," + flatten(n9.get(e10, r8)), c5.pop();
                }
                break;
              }
              t12 = true, u9 += -2;
            }
            u9 += "]";
            break;
          }
          case "Set":
            u9 = '["Set"';
            for (const t12 of n9.valuesOf(e10)) u9 += `,${flatten(t12)}`;
            u9 += "]";
            break;
          case "Map":
            u9 = '["Map"';
            for (const [t12, r7] of n9.entriesOf(e10)) c5.push(ze2, t12), u9 += `,${flatten(t12)},${flatten(r7)}`, c5.pop(), c5.pop();
            u9 += "]";
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Float16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const r7 = n9.viewInfo(e10);
            u9 = '["' + t11 + '",' + flatten(r7.buffer), r7.byteLength !== r7.bufferByteLength && (u9 += `,${r7.byteOffset},${r7.length}`), u9 += "]";
            break;
          }
          case "DataView": {
            const r7 = n9.viewInfo(e10);
            u9 = '["' + t11 + '",' + flatten(r7.buffer), r7.byteLength !== r7.bufferByteLength && (u9 += `,${r7.byteOffset},${r7.byteLength}`), u9 += "]";
            break;
          }
          case "ArrayBuffer":
            u9 = `["ArrayBuffer","${Qe2(n9.toArrayBuffer(e10))}"]`;
            break;
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime":
            u9 = `["${t11}",${stringify_string(n9.toStringValue(e10))}]`;
            break;
          default: {
            const t12 = n9.shapeOf(e10);
            if ("not-plain" === t12.kind && error("Cannot stringify arbitrary non-POJOs", e10), "symbol-keys" === t12.kind && error("Cannot stringify POJOs with symbolic keys", e10), "null-proto" === t12.kind) {
              u9 = '["null"';
              for (const r7 of t12.keys) "__proto__" === r7 && error("Cannot stringify objects with __proto__ keys", e10), c5.push(r7), u9 += `,${quote_key(r7)},${flatten(n9.get(e10, r7))}`, c5.pop();
              u9 += "]";
            } else {
              u9 = "{";
              let r7 = false;
              for (const s7 of t12.keys) "__proto__" === s7 && error("Cannot stringify objects with __proto__ keys", e10), r7 && (u9 += ","), r7 = true, c5.push(s7), u9 += `${quote_key(s7)}:${flatten(n9.get(e10, s7))}`, c5.pop();
              u9 += "}";
            }
          }
        }
      }
      return s5[t10] = u9, t10;
    }
    __name(flatten, "flatten");
    const f6 = flatten(t9);
    return f6 < 0 ? `${f6}` : s5;
  })(0, e8, t8);
  return "string" == typeof n8 ? n8 : `[${n8.join(",")}]`;
}
function stringify_primitive(e8) {
  const t8 = typeof e8;
  return "string" === t8 ? stringify_string(e8) : void 0 === e8 ? (-1).toString() : 0 === e8 && 1 / e8 < 0 ? (-6).toString() : "bigint" === t8 ? `["BigInt","${e8}"]` : String(e8);
}
function renderPayloadJsonScript(e8) {
  const t8 = { type: "application/json", innerHTML: e8.data ? stringify(e8.data, e8.ssrContext["~payloadReducers"]).replaceAll("/", "\\u002F") : "", "data-nuxt-data": Ai, "data-ssr": !e8.ssrContext.noSSR, id: "__NUXT_DATA__" };
  e8.src && (t8["data-src"] = e8.src);
  return [t8, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e8.ssrContext.config)}` }];
}
function cwd() {
  return void 0 !== m7 && "function" == typeof m7.cwd ? m7.cwd().replace(/\\/g, "/") : "/";
}
function pushSpeculationRulesScript(e8, t8) {
  const r3 = t8.map((e9) => ({ where: { href_matches: e9 }, eagerness: "moderate" }));
  e8.head.push({ script: [{ tagPosition: "head", type: "speculationrules", innerHTML: { prefetch: r3, prerender: r3 } }] });
}
function normalizeChunks(e8) {
  const t8 = [];
  for (const r3 of e8) {
    const e9 = r3?.trim();
    e9 && t8.push(e9);
  }
  return t8;
}
function joinTags(e8) {
  return e8.join("");
}
function joinAttrs(e8) {
  return 0 === e8.length ? "" : " " + e8.join(" ");
}
function renderHTMLDocument(e8) {
  return `<!DOCTYPE html><html${joinAttrs(e8.htmlAttrs)}><head>${joinTags(e8.head)}</head><body${joinAttrs(e8.bodyAttrs)}>${joinTags(e8.bodyPrepend)}${joinTags(e8.body)}${joinTags(e8.bodyAppend)}</body></html>`;
}
function stripInlineOnlyPayloadFields(e8) {
  if (!e8.prefetchLinks) return e8;
  const { prefetchLinks: t8, ...r3 } = e8;
  return r3;
}
var he, ye2, ge2, me, _e2, be2, Se2, $e2, we, Re2, Ae2, ve2, Te2, Oe2, xe2, ke2, Ce2, je2, Ue2, Le2, Pe2, De2, getServerEntry, getPrecomputedDependencies, Ie2, Be2, Me2, He2, Ne2, Ee2, Fe2, DevalueError, ze2, Ve2, We2, qe2, Je2, Ze2, Xe2, Ke2, Ye2, Ge2, Qe2, et2, tt2, rt2, nt2, st2, ot2, it2, resolve, isAbsolute, at2, ct2, lt2, ft2, ut2, pt2, dt2, ht2, yt2;
var init_renderer = __esm({
  "server/chunks/routes/renderer.mjs"() {
    init_nitro();
    he = class {
      static {
        __name(this, "he");
      }
      body;
      status;
      statusText;
      headers;
      constructor(e8, t8) {
        this.body = e8, this.status = t8?.status || 200, this.statusText = t8?.statusText || "", this.headers = t8?.headers instanceof Headers ? t8.headers : new Headers(t8?.headers);
      }
    };
    __name(createResponseHeaderRecord, "createResponseHeaderRecord");
    __name(baseURL, "baseURL");
    __name(buildAssetsURL, "buildAssetsURL");
    __name(publicAssetsURL, "publicAssetsURL");
    __name(lazyCachedFunction, "lazyCachedFunction");
    __name(formatDiagnostic, "formatDiagnostic");
    __name(toValueWithArgs, "toValueWithArgs");
    __name(createConsoleReporter, "createConsoleReporter");
    ye2 = Error.captureStackTrace;
    ge2 = class Diagnostic extends Error {
      static {
        __name(this, "Diagnostic");
      }
      name;
      code;
      docs;
      fix;
      sources;
      data;
      get why() {
        return this.message;
      }
      constructor(e8, t8 = Diagnostic) {
        super(e8.why, { cause: e8.cause }), this.code = this.name = e8.code, this.fix = e8.fix, this.docs = e8.docs, this.sources = e8.sources, this.data = e8.data, ye2?.(this, t8);
      }
      toJSON() {
        return { name: this.name, why: this.why, fix: this.fix, docs: this.docs, sources: this.sources, cause: this.cause, data: this.data, stack: this.stack };
      }
    };
    __name(deriveDocs, "deriveDocs");
    __name(defineDiagnostics, "defineDiagnostics");
    __name(defineProdDiagnostics, "defineProdDiagnostics");
    me = defineDiagnostics({ docsBase: /* @__PURE__ */ __name((e8) => `https://nuxt.com/docs/4.x/errors/${e8.replace("NUXT_", "").toLowerCase()}`, "docsBase"), reporters: [createConsoleReporter(void 0)], codes: { NUXT_E8001: { why: /* @__PURE__ */ __name((e8) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${e8.path}\`). These fields are silently dropped because the body is about to stream.`, "why"), fix: "Use the `render:html:close` hook instead.", docs: false }, NUXT_E8002: { why: /* @__PURE__ */ __name((e8) => `SSR streaming committed the response before render completed (\`${e8.path}\`). The following mutations did not reach the client and were dropped:
  - ${e8.mutations}`, "why"), fix: /* @__PURE__ */ __name((e8) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${e8.path}': { streaming: false } }\` or the \`render:route\` hook.`, "fix"), docs: false }, NUXT_E8004: { why: "The server bundle is not available.", fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.", docs: false }, NUXT_E8006: { why: /* @__PURE__ */ __name((e8) => `The payload for \`${e8.path}\` is ${e8.size}, which will increase the page size and slow down hydration.${e8.keys ? ` Largest payload keys:
  - ${e8.keys}` : ""}`, "why"), fix: "Use the `pick` or `transform` options of `useAsyncData`/`useFetch` to strip out data the client does not need.", docs: false }, NUXT_E8007: { why: /* @__PURE__ */ __name((e8) => `\`${e8.path}\` relies on client-side JavaScript, but \`features.noScripts: 'production'\` will strip scripts from this route in production:
  - ${e8.reasons}`, "why"), fix: "Remove the client-side dependency from this route, or scope script stripping with the `noScripts` route rule instead of enabling it globally." }, NUXT_E8009: { why: /* @__PURE__ */ __name((e8) => `A page error interrupted the stream for \`${e8.path}\`, and ${e8.what} also failed while rendering the error response.
  ${e8.cause}`, "why"), fix: "Fix the page error first. If it keeps happening, report the failure below - the browser will show a blank or partial page instead of the error page." } } });
    _e2 = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    __name(ssrRenderAttrs, "ssrRenderAttrs");
    __name(ssrRenderDynamicAttr, "ssrRenderDynamicAttr");
    __name(ssrRenderAttr, "ssrRenderAttr");
    __name(ssrRenderClass, "ssrRenderClass");
    __name(ssrRenderStyle, "ssrRenderStyle");
    __name(ssrRenderComponent, "ssrRenderComponent");
    ({ ensureValidVNode: be2 } = Fo);
    __name(ssrRenderSlot, "ssrRenderSlot");
    Se2 = /^<!--[\s\S]*-->$/;
    $e2 = /<!--[^]*?-->/gm;
    __name(isComment, "isComment");
    __name(ssrRenderTeleport, "ssrRenderTeleport");
    __name(ssrInterpolate, "ssrInterpolate");
    __name(ssrRenderList, "ssrRenderList");
    __name(ssrRenderSuspense, "ssrRenderSuspense");
    we = looseEqual;
    __name(ssrLooseContain, "ssrLooseContain");
    ({ createComponentInstance: Re2, setCurrentRenderingInstance: Ae2, setupComponent: ve2, renderComponentRoot: Te2, normalizeVNode: Oe2 } = Fo);
    __name(createBuffer, "createBuffer");
    __name(renderComponentVNode, "renderComponentVNode");
    __name(renderComponentSubTree, "renderComponentSubTree");
    __name(renderVNode, "renderVNode");
    __name(renderVNodeChildren, "renderVNodeChildren");
    ({ isVNode: xe2 } = Fo);
    __name(nestedUnrollBuffer, "nestedUnrollBuffer");
    __name(unrollBuffer$1, "unrollBuffer$1");
    __name(unrollBufferSync$1, "unrollBufferSync$1");
    __name(renderToString, "renderToString");
    __name(stopWatchers, "stopWatchers");
    __name(settleBuffer, "settleBuffer");
    initDirectivesForSSR();
    __name(createMergeSlots, "createMergeSlots");
    __name(slotFor, "slotFor");
    __name(getModuleDependencies, "getModuleDependencies");
    __name(setAlias, "setAlias");
    __name(collectInto, "collectInto");
    __name(collectPrefetch, "collectPrefetch");
    __name(getFlatDependencies, "getFlatDependencies");
    __name(getRequestDependencies, "getRequestDependencies");
    __name(getRenderedOutputs, "getRenderedOutputs");
    ke2 = /* @__PURE__ */ Symbol("slots");
    Ce2 = { scripts: "scriptSlots", styles: "styleSlots", preload: "preloadSlots", prefetch: "prefetchSlots" };
    je2 = { get(e8, t8) {
      const r3 = e8[t8];
      return void 0 === r3 && isRecordKey(t8) ? materialiseRecord(e8, t8) : r3;
    }, has: /* @__PURE__ */ __name((e8, t8) => isRecordKey(t8) || t8 in e8, "has"), ownKeys(e8) {
      const t8 = Reflect.ownKeys(e8).filter((e9) => e9 !== ke2 && !isRecordKey(e9));
      return t8.length > 0 ? [...Ue2, ...t8] : Ue2.slice();
    }, getOwnPropertyDescriptor: /* @__PURE__ */ __name((e8, t8) => isRecordKey(t8) ? { value: e8[t8] ?? materialiseRecord(e8, t8), writable: true, enumerable: true, configurable: true } : t8 === ke2 ? void 0 : Reflect.getOwnPropertyDescriptor(e8, t8), "getOwnPropertyDescriptor"), set: /* @__PURE__ */ __name((e8, t8, r3) => (e8[t8] = r3, true), "set"), deleteProperty: /* @__PURE__ */ __name((e8, t8) => Reflect.deleteProperty(e8, t8), "deleteProperty") };
    Ue2 = ["scripts", "styles", "preload", "prefetch"];
    __name(isRecordKey, "isRecordKey");
    __name(materialiseRecord, "materialiseRecord");
    __name(collectOrder, "collectOrder");
    __name(getOrder, "getOrder");
    __name(renderStyles, "renderStyles");
    __name(isScriptResource, "isScriptResource");
    __name(renderResourceHints, "renderResourceHints");
    Le2 = /[^\0-\u007F]+/g;
    __name(renderResourceHeaders, "renderResourceHeaders");
    __name(hrefFor, "hrefFor");
    __name(renderScripts, "renderScripts");
    __name(createRenderer, "createRenderer");
    Pe2 = `<${xi}${propsToString(ki)}>`;
    De2 = `</${xi}>`;
    getServerEntry = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_entry(), entry_exports)).then(function(e8) {
      return e8.e;
    }).then((e8) => e8.default || e8), "getServerEntry");
    getPrecomputedDependencies = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_precomputed(), precomputed_exports)).then((e8) => "default" in e8 ? e8.default : e8).then((e8) => "function" == typeof e8 ? e8() : e8), "getPrecomputedDependencies");
    __name(createBuildFiles, "createBuildFiles");
    Ie2 = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e8) => e8.default || e8));
    Be2 = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e8) => e8.inlinedCSS || {}));
    __name(createRendererInstance, "createRendererInstance");
    __name(appEvent, "appEvent");
    __name(getRequestState, "getRequestState");
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    Me2 = createRendererInstance({ runtimeConfig: /* @__PURE__ */ __name((e8) => useRuntimeConfig2(appEvent(e8)), "runtimeConfig"), buildAssetsURL, publicAssetsURL, getRouteRules: /* @__PURE__ */ __name((e8) => getRouteRules2(appEvent(e8)), "getRouteRules"), hooks: /* @__PURE__ */ __name(() => useNitroApp().hooks, "hooks"), createResponse: /* @__PURE__ */ __name((e8, t8) => new he(e8, t8), "createResponse"), createError: /* @__PURE__ */ __name((e8) => createError({ statusCode: e8.status, statusMessage: e8.statusText, message: e8.statusText, data: e8.data }), "createError"), writeEarlyHints: /* @__PURE__ */ __name((e8, t8) => writeEarlyHints(appEvent(e8), t8.link), "writeEarlyHints"), onRenderSuccess: void 0, prerender: void 0 });
    new Set(yi);
    He2 = 2 ** 32 - 1 - 1;
    Ne2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    Ee2 = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    Fe2 = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(e8, t8, r3, n8) {
        super(e8), this.name = "DevalueError", this.path = t8.join(""), this.value = r3, this.root = n8;
      }
    };
    ze2 = /* @__PURE__ */ Symbol();
    __name(format_path, "format_path");
    __name(is_primitive, "is_primitive");
    Ve2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(is_buffer, "is_buffer");
    __name(stringify_sparse_array, "stringify_sparse_array");
    __name(get_name, "get_name");
    We2 = /["<\\\u0000-\u001f\u2028\u2029]/;
    qe2 = /[<\u2028\u2029]/g;
    Je2 = { "<": "\\u003C", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    __name(escape_raw, "escape_raw");
    __name(stringify_string, "stringify_string");
    Ze2 = /* @__PURE__ */ new Map();
    __name(quote_key, "quote_key");
    __name(enumerable_symbols, "enumerable_symbols");
    Xe2 = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(is_valid_array_index_string, "is_valid_array_index_string");
    __name(valid_array_indices, "valid_array_indices");
    Ke2 = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    __name(uneval, "uneval");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(stringify_primitive$1, "stringify_primitive$1");
    Ye2 = "function" == typeof Uint8Array.fromBase64;
    Ge2 = "object" == typeof m7 && void 0 !== m7.versions?.node;
    Qe2 = Ye2 ? function(e8) {
      return new Uint8Array(e8).toBase64();
    } : Ge2 ? function(e8) {
      return de.from(e8).toString("base64");
    } : function(e8) {
      const t8 = new Uint8Array(e8);
      let r3 = "";
      for (let e9 = 0; e9 < t8.length; e9 += 32768) {
        const n8 = t8.subarray(e9, e9 + 32768);
        r3 += String.fromCharCode.apply(null, n8);
      }
      return btoa(r3);
    };
    et2 = Object.freeze({ kind: "not-plain" });
    tt2 = Object.freeze({ kind: "symbol-keys" });
    rt2 = { identify: /* @__PURE__ */ __name((e8) => e8, "identify"), typeOf: /* @__PURE__ */ __name((e8) => null === e8 ? "null" : typeof e8, "typeOf"), toPrimitive: /* @__PURE__ */ __name((e8) => e8, "toPrimitive"), tagOf: /* @__PURE__ */ __name((e8) => get_type(e8), "tagOf"), isThenable: /* @__PURE__ */ __name((e8) => "function" == typeof e8.then, "isThenable"), toPromise: /* @__PURE__ */ __name((e8) => Promise.resolve(e8), "toPromise"), unbox: /* @__PURE__ */ __name((e8) => e8.valueOf(), "unbox"), toISOString: /* @__PURE__ */ __name((e8) => isNaN(e8.getDate()) ? "" : e8.toISOString(), "toISOString"), toStringValue: /* @__PURE__ */ __name((e8) => e8.toString(), "toStringValue"), regExpInfo: /* @__PURE__ */ __name((e8) => ({ source: e8.source, flags: e8.flags }), "regExpInfo"), valuesOf: /* @__PURE__ */ __name((e8) => e8, "valuesOf"), entriesOf: /* @__PURE__ */ __name((e8) => e8, "entriesOf"), viewInfo: /* @__PURE__ */ __name((e8) => (is_buffer(e8) && (e8 = new Uint8Array(e8)), { buffer: e8.buffer, byteOffset: e8.byteOffset, byteLength: e8.byteLength, length: e8.length, bufferByteLength: e8.buffer.byteLength }), "viewInfo"), toArrayBuffer: /* @__PURE__ */ __name((e8) => e8, "toArrayBuffer"), lengthOf: /* @__PURE__ */ __name((e8) => e8.length, "lengthOf"), hasOwn: /* @__PURE__ */ __name((e8, t8) => Object.hasOwn(e8, t8), "hasOwn"), indicesOf: /* @__PURE__ */ __name((e8) => valid_array_indices(e8), "indicesOf"), shapeOf: /* @__PURE__ */ __name((e8) => is_plain_object(e8) ? enumerable_symbols(e8).length > 0 ? tt2 : { kind: null === Object.getPrototypeOf(e8) ? "null-proto" : "plain", keys: Object.keys(e8) } : et2, "shapeOf"), get: /* @__PURE__ */ __name((e8, t8) => e8[t8], "get") };
    nt2 = Object.freeze(rt2);
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    __name(renderPayloadJsonScript, "renderPayloadJsonScript");
    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength"), "undefined" == typeof SharedArrayBuffer || Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength");
    st2 = /^[A-Za-z]:\//;
    ot2 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    it2 = /^\/([A-Za-z]:)?$/;
    __name(cwd, "cwd");
    resolve = /* @__PURE__ */ __name(function(...e8) {
      let t8 = "", r3 = false;
      for (let n8 = (e8 = e8.map((e9) => (function(e10 = "") {
        return e10 ? e10.replace(/\\/g, "/").replace(st2, (e11) => e11.toUpperCase()) : e10;
      })(e9))).length - 1; n8 >= -1 && !r3; n8--) {
        const s5 = n8 >= 0 ? e8[n8] : cwd();
        s5 && 0 !== s5.length && (t8 = `${s5}/${t8}`, r3 = isAbsolute(s5));
      }
      return t8 = (function(e9, t9) {
        let r4 = "", n8 = 0, s5 = -1, o6 = 0, i9 = null;
        for (let a13 = 0; a13 <= e9.length; ++a13) {
          if (a13 < e9.length) i9 = e9[a13];
          else {
            if ("/" === i9) break;
            i9 = "/";
          }
          if ("/" === i9) {
            if (s5 === a13 - 1 || 1 === o6) ;
            else if (2 === o6) {
              if (r4.length < 2 || 2 !== n8 || "." !== r4[r4.length - 1] || "." !== r4[r4.length - 2]) {
                if (r4.length > 2) {
                  const e10 = r4.lastIndexOf("/");
                  -1 === e10 ? (r4 = "", n8 = 0) : (r4 = r4.slice(0, e10), n8 = r4.length - 1 - r4.lastIndexOf("/")), s5 = a13, o6 = 0;
                  continue;
                }
                if (r4.length > 0) {
                  r4 = "", n8 = 0, s5 = a13, o6 = 0;
                  continue;
                }
              }
              t9 && (r4 += r4.length > 0 ? "/.." : "..", n8 = 2);
            } else r4.length > 0 ? r4 += `/${e9.slice(s5 + 1, a13)}` : r4 = e9.slice(s5 + 1, a13), n8 = a13 - s5 - 1;
            s5 = a13, o6 = 0;
          } else "." === i9 && -1 !== o6 ? ++o6 : o6 = -1;
        }
        return r4;
      })(t8, !r3), r3 && !isAbsolute(t8) ? `/${t8}` : t8.length > 0 ? t8 : ".";
    }, "resolve");
    isAbsolute = /* @__PURE__ */ __name(function(e8) {
      return ot2.test(e8);
    }, "isAbsolute");
    at2 = ["../node_modules/nuxt/dist/app/entry.js"];
    ct2 = "C6bivEq8.js";
    lt2 = !!Ci.id;
    ft2 = lt2 ? `<${Ri}${propsToString(Ci)}>` : "";
    ut2 = lt2 ? `</${Ri}>` : "";
    pt2 = /* @__PURE__ */ new WeakMap();
    __name(pushSpeculationRulesScript, "pushSpeculationRulesScript");
    __name(normalizeChunks, "normalizeChunks");
    __name(joinTags, "joinTags");
    __name(joinAttrs, "joinAttrs");
    __name(renderHTMLDocument, "renderHTMLDocument");
    __name(stripInlineOnlyPayloadFields, "stripInlineOnlyPayloadFields");
    dt2 = (function(e8) {
      const t8 = "getRenderer" in e8 ? e8 : createRendererInstance(e8);
      return { fetch: /* @__PURE__ */ __name((e9) => (function(e10, t9) {
        const r3 = e10.options, n8 = t9.url.pathname.startsWith("/__nuxt_error");
        if (n8 && !getRequestState(t9)?.["~rendering-error"]) return Promise.reject(r3.createError({ status: 404, statusText: "Page Not Found: /__nuxt_error" }));
        const s5 = n8 ? getQuery(t9.url.href) : null, render = /* @__PURE__ */ __name(() => (async function(e11, t10, r4) {
          const n9 = e11.options, s6 = n9.hooks(), o6 = appEvent(t10);
          n9.prerender;
          const i9 = (function(e12, t11) {
            return { url: t11.url.pathname + t11.url.search + (r5 = t11.url, r5.href.includes("#") ? r5.hash : ""), event: appEvent(t11), runtimeConfig: e12.runtimeConfig(t11), noSSR: getRequestState(t11)?.noSSR || false, head: createHead(gi), error: false, nuxt: void 0, payload: {}, "~payloadReducers": /* @__PURE__ */ Object.create(null), modules: /* @__PURE__ */ new Set() };
            var r5;
          })(n9, t10);
          if (i9.head.push(wi), r4) {
            const e12 = r4.status || r4.statusCode;
            if (e12 && (r4.status = r4.statusCode = Number.parseInt(e12)), "string" == typeof r4.data) try {
              r4.data = destr(r4.data);
            } catch {
            }
            !(function(e13, t11) {
              e13.error = true, e13.payload = { error: t11 }, e13.url = t11.url;
            })(i9, r4);
          }
          const a13 = n9.getRouteRules(t10), c5 = !!a13.noScripts;
          false === a13.ssr && (i9.noSSR = true);
          i9.noSSR;
          const l8 = await e11.getRenderer(i9);
          for (const e12 of at2) i9.modules.add(e12);
          const f6 = { canStream: bi, prefersStream: false };
          await s6.callHook("render:route", f6, { event: o6 });
          const u9 = await l8.renderToString(i9).catch(async (e12) => {
            if ((i9["~renderResponse"] || i9._renderResponse) && "skipping render" === e12.message) return {};
            const t11 = !r4 && i9.payload?.error || e12;
            throw await i9.nuxt?.hooks.callHook("app:error", t11), t11;
          }), p6 = i9["~renderResponse"] || i9._renderResponse ? [] : await (async function(e12) {
            const t11 = await Ie2(), r5 = /* @__PURE__ */ new Set(), n10 = [];
            for (const r6 of e12) r6 in t11 && t11[r6] && n10.push(t11[r6]());
            for (const e13 of await Promise.all(n10)) for (const t12 of e13) r5.add(t12);
            return Array.from(r5).map((e13) => ({ innerHTML: e13 }));
          })(i9.modules ?? []);
          if (await i9.nuxt?.hooks.callHook("app:rendered", { ssrContext: i9, renderResult: u9 }), i9["~renderResponse"] || i9._renderResponse) return i9["~renderResponse"] || i9._renderResponse;
          if (i9.payload?.error && !r4) throw i9.payload.error;
          const { styles: d7, scripts: h8 } = getRequestDependencies(i9, l8.rendererContext);
          if ((function(e12, t11) {
            if (t11) pushSpeculationRulesScript(e12, _i.length ? _i : ["/*"]);
            else {
              if (!vi.length) return;
              pushSpeculationRulesScript(e12, vi);
            }
          })(i9, c5), !c5) {
            const r5 = (function(e12, t11, r6) {
              const n10 = pt2.get(e12);
              if (n10) return n10;
              const s7 = e12.options.buildAssetsURL(ct2);
              if (r6.runtimeConfig.app.cdnURL || /^(?:\/|\.+\/)/.test(s7)) return pt2.set(e12, s7), s7;
              const o7 = (function(e13, t12) {
                const r7 = resolve(e13).replace(it2, "$1").split("/"), n11 = resolve(t12).replace(it2, "$1").split("/");
                if (":" === n11[0][1] && ":" === r7[0][1] && r7[0] !== n11[0]) return n11.join("/");
                const s8 = [...r7];
                for (const e14 of s8) {
                  if (n11[0] !== e14) break;
                  r7.shift(), n11.shift();
                }
                return [...r7.map(() => ".."), ...n11].join("/");
              })(t11.url.pathname.replace(/\/[^/]+$/, "/"), joinURL("/", s7));
              return /^(?:\/|\.+\/)/.test(o7) ? o7 : `./${o7}`;
            })(e11, t10, i9);
            i9.head.push({ script: [{ type: "importmap", innerHTML: { imports: { "#entry": r5 } } }] });
          }
          p6.length && i9.head.push({ style: p6 });
          const y7 = [], g9 = [], m8 = await (async function(e12) {
            const t11 = await Be2();
            return (r5) => {
              const n10 = t11[r5.slice(r5.lastIndexOf("/") + 1)];
              if (!n10) return false;
              if (!e12?.size) return false;
              for (const t12 of n10) {
                let r6 = false;
                for (const n11 of t12) if (e12.has(n11)) {
                  r6 = true;
                  break;
                }
                if (!r6) return false;
              }
              return true;
            };
          })(i9.modules);
          for (const e12 of Object.values(d7)) m8?.(e12.file) ? g9.push(l8.rendererContext.buildAssetsURL(e12.file)) : y7.push({ rel: "stylesheet", href: l8.rendererContext.buildAssetsURL(e12.file), crossorigin: "" });
          y7.length && i9.head.push({ link: y7 });
          const _7 = { exclude: i9["~lazyHydratedModules"]?.size ? i9["~lazyHydratedModules"] : void 0, scripts: !c5 }, b6 = new Set(y7.map((e12) => e12.href));
          for (const e12 of g9) b6.add(e12);
          for (const e12 of i9["~neverHydratedModules"] ?? []) {
            const t11 = l8.rendererContext.manifest?.[e12]?.file;
            t11 && b6.add(l8.rendererContext.buildAssetsURL(t11));
          }
          const S5 = [];
          for (const e12 of (function(e13, t11, r5) {
            const n10 = getRequestDependencies(e13, t11, r5), s7 = getOrder(t11, n10, getRenderedOutputs(t11, n10)), o7 = t11._mergeSlots.metaOf, i10 = false !== r5?.scripts, a14 = [];
            for (let e14 = 0; e14 < s7.preloadSlots.length; e14++) {
              const r6 = s7.preloadSlots[e14], n11 = o7[r6];
              !i10 && isScriptResource(n11) || a14.push({ rel: n11.module ? "modulepreload" : "preload", as: n11.resourceType, type: n11.mimeType ?? null, crossorigin: "style" === n11.resourceType || "font" === n11.resourceType || "script" === n11.resourceType || n11.module ? "" : null, href: hrefFor(t11, r6, n11) });
            }
            return a14;
          })(i9, l8.rendererContext, _7)) b6.has(e12.href) || S5.push(e12);
          for (const e12 of (function(e13, t11, r5) {
            const n10 = getRequestDependencies(e13, t11, r5), s7 = getOrder(t11, n10, getRenderedOutputs(t11, n10)), o7 = t11._mergeSlots.metaOf, i10 = false !== r5?.scripts, a14 = [];
            for (let e14 = 0; e14 < s7.prefetchSlots.length; e14++) {
              const r6 = s7.prefetchSlots[e14], n11 = o7[r6];
              !i10 && isScriptResource(n11) || a14.push({ rel: "prefetch", as: n11.resourceType, type: n11.mimeType ?? null, crossorigin: "style" === n11.resourceType || "font" === n11.resourceType || "script" === n11.resourceType || n11.module ? "" : null, href: hrefFor(t11, r6, n11) });
            }
            return a14;
          })(i9, l8.rendererContext, _7)) b6.has(e12.href) || S5.push(e12);
          S5.length && i9.head.push({ link: S5 });
          c5 || i9.head.push({ script: renderPayloadJsonScript({ ssrContext: i9, data: stripInlineOnlyPayloadFields(i9.payload) }) }, { tagPosition: "bodyClose", tagPriority: "high" });
          if (!a13.noScripts) {
            const e12 = "head";
            i9.head.push({ script: Object.values(h8).map((t11) => ({ type: t11.module ? "module" : null, src: l8.rendererContext.buildAssetsURL(t11.file), defer: !t11.module || null, tagPosition: e12, crossorigin: "" })) });
          }
          const { headTags: $4, bodyTags: w7, bodyTagsOpen: R2, htmlAttrs: A3, bodyAttrs: v7 } = renderSSRHead(i9.head, mi), T3 = { htmlAttrs: A3 ? [A3] : [], head: normalizeChunks([$4]), bodyAttrs: v7 ? [v7] : [], bodyPrepend: normalizeChunks([R2, i9.teleports?.body]), body: [u9.html, ft2 + (lt2 ? joinTags([i9.teleports?.[`#${Ci.id}`]]) : "") + ut2], bodyAppend: [w7] };
          return await s6.callHook("render:html", T3, { event: o6 }), { body: renderHTMLDocument(T3), statusCode: t10.res.status, statusMessage: t10.res.statusText, headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
        })(e10, t9, s5).then((e11) => (function(e12, t10, r4) {
          const n9 = new Headers(t10.res.headers);
          for (const e13 in r4.headers) n9.set(e13, r4.headers[e13]);
          return e12.createResponse(r4.body ?? null, { status: r4.statusCode ?? t10.res.status, statusText: r4.statusMessage ?? t10.res.statusText, headers: n9 });
        })(r3, t9, e11)), "render");
        return render();
      })(t8, e9), "fetch") };
    })(Me2);
    ht2 = defineRenderHandler(async (e8) => {
      const t8 = await dt2.fetch(toRequestEvent(e8));
      for (const [r3, n8] of t8.headers) "set-cookie" !== r3 && setResponseHeader(e8, r3, n8);
      return { body: t8.body, statusCode: t8.status, statusMessage: t8.statusText || void 0, headers: createResponseHeaderRecord(e8.node.res) };
    });
    yt2 = Object.freeze(Object.defineProperty({ __proto__: null, default: ht2 }, Symbol.toStringTag, { value: "Module" }));
  }
});

// server/chunks/nitro/nitro.mjs
import e7 from "node:process";
import { env as t7 } from "cloudflare:workers";
import { EventEmitter as r2 } from "node:events";
import { Buffer as s4 } from "node:buffer";
import { setImmediate as a12, clearImmediate as c4 } from "node:timers";
function createNotImplementedError(e8) {
  return new Error(`[unenv] ${e8} is not implemented yet!`);
}
function notImplemented(e8) {
  return Object.assign(() => {
    throw createNotImplementedError(e8);
  }, { __unenv__: true });
}
function jsonParseTransform(e8, t8) {
  if (!("__proto__" === e8 || "constructor" === e8 && t8 && "object" == typeof t8 && "prototype" in t8)) return t8;
  !(function(e9) {
    console.warn(`[destr] Dropping "${e9}" key to prevent prototype pollution.`);
  })(e8);
}
function destr(e8, t8 = {}) {
  if ("string" != typeof e8) return e8;
  if ('"' === e8[0] && '"' === e8[e8.length - 1] && -1 === e8.indexOf("\\")) return e8.slice(1, -1);
  const r3 = e8.trim();
  if (r3.length <= 9) switch (r3.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!xt2.test(e8)) {
    if (t8.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e8;
  }
  try {
    if (bt2.test(e8) || wt2.test(e8)) {
      if (t8.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e8, jsonParseTransform);
    }
    return JSON.parse(e8);
  } catch (r4) {
    if (t8.strict) throw r4;
    return e8;
  }
}
function encodeQueryValue2(e8) {
  return (t8 = "string" == typeof e8 ? e8 : JSON.stringify(e8), encodeURI("" + t8).replace(jt2, "|")).replace(Tt2, "%2B").replace(Pt2, "+").replace(kt2, "%23").replace(Rt2, "%26").replace(Et2, "`").replace(At2, "^").replace(Ct2, "%2F");
  var t8;
}
function encodeQueryKey2(e8) {
  return encodeQueryValue2(e8).replace(St2, "%3D");
}
function decode2(e8 = "") {
  try {
    return decodeURIComponent("" + e8);
  } catch {
    return "" + e8;
  }
}
function decodePath(e8) {
  return decode2(e8.replace(Ht2, "%252F"));
}
function decodeQueryKey(e8) {
  return decode2(e8.replace(Tt2, " "));
}
function decodeQueryValue(e8) {
  return decode2(e8.replace(Tt2, " "));
}
function parseQuery(e8 = "") {
  const t8 = /* @__PURE__ */ Object.create(null);
  "?" === e8[0] && (e8 = e8.slice(1));
  for (const r3 of e8.split("&")) {
    const e9 = r3.match(/([^=]+)=?(.*)/) || [];
    if (e9.length < 2) continue;
    const s5 = decodeQueryKey(e9[1]);
    if ("__proto__" === s5 || "constructor" === s5) continue;
    const a13 = decodeQueryValue(e9[2] || "");
    void 0 === t8[s5] ? t8[s5] = a13 : Array.isArray(t8[s5]) ? t8[s5].push(a13) : t8[s5] = [t8[s5], a13];
  }
  return t8;
}
function stringifyQuery2(e8) {
  return Object.keys(e8).filter((t8) => void 0 !== e8[t8]).map((t8) => {
    return r3 = t8, "number" != typeof (s5 = e8[t8]) && "boolean" != typeof s5 || (s5 = String(s5)), s5 ? Array.isArray(s5) ? s5.map((e9) => `${encodeQueryKey2(r3)}=${encodeQueryValue2(e9)}`).join("&") : `${encodeQueryKey2(r3)}=${encodeQueryValue2(s5)}` : encodeQueryKey2(r3);
    var r3, s5;
  }).filter(Boolean).join("&");
}
function hasProtocol(e8, t8 = {}) {
  return "boolean" == typeof t8 && (t8 = { acceptRelative: t8 }), t8.strict ? Ot2.test(e8) : Mt2.test(e8) || !!t8.acceptRelative && It2.test(e8);
}
function isScriptProtocol(e8) {
  return !!e8 && Bt2.test(e8);
}
function hasTrailingSlash(e8 = "", t8) {
  return t8 ? Nt2.test(e8) : e8.endsWith("/");
}
function withoutTrailingSlash(e8 = "", t8) {
  if (!t8) return (hasTrailingSlash(e8) ? e8.slice(0, -1) : e8) || "/";
  if (!hasTrailingSlash(e8, true)) return e8 || "/";
  let r3 = e8, s5 = "";
  const a13 = e8.indexOf("#");
  -1 !== a13 && (r3 = e8.slice(0, a13), s5 = e8.slice(a13));
  const [c5, ...u9] = r3.split("?");
  return ((c5.endsWith("/") ? c5.slice(0, -1) : c5) || "/") + (u9.length > 0 ? `?${u9.join("?")}` : "") + s5;
}
function withTrailingSlash(e8 = "", t8) {
  if (!t8) return e8.endsWith("/") ? e8 : e8 + "/";
  if (hasTrailingSlash(e8, true)) return e8 || "/";
  let r3 = e8, s5 = "";
  const a13 = e8.indexOf("#");
  if (-1 !== a13 && (r3 = e8.slice(0, a13), s5 = e8.slice(a13), !r3)) return s5;
  const [c5, ...u9] = r3.split("?");
  return c5 + "/" + (u9.length > 0 ? `?${u9.join("?")}` : "") + s5;
}
function withLeadingSlash(e8 = "") {
  return (function(e9 = "") {
    return e9.startsWith("/");
  })(e8) ? e8 : "/" + e8;
}
function withoutBase(e8, t8) {
  if (isEmptyURL(t8)) return e8;
  const r3 = withoutTrailingSlash(t8);
  if (!e8.startsWith(r3)) return e8;
  const s5 = e8[r3.length];
  if (s5 && "/" !== s5 && "?" !== s5) return e8;
  return "/" + e8.slice(r3.length).replace(/^\/+/, "");
}
function withQuery(e8, t8) {
  const r3 = parseURL(e8), s5 = { ...parseQuery(r3.search), ...t8 };
  return r3.search = stringifyQuery2(s5), (function(e9) {
    const t9 = e9.pathname || "", r4 = e9.search ? (e9.search.startsWith("?") ? "" : "?") + e9.search : "", s6 = e9.hash || "", a13 = e9.auth ? e9.auth + "@" : "", c5 = e9.host || "", u9 = e9.protocol || e9[Dt2] ? (e9.protocol || "") + "//" : "";
    return u9 + a13 + c5 + t9 + r4 + s6;
  })(r3);
}
function getQuery(e8) {
  return parseQuery(parseURL(e8).search);
}
function isEmptyURL(e8) {
  return !e8 || "/" === e8;
}
function joinURL(e8, ...t8) {
  let r3 = e8 || "";
  for (const e9 of t8.filter((e10) => /* @__PURE__ */ (function(e11) {
    return e11 && "/" !== e11;
  })(e10))) if (r3) {
    const t9 = e9.replace(Lt2, "");
    r3 = withTrailingSlash(r3) + t9;
  } else r3 = e9;
  return r3;
}
function joinRelativeURL(...e8) {
  const t8 = /\/(?!\/)/, r3 = e8.filter(Boolean), s5 = [];
  let a13 = 0;
  for (const e9 of r3) if (e9 && "/" !== e9) {
    for (const [r4, c6] of e9.split(t8).entries()) if (c6 && "." !== c6) if (".." !== c6) 1 === r4 && s5[s5.length - 1]?.endsWith(":/") ? s5[s5.length - 1] += "/" + c6 : (s5.push(c6), a13++);
    else {
      if (1 === s5.length && hasProtocol(s5[0])) continue;
      s5.pop(), a13--;
    }
  }
  let c5 = s5.join("/");
  return a13 >= 0 ? r3[0]?.startsWith("/") && !c5.startsWith("/") ? c5 = "/" + c5 : r3[0]?.startsWith("./") && !c5.startsWith("./") && (c5 = "./" + c5) : c5 = "../".repeat(-1 * a13) + c5, r3[r3.length - 1]?.endsWith("/") && !c5.endsWith("/") && (c5 += "/"), c5;
}
function parseURL(e8 = "", t8) {
  const r3 = e8.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r3) {
    const [, e9, t9 = ""] = r3;
    return { protocol: e9.toLowerCase(), pathname: t9, href: e9 + t9, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e8, { acceptRelative: true })) return parsePath(e8);
  const [, s5 = "", a13, c5 = ""] = e8.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u9 = "", d7 = ""] = c5.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s5 && (d7 = d7.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: p6, search: f6, hash: g9 } = parsePath(d7);
  return { protocol: s5.toLowerCase(), auth: a13 ? a13.slice(0, Math.max(0, a13.length - 1)) : "", host: u9, pathname: p6, search: f6, hash: g9, [Dt2]: !s5 };
}
function parsePath(e8 = "") {
  const [t8 = "", r3 = "", s5 = ""] = (e8.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t8, search: r3, hash: s5 };
}
function createRouter$1(e8 = {}) {
  const t8 = { options: e8, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t9) => e8.strictTrailingSlash ? t9 : t9.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e8.routes) for (const r3 in e8.routes) insert(t8, normalizeTrailingSlash(r3), e8.routes[r3]);
  return { ctx: t8, lookup: /* @__PURE__ */ __name((e9) => (function(e10, t9) {
    const r3 = e10.staticRoutesMap[t9];
    if (r3) return r3.data;
    const s5 = t9.split("/"), a13 = {};
    let c5 = false, u9 = null, d7 = e10.rootNode, p6 = null;
    for (let e11 = 0; e11 < s5.length; e11++) {
      const t10 = s5[e11];
      null !== d7.wildcardChildNode && (u9 = d7.wildcardChildNode, p6 = s5.slice(e11).join("/"));
      const r4 = d7.children.get(t10);
      if (void 0 === r4) {
        if (d7 && d7.placeholderChildren.length > 1) {
          const t11 = s5.length - e11;
          d7 = d7.placeholderChildren.find((e12) => e12.maxDepth === t11) || null;
        } else d7 = d7.placeholderChildren[0] || null;
        if (!d7) break;
        d7.paramName && (a13[d7.paramName] = t10), c5 = true;
      } else d7 = r4;
    }
    null !== d7 && null !== d7.data || null === u9 || (d7 = u9, a13[d7.paramName || "_"] = p6, c5 = true);
    if (!d7) return null;
    if (c5) return { ...d7.data, params: c5 ? a13 : void 0 };
    return d7.data;
  })(t8, normalizeTrailingSlash(e9)), "lookup"), insert: /* @__PURE__ */ __name((e9, r3) => insert(t8, normalizeTrailingSlash(e9), r3), "insert"), remove: /* @__PURE__ */ __name((e9) => (function(e10, t9) {
    let r3 = false;
    const s5 = t9.split("/");
    let a13 = e10.rootNode;
    for (const e11 of s5) if (a13 = a13.children.get(e11), !a13) return r3;
    if (a13.data) {
      const e11 = s5.at(-1) || "";
      a13.data = null, 0 === Object.keys(a13.children).length && a13.parent && (a13.parent.children.delete(e11), a13.parent.wildcardChildNode = null, a13.parent.placeholderChildren = []), r3 = true;
    }
    return r3;
  })(t8, normalizeTrailingSlash(e9)), "remove") };
}
function insert(e8, t8, r3) {
  let s5 = true;
  const a13 = t8.split("/");
  let c5 = e8.rootNode, u9 = 0;
  const d7 = [c5];
  for (const e9 of a13) {
    let t9;
    if (t9 = c5.children.get(e9)) c5 = t9;
    else {
      const r4 = getNodeType(e9);
      t9 = createRadixNode({ type: r4, parent: c5 }), c5.children.set(e9, t9), r4 === Ft2 ? (t9.paramName = "*" === e9 ? "_" + u9++ : e9.slice(1), c5.placeholderChildren.push(t9), s5 = false) : r4 === $t2 && (c5.wildcardChildNode = t9, t9.paramName = e9.slice(3) || "_", s5 = false), d7.push(t9), c5 = t9;
    }
  }
  for (const [e9, t9] of d7.entries()) t9.maxDepth = Math.max(d7.length - e9, t9.maxDepth || 0);
  return c5.data = r3, true === s5 && (e8.staticRoutesMap[t8] = c5), c5;
}
function createRadixNode(e8 = {}) {
  return { type: e8.type || zt2, maxDepth: 0, parent: e8.parent || null, children: /* @__PURE__ */ new Map(), data: e8.data || null, paramName: e8.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e8) {
  return e8.startsWith("**") ? $t2 : ":" === e8[0] || "*" === e8 ? Ft2 : zt2;
}
function toRouteMatcher(e8) {
  return /* @__PURE__ */ (function(e9, t8) {
    return { ctx: { table: e9 }, matchAll: /* @__PURE__ */ __name((r3) => _matchRoutes(r3, e9, t8), "matchAll") };
  })(_routerNodeToTable("", e8.ctx.rootNode), e8.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e8, t8, r3) {
  true !== r3 && e8.endsWith("/") && (e8 = e8.slice(0, -1) || "/");
  const s5 = [];
  for (const [r4, a14] of _sortRoutesMap(t8.wildcard)) (e8 === r4 || e8.startsWith(r4 + "/")) && s5.push(a14);
  for (const [r4, a14] of _sortRoutesMap(t8.dynamic)) if (e8.startsWith(r4 + "/")) {
    const t9 = "/" + e8.slice(r4.length).split("/").splice(2).join("/");
    s5.push(..._matchRoutes(t9, a14));
  }
  const a13 = t8.static.get(e8);
  return a13 && s5.push(a13), s5.filter(Boolean);
}
function _sortRoutesMap(e8) {
  return [...e8.entries()].sort((e9, t8) => e9[0].length - t8[0].length);
}
function _routerNodeToTable(e8, t8) {
  const r3 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e9, t9) {
    if (e9) if (t9.type !== zt2 || e9.includes("*") || e9.includes(":")) {
      if (t9.type === $t2) r3.wildcard.set(e9.replace("/**", ""), t9.data);
      else if (t9.type === Ft2) {
        const s5 = _routerNodeToTable("", t9);
        return t9.data && s5.static.set("/", t9.data), void r3.dynamic.set(e9.replace(/\/\*|\/:\w+/, ""), s5);
      }
    } else t9.data && r3.static.set(e9, t9.data);
    for (const [r4, s5] of t9.children.entries()) _addNode(`${e9}/${r4}`.replace("//", "/"), s5);
  }, "_addNode"))(e8, t8), r3;
}
function isPlainObject$1(e8) {
  if (null === e8 || "object" != typeof e8) return false;
  const t8 = Object.getPrototypeOf(e8);
  return (null === t8 || t8 === Object.prototype || null === Object.getPrototypeOf(t8)) && (!(Symbol.iterator in e8) && (!(Symbol.toStringTag in e8) || "[object Module]" === Object.prototype.toString.call(e8)));
}
function _defu(e8, t8, r3 = ".", s5) {
  if (!isPlainObject$1(t8)) return _defu(e8, {}, r3, s5);
  const a13 = { ...t8 };
  for (const t9 of Object.keys(e8)) {
    if ("__proto__" === t9 || "constructor" === t9) continue;
    const c5 = e8[t9];
    null != c5 && (s5 && s5(a13, t9, c5, r3) || (Array.isArray(c5) && Array.isArray(a13[t9]) ? a13[t9] = [...c5, ...a13[t9]] : isPlainObject$1(c5) && isPlainObject$1(a13[t9]) ? a13[t9] = _defu(c5, a13[t9], (r3 ? `${r3}.` : "") + t9.toString(), s5) : a13[t9] = c5));
  }
  return a13;
}
function createDefu(e8) {
  return (...t8) => t8.reduce((t9, r3) => _defu(t9, r3, "", e8), {});
}
function o5(e8) {
  throw new Error(`${e8} is not implemented yet!`);
}
function p$1(e8) {
  const t8 = {};
  for (const [r3, s5] of Object.entries(e8)) r3 && (t8[r3] = (Array.isArray(s5) ? s5 : [s5]).filter(Boolean));
  return t8;
}
function v6(e8 = {}) {
  if (e8 instanceof Headers) return e8;
  const t8 = new Headers();
  for (const [r3, s5] of Object.entries(e8)) if (void 0 !== s5) {
    if (Array.isArray(s5)) {
      for (const e9 of s5) t8.append(r3, String(e9));
      continue;
    }
    t8.set(r3, String(s5));
  }
  return t8;
}
async function b5(e8, t8) {
  const r3 = new y6(), s5 = new w6(r3);
  let a13;
  if (r3.url = t8.url?.toString() || "/", !r3.url.startsWith("/")) {
    const e9 = new URL(r3.url);
    a13 = e9.host, r3.url = e9.pathname + e9.search + e9.hash;
  }
  r3.method = t8.method || "GET", r3.headers = (function(e9 = {}) {
    const t9 = new Kt2(), r4 = Array.isArray(e9) || (function(e10) {
      return "function" == typeof e10?.entries;
    })(e9) ? e9 : Object.entries(e9);
    for (const [e10, s6] of r4) if (s6) {
      if (void 0 === t9[e10]) {
        t9[e10] = s6;
        continue;
      }
      t9[e10] = [...Array.isArray(t9[e10]) ? t9[e10] : [t9[e10]], ...Array.isArray(s6) ? s6 : [s6]];
    }
    return t9;
  })(t8.headers || {}), r3.headers.host || (r3.headers.host = t8.host || a13 || "localhost"), r3.connection.encrypted = r3.connection.encrypted || "https" === t8.protocol, r3.body = t8.body || null, r3.__unenv__ = t8.context, await e8(r3, s5);
  let c5 = s5._data;
  (Zt2.has(s5.statusCode) || "HEAD" === r3.method.toUpperCase()) && (c5 = null, delete s5._headers["content-length"]);
  const u9 = { status: s5.statusCode, statusText: s5.statusMessage, headers: s5._headers, body: c5 };
  return r3.destroy(), s5.destroy(), u9;
}
function hasProp(e8, t8) {
  try {
    return t8 in e8;
  } catch {
    return false;
  }
}
function createError(e8) {
  if ("string" == typeof e8) return new H3Error(e8);
  if (isError(e8)) return e8;
  const t8 = new H3Error(e8.message ?? e8.statusMessage ?? "", { cause: e8.cause || e8 });
  if (hasProp(e8, "stack")) try {
    Object.defineProperty(t8, "stack", { get: /* @__PURE__ */ __name(() => e8.stack, "get") });
  } catch {
    try {
      t8.stack = e8.stack;
    } catch {
    }
  }
  if (e8.data && (t8.data = e8.data), e8.statusCode ? t8.statusCode = sanitizeStatusCode(e8.statusCode, t8.statusCode) : e8.status && (t8.statusCode = sanitizeStatusCode(e8.status, t8.statusCode)), e8.statusMessage ? t8.statusMessage = e8.statusMessage : e8.statusText && (t8.statusMessage = e8.statusText), t8.statusMessage) {
    const e9 = t8.statusMessage;
    sanitizeStatusMessage(t8.statusMessage) !== e9 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e8.fatal && (t8.fatal = e8.fatal), void 0 !== e8.unhandled && (t8.unhandled = e8.unhandled), t8;
}
function isError(e8) {
  return true === e8?.constructor?.__h3_error__;
}
function getRequestHeaders(e8) {
  const t8 = {};
  for (const r3 in e8.node.req.headers) {
    const s5 = e8.node.req.headers[r3];
    t8[r3] = Array.isArray(s5) ? s5.filter(Boolean).join(", ") : s5;
  }
  return t8;
}
function getRequestHost(e8, t8 = {}) {
  if (t8.xForwardedHost) {
    const t9 = e8.node.req.headers["x-forwarded-host"], r3 = (t9 || "").split(",").shift()?.trim();
    if (r3) return r3;
  }
  return e8.node.req.headers.host || "localhost";
}
function getRequestProtocol(e8, t8 = {}) {
  return false !== t8.xForwardedProto && "https" === e8.node.req.headers["x-forwarded-proto"] || e8.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(e8, t8 = {}) {
  const r3 = getRequestHost(e8, t8), s5 = getRequestProtocol(e8, t8), a13 = (e8.node.req.originalUrl || e8.path).replace(/^[/\\]+/g, "/");
  return new URL(a13, `${s5}://${r3}`);
}
function readRawBody(e8, t8 = "utf8") {
  !(function(e9, t9) {
    if (!(function(e10, t10) {
      if ("string" == typeof t10) {
        if (e10.method === t10) return true;
      } else if (t10.includes(e10.method)) return true;
      return false;
    })(e9, t9)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  })(e8, Gt2);
  const r3 = e8._requestBody || e8.web?.request?.body || e8.node.req[Jt2] || e8.node.req.rawBody || e8.node.req.body;
  if (r3) {
    const e9 = Promise.resolve(r3).then((e10) => s4.isBuffer(e10) ? e10 : "function" == typeof e10.pipeTo ? new Promise((t9, r4) => {
      const a14 = [];
      e10.pipeTo(new WritableStream({ write(e11) {
        a14.push(e11);
      }, close() {
        t9(s4.concat(a14));
      }, abort(e11) {
        r4(e11);
      } })).catch(r4);
    }) : "function" == typeof e10.pipe ? new Promise((t9, r4) => {
      const a14 = [];
      e10.on("data", (e11) => {
        a14.push(e11);
      }).on("end", () => {
        t9(s4.concat(a14));
      }).on("error", r4);
    }) : e10.constructor === Object ? s4.from(JSON.stringify(e10)) : e10 instanceof URLSearchParams ? s4.from(e10.toString()) : e10 instanceof FormData ? new Response(e10).bytes().then((e11) => s4.from(e11)) : s4.from(e10));
    return t8 ? e9.then((e10) => e10.toString(t8)) : e9;
  }
  if (!Number.parseInt(e8.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(String(e8.node.req.headers["transfer-encoding"] ?? ""))) return Promise.resolve(void 0);
  const a13 = e8.node.req[Jt2] = new Promise((t9, r4) => {
    const a14 = [];
    e8.node.req.on("error", (e9) => {
      r4(e9);
    }).on("data", (e9) => {
      a14.push(e9);
    }).on("end", () => {
      t9(s4.concat(a14));
    });
  });
  return t8 ? a13.then((e9) => e9.toString(t8)) : a13;
}
function handleCacheHeaders(e8, t8) {
  const r3 = ["public", ...t8.cacheControls || []];
  let s5 = false;
  if (void 0 !== t8.maxAge && r3.push("max-age=" + +t8.maxAge, "s-maxage=" + +t8.maxAge), t8.modifiedTime) {
    const r4 = new Date(t8.modifiedTime), a13 = e8.node.req.headers["if-modified-since"];
    e8.node.res.setHeader("last-modified", r4.toUTCString()), a13 && new Date(a13) >= r4 && (s5 = true);
  }
  if (t8.etag) {
    e8.node.res.setHeader("etag", t8.etag);
    e8.node.req.headers["if-none-match"] === t8.etag && (s5 = true);
  }
  return e8.node.res.setHeader("cache-control", r3.join(", ")), !!s5 && (e8.node.res.statusCode = 304, e8.handled || e8.node.res.end(), true);
}
function sanitizeStatusMessage(e8 = "") {
  return e8.replace(Yt2, "");
}
function sanitizeStatusCode(e8, t8 = 200) {
  return e8 ? ("string" == typeof e8 && (e8 = Number.parseInt(e8, 10)), e8 < 100 || e8 > 999 ? t8 : e8) : t8;
}
function splitCookiesString(e8) {
  if (Array.isArray(e8)) return e8.flatMap((e9) => splitCookiesString(e9));
  if ("string" != typeof e8) return [];
  const t8 = [];
  let r3, s5, a13, c5, u9, d7 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d7 < e8.length && /\s/.test(e8.charAt(d7)); ) d7 += 1;
    return d7 < e8.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s5 = e8.charAt(d7), "=" !== s5 && ";" !== s5 && "," !== s5), "notSpecialChar");
  for (; d7 < e8.length; ) {
    for (r3 = d7, u9 = false; skipWhitespace(); ) if (s5 = e8.charAt(d7), "," === s5) {
      for (a13 = d7, d7 += 1, skipWhitespace(), c5 = d7; d7 < e8.length && notSpecialChar(); ) d7 += 1;
      d7 < e8.length && "=" === e8.charAt(d7) ? (u9 = true, d7 = c5, t8.push(e8.slice(r3, a13)), r3 = d7) : d7 = a13 + 1;
    } else d7 += 1;
    (!u9 || d7 >= e8.length) && t8.push(e8.slice(r3));
  }
  return t8;
}
function send(e8, t8, r3) {
  return r3 && (function(e9, t9) {
    t9 && 304 !== e9.node.res.statusCode && !e9.node.res.getHeader("content-type") && e9.node.res.setHeader("content-type", t9);
  })(e8, r3), new Promise((r4) => {
    Xt2(() => {
      e8.handled || e8.node.res.end(t8), r4();
    });
  });
}
function setResponseStatus(e8, t8, r3) {
  t8 && (e8.node.res.statusCode = sanitizeStatusCode(t8, e8.node.res.statusCode)), r3 && (e8.node.res.statusMessage = sanitizeStatusMessage(r3));
}
function getResponseHeader(e8, t8) {
  return e8.node.res.getHeader(t8);
}
function setResponseHeaders(e8, t8) {
  for (const [r3, s5] of Object.entries(t8)) e8.node.res.setHeader(r3, s5);
}
function setResponseHeader(e8, t8, r3) {
  e8.node.res.setHeader(t8, r3);
}
function appendResponseHeader(e8, t8, r3) {
  let s5 = e8.node.res.getHeader(t8);
  s5 ? (Array.isArray(s5) || (s5 = [s5.toString()]), e8.node.res.setHeader(t8, [...s5, r3])) : e8.node.res.setHeader(t8, r3);
}
function sendStream(e8, t8) {
  if (!t8 || "object" != typeof t8) throw new Error("[h3] Invalid stream provided.");
  if (e8.node.res._data = t8, !e8.node.res.socket) return e8._handled = true, Promise.resolve();
  if (hasProp(t8, "pipeTo") && "function" == typeof t8.pipeTo) return t8.pipeTo(new WritableStream({ write(t9) {
    e8.node.res.write(t9);
  } })).then(() => {
    e8.node.res.end();
  });
  if (hasProp(t8, "pipe") && "function" == typeof t8.pipe) return new Promise((r3, s5) => {
    t8.pipe(e8.node.res), t8.on && (t8.on("end", () => {
      e8.node.res.end(), r3();
    }), t8.on("error", (e9) => {
      s5(e9);
    })), e8.node.res.on("close", () => {
      t8.abort && t8.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function writeEarlyHints(e8, t8, r3 = noop2) {
  if (!e8.node.res.socket) return void r3();
  ("string" == typeof t8 || Array.isArray(t8)) && (t8 = { link: t8 }), t8.link && (t8.link = Array.isArray(t8.link) ? t8.link : t8.link.split(","));
  const s5 = Object.entries(t8).map((e9) => [e9[0].toLowerCase(), e9[1]]);
  if (0 === s5.length) return void r3();
  let a13 = "HTTP/1.1 103 Early Hints";
  t8.link && (a13 += `\r
Link: ${t8.link.join(", ")}`);
  for (const [e9, t9] of s5) "link" !== e9 && (a13 += `\r
${e9}: ${t9}`);
  e8.node.res.socket ? e8.node.res.socket.write(`${a13}\r
\r
`, "utf8", r3) : r3();
}
function sendWebResponse(e8, t8) {
  for (const [r3, s5] of t8.headers) "set-cookie" === r3 ? e8.node.res.appendHeader(r3, splitCookiesString(s5)) : e8.node.res.setHeader(r3, s5);
  if (t8.status && (e8.node.res.statusCode = sanitizeStatusCode(t8.status, e8.node.res.statusCode)), t8.statusText && (e8.node.res.statusMessage = sanitizeStatusMessage(t8.statusText)), t8.redirected && e8.node.res.setHeader("location", t8.url), t8.body) return sendStream(e8, t8.body);
  e8.node.res.end();
}
async function proxyRequest(e8, t8, r3 = {}) {
  let s5, a13;
  tn.has(e8.method) && (r3.streamRequest ? (s5 = (function(e9) {
    if (!Gt2.includes(e9.method)) return;
    const t9 = e9.web?.request?.body || e9._requestBody;
    return t9 || (Jt2 in e9.node.req || "rawBody" in e9.node.req || "body" in e9.node.req || "__unenv__" in e9.node.req ? new ReadableStream({ async start(t10) {
      const r4 = await readRawBody(e9, false);
      r4 && t10.enqueue(r4), t10.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t10) => {
      e9.node.req.on("data", (e10) => {
        t10.enqueue(e10);
      }), e9.node.req.on("end", () => {
        t10.close();
      }), e9.node.req.on("error", (e10) => {
        t10.error(e10);
      });
    }, "start") }));
  })(e8), a13 = "half") : s5 = await readRawBody(e8, false).catch(() => {
  }));
  const c5 = r3.fetchOptions?.method || e8.method, u9 = (function(e9, ...t9) {
    const r4 = t9.filter(Boolean);
    if (0 === r4.length) return e9;
    const s6 = new Headers(e9);
    for (const e10 of r4) {
      const t10 = Array.isArray(e10) ? e10 : "function" == typeof e10.entries ? e10.entries() : Object.entries(e10);
      for (const [e11, r5] of t10) void 0 !== r5 && s6.set(e11, r5);
    }
    return s6;
  })(getProxyRequestHeaders(e8, { host: t8.startsWith("/") }), r3.fetchOptions?.headers, r3.headers);
  return (async function(e9, t9, r4 = {}) {
    let s6;
    try {
      s6 = await _getFetch(r4.fetch)(t9, { headers: r4.headers, ignoreResponseError: true, ...r4.fetchOptions });
    } catch (e10) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e10 });
    }
    e9.node.res.statusCode = sanitizeStatusCode(s6.status, e9.node.res.statusCode), e9.node.res.statusMessage = sanitizeStatusMessage(s6.statusText);
    const a14 = [];
    for (const [t10, r5] of s6.headers.entries()) "content-encoding" !== t10 && "content-length" !== t10 && ("set-cookie" !== t10 ? e9.node.res.setHeader(t10, r5) : a14.push(...splitCookiesString(r5)));
    a14.length > 0 && e9.node.res.setHeader("set-cookie", a14.map((e10) => (r4.cookieDomainRewrite && (e10 = rewriteCookieProperty(e10, r4.cookieDomainRewrite, "domain")), r4.cookiePathRewrite && (e10 = rewriteCookieProperty(e10, r4.cookiePathRewrite, "path")), e10)));
    r4.onResponse && await r4.onResponse(e9, s6);
    if (void 0 !== s6._data) return s6._data;
    if (e9.handled) return;
    if (false === r4.sendStream) {
      const t10 = new Uint8Array(await s6.arrayBuffer());
      return e9.node.res.end(t10);
    }
    if (s6.body) for await (const t10 of s6.body) e9.node.res.write(t10);
    return e9.node.res.end();
  })(e8, t8, { ...r3, fetchOptions: { method: c5, body: s5, duplex: a13, ...r3.fetchOptions, headers: u9 } });
}
function getProxyRequestHeaders(e8, t8) {
  const r3 = /* @__PURE__ */ Object.create(null), s5 = getRequestHeaders(e8);
  for (const e9 in s5) (!nn.has(e9) || "host" === e9 && t8?.host) && (r3[e9] = s5[e9]);
  return r3;
}
function fetchWithEvent(e8, t8, r3, s5) {
  return _getFetch(s5?.fetch)(t8, { ...r3, context: r3?.context || e8.context, headers: { ...getProxyRequestHeaders(e8, { host: "string" == typeof t8 && t8.startsWith("/") }), ...r3?.headers } });
}
function _getFetch(e8) {
  if (e8) return e8;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e8, t8, r3) {
  const s5 = "string" == typeof t8 ? { "*": t8 } : t8;
  return e8.replace(new RegExp(`(;\\s*${r3}=)([^;]+)`, "gi"), (e9, t9, r4) => {
    let a13;
    if (r4 in s5) a13 = s5[r4];
    else {
      if (!("*" in s5)) return e9;
      a13 = s5["*"];
    }
    return a13 ? t9 + a13 : "";
  });
}
function isEvent(e8) {
  return hasProp(e8, "__is_event__");
}
function createEvent(e8, t8) {
  return new H3Event(e8, t8);
}
function defineEventHandler(e8) {
  if ("function" == typeof e8) return e8.__is_handler__ = true, e8;
  const t8 = { onRequest: _normalizeArray(e8.onRequest), onBeforeResponse: _normalizeArray(e8.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r3) => (async function(e9, t9, r4) {
    if (r4.onRequest) {
      for (const t10 of r4.onRequest) if (await t10(e9), e9.handled) return;
    }
    const s5 = await t9(e9), a13 = { body: s5 };
    if (r4.onBeforeResponse) for (const t10 of r4.onBeforeResponse) await t10(e9, a13);
    return a13.body;
  })(r3, e8.handler, t8), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e8.handler.__resolve__, _handler.__websocket__ = e8.websocket, _handler;
}
function _normalizeArray(e8) {
  return e8 ? Array.isArray(e8) ? e8 : [e8] : void 0;
}
function toEventHandler(e8, t8, r3) {
  return e8;
}
function createApp$1(e8 = {}) {
  const t8 = [], r3 = (function(e9, t9) {
    const r4 = t9.debug ? 2 : void 0;
    return rn(async (s6) => {
      s6.node.req.originalUrl = s6.node.req.originalUrl || s6.node.req.url || "/";
      const a14 = s6.node.req.url || "/", c6 = (function(e10) {
        const t10 = e10.indexOf("?"), r5 = -1 === t10 ? e10 : e10.slice(0, t10), s7 = -1 === t10 ? "" : e10.slice(t10);
        return (r5.includes("%25") ? decodePath(r5.replace(/%25/g, "%2525")) : decodePath(r5)) + s7;
      })(s6._path || a14);
      s6._path = c6;
      const u9 = c6 !== a14;
      let d7;
      t9.onRequest && await t9.onRequest(s6);
      for (const p6 of e9) {
        if (p6.route.length > 1) {
          if (!c6.startsWith(p6.route)) continue;
          d7 = c6.slice(p6.route.length) || "/";
        } else d7 = c6;
        if (p6.match && !p6.match(d7, s6)) continue;
        s6._path = d7, s6.node.req.url = u9 ? p6.route.length > 1 ? a14.slice(p6.route.length) || "/" : a14 : d7;
        const e10 = await p6.handler(s6), f6 = void 0 === e10 ? void 0 : await e10;
        if (void 0 !== f6) {
          const e11 = { body: f6 };
          return t9.onBeforeResponse && (s6._onBeforeResponseCalled = true, await t9.onBeforeResponse(s6, e11)), await handleHandlerResponse(s6, e11.body, r4), void (t9.onAfterResponse && (s6._onAfterResponseCalled = true, await t9.onAfterResponse(s6, e11)));
        }
        if (s6.handled) return void (t9.onAfterResponse && (s6._onAfterResponseCalled = true, await t9.onAfterResponse(s6, void 0)));
      }
      if (!s6.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${s6.path || "/"}.` });
      t9.onAfterResponse && (s6._onAfterResponseCalled = true, await t9.onAfterResponse(s6, void 0));
    });
  })(t8, e8), s5 = /* @__PURE__ */ (function(e9) {
    return async (t9) => {
      let r4;
      for (const s6 of e9) {
        if ("/" === s6.route && !s6.handler.__resolve__) continue;
        if (!t9.startsWith(s6.route)) continue;
        if (r4 = t9.slice(s6.route.length) || "/", s6.match && !s6.match(r4, void 0)) continue;
        let e10 = { route: s6.route, handler: s6.handler };
        if (e10.handler.__resolve__) {
          const t10 = await e10.handler.__resolve__(r4);
          if (!t10) continue;
          e10 = { ...e10, ...t10, route: joinURL(e10.route || "/", t10.route || "/") };
        }
        return e10;
      }
    };
  })(t8);
  r3.__resolve__ = s5;
  const a13 = /* @__PURE__ */ (function(e9) {
    let t9;
    return () => (t9 || (t9 = e9()), t9);
  })(() => {
    return t9 = s5, { ...e8.websocket, async resolve(e9) {
      const r4 = e9.request?.url || e9.url || "/", { pathname: s6 } = "string" == typeof r4 ? parseURL(r4) : r4, a14 = await t9(s6);
      return a14?.handler?.__websocket__ || {};
    } };
    var t9;
  }), c5 = { use: /* @__PURE__ */ __name((e9, t9, r4) => use(c5, e9, t9, r4), "use"), resolve: s5, handler: r3, stack: t8, options: e8, get websocket() {
    return a13();
  } };
  return c5;
}
function use(e8, t8, r3, s5) {
  if (Array.isArray(t8)) for (const a13 of t8) use(e8, a13, r3, s5);
  else if (Array.isArray(r3)) for (const a13 of r3) use(e8, t8, a13, s5);
  else "string" == typeof t8 ? e8.stack.push(normalizeLayer({ ...s5, route: t8, handler: r3 })) : "function" == typeof t8 ? e8.stack.push(normalizeLayer({ ...r3, handler: t8 })) : e8.stack.push(normalizeLayer({ ...t8 }));
  return e8;
}
function normalizeLayer(e8) {
  let t8 = e8.handler;
  return t8.handler && (t8 = t8.handler), e8.lazy ? t8 = lazyEventHandler(t8) : (function(e9) {
    return hasProp(e9, "__is_handler__");
  })(t8) || (t8 = toEventHandler(t8, 0, e8.route)), { route: withoutTrailingSlash(e8.route), match: e8.match, handler: t8 };
}
function handleHandlerResponse(e8, t8, r3) {
  if (null === t8) return (function(e9, t9) {
    if (e9.handled) return;
    t9 || 200 === e9.node.res.statusCode || (t9 = e9.node.res.statusCode);
    const r4 = sanitizeStatusCode(t9, 204);
    204 === r4 && e9.node.res.removeHeader("content-length"), e9.node.res.writeHead(r4), e9.node.res.end();
  })(e8);
  if (t8) {
    if (a13 = t8, "undefined" != typeof Response && a13 instanceof Response) return sendWebResponse(e8, t8);
    if ((function(e9) {
      if (!e9 || "object" != typeof e9) return false;
      if ("function" == typeof e9.pipe) {
        if ("function" == typeof e9._read) return true;
        if ("function" == typeof e9.abort) return true;
      }
      return "function" == typeof e9.pipeTo;
    })(t8)) return sendStream(e8, t8);
    if (t8.buffer) return send(e8, t8);
    if (t8.arrayBuffer && "function" == typeof t8.arrayBuffer) return t8.arrayBuffer().then((r4) => send(e8, s4.from(r4), t8.type));
    if (t8 instanceof Error) throw createError(t8);
    if ("function" == typeof t8.end) return true;
  }
  var a13;
  const c5 = typeof t8;
  if ("string" === c5) return send(e8, t8, Qt2.html);
  if ("object" === c5 || "boolean" === c5 || "number" === c5) return send(e8, JSON.stringify(t8, void 0, r3), Qt2.json);
  if ("bigint" === c5) return send(e8, t8.toString(), Qt2.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${c5} as response.` });
}
function toNodeListener(e8) {
  return async function(t8, r3) {
    const s5 = createEvent(t8, r3);
    try {
      await e8.handler(s5);
    } catch (t9) {
      const r4 = createError(t9);
      if (isError(t9) || (r4.unhandled = true), setResponseStatus(s5, r4.statusCode, r4.statusMessage), e8.options.onError && await e8.options.onError(r4, s5), s5.handled) return;
      (r4.unhandled || r4.fatal) && console.error("[h3]", r4.fatal ? "[fatal]" : "[unhandled]", r4), e8.options.onBeforeResponse && !s5._onBeforeResponseCalled && await e8.options.onBeforeResponse(s5, { body: r4 }), await (function(e9, t10, r5) {
        if (e9.handled) return;
        const s6 = isError(t10) ? t10 : createError(t10), a13 = { statusCode: s6.statusCode, statusMessage: s6.statusMessage, stack: [], data: s6.data };
        if (r5 && (a13.stack = (s6.stack || "").split("\n").map((e10) => e10.trim())), e9.handled) return;
        setResponseStatus(e9, Number.parseInt(s6.statusCode), s6.statusMessage), e9.node.res.setHeader("content-type", Qt2.json), e9.node.res.end(JSON.stringify(a13, void 0, 2));
      })(s5, r4, !!e8.options.debug), e8.options.onAfterResponse && !s5._onAfterResponseCalled && await e8.options.onAfterResponse(s5, { body: r4 });
    }
  };
}
function flatHooks$1(e8, t8 = {}, r3) {
  for (const s5 in e8) {
    const a13 = e8[s5], c5 = r3 ? `${r3}:${s5}` : s5;
    "object" == typeof a13 && null !== a13 ? flatHooks$1(a13, t8, c5) : "function" == typeof a13 && (t8[c5] = a13);
  }
  return t8;
}
function serialTaskCaller$1(e8, t8) {
  const r3 = t8.shift(), s5 = an(r3);
  return e8.reduce((e9, r4) => e9.then(() => s5.run(() => r4(...t8))), Promise.resolve());
}
function parallelTaskCaller$1(e8, t8) {
  const r3 = t8.shift(), s5 = an(r3);
  return Promise.all(e8.map((e9) => s5.run(() => e9(...t8))));
}
function callEachWith$1(e8, t8) {
  for (const r3 of [...e8]) r3(t8);
}
function isPayloadMethod(e8 = "GET") {
  return un.has(e8.toUpperCase());
}
function resolveFetchOptions(e8, t8, r3, s5) {
  const a13 = (function(e9, t9, r4) {
    if (!t9) return new r4(e9);
    const s6 = new r4(t9);
    if (e9) for (const [t10, a14] of Symbol.iterator in e9 || Array.isArray(e9) ? e9 : new r4(e9)) s6.set(t10, a14);
    return s6;
  })(t8?.headers ?? e8?.headers, r3?.headers, s5);
  let c5;
  return (r3?.query || r3?.params || t8?.params || t8?.query) && (c5 = { ...r3?.params, ...r3?.query, ...t8?.params, ...t8?.query }), { ...r3, ...t8, query: c5, params: c5, headers: a13 };
}
async function callHooks$1(e8, t8) {
  if (t8) if (Array.isArray(t8)) for (const r3 of t8) await r3(e8);
  else await t8(e8);
}
function createFetch(e8 = {}) {
  const { fetch: t8 = globalThis.fetch, Headers: r3 = globalThis.Headers, AbortController: s5 = globalThis.AbortController } = e8;
  async function onError(e9) {
    const t9 = e9.error && "AbortError" === e9.error.name && !e9.options.timeout || false;
    if (false !== e9.options.retry && !t9) {
      let t10;
      t10 = "number" == typeof e9.options.retry ? e9.options.retry : isPayloadMethod(e9.options.method) ? 0 : 1;
      const r5 = e9.response && e9.response.status || 500;
      if (t10 > 0 && (Array.isArray(e9.options.retryStatusCodes) ? e9.options.retryStatusCodes.includes(r5) : fn.has(r5))) {
        const r6 = "function" == typeof e9.options.retryDelay ? e9.options.retryDelay(e9) : e9.options.retryDelay || 0;
        return r6 > 0 && await new Promise((e10) => setTimeout(e10, r6)), $fetchRaw(e9.request, { ...e9.options, retry: t10 - 1 });
      }
    }
    const r4 = (function(e10) {
      const t10 = e10.error?.message || e10.error?.toString() || "", r5 = e10.request?.method || e10.options?.method || "GET", s6 = e10.request?.url || String(e10.request) || "/", a13 = `[${r5}] ${JSON.stringify(s6)}`, c5 = e10.response ? `${e10.response.status} ${e10.response.statusText}` : "<no response>", u9 = new FetchError(`${a13}: ${c5}${t10 ? ` ${t10}` : ""}`, e10.error ? { cause: e10.error } : void 0);
      for (const t11 of ["request", "options", "response"]) Object.defineProperty(u9, t11, { get: /* @__PURE__ */ __name(() => e10[t11], "get") });
      for (const [t11, r6] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u9, t11, { get: /* @__PURE__ */ __name(() => e10.response && e10.response[r6], "get") });
      return u9;
    })(e9);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, $fetchRaw), r4;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a13, c5 = {}) {
    const u9 = { request: a13, options: resolveFetchOptions(a13, c5, e8.defaults, r3), response: void 0, error: void 0 };
    if (u9.options.method && (u9.options.method = u9.options.method.toUpperCase()), u9.options.onRequest && (await callHooks$1(u9, u9.options.onRequest), u9.options.headers instanceof r3 || (u9.options.headers = new r3(u9.options.headers || {}))), "string" == typeof u9.request && (u9.options.baseURL && (u9.request = (function(e9, t9) {
      if (isEmptyURL(t9) || hasProtocol(e9)) return e9;
      const r4 = withoutTrailingSlash(t9);
      if (e9.startsWith(r4)) {
        const t10 = e9[r4.length];
        if (!t10 || "/" === t10 || "?" === t10) return e9;
      }
      return joinURL(r4, e9);
    })(u9.request, u9.options.baseURL)), u9.options.query && (u9.request = withQuery(u9.request, u9.options.query), delete u9.options.query), "query" in u9.options && delete u9.options.query, "params" in u9.options && delete u9.options.params), u9.options.body && isPayloadMethod(u9.options.method)) if ((function(e9) {
      if (void 0 === e9) return false;
      const t9 = typeof e9;
      return "string" === t9 || "number" === t9 || "boolean" === t9 || null === t9 || "object" === t9 && (!!Array.isArray(e9) || !e9.buffer && !(e9 instanceof FormData || e9 instanceof URLSearchParams) && (e9.constructor && "Object" === e9.constructor.name || "function" == typeof e9.toJSON));
    })(u9.options.body)) {
      const e9 = u9.options.headers.get("content-type");
      "string" != typeof u9.options.body && (u9.options.body = "application/x-www-form-urlencoded" === e9 ? new URLSearchParams(u9.options.body).toString() : JSON.stringify(u9.options.body)), e9 || u9.options.headers.set("content-type", "application/json"), u9.options.headers.has("accept") || u9.options.headers.set("accept", "application/json");
    } else ("pipeTo" in u9.options.body && "function" == typeof u9.options.body.pipeTo || "function" == typeof u9.options.body.pipe) && ("duplex" in u9.options || (u9.options.duplex = "half"));
    let d7;
    if (!u9.options.signal && u9.options.timeout) {
      const e9 = new s5();
      d7 = setTimeout(() => {
        const t9 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t9.name = "TimeoutError", t9.code = 23, e9.abort(t9);
      }, u9.options.timeout), u9.options.signal = e9.signal;
    }
    try {
      u9.response = await t8(u9.request, u9.options);
    } catch (e9) {
      return u9.error = e9, u9.options.onRequestError && await callHooks$1(u9, u9.options.onRequestError), await onError(u9);
    } finally {
      d7 && clearTimeout(d7);
    }
    if ((u9.response.body || u9.response._bodyInit) && !hn.has(u9.response.status) && "HEAD" !== u9.options.method) {
      const e9 = (u9.options.parseResponse ? "json" : u9.options.responseType) || (function(e10 = "") {
        if (!e10) return "json";
        const t9 = e10.split(";").shift() || "";
        return pn.test(t9) ? "json" : "text/event-stream" === t9 ? "stream" : dn.has(t9) || t9.startsWith("text/") ? "text" : "blob";
      })(u9.response.headers.get("content-type") || "");
      switch (e9) {
        case "json": {
          const e10 = await u9.response.text(), t9 = u9.options.parseResponse || destr;
          u9.response._data = t9(e10);
          break;
        }
        case "stream":
          u9.response._data = u9.response.body || u9.response._bodyInit;
          break;
        default:
          u9.response._data = await u9.response[e9]();
      }
    }
    return u9.options.onResponse && await callHooks$1(u9, u9.options.onResponse), !u9.options.ignoreResponseError && u9.response.status >= 400 && u9.response.status < 600 ? (u9.options.onResponseError && await callHooks$1(u9, u9.options.onResponseError), await onError(u9)) : u9.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e9, t9) {
    return (await $fetchRaw(e9, t9))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e9) => t8(...e9), $fetch.create = (t9 = {}, r4 = {}) => createFetch({ ...e8, ...r4, defaults: { ...e8.defaults, ...r4.defaults, ...t9 } }), $fetch;
}
function asyncCall(e8, ...t8) {
  try {
    return (r3 = e8(...t8)) && "function" == typeof r3.then ? r3 : Promise.resolve(r3);
  } catch (e9) {
    return Promise.reject(e9);
  }
  var r3;
}
function stringify2(e8) {
  if (/* @__PURE__ */ (function(e9) {
    const t8 = typeof e9;
    return null === e9 || "object" !== t8 && "function" !== t8;
  })(e8)) return String(e8);
  if ((function(e9) {
    const t8 = Object.getPrototypeOf(e9);
    return !t8 || t8.isPrototypeOf(Object);
  })(e8) || Array.isArray(e8)) return JSON.stringify(e8);
  if ("function" == typeof e8.toJSON) return stringify2(e8.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e8) {
  return "string" == typeof e8 ? e8 : bn + (function(e9) {
    if (globalThis.Buffer) return s4.from(e9).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e9));
  })(e8);
}
function deserializeRaw(e8) {
  return "string" != typeof e8 ? e8 : e8.startsWith(bn) ? (function(e9) {
    if (globalThis.Buffer) return s4.from(e9, "base64");
    return Uint8Array.from(globalThis.atob(e9), (e10) => e10.codePointAt(0));
  })(e8.slice(7)) : e8;
}
function normalizeKey$2(e8) {
  return e8 && e8.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function hasDotSegment(e8) {
  return e8.split(":").some((e9) => "." === e9 || ".." === e9);
}
function joinKeys(...e8) {
  return normalizeKey$2(e8.join(":"));
}
function normalizeBaseKey(e8) {
  return (e8 = normalizeKey$2(e8)) ? e8 + ":" : "";
}
function watch$2(e8, t8, r3) {
  return e8.watch ? e8.watch((e9, s5) => t8(e9, r3 + s5)) : () => {
  };
}
async function dispose(e8) {
  "function" == typeof e8.dispose && await asyncCall(e8.dispose);
}
function useStorage(e8 = "") {
  return e8 ? (function(e9, t8) {
    if (t8?.includes("?")) throw new Error(`[unstorage] Invalid base: ${JSON.stringify(t8)}`);
    if (!(t8 = normalizeBaseKey(t8))) return e9;
    const itemKey = /* @__PURE__ */ __name((e10) => {
      if (!normalizeKey$2(e10)) throw new Error(`[unstorage] Invalid key: ${JSON.stringify(e10)}`);
      return t8 + e10;
    }, "itemKey"), r3 = { ...e9 };
    for (const s5 of wn) r3[s5] = xn.has(s5) ? (r4 = "", ...a13) => e9[s5](t8 + r4, ...a13) : async (t9 = "", ...r4) => e9[s5](itemKey(t9), ...r4);
    return r3.getKeys = (r4 = "", ...s5) => e9.getKeys(t8 + r4, ...s5).then((e10) => e10.map((e11) => e11.slice(t8.length))), r3.keys = r3.getKeys, r3.getItems = async (r4, s5) => {
      const a13 = r4.map((e10) => "string" == typeof e10 ? itemKey(e10) : { ...e10, key: itemKey(e10.key) });
      return (await e9.getItems(a13, s5)).map((e10) => ({ key: e10.key.slice(t8.length), value: e10.value }));
    }, r3.setItems = async (t9, r4) => {
      const s5 = t9.map((e10) => ({ key: itemKey(e10.key), value: e10.value, options: e10.options }));
      return e9.setItems(s5, r4);
    }, r3;
  })(Cn, e8) : Cn;
}
function hash(e8) {
  return (t8 = "string" == typeof e8 ? e8 : (function(e9) {
    const t9 = new Pn();
    return t9.dispatch(e9), t9.buff;
  })(e8), new En().finalize(t8).toBase64()).replace(/[-_]/g, "").slice(0, 10);
  var t8;
}
function defineCachedFunction(e8, t8 = {}) {
  t8 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t8 };
  const r3 = {}, s5 = t8.group || "nitro/functions", a13 = t8.name || e8.name || "_", c5 = t8.integrity || hash([e8, t8]), u9 = t8.validate || ((e9) => void 0 !== e9.value);
  return async (...d7) => {
    if (await t8.shouldBypassCache?.(...d7)) return e8(...d7);
    const p6 = await (t8.getKey || getKey)(...d7), f6 = await t8.shouldInvalidateCache?.(...d7), g9 = await (async function(e9, d8, p7, f7) {
      const g10 = [t8.base, s5, a13, e9 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let m9 = await useStorage().getItem(g10).catch((e10) => {
        console.error("[cache] Cache read error.", e10), useNitroApp().captureError(e10, { event: f7, tags: ["cache"] });
      }) || {};
      if ("object" != typeof m9) {
        m9 = {};
        const e10 = new Error("Malformed data read from cache.");
        console.error("[cache]", e10), useNitroApp().captureError(e10, { event: f7, tags: ["cache"] });
      }
      const _7 = 1e3 * (t8.maxAge ?? 0);
      _7 && (m9.expires = Date.now() + _7);
      const x7 = p7 || m9.integrity !== c5 || _7 && Date.now() - (m9.mtime || 0) > _7 || false === u9(m9), k5 = x7 ? (async () => {
        const s6 = r3[e9];
        s6 || (void 0 !== m9.value && (t8.staleMaxAge || 0) >= 0 && false === t8.swr && (m9.value = void 0, m9.integrity = void 0, m9.mtime = void 0, m9.expires = void 0), r3[e9] = Promise.resolve(d8()));
        try {
          m9.value = await r3[e9];
        } catch (t9) {
          throw s6 || delete r3[e9], t9;
        }
        if (!s6 && (m9.mtime = Date.now(), m9.integrity = c5, delete r3[e9], false !== u9(m9))) {
          let e10;
          t8.maxAge && !t8.swr && (e10 = { ttl: t8.maxAge });
          const r4 = useStorage().setItem(g10, m9, e10).catch((e11) => {
            console.error("[cache] Cache write error.", e11), useNitroApp().captureError(e11, { event: f7, tags: ["cache"] });
          });
          f7?.waitUntil && f7.waitUntil(r4);
        }
      })() : Promise.resolve();
      return void 0 === m9.value ? await k5 : x7 && f7 && f7.waitUntil && f7.waitUntil(k5), t8.swr && false !== u9(m9) ? (k5.catch((e10) => {
        console.error("[cache] SWR handler error.", e10), useNitroApp().captureError(e10, { event: f7, tags: ["cache"] });
      }), m9) : k5.then(() => m9);
    })(p6, () => e8(...d7), f6, d7[0] && isEvent(d7[0]) ? d7[0] : void 0);
    let m8 = g9.value;
    return t8.transform && (m8 = await t8.transform(g9, ...d7) || m8), m8;
  };
}
function getKey(...e8) {
  return e8.length > 0 ? hash(e8) : "";
}
function escapeKey(e8) {
  return String(e8).replace(/\W/g, "");
}
function cloneWithProxy(e8, t8) {
  return new Proxy(e8, { get: /* @__PURE__ */ __name((e9, r3, s5) => r3 in t8 ? t8[r3] : Reflect.get(e9, r3, s5), "get"), set: /* @__PURE__ */ __name((e9, r3, s5, a13) => r3 in t8 ? (t8[r3] = s5, true) : Reflect.set(e9, r3, s5, a13), "set") });
}
function klona(e8) {
  if ("object" != typeof e8) return e8;
  var t8, r3, s5 = Object.prototype.toString.call(e8);
  if ("[object Object]" === s5) {
    if (e8.constructor !== Object && "function" == typeof e8.constructor) for (t8 in r3 = new e8.constructor(), e8) e8.hasOwnProperty(t8) && r3[t8] !== e8[t8] && (r3[t8] = klona(e8[t8]));
    else for (t8 in r3 = {}, e8) "__proto__" === t8 ? Object.defineProperty(r3, t8, { value: klona(e8[t8]), configurable: true, enumerable: true, writable: true }) : r3[t8] = klona(e8[t8]);
    return r3;
  }
  if ("[object Array]" === s5) {
    for (t8 = e8.length, r3 = Array(t8); t8--; ) r3[t8] = klona(e8[t8]);
    return r3;
  }
  return "[object Set]" === s5 ? (r3 = /* @__PURE__ */ new Set(), e8.forEach(function(e9) {
    r3.add(klona(e9));
  }), r3) : "[object Map]" === s5 ? (r3 = /* @__PURE__ */ new Map(), e8.forEach(function(e9, t9) {
    r3.set(klona(t9), klona(e9));
  }), r3) : "[object Date]" === s5 ? /* @__PURE__ */ new Date(+e8) : "[object RegExp]" === s5 ? ((r3 = new RegExp(e8.source, e8.flags)).lastIndex = e8.lastIndex, r3) : "[object DataView]" === s5 ? new e8.constructor(klona(e8.buffer)) : "[object ArrayBuffer]" === s5 ? e8.slice(0) : "Array]" === s5.slice(-6) ? new e8.constructor(e8) : e8;
}
function isUppercase(e8 = "") {
  if (!On.test(e8)) return e8 !== e8.toLowerCase();
}
function kebabCase(e8, t8) {
  return e8 ? (Array.isArray(e8) ? e8 : (function(e9) {
    const t9 = Mn, r3 = [];
    if (!e9 || "string" != typeof e9) return r3;
    let s5, a13, c5 = "";
    for (const u9 of e9) {
      const e10 = t9.includes(u9);
      if (true === e10) {
        r3.push(c5), c5 = "", s5 = void 0;
        continue;
      }
      const d7 = isUppercase(u9);
      if (false === a13) {
        if (false === s5 && true === d7) {
          r3.push(c5), c5 = u9, s5 = d7;
          continue;
        }
        if (true === s5 && false === d7 && c5.length > 1) {
          const e11 = c5.at(-1);
          r3.push(c5.slice(0, Math.max(0, c5.length - 1))), c5 = e11 + u9, s5 = d7;
          continue;
        }
      }
      c5 += u9, s5 = d7, a13 = e10;
    }
    return r3.push(c5), r3;
  })(e8)).map((e9) => e9.toLowerCase()).join(t8) : "";
}
function getEnv(e8, t8) {
  const r3 = (s5 = e8, kebabCase(s5 || "", "_")).toUpperCase();
  var s5;
  return destr(m7.env[t8.prefix + r3] ?? m7.env[t8.altPrefix + r3]);
}
function _isObject(e8) {
  return "object" == typeof e8 && !Array.isArray(e8);
}
function applyEnv(e8, t8, r3 = "") {
  for (const s5 in e8) {
    const a13 = r3 ? `${r3}_${s5}` : s5, c5 = getEnv(a13, t8);
    _isObject(e8[s5]) ? _isObject(c5) ? (e8[s5] = { ...e8[s5], ...c5 }, applyEnv(e8[s5], t8, a13)) : void 0 === c5 ? applyEnv(e8[s5], t8, a13) : e8[s5] = c5 ?? e8[s5] : e8[s5] = c5 ?? e8[s5], t8.envExpansion && "string" == typeof e8[s5] && (e8[s5] = _expandFromEnv(e8[s5]));
  }
  return e8;
}
function _expandFromEnv(e8) {
  return e8.replace(In, (e9, t8) => m7.env[t8] || e9);
}
function useRuntimeConfig2(e8) {
  if (!e8) return Ln;
  if (e8.context.nitro.runtimeConfig) return e8.context.nitro.runtimeConfig;
  const t8 = klona(Bn);
  return applyEnv(t8, Nn), e8.context.nitro.runtimeConfig = t8, t8;
}
function _deepFreeze(e8) {
  const t8 = Object.getOwnPropertyNames(e8);
  for (const r3 of t8) {
    const t9 = e8[r3];
    t9 && "object" == typeof t9 && _deepFreeze(t9);
  }
  return Object.freeze(e8);
}
function isPathInScope(e8, t8) {
  let r3;
  try {
    const t9 = e8.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    r3 = new URL(t9, "http://_").pathname;
  } catch {
    return false;
  }
  return !t8 || r3 === t8 || r3.startsWith(t8 + "/");
}
function createRouteRulesHandler(e8) {
  return rn((t8) => {
    const r3 = (function(e9) {
      e9.context._nitro = e9.context._nitro || {}, e9.context._nitro.routeRules || (e9.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e9.path.split("?")[0], useRuntimeConfig2().app.baseURL)));
      return e9.context._nitro.routeRules;
    })(t8);
    if (r3.headers && en(t8, r3.headers), r3.redirect) {
      let e9 = r3.redirect.to;
      if (e9.endsWith("/**")) {
        let s5 = t8.path;
        const a13 = r3.redirect._redirectStripBase;
        if (a13) {
          if (!isPathInScope(t8.path.split("?")[0], a13)) throw createError({ statusCode: 400 });
          s5 = withoutBase(s5, a13);
        } else s5.startsWith("//") && (s5 = s5.replace(/^\/+/, "/"));
        e9 = joinURL(e9.slice(0, -3), s5);
      } else if (t8.path.includes("?")) {
        e9 = withQuery(e9, getQuery(t8.path));
      }
      return (function(e10, t9, r4 = 302) {
        return e10.node.res.statusCode = sanitizeStatusCode(r4, e10.node.res.statusCode), e10.node.res.setHeader("location", t9), send(e10, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t9.replace(/"/g, "%22")}"></head></html>`, Qt2.html);
      })(t8, e9, r3.redirect.statusCode);
    }
    if (r3.proxy) {
      let s5 = r3.proxy.to;
      if (s5.endsWith("/**")) {
        let e9 = t8.path;
        const a13 = r3.proxy._proxyStripBase;
        if (a13) {
          if (!isPathInScope(t8.path.split("?")[0], a13)) throw createError({ statusCode: 400 });
          e9 = withoutBase(e9, a13);
        } else e9.startsWith("//") && (e9 = e9.replace(/^\/+/, "/"));
        s5 = joinURL(s5.slice(0, -3), e9);
      } else if (t8.path.includes("?")) {
        s5 = withQuery(s5, getQuery(t8.path));
      }
      return proxyRequest(t8, s5, { fetch: e8.localFetch, ...r3.proxy });
    }
  });
}
function getRouteRulesForPath(e8) {
  return Ut({}, ...Wn.matchAll(e8).reverse());
}
function joinHeaders(e8) {
  return Array.isArray(e8) ? e8.join(", ") : String(e8);
}
function normalizeCookieHeader(e8 = "") {
  return splitCookiesString(joinHeaders(e8));
}
function normalizeCookieHeaders(e8) {
  const t8 = new Headers();
  for (const [r3, s5] of e8) if ("set-cookie" === r3) for (const e9 of normalizeCookieHeader(s5)) t8.append("set-cookie", e9);
  else t8.set(r3, joinHeaders(s5));
  return t8;
}
function encodeVueRouterPath(e8) {
  return encodeURI(e8).replace(Vn, "|").replace(Kn, "[").replace(Zn, "]").replace(Gn, "%23").replace(Qn, "%3F").replace(Jn, "%2F");
}
function toWebRequest$1(e8) {
  const t8 = e8.web?.request;
  if (t8) return t8;
  const r3 = e8.method;
  if (!er.has(r3)) return new Request(getRequestURL(e8), { method: r3, headers: e8.headers, signal: toRequestSignal(e8) });
  const s5 = new Request(getRequestURL(e8), { method: r3, headers: e8.headers, body: toBufferedBodyStream(e8), signal: toRequestSignal(e8), duplex: "half" }), copy = /* @__PURE__ */ __name(() => readRawBody(e8, false).then((e9) => e9 ? new Uint8Array(e9) : new Uint8Array()).then((e9) => new Response(e9, { headers: s5.headers })), "copy"), a13 = new Proxy(s5, { get(t9, r4) {
    if ("bodyUsed" === r4) return false;
    if ("body" === r4) return toBufferedBodyStream(e8);
    if ("clone" === r4) return () => a13;
    if ("string" == typeof r4 && tr.has(r4)) return () => copy().then((e9) => e9[r4]());
    const s6 = Reflect.get(t9, r4, t9);
    return "function" == typeof s6 ? s6.bind(t9) : s6;
  } });
  return a13;
}
function toRequestSignal(e8) {
  const t8 = new AbortController(), r3 = e8.node?.res;
  return "function" == typeof r3?.once && r3.once("close", () => {
    r3.writableFinished || t8.abort();
  }), t8.signal;
}
function toBufferedBodyStream(e8) {
  return new ReadableStream({ async pull(t8) {
    const r3 = await readRawBody(e8, false);
    r3 && t8.enqueue(new Uint8Array(r3)), t8.close();
  } });
}
function getFetchedRequestContext(e8) {
  return e8.node.req.__unenv__?.nuxt;
}
function toRequestEvent(e8) {
  const t8 = e8.path.indexOf("?");
  if (Yn.test(-1 === t8 ? e8.path : e8.path.slice(0, t8))) throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  const r3 = (function(e9, t9 = () => new URL((function(e10) {
    const t10 = e10.indexOf("?");
    return -1 === t10 ? encodeVueRouterPath(e10) : encodeVueRouterPath(e10.slice(0, t10)) + e10.slice(t10);
  })(e9.path), `${getRequestProtocol(e9)}://${getRequestHost(e9)}`)) {
    const r4 = e9.node;
    let s5, a13;
    const c5 = { get status() {
      return r4.res.statusCode;
    }, set status(e10) {
      r4.res.statusCode = e10;
    }, get statusText() {
      return r4.res.statusMessage;
    }, set statusText(e10) {
      r4.res.statusMessage = e10;
    }, headers: new Xn(r4.res) }, u9 = { context: e9.context, res: c5, get req() {
      return s5 ??= toWebRequest$1(e9);
    }, get url() {
      return a13 ??= t9();
    }, set url(t10) {
      a13 = t10, e9._path = r4.req.url = t10.pathname + t10.search;
    } };
    return u9["~app"] = e9, u9;
  })(e8);
  return getFetchedRequestContext(e8)?.["~rendering-error"] && (e8.context.nuxt = { "~rendering-error": true, ...e8.context.nuxt }), r3;
}
function hasReqHeader(e8, t8, r3) {
  const s5 = (function(e9, t9) {
    return getRequestHeaders(e9)[t9.toLowerCase()];
  })(e8, t8);
  return !(!s5 || "string" != typeof s5 || !s5.toLowerCase().includes(r3));
}
function defineHeadPlugin(e8, t8) {
  return t8 && "function" == typeof e8 && (e8.key = t8), e8;
}
function processTemplateParams(e8, t8, r3, s5 = false) {
  if ("string" != typeof e8 || !e8.includes("%")) return e8;
  let a13 = e8;
  try {
    a13 = decodeURI(e8);
  } catch {
  }
  const c5 = a13.match(or);
  if (!c5) return e8;
  const u9 = e8.includes(ir);
  return e8 = e8.replace(or, (e9) => {
    if (e9 === ir || !c5.includes(e9)) return e9;
    const r4 = (function(e10, t9, r5 = false) {
      let s6;
      if ("s" === t9 || "pageTitle" === t9) s6 = e10.pageTitle;
      else if (t9.includes(".")) {
        const r6 = t9.indexOf(".");
        s6 = e10[t9.substring(0, r6)]?.[t9.substring(r6 + 1)];
      } else s6 = e10[t9];
      if (void 0 !== s6) {
        const e11 = String("number" == typeof s6 ? s6 : s6 || "");
        return r5 ? e11.replace(nr, "\\\\").replace(rr, "\\u003C").replace(sr, '\\"') : e11;
      }
    })(t8, e9.slice(1), s5);
    return void 0 !== r4 ? r4 : e9;
  }).trim(), u9 && (e8 = e8.split(ir).map((e9) => e9.trim()).filter((e9) => "" !== e9).join(r3 ? ` ${r3} ` : " ")), e8;
}
function isThenable(e8) {
  return "function" == typeof e8?.then;
}
function walkArrayPromises(e8, t8) {
  if (t8 === e8.length) return;
  if (256 === t8) {
    const r4 = new Array(e8.length);
    let s6 = false;
    for (; t8 < e8.length; t8++) {
      const a13 = walkPromises(e8[t8]);
      r4[t8] = a13, s6 ||= isThenable(a13);
    }
    return s6 ? r4 : void 0;
  }
  const r3 = walkPromises(e8[t8]);
  if (isThenable(r3)) {
    const s6 = new Array(e8.length);
    s6[t8] = r3;
    for (let r4 = t8 + 1; r4 < e8.length; r4++) s6[r4] = walkPromises(e8[r4]);
    return s6;
  }
  const s5 = walkArrayPromises(e8, t8 + 1);
  return s5 && (s5[t8] = r3), s5;
}
function walkObjectPromises(e8, t8, r3) {
  if (r3 === t8.length) return;
  if (256 === r3) {
    const s6 = new Array(t8.length);
    let a14 = false;
    for (; r3 < t8.length; r3++) {
      const c5 = walkPromises(e8[t8[r3]]);
      s6[r3] = c5, a14 ||= isThenable(c5);
    }
    return a14 ? s6 : void 0;
  }
  const s5 = walkPromises(e8[t8[r3]]);
  if (isThenable(s5)) {
    const a14 = new Array(t8.length);
    a14[r3] = s5;
    for (let s6 = r3 + 1; s6 < t8.length; s6++) a14[s6] = walkPromises(e8[t8[s6]]);
    return a14;
  }
  const a13 = walkObjectPromises(e8, t8, r3 + 1);
  return a13 && (a13[r3] = s5), a13;
}
function walkPromises(e8) {
  if ("function" == typeof e8) return e8;
  if (isThenable(e8)) return Promise.resolve(e8).then(walkPromises);
  if (Array.isArray(e8)) {
    const t8 = walkArrayPromises(e8, 0);
    return t8 ? Promise.all(t8) : e8;
  }
  if (e8?.constructor === Object) {
    const t8 = Object.keys(e8), r3 = walkObjectPromises(e8, t8, 0);
    if (r3) return Promise.all(r3).then((e9) => Object.fromEntries(t8.map((t9, r4) => [t9, e9[r4]])));
  }
  return e8;
}
function processIfNeeded(e8, t8, r3, s5 = false) {
  return "string" == typeof e8 && e8.includes("%") ? processTemplateParams(e8, t8, r3, s5) : e8;
}
function createUnhead(e8, t8 = {}) {
  const r3 = !t8.document, s5 = /* @__PURE__ */ new Map(), a13 = { _entryCount: 1, _h: 0, plugins: /* @__PURE__ */ new Map(), resolvedOptions: t8, ssr: r3, entries: s5, hooks: void 0, render: /* @__PURE__ */ __name(() => e8(a13), "render"), use: /* @__PURE__ */ __name((e9) => (function(e10, t9) {
    if ("function" == typeof t9 && t9.key && e10.plugins.has(t9.key)) return;
    const r4 = "function" == typeof t9 ? t9(e10) : t9, s6 = r4.key || String(e10.plugins.size + 1);
    if (!e10.plugins.get(s6)) {
      e10.plugins.set(s6, r4);
      for (const t10 in r4.hooks || {}) e10.hooks?.hook(t10, r4.hooks[t10]);
    }
  })(a13, e9), "use"), push(e9, t9) {
    const c5 = t9?._index ?? a13._entryCount++, u9 = t9 ? { ...t9 } : {};
    delete u9.head, delete u9.onRendered, delete u9._index;
    const d7 = { _i: c5, input: e9, options: u9 };
    s5.set(c5, d7);
    return { _i: c5, dispose() {
      s5.delete(c5);
    }, patch(e10) {
      r3 ? (d7.input = e10, delete d7._tags) : d7._pending = e10, s5.has(c5) || s5.set(c5, d7);
    } };
  } };
  return t8.init?.forEach((e9) => e9 && a13.push(e9)), a13;
}
function isUnsafeKey(e8) {
  return "__proto__" === e8 || "constructor" === e8 || "prototype" === e8;
}
function flatHooks(e8, t8 = {}, r3) {
  for (const s5 in e8) {
    const a13 = e8[s5], c5 = r3 ? `${r3}:${s5}` : s5;
    "object" == typeof a13 && null !== a13 ? flatHooks(a13, t8, c5) : "function" == typeof a13 && (t8[c5] = a13);
  }
  return t8;
}
function callHooks(e8, t8, r3, s5) {
  for (let a13 = r3; a13 < e8.length; a13 += 1) try {
    const r4 = s5 ? s5.run(() => e8[a13](...t8)) : e8[a13](...t8);
    if (r4 && "function" == typeof r4.then) return Promise.resolve(r4).then(() => callHooks(e8, t8, a13 + 1, s5));
  } catch (e9) {
    return Promise.reject(e9);
  }
}
function serialTaskCaller(e8, t8, r3) {
  if (e8.length > 0) return callHooks(e8, t8, 0, kr(r3));
}
function parallelTaskCaller(e8, t8, r3) {
  if (e8.length > 0) {
    const s5 = kr(r3);
    return Promise.all(e8.map((e9) => s5.run(() => e9(...t8))));
  }
}
function callEachWith(e8, t8) {
  for (const r3 of [...e8]) r3(t8);
}
function createHooks$1() {
  return new Rr();
}
function callHook$1(e8, t8, r3) {
  const s5 = e8.hooks?._hooks?.[t8];
  if (s5?.length) return e8.hooks?.callHook(t8, r3);
}
function isMetaArrayDupeKey(e8) {
  const t8 = e8.indexOf(":");
  if (-1 === t8) return false;
  const r3 = e8.slice(t8 + 1);
  return wr.has(r3) || r3.startsWith("og:image:") || r3.startsWith("og:video:") || r3.startsWith("og:audio:") || r3.startsWith("twitter:image:");
}
function dedupeKey(e8) {
  const { props: t8, tag: r3, key: s5 } = e8;
  if (vr.has(r3)) return r3;
  if ("link" === r3) {
    if ("canonical" === t8.rel) return "canonical";
    if ("alternate" === t8.rel && t8.hreflang) return `alternate:${t8.hreflang}`;
  }
  if (t8.charset) return "charset";
  if ("meta" === r3) for (const e9 of Tr) {
    const r4 = t8[e9];
    if (void 0 !== r4) return `meta:${r4}${"string" == typeof r4 && r4.includes(":") || Sr.test(r4) || !s5 ? "" : `:key:${s5}`}`;
  }
  return s5 ? `${r3}:key:${s5}` : t8.id ? `${r3}:id:${t8.id}` : "link" === r3 && t8.rel && t8.href ? `link:${t8.rel}:${t8.href}` : gr.has(r3) && (e8.textContent || e8.innerHTML) ? `${r3}:content:${e8.textContent || e8.innerHTML}` : void 0;
}
function hashTag(e8) {
  const t8 = e8._h || e8._d || e8.textContent || e8.innerHTML;
  if (t8) return String(t8);
  const r3 = Object.keys(e8.props).sort();
  let s5 = `${e8.tag}:`, a13 = "";
  for (const t9 of r3) s5 += `${a13}${t9}:${String(e8.props[t9])}`, a13 = ",";
  return s5;
}
function walkResolver(e8, t8, r3) {
  if ("_resolver" === r3) return e8;
  "function" != typeof e8 || r3 && ("titleTemplate" === r3 || r3.startsWith("on")) || (e8 = e8());
  const s5 = t8 ? t8(r3, e8) : e8;
  if (Array.isArray(s5)) {
    let e9;
    for (let r4 = 0; r4 < s5.length; r4++) {
      const a13 = walkResolver(s5[r4], t8);
      e9 ? e9[r4] = a13 : a13 !== s5[r4] && (e9 = s5.slice(0, r4), e9[r4] = a13);
    }
    return e9 || s5;
  }
  if (s5?.constructor === Object) {
    let e9;
    for (const r4 in s5) {
      const a13 = isUnsafeKey(r4), c5 = a13 ? void 0 : walkResolver(s5[r4], t8, r4);
      if (!e9 && (a13 || c5 !== s5[r4])) {
        e9 = {};
        for (const t9 in s5) {
          if (t9 === r4) break;
          e9[t9] = s5[t9];
        }
      }
      e9 && !a13 && (e9[r4] = c5);
    }
    return e9 || s5;
  }
  return s5;
}
function normalizeStyleClassProps(e8, t8) {
  const r3 = "style" === e8, s5 = r3 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), add = /* @__PURE__ */ __name((e9) => {
    if (e9) if (r3) {
      const t9 = e9.indexOf(":");
      t9 > 0 && s5.set(e9.slice(0, t9).trim(), e9.slice(t9 + 1).trim());
    } else e9.split(" ").forEach((e10) => e10 && s5.add(e10));
  }, "add");
  if ("string" == typeof t8) (r3 ? t8.split(";") : [t8]).forEach(add);
  else if (Array.isArray(t8)) t8.forEach(add);
  else if (t8 && "object" == typeof t8) for (const e9 in t8) {
    const a13 = t8[e9];
    a13 && "false" !== a13 && (r3 ? s5.set(e9.trim(), String(a13)) : add(e9));
  }
  return s5;
}
function normalizeTag(e8, t8) {
  const r3 = (function(e9, t9) {
    if (e9.props = e9.props || {}, !t9) return e9;
    if ("templateParams" === e9.tag) return e9.props = t9, e9;
    const r4 = mr.has(e9.tag) || "htmlAttrs" === e9.tag || "bodyAttrs" === e9.tag;
    for (const s5 in t9) {
      if (isUnsafeKey(s5)) continue;
      const a13 = s5.startsWith("data-"), c5 = r4 && !_r.has(s5), u9 = c5 && !a13 ? s5.toLowerCase() : s5;
      if (c5 && (!u9 || Ar.test(u9))) continue;
      const d7 = t9[s5];
      if (null === d7) e9.props[u9] = null;
      else if ("class" === s5 || "style" === s5) e9.props[s5] = normalizeStyleClassProps(s5, d7);
      else if (_r.has(s5)) if ("textContent" !== s5 && "innerHTML" !== s5 || "object" != typeof d7) e9[s5] = d7;
      else {
        const r5 = t9.type || "application/json";
        (r5.endsWith("json") || "speculationrules" === r5 || "importmap" === r5) && (e9.props.type = r5, e9[s5] = JSON.stringify(d7));
      }
      else if (void 0 !== d7) {
        const t10 = String(d7), r5 = "meta" === e9.tag && "content" === u9;
        e9.props[u9] = "true" === t10 || "" === t10 ? !a13 && !r5 || t10 : !d7 && a13 && "false" === t10 ? "false" : d7;
      }
    }
    return e9;
  })({ tag: e8, props: {} }, "object" == typeof t8 && "function" != typeof t8 ? t8 : { ["script" === e8 || "noscript" === e8 || "style" === e8 ? "innerHTML" : "textContent"]: t8 });
  if (r3.key && hr.has(r3.tag) && (r3.props["data-hid"] = r3._h = r3.key), "script" === r3.tag && "object" == typeof r3.innerHTML && (r3.innerHTML = JSON.stringify(r3.innerHTML), r3.props.type = r3.props.type || "application/json"), Array.isArray(r3.props.content)) {
    const e9 = [];
    for (const t9 of r3.props.content) e9.push({ ...r3, props: { ...r3.props, content: t9 } });
    return e9;
  }
  return r3;
}
function pushNormalizedTag(e8, t8) {
  if (Array.isArray(t8)) for (const r3 of t8) e8.push(r3);
  else e8.push(t8);
}
function normalizeEntryToTags(e8, t8) {
  if (!e8) return [];
  "function" == typeof e8 && (e8 = e8()), e8 = (function(e9, t9) {
    let r4;
    return t9.length && (r4 = /* @__PURE__ */ __name((e10, r5) => {
      for (let s5 = 0; s5 < t9.length; s5++) r5 = t9[s5](e10, r5);
      return r5;
    }, "r"), e9 = r4(void 0, e9)), walkResolver(e9, r4);
  })(e8, t8);
  const r3 = [];
  for (const t9 in e8) {
    const s5 = e8[t9];
    if (void 0 !== s5) if (Array.isArray(s5)) for (const e9 of s5) pushNormalizedTag(r3, normalizeTag(t9, e9));
    else pushNormalizedTag(r3, normalizeTag(t9, s5));
  }
  return r3;
}
function isEmptyProps(e8) {
  for (const t8 in e8) return false;
  return true;
}
function syncEntryHookCache(e8, t8) {
  const r3 = (t8["entries:resolve"]?.length || 0) + (t8["entries:normalize"]?.length || 0);
  if (e8._h !== r3) {
    e8._h = r3;
    for (const t9 of e8.entries.values()) delete t9._tags;
  }
}
function cloneTagsInPlace(e8) {
  for (let t8 = 0; t8 < e8.length; t8++) {
    const r3 = e8[t8], s5 = { ...r3.props };
    s5.class instanceof Set && (s5.class = new Set(s5.class)), s5.style instanceof Map && (s5.style = new Map(s5.style)), e8[t8] = { ...r3, props: s5 };
  }
}
function resolveTags(e8, t8) {
  const r3 = t8?.tagWeight ?? e8.resolvedOptions._tagWeight ?? DEFAULT_TAG_WEIGHT, s5 = { tagMap: /* @__PURE__ */ new Map(), tags: [] }, a13 = e8.hooks?._hooks || {};
  syncEntryHookCache(e8, a13);
  for (const t9 of e8.entries.values()) void 0 !== t9._pending && (t9.input = t9._pending, delete t9._pending, delete t9._tags, delete t9._precomputedTags);
  let c5;
  (a13["entries:resolve"]?.length || a13["entries:normalize"]?.length) && (c5 = [...e8.entries.values()], a13["entries:resolve"]?.length && callHook$1(e8, "entries:resolve", { entries: c5, ...s5 })), syncEntryHookCache(e8, a13);
  for (const t9 of c5 || e8.entries.values()) {
    let c6 = t9._tags;
    if (!c6) if (!t9._precomputedTags || r3 !== e8.resolvedOptions._tagWeight || a13["entries:normalize"]?.length || a13["entries:resolve"]?.length || t9.options && !isEmptyProps(t9.options)) {
      if (c6 = normalizeEntryToTags(t9.input, e8.resolvedOptions.propResolvers || []), t9.options && !isEmptyProps(t9.options)) for (const e9 of c6) Object.assign(e9, t9.options);
      if (a13["entries:normalize"]?.length) {
        const r4 = { tags: c6, entry: t9 };
        callHook$1(e8, "entries:normalize", r4), c6 = r4.tags;
      }
      for (let e9 = 0; e9 < c6.length; e9++) {
        const s6 = c6[e9];
        s6._w = r3(s6), s6._p = (t9._i << 10) + e9, s6._d = dedupeKey(s6), s6._d || (s6._h = hashTag(s6));
      }
      t9._tags = c6;
    } else c6 = t9._precomputedTags;
    s5.tags.push(...c6);
  }
  for (const e9 in a13) if (a13[e9]?.length && Pr.test(e9)) {
    cloneTagsInPlace(s5.tags);
    break;
  }
  const u9 = (function(e9) {
    let t9 = false;
    for (const r4 of e9.tags.sort(sortTags)) {
      const s6 = r4._d || hashTag(r4);
      if (!s6) continue;
      const a14 = e9.tagMap.get(s6);
      if (a14) if ("merge" === (r4.tagDuplicateStrategy || (br.has(r4.tag) ? "merge" : null) || (r4.key && r4.key === a14.key ? "merge" : null))) {
        const t10 = { ...a14.props };
        for (const e10 in r4.props) t10[e10] = "style" === e10 ? new Map([...a14.props.style || /* @__PURE__ */ new Map(), ...r4.props[e10]]) : "class" === e10 ? /* @__PURE__ */ new Set([...a14.props.class || [], ...r4.props[e10]]) : r4.props[e10];
        e9.tagMap.set(s6, { ...r4, props: t10 });
      } else r4._p >> 10 == a14._p >> 10 && "meta" === r4.tag && isMetaArrayDupeKey(s6) ? (e9.tagMap.set(s6, Object.assign([...Array.isArray(a14) ? a14 : [a14], r4], r4)), t9 = true) : (r4._w === a14._w ? r4._p > a14._p : r4._w < a14._w) && e9.tagMap.set(s6, r4);
      else e9.tagMap.set(s6, r4);
    }
    return t9;
  })(s5);
  return (function(e9, t9) {
    const r4 = e9.tagMap.get("title"), s6 = e9.tagMap.get("titleTemplate");
    if (t9._title = r4?.textContent, !s6) return;
    const a14 = s6.textContent;
    if (t9._titleTemplate = a14, !a14) return;
    let c6 = "function" == typeof a14 ? a14(r4?.textContent) : a14;
    "string" != typeof c6 || t9.plugins.has("template-params") || (c6 = c6.replace("%s", r4?.textContent || "")), r4 ? null === c6 ? e9.tagMap.delete("title") : e9.tagMap.set("title", { ...r4, textContent: c6 }) : e9.tagMap.set("titleTemplate", { ...s6, tag: "title", textContent: c6 });
  })(s5, e8), (function(e9, t9) {
    const r4 = e9.tags;
    let s6 = 0;
    for (const t10 of e9.tagMap.values()) if (Array.isArray(t10)) for (const e10 of t10) r4[s6++] = e10;
    else r4[s6++] = t10;
    r4.length = s6, t9 && r4.sort(sortTags);
  })(s5, u9), callHook$1(e8, "tags:beforeResolve", s5), callHook$1(e8, "tags:resolve", s5), callHook$1(e8, "tags:afterResolve", s5), (function(e9) {
    let t9 = 0;
    for (let r4 of e9) {
      const { innerHTML: s6, tag: a14, props: c6 } = r4;
      if (yr.has(a14) && (!isEmptyProps(c6) || hasContent(s6) || hasContent(r4.textContent)) && ("meta" !== a14 || hasContent(c6.content) || c6["http-equiv"] || c6.charset)) {
        if ("script" === a14 && (s6 || r4.textContent)) {
          const e10 = String(c6.type), t10 = e10.endsWith("json") || "importmap" === e10 || "speculationrules" === e10, escape = /* @__PURE__ */ __name((e11) => t10 ? ("string" == typeof e11 ? e11 : JSON.stringify(e11)).replace(Er, "\\u003C") : "string" == typeof e11 ? e11.replace(jr, "<\\/script") : e11, "escape");
          r4 = { ...r4 }, s6 && (r4.innerHTML = escape(s6)), r4.textContent && (r4.textContent = escape(r4.textContent)), r4._d = dedupeKey(r4);
        }
        e9[t9++] = r4;
      }
    }
    return e9.length = t9, e9;
  })(s5.tags);
}
function capoTagWeight(e8) {
  if ("number" == typeof e8.tagPriority) return e8.tagPriority;
  let t8 = 100;
  const r3 = xr[e8.tagPriority] || 0;
  if ("base" === e8.tag) t8 = -10;
  else if ("title" === e8.tag) t8 = 10;
  else if ("meta" === e8.tag) t8 = "content-security-policy" === e8.props["http-equiv"] ? -30 : e8.props.charset ? -20 : "viewport" === e8.props.name ? -15 : t8;
  else if ("link" === e8.tag && e8.props.rel) {
    const r4 = e8.props.rel;
    t8 = "preconnect" === r4 ? 20 : "stylesheet" === r4 ? 60 : "preload" === r4 || "modulepreload" === r4 ? 70 : "prefetch" === r4 || "dns-prefetch" === r4 || "prerender" === r4 ? 90 : t8;
  } else if ("script" === e8.tag) {
    const r4 = "string" == typeof e8.props.type ? e8.props.type : "", s5 = r4.endsWith("json");
    "importmap" === r4 ? t8 = 25 : "speculationrules" === r4 ? t8 = 90 : isTruthy(e8.props.async) ? t8 = 30 : e8.props.src && !isTruthy(e8.props.defer) && "module" !== r4 && !s5 || (e8.innerHTML || e8.textContent) && !s5 ? t8 = 50 : (isTruthy(e8.props.defer) && e8.props.src || "module" === r4) && (t8 = 80);
  } else "style" === e8.tag && (t8 = e8.innerHTML && /@import/.test(e8.innerHTML) ? 40 : 60);
  return (t8 || 100) + r3;
}
function encodeAttribute(e8) {
  const t8 = "string" == typeof e8 ? e8 : String(e8);
  return t8.includes('"') ? t8.replace(Hr, "&quot;") : t8;
}
function propsToString(e8) {
  let t8 = "";
  for (const r3 in e8) {
    if (!Object.hasOwn(e8, r3) || !r3 || Ar.test(r3)) continue;
    let s5 = e8[r3];
    if ("string" != typeof s5) {
      if ("class" === r3) {
        let e9 = "";
        for (const t9 of s5) e9 += e9 ? ` ${t9}` : t9;
        s5 = e9;
      } else if ("style" === r3) {
        let e9 = "";
        for (const [t9, r4] of s5) e9 += e9 ? `;${t9}:${r4}` : `${t9}:${r4}`;
        s5 = e9;
      }
    }
    false !== s5 && null !== s5 && (t8 += true === s5 ? ` ${r3}` : ` ${r3}="${encodeAttribute(s5)}"`);
  }
  return t8;
}
function tagToString(e8) {
  const t8 = propsToString(e8.props), r3 = `<${e8.tag}${t8}>`;
  if (fr.has(e8.tag)) return r3;
  if (!gr.has(e8.tag)) return `${r3}</${e8.tag}>`;
  let s5 = String(e8.textContent ?? e8.innerHTML ?? "");
  return s5 = "title" === e8.tag ? s5.replace(Or, (e9) => Ir[e9]) : s5.replace(Mr[e8.tag] ||= new RegExp(`</${e8.tag}`, "gi"), `<\\/${e8.tag}`), `${r3}${s5}</${e8.tag}>`;
}
function ssrRenderTags(e8, t8) {
  const r3 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: "", bodyClose: "", bodyOpen: "" } }, s5 = t8?.omitLineBreaks ? "" : "\n";
  for (const t9 of e8) {
    if ("htmlAttrs" === t9.tag || "bodyAttrs" === t9.tag) {
      Object.assign(r3[t9.tag], t9.props);
      continue;
    }
    const e9 = tagToString(t9), a13 = t9.tagPosition || "head";
    r3.tags[a13] += r3.tags[a13] ? `${s5}${e9}` : e9;
  }
  return { headTags: r3.tags.head, bodyTags: r3.tags.bodyClose, bodyTagsOpen: r3.tags.bodyOpen, htmlAttrs: propsToString(r3.htmlAttrs), bodyAttrs: propsToString(r3.bodyAttrs) };
}
function createServerRenderer(e8 = {}) {
  return (t8) => {
    const r3 = { shouldRender: true };
    if (callHook$1(t8, "ssr:beforeRender", r3), !r3.shouldRender) return ssrRenderTags([]);
    const s5 = { tags: e8.resolvedTags || resolveTags(t8, { tagWeight: e8.tagWeight ?? capoTagWeight }), options: { ...e8 } };
    callHook$1(t8, "ssr:render", s5);
    const a13 = ssrRenderTags(s5.tags, s5.options), c5 = { tags: s5.tags, html: a13 };
    return callHook$1(t8, "ssr:rendered", c5), c5.html;
  };
}
function renderSSRHead(e8, t8) {
  return createServerRenderer(t8)(e8);
}
function createHead$1(e8 = {}) {
  const t8 = e8.tagWeight || capoTagWeight, r3 = createUnhead(createServerRenderer({ tagWeight: t8, omitLineBreaks: e8.omitLineBreaks }), { _tagWeight: t8, document: false, experimentalStreamKey: e8.experimentalStreamKey, propResolvers: [...e8.propResolvers || [], Nr], init: [e8.disableDefaults ? void 0 : Br, ...e8.init || []] });
  if (!e8.disableDefaults && !e8.tagWeight && !e8.propResolvers?.some((e9) => !e9._static)) {
    const e9 = r3.entries.get(1);
    e9 && (e9._precomputedTags = (function() {
      if (!Lr) {
        Lr = normalizeEntryToTags(Br, []);
        for (let e10 = 0; e10 < Lr.length; e10++) {
          const t9 = Lr[e10];
          t9._w = capoTagWeight(t9), t9._p = 1024 + e10, t9._d = dedupeKey(t9), t9._d || (t9._h = hashTag(t9));
        }
      }
      return Lr;
    })());
  }
  return r3.hooks = (function(e9) {
    const t9 = new Cr();
    for (const r4 in e9 || {}) t9.hook(r4, e9[r4]);
    return t9;
  })(e8.hooks), e8.plugins?.forEach((e9) => r3.use(e9)), r3;
}
function makeMap(e8) {
  const t8 = /* @__PURE__ */ Object.create(null);
  for (const r3 of e8.split(",")) t8[r3] = 1;
  return (e9) => e9 in t8;
}
function normalizeStyle(e8) {
  if (Ur(e8)) {
    const t8 = {};
    for (let r3 = 0; r3 < e8.length; r3++) {
      const s5 = e8[r3], a13 = isString(s5) ? parseStringStyle(s5) : normalizeStyle(s5);
      if (a13) for (const e9 in a13) t8[e9] = a13[e9];
    }
    return t8;
  }
  if (isString(e8) || isObject(e8)) return e8;
}
function parseStringStyle(e8) {
  const t8 = {};
  return e8.replace(ts, (e9) => e9.startsWith("/*") ? "" : e9).split(Xr).forEach((e9) => {
    if (e9) {
      const r3 = e9.split(es);
      r3.length > 1 && (t8[r3[0].trim()] = r3[1].trim());
    }
  }), t8;
}
function stringifyStyle(e8) {
  if (!e8) return "";
  if (isString(e8)) return e8;
  let t8 = "";
  for (const r3 in e8) {
    const s5 = e8[r3];
    if (isString(s5) || "number" == typeof s5) {
      t8 += `${r3.startsWith("--") ? r3 : Jr(r3)}:${s5};`;
    }
  }
  return t8;
}
function normalizeClass(e8) {
  let t8 = "";
  if (isString(e8)) t8 = e8;
  else if (Ur(e8)) for (let r3 = 0; r3 < e8.length; r3++) {
    const s5 = normalizeClass(e8[r3]);
    s5 && (t8 += s5 + " ");
  }
  else if (isObject(e8)) for (const r3 in e8) e8[r3] && (t8 += r3 + " ");
  return t8.trim();
}
function includeBooleanAttr(e8) {
  return !!e8 || "" === e8;
}
function isSSRSafeAttrName(e8) {
  if (cs.hasOwnProperty(e8)) return cs[e8];
  const t8 = as.test(e8);
  return t8 && console.error(`unsafe attribute name: ${e8}`), cs[e8] = !t8;
}
function isRenderableAttrValue(e8) {
  if (null == e8) return false;
  const t8 = typeof e8;
  return "string" === t8 || "number" === t8 || "boolean" === t8;
}
function escapeHtml(e8) {
  const t8 = "" + e8, r3 = us.exec(t8);
  if (!r3) return t8;
  let s5, a13, c5 = "", u9 = 0;
  for (a13 = r3.index; a13 < t8.length; a13++) {
    switch (t8.charCodeAt(a13)) {
      case 34:
        s5 = "&quot;";
        break;
      case 38:
        s5 = "&amp;";
        break;
      case 39:
        s5 = "&#39;";
        break;
      case 60:
        s5 = "&lt;";
        break;
      case 62:
        s5 = "&gt;";
        break;
      default:
        continue;
    }
    u9 !== a13 && (c5 += t8.slice(u9, a13)), u9 = a13 + 1, c5 += s5;
  }
  return u9 !== a13 ? c5 + t8.slice(u9, a13) : c5;
}
function escapeHtmlComment(e8) {
  let t8;
  do {
    t8 = e8, e8 = e8.replace(ds, "");
  } while (e8 !== t8);
  return e8;
}
function looseCompareArrays(e8, t8, r3) {
  if (e8.length !== t8.length) return false;
  let s5 = true;
  for (let a13 = 0; s5 && a13 < e8.length; a13++) s5 = looseEqual(e8[a13], t8[a13], r3);
  return s5;
}
function looseCompareCollections(e8, t8, r3) {
  if (e8.size !== t8.size) return false;
  const s5 = Array.from(t8), a13 = new Uint8Array(s5.length);
  for (const t9 of e8) {
    let e9 = -1;
    for (let c5 = 0; c5 < s5.length; c5++) if (!a13[c5] && looseEqual(t9, s5[c5], r3)) {
      e9 = c5;
      break;
    }
    if (e9 < 0) return false;
    a13[e9] = 1;
  }
  return true;
}
function looseCompareObjects(e8, t8, r3) {
  let s5 = isMap(e8), a13 = isMap(t8);
  if (s5 || a13) return !(!s5 || !a13) && looseCompareCollections(e8, t8, r3);
  if (s5 = isSet(e8), a13 = isSet(t8), s5 || a13) return !(!s5 || !a13) && looseCompareCollections(e8, t8, r3);
  if (Object.keys(e8).length !== Object.keys(t8).length) return false;
  for (const s6 in e8) {
    const a14 = e8.hasOwnProperty(s6), c5 = t8.hasOwnProperty(s6);
    if (a14 && !c5 || !a14 && c5 || !looseEqual(e8[s6], t8[s6], r3)) return false;
  }
  return String(e8) === String(t8);
}
function looseCompareNested(e8, t8, r3, s5) {
  r3 || (r3 = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [a13, c5] = r3;
  if (a13.has(e8) || c5.has(t8)) return a13.get(e8) === t8 && c5.get(t8) === e8;
  a13.set(e8, t8), c5.set(t8, e8);
  const u9 = s5(e8, t8, r3);
  return a13.delete(e8), c5.delete(t8), u9;
}
function looseEqual(e8, t8, r3) {
  if (e8 === t8) return true;
  let s5 = isDate(e8), a13 = isDate(t8);
  return s5 || a13 ? !(!s5 || !a13) && e8.getTime() === t8.getTime() : (s5 = isSymbol(e8), a13 = isSymbol(t8), s5 || a13 ? e8 === t8 : (s5 = Ur(e8), a13 = Ur(t8), s5 || a13 ? !(!s5 || !a13) && looseCompareNested(e8, t8, r3, looseCompareArrays) : (s5 = isObject(e8), a13 = isObject(t8), s5 || a13 ? !(!s5 || !a13) && looseCompareNested(e8, t8, r3, looseCompareObjects) : String(e8) === String(t8))));
}
function looseIndexOf(e8, t8) {
  return e8.findIndex((e9) => looseEqual(e9, t8));
}
function normalizeCssVarValue(e8) {
  return null == e8 ? "initial" : "string" == typeof e8 ? "" === e8 ? " " : e8 : String(e8);
}
function effectScope(e8) {
  return new EffectScope(e8);
}
function getCurrentScope() {
  return ps;
}
function onScopeDispose(e8, t8 = false) {
  ps && ps.cleanups.push(e8);
}
function batch(e8, t8 = false) {
  if (e8.flags |= 8, t8) return e8.next = ms, void (ms = e8);
  e8.next = gs, gs = e8;
}
function startBatch() {
  ys++;
}
function endBatch() {
  if (--ys > 0) return;
  if (ms) {
    let e9 = ms;
    for (ms = void 0; e9; ) {
      const t8 = e9.next;
      e9.next = void 0, e9.flags &= -9, e9 = t8;
    }
  }
  let e8;
  for (; gs; ) {
    let t8 = gs;
    for (gs = void 0; t8; ) {
      const r3 = t8.next;
      if (t8.next = void 0, t8.flags &= -9, 1 & t8.flags) try {
        t8.trigger();
      } catch (t9) {
        e8 || (e8 = t9);
      }
      t8 = r3;
    }
  }
  if (e8) throw e8;
}
function prepareDeps(e8) {
  for (let t8 = e8.deps; t8; t8 = t8.nextDep) t8.version = -1, t8.prevActiveLink = t8.dep.activeLink, t8.dep.activeLink = t8;
}
function cleanupDeps(e8) {
  let t8, r3 = e8.depsTail, s5 = r3;
  for (; s5; ) {
    const e9 = s5.prevDep;
    -1 === s5.version ? (s5 === r3 && (r3 = e9), removeSub(s5), removeDep(s5)) : t8 = s5, s5.dep.activeLink = s5.prevActiveLink, s5.prevActiveLink = void 0, s5 = e9;
  }
  e8.deps = t8, e8.depsTail = r3;
}
function isDirty(e8) {
  for (let t8 = e8.deps; t8; t8 = t8.nextDep) if (t8.dep.version !== t8.version || t8.dep.computed && (refreshComputed(t8.dep.computed) || t8.dep.version !== t8.version)) return true;
  return !!e8._dirty;
}
function refreshComputed(e8) {
  if (4 & e8.flags && !(16 & e8.flags)) return;
  if (e8.flags &= -17, e8.globalVersion === bs) return;
  if (e8.globalVersion = bs, !e8.isSSR && 128 & e8.flags && (!e8.deps && !e8._dirty || !isDirty(e8))) return;
  e8.flags |= 2;
  const t8 = e8.dep, r3 = fs, s5 = vs;
  fs = e8, vs = true;
  try {
    prepareDeps(e8);
    const r4 = e8.fn(e8._value);
    (0 === t8.version || hasChanged(r4, e8._value)) && (e8.flags |= 128, e8._value = r4, t8.version++);
  } catch (e9) {
    throw t8.version++, e9;
  } finally {
    fs = r3, vs = s5, cleanupDeps(e8), e8.flags &= -3;
  }
}
function removeSub(e8, t8 = false) {
  const { dep: r3, prevSub: s5, nextSub: a13 } = e8;
  if (s5 && (s5.nextSub = a13, e8.prevSub = void 0), a13 && (a13.prevSub = s5, e8.nextSub = void 0), r3.subs === e8 && (r3.subs = s5, !s5 && r3.computed)) {
    r3.computed.flags &= -5;
    for (let e9 = r3.computed.deps; e9; e9 = e9.nextDep) removeSub(e9, true);
  }
  t8 || --r3.sc || !r3.map || r3.map.delete(r3.key);
}
function removeDep(e8) {
  const { prevDep: t8, nextDep: r3 } = e8;
  t8 && (t8.nextDep = r3, e8.prevDep = void 0), r3 && (r3.prevDep = t8, e8.nextDep = void 0);
}
function pauseTracking() {
  _s.push(vs), vs = false;
}
function resetTracking() {
  const e8 = _s.pop();
  vs = void 0 === e8 || e8;
}
function cleanupEffect(e8) {
  const { cleanup: t8 } = e8;
  if (e8.cleanup = void 0, t8) {
    const e9 = fs;
    fs = void 0;
    try {
      t8();
    } finally {
      fs = e9;
    }
  }
}
function addSub(e8) {
  if (e8.dep.sc++, 4 & e8.sub.flags) {
    const t8 = e8.dep.computed;
    if (t8 && !e8.dep.subs) {
      t8.flags |= 20;
      for (let e9 = t8.deps; e9; e9 = e9.nextDep) addSub(e9);
    }
    const r3 = e8.dep.subs;
    r3 !== e8 && (e8.prevSub = r3, r3 && (r3.nextSub = e8)), e8.dep.subs = e8;
  }
}
function track(e8, t8, r3) {
  if (vs && fs) {
    let t9 = ws.get(e8);
    t9 || ws.set(e8, t9 = /* @__PURE__ */ new Map());
    let s5 = t9.get(r3);
    s5 || (t9.set(r3, s5 = new Dep()), s5.map = t9, s5.key = r3), s5.track();
  }
}
function trigger(e8, t8, r3, s5, a13, c5) {
  const u9 = ws.get(e8);
  if (!u9) return void bs++;
  const run = /* @__PURE__ */ __name((e9) => {
    e9 && e9.trigger();
  }, "run");
  if (startBatch(), "clear" === t8) u9.forEach(run);
  else {
    const a14 = Ur(e8), c6 = a14 && isIntegerKey(r3);
    if (a14 && "length" === r3) {
      const e9 = Number(s5);
      u9.forEach((t9, r4) => {
        ("length" === r4 || r4 === Rs || !isSymbol(r4) && r4 >= e9) && run(t9);
      });
    } else switch ((void 0 !== r3 || u9.has(void 0)) && run(u9.get(r3)), c6 && run(u9.get(Rs)), t8) {
      case "add":
        a14 ? c6 && run(u9.get("length")) : (run(u9.get(xs)), isMap(e8) && run(u9.get(ks)));
        break;
      case "delete":
        a14 || (run(u9.get(xs)), isMap(e8) && run(u9.get(ks)));
        break;
      case "set":
        isMap(e8) && run(u9.get(xs));
    }
  }
  endBatch();
}
function reactiveReadArray(e8) {
  const t8 = toRaw(e8);
  return t8 === e8 ? t8 : (track(t8, 0, Rs), isShallow(e8) ? t8 : isReadonly(e8) ? isReactive(e8) ? t8.map((e9) => toReadonly(toReactive(e9))) : t8.map(toReadonly) : t8.map(toReactive));
}
function shallowReadArray(e8) {
  return track(e8 = toRaw(e8), 0, Rs), e8;
}
function toWrapped(e8, t8) {
  return isReadonly(e8) ? isReactive(e8) ? toReadonly(toReactive(t8)) : toReadonly(t8) : toReactive(t8);
}
function iterator(e8, t8, r3) {
  const s5 = shallowReadArray(e8), a13 = s5[t8], c5 = a13.call(s5);
  if (s5 !== e8 && !isShallow(e8)) {
    if ("Array Iterator" === c5[Symbol.toStringTag]) {
      const e9 = Object.create(Object.getPrototypeOf(c5));
      return e9.next = () => wrapResult(c5.next(), r3), a13 !== Ss[t8] && Object.defineProperties(e9, { return: { get() {
        const e10 = c5.return;
        return "function" == typeof e10 ? e10.bind(c5) : e10;
      } }, throw: { get() {
        const e10 = c5.throw;
        return "function" == typeof e10 ? e10.bind(c5) : e10;
      } } }), e9;
    }
    c5._next = c5.next, c5.next = () => wrapResult(c5._next(), r3);
  }
  return c5;
}
function wrapResult(e8, t8) {
  return e8.done || (e8.value = t8(e8.value)), e8;
}
function apply(e8, t8, r3, s5, a13, c5) {
  const u9 = shallowReadArray(e8), d7 = u9 !== e8 && !isShallow(e8), p6 = u9[t8];
  if (p6 !== Ss[t8]) {
    const t9 = p6.apply(e8, c5);
    return d7 ? toReactive(t9) : t9;
  }
  let f6 = r3;
  u9 !== e8 && (d7 ? f6 = /* @__PURE__ */ __name(function(t9, s6) {
    return r3.call(this, toWrapped(e8, t9), s6, e8);
  }, "f") : r3.length > 2 && (f6 = /* @__PURE__ */ __name(function(t9, s6) {
    return r3.call(this, t9, s6, e8);
  }, "f")));
  const g9 = p6.call(u9, f6, s5);
  return d7 && a13 ? a13(g9) : g9;
}
function reduce(e8, t8, r3, s5) {
  const a13 = shallowReadArray(e8), c5 = a13 !== e8 && !isShallow(e8);
  let u9 = r3, d7 = false;
  a13 !== e8 && (c5 ? (d7 = 0 === s5.length, u9 = /* @__PURE__ */ __name(function(t9, s6, a14) {
    return d7 && (d7 = false, t9 = toWrapped(e8, t9)), r3.call(this, t9, toWrapped(e8, s6), a14, e8);
  }, "u")) : r3.length > 3 && (u9 = /* @__PURE__ */ __name(function(t9, s6, a14) {
    return r3.call(this, t9, s6, a14, e8);
  }, "u")));
  const p6 = a13[t8](u9, ...s5);
  return d7 ? toWrapped(e8, p6) : p6;
}
function searchProxy(e8, t8, r3) {
  const s5 = toRaw(e8);
  track(s5, 0, Rs);
  const a13 = s5[t8](...r3);
  return -1 !== a13 && false !== a13 || !isProxy(r3[0]) ? a13 : (r3[0] = toRaw(r3[0]), s5[t8](...r3));
}
function noTracking(e8, t8, r3 = []) {
  pauseTracking(), startBatch();
  const s5 = toRaw(e8)[t8].apply(e8, r3);
  return endBatch(), resetTracking(), s5;
}
function hasOwnProperty(e8) {
  isSymbol(e8) || (e8 = String(e8));
  const t8 = toRaw(this);
  return track(t8, 0, e8), t8.hasOwnProperty(e8);
}
function createReadonlyMethod(e8) {
  return function(...t8) {
    return "delete" !== e8 && ("clear" === e8 ? void 0 : this);
  };
}
function createInstrumentations(e8, t8) {
  const r3 = { get(r4) {
    const s5 = this.__v_raw, a13 = toRaw(s5), c5 = toRaw(r4);
    e8 || (hasChanged(r4, c5) && track(a13, 0, r4), track(a13, 0, c5));
    const { has: u9 } = getProto(a13), d7 = t8 ? toShallow : e8 ? toReadonly : toReactive;
    return u9.call(a13, r4) ? d7(s5.get(r4)) : u9.call(a13, c5) ? d7(s5.get(c5)) : void (s5 !== a13 && s5.get(r4));
  }, get size() {
    const t9 = this.__v_raw;
    return !e8 && track(toRaw(t9), 0, xs), t9.size;
  }, has(t9) {
    const r4 = this.__v_raw, s5 = toRaw(r4), a13 = toRaw(t9);
    return e8 || (hasChanged(t9, a13) && track(s5, 0, t9), track(s5, 0, a13)), t9 === a13 ? r4.has(t9) : r4.has(t9) || r4.has(a13);
  }, forEach(r4, s5) {
    const a13 = this, c5 = a13.__v_raw, u9 = toRaw(c5), d7 = t8 ? toShallow : e8 ? toReadonly : toReactive;
    return !e8 && track(u9, 0, xs), c5.forEach((e9, t9) => r4.call(s5, d7(e9), d7(t9), a13));
  } };
  $r(r3, e8 ? { add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear") } : { add(e9) {
    const r4 = toRaw(this), s5 = getProto(r4), a13 = toRaw(e9), c5 = t8 || isShallow(e9) || isReadonly(e9) ? e9 : a13;
    return s5.has.call(r4, c5) || hasChanged(e9, c5) && s5.has.call(r4, e9) || hasChanged(a13, c5) && s5.has.call(r4, a13) || (r4.add(c5), trigger(r4, "add", c5, c5)), this;
  }, set(e9, r4) {
    t8 || isShallow(r4) || isReadonly(r4) || (r4 = toRaw(r4));
    const s5 = toRaw(this), { has: a13, get: c5 } = getProto(s5);
    let u9 = a13.call(s5, e9);
    u9 || (e9 = toRaw(e9), u9 = a13.call(s5, e9));
    const d7 = c5.call(s5, e9);
    return s5.set(e9, r4), u9 ? hasChanged(r4, d7) && trigger(s5, "set", e9, r4) : trigger(s5, "add", e9, r4), this;
  }, delete(e9) {
    const t9 = toRaw(this), { has: r4, get: s5 } = getProto(t9);
    let a13 = r4.call(t9, e9);
    a13 || (e9 = toRaw(e9), a13 = r4.call(t9, e9)), s5 && s5.call(t9, e9);
    const c5 = t9.delete(e9);
    return a13 && trigger(t9, "delete", e9, void 0), c5;
  }, clear() {
    const e9 = toRaw(this), t9 = 0 !== e9.size, r4 = e9.clear();
    return t9 && trigger(e9, "clear", void 0, void 0), r4;
  } });
  return ["keys", "values", "entries", Symbol.iterator].forEach((s5) => {
    r3[s5] = /* @__PURE__ */ (function(e9, t9, r4) {
      return function(...s6) {
        const a13 = this.__v_raw, c5 = toRaw(a13), u9 = isMap(c5), d7 = "entries" === e9 || e9 === Symbol.iterator && u9, p6 = "keys" === e9 && u9, f6 = a13[e9](...s6), g9 = r4 ? toShallow : t9 ? toReadonly : toReactive;
        return !t9 && track(c5, 0, p6 ? ks : xs), $r(Object.create(f6), { next() {
          const { value: e10, done: t10 } = f6.next();
          return t10 ? { value: e10, done: t10 } : { value: d7 ? [g9(e10[0]), g9(e10[1])] : g9(e10), done: t10 };
        } });
      };
    })(s5, e8, t8);
  }), r3;
}
function createInstrumentationGetter(e8, t8) {
  const r3 = createInstrumentations(e8, t8);
  return (s5, a13, c5) => "__v_isReactive" === a13 ? !e8 : "__v_isReadonly" === a13 ? e8 : "__v_isShallow" === a13 ? t8 : "__v_raw" === a13 ? s5 : Reflect.get(hasOwn(r3, a13) && a13 in s5 ? r3 : s5, a13, c5);
}
function reactive(e8) {
  return isReadonly(e8) ? e8 : createReactiveObject(e8, false, Es, Hs, Is);
}
function shallowReactive(e8) {
  return createReactiveObject(e8, false, Ps, Os, Bs);
}
function readonly(e8) {
  return createReactiveObject(e8, true, js, Ms, Ns);
}
function createReactiveObject(e8, t8, r3, s5, a13) {
  if (!isObject(e8)) return e8;
  if (e8.__v_raw && (!t8 || !e8.__v_isReactive)) return e8;
  if (e8.__v_skip || !Object.isExtensible(e8)) return e8;
  const c5 = a13.get(e8);
  if (c5) return c5;
  const u9 = (function(e9) {
    switch (e9) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  })(toTypeString(e8).slice(8, -1));
  if (0 === u9) return e8;
  const d7 = new Proxy(e8, 2 === u9 ? s5 : r3);
  return a13.set(e8, d7), d7;
}
function isReactive(e8) {
  return isReadonly(e8) ? isReactive(e8.__v_raw) : !(!e8 || !e8.__v_isReactive);
}
function isReadonly(e8) {
  return !(!e8 || !e8.__v_isReadonly);
}
function isShallow(e8) {
  return !(!e8 || !e8.__v_isShallow);
}
function isProxy(e8) {
  return !!e8 && !!e8.__v_raw;
}
function toRaw(e8) {
  const t8 = e8 && e8.__v_raw;
  return t8 ? toRaw(t8) : e8;
}
function markRaw(e8) {
  return !hasOwn(e8, "__v_skip") && Object.isExtensible(e8) && def(e8, "__v_skip", true), e8;
}
function isRef(e8) {
  return !!e8 && true === e8.__v_isRef;
}
function ref(e8) {
  return createRef(e8, false);
}
function shallowRef(e8) {
  return createRef(e8, true);
}
function createRef(e8, t8) {
  return isRef(e8) ? e8 : new RefImpl(e8, t8);
}
function triggerRef(e8) {
  e8.dep && e8.dep.trigger();
}
function unref(e8) {
  return isRef(e8) ? e8.value : e8;
}
function toValue(e8) {
  return isFunction(e8) ? e8() : unref(e8);
}
function proxyRefs(e8) {
  return isReactive(e8) ? e8 : new Proxy(e8, Ds);
}
function toRefs(e8) {
  const t8 = Ur(e8) ? new Array(e8.length) : {};
  for (const r3 in e8) t8[r3] = propertyToRef(e8, r3);
  return t8;
}
function toRef(e8, t8, r3) {
  return isRef(e8) ? e8 : isFunction(e8) ? new GetterRefImpl(e8) : isObject(e8) && arguments.length > 1 ? propertyToRef(e8, t8, r3) : ref(e8);
}
function propertyToRef(e8, t8, r3) {
  return new ObjectRefImpl(e8, t8, r3);
}
function watch$1(e8, t8, r3 = Dr) {
  const { immediate: s5, deep: a13, once: c5, scheduler: u9, augmentJob: d7, call: p6 } = r3, reactiveGetter = /* @__PURE__ */ __name((e9) => a13 ? e9 : isShallow(e9) || false === a13 || 0 === a13 ? traverse(e9, 1) : traverse(e9), "reactiveGetter");
  let f6, g9, m8, _7, x7 = false, k5 = false;
  if (isRef(e8) ? (g9 = /* @__PURE__ */ __name(() => e8.value, "g"), x7 = isShallow(e8)) : isReactive(e8) ? (g9 = /* @__PURE__ */ __name(() => reactiveGetter(e8), "g"), x7 = true) : Ur(e8) ? (k5 = true, x7 = e8.some((e9) => isReactive(e9) || isShallow(e9)), g9 = /* @__PURE__ */ __name(() => e8.map((e9) => isRef(e9) ? e9.value : isReactive(e9) ? reactiveGetter(e9) : isFunction(e9) ? p6 ? p6(e9, 2) : e9() : void 0), "g")) : g9 = isFunction(e8) ? t8 ? p6 ? () => p6(e8, 2) : e8 : () => {
    if (m8) {
      pauseTracking();
      try {
        m8();
      } finally {
        resetTracking();
      }
    }
    const t9 = Fs;
    Fs = f6;
    try {
      return p6 ? p6(e8, 3, [_7]) : e8(_7);
    } finally {
      Fs = t9;
    }
  } : NOOP, t8 && a13) {
    const e9 = g9, t9 = true === a13 ? 1 / 0 : a13;
    g9 = /* @__PURE__ */ __name(() => traverse(e9(), t9), "g");
  }
  const R2 = getCurrentScope(), watchHandle = /* @__PURE__ */ __name(() => {
    f6.stop(), R2 && R2.active && remove(R2.effects, f6);
  }, "watchHandle");
  if (c5 && t8) {
    const e9 = t8;
    t8 = /* @__PURE__ */ __name((...t9) => {
      try {
        return e9(...t9);
      } finally {
        watchHandle();
      }
    }, "t");
  }
  let C3 = k5 ? new Array(e8.length).fill(zs) : zs;
  const job = /* @__PURE__ */ __name((e9) => {
    if (1 & f6.flags && (f6.dirty || e9)) if (t8) {
      const r4 = f6.run();
      if (e9 || a13 || x7 || (k5 ? r4.some((e10, t9) => hasChanged(e10, C3[t9])) : hasChanged(r4, C3))) {
        const e10 = Fs;
        pauseTracking();
        try {
          m8 && m8(), Fs = f6;
          const e11 = [r4, C3 === zs ? void 0 : k5 && C3[0] === zs ? [] : C3, _7];
          C3 = r4, p6 ? p6(t8, 3, e11) : t8(...e11);
        } finally {
          Fs = e10, resetTracking();
        }
      }
    } else f6.run();
  }, "job");
  return d7 && d7(job), f6 = new ReactiveEffect(g9), f6.scheduler = u9 ? () => u9(job, false) : job, _7 = /* @__PURE__ */ __name((e9) => (function(e10, t9 = false, r4 = Fs) {
    if (r4) {
      let t10 = $s.get(r4);
      t10 || $s.set(r4, t10 = []), t10.push(e10);
    }
  })(e9, false, f6), "_"), m8 = f6.onStop = () => {
    const e9 = $s.get(f6);
    if (e9) {
      if (p6) p6(e9, 4);
      else for (const t9 of e9) t9();
      $s.delete(f6);
    }
  }, t8 ? s5 ? job(true) : C3 = f6.run() : u9 ? u9(job.bind(null, true), true) : f6.run(), watchHandle.pause = f6.pause.bind(f6), watchHandle.resume = f6.resume.bind(f6), watchHandle.stop = watchHandle, watchHandle;
}
function traverse(e8, t8 = 1 / 0, r3) {
  if (t8 <= 0 || !isObject(e8) || e8.__v_skip) return e8;
  if (((r3 = r3 || /* @__PURE__ */ new Map()).get(e8) || 0) >= t8) return e8;
  if (r3.set(e8, t8), t8--, isRef(e8)) traverse(e8.value, t8, r3);
  else if (Ur(e8)) for (let s5 = 0; s5 < e8.length; s5++) traverse(e8[s5], t8, r3);
  else if (isSet(e8) || isMap(e8)) e8.forEach((e9) => {
    traverse(e9, t8, r3);
  });
  else if (isPlainObject2(e8)) {
    for (const s5 in e8) traverse(e8[s5], t8, r3);
    for (const s5 of Object.getOwnPropertySymbols(e8)) Object.prototype.propertyIsEnumerable.call(e8, s5) && traverse(e8[s5], t8, r3);
  }
  return e8;
}
function callWithErrorHandling(e8, t8, r3, s5) {
  try {
    return s5 ? e8(...s5) : e8();
  } catch (e9) {
    handleError(e9, t8, r3);
  }
}
function callWithAsyncErrorHandling(e8, t8, r3, s5) {
  if (isFunction(e8)) {
    const a13 = callWithErrorHandling(e8, t8, r3, s5);
    return a13 && isPromise(a13) && a13.catch((e9) => {
      handleError(e9, t8, r3);
    }), a13;
  }
  if (Ur(e8)) {
    const a13 = [];
    for (let c5 = 0; c5 < e8.length; c5++) a13.push(callWithAsyncErrorHandling(e8[c5], t8, r3, s5));
    return a13;
  }
}
function handleError(e8, t8, r3, s5 = true) {
  t8 && t8.vnode;
  const { errorHandler: a13, throwUnhandledErrorInProduction: c5 } = t8 && t8.appContext.config || Dr;
  if (t8) {
    let s6 = t8.parent;
    const c6 = t8.proxy, u9 = `https://vuejs.org/error-reference/#runtime-${r3}`;
    for (; s6; ) {
      const t9 = s6.ec;
      if (t9) {
        for (let r4 = 0; r4 < t9.length; r4++) if (false === t9[r4](e8, c6, u9)) return;
      }
      s6 = s6.parent;
    }
    if (a13) return pauseTracking(), callWithErrorHandling(a13, null, 10, [e8, c6, u9]), void resetTracking();
  }
  !(function(e9, t9, r4, s6 = true, a14 = false) {
    if (a14) throw e9;
    console.error(e9);
  })(e8, 0, 0, s5, c5);
}
function nextTick(e8) {
  const t8 = Js || Zs;
  return e8 ? t8.then(this ? e8.bind(this) : e8) : t8;
}
function queueJob(e8) {
  if (!(1 & e8.flags)) {
    const t8 = getId(e8), r3 = Us[Us.length - 1];
    !r3 || !(2 & e8.flags) && t8 >= getId(r3) ? Us.push(e8) : Us.splice((function(e9) {
      let t9 = Ws + 1, r4 = Us.length;
      for (; t9 < r4; ) {
        const s5 = t9 + r4 >>> 1, a13 = Us[s5], c5 = getId(a13);
        c5 < e9 || c5 === e9 && 2 & a13.flags ? t9 = s5 + 1 : r4 = s5;
      }
      return t9;
    })(t8), 0, e8), e8.flags |= 1, queueFlush();
  }
}
function queueFlush() {
  Js || (Js = Zs.then(flushJobs));
}
function queuePostFlushCb(e8) {
  if (Ur(e8)) for (let t8 = 0; t8 < e8.length; t8++) qs.push(e8[t8]);
  else Vs && -1 === e8.id ? Vs.splice(Ks + 1, 0, e8) : 1 & e8.flags || (qs.push(e8), e8.flags |= 1);
  queueFlush();
}
function flushPreFlushCbs(e8, t8, r3, s5 = Ws + 1) {
  for (; s5 < Us.length; s5++) {
    const r4 = Us[s5];
    if (r4 && 2 & r4.flags) {
      if (e8 && r4.id !== e8.uid || void 0 !== t8 && !(r4.id >= t8)) continue;
      Us.splice(s5, 1), s5 = e8 ? s5 - 1 : Ws, 4 & r4.flags && (r4.flags &= -2), r4(), 4 & r4.flags || (r4.flags &= -2);
    }
  }
}
function flushPostFlushCbs(e8, t8, r3 = 0) {
  if (qs.length) {
    let e9 = qs, s5 = 0;
    if (t8) {
      e9 = [];
      for (let a14 = 0; a14 < qs.length; a14++) {
        const c5 = qs[a14];
        (void 0 !== c5.i ? !c5.i || c5.i.uid < r3 : t8.has(c5)) ? qs[s5++] = c5 : e9.push(c5);
      }
    }
    const a13 = [...new Set(e9)].sort((e10, t9) => getId(e10) - getId(t9));
    if (qs.length = s5, Vs) {
      for (let e10 = 0; e10 < a13.length; e10++) Vs.push(a13[e10]);
      return;
    }
    for (Vs = a13, Ks = 0; Ks < Vs.length; Ks++) {
      const e10 = Vs[Ks];
      4 & e10.flags && (e10.flags &= -2), 8 & e10.flags || e10(), e10.flags &= -2;
    }
    Vs = null, Ks = 0;
  }
}
function flushJobs(e8) {
  try {
    for (Ws = 0; Ws < Us.length; Ws++) {
      const e9 = Us[Ws];
      !e9 || 8 & e9.flags || (4 & e9.flags && (e9.flags &= -2), callWithErrorHandling(e9, e9.i, e9.i ? 15 : 14), 4 & e9.flags || (e9.flags &= -2));
    }
  } finally {
    for (; Ws < Us.length; Ws++) {
      const e9 = Us[Ws];
      e9 && (e9.flags &= -2);
    }
    Ws = -1, Us.length = 0, flushPostFlushCbs(), Js = null, (Us.length || qs.length) && flushJobs();
  }
}
function setCurrentRenderingInstance(e8) {
  const t8 = Qs;
  return Qs = e8, Ys = e8 && e8.type.__scopeId || null, t8;
}
function withCtx(e8, t8 = Qs, r3) {
  if (!t8) return e8;
  if (e8._n) return e8;
  const renderFnWithContext = /* @__PURE__ */ __name((...r4) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const s5 = setCurrentRenderingInstance(t8), a13 = jo.length;
    let c5;
    try {
      c5 = e8(...r4);
    } finally {
      for (let e9 = jo.length; e9 > a13; e9--) closeBlock();
      setCurrentRenderingInstance(s5), renderFnWithContext._d && setBlockTracking(1);
    }
    return c5;
  }, "renderFnWithContext");
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function withDirectives(e8, t8) {
  if (null === Qs) return e8;
  const r3 = getComponentPublicInstance(Qs), s5 = e8.dirs || (e8.dirs = []);
  for (let e9 = 0; e9 < t8.length; e9++) {
    let [a13, c5, u9, d7 = Dr] = t8[e9];
    a13 && (isFunction(a13) && (a13 = { mounted: a13, updated: a13 }), a13.deep && traverse(c5), s5.push({ dir: a13, instance: r3, value: c5, oldValue: void 0, arg: u9, modifiers: d7 }));
  }
  return e8;
}
function invokeDirectiveHook(e8, t8, r3, s5) {
  const a13 = e8.dirs, c5 = t8 && t8.dirs;
  for (let u9 = 0; u9 < a13.length; u9++) {
    const d7 = a13[u9];
    c5 && (d7.oldValue = c5[u9].value);
    let p6 = d7.dir[s5];
    p6 && (pauseTracking(), callWithAsyncErrorHandling(p6, r3, 8, [e8.el, d7, e8, t8]), resetTracking());
  }
}
function provide(e8, t8) {
  if (Io) {
    let r3 = Io.provides;
    const s5 = Io.parent && Io.parent.provides;
    s5 === r3 && (r3 = Io.provides = Object.create(s5)), r3[e8] = t8;
  }
}
function inject(e8, t8, r3 = false) {
  const s5 = getCurrentInstance();
  if (s5 || bo) {
    let a13 = bo ? bo._context.provides : s5 ? null == s5.parent || s5.ce ? s5.vnode.appContext && s5.vnode.appContext.provides : s5.parent.provides : void 0;
    if (a13 && e8 in a13) return a13[e8];
    if (arguments.length > 1) return r3 && isFunction(t8) ? t8.call(s5 && s5.proxy) : t8;
  }
}
function hasInjectionContext() {
  return !(!getCurrentInstance() && !bo);
}
function watchEffect(e8, t8) {
  return doWatch(e8, null, t8);
}
function watch(e8, t8, r3) {
  return doWatch(e8, t8, r3);
}
function doWatch(e8, t8, r3 = Dr) {
  const { immediate: s5, deep: a13, flush: c5, once: u9 } = r3, d7 = $r({}, r3), p6 = t8 && s5 || !t8 && "post" !== c5;
  let f6;
  if (Lo) {
    if ("sync" === c5) {
      const e9 = useSSRContext();
      f6 = e9.__watcherHandles || (e9.__watcherHandles = []);
    } else if (!p6) {
      const watchStopHandle = /* @__PURE__ */ __name(() => {
      }, "watchStopHandle");
      return watchStopHandle.stop = NOOP, watchStopHandle.resume = NOOP, watchStopHandle.pause = NOOP, watchStopHandle;
    }
  }
  const g9 = Io;
  d7.call = (e9, t9, r4) => callWithAsyncErrorHandling(e9, g9, t9, r4);
  let m8 = false;
  "post" === c5 ? d7.scheduler = (e9) => {
    e9.i = g9, queuePostRenderEffect(e9, g9 && g9.suspense);
  } : "sync" !== c5 && (m8 = true, d7.scheduler = (e9, t9) => {
    t9 ? e9() : queueJob(e9);
  }), d7.augmentJob = (e9) => {
    t8 && (e9.flags |= 4), m8 && (e9.flags |= 2, g9 && (e9.id = g9.uid, e9.i = g9));
  };
  const _7 = watch$1(e8, t8, d7);
  return Lo && (f6 ? f6.push(_7) : p6 && _7()), _7;
}
function instanceWatch(e8, t8, r3) {
  const s5 = this.proxy, a13 = isString(e8) ? e8.includes(".") ? createPathGetter(s5, e8) : () => s5[e8] : e8.bind(s5, s5);
  let c5;
  isFunction(t8) ? c5 = t8 : (c5 = t8.handler, r3 = t8);
  const u9 = setCurrentInstance(this), d7 = doWatch(a13, c5.bind(s5), r3);
  return u9(), d7;
}
function createPathGetter(e8, t8) {
  const r3 = t8.split(".");
  return () => {
    let t9 = e8;
    for (let e9 = 0; e9 < r3.length && t9; e9++) t9 = t9[r3[e9]];
    return t9;
  };
}
function getInnerChild$1(e8) {
  if (!isKeepAlive(e8)) return isTeleport(e8.type) && e8.children ? (function(e9) {
    let t9 = e9[0];
    if (e9.length > 1) {
      for (const r4 of e9) if (r4.type !== Ao) {
        t9 = r4;
        break;
      }
    }
    return t9;
  })(e8.children) : e8;
  if (e8.component) return e8.component.subTree;
  const { shapeFlag: t8, children: r3 } = e8;
  if (r3) {
    if (16 & t8) return r3[0];
    if (32 & t8 && isFunction(r3.default)) return r3.default();
  }
}
function setTransitionHooks(e8, t8) {
  if (6 & e8.shapeFlag && e8.component) {
    e8.transition = t8;
    const r3 = e8.component.subTree;
    setTransitionHooks(isTeleport(r3.type) && getInnerChild$1(r3) || r3, t8);
  } else if (128 & e8.shapeFlag) e8.ssContent.transition = t8.clone(e8.ssContent), e8.ssFallback.transition = t8.clone(e8.ssFallback);
  else if (e8.transition = t8, e8.type === So && Ur(e8.children)) {
    const r3 = filterSingleRoot(e8.children, false);
    r3 && setTransitionHooks(r3, t8);
  }
}
function getTransitionRoot(e8) {
  if (e8.component) return getTransitionRoot(e8.component.subTree);
  if (e8.type === So) {
    const t8 = Ur(e8.children) && filterSingleRoot(e8.children, false);
    return t8 ? getTransitionRoot(t8) : void 0;
  }
  return e8.type !== Ao ? e8 : void 0;
}
function defineComponent(e8, t8) {
  return isFunction(e8) ? (() => $r({ name: e8.name }, t8, { setup: e8 }))() : e8;
}
function markAsyncBoundary(e8) {
  e8.ids = [e8.ids[0] + e8.ids[2]++ + "-", 0, 0];
}
function isTemplateRefKey(e8, t8) {
  let r3;
  return !(!(r3 = Object.getOwnPropertyDescriptor(e8, t8)) || r3.configurable);
}
function setRef(e8, t8, r3, s5, a13 = false) {
  if (Ur(e8)) return void e8.forEach((e9, c6) => setRef(e9, t8 && (Ur(t8) ? t8[c6] : t8), r3, s5, a13));
  if (isAsyncWrapper(s5) && !a13) return void (512 & s5.shapeFlag && s5.type.__asyncResolved && s5.component.subTree.component && setRef(e8, t8, r3, s5.component.subTree));
  const c5 = 4 & s5.shapeFlag ? getComponentPublicInstance(s5.component) : s5.el, u9 = a13 ? null : c5, { i: d7, r: p6 } = e8, f6 = t8 && t8.r, g9 = d7.refs === Dr ? d7.refs = {} : d7.refs, m8 = d7.setupState, _7 = toRaw(m8), x7 = m8 === Dr ? NO : (e9) => !isTemplateRefKey(g9, e9) && hasOwn(_7, e9), canSetRef = /* @__PURE__ */ __name((e9, t9) => !t9 || !isTemplateRefKey(g9, t9), "canSetRef");
  if (null != f6 && f6 !== p6) {
    if (invalidatePendingSetRef(t8), isString(f6)) g9[f6] = null, x7(f6) && (m8[f6] = null);
    else if (isRef(f6)) {
      const e9 = t8;
      canSetRef(0, e9.k) && (f6.value = null), e9.k && (g9[e9.k] = null);
    }
  }
  if (isFunction(p6)) callWithErrorHandling(p6, d7, 12, [u9, g9]);
  else {
    const t9 = isString(p6), s6 = isRef(p6);
    if (t9 || s6) {
      const doSet = /* @__PURE__ */ __name(() => {
        if (e8.f) {
          const r4 = t9 ? x7(p6) ? m8[p6] : g9[p6] : canSetRef() || !e8.k ? p6.value : g9[e8.k];
          if (a13) Ur(r4) && remove(r4, c5);
          else if (Ur(r4)) r4.includes(c5) || r4.push(c5);
          else if (t9) g9[p6] = [c5], x7(p6) && (m8[p6] = g9[p6]);
          else {
            const t10 = [c5];
            canSetRef(0, e8.k) && (p6.value = t10), e8.k && (g9[e8.k] = t10);
          }
        } else t9 ? (g9[p6] = u9, x7(p6) && (m8[p6] = u9)) : s6 && (canSetRef(0, e8.k) && (p6.value = u9), e8.k && (g9[e8.k] = u9));
      }, "doSet");
      if (u9) {
        const job = /* @__PURE__ */ __name(() => {
          doSet(), no.delete(e8);
        }, "job");
        job.id = -1, no.set(e8, job), queuePostRenderEffect(job, r3);
      } else invalidatePendingSetRef(e8), doSet();
    }
  }
}
function invalidatePendingSetRef(e8) {
  const t8 = no.get(e8);
  t8 && (t8.flags |= 8, no.delete(e8));
}
function defineAsyncComponent(e8) {
  isFunction(e8) && (e8 = { loader: e8 });
  const { loader: t8, loadingComponent: r3, errorComponent: s5, delay: a13 = 200, hydrate: c5, timeout: u9, suspensible: d7 = true, onError: p6 } = e8;
  let f6, g9 = null, m8 = 0;
  const load = /* @__PURE__ */ __name(() => {
    let e9;
    return g9 || (e9 = g9 = t8().catch((e10) => {
      if (e10 = e10 instanceof Error ? e10 : new Error(String(e10)), p6) return new Promise((t9, r4) => {
        p6(e10, () => t9((m8++, g9 = null, load())), () => r4(e10), m8 + 1);
      });
      throw e10;
    }).then((t9) => e9 !== g9 && g9 ? g9 : (t9 && (t9.__esModule || "Module" === t9[Symbol.toStringTag]) && (t9 = t9.default), f6 = t9, t9)));
  }, "load");
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, __asyncHydrate(e9, t9, r4) {
    const s6 = e9.isConnected;
    let a14 = false;
    (t9.bu || (t9.bu = [])).push(() => a14 = true);
    const performHydrate = /* @__PURE__ */ __name(() => {
      a14 || !e9.parentNode || s6 && !e9.isConnected || r4();
    }, "performHydrate"), u10 = c5 ? () => {
      const r5 = c5(performHydrate, (t10) => (function(e10, t11) {
        if (isComment2(e10) && "[" === e10.data) {
          let r6 = 1, s7 = e10.nextSibling;
          for (; s7; ) {
            if (1 === s7.nodeType) {
              if (false === t11(s7)) break;
            } else if (isComment2(s7)) if ("]" === s7.data) {
              if (0 === --r6) break;
            } else "[" === s7.data && r6++;
            s7 = s7.nextSibling;
          }
        } else t11(e10);
      })(e9, t10));
      r5 && (t9.bum || (t9.bum = [])).push(r5);
    } : performHydrate;
    f6 ? u10() : load().then(() => !t9.isUnmounted && u10());
  }, get __asyncResolved() {
    return f6;
  }, setup() {
    const e9 = Io;
    if (markAsyncBoundary(e9), f6) return () => createInnerComp(f6, e9);
    const onError = /* @__PURE__ */ __name((t10) => {
      g9 = null, handleError(t10, e9, 13, !s5);
    }, "onError");
    if (d7 && e9.suspense || Lo) return load().then((t10) => () => createInnerComp(t10, e9)).catch((e10) => (onError(e10), () => s5 ? createVNode(s5, { error: e10 }) : null));
    const t9 = ref(false), c6 = ref(), p7 = ref(!!a13);
    let m9, _7;
    return co(() => {
      null != m9 && clearTimeout(m9), null != _7 && clearTimeout(_7);
    }), a13 && (_7 = setTimeout(() => {
      e9.isUnmounted || (p7.value = false);
    }, a13)), null != u9 && (m9 = setTimeout(() => {
      if (!e9.isUnmounted && !t9.value && !c6.value) {
        const e10 = new Error(`Async component timed out after ${u9}ms.`);
        onError(e10), c6.value = e10;
      }
    }, u9)), load().then(() => {
      e9.isUnmounted || (t9.value = true, e9.parent && isKeepAlive(e9.parent.vnode) && e9.parent.update());
    }).catch((t10) => {
      e9.isUnmounted ? g9 = null : (onError(t10), c6.value = t10);
    }), () => t9.value && f6 ? createInnerComp(f6, e9) : c6.value && s5 ? createVNode(s5, { error: c6.value }) : r3 && !p7.value ? createInnerComp(r3, e9) : void 0;
  } });
}
function createInnerComp(e8, t8) {
  const { ref: r3, props: s5, children: a13, ce: c5 } = t8.vnode, u9 = createVNode(e8, s5, a13);
  return u9.ref = r3, u9.ce = c5, delete t8.vnode.ce, u9;
}
function onActivated(e8, t8) {
  registerKeepAliveHook(e8, "a", t8);
}
function onDeactivated(e8, t8) {
  registerKeepAliveHook(e8, "da", t8);
}
function registerKeepAliveHook(e8, t8, r3 = Io) {
  const s5 = e8.__wdc || (e8.__wdc = () => {
    let t9 = r3;
    for (; t9; ) {
      if (t9.isDeactivated) return;
      t9 = t9.parent;
    }
    return e8();
  });
  if (injectHook(t8, s5, r3), r3) {
    let e9 = r3.parent;
    for (; e9 && e9.parent; ) isKeepAlive(e9.parent.vnode) && injectToKeepAliveRoot(s5, t8, r3, e9), e9 = e9.parent;
  }
}
function injectToKeepAliveRoot(e8, t8, r3, s5) {
  const a13 = injectHook(t8, e8, s5, true);
  co(() => {
    remove(s5[t8], a13);
  }, r3);
}
function injectHook(e8, t8, r3 = Io, s5 = false) {
  if (r3) {
    const a13 = r3[e8] || (r3[e8] = []), c5 = t8.__weh || (t8.__weh = (...s6) => {
      pauseTracking();
      const a14 = setCurrentInstance(r3), c6 = callWithAsyncErrorHandling(t8, r3, e8, s6);
      return a14(), resetTracking(), c6;
    });
    return s5 ? a13.unshift(c5) : a13.push(c5), c5;
  }
}
function onErrorCaptured(e8, t8 = Io) {
  injectHook("ec", e8, t8);
}
function resolveComponent(e8, t8) {
  return resolveAsset(fo, e8, true, t8) || e8;
}
function resolveDynamicComponent(e8) {
  return isString(e8) ? resolveAsset(fo, e8, false) || e8 : e8 || ho;
}
function resolveAsset(e8, t8, r3 = true, s5 = false) {
  const a13 = Qs || Io;
  if (a13) {
    const r4 = a13.type;
    {
      const e9 = getComponentName(r4, false);
      if (e9 && (e9 === t8 || e9 === Kr(t8) || e9 === Gr(Kr(t8)))) return r4;
    }
    const c5 = resolve2(a13[e8] || r4[e8], t8) || resolve2(a13.appContext[e8], t8);
    return !c5 && s5 ? r4 : c5;
  }
}
function resolve2(e8, t8) {
  return e8 && (e8[t8] || e8[Kr(t8)] || e8[Gr(Kr(t8))]);
}
function renderList(e8, t8, r3, s5) {
  let a13;
  const c5 = r3 && r3[s5], u9 = Ur(e8);
  if (u9 || isString(e8)) {
    let r4 = false, s6 = false;
    u9 && isReactive(e8) && (r4 = !isShallow(e8), s6 = isReadonly(e8), e8 = shallowReadArray(e8)), a13 = new Array(e8.length);
    for (let u10 = 0, d7 = e8.length; u10 < d7; u10++) a13[u10] = t8(r4 ? s6 ? toReadonly(toReactive(e8[u10])) : toReactive(e8[u10]) : e8[u10], u10, void 0, c5 && c5[u10]);
  } else if ("number" == typeof e8) if (!Number.isInteger(e8) || e8 < 0) a13 = [];
  else {
    a13 = new Array(e8);
    for (let r4 = 0; r4 < e8; r4++) a13[r4] = t8(r4 + 1, r4, void 0, c5 && c5[r4]);
  }
  else if (isObject(e8)) if (e8[Symbol.iterator]) a13 = Array.from(e8, (e9, r4) => t8(e9, r4, void 0, c5 && c5[r4]));
  else {
    const r4 = Object.keys(e8);
    a13 = new Array(r4.length);
    for (let s6 = 0, u10 = r4.length; s6 < u10; s6++) {
      const u11 = r4[s6];
      a13[s6] = t8(e8[u11], u11, s6, c5 && c5[s6]);
    }
  }
  else a13 = [];
  return r3 && (r3[s5] = a13), a13;
}
function normalizePropsOrEmits(e8) {
  return Ur(e8) ? e8.reduce((e9, t8) => (e9[t8] = null, e9), {}) : e8;
}
function mergeModels(e8, t8) {
  return e8 && t8 ? Ur(e8) && Ur(t8) ? e8.concat(t8) : $r({}, normalizePropsOrEmits(e8), normalizePropsOrEmits(t8)) : e8 || t8;
}
function applyOptions(e8) {
  const t8 = resolveMergedOptions(e8), r3 = e8.proxy, s5 = e8.ctx;
  yo = false, t8.beforeCreate && callHook(t8.beforeCreate, e8, "bc");
  const { data: a13, computed: c5, methods: u9, watch: d7, provide: p6, inject: f6, created: g9, beforeMount: m8, mounted: _7, beforeUpdate: x7, updated: k5, activated: R2, deactivated: C3, beforeDestroy: S5, beforeUnmount: T3, destroyed: E2, unmounted: j7, render: P3, renderTracked: H2, renderTriggered: O3, errorCaptured: M3, serverPrefetch: I4, expose: B3, inheritAttrs: N3, components: L3, directives: D5, filters: z2 } = t8;
  if (f6 && (function(e9, t9) {
    Ur(e9) && (e9 = normalizeInject(e9));
    for (const r4 in e9) {
      const s6 = e9[r4];
      let a14;
      a14 = isObject(s6) ? "default" in s6 ? inject(s6.from || r4, s6.default, true) : inject(s6.from || r4) : inject(s6), isRef(a14) ? Object.defineProperty(t9, r4, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => a14.value, "get"), set: /* @__PURE__ */ __name((e10) => a14.value = e10, "set") }) : t9[r4] = a14;
    }
  })(f6, s5, null), u9) for (const e9 in u9) {
    const t9 = u9[e9];
    isFunction(t9) && (s5[e9] = t9.bind(r3));
  }
  if (a13) {
    const t9 = a13.call(r3, r3);
    isObject(t9) && (e8.data = reactive(t9));
  }
  if (yo = true, c5) for (const e9 in c5) {
    const t9 = c5[e9], a14 = isFunction(t9) ? t9.bind(r3, r3) : isFunction(t9.get) ? t9.get.bind(r3, r3) : NOOP, u10 = !isFunction(t9) && isFunction(t9.set) ? t9.set.bind(r3) : NOOP, d8 = computed({ get: a14, set: u10 });
    Object.defineProperty(s5, e9, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => d8.value, "get"), set: /* @__PURE__ */ __name((e10) => d8.value = e10, "set") });
  }
  if (d7) for (const e9 in d7) createWatcher(d7[e9], s5, r3, e9);
  if (p6) {
    const e9 = isFunction(p6) ? p6.call(r3) : p6;
    Reflect.ownKeys(e9).forEach((t9) => {
      provide(t9, e9[t9]);
    });
  }
  function registerLifecycleHook(e9, t9) {
    Ur(t9) ? t9.forEach((t10) => e9(t10.bind(r3))) : t9 && e9(t9.bind(r3));
  }
  __name(registerLifecycleHook, "registerLifecycleHook");
  if (g9 && callHook(g9, e8, "c"), registerLifecycleHook(ro, m8), registerLifecycleHook(so, _7), registerLifecycleHook(oo, x7), registerLifecycleHook(io, k5), registerLifecycleHook(onActivated, R2), registerLifecycleHook(onDeactivated, C3), registerLifecycleHook(onErrorCaptured, M3), registerLifecycleHook(po, H2), registerLifecycleHook(uo, O3), registerLifecycleHook(ao, T3), registerLifecycleHook(co, j7), registerLifecycleHook(lo, I4), Ur(B3)) if (B3.length) {
    const t9 = e8.exposed || (e8.exposed = {});
    B3.forEach((e9) => {
      Object.defineProperty(t9, e9, { get: /* @__PURE__ */ __name(() => r3[e9], "get"), set: /* @__PURE__ */ __name((t10) => r3[e9] = t10, "set"), enumerable: true });
    });
  } else e8.exposed || (e8.exposed = {});
  P3 && e8.render === NOOP && (e8.render = P3), null != N3 && (e8.inheritAttrs = N3), L3 && (e8.components = L3), D5 && (e8.directives = D5), I4 && markAsyncBoundary(e8);
}
function callHook(e8, t8, r3) {
  callWithAsyncErrorHandling(Ur(e8) ? e8.map((e9) => e9.bind(t8.proxy)) : e8.bind(t8.proxy), t8, r3);
}
function createWatcher(e8, t8, r3, s5) {
  let a13 = s5.includes(".") ? createPathGetter(r3, s5) : () => r3[s5];
  if (isString(e8)) {
    const r4 = t8[e8];
    isFunction(r4) && watch(a13, r4);
  } else if (isFunction(e8)) watch(a13, e8.bind(r3));
  else if (isObject(e8)) if (Ur(e8)) e8.forEach((e9) => createWatcher(e9, t8, r3, s5));
  else {
    const s6 = isFunction(e8.handler) ? e8.handler.bind(r3) : t8[e8.handler];
    isFunction(s6) && watch(a13, s6, e8);
  }
}
function resolveMergedOptions(e8) {
  const t8 = e8.type, { mixins: r3, extends: s5 } = t8, { mixins: a13, optionsCache: c5, config: { optionMergeStrategies: u9 } } = e8.appContext, d7 = c5.get(t8);
  let p6;
  return d7 ? p6 = d7 : a13.length || r3 || s5 ? (p6 = {}, a13.length && a13.forEach((e9) => mergeOptions2(p6, e9, u9, true)), mergeOptions2(p6, t8, u9)) : p6 = t8, isObject(t8) && c5.set(t8, p6), p6;
}
function mergeOptions2(e8, t8, r3, s5 = false) {
  const { mixins: a13, extends: c5 } = t8;
  c5 && mergeOptions2(e8, c5, r3, true), a13 && a13.forEach((t9) => mergeOptions2(e8, t9, r3, true));
  for (const a14 in t8) if (s5 && "expose" === a14) ;
  else {
    const s6 = vo[a14] || r3 && r3[a14];
    e8[a14] = s6 ? s6(e8[a14], t8[a14]) : t8[a14];
  }
  return e8;
}
function mergeDataFn(e8, t8) {
  return t8 ? e8 ? function() {
    return $r(isFunction(e8) ? e8.call(this, this) : e8, isFunction(t8) ? t8.call(this, this) : t8);
  } : t8 : e8;
}
function normalizeInject(e8) {
  if (Ur(e8)) {
    const t8 = {};
    for (let r3 = 0; r3 < e8.length; r3++) t8[e8[r3]] = e8[r3];
    return t8;
  }
  return e8;
}
function mergeAsArray(e8, t8) {
  return e8 ? [...new Set([].concat(e8, t8))] : t8;
}
function mergeObjectOptions(e8, t8) {
  return e8 ? $r(/* @__PURE__ */ Object.create(null), e8, t8) : t8;
}
function mergeEmitsOrPropsOptions(e8, t8) {
  return e8 ? Ur(e8) && Ur(t8) ? [.../* @__PURE__ */ new Set([...e8, ...t8])] : $r(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e8), normalizePropsOrEmits(null != t8 ? t8 : {})) : t8;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e8, t8) {
  return function(t9, r3 = null) {
    isFunction(t9) || (t9 = $r({}, t9)), null == r3 || isObject(r3) || (r3 = null);
    const s5 = createAppContext(), a13 = /* @__PURE__ */ new WeakSet(), c5 = [];
    let u9 = false;
    const d7 = s5.app = { _uid: _o++, _component: t9, _props: r3, _container: null, _context: s5, _instance: null, version: zo, get config() {
      return s5.config;
    }, set config(e9) {
    }, use: /* @__PURE__ */ __name((e9, ...t10) => (a13.has(e9) || (e9 && isFunction(e9.install) ? (a13.add(e9), e9.install(d7, ...t10)) : isFunction(e9) && (a13.add(e9), e9(d7, ...t10))), d7), "use"), mixin: /* @__PURE__ */ __name((e9) => (s5.mixins.includes(e9) || s5.mixins.push(e9), d7), "mixin"), component: /* @__PURE__ */ __name((e9, t10) => t10 ? (s5.components[e9] = t10, d7) : s5.components[e9], "component"), directive: /* @__PURE__ */ __name((e9, t10) => t10 ? (s5.directives[e9] = t10, d7) : s5.directives[e9], "directive"), mount(a14, c6, p6) {
      if (!u9) {
        const c7 = d7._ceVNode || createVNode(t9, r3);
        return c7.appContext = s5, true === p6 ? p6 = "svg" : false === p6 && (p6 = void 0), e8(c7, a14, p6), u9 = true, d7._container = a14, a14.__vue_app__ = d7, getComponentPublicInstance(c7.component);
      }
    }, onUnmount(e9) {
      c5.push(e9);
    }, unmount() {
      u9 && (callWithAsyncErrorHandling(c5, d7._instance, 16), e8(null, d7._container), delete d7._container.__vue_app__);
    }, provide: /* @__PURE__ */ __name((e9, t10) => (s5.provides[e9] = t10, d7), "provide"), runWithContext(e9) {
      const t10 = bo;
      bo = d7;
      try {
        return e9();
      } finally {
        bo = t10;
      }
    } };
    return d7;
  };
}
function useModel(e8, t8, r3 = Dr) {
  const s5 = getCurrentInstance(), a13 = Kr(t8), c5 = Jr(t8), u9 = getModelModifiers(e8, a13), d7 = (p6 = /* @__PURE__ */ __name((u10, d8) => {
    let p7, f6, g9 = Dr;
    return doWatch(() => {
      const t9 = e8[a13];
      hasChanged(p7, t9) && (p7 = t9, d8());
    }, null, { flush: "sync" }), { get: /* @__PURE__ */ __name(() => (u10(), r3.get ? r3.get(p7) : p7), "get"), set(e9) {
      const u11 = r3.set ? r3.set(e9) : e9;
      if (!(hasChanged(u11, p7) || g9 !== Dr && hasChanged(e9, g9))) return;
      const m8 = s5.vnode.props, _7 = !!(m8 && (t8 in m8 || a13 in m8 || c5 in m8) && (`onUpdate:${t8}` in m8 || `onUpdate:${a13}` in m8 || `onUpdate:${c5}` in m8));
      _7 || (p7 = e9, d8()), s5.emit(`update:${t8}`, u11), hasChanged(e9, g9) && (hasChanged(e9, u11) && !hasChanged(u11, f6) || _7 && g9 !== Dr && !hasChanged(u11, p7)) && d8(), g9 = e9, f6 = u11;
    } };
  }, "p"), new CustomRefImpl(p6));
  var p6;
  return d7[Symbol.iterator] = () => {
    let e9 = 0;
    return { next: /* @__PURE__ */ __name(() => e9 < 2 ? { value: e9++ ? u9 || Dr : d7, done: false } : { done: true }, "next") };
  }, d7;
}
function emit(e8, t8, ...r3) {
  if (e8.isUnmounted) return;
  const s5 = e8.vnode.props || Dr;
  let a13 = r3;
  const c5 = t8.startsWith("update:"), u9 = c5 && getModelModifiers(s5, t8.slice(7));
  let d7;
  u9 && (u9.trim && (a13 = r3.map((e9) => isString(e9) ? e9.trim() : e9)), u9.number && (a13 = a13.map(looseToNumber)));
  let p6 = s5[d7 = Qr(t8)] || s5[d7 = Qr(Kr(t8))];
  !p6 && c5 && (p6 = s5[d7 = Qr(Jr(t8))]), p6 && callWithAsyncErrorHandling(p6, e8, 6, a13);
  const f6 = s5[d7 + "Once"];
  if (f6) {
    if (e8.emitted) {
      if (e8.emitted[d7]) return;
    } else e8.emitted = {};
    e8.emitted[d7] = true, callWithAsyncErrorHandling(f6, e8, 6, a13);
  }
}
function normalizeEmitsOptions(e8, t8, r3 = false) {
  const s5 = r3 ? wo : t8.emitsCache, a13 = s5.get(e8);
  if (void 0 !== a13) return a13;
  const c5 = e8.emits;
  let u9 = {}, d7 = false;
  if (!isFunction(e8)) {
    const extendEmits = /* @__PURE__ */ __name((e9) => {
      const r4 = normalizeEmitsOptions(e9, t8, true);
      r4 && (d7 = true, $r(u9, r4));
    }, "extendEmits");
    !r3 && t8.mixins.length && t8.mixins.forEach(extendEmits), e8.extends && extendEmits(e8.extends), e8.mixins && e8.mixins.forEach(extendEmits);
  }
  return c5 || d7 ? (Ur(c5) ? c5.forEach((e9) => u9[e9] = null) : $r(u9, c5), isObject(e8) && s5.set(e8, u9), u9) : (isObject(e8) && s5.set(e8, null), null);
}
function isEmitListener(e8, t8) {
  return !(!e8 || !isOn(t8)) && (t8 = "Once" === (t8 = t8.slice(2)) ? t8 : t8.replace(/Once$/, ""), hasOwn(e8, t8[0].toLowerCase() + t8.slice(1)) || hasOwn(e8, Jr(t8)) || hasOwn(e8, t8));
}
function renderComponentRoot(e8) {
  const { type: t8, vnode: r3, proxy: s5, withProxy: a13, propsOptions: [c5], slots: u9, attrs: d7, emit: p6, render: f6, renderCache: g9, props: m8, data: _7, setupState: x7, ctx: k5, inheritAttrs: R2 } = e8, C3 = setCurrentRenderingInstance(e8);
  let S5, T3;
  try {
    if (4 & r3.shapeFlag) {
      const e9 = a13 || s5, t9 = e9;
      S5 = normalizeVNode(f6.call(t9, e9, g9, m8, x7, _7, k5)), T3 = d7;
    } else {
      const e9 = t8;
      0, S5 = normalizeVNode(e9.length > 1 ? e9(m8, { attrs: d7, slots: u9, emit: p6 }) : e9(m8, null)), T3 = t8.props ? d7 : getFunctionalFallthrough(d7);
    }
  } catch (t9) {
    jo.length = 0, handleError(t9, e8, 1), S5 = createVNode(Ao);
  }
  let E2 = S5;
  if (T3 && false !== R2) {
    const e9 = Object.keys(T3), { shapeFlag: t9 } = E2;
    e9.length && 7 & t9 && (c5 && e9.some(isModelListener) && (T3 = filterModelListeners(T3, c5)), E2 = cloneVNode(E2, T3, false, true));
  }
  if (r3.dirs && (E2 = cloneVNode(E2, null, false, true), E2.dirs = E2.dirs ? E2.dirs.concat(r3.dirs) : r3.dirs), r3.transition) {
    setTransitionHooks(isTeleport(E2.type) && getInnerChild$1(E2) || E2, r3.transition);
  }
  return S5 = E2, setCurrentRenderingInstance(C3), S5;
}
function filterSingleRoot(e8, t8 = true) {
  let r3;
  for (let t9 = 0; t9 < e8.length; t9++) {
    const s5 = e8[t9];
    if (!isVNode(s5)) return;
    if (s5.type !== Ao || "v-if" === s5.children) {
      if (r3) return;
      r3 = s5;
    }
  }
  return r3;
}
function hasPropsChanged(e8, t8, r3) {
  const s5 = Object.keys(t8);
  if (s5.length !== Object.keys(e8).length) return true;
  for (let a13 = 0; a13 < s5.length; a13++) {
    const c5 = s5[a13];
    if (!hasOwn(e8, c5) || hasPropValueChanged(t8, e8, c5) && !isEmitListener(r3, c5)) return true;
  }
  return false;
}
function hasPropValueChanged(e8, t8, r3) {
  const s5 = e8[r3], a13 = t8[r3];
  return "style" === r3 && isObject(s5) && isObject(a13) ? !looseEqual(s5, a13) : s5 !== a13;
}
function updateHOCHostEl({ vnode: e8, parent: t8, suspense: r3 }, s5) {
  for (; t8; ) {
    const r4 = t8.subTree;
    if (r4.suspense && r4.suspense.activeBranch === e8 && (r4.suspense.vnode.el = r4.el = s5, e8 = r4), r4 !== e8) break;
    (e8 = t8.vnode).el = s5, t8 = t8.parent;
  }
  r3 && r3.activeBranch === e8 && (r3.vnode.el = s5);
}
function setFullProps(e8, t8, r3, s5) {
  const [a13, c5] = e8.propsOptions;
  let u9, d7 = false;
  if (t8) for (let p6 in t8) {
    if (qr(p6)) continue;
    const f6 = t8[p6];
    let g9;
    a13 && hasOwn(a13, g9 = Kr(p6)) ? c5 && c5.includes(g9) ? (u9 || (u9 = {}))[g9] = f6 : r3[g9] = f6 : isEmitListener(e8.emitsOptions, p6) || p6 in s5 && f6 === s5[p6] || (s5[p6] = f6, d7 = true);
  }
  if (c5) {
    const t9 = toRaw(r3), s6 = u9 || Dr;
    for (let u10 = 0; u10 < c5.length; u10++) {
      const d8 = c5[u10];
      r3[d8] = resolvePropValue(a13, t9, d8, s6[d8], e8, !hasOwn(s6, d8));
    }
  }
  return d7;
}
function resolvePropValue(e8, t8, r3, s5, a13, c5) {
  const u9 = e8[r3];
  if (null != u9) {
    const e9 = hasOwn(u9, "default");
    if (e9 && void 0 === s5) {
      const e10 = u9.default;
      if (u9.type !== Function && !u9.skipFactory && isFunction(e10)) {
        const { propsDefaults: c6 } = a13;
        if (r3 in c6) s5 = c6[r3];
        else {
          const u10 = setCurrentInstance(a13);
          s5 = c6[r3] = e10.call(null, t8), u10();
        }
      } else s5 = e10;
      a13.ce && a13.ce._setProp(r3, s5);
    }
    u9[0] && (c5 && !e9 ? s5 = false : !u9[1] || "" !== s5 && s5 !== Jr(r3) || (s5 = true));
  }
  return s5;
}
function normalizePropsOptions(e8, t8, r3 = false) {
  const s5 = r3 ? ko : t8.propsCache, a13 = s5.get(e8);
  if (a13) return a13;
  const c5 = e8.props, u9 = {}, d7 = [];
  let p6 = false;
  if (!isFunction(e8)) {
    const extendProps = /* @__PURE__ */ __name((e9) => {
      p6 = true;
      const [r4, s6] = normalizePropsOptions(e9, t8, true);
      $r(u9, r4), s6 && d7.push(...s6);
    }, "extendProps");
    !r3 && t8.mixins.length && t8.mixins.forEach(extendProps), e8.extends && extendProps(e8.extends), e8.mixins && e8.mixins.forEach(extendProps);
  }
  if (!c5 && !p6) return isObject(e8) && s5.set(e8, zr), zr;
  if (Ur(c5)) for (let e9 = 0; e9 < c5.length; e9++) {
    const t9 = Kr(c5[e9]);
    validatePropName(t9) && (u9[t9] = Dr);
  }
  else if (c5) for (const e9 in c5) {
    const t9 = Kr(e9);
    if (validatePropName(t9)) {
      const r4 = c5[e9], s6 = u9[t9] = Ur(r4) || isFunction(r4) ? { type: r4 } : $r({}, r4), a14 = s6.type;
      let p7 = false, f7 = true;
      if (Ur(a14)) for (let e10 = 0; e10 < a14.length; ++e10) {
        const t10 = a14[e10], r5 = isFunction(t10) && t10.name;
        if ("Boolean" === r5) {
          p7 = true;
          break;
        }
        "String" === r5 && (f7 = false);
      }
      else p7 = isFunction(a14) && "Boolean" === a14.name;
      s6[0] = p7, s6[1] = f7, (p7 || hasOwn(s6, "default")) && d7.push(t9);
    }
  }
  const f6 = [u9, d7];
  return isObject(e8) && s5.set(e8, f6), f6;
}
function validatePropName(e8) {
  return "$" !== e8[0] && !qr(e8);
}
function createRenderer2(e8) {
  return (function(e9) {
    getGlobalThis().__VUE__ = true;
    const { insert: t8, remove: r3, patchProp: s5, createElement: a13, createText: c5, createComment: u9, setText: d7, setElementText: p6, parentNode: f6, nextSibling: g9, setScopeId: m8 = NOOP, insertStaticContent: _7 } = e9, patch = /* @__PURE__ */ __name((e10, t9, r4, s6 = null, a14 = null, c6 = null, u10 = void 0, d8 = null, p7 = !!t9.dynamicChildren) => {
      if (e10 === t9) return;
      e10 && !isSameVNodeType(e10, t9) && (s6 = getNextHostNode(e10), unmount(e10, a14, c6, true), e10 = null), -2 === t9.patchFlag && (p7 = false, t9.dynamicChildren = null), t9.dynamicChildren && e10 && e10.dynamicChildren && e10.dynamicChildren.hasOnce && (t9.dynamicChildren === zr && (t9.dynamicChildren = []), t9.dynamicChildren.hasOnce = true);
      const { type: f7, ref: g10, shapeFlag: m9 } = t9;
      switch (f7) {
        case To:
          processText(e10, t9, r4, s6);
          break;
        case Ao:
          processCommentNode(e10, t9, r4, s6);
          break;
        case Eo:
          null == e10 && mountStaticNode(t9, r4, s6, u10);
          break;
        case So:
          processFragment(e10, t9, r4, s6, a14, c6, u10, d8, p7);
          break;
        default:
          1 & m9 ? processElement(e10, t9, r4, s6, a14, c6, u10, d8, p7) : 6 & m9 ? processComponent(e10, t9, r4, s6, a14, c6, u10, d8, p7) : (64 & m9 || 128 & m9) && f7.process(e10, t9, r4, s6, a14, c6, u10, d8, p7, x7);
      }
      null != g10 && a14 ? setRef(g10, e10 && e10.ref, c6, t9 || e10, !t9) : null == g10 && e10 && null != e10.ref && setRef(e10.ref, null, c6, e10, true);
    }, "patch"), processText = /* @__PURE__ */ __name((e10, r4, s6, a14) => {
      if (null == e10) t8(r4.el = c5(r4.children), s6, a14);
      else {
        const t9 = r4.el = e10.el;
        r4.children !== e10.children && d7(t9, r4.children);
      }
    }, "processText"), processCommentNode = /* @__PURE__ */ __name((e10, r4, s6, a14) => {
      null == e10 ? t8(r4.el = u9(r4.children || ""), s6, a14) : r4.el = e10.el;
    }, "processCommentNode"), mountStaticNode = /* @__PURE__ */ __name((e10, t9, r4, s6) => {
      [e10.el, e10.anchor] = _7(e10.children, t9, r4, s6, e10.el, e10.anchor);
    }, "mountStaticNode"), moveStaticNode = /* @__PURE__ */ __name(({ el: e10, anchor: r4 }, s6, a14) => {
      let c6;
      for (; e10 && e10 !== r4; ) c6 = g9(e10), t8(e10, s6, a14), e10 = c6;
      t8(r4, s6, a14);
    }, "moveStaticNode"), removeStaticNode = /* @__PURE__ */ __name(({ el: e10, anchor: t9 }) => {
      let s6;
      for (; e10 && e10 !== t9; ) s6 = g9(e10), r3(e10), e10 = s6;
      r3(t9);
    }, "removeStaticNode"), processElement = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10, d8, p7) => {
      if ("svg" === t9.type ? u10 = "svg" : "math" === t9.type && (u10 = "mathml"), null == e10) mountElement(t9, r4, s6, a14, c6, u10, d8, p7);
      else {
        const r5 = e10.el && e10.el._isVueCE ? e10.el : null;
        try {
          r5 && r5._beginPatch(), patchElement(e10, t9, a14, c6, u10, d8, p7);
        } finally {
          r5 && r5._endPatch();
        }
      }
    }, "processElement"), mountElement = /* @__PURE__ */ __name((e10, r4, c6, u10, d8, f7, g10, m9) => {
      let _8, x8;
      const { props: k6, shapeFlag: R2, transition: C3, dirs: S5 } = e10;
      if (_8 = e10.el = a13(e10.type, f7, k6 && k6.is, k6), 8 & R2 ? p6(_8, e10.children) : 16 & R2 && mountChildren(e10.children, _8, null, u10, d8, resolveChildrenNamespace(e10, f7), g10, m9), S5 && invokeDirectiveHook(e10, null, u10, "created"), setScopeId(_8, e10, e10.scopeId, g10, u10), k6) {
        for (const e11 in k6) "value" === e11 || qr(e11) || s5(_8, e11, null, k6[e11], f7, u10);
        "value" in k6 && s5(_8, "value", null, k6.value, f7), (x8 = k6.onVnodeBeforeMount) && invokeVNodeHook(x8, u10, e10);
      }
      S5 && invokeDirectiveHook(e10, null, u10, "beforeMount");
      const T3 = (function(e11, t9) {
        return (!e11 || e11 && !e11.pendingBranch) && t9 && !t9.persisted;
      })(d8, C3);
      T3 && C3.beforeEnter(_8), t8(_8, r4, c6), ((x8 = k6 && k6.onVnodeMounted) || T3 || S5) && queuePostRenderEffect(() => {
        try {
          x8 && invokeVNodeHook(x8, u10, e10), T3 && C3.enter(_8), S5 && invokeDirectiveHook(e10, null, u10, "mounted");
        } finally {
        }
      }, d8);
    }, "mountElement"), setScopeId = /* @__PURE__ */ __name((e10, t9, r4, s6, a14) => {
      if (r4 && m8(e10, r4), s6) for (let t10 = 0; t10 < s6.length; t10++) m8(e10, s6[t10]);
      if (a14) {
        let r5 = a14.subTree;
        if (t9 === r5 || isSuspense(r5.type) && (r5.ssContent === t9 || r5.ssFallback === t9)) {
          const t10 = a14.vnode;
          setScopeId(e10, t10, t10.scopeId, t10.slotScopeIds, a14.parent);
        }
      }
    }, "setScopeId"), mountChildren = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10, d8, p7 = 0) => {
      for (let f7 = p7; f7 < e10.length; f7++) {
        const p8 = e10[f7] = d8 ? cloneIfMounted(e10[f7]) : normalizeVNode(e10[f7]);
        patch(null, p8, t9, r4, s6, a14, c6, u10, d8);
      }
    }, "mountChildren"), patchElement = /* @__PURE__ */ __name((e10, t9, r4, a14, c6, u10, d8) => {
      const f7 = t9.el = e10.el;
      let { patchFlag: g10, dynamicChildren: m9, dirs: _8 } = t9;
      g10 |= 16 & e10.patchFlag;
      const x8 = e10.props || Dr, k6 = t9.props || Dr;
      let R2;
      if (r4 && toggleRecurse(r4, false), (R2 = k6.onVnodeBeforeUpdate) && invokeVNodeHook(R2, r4, t9, e10), _8 && invokeDirectiveHook(t9, e10, r4, "beforeUpdate"), r4 && toggleRecurse(r4, true), !m9 || e10.dynamicChildren && e10.dynamicChildren.length === m9.length || (g10 = 0, d8 = false, m9 = null), (x8.innerHTML && null == k6.innerHTML || x8.textContent && null == k6.textContent) && p6(f7, ""), m9 ? patchBlockChildren(e10.dynamicChildren, m9, f7, r4, a14, resolveChildrenNamespace(t9, c6), u10) : d8 || patchChildren(e10, t9, f7, null, r4, a14, resolveChildrenNamespace(t9, c6), u10, false), g10 > 0) {
        if (16 & g10) patchProps(f7, x8, k6, r4, c6);
        else if (2 & g10 && x8.class !== k6.class && s5(f7, "class", null, k6.class, c6), 4 & g10 && s5(f7, "style", x8.style, k6.style, c6), 8 & g10) {
          const e11 = t9.dynamicProps;
          for (let t10 = 0; t10 < e11.length; t10++) {
            const a15 = e11[t10], u11 = x8[a15], d9 = k6[a15];
            d9 === u11 && "value" !== a15 || s5(f7, a15, u11, d9, c6, r4);
          }
        }
        1 & g10 && e10.children !== t9.children && p6(f7, t9.children);
      } else d8 || null != m9 || patchProps(f7, x8, k6, r4, c6);
      ((R2 = k6.onVnodeUpdated) || _8) && queuePostRenderEffect(() => {
        R2 && invokeVNodeHook(R2, r4, t9, e10), _8 && invokeDirectiveHook(t9, e10, r4, "updated");
      }, a14);
    }, "patchElement"), patchBlockChildren = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10) => {
      for (let d8 = 0; d8 < t9.length; d8++) {
        const p7 = e10[d8], g10 = t9[d8], m9 = p7.el || resolveAsyncComponentPlaceholder(p7), _8 = m9 && (p7.type === So || !isSameVNodeType(p7, g10) || 198 & p7.shapeFlag) ? f6(m9) : r4;
        patch(p7, g10, _8, null, s6, a14, c6, u10, true);
      }
    }, "patchBlockChildren"), patchProps = /* @__PURE__ */ __name((e10, t9, r4, a14, c6) => {
      if (t9 !== r4) {
        if (t9 !== Dr) for (const u10 in t9) qr(u10) || u10 in r4 || s5(e10, u10, t9[u10], null, c6, a14);
        for (const u10 in r4) {
          if (qr(u10)) continue;
          const d8 = r4[u10], p7 = t9[u10];
          d8 !== p7 && "value" !== u10 && s5(e10, u10, p7, d8, c6, a14);
        }
        "value" in r4 && s5(e10, "value", t9.value, r4.value, c6);
      }
    }, "patchProps"), processFragment = /* @__PURE__ */ __name((e10, r4, s6, a14, u10, d8, p7, f7, g10) => {
      const m9 = r4.el = e10 ? e10.el : c5(""), _8 = r4.anchor = e10 ? e10.anchor : c5("");
      let { patchFlag: x8, dynamicChildren: k6, slotScopeIds: R2 } = r4;
      R2 && (f7 = f7 ? f7.concat(R2) : R2), null == e10 ? (t8(m9, s6, a14), t8(_8, s6, a14), mountChildren(r4.children || [], s6, _8, u10, d8, p7, f7, g10)) : x8 > 0 && 64 & x8 && k6 && e10.dynamicChildren && e10.dynamicChildren.length === k6.length ? (patchBlockChildren(e10.dynamicChildren, k6, s6, u10, d8, p7, f7), (null != r4.key || u10 && r4 === u10.subTree) && traverseStaticChildren(e10, r4, true)) : patchChildren(e10, r4, s6, _8, u10, d8, p7, f7, g10);
    }, "processFragment"), processComponent = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10, d8, p7) => {
      t9.slotScopeIds = d8, null == e10 ? 512 & t9.shapeFlag ? a14.ctx.activate(t9, r4, s6, u10, p7) : mountComponent(t9, r4, s6, a14, c6, u10, p7) : updateComponent(e10, t9, p7);
    }, "processComponent"), mountComponent = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10) => {
      const d8 = e10.component = createComponentInstance(e10, s6, a14);
      if (isKeepAlive(e10) && (d8.ctx.renderer = x7), setupComponent(d8, false, u10), d8.asyncDep) {
        if (a14 && a14.registerDep(d8, setupRenderEffect, u10, c6), !e10.el) {
          const s7 = d8.subTree = createVNode(Ao);
          processCommentNode(null, s7, t9, r4), e10.placeholder = s7.el;
        }
      } else setupRenderEffect(d8, e10, t9, r4, a14, c6, u10);
    }, "mountComponent"), updateComponent = /* @__PURE__ */ __name((e10, t9, r4) => {
      const s6 = t9.component = e10.component;
      if ((function(e11, t10, r5) {
        const { props: s7, children: a14, component: c6 } = e11, { props: u10, children: d8, patchFlag: p7 } = t10, f7 = c6.emitsOptions;
        if (t10.dirs || t10.transition) return true;
        if (!(r5 && p7 >= 0)) return !(!a14 && !d8 || d8 && d8.$stable) || s7 !== u10 && (s7 ? !u10 || hasPropsChanged(s7, u10, f7) : !!u10);
        if (1024 & p7) return true;
        if (16 & p7) return s7 ? hasPropsChanged(s7, u10, f7) : !!u10;
        if (8 & p7) {
          const e12 = t10.dynamicProps;
          for (let t11 = 0; t11 < e12.length; t11++) {
            const r6 = e12[t11];
            if (hasPropValueChanged(u10, s7, r6) && !isEmitListener(f7, r6)) return true;
          }
        }
        return false;
      })(e10, t9, r4)) {
        if (s6.asyncDep && !s6.asyncResolved) return t9.el = e10.el, t9.placeholder = e10.placeholder, void updateComponentPreRender(s6, t9, r4);
        s6.next = t9, s6.update();
      } else t9.el = e10.el, t9.placeholder = e10.placeholder, s6.vnode = t9;
    }, "updateComponent"), setupRenderEffect = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10) => {
      const componentUpdateFn = /* @__PURE__ */ __name(() => {
        if (e10.isMounted) {
          let { next: t10, bu: r5, u: s7, parent: d9, vnode: g11 } = e10;
          {
            const r6 = locateNonHydratedAsyncRoot(e10);
            if (r6) return t10 && (t10.el = g11.el, updateComponentPreRender(e10, t10, u10)), void r6.asyncDep.then(() => {
              queuePostRenderEffect(() => {
                e10.isUnmounted || p7();
              }, a14);
            });
          }
          let m9, _8 = t10;
          toggleRecurse(e10, false), t10 ? (t10.el = g11.el, updateComponentPreRender(e10, t10, u10)) : t10 = g11, r5 && invokeArrayFns(r5), (m9 = t10.props && t10.props.onVnodeBeforeUpdate) && invokeVNodeHook(m9, d9, t10, g11), toggleRecurse(e10, true);
          const x8 = renderComponentRoot(e10), k6 = e10.subTree;
          e10.subTree = x8, patch(k6, x8, f6(k6.el), getNextHostNode(k6), e10, a14, c6), t10.el = x8.el, null === _8 && updateHOCHostEl(e10, x8.el), s7 && queuePostRenderEffect(s7, a14), (m9 = t10.props && t10.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(m9, d9, t10, g11), a14);
        } else {
          let u11;
          const { el: d9, props: p8 } = t9, { bm: f7, m: g11, parent: m9, root: _8, type: x8 } = e10, k6 = isAsyncWrapper(t9);
          toggleRecurse(e10, false), f7 && invokeArrayFns(f7), !k6 && (u11 = p8 && p8.onVnodeBeforeMount) && invokeVNodeHook(u11, m9, t9), toggleRecurse(e10, true);
          {
            _8.ce && _8.ce._hasShadowRoot() && _8.ce._injectChildStyle(x8, e10.parent ? e10.parent.type : void 0);
            const u12 = e10.subTree = renderComponentRoot(e10);
            patch(null, u12, r4, s6, e10, a14, c6), t9.el = u12.el;
          }
          if (g11 && queuePostRenderEffect(g11, a14), !k6 && (u11 = p8 && p8.onVnodeMounted)) {
            const e11 = t9;
            queuePostRenderEffect(() => invokeVNodeHook(u11, m9, e11), a14);
          }
          (256 & t9.shapeFlag || m9 && isAsyncWrapper(m9.vnode) && 256 & m9.vnode.shapeFlag) && e10.a && queuePostRenderEffect(e10.a, a14), e10.isMounted = true, t9 = r4 = s6 = null;
        }
      }, "componentUpdateFn");
      e10.scope.on();
      const d8 = e10.effect = new ReactiveEffect(componentUpdateFn);
      e10.scope.off();
      const p7 = e10.update = d8.run.bind(d8), g10 = e10.job = d8.runIfDirty.bind(d8);
      g10.i = e10, g10.id = e10.uid, d8.scheduler = () => queueJob(g10), toggleRecurse(e10, true), p7();
    }, "setupRenderEffect"), updateComponentPreRender = /* @__PURE__ */ __name((e10, t9, r4) => {
      t9.component = e10;
      const s6 = e10.vnode.props;
      e10.vnode = t9, e10.next = null, (function(e11, t10, r5, s7) {
        const { props: a14, attrs: c6, vnode: { patchFlag: u10 } } = e11, d8 = toRaw(a14), [p7] = e11.propsOptions;
        let f7 = false;
        if (!(s7 || u10 > 0) || 16 & u10) {
          let s8;
          setFullProps(e11, t10, a14, c6) && (f7 = true);
          for (const c7 in d8) t10 && (hasOwn(t10, c7) || (s8 = Jr(c7)) !== c7 && hasOwn(t10, s8)) || (p7 ? !r5 || void 0 === r5[c7] && void 0 === r5[s8] || (a14[c7] = resolvePropValue(p7, d8, c7, void 0, e11, true)) : delete a14[c7]);
          if (c6 !== d8) for (const e12 in c6) t10 && hasOwn(t10, e12) || (delete c6[e12], f7 = true);
        } else if (8 & u10) {
          const r6 = e11.vnode.dynamicProps;
          for (let s8 = 0; s8 < r6.length; s8++) {
            let u11 = r6[s8];
            if (isEmitListener(e11.emitsOptions, u11)) continue;
            const g10 = t10[u11];
            if (p7) if (hasOwn(c6, u11)) g10 !== c6[u11] && (c6[u11] = g10, f7 = true);
            else {
              const t11 = Kr(u11);
              a14[t11] = resolvePropValue(p7, d8, t11, g10, e11, false);
            }
            else g10 !== c6[u11] && (c6[u11] = g10, f7 = true);
          }
        }
        f7 && trigger(e11.attrs, "set", "");
      })(e10, t9.props, s6, r4), ((e11, t10, r5) => {
        const { vnode: s7, slots: a14 } = e11;
        let c6 = true, u10 = Dr;
        if (32 & s7.shapeFlag) {
          const e12 = t10._;
          e12 ? r5 && 1 === e12 ? c6 = false : assignSlots(a14, t10, r5) : (c6 = !t10.$stable, normalizeObjectSlots(t10, a14)), u10 = t10;
        } else t10 && (normalizeVNodeSlots(e11, t10), u10 = { default: 1 });
        if (c6) for (const e12 in a14) isInternalKey(e12) || null != u10[e12] || delete a14[e12];
      })(e10, t9.children, r4), pauseTracking(), flushPreFlushCbs(e10), resetTracking();
    }, "updateComponentPreRender"), patchChildren = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10, d8, f7 = false) => {
      const g10 = e10 && e10.children, m9 = e10 ? e10.shapeFlag : 0, _8 = t9.children, { patchFlag: x8, shapeFlag: k6 } = t9;
      if (x8 > 0) {
        if (128 & x8) return void patchKeyedChildren(g10, _8, r4, s6, a14, c6, u10, d8, f7);
        if (256 & x8) return void patchUnkeyedChildren(g10, _8, r4, s6, a14, c6, u10, d8, f7);
      }
      8 & k6 ? (16 & m9 && unmountChildren(g10, a14, c6), _8 !== g10 && p6(r4, _8)) : 16 & m9 ? 16 & k6 ? patchKeyedChildren(g10, _8, r4, s6, a14, c6, u10, d8, f7) : unmountChildren(g10, a14, c6, true) : (8 & m9 && p6(r4, ""), 16 & k6 && mountChildren(_8, r4, s6, a14, c6, u10, d8, f7));
    }, "patchChildren"), patchUnkeyedChildren = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10, d8, p7) => {
      t9 = t9 || zr;
      const f7 = (e10 = e10 || zr).length, g10 = t9.length, m9 = Math.min(f7, g10);
      let _8;
      for (_8 = 0; _8 < m9; _8++) {
        const s7 = t9[_8] = p7 ? cloneIfMounted(t9[_8]) : normalizeVNode(t9[_8]);
        patch(e10[_8], s7, r4, null, a14, c6, u10, d8, p7);
      }
      f7 > g10 ? unmountChildren(e10, a14, c6, true, false, m9) : mountChildren(t9, r4, s6, a14, c6, u10, d8, p7, m9);
    }, "patchUnkeyedChildren"), patchKeyedChildren = /* @__PURE__ */ __name((e10, t9, r4, s6, a14, c6, u10, d8, p7) => {
      let f7 = 0;
      const g10 = t9.length;
      let m9 = e10.length - 1, _8 = g10 - 1;
      for (; f7 <= m9 && f7 <= _8; ) {
        const s7 = e10[f7], g11 = t9[f7] = p7 ? cloneIfMounted(t9[f7]) : normalizeVNode(t9[f7]);
        if (!isSameVNodeType(s7, g11)) break;
        patch(s7, g11, r4, null, a14, c6, u10, d8, p7), f7++;
      }
      for (; f7 <= m9 && f7 <= _8; ) {
        const s7 = e10[m9], f8 = t9[_8] = p7 ? cloneIfMounted(t9[_8]) : normalizeVNode(t9[_8]);
        if (!isSameVNodeType(s7, f8)) break;
        patch(s7, f8, r4, null, a14, c6, u10, d8, p7), m9--, _8--;
      }
      if (f7 > m9) {
        if (f7 <= _8) {
          const e11 = _8 + 1, m10 = e11 < g10 ? t9[e11].el : s6;
          for (; f7 <= _8; ) patch(null, t9[f7] = p7 ? cloneIfMounted(t9[f7]) : normalizeVNode(t9[f7]), r4, m10, a14, c6, u10, d8, p7), f7++;
        }
      } else if (f7 > _8) for (; f7 <= m9; ) unmount(e10[f7], a14, c6, true), f7++;
      else {
        const x8 = f7, k6 = f7, R2 = /* @__PURE__ */ new Map();
        for (f7 = k6; f7 <= _8; f7++) {
          const e11 = t9[f7] = p7 ? cloneIfMounted(t9[f7]) : normalizeVNode(t9[f7]);
          null != e11.key && R2.set(e11.key, f7);
        }
        let C3, S5 = 0;
        const T3 = _8 - k6 + 1;
        let E2 = false, j7 = 0;
        const P3 = new Array(T3);
        for (f7 = 0; f7 < T3; f7++) P3[f7] = 0;
        for (f7 = x8; f7 <= m9; f7++) {
          const s7 = e10[f7];
          if (S5 >= T3) {
            unmount(s7, a14, c6, true);
            continue;
          }
          let g11;
          if (null != s7.key) g11 = R2.get(s7.key);
          else for (C3 = k6; C3 <= _8; C3++) if (0 === P3[C3 - k6] && isSameVNodeType(s7, t9[C3])) {
            g11 = C3;
            break;
          }
          void 0 === g11 ? unmount(s7, a14, c6, true) : (P3[g11 - k6] = f7 + 1, g11 >= j7 ? j7 = g11 : E2 = true, patch(s7, t9[g11], r4, null, a14, c6, u10, d8, p7), S5++);
        }
        const H2 = E2 ? (function(e11) {
          const t10 = e11.slice(), r5 = [0];
          let s7, a15, c7, u11, d9;
          const p8 = e11.length;
          for (s7 = 0; s7 < p8; s7++) {
            const p9 = e11[s7];
            if (0 !== p9) {
              if (a15 = r5[r5.length - 1], e11[a15] < p9) {
                t10[s7] = a15, r5.push(s7);
                continue;
              }
              for (c7 = 0, u11 = r5.length - 1; c7 < u11; ) d9 = c7 + u11 >> 1, e11[r5[d9]] < p9 ? c7 = d9 + 1 : u11 = d9;
              p9 < e11[r5[c7]] && (c7 > 0 && (t10[s7] = r5[c7 - 1]), r5[c7] = s7);
            }
          }
          c7 = r5.length, u11 = r5[c7 - 1];
          for (; c7-- > 0; ) r5[c7] = u11, u11 = t10[u11];
          return r5;
        })(P3) : zr;
        for (C3 = H2.length - 1, f7 = T3 - 1; f7 >= 0; f7--) {
          const e11 = k6 + f7, m10 = t9[e11], _9 = t9[e11 + 1], x9 = e11 + 1 < g10 ? _9.el || resolveAsyncComponentPlaceholder(_9) : s6;
          0 === P3[f7] ? patch(null, m10, r4, x9, a14, c6, u10, d8, p7) : E2 && (C3 < 0 || f7 !== H2[C3] ? move(m10, r4, x9, 2) : C3--);
        }
      }
    }, "patchKeyedChildren"), move = /* @__PURE__ */ __name((e10, s6, a14, c6, u10 = null) => {
      const { el: d8, type: p7, transition: f7, children: g10, shapeFlag: m9 } = e10;
      if (6 & m9) return void move(e10.component.subTree, s6, a14, c6);
      if (128 & m9) return void e10.suspense.move(s6, a14, c6);
      if (64 & m9) return void p7.move(e10, s6, a14, x7);
      if (p7 === So) {
        t8(d8, s6, a14);
        for (let e11 = 0; e11 < g10.length; e11++) move(g10[e11], s6, a14, c6);
        return void t8(e10.anchor, s6, a14);
      }
      if (p7 === Eo) return void moveStaticNode(e10, s6, a14);
      if (2 !== c6 && 1 & m9 && f7) if (0 === c6) f7.persisted && !d8[to] ? t8(d8, s6, a14) : (f7.beforeEnter(d8), t8(d8, s6, a14), queuePostRenderEffect(() => f7.enter(d8), u10));
      else {
        const { leave: c7, delayLeave: u11, afterLeave: p8 } = f7, remove22 = /* @__PURE__ */ __name(() => {
          e10.ctx.isUnmounted ? r3(d8) : t8(d8, s6, a14);
        }, "remove2"), performLeave = /* @__PURE__ */ __name(() => {
          const e11 = d8._isLeaving || !!d8[to];
          d8._isLeaving && d8[to](true), f7.persisted && !e11 ? remove22() : c7(d8, () => {
            remove22(), p8 && p8();
          });
        }, "performLeave");
        u11 ? u11(d8, remove22, performLeave) : performLeave();
      }
      else t8(d8, s6, a14);
    }, "move"), unmount = /* @__PURE__ */ __name((e10, t9, r4, s6 = false, a14 = false) => {
      const { type: c6, props: u10, ref: d8, children: p7, dynamicChildren: f7, shapeFlag: g10, patchFlag: m9, dirs: _8, cacheIndex: k6, memo: R2 } = e10;
      if ((-2 === m9 || f7 && f7.hasOnce) && (a14 = false), null != d8 && (pauseTracking(), setRef(d8, null, r4, e10, true), resetTracking()), null == k6 || e10.ctx && e10.ctx !== t9 || (t9.renderCache[k6] = void 0), 256 & g10) return void t9.ctx.deactivate(e10);
      const C3 = 1 & g10 && _8, S5 = !isAsyncWrapper(e10);
      let T3;
      if (S5 && (T3 = u10 && u10.onVnodeBeforeUnmount) && invokeVNodeHook(T3, t9, e10), 6 & g10) unmountComponent(e10.component, r4, s6);
      else {
        if (128 & g10) return void e10.suspense.unmount(r4, s6);
        C3 && invokeDirectiveHook(e10, null, t9, "beforeUnmount"), 64 & g10 ? e10.type.remove(e10, t9, r4, x7, s6) : f7 && !f7.hasOnce && (c6 !== So || m9 > 0 && 64 & m9) ? unmountChildren(f7, t9, r4, false, true) : (c6 === So && 384 & m9 || !a14 && 16 & g10) && unmountChildren(p7, t9, r4), s6 && remove2(e10);
      }
      const E2 = null != R2 && null == k6;
      (S5 && (T3 = u10 && u10.onVnodeUnmounted) || C3 || E2) && queuePostRenderEffect(() => {
        T3 && invokeVNodeHook(T3, t9, e10), C3 && invokeDirectiveHook(e10, null, t9, "unmounted"), E2 && (e10.el = null);
      }, r4);
    }, "unmount"), remove2 = /* @__PURE__ */ __name((e10) => {
      const { type: t9, el: s6, anchor: a14, transition: c6 } = e10, u10 = t9 === So;
      if (u10 && !c6) return void removeFragment(s6, a14);
      if (t9 === Eo) return removeStaticNode(e10), void (c6 && !c6.persisted && c6.afterLeave && c6.afterLeave());
      const d8 = u10 ? getTransitionRoot(e10) : e10, performRemove = /* @__PURE__ */ __name(() => {
        u10 ? f6(s6) && removeFragment(s6, a14) : r3(s6), c6 && !c6.persisted && c6.afterLeave && c6.afterLeave();
      }, "performRemove");
      if (d8 && 1 & d8.shapeFlag && c6 && !c6.persisted) {
        const { leave: e11, delayLeave: t10 } = c6, r4 = d8.el, performLeave = /* @__PURE__ */ __name(() => e11(r4, performRemove), "performLeave");
        t10 ? t10(r4, performRemove, performLeave) : performLeave();
      } else performRemove();
    }, "remove"), removeFragment = /* @__PURE__ */ __name((e10, t9) => {
      let s6;
      for (; e10 !== t9; ) s6 = g9(e10), r3(e10), e10 = s6;
      r3(t9);
    }, "removeFragment"), unmountComponent = /* @__PURE__ */ __name((e10, t9, r4) => {
      const { bum: s6, scope: a14, job: c6, subTree: u10, um: d8, m: p7, a: f7 } = e10;
      invalidateMount(p7), invalidateMount(f7), s6 && invokeArrayFns(s6), a14.stop(), c6 ? (c6.flags |= 8, unmount(u10, e10, t9, r4)) : e10.vnode.el && u10 && (u10.transition = e10.vnode.transition, unmount(u10, e10, t9, r4)), d8 && queuePostRenderEffect(d8, t9), queuePostRenderEffect(() => {
        e10.isUnmounted = true;
      }, t9);
    }, "unmountComponent"), unmountChildren = /* @__PURE__ */ __name((e10, t9, r4, s6 = false, a14 = false, c6 = 0) => {
      for (let u10 = c6; u10 < e10.length; u10++) unmount(e10[u10], t9, r4, s6, a14);
    }, "unmountChildren"), getNextHostNode = /* @__PURE__ */ __name((e10) => {
      if (6 & e10.shapeFlag) return getNextHostNode(e10.component.subTree);
      if (128 & e10.shapeFlag) return e10.suspense.next();
      const t9 = g9(e10.anchor || e10.el), r4 = t9 && t9[eo];
      return r4 ? g9(r4) : t9;
    }, "getNextHostNode"), render = /* @__PURE__ */ __name((e10, t9, r4) => {
      !(function(e11, t10) {
        if (Gs) return void e11();
        const r5 = void 0 === t10 ? void 0 : new Set(qs);
        e11(), Gs = true;
        try {
          flushPreFlushCbs(void 0, t10), flushPostFlushCbs(0, r5, t10);
        } finally {
          Gs = false;
        }
      })(() => {
        null == e10 ? t9._vnode && unmount(t9._vnode, null, null, true) : patch(t9._vnode || null, e10, t9, null, null, null, r4), t9._vnode = e10;
      }, e10 && t9._vnode ? void 0 : e10 && e10.component ? e10.component.uid : Mo);
    }, "render"), x7 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e9 };
    let k5;
    return { render, hydrate: k5, createApp: createAppAPI(render) };
  })(e8);
}
function resolveChildrenNamespace({ type: e8, props: t8 }, r3) {
  return "svg" === r3 && "foreignObject" === e8 || "mathml" === r3 && "annotation-xml" === e8 && t8 && t8.encoding && t8.encoding.includes("html") ? void 0 : r3;
}
function toggleRecurse({ effect: e8, job: t8 }, r3) {
  r3 ? (e8.flags |= 32, t8.flags |= 4) : (e8.flags &= -33, t8.flags &= -5);
}
function traverseStaticChildren(e8, t8, r3 = false) {
  const s5 = e8.children, a13 = t8.children;
  if (Ur(s5) && Ur(a13)) for (let e9 = 0; e9 < s5.length; e9++) {
    const t9 = s5[e9];
    let c5 = a13[e9];
    1 & c5.shapeFlag && !c5.dynamicChildren && ((c5.patchFlag <= 0 || 32 === c5.patchFlag) && (c5 = a13[e9] = cloneIfMounted(a13[e9]), c5.el = t9.el), r3 || -2 === c5.patchFlag || traverseStaticChildren(t9, c5)), c5.type === To && (-1 === c5.patchFlag && (c5 = a13[e9] = cloneIfMounted(c5)), c5.el = t9.el), c5.type !== Ao || c5.el || (c5.el = t9.el);
  }
}
function locateNonHydratedAsyncRoot(e8) {
  const t8 = e8.subTree.component;
  if (t8) return t8.asyncDep && !t8.asyncResolved ? t8 : locateNonHydratedAsyncRoot(t8);
}
function invalidateMount(e8) {
  if (e8) for (let t8 = 0; t8 < e8.length; t8++) e8[t8].flags |= 8;
}
function resolveAsyncComponentPlaceholder(e8) {
  if (e8.placeholder) return e8.placeholder;
  const t8 = e8.component;
  return t8 ? resolveAsyncComponentPlaceholder(t8.subTree) : null;
}
function triggerEvent(e8, t8) {
  const r3 = e8.props && e8.props[t8];
  isFunction(r3) && r3();
}
function createSuspenseBoundary(e8, t8, r3, s5, a13, c5, u9, d7, p6, f6, g9 = false) {
  const { p: m8, m: _7, um: x7, n: k5, o: { parentNode: R2, remove: C3 } } = f6;
  let S5;
  const T3 = (function(e9) {
    const t9 = e9.props && e9.props.suspensible;
    return null != t9 && false !== t9;
  })(e8);
  T3 && t8 && t8.pendingBranch && (S5 = t8.pendingId, t8.deps++);
  const E2 = e8.props ? ((e9) => {
    const t9 = isString(e9) ? Number(e9) : NaN;
    return isNaN(t9) ? e9 : t9;
  })(e8.props.timeout) : void 0, j7 = c5, P3 = { vnode: e8, parent: t8, parentComponent: r3, namespace: u9, container: s5, hiddenContainer: a13, deps: 0, pendingId: Ro++, timeout: "number" == typeof E2 ? E2 : -1, activeBranch: null, isFallbackMountPending: false, pendingBranch: null, isInFallback: !g9, isHydrating: g9, isUnmounted: false, effects: [], resolve(e9 = false, r4 = false) {
    const { vnode: s6, activeBranch: a14, pendingBranch: u10, pendingId: d8, effects: p7, parentComponent: f7, container: g10, isInFallback: m9 } = P3;
    let C4 = false;
    if (P3.isHydrating) P3.isHydrating = false;
    else if (!e9) {
      C4 = a14 && u10.transition && "out-in" === u10.transition.mode;
      let e10 = false;
      C4 && (a14.transition.afterLeave = () => {
        d8 === P3.pendingId && (_7(u10, g10, c5 !== j7 || e10 ? c5 : k5(a14), 0), queuePostFlushCb(p7), m9 && s6.ssFallback && (s6.ssFallback.el = null));
      }), a14 && !P3.isFallbackMountPending && (R2(a14.el) === g10 && (c5 = k5(a14), e10 = true), x7(a14, f7, P3, true), !C4 && m9 && s6.ssFallback && queuePostRenderEffect(() => s6.ssFallback.el = null, P3)), C4 || _7(u10, g10, c5, 0);
    }
    P3.isFallbackMountPending = false, setActiveBranch(P3, u10), P3.pendingBranch = null, P3.isInFallback = false;
    let E3 = P3.parent, H2 = false;
    for (; E3; ) {
      if (E3.pendingBranch) {
        for (let e10 = 0; e10 < p7.length; e10++) E3.effects.push(p7[e10]);
        H2 = true;
        break;
      }
      E3 = E3.parent;
    }
    H2 || C4 || queuePostFlushCb(p7), P3.effects = [], T3 && t8 && t8.pendingBranch && S5 === t8.pendingId && (S5 = void 0, t8.deps--, 0 !== t8.deps || r4 || t8.resolve()), triggerEvent(s6, "onResolve");
  }, fallback(e9) {
    if (!P3.pendingBranch) return;
    const { vnode: t9, activeBranch: r4, parentComponent: s6, container: a14, namespace: c6 } = P3;
    triggerEvent(t9, "onFallback");
    const u10 = k5(r4), mountFallback = /* @__PURE__ */ __name(() => {
      if (P3.isFallbackMountPending = false, !P3.isInFallback) return;
      const e10 = P3.vnode.ssFallback;
      m8(null, e10, a14, u10, s6, null, c6, d7, p6), setActiveBranch(P3, e10);
    }, "mountFallback"), f7 = e9.transition && "out-in" === e9.transition.mode;
    f7 && (P3.isFallbackMountPending = true, r4.transition.afterLeave = mountFallback), P3.isInFallback = true, x7(r4, s6, null, true), f7 || mountFallback();
  }, move(e9, t9, r4) {
    P3.activeBranch && _7(P3.activeBranch, e9, t9, r4), P3.container = e9;
  }, next: /* @__PURE__ */ __name(() => P3.activeBranch && k5(P3.activeBranch), "next"), registerDep(e9, t9, r4, s6) {
    const a14 = !!P3.pendingBranch;
    a14 && P3.deps++;
    const c6 = e9.vnode.el;
    e9.asyncDep.catch((t10) => {
      handleError(t10, e9, 0);
    }).then((u10) => {
      if (e9.isUnmounted || P3.isUnmounted || P3.pendingId !== e9.suspenseId) return;
      if (unsetCurrentInstance(), !e9.scope.active) return void (a14 && 0 === --P3.deps && P3.resolve());
      e9.asyncResolved = true;
      const { vnode: d8 } = e9;
      handleSetupResult(e9, u10), c6 && (d8.el = c6);
      const p7 = !c6 && e9.subTree.el;
      t9(e9, d8, R2(c6 || e9.subTree.el), c6 ? null : k5(e9.subTree), P3, s6, r4), p7 && (d8.placeholder = null, C3(p7)), updateHOCHostEl(e9, d8.el), a14 && 0 === --P3.deps && P3.resolve();
    });
  }, unmount(e9, t9) {
    P3.isUnmounted = true, P3.activeBranch && x7(P3.activeBranch, r3, e9, t9), P3.pendingBranch && x7(P3.pendingBranch, r3, e9, t9);
  } };
  return P3;
}
function normalizeSuspenseSlot(e8) {
  let t8;
  if (isFunction(e8)) {
    const r3 = Ho && e8._c;
    r3 && (e8._d = false, openBlock()), e8 = e8(), r3 && (e8._d = true, t8 = Po, closeBlock());
  }
  if (Ur(e8)) {
    const t9 = filterSingleRoot(e8);
    e8 = t9;
  }
  return e8 = normalizeVNode(e8), t8 && !e8.dynamicChildren && (e8.dynamicChildren = t8.filter((t9) => t9 !== e8)), e8;
}
function setActiveBranch(e8, t8) {
  e8.activeBranch = t8;
  const { vnode: r3, parentComponent: s5 } = e8;
  let a13 = t8.el;
  for (; !a13 && t8.component; ) a13 = (t8 = t8.component.subTree).el;
  r3.el = a13, s5 && s5.subTree === r3 && (s5.vnode.el = a13, updateHOCHostEl(s5, a13));
}
function openBlock(e8 = false) {
  jo.push(Po = e8 ? null : []);
}
function closeBlock() {
  jo.pop(), Po = jo[jo.length - 1] || null;
}
function setBlockTracking(e8, t8 = false) {
  Ho += e8, e8 < 0 && Po && t8 && (Po.hasOnce = true);
}
function setupBlock(e8) {
  return e8.dynamicChildren = Ho > 0 ? Po || zr : null, closeBlock(), Ho > 0 && Po && Po.push(e8), e8;
}
function createElementBlock(e8, t8, r3, s5, a13, c5) {
  return setupBlock(createBaseVNode(e8, t8, r3, s5, a13, c5, true));
}
function createBlock(e8, t8, r3, s5, a13) {
  return setupBlock(createVNode(e8, t8, r3, s5, a13, true));
}
function isVNode(e8) {
  return !!e8 && true === e8.__v_isVNode;
}
function isSameVNodeType(e8, t8) {
  return e8.type === t8.type && e8.key === t8.key;
}
function createBaseVNode(e8, t8 = null, r3 = null, s5 = 0, a13 = null, c5 = e8 === So ? 0 : 1, u9 = false, d7 = false) {
  const p6 = { __v_isVNode: true, __v_skip: true, type: e8, props: t8, key: t8 && normalizeKey(t8), ref: t8 && normalizeRef(t8), scopeId: Ys, slotScopeIds: null, children: r3, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: c5, patchFlag: s5, dynamicProps: a13, dynamicChildren: null, appContext: null, ctx: Qs };
  return d7 ? (normalizeChildren(p6, r3), 128 & c5 && e8.normalize(p6)) : r3 && (p6.shapeFlag |= isString(r3) ? 8 : 16), Ho > 0 && !u9 && Po && (p6.patchFlag > 0 || 6 & c5) && 32 !== p6.patchFlag && Po.push(p6), p6;
}
function cloneVNode(e8, t8, r3 = false, s5 = false) {
  const { props: a13, ref: c5, patchFlag: u9, children: d7, transition: p6 } = e8, f6 = t8 ? mergeProps(a13 || {}, t8) : a13, g9 = { __v_isVNode: true, __v_skip: true, type: e8.type, props: f6, key: f6 && normalizeKey(f6), ref: t8 && t8.ref ? r3 && c5 ? Ur(c5) ? c5.concat(normalizeRef(t8)) : [c5, normalizeRef(t8)] : normalizeRef(t8) : c5, scopeId: e8.scopeId, slotScopeIds: e8.slotScopeIds, children: d7, target: e8.target, targetStart: e8.targetStart, targetAnchor: e8.targetAnchor, staticCount: e8.staticCount, shapeFlag: e8.shapeFlag, patchFlag: t8 && e8.type !== So ? -1 === u9 ? 16 : 16 | u9 : u9, dynamicProps: e8.dynamicProps, dynamicChildren: e8.dynamicChildren, appContext: e8.appContext, dirs: e8.dirs, transition: p6, component: e8.component, suspense: e8.suspense, ssContent: e8.ssContent && cloneVNode(e8.ssContent), ssFallback: e8.ssFallback && cloneVNode(e8.ssFallback), placeholder: e8.placeholder, el: e8.el, anchor: e8.anchor, ctx: e8.ctx, ce: e8.ce, cacheIndex: e8.cacheIndex };
  return p6 && s5 && setTransitionHooks(g9, p6.clone(g9)), g9;
}
function createTextVNode(e8 = " ", t8 = 0) {
  return createVNode(To, null, e8, t8);
}
function createCommentVNode(e8 = "", t8 = false) {
  return t8 ? (openBlock(), createBlock(Ao, null, e8)) : createVNode(Ao, null, e8);
}
function normalizeVNode(e8) {
  return null == e8 || "boolean" == typeof e8 ? createVNode(Ao) : Ur(e8) ? createVNode(So, null, e8.slice()) : isVNode(e8) ? cloneIfMounted(e8) : createVNode(To, null, String(e8));
}
function cloneIfMounted(e8) {
  return null === e8.el && -1 !== e8.patchFlag || e8.memo ? e8 : cloneVNode(e8);
}
function normalizeChildren(e8, t8) {
  let r3 = 0;
  const { shapeFlag: s5 } = e8;
  if (null == t8) t8 = null;
  else if (Ur(t8)) r3 = 16;
  else if ("object" == typeof t8) {
    if (65 & s5) {
      const r4 = t8.default;
      return void (r4 && (r4._c && (r4._d = false), normalizeChildren(e8, r4()), r4._c && (r4._d = true)));
    }
    {
      r3 = 32;
      const s6 = t8._;
      s6 || isInternalObject(t8) ? 3 === s6 && Qs && (1 === Qs.slots._ ? t8._ = 1 : (t8._ = 2, e8.patchFlag |= 1024)) : t8._ctx = Qs;
    }
  } else if (isFunction(t8)) {
    if (65 & s5) return void normalizeChildren(e8, { default: t8 });
    t8 = { default: t8, _ctx: Qs }, r3 = 32;
  } else t8 = String(t8), 64 & s5 ? (r3 = 16, t8 = [createTextVNode(t8)]) : r3 = 8;
  e8.children = t8, e8.shapeFlag |= r3;
}
function mergeProps(...e8) {
  const t8 = {};
  for (let r3 = 0; r3 < e8.length; r3++) {
    const s5 = e8[r3];
    for (const e9 in s5) if ("class" === e9) t8.class !== s5.class && (t8.class = normalizeClass([t8.class, s5.class]));
    else if ("style" === e9) t8.style = normalizeStyle([t8.style, s5.style]);
    else if (isOn(e9)) {
      const r4 = t8[e9], a13 = s5[e9];
      !a13 || r4 === a13 || Ur(r4) && r4.includes(a13) ? null != a13 || null != r4 || isModelListener(e9) || (t8[e9] = a13) : t8[e9] = r4 ? [].concat(r4, a13) : a13;
    } else "" !== e9 && (t8[e9] = s5[e9]);
  }
  return t8;
}
function invokeVNodeHook(e8, t8, r3, s5 = null) {
  callWithAsyncErrorHandling(e8, t8, 7, [r3, s5]);
}
function createComponentInstance(e8, t8, r3) {
  const s5 = e8.type, a13 = (t8 ? t8.appContext : e8.appContext) || Oo, c5 = { uid: Mo++, vnode: e8, type: s5, parent: t8, appContext: a13, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t8 ? t8.provides : Object.create(a13.provides), ids: t8 ? t8.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(s5, a13), emitsOptions: normalizeEmitsOptions(s5, a13), emit: null, emitted: null, propsDefaults: Dr, inheritAttrs: s5.inheritAttrs, ctx: Dr, data: Dr, props: Dr, attrs: Dr, slots: Dr, refs: Dr, setupState: Dr, setupContext: null, suspense: r3, suspenseId: r3 ? r3.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return c5.ctx = { _: c5 }, c5.root = t8 ? t8.root : c5, c5.emit = emit.bind(null, c5), e8.ce && e8.ce(c5), c5;
}
function isStatefulComponent(e8) {
  return 4 & e8.vnode.shapeFlag;
}
function setupComponent(e8, t8 = false, r3 = false) {
  t8 && No(t8);
  const { props: s5, children: a13 } = e8.vnode, c5 = isStatefulComponent(e8);
  !(function(e9, t9, r4, s6 = false) {
    const a14 = {}, c6 = createInternalObject();
    e9.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e9, t9, a14, c6);
    for (const t10 in e9.propsOptions[0]) t10 in a14 || (a14[t10] = void 0);
    r4 ? e9.props = s6 ? a14 : shallowReactive(a14) : e9.type.props ? e9.props = a14 : e9.props = c6, e9.attrs = c6;
  })(e8, s5, c5, t8), ((e9, t9, r4) => {
    const s6 = e9.slots = createInternalObject();
    if (32 & e9.vnode.shapeFlag) {
      const e10 = t9._;
      e10 ? (assignSlots(s6, t9, r4), r4 && def(s6, "_", e10, true)) : normalizeObjectSlots(t9, s6);
    } else t9 && normalizeVNodeSlots(e9, t9);
  })(e8, a13, r3 || t8);
  const u9 = c5 ? (function(e9, t9) {
    const r4 = e9.type;
    e9.accessCache = /* @__PURE__ */ Object.create(null), e9.proxy = new Proxy(e9.ctx, mo);
    const { setup: s6 } = r4;
    if (s6) {
      pauseTracking();
      const r5 = e9.setupContext = s6.length > 1 ? (function(e10) {
        const expose = /* @__PURE__ */ __name((t10) => {
          e10.exposed = t10 || {};
        }, "expose");
        return { attrs: new Proxy(e10.attrs, Do), slots: e10.slots, emit: e10.emit, expose };
      })(e9) : null, a14 = setCurrentInstance(e9), c6 = callWithErrorHandling(s6, e9, 0, [e9.props, r5]), u10 = isPromise(c6);
      if (resetTracking(), a14(), !u10 && !e9.sp || isAsyncWrapper(e9) || markAsyncBoundary(e9), u10) {
        if (c6.then(unsetCurrentInstance, unsetCurrentInstance), t9) return c6.then((r6) => {
          No(true);
          try {
            handleSetupResult(e9, r6, t9);
          } finally {
            No(false);
          }
        }).catch((t10) => {
          handleError(t10, e9, 0);
        });
        e9.asyncDep = c6;
      } else handleSetupResult(e9, c6);
    } else finishComponentSetup(e9);
  })(e8, t8) : void 0;
  return t8 && No(false), u9;
}
function handleSetupResult(e8, t8, r3) {
  isFunction(t8) ? e8.type.__ssrInlineRender ? e8.ssrRender = t8 : e8.render = t8 : isObject(t8) && (e8.setupState = proxyRefs(t8)), finishComponentSetup(e8);
}
function finishComponentSetup(e8, t8, r3) {
  const s5 = e8.type;
  e8.render || (e8.render = s5.render || NOOP);
  {
    const t9 = setCurrentInstance(e8);
    pauseTracking();
    try {
      applyOptions(e8);
    } finally {
      resetTracking(), t9();
    }
  }
}
function getComponentPublicInstance(e8) {
  return e8.exposed ? e8.exposeProxy || (e8.exposeProxy = new Proxy(proxyRefs(markRaw(e8.exposed)), { get: /* @__PURE__ */ __name((t8, r3) => r3 in t8 ? t8[r3] : r3 in go ? go[r3](e8) : void 0, "get"), has: /* @__PURE__ */ __name((e9, t8) => t8 in e9 || t8 in go, "has") })) : e8.proxy;
}
function getComponentName(e8, t8 = true) {
  return isFunction(e8) ? e8.displayName || e8.name : e8.name || t8 && e8.__name;
}
function h6(e8, t8, r3) {
  try {
    setBlockTracking(-1);
    const s5 = arguments.length;
    return 2 === s5 ? isObject(t8) && !Ur(t8) ? isVNode(t8) ? createVNode(e8, null, [t8]) : createVNode(e8, t8) : createVNode(e8, null, t8) : (s5 > 3 ? r3 = Array.prototype.slice.call(arguments, 2) : 3 === s5 && isVNode(r3) && (r3 = [r3]), createVNode(e8, t8, r3));
  } finally {
    setBlockTracking(1);
  }
}
function setStyle(e8, t8, r3) {
  if (Ur(r3)) r3.forEach((r4) => setStyle(e8, t8, r4));
  else if (null == r3 && (r3 = ""), t8.startsWith("--")) Qo.test(r3) ? e8.setProperty(t8, r3.replace(Qo, ""), "important") : e8.setProperty(t8, r3);
  else {
    const s5 = (function(e9, t9) {
      const r4 = Xo[t9];
      if (r4) return r4;
      let s6 = Kr(t9);
      if ("filter" !== s6 && s6 in e9) return Xo[t9] = s6;
      s6 = Gr(s6);
      for (let r5 = 0; r5 < Yo.length; r5++) {
        const a13 = Yo[r5] + s6;
        if (a13 in e9) return Xo[t9] = a13;
      }
      return t9;
    })(e8, t8);
    Qo.test(r3) ? e8.setProperty(Jr(s5), r3.replace(Qo, ""), "important") : e8[s5] = r3;
  }
}
function shouldPreserveTextareaResizeStyle(e8, t8, r3, s5) {
  return "TEXTAREA" === e8.tagName && ("width" === t8 || "height" === t8) && isString(s5) && r3 === s5;
}
function patchAttr(e8, t8, r3, s5, a13, c5 = os(t8)) {
  s5 && t8.startsWith("xlink:") ? null == r3 ? e8.removeAttributeNS(ei, t8.slice(6, t8.length)) : e8.setAttributeNS(ei, t8, r3) : null == r3 || c5 && !includeBooleanAttr(r3) ? e8.removeAttribute(t8) : e8.setAttribute(t8, c5 ? "" : isSymbol(r3) ? String(r3) : r3);
}
function patchDOMProp(e8, t8, r3, s5, a13) {
  if ("innerHTML" === t8 || "textContent" === t8) return void (null != r3 && (e8[t8] = r3));
  const c5 = e8.tagName;
  if ("value" === t8 && "PROGRESS" !== c5 && !c5.includes("-")) {
    const s6 = "OPTION" === c5 ? e8.getAttribute("value") || "" : e8.value, a14 = null == r3 ? "checkbox" === e8.type ? "on" : "" : String(r3);
    return s6 === a14 && "_value" in e8 || (e8.value = a14), null == r3 && e8.removeAttribute(t8), void (e8._value = r3);
  }
  let u9 = false;
  if ("" === r3 || null == r3) {
    const s6 = typeof e8[t8];
    "boolean" === s6 ? r3 = includeBooleanAttr(r3) : null == r3 && "string" === s6 ? (r3 = "", u9 = true) : "number" === s6 && (r3 = 0, u9 = true);
  }
  try {
    e8[t8] = r3;
  } catch (e9) {
  }
  u9 && e8.removeAttribute(a13 || t8);
}
function addEventListener(e8, t8, r3, s5) {
  e8.addEventListener(t8, r3, s5);
}
function patchEvent(e8, t8, r3, s5, a13 = null) {
  const c5 = e8[ti] || (e8[ti] = {}), u9 = c5[t8];
  if (s5 && u9) u9.value = s5;
  else {
    const [r4, d7] = (function(e9) {
      let t9, r5;
      for (; (r5 = e9.match(ni)) && !ri.test(e9); ) t9 || (t9 = {}), e9 = e9.slice(0, e9.length - r5[1].length), t9[r5[1].toLowerCase()] = true;
      const s6 = ":" === e9[2] ? e9.slice(3) : Jr(e9.slice(2));
      return [s6, t9];
    })(t8);
    if (s5) {
      const u10 = c5[t8] = (function(e9, t9) {
        const invoker = /* @__PURE__ */ __name((e10) => {
          if (e10._vts) {
            if (e10._vts <= invoker.attached) return;
          } else e10._vts = Date.now();
          const r5 = invoker.value;
          if (Ur(r5)) {
            const s6 = e10.stopImmediatePropagation;
            e10.stopImmediatePropagation = () => {
              s6.call(e10), e10._stopped = true;
            };
            const a14 = r5.slice(), c6 = [e10];
            for (let r6 = 0; r6 < a14.length && !e10._stopped; r6++) {
              const e11 = a14[r6];
              e11 && callWithAsyncErrorHandling(e11, t9, 5, c6);
            }
          } else callWithAsyncErrorHandling(r5, t9, 5, [e10]);
        }, "invoker");
        return invoker.value = e9, invoker.attached = getNow(), invoker;
      })(s5, a13);
      addEventListener(e8, r4, u10, d7);
    } else u9 && (!(function(e9, t9, r5, s6) {
      e9.removeEventListener(t9, r5, s6);
    })(e8, r4, u9, d7), c5[t8] = void 0);
  }
}
function onCompositionStart(e8) {
  e8.target.composing = true;
}
function onCompositionEnd(e8) {
  const t8 = e8.target;
  t8.composing && (t8.composing = false, t8.dispatchEvent(new Event("input")));
}
function castValue(e8, t8, r3) {
  return t8 && (e8 = e8.trim()), r3 && (e8 = looseToNumber(e8)), e8;
}
function setChecked(e8, { value: t8, oldValue: r3 }, s5) {
  let a13;
  if (e8._modelValue = t8, Ur(t8)) a13 = looseIndexOf(t8, s5.props.value) > -1;
  else if (isSet(t8)) a13 = t8.has(s5.props.value);
  else {
    if (t8 === r3) return;
    a13 = looseEqual(t8, getCheckboxValue(e8, true));
  }
  e8.checked !== a13 && (e8.checked = a13);
}
function setSelected(e8, t8) {
  const r3 = e8.multiple, s5 = Ur(t8);
  if (!r3 || s5 || isSet(t8)) {
    for (let a13 = 0, c5 = e8.options.length; a13 < c5; a13++) {
      const c6 = e8.options[a13], u9 = getValue(c6);
      if (r3) if (s5) {
        const e9 = typeof u9;
        c6.selected = "string" === e9 || "number" === e9 ? t8.some((e10) => String(e10) === String(u9)) : looseIndexOf(t8, u9) > -1;
      } else c6.selected = t8.has(u9);
      else if (looseEqual(getValue(c6), t8)) return void (e8.selectedIndex !== a13 && (e8.selectedIndex = a13));
    }
    r3 || -1 === e8.selectedIndex || (e8.selectedIndex = -1);
  }
}
function getValue(e8) {
  return "_value" in e8 ? e8._value : e8.value;
}
function getCheckboxValue(e8, t8) {
  const r3 = t8 ? "_trueValue" : "_falseValue";
  return r3 in e8 ? e8[r3] : t8;
}
function createHead(e8 = {}) {
  const t8 = createHead$1({ ...e8, propResolvers: [hi] });
  return t8.install = (function(e9) {
    return { install(t9) {
      t9.config.globalProperties.$unhead = e9, t9.config.globalProperties.$head = e9, t9.provide("usehead", e9);
    } }.install;
  })(t8), t8;
}
function appendVary(e8, t8) {
  const r3 = parseVary(t8);
  if (!r3.length) return;
  const s5 = parseVary(getResponseHeader(e8, "vary"));
  if (s5.includes("*")) return;
  if (r3.includes("*")) return void setResponseHeader(e8, "vary", "*");
  const a13 = s5.slice();
  for (const e9 of r3) a13.includes(e9) || a13.push(e9);
  setResponseHeader(e8, "vary", a13.join(", "));
}
function parseVary(e8) {
  return (Array.isArray(e8) ? e8 : "string" == typeof e8 ? e8.split(",") : []).map((e9) => e9.trim().toLowerCase()).filter(Boolean);
}
function defaultHandler(e8, t8, r3) {
  const s5 = e8.unhandled || e8.fatal, a13 = e8.statusCode || 500, c5 = e8.statusMessage || "Server Error", u9 = getRequestURL(t8, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a13) {
    const e9 = "/";
    if (/^\/[^/]/.test(e9) && !u9.pathname.startsWith(e9)) {
      return { status: 302, statusText: "Found", headers: { location: `${e9}${u9.pathname.slice(1)}${u9.search}` }, body: "Redirecting..." };
    }
  }
  if (s5 && !r3?.silent) {
    const r4 = [e8.unhandled && "[unhandled]", e8.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r4} [${t8.method}] ${u9}
`, e8);
  }
  const d7 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t8, a13, c5), 404 !== a13 && getResponseHeader(t8, "cache-control") || (d7["cache-control"] = "no-cache");
  return { status: a13, statusText: c5, headers: d7, body: { error: true, url: u9.href, statusCode: a13, statusMessage: c5, message: s5 ? "Server Error" : e8.message, data: s5 ? void 0 : e8.data } };
}
function matchRouteRules(e8) {
  return Ut({}, ...(function() {
    if (!Pi) {
      const e9 = {};
      for (const [t8, r3] of Object.entries(useRuntimeConfig2().nitro?.routeRules || {})) e9[normalizeRouteRulePath(t8)] = r3;
      Pi = toRouteMatcher(createRouter$1({ routes: e9 }));
    }
    return Pi;
  })().matchAll(normalizeRouteRulePath(e8)).reverse());
}
function resolveRequestRouteRules(e8) {
  return matchRouteRules(withoutBase(e8.path.split("?")[0], useRuntimeConfig2().app.baseURL));
}
function getRouteRules2(e8) {
  const t8 = e8.context._nitro ||= {};
  return t8.routeRules ||= resolveRequestRouteRules(e8);
}
function useNitroApp() {
  return Mi;
}
function defineRenderHandler(e8) {
  const t8 = useRuntimeConfig2();
  return rn(async (r3) => {
    const s5 = useNitroApp(), a13 = { event: r3, render: e8, response: void 0 };
    if (await s5.hooks.callHook("render:before", a13), !a13.response) {
      if (r3.path === `${t8.app.baseURL}favicon.ico`) return setResponseHeader(r3, "Content-Type", "image/x-icon"), send(r3, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      if (a13.response = await a13.render(r3), !a13.response) {
        const e9 = (function(e10) {
          return e10.node.res.statusCode;
        })(r3);
        return setResponseStatus(r3, 200 === e9 ? 500 : e9), send(r3, "No response returned from render handler: " + r3.path);
      }
    }
    return await s5.hooks.callHook("render:response", a13.response, a13), a13.response.headers && setResponseHeaders(r3, a13.response.headers), (a13.response.statusCode || a13.response.statusMessage) && setResponseStatus(r3, a13.response.statusCode, a13.response.statusMessage), a13.response.body;
  });
}
var ReadStream, WriteStream, u8, Process, d6, p5, _getEnv, f5, g8, m7, _6, x6, k4, R, C2, S4, T2, E, j6, P2, H, O2, M2, I3, B2, N2, L2, D4, z, $3, F, U2, W2, q3, V2, K, Z, J, G, Q, Y, X, ee, te, ne, re, se, oe, ie, ae, ce, le, ue, de2, pe, fe, he2, ge3, me2, ye3, ve3, _e3, be3, we3, xe3, ke3, Re3, Ce3, Se3, Te3, Ae3, Ee3, je3, Pe3, He3, Oe3, Me3, Ie3, Be3, Ne3, Le3, De3, ze3, $e3, Fe3, Ue3, We3, qe3, Ve3, Ke3, Ze3, Je3, Ge3, Qe3, Ye3, Xe3, et3, tt3, nt3, rt3, st3, ot3, it3, at3, ct3, lt3, ut3, dt3, pt3, ft3, ht3, gt2, mt2, yt3, vt2, _t2, bt2, wt2, xt2, kt2, Rt2, Ct2, St2, Tt2, At2, Et2, jt2, Pt2, Ht2, Ot2, Mt2, It2, Bt2, Nt2, Lt2, Dt2, zt2, $t2, Ft2, Ut, Wt2, i8, l7, qt2, Vt2, A2, y6, w6, Kt2, Zt2, H3Error, Jt2, Gt2, Qt2, Yt2, Xt2, en, noop2, tn, nn, H3Event, rn, lazyEventHandler, sn, on, an, cn, ln, FetchError, un, dn, pn, fn, hn, gn, mn, yn, vn, _n, bn, wn, xn, memory, kn, normalizeKey$1, Rn, Cn, Sn, Tn, An, En, jn, Pn, cachedEventHandler, Hn, On, Mn, In, Bn, Nn, Ln, Dn, zn, $n, Fn, Un, Wn, qn, Vn, Kn, Zn, Jn, Gn, Qn, Yn, Xn, er, tr, nr, rr, sr, or, ir, sortTags$1, formatKey, ar, cr, lr, ur, dr, pr, fr, hr, gr, mr, yr, vr, _r, br, wr, xr, hasContent, kr, Rr, Cr, Sr, Tr, Ar, Er, jr, sortTags, DEFAULT_TAG_WEIGHT, Pr, isTruthy, Hr, Or, Mr, Ir, Br, Nr, Lr, Dr, zr, NOOP, NO, isOn, isModelListener, $r, remove, Fr, hasOwn, Ur, isMap, isSet, isDate, isFunction, isString, isSymbol, isObject, isPromise, Wr, toTypeString, isPlainObject2, isIntegerKey, qr, cacheStringFunction, Vr, Kr, Zr, Jr, Gr, Qr, hasChanged, invokeArrayFns, def, looseToNumber, Yr, getGlobalThis, Xr, es, ts, ns, rs, ss, os, is, as, cs, ls, us, ds, isRef$1, toDisplayString, replacer, stringifySymbol, ps, fs, EffectScope, hs, ReactiveEffect, gs, ms, ys, vs, _s, bs, Link, Dep, ws, xs, ks, Rs, Cs, Ss, Ts, As, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, Es, js, Ps, toShallow, getProto, Hs, Os, Ms, Is, Bs, Ns, Ls, toReactive, toReadonly, RefImpl, Ds, CustomRefImpl, ObjectRefImpl, GetterRefImpl, ComputedRefImpl, zs, $s, Fs, Us, Ws, qs, Vs, Ks, Zs, Js, Gs, getId, Qs, Ys, Xs, useSSRContext, eo, isTeleport, to, no, isComment2, isAsyncWrapper, isKeepAlive, createHook, ro, so, oo, io, ao, co, lo, uo, po, fo, ho, getPublicInstance, go, hasSetupBinding, mo, yo, vo, _o, bo, getModelModifiers, wo, getFunctionalFallthrough, filterModelListeners, xo, createInternalObject, isInternalObject, ko, isInternalKey, normalizeSlotValue, normalizeSlot2, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, queuePostRenderEffect, isSuspense, Ro, Co, So, To, Ao, Eo, jo, Po, Ho, normalizeKey, normalizeRef, createVNode, Oo, Mo, Io, getCurrentInstance, Bo, No, setCurrentInstance, unsetCurrentInstance, Lo, Do, computed, zo, $o, Fo, Uo, Wo, qo, Vo, Ko, Zo, Jo, Go, Qo, Yo, Xo, ei, ti, ni, ri, si, oi, getNow, isNativeOn, getModelAssigner, ii, ai, ci, li, ui, di, pi, createApp, fi, initDirectivesForSSR, hi, gi, mi, yi, vi, _i, bi, wi, xi, ki, Ri, Ci, Ti, Ai, Ei, ji, normalizePath, normalizeRouteRulePath, Pi, Hi, _lazy_LuixcS, Oi, Mi, Ii, Bi, Ni;
var init_nitro = __esm({
  "server/chunks/nitro/nitro.mjs"() {
    "global" in globalThis || (globalThis.global = globalThis);
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e8) {
        this.fd = e8;
      }
      setRawMode(e8) {
        return this.isRaw = e8, this;
      }
    };
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e8) {
        this.fd = e8;
      }
      clearLine(e8, t8) {
        return t8 && t8(), false;
      }
      clearScreenDown(e8) {
        return e8 && e8(), false;
      }
      cursorTo(e8, t8, r3) {
        return r3 && "function" == typeof r3 && r3(), false;
      }
      moveCursor(e8, t8, r3) {
        return r3 && r3(), false;
      }
      getColorDepth(e8) {
        return 1;
      }
      hasColors(e8, t8) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e8, t8, r3) {
        e8 instanceof Uint8Array && (e8 = new TextDecoder().decode(e8));
        try {
          console.log(e8);
        } catch {
        }
        return r3 && "function" == typeof r3 && r3(), false;
      }
    };
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    u8 = "22.14.0";
    Process = class _Process extends r2 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e8) {
        super(), this.env = e8.env, this.hrtime = e8.hrtime, this.nextTick = e8.nextTick;
        for (const e9 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(r2.prototype)]) {
          const t8 = this[e9];
          "function" == typeof t8 && (this[e9] = t8.bind(this));
        }
      }
      emitWarning(e8, t8, r3) {
        console.warn(`${r3 ? `[${r3}] ` : ""}${t8 ? `${t8}: ` : ""}${e8}`);
      }
      emit(...e8) {
        return super.emit(...e8);
      }
      listeners(e8) {
        return super.listeners(e8);
      }
      #e;
      #t;
      #n;
      get stdin() {
        return this.#e ??= new ReadStream(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream(1);
      }
      get stderr() {
        return this.#n ??= new WriteStream(2);
      }
      #r = "/";
      chdir(e8) {
        this.#r = e8;
      }
      cwd() {
        return this.#r;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${u8}`;
      }
      get versions() {
        return { node: u8 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: notImplemented("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented("process.report.getReport"), writeReport: notImplemented("process.report.writeReport") };
      finalization = { register: notImplemented("process.finalization.register"), unregister: notImplemented("process.finalization.unregister"), registerBeforeExit: notImplemented("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    d6 = /* @__PURE__ */ Object.create(null);
    p5 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e8) => globalThis.__env__ || p5?.env || (e8 ? d6 : globalThis), "_getEnv");
    f5 = new Proxy(d6, { get: /* @__PURE__ */ __name((e8, t8) => _getEnv()[t8] ?? d6[t8], "get"), has: /* @__PURE__ */ __name((e8, t8) => t8 in _getEnv() || t8 in d6, "has"), set: /* @__PURE__ */ __name((e8, t8, r3) => (_getEnv(true)[t8] = r3, true), "set"), deleteProperty: /* @__PURE__ */ __name((e8, t8) => (delete _getEnv(true)[t8], true), "deleteProperty"), ownKeys() {
      const e8 = _getEnv();
      return Object.keys(e8);
    }, getOwnPropertyDescriptor(e8, t8) {
      const r3 = _getEnv();
      if (t8 in r3) return { value: r3[t8], writable: true, enumerable: true, configurable: true };
    } });
    g8 = Object.assign(function(e8) {
      const t8 = Date.now(), r3 = Math.trunc(t8 / 1e3), s5 = t8 % 1e3 * 1e6;
      if (e8) {
        let t9 = r3 - e8[0], a13 = s5 - e8[0];
        return a13 < 0 && (t9 -= 1, a13 = 1e9 + a13), [t9, a13];
      }
      return [r3, s5];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    globalThis.__env__ = t7;
    m7 = new Process({ env: f5, hrtime: g8, nextTick: e7.nextTick });
    for (const t8 of ["exit", "getBuiltinModule", "platform"]) t8 in e7 && (m7[t8] = e7[t8]);
    e7.features && Object.defineProperty(m7, "features", { get: /* @__PURE__ */ __name(() => e7.features, "get") });
    ({ abort: _6, addListener: x6, allowedNodeEnvironmentFlags: k4, hasUncaughtExceptionCaptureCallback: R, setUncaughtExceptionCaptureCallback: C2, loadEnvFile: S4, sourceMapsEnabled: T2, arch: E, argv: j6, argv0: P2, chdir: H, config: O2, connected: M2, constrainedMemory: I3, availableMemory: B2, cpuUsage: N2, cwd: L2, debugPort: D4, dlopen: z, disconnect: $3, emit: F, emitWarning: U2, env: W2, eventNames: q3, execArgv: V2, execPath: K, exit: Z, finalization: J, features: G, getBuiltinModule: Q, getActiveResourcesInfo: Y, getMaxListeners: X, hrtime: ee, kill: te, listeners: ne, listenerCount: re, memoryUsage: se, nextTick: oe, on: ie, off: ae, once: ce, pid: le, platform: ue, ppid: de2, prependListener: pe, prependOnceListener: fe, rawListeners: he2, release: ge3, removeAllListeners: me2, removeListener: ye3, report: ve3, resourceUsage: _e3, setMaxListeners: be3, setSourceMapsEnabled: we3, stderr: xe3, stdin: ke3, stdout: Re3, title: Ce3, umask: Se3, uptime: Te3, version: Ae3, versions: Ee3, domain: je3, initgroups: Pe3, moduleLoadList: He3, reallyExit: Oe3, openStdin: Me3, assert: Ie3, binding: Be3, send: Ne3, exitCode: Le3, channel: De3, getegid: ze3, geteuid: $e3, getgid: Fe3, getgroups: Ue3, getuid: We3, setegid: qe3, seteuid: Ve3, setgid: Ke3, setgroups: Ze3, setuid: Je3, permission: Ge3, mainModule: Qe3, _events: Ye3, _eventsCount: Xe3, _exiting: et3, _maxListeners: tt3, _debugEnd: nt3, _debugProcess: rt3, _fatalException: st3, _getActiveHandles: ot3, _getActiveRequests: it3, _kill: at3, _preload_modules: ct3, _rawDebug: lt3, _startProfilerIdleNotifier: ut3, _stopProfilerIdleNotifier: dt3, _tickCallback: pt3, _disconnect: ft3, _handleQueue: ht3, _pendingMessage: gt2, _channel: mt2, _send: yt3, _linkedBinding: vt2 } = m7);
    _t2 = globalThis.process;
    globalThis.process = _t2 ? new Proxy(_t2, { get: /* @__PURE__ */ __name((e8, t8, r3) => Reflect.has(e8, t8) ? Reflect.get(e8, t8, r3) : Reflect.get(m7, t8, r3), "get") }) : m7, globalThis.Buffer || (globalThis.Buffer = s4), globalThis.setImmediate || (globalThis.setImmediate = a12), globalThis.clearImmediate || (globalThis.clearImmediate = c4);
    bt2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    wt2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    xt2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    kt2 = /#/g;
    Rt2 = /&/g;
    Ct2 = /\//g;
    St2 = /=/g;
    Tt2 = /\+/g;
    At2 = /%5e/gi;
    Et2 = /%60/gi;
    jt2 = /%7c/gi;
    Pt2 = /%20/gi;
    Ht2 = /%2f/gi;
    __name(encodeQueryValue2, "encodeQueryValue");
    __name(encodeQueryKey2, "encodeQueryKey");
    __name(decode2, "decode");
    __name(decodePath, "decodePath");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery2, "stringifyQuery");
    Ot2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Mt2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    It2 = /^([/\\]\s*){2,}[^/\\]/;
    Bt2 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    Nt2 = /\/$|\/\?|\/#/;
    Lt2 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(isScriptProtocol, "isScriptProtocol");
    __name(hasTrailingSlash, "hasTrailingSlash");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withLeadingSlash, "withLeadingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery, "getQuery");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    __name(joinRelativeURL, "joinRelativeURL");
    Dt2 = /* @__PURE__ */ Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    zt2 = 0;
    $t2 = 1;
    Ft2 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject$1, "isPlainObject$1");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Ut = createDefu();
    Wt2 = createDefu((e8, t8, r3) => {
      if (void 0 !== e8[t8] && "function" == typeof r3) return e8[t8] = r3(e8[t8]), true;
    });
    __name(o5, "o");
    i8 = class _i2 extends r2 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e8, t8) {
        return new _i2(t8);
      }
      constructor(e8) {
        super();
      }
      _read(e8) {
      }
      read(e8) {
      }
      setEncoding(e8) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e8) {
        return this;
      }
      unshift(e8, t8) {
      }
      wrap(e8) {
        return this;
      }
      push(e8, t8) {
        return false;
      }
      _destroy(e8, t8) {
        this.removeAllListeners();
      }
      destroy(e8) {
        return this.destroyed = true, this._destroy(e8), this;
      }
      pipe(e8, t8) {
        return {};
      }
      compose(e8, t8) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o5("Readable.asyncIterator");
      }
      iterator(e8) {
        throw o5("Readable.iterator");
      }
      map(e8, t8) {
        throw o5("Readable.map");
      }
      filter(e8, t8) {
        throw o5("Readable.filter");
      }
      forEach(e8, t8) {
        throw o5("Readable.forEach");
      }
      reduce(e8, t8, r3) {
        throw o5("Readable.reduce");
      }
      find(e8, t8) {
        throw o5("Readable.find");
      }
      findIndex(e8, t8) {
        throw o5("Readable.findIndex");
      }
      some(e8, t8) {
        throw o5("Readable.some");
      }
      toArray(e8) {
        throw o5("Readable.toArray");
      }
      every(e8, t8) {
        throw o5("Readable.every");
      }
      flatMap(e8, t8) {
        throw o5("Readable.flatMap");
      }
      drop(e8, t8) {
        throw o5("Readable.drop");
      }
      take(e8, t8) {
        throw o5("Readable.take");
      }
      asIndexedPairs(e8) {
        throw o5("Readable.asIndexedPairs");
      }
    };
    l7 = class extends r2 {
      static {
        __name(this, "l");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e8) {
        super();
      }
      pipe(e8, t8) {
        return {};
      }
      _write(e8, t8, r3) {
        if (this.writableEnded) r3 && r3();
        else {
          if (void 0 === this._data) this._data = e8;
          else {
            const r4 = "string" == typeof this._data ? s4.from(this._data, this._encoding || t8 || "utf8") : this._data, a13 = "string" == typeof e8 ? s4.from(e8, t8 || this._encoding || "utf8") : e8;
            this._data = s4.concat([r4, a13]);
          }
          this._encoding = t8, r3 && r3();
        }
      }
      _writev(e8, t8) {
      }
      _destroy(e8, t8) {
      }
      _final(e8) {
      }
      write(e8, t8, r3) {
        const s5 = "string" == typeof t8 ? this._encoding : "utf8", a13 = "function" == typeof t8 ? t8 : "function" == typeof r3 ? r3 : void 0;
        return this._write(e8, s5, a13), true;
      }
      setDefaultEncoding(e8) {
        return this;
      }
      end(e8, t8, r3) {
        const s5 = "function" == typeof e8 ? e8 : "function" == typeof t8 ? t8 : "function" == typeof r3 ? r3 : void 0;
        if (this.writableEnded) return s5 && s5(), this;
        const a13 = e8 === s5 ? void 0 : e8;
        if (a13) {
          const e9 = t8 === s5 ? void 0 : t8;
          this.write(a13, e9);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), s5 && s5(), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e8) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e8, t8) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return Promise.resolve();
      }
    };
    qt2 = class {
      static {
        __name(this, "qt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e8 = new i8(), t8 = new l7()) {
        Object.assign(this, e8), Object.assign(this, t8), this._destroy = /* @__PURE__ */ (function(...e9) {
          return function(...t9) {
            for (const r3 of e9) r3(...t9);
          };
        })(e8._destroy, t8._destroy);
      }
    };
    Vt2 = (Object.assign(qt2.prototype, i8.prototype), Object.assign(qt2.prototype, l7.prototype), qt2);
    A2 = class extends Vt2 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e8) {
        super();
      }
      write(e8, t8, r3) {
        return false;
      }
      connect(e8, t8, r3) {
        return this;
      }
      end(e8, t8, r3) {
        return this;
      }
      setEncoding(e8) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e8, t8) {
        return this;
      }
      setNoDelay(e8) {
        return this;
      }
      setKeepAlive(e8, t8) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e8 = new Error("ERR_SOCKET_CLOSED");
        return e8.code = "ERR_SOCKET_CLOSED", this.destroy(e8), this;
      }
    };
    y6 = class extends i8 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e8) {
        super(), this.socket = this.connection = e8 || new A2();
      }
      get rawHeaders() {
        const e8 = this.headers, t8 = [];
        for (const r3 in e8) if (Array.isArray(e8[r3])) for (const s5 of e8[r3]) t8.push(r3, s5);
        else t8.push(r3, e8[r3]);
        return t8;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e8, t8) {
        return this;
      }
      get headersDistinct() {
        return p$1(this.headers);
      }
      get trailersDistinct() {
        return p$1(this.trailers);
      }
    };
    __name(p$1, "p$1");
    w6 = class extends l7 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e8) {
        super(), this.req = e8;
      }
      assignSocket(e8) {
        e8._httpMessage = this, this.socket = e8, this.connection = e8, this.emit("socket", e8), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e8) {
      }
      writeContinue(e8) {
      }
      writeHead(e8, t8, r3) {
        e8 && (this.statusCode = e8), "string" == typeof t8 && (this.statusMessage = t8, t8 = void 0);
        const s5 = r3 || t8;
        if (s5 && !Array.isArray(s5)) for (const e9 in s5) this.setHeader(e9, s5[e9]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e8, t8) {
        return this;
      }
      appendHeader(e8, t8) {
        e8 = e8.toLowerCase();
        const r3 = this._headers[e8], s5 = [...Array.isArray(r3) ? r3 : [r3], ...Array.isArray(t8) ? t8 : [t8]].filter(Boolean);
        return this._headers[e8] = s5.length > 1 ? s5 : s5[0], this;
      }
      setHeader(e8, t8) {
        return this._headers[e8.toLowerCase()] = t8, this;
      }
      setHeaders(e8) {
        for (const [t8, r3] of Object.entries(e8)) this.setHeader(t8, r3);
        return this;
      }
      getHeader(e8) {
        return this._headers[e8.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e8) {
        return e8.toLowerCase() in this._headers;
      }
      removeHeader(e8) {
        delete this._headers[e8.toLowerCase()];
      }
      addTrailers(e8) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e8, t8) {
        "function" == typeof t8 && t8();
      }
    };
    Kt2 = (() => {
      const n8 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n8.prototype = /* @__PURE__ */ Object.create(null), n8;
    })();
    __name(v6, "v");
    Zt2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b5, "b");
    __name(hasProp, "hasProp");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e8, t8 = {}) {
        super(e8, t8), t8.cause && !this.cause && (this.cause = t8.cause);
      }
      toJSON() {
        const e8 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e8.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e8.data = this.data), e8;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    __name(getRequestHeaders, "getRequestHeaders");
    __name(getRequestHost, "getRequestHost");
    __name(getRequestProtocol, "getRequestProtocol");
    __name(getRequestURL, "getRequestURL");
    Jt2 = /* @__PURE__ */ Symbol.for("h3RawBody");
    Gt2 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    Qt2 = { html: "text/html", json: "application/json" };
    Yt2 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    Xt2 = void 0 === a12 ? (e8) => e8() : a12;
    __name(send, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(getResponseHeader, "getResponseHeader");
    __name(setResponseHeaders, "setResponseHeaders");
    en = setResponseHeaders;
    __name(setResponseHeader, "setResponseHeader");
    __name(appendResponseHeader, "appendResponseHeader");
    __name(sendStream, "sendStream");
    noop2 = /* @__PURE__ */ __name(() => {
    }, "noop");
    __name(writeEarlyHints, "writeEarlyHints");
    __name(sendWebResponse, "sendWebResponse");
    tn = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    nn = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e8, t8) {
        this.node = { req: e8, res: t8 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = (function(e8) {
          const t8 = new Headers();
          for (const [r3, s5] of Object.entries(e8)) if (Array.isArray(s5)) for (const e9 of s5) t8.append(r3, e9);
          else s5 && t8.set(r3, s5);
          return t8;
        })(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e8) {
        return Promise.resolve(e8).then((e9) => sendWebResponse(this, e9));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray, "_normalizeArray");
    rn = defineEventHandler;
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e8) {
      let t8, r3;
      const resolveHandler = /* @__PURE__ */ __name(() => r3 ? Promise.resolve(r3) : (t8 || (t8 = Promise.resolve(e8()).then((e9) => {
        const t9 = e9.default || e9;
        if ("function" != typeof t9) throw new TypeError("Invalid lazy handler result. It should be a function:", t9);
        return r3 = { handler: toEventHandler(e9.default || e9) }, r3;
      })), t8), "resolveHandler"), s5 = rn((e9) => r3 ? r3.handler(e9) : resolveHandler().then((t9) => t9.handler(e9)));
      return s5.__resolve__ = resolveHandler, s5;
    }, "lazyEventHandler");
    __name(createApp$1, "createApp$1");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    sn = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks$1, "flatHooks$1");
    on = { run: /* @__PURE__ */ __name((e8) => e8(), "run") };
    an = void 0 !== console.createTask ? console.createTask : () => on;
    __name(serialTaskCaller$1, "serialTaskCaller$1");
    __name(parallelTaskCaller$1, "parallelTaskCaller$1");
    __name(callEachWith$1, "callEachWith$1");
    cn = class {
      static {
        __name(this, "cn");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e8, t8, r3 = {}) {
        if (!e8 || "function" != typeof t8) return () => {
        };
        const s5 = e8;
        let a13;
        for (; this._deprecatedHooks[e8]; ) a13 = this._deprecatedHooks[e8], e8 = a13.to;
        if (a13 && !r3.allowDeprecated) {
          let e9 = a13.message;
          e9 || (e9 = `${s5} hook has been deprecated` + (a13.to ? `, please use ${a13.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e9) || (console.warn(e9), this._deprecatedMessages.add(e9));
        }
        if (!t8.name) try {
          Object.defineProperty(t8, "name", { get: /* @__PURE__ */ __name(() => "_" + e8.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e8] = this._hooks[e8] || [], this._hooks[e8].push(t8), () => {
          t8 && (this.removeHook(e8, t8), t8 = void 0);
        };
      }
      hookOnce(e8, t8) {
        let r3, _function = /* @__PURE__ */ __name((...e9) => ("function" == typeof r3 && r3(), r3 = void 0, _function = void 0, t8(...e9)), "_function");
        return r3 = this.hook(e8, _function), r3;
      }
      removeHook(e8, t8) {
        if (this._hooks[e8]) {
          const r3 = this._hooks[e8].indexOf(t8);
          -1 !== r3 && this._hooks[e8].splice(r3, 1), 0 === this._hooks[e8].length && delete this._hooks[e8];
        }
      }
      deprecateHook(e8, t8) {
        this._deprecatedHooks[e8] = "string" == typeof t8 ? { to: t8 } : t8;
        const r3 = this._hooks[e8] || [];
        delete this._hooks[e8];
        for (const t9 of r3) this.hook(e8, t9);
      }
      deprecateHooks(e8) {
        Object.assign(this._deprecatedHooks, e8);
        for (const t8 in e8) this.deprecateHook(t8, e8[t8]);
      }
      addHooks(e8) {
        const t8 = flatHooks$1(e8), r3 = Object.keys(t8).map((e9) => this.hook(e9, t8[e9]));
        return () => {
          for (const e9 of r3.splice(0, r3.length)) e9();
        };
      }
      removeHooks(e8) {
        const t8 = flatHooks$1(e8);
        for (const e9 in t8) this.removeHook(e9, t8[e9]);
      }
      removeAllHooks() {
        for (const e8 in this._hooks) delete this._hooks[e8];
      }
      callHook(e8, ...t8) {
        return t8.unshift(e8), this.callHookWith(serialTaskCaller$1, e8, ...t8);
      }
      callHookParallel(e8, ...t8) {
        return t8.unshift(e8), this.callHookWith(parallelTaskCaller$1, e8, ...t8);
      }
      callHookWith(e8, t8, ...r3) {
        const s5 = this._before || this._after ? { name: t8, args: r3, context: {} } : void 0;
        this._before && callEachWith$1(this._before, s5);
        const a13 = e8(t8 in this._hooks ? [...this._hooks[t8]] : [], r3);
        return a13 instanceof Promise ? a13.finally(() => {
          this._after && s5 && callEachWith$1(this._after, s5);
        }) : (this._after && s5 && callEachWith$1(this._after, s5), a13);
      }
      beforeEach(e8) {
        return this._before = this._before || [], this._before.push(e8), () => {
          if (void 0 !== this._before) {
            const t8 = this._before.indexOf(e8);
            -1 !== t8 && this._before.splice(t8, 1);
          }
        };
      }
      afterEach(e8) {
        return this._after = this._after || [], this._after.push(e8), () => {
          if (void 0 !== this._after) {
            const t8 = this._after.indexOf(e8);
            -1 !== t8 && this._after.splice(t8, 1);
          }
        };
      }
    };
    ln = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e8, t8) {
        super(e8, t8), this.name = "FetchError", t8?.cause && !this.cause && (this.cause = t8.cause);
      }
    };
    un = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    dn = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    pn = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks$1, "callHooks$1");
    fn = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    hn = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    gn = (function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== ln) return ln;
      throw new Error("unable to locate global object");
    })();
    mn = gn.fetch ? (...e8) => gn.fetch(...e8) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    yn = gn.Headers;
    vn = gn.AbortController;
    _n = createFetch({ fetch: mn, Headers: yn, AbortController: vn });
    __name(asyncCall, "asyncCall");
    __name(stringify2, "stringify");
    bn = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    wn = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    xn = /* @__PURE__ */ new Set(["getKeys", "clear", "mount", "unmount"]);
    __name(normalizeKey$2, "normalizeKey$2");
    __name(hasDotSegment, "hasDotSegment");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e8 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e8, "getInstance"), hasItem: /* @__PURE__ */ __name((t8) => e8.has(t8), "hasItem"), getItem: /* @__PURE__ */ __name((t8) => e8.get(t8) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t8) => e8.get(t8) ?? null, "getItemRaw"), setItem(t8, r3) {
        e8.set(t8, r3);
      }, setItemRaw(t8, r3) {
        e8.set(t8, r3);
      }, removeItem(t8) {
        e8.delete(t8);
      }, getKeys: /* @__PURE__ */ __name(() => [...e8.keys()], "getKeys"), clear() {
        e8.clear();
      }, dispose() {
        e8.clear();
      } };
    }, "memory");
    __name(watch$2, "watch$2");
    __name(dispose, "dispose");
    kn = {};
    normalizeKey$1 = /* @__PURE__ */ __name(function(e8) {
      return e8 && e8.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey$1");
    Rn = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(kn)), "getKeys"), hasItem: /* @__PURE__ */ __name((e8) => (e8 = normalizeKey$1(e8), Promise.resolve(e8 in kn)), "hasItem"), getItem: /* @__PURE__ */ __name((e8) => (e8 = normalizeKey$1(e8), Promise.resolve(kn[e8] ? kn[e8].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e8) => (e8 = normalizeKey$1(e8), Promise.resolve(kn[e8] ? kn[e8].meta : {})), "getMeta") };
    Cn = (function(e8 = {}) {
      const t8 = { mounts: { "": e8.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, normalizeItemKey = /* @__PURE__ */ __name((e9) => {
        const t9 = normalizeKey$2(e9);
        if (!t9 || hasDotSegment(t9)) throw new Error(`[unstorage] Invalid key: ${JSON.stringify(e9)}`);
        return t9;
      }, "normalizeItemKey"), normalizeBase2 = /* @__PURE__ */ __name((e9) => {
        const t9 = normalizeBaseKey(e9);
        if (hasDotSegment(t9)) throw new Error(`[unstorage] Invalid base: ${JSON.stringify(e9)}`);
        return t9;
      }, "normalizeBase"), getMount = /* @__PURE__ */ __name((e9) => {
        for (const r4 of t8.mountpoints) if (e9.startsWith(r4)) return { base: r4, relativeKey: e9.slice(r4.length), driver: t8.mounts[r4] };
        return { base: "", relativeKey: e9, driver: t8.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e9, r4) => t8.mountpoints.filter((t9) => t9.startsWith(e9) || r4 && e9.startsWith(t9)).map((r5) => ({ relativeBase: e9.length > r5.length ? e9.slice(r5.length) : void 0, mountpoint: r5, driver: t8.mounts[r5] })), "getMounts"), onChange = /* @__PURE__ */ __name((e9, r4) => {
        if (t8.watching) {
          r4 = normalizeKey$2(r4);
          for (const s5 of t8.watchListeners) s5(e9, r4);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t8.watching) {
          for (const e9 in t8.unwatch) await t8.unwatch[e9]();
          t8.unwatch = {}, t8.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e9, t9, r4) => {
        const s5 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e10) => {
          let t10 = s5.get(e10.base);
          return t10 || (t10 = { driver: e10.driver, base: e10.base, items: [] }, s5.set(e10.base, t10)), t10;
        }, "getBatch");
        for (const r5 of e9) {
          const e10 = "string" == typeof r5, s6 = normalizeItemKey(e10 ? r5 : r5.key), a13 = e10 ? void 0 : r5.value, c5 = e10 || !r5.options ? t9 : { ...t9, ...r5.options }, u9 = getMount(s6);
          getBatch(u9).items.push({ key: s6, value: a13, relativeKey: u9.relativeKey, options: c5 });
        }
        return Promise.all([...s5.values()].map((e10) => r4(e10))).then((e10) => e10.flat());
      }, "runBatch"), r3 = { async hasItem(e9, t9 = {}) {
        e9 = normalizeItemKey(e9);
        const { relativeKey: r4, driver: s5 } = getMount(e9);
        return asyncCall(s5.hasItem, r4, t9);
      }, async getItem(e9, t9 = {}) {
        e9 = normalizeItemKey(e9);
        const { relativeKey: r4, driver: s5 } = getMount(e9);
        return asyncCall(s5.getItem, r4, t9).then((e10) => destr(e10));
      }, getItems: /* @__PURE__ */ __name(async (e9, t9 = {}) => runBatch(e9, t9, (e10) => e10.driver.getItems ? asyncCall(e10.driver.getItems, e10.items.map((e11) => ({ key: e11.relativeKey, options: e11.options })), t9).then((t10) => t10.map((t11) => ({ key: joinKeys(e10.base, t11.key), value: destr(t11.value) }))) : Promise.all(e10.items.map((t10) => asyncCall(e10.driver.getItem, t10.relativeKey, t10.options).then((e11) => ({ key: t10.key, value: destr(e11) }))))), "getItems"), async getItemRaw(e9, t9 = {}) {
        e9 = normalizeItemKey(e9);
        const { relativeKey: r4, driver: s5 } = getMount(e9);
        return s5.getItemRaw ? asyncCall(s5.getItemRaw, r4, t9) : asyncCall(s5.getItem, r4, t9).then((e10) => deserializeRaw(e10));
      }, async setItem(e9, t9, s5 = {}) {
        if (void 0 === t9) return r3.removeItem(e9);
        e9 = normalizeItemKey(e9);
        const { relativeKey: a13, driver: c5 } = getMount(e9);
        c5.setItem && (await asyncCall(c5.setItem, a13, stringify2(t9), s5), c5.watch || onChange("update", e9));
      }, async setItems(e9, t9) {
        await runBatch(e9, t9, async (e10) => {
          if (e10.driver.setItems) return asyncCall(e10.driver.setItems, e10.items.map((e11) => ({ key: e11.relativeKey, value: stringify2(e11.value), options: e11.options })), t9);
          e10.driver.setItem && await Promise.all(e10.items.map((t10) => asyncCall(e10.driver.setItem, t10.relativeKey, stringify2(t10.value), t10.options)));
        });
      }, async setItemRaw(e9, t9, s5 = {}) {
        if (void 0 === t9) return r3.removeItem(e9, s5);
        e9 = normalizeItemKey(e9);
        const { relativeKey: a13, driver: c5 } = getMount(e9);
        if (c5.setItemRaw) await asyncCall(c5.setItemRaw, a13, t9, s5);
        else {
          if (!c5.setItem) return;
          await asyncCall(c5.setItem, a13, serializeRaw(t9), s5);
        }
        c5.watch || onChange("update", e9);
      }, async removeItem(e9, t9 = {}) {
        "boolean" == typeof t9 && (t9 = { removeMeta: t9 }), e9 = normalizeItemKey(e9);
        const { relativeKey: r4, driver: s5 } = getMount(e9);
        s5.removeItem && (await asyncCall(s5.removeItem, r4, t9), (t9.removeMeta || t9.removeMata) && await asyncCall(s5.removeItem, r4 + "$", t9), s5.watch || onChange("remove", e9));
      }, async getMeta(e9, t9 = {}) {
        "boolean" == typeof t9 && (t9 = { nativeOnly: t9 }), e9 = normalizeItemKey(e9);
        const { relativeKey: r4, driver: s5 } = getMount(e9), a13 = /* @__PURE__ */ Object.create(null);
        if (s5.getMeta && Object.assign(a13, await asyncCall(s5.getMeta, r4, t9)), !t9.nativeOnly) {
          const e10 = await asyncCall(s5.getItem, r4 + "$", t9).then((e11) => destr(e11));
          e10 && "object" == typeof e10 && ("string" == typeof e10.atime && (e10.atime = new Date(e10.atime)), "string" == typeof e10.mtime && (e10.mtime = new Date(e10.mtime)), Object.assign(a13, e10));
        }
        return a13;
      }, async setMeta(e9, t9, r4 = {}) {
        return this.setItem(normalizeItemKey(e9) + "$", t9, r4);
      }, async removeMeta(e9, t9 = {}) {
        return this.removeItem(normalizeItemKey(e9) + "$", t9);
      }, async getKeys(e9, t9 = {}) {
        e9 = normalizeBase2(e9);
        const r4 = getMounts(e9, true);
        let s5 = [];
        const a13 = [];
        let c5 = true;
        for (const e10 of r4) {
          e10.driver.flags?.maxDepth || (c5 = false);
          const r5 = await asyncCall(e10.driver.getKeys, e10.relativeBase, t9);
          for (const t10 of r5) {
            const r6 = e10.mountpoint + normalizeKey$2(t10);
            s5.some((e11) => r6.startsWith(e11)) || a13.push(r6);
          }
          s5 = [e10.mountpoint, ...s5.filter((t10) => !t10.startsWith(e10.mountpoint))];
        }
        const u9 = void 0 !== t9.maxDepth && !c5;
        return a13.filter((r5) => (!u9 || (function(e10, t10) {
          if (void 0 === t10) return true;
          let r6 = 0, s6 = e10.indexOf(":");
          for (; s6 > -1; ) r6++, s6 = e10.indexOf(":", s6 + 1);
          return r6 <= t10;
        })(r5, t9.maxDepth)) && (function(e10, t10) {
          return t10 ? e10.startsWith(t10) && "$" !== e10[e10.length - 1] : "$" !== e10[e10.length - 1];
        })(r5, e9));
      }, async clear(e9, t9 = {}) {
        e9 = normalizeBase2(e9), await Promise.all(getMounts(e9, false).map(async (e10) => {
          if (e10.driver.clear) return asyncCall(e10.driver.clear, e10.relativeBase, t9);
          if (e10.driver.removeItem) {
            const r4 = await e10.driver.getKeys(e10.relativeBase || "", t9);
            return Promise.all(r4.map((r5) => e10.driver.removeItem(r5, t9)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t8.mounts).map((e9) => dispose(e9)));
      }, watch: /* @__PURE__ */ __name(async (e9) => (await (async () => {
        if (!t8.watching) {
          t8.watching = true;
          for (const e10 in t8.mounts) t8.unwatch[e10] = await watch$2(t8.mounts[e10], onChange, e10);
        }
      })(), t8.watchListeners.push(e9), async () => {
        t8.watchListeners = t8.watchListeners.filter((t9) => t9 !== e9), 0 === t8.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t8.watchListeners = [], await stopWatch();
      }, mount(e9, s5) {
        if ((e9 = normalizeBase2(e9)) && t8.mounts[e9]) throw new Error(`already mounted at ${e9}`);
        return e9 && (t8.mountpoints.push(e9), t8.mountpoints.sort((e10, t9) => t9.length - e10.length)), t8.mounts[e9] = s5, t8.watching && Promise.resolve(watch$2(s5, onChange, e9)).then((r4) => {
          t8.unwatch[e9] = r4;
        }).catch(console.error), r3;
      }, async unmount(e9, r4 = true) {
        (e9 = normalizeBaseKey(e9)) && t8.mounts[e9] && (t8.watching && e9 in t8.unwatch && (t8.unwatch[e9]?.(), delete t8.unwatch[e9]), r4 && await dispose(t8.mounts[e9]), t8.mountpoints = t8.mountpoints.filter((t9) => t9 !== e9), delete t8.mounts[e9]);
      }, getMount(e9 = "") {
        e9 = normalizeKey$2(e9) + ":";
        const t9 = getMount(e9);
        return { driver: t9.driver, base: t9.base };
      }, getMounts(e9 = "", t9 = {}) {
        e9 = normalizeKey$2(e9);
        return getMounts(e9, t9.parents).map((e10) => ({ driver: e10.driver, base: e10.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e9, t9 = {}) => r3.getKeys(e9, t9), "keys"), get: /* @__PURE__ */ __name((e9, t9 = {}) => r3.getItem(e9, t9), "get"), set: /* @__PURE__ */ __name((e9, t9, s5 = {}) => r3.setItem(e9, t9, s5), "set"), has: /* @__PURE__ */ __name((e9, t9 = {}) => r3.hasItem(e9, t9), "has"), del: /* @__PURE__ */ __name((e9, t9 = {}) => r3.removeItem(e9, t9), "del"), remove: /* @__PURE__ */ __name((e9, t9 = {}) => r3.removeItem(e9, t9), "remove") };
      return r3;
    })({});
    __name(useStorage, "useStorage");
    Cn.mount("/assets", Rn);
    Sn = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    Tn = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    An = [];
    En = class {
      static {
        __name(this, "En");
      }
      _data = new jn();
      _hash = new jn([...Sn]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e8) {
        e8 && this._append(e8);
        const t8 = 8 * this._nDataBytes, r3 = 8 * this._data.sigBytes;
        return this._data.words[r3 >>> 5] |= 128 << 24 - r3 % 32, this._data.words[14 + (r3 + 64 >>> 9 << 4)] = Math.floor(t8 / 4294967296), this._data.words[15 + (r3 + 64 >>> 9 << 4)] = t8, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e8, t8) {
        const r3 = this._hash.words;
        let s5 = r3[0], a13 = r3[1], c5 = r3[2], u9 = r3[3], d7 = r3[4], p6 = r3[5], f6 = r3[6], g9 = r3[7];
        for (let r4 = 0; r4 < 64; r4++) {
          if (r4 < 16) An[r4] = 0 | e8[t8 + r4];
          else {
            const e9 = An[r4 - 15], t9 = (e9 << 25 | e9 >>> 7) ^ (e9 << 14 | e9 >>> 18) ^ e9 >>> 3, s6 = An[r4 - 2], a14 = (s6 << 15 | s6 >>> 17) ^ (s6 << 13 | s6 >>> 19) ^ s6 >>> 10;
            An[r4] = t9 + An[r4 - 7] + a14 + An[r4 - 16];
          }
          const m8 = s5 & a13 ^ s5 & c5 ^ a13 & c5, _7 = (s5 << 30 | s5 >>> 2) ^ (s5 << 19 | s5 >>> 13) ^ (s5 << 10 | s5 >>> 22), x7 = g9 + ((d7 << 26 | d7 >>> 6) ^ (d7 << 21 | d7 >>> 11) ^ (d7 << 7 | d7 >>> 25)) + (d7 & p6 ^ ~d7 & f6) + Tn[r4] + An[r4];
          g9 = f6, f6 = p6, p6 = d7, d7 = u9 + x7 | 0, u9 = c5, c5 = a13, a13 = s5, s5 = x7 + (_7 + m8) | 0;
        }
        r3[0] = r3[0] + s5 | 0, r3[1] = r3[1] + a13 | 0, r3[2] = r3[2] + c5 | 0, r3[3] = r3[3] + u9 | 0, r3[4] = r3[4] + d7 | 0, r3[5] = r3[5] + p6 | 0, r3[6] = r3[6] + f6 | 0, r3[7] = r3[7] + g9 | 0;
      }
      _append(e8) {
        "string" == typeof e8 && (e8 = jn.fromUtf8(e8)), this._data.concat(e8), this._nDataBytes += e8.sigBytes;
      }
      _process(e8) {
        let t8, r3 = this._data.sigBytes / 64;
        r3 = e8 ? Math.ceil(r3) : Math.max((0 | r3) - this._minBufferSize, 0);
        const s5 = 16 * r3, a13 = Math.min(4 * s5, this._data.sigBytes);
        if (s5) {
          for (let e9 = 0; e9 < s5; e9 += 16) this._doProcessBlock(this._data.words, e9);
          t8 = this._data.words.splice(0, s5), this._data.sigBytes -= a13;
        }
        return new jn(t8, a13);
      }
    };
    jn = class WordArray {
      static {
        __name(this, "WordArray");
      }
      words;
      sigBytes;
      constructor(e8, t8) {
        e8 = this.words = e8 || [], this.sigBytes = void 0 === t8 ? 4 * e8.length : t8;
      }
      static fromUtf8(e8) {
        const t8 = unescape(encodeURIComponent(e8)), r3 = t8.length, s5 = [];
        for (let e9 = 0; e9 < r3; e9++) s5[e9 >>> 2] |= (255 & t8.charCodeAt(e9)) << 24 - e9 % 4 * 8;
        return new WordArray(s5, r3);
      }
      toBase64() {
        const e8 = [];
        for (let t8 = 0; t8 < this.sigBytes; t8 += 3) {
          const r3 = (this.words[t8 >>> 2] >>> 24 - t8 % 4 * 8 & 255) << 16 | (this.words[t8 + 1 >>> 2] >>> 24 - (t8 + 1) % 4 * 8 & 255) << 8 | this.words[t8 + 2 >>> 2] >>> 24 - (t8 + 2) % 4 * 8 & 255;
          for (let s5 = 0; s5 < 4 && 8 * t8 + 6 * s5 < 8 * this.sigBytes; s5++) e8.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r3 >>> 6 * (3 - s5) & 63));
        }
        return e8.join("");
      }
      concat(e8) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t8 = 0; t8 < e8.sigBytes; t8++) {
          const r3 = e8.words[t8 >>> 2] >>> 24 - t8 % 4 * 8 & 255;
          this.words[this.sigBytes + t8 >>> 2] |= r3 << 24 - (this.sigBytes + t8) % 4 * 8;
        }
        else for (let t8 = 0; t8 < e8.sigBytes; t8 += 4) this.words[this.sigBytes + t8 >>> 2] = e8.words[t8 >>> 2];
        this.sigBytes += e8.sigBytes;
      }
    };
    Pn = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #s = /* @__PURE__ */ new Map();
        write(e8) {
          this.buff += e8;
        }
        dispatch(e8) {
          return this[null === e8 ? "null" : typeof e8](e8);
        }
        object(e8) {
          if (e8 && "function" == typeof e8.toJSON) return this.object(e8.toJSON());
          const t8 = Object.prototype.toString.call(e8);
          let r3 = "";
          const a13 = t8.length;
          r3 = a13 < 10 ? "unknown:[" + t8 + "]" : t8.slice(8, a13 - 1), r3 = r3.toLowerCase();
          let c5 = null;
          if (void 0 !== (c5 = this.#s.get(e8))) return this.dispatch("[CIRCULAR:" + c5 + "]");
          if (this.#s.set(e8, this.#s.size), void 0 !== s4 && s4.isBuffer && s4.isBuffer(e8)) return this.write("buffer:"), this.write(e8.toString("utf8"));
          if ("object" !== r3 && "function" !== r3 && "asyncfunction" !== r3) this[r3] ? this[r3](e8) : this.unknown(e8, r3);
          else {
            const t9 = Object.keys(e8).sort(), r4 = [];
            this.write("object:" + (t9.length + r4.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t10) => {
              this.dispatch(t10), this.write(":"), this.dispatch(e8[t10]), this.write(",");
            }, "dispatchForKey");
            for (const e9 of t9) dispatchForKey(e9);
            for (const e9 of r4) dispatchForKey(e9);
          }
        }
        array(e8, t8) {
          if (t8 = void 0 !== t8 && t8, this.write("array:" + e8.length + ":"), !t8 || e8.length <= 1) {
            for (const t9 of e8) this.dispatch(t9);
            return;
          }
          const r3 = /* @__PURE__ */ new Map(), s5 = e8.map((e9) => {
            const t9 = new Hasher2();
            t9.dispatch(e9);
            for (const [e10, s6] of t9.#s) r3.set(e10, s6);
            return t9.toString();
          });
          return this.#s = r3, s5.sort(), this.array(s5, false);
        }
        date(e8) {
          return this.write("date:" + e8.toJSON());
        }
        symbol(e8) {
          return this.write("symbol:" + e8.toString());
        }
        unknown(e8, t8) {
          if (this.write(t8), e8) return this.write(":"), e8 && "function" == typeof e8.entries ? this.array([...e8.entries()], true) : void 0;
        }
        error(e8) {
          return this.write("error:" + e8.toString());
        }
        boolean(e8) {
          return this.write("bool:" + e8);
        }
        string(e8) {
          this.write("string:" + e8.length + ":"), this.write(e8);
        }
        function(e8) {
          this.write("fn:"), !(function(e9) {
            if ("function" != typeof e9) return false;
            return "[native code] }" === Function.prototype.toString.call(e9).slice(-15);
          })(e8) ? this.dispatch(e8.toString()) : this.dispatch("[native]");
        }
        number(e8) {
          return this.write("number:" + e8);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e8) {
          return this.write("regex:" + e8.toString());
        }
        arraybuffer(e8) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e8));
        }
        url(e8) {
          return this.write("url:" + e8.toString());
        }
        map(e8) {
          this.write("map:");
          const t8 = [...e8];
          return this.array(t8, false);
        }
        set(e8) {
          this.write("set:");
          const t8 = [...e8];
          return this.array(t8, false);
        }
        bigint(e8) {
          return this.write("bigint:" + e8.toString());
        }
      }
      for (const e8 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e8] = function(t8) {
        return this.write(e8 + ":"), this.array([...t8], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e8, t8 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r3 = (t8.varies || []).filter(Boolean).map((e9) => e9.toLowerCase()).sort(), s5 = { ...t8, getKey: /* @__PURE__ */ __name(async (e9) => {
        const s6 = await t8.getKey?.(e9);
        if (s6) return escapeKey(s6);
        const a14 = e9.node.req.originalUrl || e9.node.req.url || e9.path;
        let c5;
        try {
          c5 = escapeKey(decodeURI(parseURL(a14).pathname)).slice(0, 16) || "index";
        } catch {
          c5 = "-";
        }
        return [`${c5}.${hash(a14)}`, ...r3.map((t9) => [t9, e9.node.req.headers[t9]]).map(([e10, t9]) => `${escapeKey(e10)}.${hash(t9)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e9) => !!e9.value && (!(e9.value.code >= 400) && (void 0 !== e9.value.body && ("undefined" !== e9.value.headers.etag && "undefined" !== e9.value.headers["last-modified"]))), "validate"), group: t8.group || "nitro/handlers", integrity: t8.integrity || hash([e8, t8]) }, a13 = (function(e9, t9 = {}) {
        return defineCachedFunction(e9, t9);
      })(async (a14) => {
        const c5 = {};
        for (const e9 of r3) {
          const t9 = a14.node.req.headers[e9];
          void 0 !== t9 && (c5[e9] = t9);
        }
        const u9 = cloneWithProxy(a14.node.req, { headers: c5 }), d7 = {};
        let p6;
        const f6 = createEvent(u9, cloneWithProxy(a14.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e9) => d7[e9], "getHeader"), setHeader(e9, t9) {
          return d7[e9] = t9, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d7), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e9) => e9 in d7, "hasHeader"), removeHeader(e9) {
          delete d7[e9];
        }, getHeaders: /* @__PURE__ */ __name(() => d7, "getHeaders"), end(e9, t9, r4) {
          return "string" == typeof e9 && (p6 = e9), "function" == typeof t9 && t9(), "function" == typeof r4 && r4(), this;
        }, write: /* @__PURE__ */ __name((e9, t9, r4) => ("string" == typeof e9 && (p6 = e9), "function" == typeof t9 && t9(void 0), "function" == typeof r4 && r4(), true), "write"), writeHead(e9, t9) {
          if (this.statusCode = e9, t9) {
            if (Array.isArray(t9) || "string" == typeof t9) throw new TypeError("Raw headers  is not supported.");
            for (const e10 in t9) {
              const r4 = t9[e10];
              void 0 !== r4 && this.setHeader(e10, r4);
            }
          }
          return this;
        } }));
        f6._path = a14._path, f6.fetch = (e9, t9) => fetchWithEvent(f6, e9, t9, { fetch: useNitroApp().localFetch }), f6.$fetch = (e9, t9) => fetchWithEvent(f6, e9, t9, { fetch: globalThis.$fetch }), f6.waitUntil = a14.waitUntil, f6.context = a14.context, f6.context.cache = { options: s5 };
        const g9 = await e8(f6) || p6, m8 = f6.node.res.getHeaders();
        m8.etag = String(m8.Etag || m8.etag || `W/"${hash(g9)}"`), m8["last-modified"] = String(m8["Last-Modified"] || m8["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _7 = [];
        t8.swr ? (t8.maxAge && _7.push(`s-maxage=${t8.maxAge}`), t8.staleMaxAge ? _7.push(`stale-while-revalidate=${t8.staleMaxAge}`) : _7.push("stale-while-revalidate")) : t8.maxAge && _7.push(`max-age=${t8.maxAge}`), _7.length > 0 && (m8["cache-control"] = _7.join(", "));
        return { code: f6.node.res.statusCode, headers: m8, body: g9 };
      }, s5);
      return defineEventHandler(async (r4) => {
        if (t8.headersOnly) {
          if (handleCacheHeaders(r4, { maxAge: t8.maxAge })) return;
          return e8(r4);
        }
        const s6 = await a13(r4);
        if (r4.node.res.headersSent || r4.node.res.writableEnded) return s6.body;
        if (!handleCacheHeaders(r4, { modifiedTime: new Date(s6.headers["last-modified"]), etag: s6.headers.etag, maxAge: t8.maxAge })) {
          r4.node.res.statusCode = s6.code;
          for (const e9 in s6.headers) {
            const t9 = s6.headers[e9];
            "set-cookie" === e9 ? r4.node.res.appendHeader(e9, splitCookiesString(t9)) : void 0 !== t9 && r4.node.res.setHeader(e9, t9);
          }
          return s6.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    Hn = Wt2({});
    On = /\d/;
    Mn = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    __name(applyEnv, "applyEnv");
    In = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    Bn = { app: { baseURL: "/", buildId: "3e964c62-4f23-49e8-9f1f-3aa3fd349fd9", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, appSecret: "", public: {} };
    Nn = { prefix: "NITRO_", altPrefix: Bn.nitro.envPrefix ?? m7.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Bn.nitro.envExpansion ?? m7.env.NITRO_ENV_EXPANSION ?? false };
    Ln = _deepFreeze(applyEnv(klona(Bn), Nn));
    __name(useRuntimeConfig2, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(Hn)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e8, t8) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r3 = useRuntimeConfig2();
      if (t8 in r3) return r3[t8];
    }, "get") });
    Dn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ln ? ln : {};
    zn = "__unctx__";
    $n = Dn[zn] || (Dn[zn] = /* @__PURE__ */ (function(e8 = {}) {
      const t8 = {};
      return { get: /* @__PURE__ */ __name((r3, s5 = {}) => (t8[r3] || (t8[r3] = (function(e9 = {}) {
        let t9, r4 = false;
        const checkConflict = /* @__PURE__ */ __name((e10) => {
          if (t9 && t9 !== e10) throw new Error("Context conflict");
        }, "checkConflict");
        let s6;
        if (e9.asyncContext) {
          const t10 = e9.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t10 ? s6 = new t10() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s6) {
            const e10 = s6.getStore();
            if (void 0 !== e10) return e10;
          }
          return t9;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e10 = _getCurrentInstance();
          if (void 0 === e10) throw new Error("Context is not available");
          return e10;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e10, s7) => {
          s7 || checkConflict(e10), t9 = e10, r4 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t9 = void 0, r4 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e10, a13) => {
          checkConflict(e10), t9 = e10;
          try {
            return s6 ? s6.run(e10, a13) : a13();
          } finally {
            r4 || (t9 = void 0);
          }
        }, "call"), async callAsync(e10, a13) {
          t9 = e10;
          const onRestore = /* @__PURE__ */ __name(() => {
            t9 = e10;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t9 === e10 ? onRestore : void 0, "onLeave");
          Un.add(onLeave);
          try {
            const c5 = s6 ? s6.run(e10, a13) : a13();
            return r4 || (t9 = void 0), await c5;
          } finally {
            Un.delete(onLeave);
          }
        } };
      })({ ...e8, ...s5 })), t8[r3]), "get") };
    })());
    Fn = "__unctx_async_handlers__";
    Un = Dn[Fn] || (Dn[Fn] = /* @__PURE__ */ new Set());
    __name(isPathInScope, "isPathInScope");
    ((e8, t8 = {}) => {
      $n.get(e8, t8);
    })("nitro-app", { asyncContext: false, AsyncLocalStorage: void 0 });
    Wn = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    qn = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    Vn = /%7C/g;
    Kn = /%5B/g;
    Zn = /%5D/g;
    Jn = /%252F/gi;
    Gn = /#/g;
    Qn = /\?/g;
    Yn = /(?:^|\/)\.{1,2}(?:\/|$)/;
    __name(encodeVueRouterPath, "encodeVueRouterPath");
    Xn = class {
      static {
        __name(this, "Xn");
      }
      res;
      constructor(e8) {
        this.res = e8;
      }
      get(e8) {
        const t8 = this.res.getHeader(e8);
        return void 0 === t8 ? null : Array.isArray(t8) ? t8.join(", ") : String(t8);
      }
      has(e8) {
        return this.res.hasHeader(e8);
      }
      set(e8, t8) {
        this.res.setHeader(e8, t8);
      }
      append(e8, t8) {
        const r3 = this.res.getHeader(e8);
        void 0 !== r3 ? this.res.setHeader(e8, Array.isArray(r3) ? [...r3, t8] : [String(r3), t8]) : this.res.setHeader(e8, t8);
      }
      delete(e8) {
        this.res.removeHeader(e8);
      }
      getSetCookie() {
        const e8 = this.res.getHeader("set-cookie");
        return void 0 === e8 ? [] : Array.isArray(e8) ? e8.map(String) : [String(e8)];
      }
      *entries() {
        const e8 = this.res.getHeaders();
        for (const t8 of Object.keys(e8).sort()) {
          const r3 = e8[t8];
          if (void 0 !== r3) if ("set-cookie" === t8 && Array.isArray(r3)) for (const e9 of r3) yield [t8, e9];
          else yield [t8, Array.isArray(r3) ? r3.join(", ") : String(r3)];
        }
      }
      *keys() {
        for (const [e8] of this.entries()) yield e8;
      }
      *values() {
        for (const [, e8] of this.entries()) yield e8;
      }
      forEach(e8, t8) {
        for (const [r3, s5] of this.entries()) e8.call(t8, s5, r3, this);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
    er = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    tr = /* @__PURE__ */ new Set(["arrayBuffer", "blob", "bytes", "formData", "json", "text"]);
    __name(toWebRequest$1, "toWebRequest$1");
    __name(toRequestSignal, "toRequestSignal");
    __name(toBufferedBodyStream, "toBufferedBodyStream");
    __name(getFetchedRequestContext, "getFetchedRequestContext");
    __name(toRequestEvent, "toRequestEvent");
    __name(hasReqHeader, "hasReqHeader");
    __name(defineHeadPlugin, "defineHeadPlugin");
    nr = /\\/g;
    rr = /</g;
    sr = /"/g;
    or = /%\w+(?:\.\w+)?/g;
    ir = "%separator";
    __name(processTemplateParams, "processTemplateParams");
    sortTags$1 = /* @__PURE__ */ __name((e8, t8) => e8._w === t8._w ? e8._p - t8._p : e8._w - t8._w, "sortTags$1");
    formatKey = /* @__PURE__ */ __name((e8) => e8.includes(":key") ? e8 : e8.split(":").join(":key:"), "formatKey");
    ar = defineHeadPlugin({ key: "aliasSorting", hooks: { "tags:resolve": /* @__PURE__ */ __name((e8) => {
      let t8 = false;
      for (const r3 of e8.tags) {
        const s5 = r3.tagPriority;
        if (!s5) continue;
        const a13 = String(s5);
        if (a13.startsWith("before:")) {
          const s6 = formatKey(a13.slice(7)), c5 = e8.tagMap.get(s6);
          c5 && ("number" == typeof c5.tagPriority && (r3.tagPriority = c5.tagPriority), r3._p = c5._p - 1, t8 = true);
        } else if (a13.startsWith("after:")) {
          const s6 = formatKey(a13.slice(6)), c5 = e8.tagMap.get(s6);
          c5 && ("number" == typeof c5.tagPriority && (r3.tagPriority = c5.tagPriority), r3._p = c5._p + 1, t8 = true);
        }
      }
      t8 && (e8.tags = e8.tags.sort(sortTags$1));
    }, "tags:resolve") } });
    cr = defineHeadPlugin({ key: "deprecations", hooks: { "entries:normalize": /* @__PURE__ */ __name(({ tags: e8 }) => {
      for (const t8 of e8) t8.props.children && (t8.innerHTML = t8.props.children, delete t8.props.children), t8.props.hid && (t8.key = t8.props.hid, delete t8.props.hid), t8.props.vmid && (t8.key = t8.props.vmid, delete t8.props.vmid), "body" in t8.props && (t8.props.body && (t8.tagPosition = "bodyClose"), delete t8.props.body), null != t8.props.renderPriority && (t8.tagPriority = t8.props.renderPriority, delete t8.props.renderPriority);
    }, "entries:normalize") } });
    __name(isThenable, "isThenable");
    __name(walkArrayPromises, "walkArrayPromises");
    __name(walkObjectPromises, "walkObjectPromises");
    __name(walkPromises, "walkPromises");
    lr = defineHeadPlugin((e8) => {
      const t8 = /* @__PURE__ */ new WeakMap();
      return { key: "promises", hooks: { "entries:resolve": /* @__PURE__ */ __name((r3) => {
        for (let s5 = r3.entries.length - 1; s5 >= 0; s5--) {
          const a13 = r3.entries[s5], c5 = a13.input;
          if (t8.get(a13) === c5) {
            r3.entries.splice(s5, 1);
            continue;
          }
          const u9 = walkPromises(c5);
          isThenable(u9) ? (t8.set(a13, c5), r3.entries.splice(s5, 1), Promise.resolve(u9).then((r4) => {
            t8.get(a13) === c5 && (t8.delete(a13), a13.input = r4, delete a13._tags, e8.invalidate?.());
          }, () => {
            t8.get(a13) === c5 && t8.delete(a13);
          })) : t8.delete(a13);
        }
      }, "entries:resolve") } };
    }, "promises");
    ur = { meta: "content", link: "href", htmlAttrs: "lang" };
    dr = ["innerHTML", "textContent"];
    __name(processIfNeeded, "processIfNeeded");
    pr = defineHeadPlugin((e8) => ({ key: "template-params", hooks: { "tags:resolve": /* @__PURE__ */ __name(({ tagMap: t8, tags: r3 }) => {
      const s5 = t8.get("templateParams")?.props || {}, a13 = s5.separator || "|";
      delete s5.separator, s5.pageTitle = processIfNeeded(s5.pageTitle || e8._title || "", s5, a13);
      for (const e9 of r3) {
        if (false === e9.processTemplateParams) continue;
        const t9 = ur[e9.tag];
        if (t9 && "string" == typeof e9.props[t9]) e9.props[t9] = processIfNeeded(e9.props[t9], s5, a13);
        else if (e9.processTemplateParams || "titleTemplate" === e9.tag || "title" === e9.tag) for (const t10 of dr) "string" == typeof e9[t10] && (e9[t10] = processIfNeeded(e9[t10], s5, a13, "script" === e9.tag && "string" == typeof e9.props.type && e9.props.type.endsWith("json")));
      }
      e8._templateParams = s5, e8._separator = a13;
    }, "tags:resolve"), "tags:afterResolve": /* @__PURE__ */ __name(({ tagMap: t8 }) => {
      const r3 = t8.get("title");
      r3?.textContent && false !== r3.processTemplateParams && (r3.textContent = processIfNeeded(r3.textContent, e8._templateParams, e8._separator));
    }, "tags:afterResolve") } }), "template-params");
    __name(createUnhead, "createUnhead");
    fr = /* @__PURE__ */ new Set(["meta", "link", "base"]);
    hr = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
    gr = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
    mr = /* @__PURE__ */ new Set(["base", "meta", "link", "style", "script", "noscript"]);
    yr = /* @__PURE__ */ new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
    vr = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
    _r = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
    br = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
    wr = /* @__PURE__ */ new Set(["theme-color", "google-site-verification", "author", "og:locale:alternate", "og:image", "og:video", "og:audio", "article:author", "article:tag", "book:author", "book:tag", "twitter:image"]);
    xr = { critical: -8, high: -1, low: 2 };
    hasContent = /* @__PURE__ */ __name((e8) => "number" == typeof e8 ? Number.isFinite(e8) : e8, "hasContent");
    __name(isUnsafeKey, "isUnsafeKey");
    __name(flatHooks, "flatHooks");
    kr = (() => {
      if (console.createTask) return console.createTask;
      const e8 = { run: /* @__PURE__ */ __name((e9) => e9(), "run") };
      return () => e8;
    })();
    __name(callHooks, "callHooks");
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Rr = class {
      static {
        __name(this, "Rr");
      }
      _hooks;
      _before;
      _after;
      _deprecatedHooks;
      _deprecatedMessages;
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e8, t8, r3 = {}) {
        if (!e8 || "function" != typeof t8) return () => {
        };
        const s5 = e8;
        let a13;
        for (; this._deprecatedHooks[e8]; ) a13 = this._deprecatedHooks[e8], e8 = a13.to;
        if (a13 && !r3.allowDeprecated) {
          let e9 = a13.message;
          e9 || (e9 = `${s5} hook has been deprecated` + (a13.to ? `, please use ${a13.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e9) || (console.warn(e9), this._deprecatedMessages.add(e9));
        }
        if (!t8.name) try {
          Object.defineProperty(t8, "name", { get: /* @__PURE__ */ __name(() => "_" + e8.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e8] = this._hooks[e8] || [], this._hooks[e8].push(t8), () => {
          t8 && (this.removeHook(e8, t8), t8 = void 0);
        };
      }
      hookOnce(e8, t8) {
        let r3, _function = /* @__PURE__ */ __name((...e9) => ("function" == typeof r3 && r3(), r3 = void 0, _function = void 0, t8(...e9)), "_function");
        return r3 = this.hook(e8, _function), r3;
      }
      removeHook(e8, t8) {
        const r3 = this._hooks[e8];
        if (r3) {
          const s5 = r3.indexOf(t8);
          -1 !== s5 && r3.splice(s5, 1), 0 === r3.length && (this._hooks[e8] = void 0);
        }
      }
      clearHook(e8) {
        this._hooks[e8] = void 0;
      }
      deprecateHook(e8, t8) {
        this._deprecatedHooks[e8] = "string" == typeof t8 ? { to: t8 } : t8;
        const r3 = this._hooks[e8] || [];
        this._hooks[e8] = void 0;
        for (const t9 of r3) this.hook(e8, t9);
      }
      deprecateHooks(e8) {
        for (const t8 in e8) this.deprecateHook(t8, e8[t8]);
      }
      addHooks(e8) {
        const t8 = flatHooks(e8), r3 = Object.keys(t8).map((e9) => this.hook(e9, t8[e9]));
        return () => {
          for (const e9 of r3) e9();
          r3.length = 0;
        };
      }
      removeHooks(e8) {
        const t8 = flatHooks(e8);
        for (const e9 in t8) this.removeHook(e9, t8[e9]);
      }
      removeAllHooks() {
        this._hooks = {};
      }
      callHook(e8, ...t8) {
        return this.callHookWith(serialTaskCaller, e8, t8);
      }
      callHookParallel(e8, ...t8) {
        return this.callHookWith(parallelTaskCaller, e8, t8);
      }
      callHookWith(e8, t8, r3) {
        const s5 = this._before || this._after ? { name: t8, args: r3, context: {} } : void 0;
        this._before && callEachWith(this._before, s5);
        const a13 = e8(this._hooks[t8] ? [...this._hooks[t8]] : [], r3, t8);
        return a13 instanceof Promise ? a13.finally(() => {
          this._after && s5 && callEachWith(this._after, s5);
        }) : (this._after && s5 && callEachWith(this._after, s5), a13);
      }
      beforeEach(e8) {
        return this._before = this._before || [], this._before.push(e8), () => {
          if (void 0 !== this._before) {
            const t8 = this._before.indexOf(e8);
            -1 !== t8 && this._before.splice(t8, 1);
          }
        };
      }
      afterEach(e8) {
        return this._after = this._after || [], this._after.push(e8), () => {
          if (void 0 !== this._after) {
            const t8 = this._after.indexOf(e8);
            -1 !== t8 && this._after.splice(t8, 1);
          }
        };
      }
    };
    __name(createHooks$1, "createHooks$1");
    Cr = class {
      static {
        __name(this, "Cr");
      }
      _hooks;
      constructor() {
        this._hooks = {};
      }
      hook(e8, t8) {
        return e8 && "function" == typeof t8 ? (this._hooks[e8] = this._hooks[e8] || [], this._hooks[e8].push(t8), () => {
          t8 && (this.removeHook(e8, t8), t8 = void 0);
        }) : () => {
        };
      }
      removeHook(e8, t8) {
        const r3 = this._hooks[e8];
        if (r3) {
          const s5 = r3.indexOf(t8);
          -1 !== s5 && r3.splice(s5, 1), 0 === r3.length && (this._hooks[e8] = void 0);
        }
      }
      callHook(e8, ...t8) {
        const r3 = this._hooks[e8];
        if (r3 && 0 !== r3.length) return callHooks(r3.slice(), t8, 0);
      }
    };
    __name(callHook$1, "callHook$1");
    Sr = /^(?:viewport|description|keywords|robots)$/;
    Tr = ["name", "property", "http-equiv"];
    __name(isMetaArrayDupeKey, "isMetaArrayDupeKey");
    __name(dedupeKey, "dedupeKey");
    __name(hashTag, "hashTag");
    __name(walkResolver, "walkResolver");
    Ar = /[\s"'<>/=\x00-\x1F\x7F]/;
    __name(normalizeStyleClassProps, "normalizeStyleClassProps");
    __name(normalizeTag, "normalizeTag");
    __name(pushNormalizedTag, "pushNormalizedTag");
    __name(normalizeEntryToTags, "normalizeEntryToTags");
    Er = /</g;
    jr = /<\/script/g;
    sortTags = /* @__PURE__ */ __name((e8, t8) => e8._w === t8._w ? e8._p - t8._p : e8._w - t8._w, "sortTags");
    DEFAULT_TAG_WEIGHT = /* @__PURE__ */ __name(() => 100, "DEFAULT_TAG_WEIGHT");
    __name(isEmptyProps, "isEmptyProps");
    Pr = /^tags:|:render/;
    __name(syncEntryHookCache, "syncEntryHookCache");
    __name(cloneTagsInPlace, "cloneTagsInPlace");
    __name(resolveTags, "resolveTags");
    isTruthy = /* @__PURE__ */ __name((e8) => "" === e8 || true === e8, "isTruthy");
    __name(capoTagWeight, "capoTagWeight");
    Hr = /"/g;
    __name(encodeAttribute, "encodeAttribute");
    __name(propsToString, "propsToString");
    Or = /[&<>"'/]/g;
    Mr = {};
    Ir = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" };
    __name(tagToString, "tagToString");
    __name(ssrRenderTags, "ssrRenderTags");
    __name(createServerRenderer, "createServerRenderer");
    __name(renderSSRHead, "renderSSRHead");
    Br = { htmlAttrs: { lang: "en" }, meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }] };
    Nr = Object.assign((e8, t8) => e8 && e8.startsWith("on") && "function" == typeof t8 ? `this.dataset.${e8}fired = true` : t8, { _static: true });
    __name(createHead$1, "createHead$1");
    __name(makeMap, "makeMap");
    Dr = {};
    zr = [];
    NOOP = /* @__PURE__ */ __name(() => {
    }, "NOOP");
    NO = /* @__PURE__ */ __name(() => false, "NO");
    isOn = /* @__PURE__ */ __name((e8) => 111 === e8.charCodeAt(0) && 110 === e8.charCodeAt(1) && (e8.charCodeAt(2) > 122 || e8.charCodeAt(2) < 97), "isOn");
    isModelListener = /* @__PURE__ */ __name((e8) => e8.startsWith("onUpdate:"), "isModelListener");
    $r = Object.assign;
    remove = /* @__PURE__ */ __name((e8, t8) => {
      const r3 = e8.indexOf(t8);
      r3 > -1 && e8.splice(r3, 1);
    }, "remove");
    Fr = Object.prototype.hasOwnProperty;
    hasOwn = /* @__PURE__ */ __name((e8, t8) => Fr.call(e8, t8), "hasOwn");
    Ur = Array.isArray;
    isMap = /* @__PURE__ */ __name((e8) => "[object Map]" === toTypeString(e8), "isMap");
    isSet = /* @__PURE__ */ __name((e8) => "[object Set]" === toTypeString(e8), "isSet");
    isDate = /* @__PURE__ */ __name((e8) => "[object Date]" === toTypeString(e8), "isDate");
    isFunction = /* @__PURE__ */ __name((e8) => "function" == typeof e8, "isFunction");
    isString = /* @__PURE__ */ __name((e8) => "string" == typeof e8, "isString");
    isSymbol = /* @__PURE__ */ __name((e8) => "symbol" == typeof e8, "isSymbol");
    isObject = /* @__PURE__ */ __name((e8) => null !== e8 && "object" == typeof e8, "isObject");
    isPromise = /* @__PURE__ */ __name((e8) => (isObject(e8) || isFunction(e8)) && isFunction(e8.then) && isFunction(e8.catch), "isPromise");
    Wr = Object.prototype.toString;
    toTypeString = /* @__PURE__ */ __name((e8) => Wr.call(e8), "toTypeString");
    isPlainObject2 = /* @__PURE__ */ __name((e8) => "[object Object]" === toTypeString(e8), "isPlainObject");
    isIntegerKey = /* @__PURE__ */ __name((e8) => isString(e8) && "NaN" !== e8 && "-" !== e8[0] && "" + parseInt(e8, 10) === e8, "isIntegerKey");
    qr = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    cacheStringFunction = /* @__PURE__ */ __name((e8) => {
      const t8 = /* @__PURE__ */ Object.create(null);
      return (r3) => t8[r3] || (t8[r3] = e8(r3));
    }, "cacheStringFunction");
    Vr = /-\w/g;
    Kr = cacheStringFunction((e8) => e8.replace(Vr, (e9) => e9.slice(1).toUpperCase()));
    Zr = /\B([A-Z])/g;
    Jr = cacheStringFunction((e8) => e8.replace(Zr, "-$1").toLowerCase());
    Gr = cacheStringFunction((e8) => e8.charAt(0).toUpperCase() + e8.slice(1));
    Qr = cacheStringFunction((e8) => e8 ? `on${Gr(e8)}` : "");
    hasChanged = /* @__PURE__ */ __name((e8, t8) => !Object.is(e8, t8), "hasChanged");
    invokeArrayFns = /* @__PURE__ */ __name((e8, ...t8) => {
      for (let r3 = 0; r3 < e8.length; r3++) e8[r3](...t8);
    }, "invokeArrayFns");
    def = /* @__PURE__ */ __name((e8, t8, r3, s5 = false) => {
      Object.defineProperty(e8, t8, { configurable: true, enumerable: false, writable: s5, value: r3 });
    }, "def");
    looseToNumber = /* @__PURE__ */ __name((e8) => {
      const t8 = parseFloat(e8);
      return isNaN(t8) ? e8 : t8;
    }, "looseToNumber");
    getGlobalThis = /* @__PURE__ */ __name(() => Yr || (Yr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ln ? ln : {}), "getGlobalThis");
    __name(normalizeStyle, "normalizeStyle");
    Xr = /;(?![^(]*\))/g;
    es = /:([^]+)/;
    ts = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
    __name(parseStringStyle, "parseStringStyle");
    __name(stringifyStyle, "stringifyStyle");
    __name(normalizeClass, "normalizeClass");
    ns = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    rs = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    ss = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly";
    os = makeMap(ss);
    is = makeMap(ss + ",async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    __name(includeBooleanAttr, "includeBooleanAttr");
    as = /[>/="'\u0009\u000a\u000c\u000d\u0020]/;
    cs = {};
    __name(isSSRSafeAttrName, "isSSRSafeAttrName");
    ls = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    __name(isRenderableAttrValue, "isRenderableAttrValue");
    us = /["'&<>]/;
    __name(escapeHtml, "escapeHtml");
    ds = /^(?:-?>)+|<!--|-->|--!>|<!-$/g;
    __name(escapeHtmlComment, "escapeHtmlComment");
    __name(looseCompareArrays, "looseCompareArrays");
    __name(looseCompareCollections, "looseCompareCollections");
    __name(looseCompareObjects, "looseCompareObjects");
    __name(looseCompareNested, "looseCompareNested");
    __name(looseEqual, "looseEqual");
    __name(looseIndexOf, "looseIndexOf");
    isRef$1 = /* @__PURE__ */ __name((e8) => !(!e8 || true !== e8.__v_isRef), "isRef$1");
    toDisplayString = /* @__PURE__ */ __name((e8) => isString(e8) ? e8 : null == e8 ? "" : Ur(e8) || isObject(e8) && (e8.toString === Wr || !isFunction(e8.toString)) ? isRef$1(e8) ? toDisplayString(e8.value) : JSON.stringify(e8, replacer, 2) : String(e8), "toDisplayString");
    replacer = /* @__PURE__ */ __name((e8, t8) => isRef$1(t8) ? replacer(e8, t8.value) : isMap(t8) ? { [`Map(${t8.size})`]: [...t8.entries()].reduce((e9, [t9, r3], s5) => (e9[stringifySymbol(t9, s5) + " =>"] = r3, e9), {}) } : isSet(t8) ? { [`Set(${t8.size})`]: [...t8.values()].map((e9) => stringifySymbol(e9)) } : isSymbol(t8) ? stringifySymbol(t8) : !isObject(t8) || Ur(t8) || isPlainObject2(t8) ? t8 : String(t8), "replacer");
    stringifySymbol = /* @__PURE__ */ __name((e8, t8 = "") => {
      var r3;
      return isSymbol(e8) ? `Symbol(${null != (r3 = e8.description) ? r3 : t8})` : e8;
    }, "stringifySymbol");
    __name(normalizeCssVarValue, "normalizeCssVarValue");
    EffectScope = class {
      static {
        __name(this, "EffectScope");
      }
      constructor(e8 = false) {
        this.detached = e8, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this._warnOnRun = true, this.__v_skip = true, !e8 && ps && (ps.active ? (this.parent = ps, this.index = (ps.scopes || (ps.scopes = [])).push(this) - 1) : (this._active = false, this._warnOnRun = false));
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          let e8, t8;
          if (this._isPaused = true, this.scopes) {
            const r3 = this.scopes.slice();
            for (e8 = 0, t8 = r3.length; e8 < t8; e8++) r3[e8].pause();
          }
          for (e8 = 0, t8 = this.effects.length; e8 < t8; e8++) this.effects[e8].pause();
        }
      }
      resume() {
        if (this._active && this._isPaused) {
          let e8, t8;
          if (this._isPaused = false, this.scopes) {
            const r4 = this.scopes.slice();
            for (e8 = 0, t8 = r4.length; e8 < t8; e8++) r4[e8].resume();
          }
          const r3 = this.effects.slice();
          for (e8 = 0, t8 = r3.length; e8 < t8; e8++) r3[e8].resume();
        }
      }
      run(e8) {
        if (this._active) {
          const t8 = ps;
          try {
            return ps = this, e8();
          } finally {
            ps = t8;
          }
        }
      }
      on() {
        1 === ++this._on && (this.prevScope = ps, ps = this);
      }
      off() {
        if (this._on > 0 && 0 === --this._on) {
          if (ps === this) ps = this.prevScope;
          else {
            let e8 = ps;
            for (; e8; ) {
              if (e8.prevScope === this) {
                e8.prevScope = this.prevScope;
                break;
              }
              e8 = e8.prevScope;
            }
          }
          this.prevScope = void 0;
        }
      }
      stop(e8) {
        if (this._active) {
          let t8, r3;
          for (this._active = false, t8 = 0, r3 = this.effects.length; t8 < r3; t8++) this.effects[t8].stop();
          for (this.effects.length = 0, t8 = 0, r3 = this.cleanups.length; t8 < r3; t8++) this.cleanups[t8]();
          if (this.cleanups.length = 0, this.scopes) {
            const e9 = this.scopes.slice();
            for (t8 = 0, r3 = e9.length; t8 < r3; t8++) e9[t8].stop(true);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !e8) {
            const e9 = this.parent.scopes.pop();
            e9 && e9 !== this && (this.parent.scopes[this.index] = e9, e9.index = this.index);
          }
          this.parent = void 0;
        }
      }
    };
    __name(effectScope, "effectScope");
    __name(getCurrentScope, "getCurrentScope");
    __name(onScopeDispose, "onScopeDispose");
    hs = /* @__PURE__ */ new WeakSet();
    ReactiveEffect = class {
      static {
        __name(this, "ReactiveEffect");
      }
      constructor(e8) {
        this.fn = e8, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ps && (ps.active ? ps.effects.push(this) : this.flags &= -2);
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        64 & this.flags && (this.flags &= -65, hs.has(this) && (hs.delete(this), this.trigger()));
      }
      notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || batch(this);
      }
      run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, cleanupEffect(this), prepareDeps(this);
        const e8 = fs, t8 = vs;
        fs = this, vs = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this), fs = e8, vs = t8, this.flags &= -3;
        }
      }
      stop() {
        if (1 & this.flags) {
          for (let e8 = this.deps; e8; e8 = e8.nextDep) removeSub(e8);
          this.deps = this.depsTail = void 0, cleanupEffect(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
      trigger() {
        64 & this.flags ? hs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
      runIfDirty() {
        isDirty(this) && this.run();
      }
      get dirty() {
        return isDirty(this);
      }
    };
    ys = 0;
    __name(batch, "batch");
    __name(startBatch, "startBatch");
    __name(endBatch, "endBatch");
    __name(prepareDeps, "prepareDeps");
    __name(cleanupDeps, "cleanupDeps");
    __name(isDirty, "isDirty");
    __name(refreshComputed, "refreshComputed");
    __name(removeSub, "removeSub");
    __name(removeDep, "removeDep");
    vs = true;
    _s = [];
    __name(pauseTracking, "pauseTracking");
    __name(resetTracking, "resetTracking");
    __name(cleanupEffect, "cleanupEffect");
    bs = 0;
    Link = class {
      static {
        __name(this, "Link");
      }
      constructor(e8, t8) {
        this.sub = e8, this.dep = t8, this.version = t8.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    Dep = class {
      static {
        __name(this, "Dep");
      }
      constructor(e8) {
        this.computed = e8, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
      }
      track(e8) {
        if (!fs || !vs || fs === this.computed) return;
        let t8 = this.activeLink;
        if (void 0 === t8 || t8.sub !== fs) t8 = this.activeLink = new Link(fs, this), fs.deps ? (t8.prevDep = fs.depsTail, fs.depsTail.nextDep = t8, fs.depsTail = t8) : fs.deps = fs.depsTail = t8, addSub(t8);
        else if (-1 === t8.version && (t8.version = this.version, t8.nextDep)) {
          const e9 = t8.nextDep;
          e9.prevDep = t8.prevDep, t8.prevDep && (t8.prevDep.nextDep = e9), t8.prevDep = fs.depsTail, t8.nextDep = void 0, fs.depsTail.nextDep = t8, fs.depsTail = t8, fs.deps === t8 && (fs.deps = e9);
        }
        return t8;
      }
      trigger(e8) {
        this.version++, bs++, this.notify(e8);
      }
      notify(e8) {
        startBatch();
        try {
          0;
          for (let e9 = this.subs; e9; e9 = e9.prevSub) e9.sub.notify() && e9.sub.dep.notify();
        } finally {
          endBatch();
        }
      }
    };
    __name(addSub, "addSub");
    ws = /* @__PURE__ */ new WeakMap();
    xs = /* @__PURE__ */ Symbol("");
    ks = /* @__PURE__ */ Symbol("");
    Rs = /* @__PURE__ */ Symbol("");
    __name(track, "track");
    __name(trigger, "trigger");
    __name(reactiveReadArray, "reactiveReadArray");
    __name(shallowReadArray, "shallowReadArray");
    __name(toWrapped, "toWrapped");
    Cs = { __proto__: null, [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, (e8) => toWrapped(this, e8));
    }, concat(...e8) {
      return reactiveReadArray(this).concat(...e8.map((e9) => Ur(e9) ? reactiveReadArray(e9) : e9));
    }, entries() {
      return iterator(this, "entries", (e8) => (e8[1] = toWrapped(this, e8[1]), e8));
    }, every(e8, t8) {
      return apply(this, "every", e8, t8, void 0, arguments);
    }, filter(e8, t8) {
      return apply(this, "filter", e8, t8, (e9) => e9.map((e10) => toWrapped(this, e10)), arguments);
    }, find(e8, t8) {
      return apply(this, "find", e8, t8, (e9) => toWrapped(this, e9), arguments);
    }, findIndex(e8, t8) {
      return apply(this, "findIndex", e8, t8, void 0, arguments);
    }, findLast(e8, t8) {
      return apply(this, "findLast", e8, t8, (e9) => toWrapped(this, e9), arguments);
    }, findLastIndex(e8, t8) {
      return apply(this, "findLastIndex", e8, t8, void 0, arguments);
    }, forEach(e8, t8) {
      return apply(this, "forEach", e8, t8, void 0, arguments);
    }, includes(...e8) {
      return searchProxy(this, "includes", e8);
    }, indexOf(...e8) {
      return searchProxy(this, "indexOf", e8);
    }, join(e8) {
      return reactiveReadArray(this).join(e8);
    }, lastIndexOf(...e8) {
      return searchProxy(this, "lastIndexOf", e8);
    }, map(e8, t8) {
      return apply(this, "map", e8, t8, void 0, arguments);
    }, pop() {
      return noTracking(this, "pop");
    }, push(...e8) {
      return noTracking(this, "push", e8);
    }, reduce(e8, ...t8) {
      return reduce(this, "reduce", e8, t8);
    }, reduceRight(e8, ...t8) {
      return reduce(this, "reduceRight", e8, t8);
    }, shift() {
      return noTracking(this, "shift");
    }, some(e8, t8) {
      return apply(this, "some", e8, t8, void 0, arguments);
    }, splice(...e8) {
      return noTracking(this, "splice", e8);
    }, toReversed() {
      return reactiveReadArray(this).toReversed();
    }, toSorted(e8) {
      return reactiveReadArray(this).toSorted(e8);
    }, toSpliced(...e8) {
      return reactiveReadArray(this).toSpliced(...e8);
    }, unshift(...e8) {
      return noTracking(this, "unshift", e8);
    }, values() {
      return iterator(this, "values", (e8) => toWrapped(this, e8));
    } };
    __name(iterator, "iterator");
    __name(wrapResult, "wrapResult");
    Ss = Array.prototype;
    __name(apply, "apply");
    __name(reduce, "reduce");
    __name(searchProxy, "searchProxy");
    __name(noTracking, "noTracking");
    Ts = makeMap("__proto__,__v_isRef,__isVue");
    As = new Set(Object.getOwnPropertyNames(Symbol).filter((e8) => "arguments" !== e8 && "caller" !== e8).map((e8) => Symbol[e8]).filter(isSymbol));
    __name(hasOwnProperty, "hasOwnProperty");
    BaseReactiveHandler = class {
      static {
        __name(this, "BaseReactiveHandler");
      }
      constructor(e8 = false, t8 = false) {
        this._isReadonly = e8, this._isShallow = t8;
      }
      get(e8, t8, r3) {
        if ("__v_skip" === t8) return e8.__v_skip;
        const s5 = this._isReadonly, a13 = this._isShallow;
        if ("__v_isReactive" === t8) return !s5;
        if ("__v_isReadonly" === t8) return s5;
        if ("__v_isShallow" === t8) return a13;
        if ("__v_raw" === t8) return r3 === (s5 ? a13 ? Ls : Ns : a13 ? Bs : Is).get(e8) || Object.getPrototypeOf(e8) === Object.getPrototypeOf(r3) ? e8 : void 0;
        const c5 = Ur(e8);
        if (!s5) {
          let e9;
          if (c5 && (e9 = Cs[t8])) return e9;
          if ("hasOwnProperty" === t8) return hasOwnProperty;
        }
        const u9 = Reflect.get(e8, t8, isRef(e8) ? e8 : r3);
        if (isSymbol(t8) ? As.has(t8) : Ts(t8)) return u9;
        if (s5 || track(e8, 0, t8), a13) return u9;
        if (isRef(u9)) {
          const e9 = c5 && isIntegerKey(t8) ? u9 : u9.value;
          return s5 && isObject(e9) ? readonly(e9) : e9;
        }
        return isObject(u9) ? s5 ? readonly(u9) : reactive(u9) : u9;
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "MutableReactiveHandler");
      }
      constructor(e8 = false) {
        super(false, e8);
      }
      set(e8, t8, r3, s5) {
        let a13 = e8[t8];
        const c5 = Ur(e8) && isIntegerKey(t8);
        if (!this._isShallow) {
          const e9 = isReadonly(a13);
          if (isShallow(r3) || isReadonly(r3) || (a13 = toRaw(a13), r3 = toRaw(r3)), !c5 && isRef(a13) && !isRef(r3)) return e9 || (a13.value = r3), true;
        }
        const u9 = c5 ? Number(t8) < e8.length : hasOwn(e8, t8), d7 = Reflect.set(e8, t8, r3, isRef(e8) ? e8 : s5);
        return e8 === toRaw(s5) && d7 && (u9 ? hasChanged(r3, a13) && trigger(e8, "set", t8, r3) : trigger(e8, "add", t8, r3)), d7;
      }
      deleteProperty(e8, t8) {
        const r3 = hasOwn(e8, t8);
        e8[t8];
        const s5 = Reflect.deleteProperty(e8, t8);
        return s5 && r3 && trigger(e8, "delete", t8, void 0), s5;
      }
      has(e8, t8) {
        const r3 = Reflect.has(e8, t8);
        return isSymbol(t8) && As.has(t8) || track(e8, 0, t8), r3;
      }
      ownKeys(e8) {
        return track(e8, 0, Ur(e8) ? "length" : xs), Reflect.ownKeys(e8);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "ReadonlyReactiveHandler");
      }
      constructor(e8 = false) {
        super(true, e8);
      }
      set(e8, t8) {
        return true;
      }
      deleteProperty(e8, t8) {
        return true;
      }
    };
    Es = new MutableReactiveHandler();
    js = new ReadonlyReactiveHandler();
    Ps = new MutableReactiveHandler(true);
    toShallow = /* @__PURE__ */ __name((e8) => e8, "toShallow");
    getProto = /* @__PURE__ */ __name((e8) => Reflect.getPrototypeOf(e8), "getProto");
    __name(createReadonlyMethod, "createReadonlyMethod");
    __name(createInstrumentations, "createInstrumentations");
    __name(createInstrumentationGetter, "createInstrumentationGetter");
    Hs = { get: createInstrumentationGetter(false, false) };
    Os = { get: createInstrumentationGetter(false, true) };
    Ms = { get: createInstrumentationGetter(true, false) };
    Is = /* @__PURE__ */ new WeakMap();
    Bs = /* @__PURE__ */ new WeakMap();
    Ns = /* @__PURE__ */ new WeakMap();
    Ls = /* @__PURE__ */ new WeakMap();
    __name(reactive, "reactive");
    __name(shallowReactive, "shallowReactive");
    __name(readonly, "readonly");
    __name(createReactiveObject, "createReactiveObject");
    __name(isReactive, "isReactive");
    __name(isReadonly, "isReadonly");
    __name(isShallow, "isShallow");
    __name(isProxy, "isProxy");
    __name(toRaw, "toRaw");
    __name(markRaw, "markRaw");
    toReactive = /* @__PURE__ */ __name((e8) => isObject(e8) ? reactive(e8) : e8, "toReactive");
    toReadonly = /* @__PURE__ */ __name((e8) => isObject(e8) ? readonly(e8) : e8, "toReadonly");
    __name(isRef, "isRef");
    __name(ref, "ref");
    __name(shallowRef, "shallowRef");
    __name(createRef, "createRef");
    RefImpl = class {
      static {
        __name(this, "RefImpl");
      }
      constructor(e8, t8) {
        this.dep = new Dep(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t8 ? e8 : toRaw(e8), this._value = t8 ? e8 : toReactive(e8), this.__v_isShallow = t8;
      }
      get value() {
        return this.dep.track(), this._value;
      }
      set value(e8) {
        const t8 = this._rawValue, r3 = this.__v_isShallow || isShallow(e8) || isReadonly(e8);
        e8 = r3 ? e8 : toRaw(e8), hasChanged(e8, t8) && (this._rawValue = e8, this._value = r3 ? e8 : toReactive(e8), this.dep.trigger());
      }
    };
    __name(triggerRef, "triggerRef");
    __name(unref, "unref");
    __name(toValue, "toValue");
    Ds = { get: /* @__PURE__ */ __name((e8, t8, r3) => "__v_raw" === t8 ? e8 : unref(Reflect.get(e8, t8, r3)), "get"), set: /* @__PURE__ */ __name((e8, t8, r3, s5) => {
      const a13 = e8[t8];
      return isRef(a13) && !isRef(r3) ? (a13.value = r3, true) : Reflect.set(e8, t8, r3, s5);
    }, "set") };
    __name(proxyRefs, "proxyRefs");
    CustomRefImpl = class {
      static {
        __name(this, "CustomRefImpl");
      }
      constructor(e8) {
        this.__v_isRef = true, this._value = void 0;
        const t8 = this.dep = new Dep(), { get: r3, set: s5 } = e8(t8.track.bind(t8), t8.trigger.bind(t8));
        this._get = r3, this._set = s5;
      }
      get value() {
        return this._value = this._get();
      }
      set value(e8) {
        this._set(e8);
      }
    };
    __name(toRefs, "toRefs");
    ObjectRefImpl = class {
      static {
        __name(this, "ObjectRefImpl");
      }
      constructor(e8, t8, r3) {
        this._object = e8, this._defaultValue = r3, this.__v_isRef = true, this._value = void 0, this._key = isSymbol(t8) ? t8 : String(t8), this._raw = toRaw(e8);
        let s5 = true, a13 = e8;
        if (!Ur(e8) || isSymbol(this._key) || !isIntegerKey(this._key)) do {
          s5 = !isProxy(a13) || isShallow(a13);
        } while (s5 && (a13 = a13.__v_raw));
        this._shallow = s5;
      }
      get value() {
        let e8 = this._object[this._key];
        return this._shallow && (e8 = unref(e8)), this._value = void 0 === e8 ? this._defaultValue : e8;
      }
      set value(e8) {
        if (this._shallow && isRef(this._raw[this._key])) {
          const t8 = this._object[this._key];
          if (isRef(t8)) return void (t8.value = e8);
        }
        this._object[this._key] = e8;
      }
      get dep() {
        return (function(e8, t8) {
          const r3 = ws.get(e8);
          return r3 && r3.get(t8);
        })(this._raw, this._key);
      }
    };
    GetterRefImpl = class {
      static {
        __name(this, "GetterRefImpl");
      }
      constructor(e8) {
        this._getter = e8, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    __name(toRef, "toRef");
    __name(propertyToRef, "propertyToRef");
    ComputedRefImpl = class {
      static {
        __name(this, "ComputedRefImpl");
      }
      constructor(e8, t8, r3) {
        this.fn = e8, this.setter = t8, this._value = void 0, this.dep = new Dep(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t8, this.isSSR = r3;
      }
      notify() {
        if (this.flags |= 16, !(8 & this.flags) && fs !== this) return batch(this, true), true;
      }
      get value() {
        const e8 = this.dep.track();
        return refreshComputed(this), e8 && (e8.version = this.dep.version), this._value;
      }
      set value(e8) {
        this.setter && this.setter(e8);
      }
    };
    zs = {};
    $s = /* @__PURE__ */ new WeakMap();
    __name(watch$1, "watch$1");
    __name(traverse, "traverse");
    __name(callWithErrorHandling, "callWithErrorHandling");
    __name(callWithAsyncErrorHandling, "callWithAsyncErrorHandling");
    __name(handleError, "handleError");
    Us = [];
    Ws = -1;
    qs = [];
    Vs = null;
    Ks = 0;
    Zs = Promise.resolve();
    Js = null;
    __name(nextTick, "nextTick");
    __name(queueJob, "queueJob");
    __name(queueFlush, "queueFlush");
    __name(queuePostFlushCb, "queuePostFlushCb");
    __name(flushPreFlushCbs, "flushPreFlushCbs");
    __name(flushPostFlushCbs, "flushPostFlushCbs");
    Gs = false;
    getId = /* @__PURE__ */ __name((e8) => null == e8.id ? 2 & e8.flags ? -1 : 1 / 0 : e8.id, "getId");
    __name(flushJobs, "flushJobs");
    Qs = null;
    Ys = null;
    __name(setCurrentRenderingInstance, "setCurrentRenderingInstance");
    __name(withCtx, "withCtx");
    __name(withDirectives, "withDirectives");
    __name(invokeDirectiveHook, "invokeDirectiveHook");
    __name(provide, "provide");
    __name(inject, "inject");
    __name(hasInjectionContext, "hasInjectionContext");
    Xs = /* @__PURE__ */ Symbol.for("v-scx");
    useSSRContext = /* @__PURE__ */ __name(() => inject(Xs), "useSSRContext");
    __name(watchEffect, "watchEffect");
    __name(watch, "watch");
    __name(doWatch, "doWatch");
    __name(instanceWatch, "instanceWatch");
    __name(createPathGetter, "createPathGetter");
    eo = /* @__PURE__ */ Symbol("_vte");
    isTeleport = /* @__PURE__ */ __name((e8) => e8.__isTeleport, "isTeleport");
    to = /* @__PURE__ */ Symbol("_leaveCb");
    __name(getInnerChild$1, "getInnerChild$1");
    __name(setTransitionHooks, "setTransitionHooks");
    __name(getTransitionRoot, "getTransitionRoot");
    __name(defineComponent, "defineComponent");
    __name(markAsyncBoundary, "markAsyncBoundary");
    __name(isTemplateRefKey, "isTemplateRefKey");
    no = /* @__PURE__ */ new WeakMap();
    __name(setRef, "setRef");
    __name(invalidatePendingSetRef, "invalidatePendingSetRef");
    isComment2 = /* @__PURE__ */ __name((e8) => 8 === e8.nodeType, "isComment");
    getGlobalThis().requestIdleCallback, getGlobalThis().cancelIdleCallback;
    isAsyncWrapper = /* @__PURE__ */ __name((e8) => !!e8.type.__asyncLoader, "isAsyncWrapper");
    __name(defineAsyncComponent, "defineAsyncComponent");
    __name(createInnerComp, "createInnerComp");
    isKeepAlive = /* @__PURE__ */ __name((e8) => e8.type.__isKeepAlive, "isKeepAlive");
    __name(onActivated, "onActivated");
    __name(onDeactivated, "onDeactivated");
    __name(registerKeepAliveHook, "registerKeepAliveHook");
    __name(injectToKeepAliveRoot, "injectToKeepAliveRoot");
    __name(injectHook, "injectHook");
    createHook = /* @__PURE__ */ __name((e8) => (t8, r3 = Io) => {
      Lo && "sp" !== e8 || injectHook(e8, (...e9) => t8(...e9), r3);
    }, "createHook");
    ro = createHook("bm");
    so = createHook("m");
    oo = createHook("bu");
    io = createHook("u");
    ao = createHook("bum");
    co = createHook("um");
    lo = createHook("sp");
    uo = createHook("rtg");
    po = createHook("rtc");
    __name(onErrorCaptured, "onErrorCaptured");
    fo = "components";
    __name(resolveComponent, "resolveComponent");
    ho = /* @__PURE__ */ Symbol.for("v-ndc");
    __name(resolveDynamicComponent, "resolveDynamicComponent");
    __name(resolveAsset, "resolveAsset");
    __name(resolve2, "resolve");
    __name(renderList, "renderList");
    getPublicInstance = /* @__PURE__ */ __name((e8) => e8 ? isStatefulComponent(e8) ? getComponentPublicInstance(e8) : getPublicInstance(e8.parent) : null, "getPublicInstance");
    go = $r(/* @__PURE__ */ Object.create(null), { $: /* @__PURE__ */ __name((e8) => e8, "$"), $el: /* @__PURE__ */ __name((e8) => e8.vnode.el, "$el"), $data: /* @__PURE__ */ __name((e8) => e8.data, "$data"), $props: /* @__PURE__ */ __name((e8) => e8.props, "$props"), $attrs: /* @__PURE__ */ __name((e8) => e8.attrs, "$attrs"), $slots: /* @__PURE__ */ __name((e8) => e8.slots, "$slots"), $refs: /* @__PURE__ */ __name((e8) => e8.refs, "$refs"), $parent: /* @__PURE__ */ __name((e8) => getPublicInstance(e8.parent), "$parent"), $root: /* @__PURE__ */ __name((e8) => getPublicInstance(e8.root), "$root"), $host: /* @__PURE__ */ __name((e8) => e8.ce, "$host"), $emit: /* @__PURE__ */ __name((e8) => e8.emit, "$emit"), $options: /* @__PURE__ */ __name((e8) => resolveMergedOptions(e8), "$options"), $forceUpdate: /* @__PURE__ */ __name((e8) => e8.f || (e8.f = () => {
      queueJob(e8.update);
    }), "$forceUpdate"), $nextTick: /* @__PURE__ */ __name((e8) => e8.n || (e8.n = nextTick.bind(e8.proxy)), "$nextTick"), $watch: /* @__PURE__ */ __name((e8) => instanceWatch.bind(e8), "$watch") });
    hasSetupBinding = /* @__PURE__ */ __name((e8, t8) => e8 !== Dr && !e8.__isScriptSetup && hasOwn(e8, t8), "hasSetupBinding");
    mo = { get({ _: e8 }, t8) {
      if ("__v_skip" === t8) return true;
      const { ctx: r3, setupState: s5, data: a13, props: c5, accessCache: u9, type: d7, appContext: p6 } = e8;
      if ("$" !== t8[0]) {
        const e9 = u9[t8];
        if (void 0 !== e9) switch (e9) {
          case 1:
            return s5[t8];
          case 2:
            return a13[t8];
          case 4:
            return r3[t8];
          case 3:
            return c5[t8];
        }
        else {
          if (hasSetupBinding(s5, t8)) return u9[t8] = 1, s5[t8];
          if (a13 !== Dr && hasOwn(a13, t8)) return u9[t8] = 2, a13[t8];
          if (hasOwn(c5, t8)) return u9[t8] = 3, c5[t8];
          if (r3 !== Dr && hasOwn(r3, t8)) return u9[t8] = 4, r3[t8];
          yo && (u9[t8] = 0);
        }
      }
      const f6 = go[t8];
      let g9, m8;
      return f6 ? ("$attrs" === t8 && track(e8.attrs, 0, ""), f6(e8)) : (g9 = d7.__cssModules) && (g9 = g9[t8]) ? g9 : r3 !== Dr && hasOwn(r3, t8) ? (u9[t8] = 4, r3[t8]) : (m8 = p6.config.globalProperties, hasOwn(m8, t8) ? m8[t8] : void 0);
    }, set({ _: e8 }, t8, r3) {
      const { data: s5, setupState: a13, ctx: c5 } = e8;
      return hasSetupBinding(a13, t8) ? (a13[t8] = r3, true) : s5 !== Dr && hasOwn(s5, t8) ? (s5[t8] = r3, true) : !hasOwn(e8.props, t8) && (("$" !== t8[0] || !(t8.slice(1) in e8)) && (c5[t8] = r3, true));
    }, has({ _: { data: e8, setupState: t8, accessCache: r3, ctx: s5, appContext: a13, props: c5, type: u9 } }, d7) {
      let p6;
      return !!(r3[d7] || e8 !== Dr && "$" !== d7[0] && hasOwn(e8, d7) || hasSetupBinding(t8, d7) || hasOwn(c5, d7) || hasOwn(s5, d7) || hasOwn(go, d7) || hasOwn(a13.config.globalProperties, d7) || (p6 = u9.__cssModules) && p6[d7]);
    }, defineProperty(e8, t8, r3) {
      return null != r3.get ? e8._.accessCache[t8] = 0 : hasOwn(r3, "value") && this.set(e8, t8, r3.value, null), Reflect.defineProperty(e8, t8, r3);
    } };
    __name(normalizePropsOrEmits, "normalizePropsOrEmits");
    __name(mergeModels, "mergeModels");
    yo = true;
    __name(applyOptions, "applyOptions");
    __name(callHook, "callHook");
    __name(createWatcher, "createWatcher");
    __name(resolveMergedOptions, "resolveMergedOptions");
    __name(mergeOptions2, "mergeOptions");
    vo = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: /* @__PURE__ */ __name(function(e8, t8) {
      if (!e8) return t8;
      if (!t8) return e8;
      const r3 = $r(/* @__PURE__ */ Object.create(null), e8);
      for (const s5 in t8) r3[s5] = mergeAsArray(e8[s5], t8[s5]);
      return r3;
    }, "watch"), provide: mergeDataFn, inject: /* @__PURE__ */ __name(function(e8, t8) {
      return mergeObjectOptions(normalizeInject(e8), normalizeInject(t8));
    }, "inject") };
    __name(mergeDataFn, "mergeDataFn");
    __name(normalizeInject, "normalizeInject");
    __name(mergeAsArray, "mergeAsArray");
    __name(mergeObjectOptions, "mergeObjectOptions");
    __name(mergeEmitsOrPropsOptions, "mergeEmitsOrPropsOptions");
    __name(createAppContext, "createAppContext");
    _o = 0;
    __name(createAppAPI, "createAppAPI");
    bo = null;
    __name(useModel, "useModel");
    getModelModifiers = /* @__PURE__ */ __name((e8, t8) => "modelValue" === t8 || "model-value" === t8 ? e8.modelModifiers : e8[`${t8}Modifiers`] || e8[`${Kr(t8)}Modifiers`] || e8[`${Jr(t8)}Modifiers`], "getModelModifiers");
    __name(emit, "emit");
    wo = /* @__PURE__ */ new WeakMap();
    __name(normalizeEmitsOptions, "normalizeEmitsOptions");
    __name(isEmitListener, "isEmitListener");
    __name(renderComponentRoot, "renderComponentRoot");
    __name(filterSingleRoot, "filterSingleRoot");
    getFunctionalFallthrough = /* @__PURE__ */ __name((e8) => {
      let t8;
      for (const r3 in e8) ("class" === r3 || "style" === r3 || isOn(r3)) && ((t8 || (t8 = {}))[r3] = e8[r3]);
      return t8;
    }, "getFunctionalFallthrough");
    filterModelListeners = /* @__PURE__ */ __name((e8, t8) => {
      const r3 = {};
      for (const s5 in e8) isModelListener(s5) && s5.slice(9) in t8 || (r3[s5] = e8[s5]);
      return r3;
    }, "filterModelListeners");
    __name(hasPropsChanged, "hasPropsChanged");
    __name(hasPropValueChanged, "hasPropValueChanged");
    __name(updateHOCHostEl, "updateHOCHostEl");
    xo = {};
    createInternalObject = /* @__PURE__ */ __name(() => Object.create(xo), "createInternalObject");
    isInternalObject = /* @__PURE__ */ __name((e8) => Object.getPrototypeOf(e8) === xo, "isInternalObject");
    __name(setFullProps, "setFullProps");
    __name(resolvePropValue, "resolvePropValue");
    ko = /* @__PURE__ */ new WeakMap();
    __name(normalizePropsOptions, "normalizePropsOptions");
    __name(validatePropName, "validatePropName");
    isInternalKey = /* @__PURE__ */ __name((e8) => "_" === e8 || "_ctx" === e8 || "$stable" === e8, "isInternalKey");
    normalizeSlotValue = /* @__PURE__ */ __name((e8) => Ur(e8) ? e8.map(normalizeVNode) : [normalizeVNode(e8)], "normalizeSlotValue");
    normalizeSlot2 = /* @__PURE__ */ __name((e8, t8, r3) => {
      if (t8._n) return t8;
      const s5 = withCtx((...e9) => normalizeSlotValue(t8(...e9)), r3);
      return s5._c = false, s5;
    }, "normalizeSlot");
    normalizeObjectSlots = /* @__PURE__ */ __name((e8, t8, r3) => {
      const s5 = e8._ctx;
      for (const r4 in e8) {
        if (isInternalKey(r4)) continue;
        const a13 = e8[r4];
        if (isFunction(a13)) t8[r4] = normalizeSlot2(0, a13, s5);
        else if (null != a13) {
          const e9 = normalizeSlotValue(a13);
          t8[r4] = () => e9;
        }
      }
    }, "normalizeObjectSlots");
    normalizeVNodeSlots = /* @__PURE__ */ __name((e8, t8) => {
      const r3 = normalizeSlotValue(t8);
      e8.slots.default = () => r3;
    }, "normalizeVNodeSlots");
    assignSlots = /* @__PURE__ */ __name((e8, t8, r3) => {
      for (const s5 in t8) !r3 && isInternalKey(s5) || (e8[s5] = t8[s5]);
    }, "assignSlots");
    queuePostRenderEffect = /* @__PURE__ */ __name(function(e8, t8) {
      t8 && t8.pendingBranch ? Ur(e8) ? t8.effects.push(...e8) : t8.effects.push(e8) : queuePostFlushCb(e8);
    }, "queuePostRenderEffect");
    __name(createRenderer2, "createRenderer");
    __name(resolveChildrenNamespace, "resolveChildrenNamespace");
    __name(toggleRecurse, "toggleRecurse");
    __name(traverseStaticChildren, "traverseStaticChildren");
    __name(locateNonHydratedAsyncRoot, "locateNonHydratedAsyncRoot");
    __name(invalidateMount, "invalidateMount");
    __name(resolveAsyncComponentPlaceholder, "resolveAsyncComponentPlaceholder");
    isSuspense = /* @__PURE__ */ __name((e8) => e8.__isSuspense, "isSuspense");
    Ro = 0;
    Co = { name: "Suspense", __isSuspense: true, process(e8, t8, r3, s5, a13, c5, u9, d7, p6, f6) {
      if (null == e8) !(function(e9, t9, r4, s6, a14, c6, u10, d8, p7) {
        const { p: f7, o: { createElement: g9 } } = p7, m8 = g9("div"), _7 = e9.suspense = createSuspenseBoundary(e9, a14, s6, t9, m8, r4, c6, u10, d8, p7);
        f7(null, _7.pendingBranch = e9.ssContent, m8, null, s6, _7, c6, u10), _7.deps > 0 ? (triggerEvent(e9, "onPending"), triggerEvent(e9, "onFallback"), f7(null, e9.ssFallback, t9, r4, s6, null, c6, u10), setActiveBranch(_7, e9.ssFallback)) : _7.resolve(false, true);
      })(t8, r3, s5, a13, c5, u9, d7, p6, f6);
      else {
        if (c5 && c5.deps > 0 && !e8.suspense.isInFallback && !c5.isHydrating) return t8.suspense = e8.suspense, t8.suspense.vnode = t8, void (t8.el = e8.el);
        !(function(e9, t9, r4, s6, a14, c6, u10, d8, { p: p7, um: f7, o: { createElement: g9 } }) {
          const m8 = t9.suspense = e9.suspense;
          m8.vnode = t9, t9.el = e9.el;
          const _7 = t9.ssContent, x7 = t9.ssFallback, { activeBranch: k5, pendingBranch: R2, isInFallback: C3, isHydrating: S5 } = m8;
          if (R2) m8.pendingBranch = _7, isSameVNodeType(R2, _7) ? (m8.deps++, p7(R2, _7, S5 ? r4 : m8.hiddenContainer, null, a14, m8, c6, u10, d8), m8.deps--, m8.deps <= 0 ? m8.resolve() : C3 && (S5 || m8.isFallbackMountPending || (p7(k5, x7, r4, s6, a14, null, c6, u10, d8), setActiveBranch(m8, x7)))) : (m8.pendingId = Ro++, S5 ? (m8.isHydrating = false, m8.activeBranch = R2) : f7(R2, a14, m8), m8.deps = 0, m8.effects.length = 0, m8.hiddenContainer = g9("div"), C3 ? (p7(null, _7, m8.hiddenContainer, null, a14, m8, c6, u10, d8), m8.deps <= 0 ? m8.resolve() : m8.isFallbackMountPending || (p7(k5, x7, r4, s6, a14, null, c6, u10, d8), setActiveBranch(m8, x7))) : k5 && isSameVNodeType(k5, _7) ? (p7(k5, _7, r4, s6, a14, m8, c6, u10, d8), m8.resolve(true)) : (p7(null, _7, m8.hiddenContainer, null, a14, m8, c6, u10, d8), m8.deps <= 0 && m8.resolve()));
          else if (k5 && isSameVNodeType(k5, _7)) p7(k5, _7, r4, s6, a14, m8, c6, u10, d8), setActiveBranch(m8, _7);
          else if (triggerEvent(t9, "onPending"), m8.pendingBranch = _7, 512 & _7.shapeFlag ? m8.pendingId = _7.component.suspenseId : m8.pendingId = Ro++, p7(null, _7, m8.hiddenContainer, null, a14, m8, c6, u10, d8), m8.deps <= 0) m8.resolve();
          else {
            const { timeout: e10, pendingId: t10 } = m8;
            e10 > 0 ? setTimeout(() => {
              m8.pendingId === t10 && m8.fallback(x7);
            }, e10) : 0 === e10 && m8.fallback(x7);
          }
        })(e8, t8, r3, s5, a13, u9, d7, p6, f6);
      }
    }, hydrate: /* @__PURE__ */ __name(function(e8, t8, r3, s5, a13, c5, u9, d7, p6) {
      const f6 = t8.suspense = createSuspenseBoundary(t8, s5, r3, e8.parentNode, document.createElement("div"), null, a13, c5, u9, d7, true), g9 = p6(e8, f6.pendingBranch = t8.ssContent, r3, f6, c5, u9);
      0 === f6.deps && f6.resolve(false, true);
      return g9;
    }, "hydrate"), normalize: /* @__PURE__ */ __name(function(e8) {
      const { shapeFlag: t8, children: r3 } = e8, s5 = 32 & t8;
      e8.ssContent = normalizeSuspenseSlot(s5 ? r3.default : r3), e8.ssFallback = s5 ? normalizeSuspenseSlot(r3.fallback) : createVNode(Ao);
    }, "normalize") };
    __name(triggerEvent, "triggerEvent");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(normalizeSuspenseSlot, "normalizeSuspenseSlot");
    __name(setActiveBranch, "setActiveBranch");
    So = /* @__PURE__ */ Symbol.for("v-fgt");
    To = /* @__PURE__ */ Symbol.for("v-txt");
    Ao = /* @__PURE__ */ Symbol.for("v-cmt");
    Eo = /* @__PURE__ */ Symbol.for("v-stc");
    jo = [];
    Po = null;
    __name(openBlock, "openBlock");
    __name(closeBlock, "closeBlock");
    Ho = 1;
    __name(setBlockTracking, "setBlockTracking");
    __name(setupBlock, "setupBlock");
    __name(createElementBlock, "createElementBlock");
    __name(createBlock, "createBlock");
    __name(isVNode, "isVNode");
    __name(isSameVNodeType, "isSameVNodeType");
    normalizeKey = /* @__PURE__ */ __name(({ key: e8 }) => null != e8 ? e8 : null, "normalizeKey");
    normalizeRef = /* @__PURE__ */ __name(({ ref: e8, ref_key: t8, ref_for: r3 }) => ("number" == typeof e8 && (e8 = "" + e8), null != e8 ? isString(e8) || isRef(e8) || isFunction(e8) ? { i: Qs, r: e8, k: t8, f: !!r3 } : e8 : null), "normalizeRef");
    __name(createBaseVNode, "createBaseVNode");
    createVNode = /* @__PURE__ */ __name(function(e8, t8 = null, r3 = null, s5 = 0, a13 = null, c5 = false) {
      e8 && e8 !== ho || (e8 = Ao);
      if (isVNode(e8)) {
        const s6 = cloneVNode(e8, t8, true);
        return r3 && normalizeChildren(s6, r3), Ho > 0 && !c5 && Po && (6 & s6.shapeFlag ? Po[Po.indexOf(e8)] = s6 : Po.push(s6)), s6.patchFlag = -2, s6;
      }
      u9 = e8, isFunction(u9) && "__vccOpts" in u9 && (e8 = e8.__vccOpts);
      var u9;
      if (t8) {
        t8 = (function(e10) {
          return e10 ? isProxy(e10) || isInternalObject(e10) ? $r({}, e10) : e10 : null;
        })(t8);
        let { class: e9, style: r4 } = t8;
        e9 && !isString(e9) && (t8.class = normalizeClass(e9)), isObject(r4) && (isProxy(r4) && !Ur(r4) && (r4 = $r({}, r4)), t8.style = normalizeStyle(r4));
      }
      const d7 = isString(e8) ? 1 : isSuspense(e8) ? 128 : isTeleport(e8) ? 64 : isObject(e8) ? 4 : isFunction(e8) ? 2 : 0;
      return createBaseVNode(e8, t8, r3, s5, a13, d7, c5, true);
    }, "createVNode");
    __name(cloneVNode, "cloneVNode");
    __name(createTextVNode, "createTextVNode");
    __name(createCommentVNode, "createCommentVNode");
    __name(normalizeVNode, "normalizeVNode");
    __name(cloneIfMounted, "cloneIfMounted");
    __name(normalizeChildren, "normalizeChildren");
    __name(mergeProps, "mergeProps");
    __name(invokeVNodeHook, "invokeVNodeHook");
    Oo = createAppContext();
    Mo = 0;
    __name(createComponentInstance, "createComponentInstance");
    Io = null;
    getCurrentInstance = /* @__PURE__ */ __name(() => Io || Qs, "getCurrentInstance");
    {
      const e8 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t8, r3) => {
        let s5;
        return (s5 = e8[t8]) || (s5 = e8[t8] = []), s5.push(r3), (e9) => {
          s5.length > 1 ? s5.forEach((t9) => t9(e9)) : s5[0](e9);
        };
      }, "registerGlobalSetter");
      Bo = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e9) => Io = e9), No = registerGlobalSetter("__VUE_SSR_SETTERS__", (e9) => Lo = e9);
    }
    setCurrentInstance = /* @__PURE__ */ __name((e8) => {
      const t8 = Io;
      return Bo(e8), e8.scope.on(), () => {
        e8.scope.off(), Bo(t8);
      };
    }, "setCurrentInstance");
    unsetCurrentInstance = /* @__PURE__ */ __name(() => {
      Io && Io.scope.off(), Bo(null);
    }, "unsetCurrentInstance");
    __name(isStatefulComponent, "isStatefulComponent");
    Lo = false;
    __name(setupComponent, "setupComponent");
    __name(handleSetupResult, "handleSetupResult");
    __name(finishComponentSetup, "finishComponentSetup");
    Do = { get: /* @__PURE__ */ __name((e8, t8) => (track(e8, 0, ""), e8[t8]), "get") };
    __name(getComponentPublicInstance, "getComponentPublicInstance");
    __name(getComponentName, "getComponentName");
    computed = /* @__PURE__ */ __name((e8, t8) => {
      const r3 = (function(e9, t9, r4 = false) {
        let s5, a13;
        return isFunction(e9) ? s5 = e9 : (s5 = e9.get, a13 = e9.set), new ComputedRefImpl(s5, a13, r4);
      })(e8, 0, Lo);
      return r3;
    }, "computed");
    __name(h6, "h");
    zo = "3.5.44";
    $o = { createComponentInstance, setupComponent, renderComponentRoot, setCurrentRenderingInstance, isVNode, normalizeVNode, ensureValidVNode: /* @__PURE__ */ __name(function ensureValidVNode(e8) {
      return e8.some((e9) => !isVNode(e9) || e9.type !== Ao && !(e9.type === So && !ensureValidVNode(e9.children))) ? e8 : null;
    }, "ensureValidVNode") };
    Fo = $o;
    Uo = "undefined" != typeof document ? document : null;
    Wo = Uo && Uo.createElement("template");
    qo = { insert: /* @__PURE__ */ __name((e8, t8, r3) => {
      t8.insertBefore(e8, r3 || null);
    }, "insert"), remove: /* @__PURE__ */ __name((e8) => {
      const t8 = e8.parentNode;
      t8 && t8.removeChild(e8);
    }, "remove"), createElement: /* @__PURE__ */ __name((e8, t8, r3, s5) => {
      const a13 = "svg" === t8 ? Uo.createElementNS("http://www.w3.org/2000/svg", e8) : "mathml" === t8 ? Uo.createElementNS("http://www.w3.org/1998/Math/MathML", e8) : r3 ? Uo.createElement(e8, { is: r3 }) : Uo.createElement(e8);
      return "select" === e8 && s5 && null != s5.multiple && a13.setAttribute("multiple", s5.multiple), a13;
    }, "createElement"), createText: /* @__PURE__ */ __name((e8) => Uo.createTextNode(e8), "createText"), createComment: /* @__PURE__ */ __name((e8) => Uo.createComment(e8), "createComment"), setText: /* @__PURE__ */ __name((e8, t8) => {
      e8.nodeValue = t8;
    }, "setText"), setElementText: /* @__PURE__ */ __name((e8, t8) => {
      e8.textContent = t8;
    }, "setElementText"), parentNode: /* @__PURE__ */ __name((e8) => e8.parentNode, "parentNode"), nextSibling: /* @__PURE__ */ __name((e8) => e8.nextSibling, "nextSibling"), querySelector: /* @__PURE__ */ __name((e8) => Uo.querySelector(e8), "querySelector"), setScopeId(e8, t8) {
      e8.setAttribute(t8, "");
    }, insertStaticContent(e8, t8, r3, s5, a13, c5) {
      const u9 = r3 ? r3.previousSibling : t8.lastChild;
      if (a13 && (a13 === c5 || a13.nextSibling)) for (; t8.insertBefore(a13.cloneNode(true), r3), a13 !== c5 && (a13 = a13.nextSibling); ) ;
      else {
        Wo.innerHTML = "svg" === s5 ? `<svg>${e8}</svg>` : "mathml" === s5 ? `<math>${e8}</math>` : e8;
        const a14 = Wo.content;
        if ("svg" === s5 || "mathml" === s5) {
          const e9 = a14.firstChild;
          for (; e9.firstChild; ) a14.appendChild(e9.firstChild);
          a14.removeChild(e9);
        }
        t8.insertBefore(a14, r3);
      }
      return [u9 ? u9.nextSibling : t8.firstChild, r3 ? r3.previousSibling : t8.lastChild];
    } };
    Vo = /* @__PURE__ */ Symbol("_vtc");
    Ko = /* @__PURE__ */ Symbol("_vod");
    Zo = /* @__PURE__ */ Symbol("_vsh");
    Jo = /* @__PURE__ */ Symbol("");
    Go = /(?:^|;)\s*display\s*:/;
    Qo = /\s*!important$/;
    __name(setStyle, "setStyle");
    Yo = ["Webkit", "Moz", "ms"];
    Xo = {};
    __name(shouldPreserveTextareaResizeStyle, "shouldPreserveTextareaResizeStyle");
    ei = "http://www.w3.org/1999/xlink";
    __name(patchAttr, "patchAttr");
    __name(patchDOMProp, "patchDOMProp");
    __name(addEventListener, "addEventListener");
    ti = /* @__PURE__ */ Symbol("_vei");
    __name(patchEvent, "patchEvent");
    ni = /(Once|Passive|Capture)$/;
    ri = /^on:?(?:Once|Passive|Capture)$/;
    si = 0;
    oi = Promise.resolve();
    getNow = /* @__PURE__ */ __name(() => si || (oi.then(() => si = 0), si = Date.now()), "getNow");
    isNativeOn = /* @__PURE__ */ __name((e8) => 111 === e8.charCodeAt(0) && 110 === e8.charCodeAt(1) && e8.charCodeAt(2) > 96 && e8.charCodeAt(2) < 123, "isNativeOn");
    getModelAssigner = /* @__PURE__ */ __name((e8) => {
      const t8 = e8.props["onUpdate:modelValue"] || false;
      return Ur(t8) ? (e9) => invokeArrayFns(t8, e9) : t8;
    }, "getModelAssigner");
    __name(onCompositionStart, "onCompositionStart");
    __name(onCompositionEnd, "onCompositionEnd");
    ii = /* @__PURE__ */ Symbol("_assign");
    ai = /* @__PURE__ */ Symbol("_initialValue");
    __name(castValue, "castValue");
    ci = { created(e8, { modifiers: { lazy: t8, trim: r3, number: s5 } }, a13) {
      e8.parentNode && ("text" === e8.type ? e8[ai] = e8.defaultValue.replace(/[\r\n]/g, "") : "textarea" === e8.type && (e8[ai] = e8.defaultValue.replace(/\r\n?/g, "\n"))), e8[ii] = getModelAssigner(a13);
      const c5 = s5 || a13.props && "number" === a13.props.type;
      addEventListener(e8, t8 ? "change" : "input", (t9) => {
        t9.target.composing || e8[ii](castValue(e8.value, r3, c5));
      }), (r3 || c5) && addEventListener(e8, "change", () => {
        e8.value = castValue(e8.value, r3, c5);
      }), t8 || (addEventListener(e8, "compositionstart", onCompositionStart), addEventListener(e8, "compositionend", onCompositionEnd), addEventListener(e8, "change", onCompositionEnd));
    }, mounted(e8, { value: t8, modifiers: { trim: r3, number: s5 } }) {
      const a13 = null == t8 ? "" : t8, c5 = e8[ai];
      delete e8[ai], void 0 === c5 || "text" !== e8.type && "textarea" !== e8.type || e8.value === c5 ? e8.value = a13 : e8[ii](castValue(e8.value, r3, s5));
    }, beforeUpdate(e8, { value: t8, oldValue: r3, modifiers: { lazy: s5, trim: a13, number: c5 } }, u9) {
      if (e8[ii] = getModelAssigner(u9), e8.composing) return;
      const d7 = null == t8 ? "" : t8;
      if ((!c5 && "number" !== e8.type || /^0\d/.test(e8.value) ? e8.value : looseToNumber(e8.value)) === d7) return;
      const p6 = e8.getRootNode();
      if ((p6 instanceof Document || p6 instanceof ShadowRoot) && p6.activeElement === e8 && "range" !== e8.type) {
        if (s5 && t8 === r3) return;
        if (a13 && e8.value.trim() === d7) return;
      }
      e8.value = d7;
    } };
    li = { deep: true, created(e8, t8, r3) {
      e8[ii] = getModelAssigner(r3), addEventListener(e8, "change", () => {
        const t9 = e8._modelValue, r4 = getValue(e8), s5 = e8.checked, a13 = e8[ii];
        if (Ur(t9)) {
          const e9 = looseIndexOf(t9, r4), c5 = -1 !== e9;
          if (s5 && !c5) a13(t9.concat(r4));
          else if (!s5 && c5) {
            const r5 = [...t9];
            r5.splice(e9, 1), a13(r5);
          }
        } else if (isSet(t9)) {
          const e9 = new Set(t9);
          s5 ? e9.add(r4) : e9.delete(r4), a13(e9);
        } else a13(getCheckboxValue(e8, s5));
      });
    }, mounted: setChecked, beforeUpdate(e8, t8, r3) {
      e8[ii] = getModelAssigner(r3), setChecked(e8, t8, r3);
    } };
    __name(setChecked, "setChecked");
    ui = { deep: true, created(e8, { value: t8, modifiers: { number: r3 } }, s5) {
      e8._modelValue = t8, addEventListener(e8, "change", () => {
        const t9 = Array.prototype.filter.call(e8.options, (e9) => e9.selected).map((e9) => r3 ? looseToNumber(getValue(e9)) : getValue(e9)), s6 = e8.multiple, a13 = s6 ? isSet(e8._modelValue) ? new Set(t9) : t9 : t9[0], c5 = e8._pendingValue = [s6, s6 ? Ur(a13) ? t9.slice() : t9 : a13];
        try {
          e8[ii](a13);
        } finally {
          nextTick(() => {
            e8._pendingValue === c5 && (e8._pendingValue = void 0);
          });
        }
      }), e8[ii] = getModelAssigner(s5);
    }, mounted(e8, { value: t8 }) {
      setSelected(e8, t8);
    }, beforeUpdate(e8, { value: t8 }, r3) {
      e8._modelValue = t8, e8[ii] = getModelAssigner(r3);
    }, updated(e8, { value: t8 }) {
      const r3 = e8._pendingValue;
      e8._pendingValue = void 0, r3 && r3[0] === e8.multiple && (function(e9, t9, r4) {
        if (!r4) return looseEqual(e9, t9);
        if (Ur(e9)) return looseEqual(e9, t9);
        if (isSet(e9)) {
          if (e9.size !== t9.length) return false;
          for (const r5 of t9) if (!e9.has(r5)) return false;
          return true;
        }
        return false;
      })(t8, r3[1], r3[0]) || setSelected(e8, t8);
    } };
    __name(setSelected, "setSelected");
    __name(getValue, "getValue");
    __name(getCheckboxValue, "getCheckboxValue");
    di = $r({ patchProp: /* @__PURE__ */ __name((e8, t8, r3, s5, a13, c5) => {
      const u9 = "svg" === a13;
      "class" === t8 ? (function(e9, t9, r4) {
        const s6 = e9[Vo];
        s6 && (t9 = (t9 ? [t9, ...s6] : [...s6]).join(" ")), null == t9 ? e9.removeAttribute("class") : r4 ? e9.setAttribute("class", t9) : e9.className = t9;
      })(e8, s5, u9) : "style" === t8 ? (function(e9, t9, r4) {
        const s6 = e9.style, a14 = isString(r4);
        let c6 = false;
        if (r4 && !a14) {
          if (t9) if (isString(t9)) for (const e10 of t9.split(";")) {
            const t10 = e10.slice(0, e10.indexOf(":")).trim();
            null == r4[t10] && setStyle(s6, t10, "");
          }
          else for (const e10 in t9) null == r4[e10] && setStyle(s6, e10, "");
          for (const a15 in r4) {
            "display" === a15 && (c6 = true);
            const u10 = r4[a15];
            null != u10 ? shouldPreserveTextareaResizeStyle(e9, a15, !isString(t9) && t9 ? t9[a15] : void 0, u10) || setStyle(s6, a15, u10) : setStyle(s6, a15, "");
          }
        } else if (a14) {
          if (t9 !== r4) {
            const e10 = s6[Jo];
            e10 && (r4 += ";" + e10), s6.cssText = r4, c6 = Go.test(r4);
          }
        } else t9 && e9.removeAttribute("style");
        Ko in e9 && (a14 && t9 === r4 || (e9[Ko] = c6 ? s6.display : ""), e9[Zo] && (s6.display = "none"));
      })(e8, r3, s5) : isOn(t8) ? isModelListener(t8) || patchEvent(e8, t8, 0, s5, c5) : ("." === t8[0] ? (t8 = t8.slice(1), 1) : "^" === t8[0] ? (t8 = t8.slice(1), 0) : (function(e9, t9, r4, s6) {
        if (s6) return "innerHTML" === t9 || "textContent" === t9 || !!(t9 in e9 && isNativeOn(t9) && isFunction(r4));
        if ("spellcheck" === t9 || "draggable" === t9 || "translate" === t9 || "autocorrect" === t9) return false;
        if ("sandbox" === t9 && "IFRAME" === e9.tagName) return false;
        if ("form" === t9) return false;
        if ("list" === t9 && "INPUT" === e9.tagName) return false;
        if ("type" === t9 && "TEXTAREA" === e9.tagName) return false;
        if ("width" === t9 || "height" === t9) {
          const t10 = e9.tagName;
          if ("IMG" === t10 || "VIDEO" === t10 || "CANVAS" === t10 || "SOURCE" === t10) return false;
        }
        if (isNativeOn(t9) && isString(r4)) return false;
        return t9 in e9;
      })(e8, t8, s5, u9)) ? (patchDOMProp(e8, t8, s5), e8.tagName.includes("-") || "value" !== t8 && "checked" !== t8 && "selected" !== t8 || patchAttr(e8, t8, s5, u9, 0, "value" !== t8)) : e8._isVueCE && ((function(e9, t9) {
        const r4 = e9._def.props;
        if (!r4) return false;
        const s6 = Kr(t9);
        return Array.isArray(r4) ? r4.some((e10) => Kr(e10) === s6) : Object.keys(r4).some((e10) => Kr(e10) === s6);
      })(e8, t8) || e8._def.__asyncLoader && (/[A-Z]/.test(t8) || !isString(s5))) ? patchDOMProp(e8, Kr(t8), s5, 0, t8) : ("true-value" === t8 ? e8._trueValue = s5 : "false-value" === t8 && (e8._falseValue = s5), patchAttr(e8, t8, s5, u9));
    }, "patchProp") }, qo);
    createApp = /* @__PURE__ */ __name((...e8) => {
      const t8 = (pi || (pi = createRenderer2(di))).createApp(...e8), { mount: r3 } = t8;
      return t8.mount = (e9) => {
        const s5 = (function(e10) {
          if (isString(e10)) {
            return document.querySelector(e10);
          }
          return e10;
        })(e9);
        if (!s5) return;
        const a13 = t8._component;
        isFunction(a13) || a13.render || a13.template || (a13.template = s5.innerHTML), 1 === s5.nodeType && (s5.textContent = "");
        const c5 = r3(s5, false, (function(e10) {
          if (e10 instanceof SVGElement) return "svg";
          if ("function" == typeof MathMLElement && e10 instanceof MathMLElement) return "mathml";
        })(s5));
        return s5 instanceof Element && (s5.removeAttribute("v-cloak"), s5.setAttribute("data-v-app", "")), c5;
      }, t8;
    }, "createApp");
    fi = false;
    initDirectivesForSSR = /* @__PURE__ */ __name(() => {
      fi || (fi = true, ci.getSSRProps = ({ value: e8 }) => ({ value: e8 }), li.getSSRProps = ({ value: e8 }, t8) => {
        if (Ur(e8)) {
          if (t8.props && looseIndexOf(e8, t8.props.value) > -1) return { checked: true };
        } else if (isSet(e8)) {
          if (t8.props && e8.has(t8.props.value)) return { checked: true };
        } else if (e8) return { checked: true };
      });
    }, "initDirectivesForSSR");
    hi = Object.assign((e8, t8) => isRef(t8) ? toValue(t8) : t8, { _static: true });
    __name(createHead, "createHead");
    gi = { disableDefaults: true, plugins: [cr, lr, pr, ar] };
    mi = { omitLineBreaks: true };
    yi = ["/index.html", "/200.html", "/404.html"];
    vi = [];
    _i = ["/client/requests/new", "/client/jobs/:id/candidates/:recId", "/hr/jobs/:id/applications/:id", "/applicant/applications/:id", "/client/jobs/:id", "/client/requests/:id", "/hr/clients/:id", "/hr/jobs/:id", "/hr/requests/:id", "/applicant/profile", "/client/requests", "/client/team", "/client/wallet", "/hr/clients", "/hr/jobs", "/hr/requests", "/jobs/:slug/apply", "/jobs/:slug", "/about", "/applicant", "/client", "/contact", "/employers", "/hr", "/privacy", "/terms", "/"];
    bi = false;
    wi = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap" }], style: [], script: [], noscript: [], title: "Hireway" };
    xi = "div";
    ki = { id: "__nuxt" };
    Ri = "div";
    Ci = { id: "teleports" };
    Ti = { id: "__nuxt-loader" };
    Ai = "nuxt-app";
    Ei = "x-nuxt-error-page";
    __name(appendVary, "appendVary");
    __name(parseVary, "parseVary");
    __name(defaultHandler, "defaultHandler");
    ji = [async function(e8, t8, { defaultHandler: r3 }) {
      if (t8.handled) return;
      const s5 = !(!t8.context.nuxt?.["~rendering-error"] && !getFetchedRequestContext(t8)?.["~rendering-error"]);
      if ((function(e9) {
        return !hasReqHeader(e9, "accept", "text/html") && (hasReqHeader(e9, "accept", "application/json") || hasReqHeader(e9, "user-agent", "curl/") || hasReqHeader(e9, "user-agent", "httpie/") || hasReqHeader(e9, "sec-fetch-mode", "cors") || e9.path.startsWith("/api/") || e9.path.endsWith(".json"));
      })(t8)) return;
      const a13 = await r3(e8, t8, { json: true, silent: false });
      if (404 === (e8.status || e8.statusCode || 500) && 302 === a13.status) return setResponseHeaders(t8, a13.headers), appendVary(t8, "accept, sec-fetch-mode"), setResponseStatus(t8, a13.status, a13.statusText), send(t8, JSON.stringify(a13.body, null, 2));
      const c5 = a13.body, u9 = new URL(c5.url);
      c5.url = withoutBase(u9.pathname, useRuntimeConfig2(t8).app.baseURL) + u9.search + u9.hash, c5.message = e8.unhandled ? c5.message || "Server Error" : e8.message || c5.message || "Server Error", e8.unhandled || (c5.data ||= e8.data), c5.statusText ||= e8.statusText || e8.statusMessage, delete a13.headers["content-type"], delete a13.headers["content-security-policy"], setResponseHeaders(t8, a13.headers), appendVary(t8, "accept, sec-fetch-mode"), s5 || (t8.context.nuxt = { ...t8.context.nuxt, "~rendering-error": true });
      const d7 = s5 ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t8).app.baseURL, "/__nuxt_error"), { ...c5 }), { headers: t8.headers, redirect: "manual", context: { nuxt: { "~rendering-error": true } } }).catch(() => null);
      if (t8.handled) return;
      if (!d7) {
        setResponseHeader(t8, "Content-Type", "text/html;charset=UTF-8");
        const { template: e9 } = await Promise.resolve().then(() => (init_error_template(), error_template_exports));
        return send(t8, e9(c5));
      }
      let p6 = await d7.text();
      for (const [e9, r4] of d7.headers.entries()) e9 !== Ei && ("set-cookie" !== e9 && "x-nitro-prerender" !== e9 ? setResponseHeader(t8, e9, r4) : appendResponseHeader(t8, e9, r4));
      return setResponseStatus(t8, d7.status && 200 !== d7.status ? d7.status : a13.status, d7.statusText || a13.statusText), send(t8, p6);
    }, function(e8, t8) {
      const r3 = defaultHandler(e8, t8);
      return setResponseHeaders(t8, r3.headers), setResponseStatus(t8, r3.status, r3.statusText), send(t8, JSON.stringify(r3.body, null, 2));
    }];
    normalizePath = /* @__PURE__ */ __name((e8, t8) => {
      if ("string" != typeof e8) return e8;
      const r3 = (function(e9) {
        if (!e9.includes("%")) return e9;
        const t9 = e9.indexOf("?"), r4 = -1 === t9 ? e9 : e9.slice(0, t9);
        try {
          return -1 === t9 ? decodeURI(r4) : decodeURI(r4) + e9.slice(t9);
        } catch {
          return e9;
        }
      })((function(e9) {
        const t9 = e9.indexOf("?"), r4 = -1 === t9 ? e9 : e9.slice(0, t9);
        if (!/(?:^|\/)(?:\.|%2e)/i.test(r4)) return e9;
        const s5 = r4.split("/"), a13 = [], c5 = r4.startsWith("/") ? 1 : 0;
        for (const [e10, t10] of s5.entries()) {
          const r5 = /^(?:\.|%2e)(\.|%2e)?$/i.exec(t10);
          r5 ? (r5[1] && a13.length > c5 && a13.pop(), e10 === s5.length - 1 && a13.push("")) : a13.push(t10);
        }
        const u9 = a13.join("/");
        return -1 === t9 ? u9 : u9 + e9.slice(t9);
      })(e8));
      return t8 ? (function(e9) {
        return e9.replace(/[A-Z]+|[^\0-\x7F]/g, (e10) => {
          if (e10.charCodeAt(0) < 128) return e10.toLowerCase();
          const t9 = e10.toUpperCase();
          if (1 !== t9.length || t9.charCodeAt(0) < 128) return e10;
          const r4 = t9.toLowerCase();
          return 1 === r4.length && r4.toUpperCase() === t9 ? r4 : t9;
        });
      })(r3) : r3;
    }, "normalizePath");
    normalizeRouteRulePath = /* @__PURE__ */ __name((e8) => normalizePath(e8, true), "normalizeRouteRulePath");
    __name(matchRouteRules, "matchRouteRules");
    __name(resolveRequestRouteRules, "resolveRequestRouteRules");
    __name(getRouteRules2, "getRouteRules");
    Hi = [(e8) => {
      e8.hooks.hook("request", (e9) => {
        e9.context._nitro ||= {}, e9.context._nitro.routeRules = resolveRequestRouteRules(e9);
      });
    }];
    _lazy_LuixcS = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e8) {
      return e8.n;
    }), "_lazy_LuixcS");
    Oi = [{ route: "/__nuxt_error", handler: _lazy_LuixcS, lazy: true, middleware: false, method: void 0 }, { route: "/__nuxt_island/**", handler: defineEventHandler(() => {
    }), lazy: false, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_LuixcS, lazy: true, middleware: false, method: void 0 }];
    Mi = (function() {
      const e8 = useRuntimeConfig2(), t8 = new cn(), captureError = /* @__PURE__ */ __name((e9, r4 = {}) => {
        const s6 = t8.callHookParallel("error", e9, r4).catch((e10) => {
          console.error("Error while capturing another error", e10);
        });
        if (r4.event && isEvent(r4.event)) {
          const t9 = r4.event.context.nitro?.errors;
          t9 && t9.push({ error: e9, context: r4 }), r4.event.waitUntil && r4.event.waitUntil(s6);
        }
      }, "captureError"), r3 = createApp$1({ debug: destr(false), onError: /* @__PURE__ */ __name((e9, t9) => (captureError(e9, { event: t9, tags: ["request"] }), (async function(e10, t10) {
        for (const r4 of ji) try {
          if (await r4(e10, t10, { defaultHandler }), t10.handled) return;
        } catch (e11) {
          console.error(e11);
        }
      })(e9, t9)), "onError"), onRequest: /* @__PURE__ */ __name(async (e9) => {
        e9.context.nitro = e9.context.nitro || { errors: [] };
        const t9 = e9.node.req?.__unenv__;
        t9?._platform && (e9.context = { _platform: t9?._platform, ...t9._platform, ...e9.context }), !e9.context.waitUntil && t9?.waitUntil && (e9.context.waitUntil = t9.waitUntil), e9.fetch = (t10, r4) => fetchWithEvent(e9, t10, r4, { fetch: localFetch }), e9.$fetch = (t10, r4) => fetchWithEvent(e9, t10, r4, { fetch: c5 }), e9.waitUntil = (t10) => {
          e9.context.nitro._waitUntilPromises || (e9.context.nitro._waitUntilPromises = []), e9.context.nitro._waitUntilPromises.push(t10), e9.context.waitUntil && e9.context.waitUntil(t10);
        }, e9.captureError = (t10, r4) => {
          captureError(t10, { event: e9, ...r4 });
        }, await Mi.hooks.callHook("request", e9).catch((t10) => {
          captureError(t10, { event: e9, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e9, t9) => {
        await Mi.hooks.callHook("beforeResponse", e9, t9).catch((t10) => {
          captureError(t10, { event: e9, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e9, t9) => {
        await Mi.hooks.callHook("afterResponse", e9, t9).catch((t10) => {
          captureError(t10, { event: e9, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s5 = (function(e9 = {}) {
        const t9 = createRouter$1({}), r4 = {};
        let s6;
        const a14 = {}, addRoute = /* @__PURE__ */ __name((e10, s7, c7) => {
          let u9 = r4[e10];
          if (u9 || (r4[e10] = u9 = { path: e10, handlers: {} }, t9.insert(e10, u9)), Array.isArray(c7)) for (const t10 of c7) addRoute(e10, s7, t10);
          else u9.handlers[c7] = toEventHandler(s7);
          return a14;
        }, "addRoute");
        a14.use = a14.add = (e10, t10, r5) => addRoute(e10, t10, r5 || "all");
        for (const e10 of sn) a14[e10] = (t10, r5) => a14.add(t10, r5, e10);
        const matchHandler = /* @__PURE__ */ __name((e10 = "/", r5 = "get") => {
          const a15 = e10.indexOf("?");
          -1 !== a15 && (e10 = e10.slice(0, Math.max(0, a15)));
          const c7 = t9.lookup(e10);
          if (!c7 || !c7.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e10 || "/"}.` }) };
          let u9 = c7.handlers[r5] || c7.handlers.all;
          if (!u9) {
            s6 || (s6 = toRouteMatcher(t9));
            const a16 = s6.matchAll(e10).reverse();
            for (const e11 of a16) {
              if (e11.handlers[r5]) {
                u9 = e11.handlers[r5], c7.handlers[r5] = c7.handlers[r5] || u9;
                break;
              }
              if (e11.handlers.all) {
                u9 = e11.handlers.all, c7.handlers.all = c7.handlers.all || u9;
                break;
              }
            }
          }
          return u9 ? { matched: c7, handler: u9 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r5} is not allowed on this route.` }) };
        }, "matchHandler"), c6 = e9.preemptive || e9.preemtive;
        return a14.handler = rn((e10) => {
          const t10 = matchHandler(e10.path, e10.method.toLowerCase());
          if ("error" in t10) {
            if (c6) throw t10.error;
            return;
          }
          e10.context.matchedRoute = t10.matched;
          const r5 = t10.matched.params || {};
          return e10.context.params = r5, Promise.resolve(t10.handler(e10)).then((e11) => void 0 === e11 && c6 ? null : e11);
        }), a14.handler.__resolve__ = async (e10) => {
          e10 = withLeadingSlash(e10);
          const t10 = matchHandler(e10);
          if ("error" in t10) return;
          let r5 = { route: t10.matched.path, handler: t10.handler };
          if (t10.handler.__resolve__) {
            const s7 = await t10.handler.__resolve__(e10);
            if (!s7) return;
            r5 = { ...r5, ...s7 };
          }
          return r5;
        }, a14;
      })({ preemptive: true }), a13 = toNodeListener(r3), localFetch = /* @__PURE__ */ __name((e9, t9) => e9.toString().startsWith("/") ? (async function(e10, t10, r4 = {}) {
        try {
          const s6 = await b5(e10, { url: t10, ...r4 });
          return new Response(s6.body, { status: s6.status, statusText: s6.statusText, headers: v6(s6.headers) });
        } catch (e11) {
          return new Response(e11.toString(), { status: Number.parseInt(e11.statusCode || e11.code) || 500, statusText: e11.statusText });
        }
      })(a13, e9, t9).then((e10) => (function(e11) {
        return e11.headers.has("set-cookie") ? new Response(e11.body, { status: e11.status, statusText: e11.statusText, headers: normalizeCookieHeaders(e11.headers) }) : e11;
      })(e10)) : globalThis.fetch(e9, t9), "localFetch"), c5 = createFetch({ fetch: localFetch, Headers: yn, defaults: { baseURL: e8.app.baseURL } });
      globalThis.$fetch = c5, r3.use(createRouteRulesHandler({ localFetch }));
      for (const t9 of Oi) {
        let a14 = t9.lazy ? lazyEventHandler(t9.handler) : t9.handler;
        if (t9.middleware || !t9.route) {
          const s6 = (e8.app.baseURL + (t9.route || "/")).replace(/\/+/g, "/");
          r3.use(s6, a14);
        } else {
          const e9 = getRouteRulesForPath(t9.route.replace(/:\w+|\*\*/g, "_"));
          e9.cache && (a14 = cachedEventHandler(a14, { group: "nitro/routes", ...e9.cache })), s5.use(t9.route, a14, t9.method);
        }
      }
      return r3.use(e8.app.baseURL, s5.handler), { hooks: t8, h3App: r3, router: s5, localCall: /* @__PURE__ */ __name((e9) => b5(a13, e9), "localCall"), localFetch, captureError };
    })();
    __name(useNitroApp, "useNitroApp");
    __name(defineRenderHandler, "defineRenderHandler");
    !(function(e8) {
      for (const t8 of Hi) try {
        t8(e8);
      } catch (t9) {
        throw e8.captureError(t9, { tags: ["plugin"] }), t9;
      }
    })(Mi);
    Ii = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2026-10-28T06:28:55.515Z", size: 4286, path: "../public/favicon.ico" }, "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"18-j8OIsL9qGDmNZ+lHhp2tyH4XtaE"', mtime: "2026-10-28T06:28:55.515Z", size: 24, path: "../public/robots.txt" }, "/_nuxt/BCnH4Cp6.js": { type: "text/javascript; charset=utf-8", etag: '"f0a-+NR9HjFyUEEEffwhruBsZT9OHBM"', mtime: "2026-10-28T06:28:55.511Z", size: 3850, path: "../public/_nuxt/BCnH4Cp6.js" }, "/_nuxt/BIr8ob7C.js": { type: "text/javascript; charset=utf-8", etag: '"700-+BQJsohkJH5/b2XR/k95zU1eKBU"', mtime: "2026-10-28T06:28:55.511Z", size: 1792, path: "../public/_nuxt/BIr8ob7C.js" }, "/_nuxt/BJcFph-C.js": { type: "text/javascript; charset=utf-8", etag: '"922-3mnwXG1XAea5apUXnzwboo+CGXM"', mtime: "2026-10-28T06:28:55.511Z", size: 2338, path: "../public/_nuxt/BJcFph-C.js" }, "/_nuxt/BPDn-QWt.js": { type: "text/javascript; charset=utf-8", etag: '"800-Z4HnFaJ2E8IlMF0L8zWCHFrYuGA"', mtime: "2026-10-28T06:28:55.511Z", size: 2048, path: "../public/_nuxt/BPDn-QWt.js" }, "/_nuxt/BQL4cDRA.js": { type: "text/javascript; charset=utf-8", etag: '"3e8-3/oj7upBWi7bSs9GnssKfk05Uto"', mtime: "2026-10-28T06:28:55.511Z", size: 1e3, path: "../public/_nuxt/BQL4cDRA.js" }, "/_nuxt/Bb9PCuJ6.js": { type: "text/javascript; charset=utf-8", etag: '"a7b-E2w7se+qTydX4UvqWGRWlJ7HZZo"', mtime: "2026-10-28T06:28:55.511Z", size: 2683, path: "../public/_nuxt/Bb9PCuJ6.js" }, "/_nuxt/BfBhOUX5.js": { type: "text/javascript; charset=utf-8", etag: '"72b-v9LNuHIYwh4VTfN+RYT5Tq5/qu8"', mtime: "2026-10-28T06:28:55.511Z", size: 1835, path: "../public/_nuxt/BfBhOUX5.js" }, "/_nuxt/BpKzGspg.js": { type: "text/javascript; charset=utf-8", etag: '"5be-h6jn5SrXz0+N/A50V7o/69HsNQs"', mtime: "2026-10-28T06:28:55.511Z", size: 1470, path: "../public/_nuxt/BpKzGspg.js" }, "/_nuxt/BtKRVdOW.js": { type: "text/javascript; charset=utf-8", etag: '"9a9-lytgzvkrl+wEF+DnZLomY5KbOns"', mtime: "2026-10-28T06:28:55.511Z", size: 2473, path: "../public/_nuxt/BtKRVdOW.js" }, "/_nuxt/BswwKXkk.js": { type: "text/javascript; charset=utf-8", etag: '"543-r9JiLvtRemQ0LTQBgJe8wxHFubw"', mtime: "2026-10-28T06:28:55.511Z", size: 1347, path: "../public/_nuxt/BswwKXkk.js" }, "/_nuxt/BpSbXgTD.js": { type: "text/javascript; charset=utf-8", etag: '"606-88vIGCYhSgaoIMgwpuM9j0sNenQ"', mtime: "2026-10-28T06:28:55.511Z", size: 1542, path: "../public/_nuxt/BpSbXgTD.js" }, "/_nuxt/Bw-AwTwM.js": { type: "text/javascript; charset=utf-8", etag: '"30b-0sTgM26JA7i28k8MW4Q6Svqp8ro"', mtime: "2026-10-28T06:28:55.511Z", size: 779, path: "../public/_nuxt/Bw-AwTwM.js" }, "/_nuxt/CGTBU1OG.js": { type: "text/javascript; charset=utf-8", etag: '"8da-eC+UMH7P1QkAXfDJJG6paMZsW+4"', mtime: "2026-10-28T06:28:55.511Z", size: 2266, path: "../public/_nuxt/CGTBU1OG.js" }, "/_nuxt/C8Mb2oub.js": { type: "text/javascript; charset=utf-8", etag: '"8d5-3w6pWCBOSFBg85YZgIhMr2WE/CA"', mtime: "2026-10-28T06:28:55.511Z", size: 2261, path: "../public/_nuxt/C8Mb2oub.js" }, "/_nuxt/CL3YpuSh.js": { type: "text/javascript; charset=utf-8", etag: '"21a3-sd5uY6vxZ8K/r7DOGAqkJvdC8/4"', mtime: "2026-10-28T06:28:55.511Z", size: 8611, path: "../public/_nuxt/CL3YpuSh.js" }, "/_nuxt/CLj74yN_.js": { type: "text/javascript; charset=utf-8", etag: '"a25-DPyUB45eAUTA+c+MvhpwCmK5ByE"', mtime: "2026-10-28T06:28:55.511Z", size: 2597, path: "../public/_nuxt/CLj74yN_.js" }, "/_nuxt/C6bivEq8.js": { type: "text/javascript; charset=utf-8", etag: '"20436-AFGw8QsMr0KK0J3LeJyY1oKm3Zw"', mtime: "2026-10-28T06:28:55.511Z", size: 132150, path: "../public/_nuxt/C6bivEq8.js" }, "/_nuxt/Cj_qxPw7.js": { type: "text/javascript; charset=utf-8", etag: '"21f-ciGs3DLGsDjtsfBriBgb+sZZsVk"', mtime: "2026-10-28T06:28:55.511Z", size: 543, path: "../public/_nuxt/Cj_qxPw7.js" }, "/_nuxt/CaL8Ygpz.js": { type: "text/javascript; charset=utf-8", etag: '"6f9-9A0BSQ9yYfH5XltS0fjGjdmG0tM"', mtime: "2026-10-28T06:28:55.511Z", size: 1785, path: "../public/_nuxt/CaL8Ygpz.js" }, "/_nuxt/CbfbWFDk.js": { type: "text/javascript; charset=utf-8", etag: '"4e7-9MHETJz26a5aEYtHbVERjg+91MY"', mtime: "2026-10-28T06:28:55.511Z", size: 1255, path: "../public/_nuxt/CbfbWFDk.js" }, "/_nuxt/D2FlIHZD.js": { type: "text/javascript; charset=utf-8", etag: '"b3d-7P8r3h+47zDcwVZKe6Id1X6gqgc"', mtime: "2026-10-28T06:28:55.511Z", size: 2877, path: "../public/_nuxt/D2FlIHZD.js" }, "/_nuxt/DFn0F-hK.js": { type: "text/javascript; charset=utf-8", etag: '"18ca-gy7ye4SKJLlVFyeYr4AKlS6dgbA"', mtime: "2026-10-28T06:28:55.511Z", size: 6346, path: "../public/_nuxt/DFn0F-hK.js" }, "/_nuxt/Cy-3SMU3.js": { type: "text/javascript; charset=utf-8", etag: '"158f1-XF4Auojr8D8dfN0LjGRbWnDLvx4"', mtime: "2026-10-28T06:28:55.511Z", size: 88305, path: "../public/_nuxt/Cy-3SMU3.js" }, "/_nuxt/DJy50lj5.js": { type: "text/javascript; charset=utf-8", etag: '"2709-xR/09GUX3E4AP0B5I8NDGIO3uko"', mtime: "2026-10-28T06:28:55.511Z", size: 9993, path: "../public/_nuxt/DJy50lj5.js" }, "/_nuxt/DNmz-Owj.js": { type: "text/javascript; charset=utf-8", etag: '"1da-v7yt+ykSHZNko43zEzxzVl1xYSY"', mtime: "2026-10-28T06:28:55.515Z", size: 474, path: "../public/_nuxt/DNmz-Owj.js" }, "/_nuxt/DOVKIWsO.js": { type: "text/javascript; charset=utf-8", etag: '"898-RfkDlYzSGIXdK+FKaMn/rQacVZI"', mtime: "2026-10-28T06:28:55.515Z", size: 2200, path: "../public/_nuxt/DOVKIWsO.js" }, "/_nuxt/DRPtDdyW.js": { type: "text/javascript; charset=utf-8", etag: '"1f2-XdhmSj1tvsL5q99dy3cseg9qUoY"', mtime: "2026-10-28T06:28:55.515Z", size: 498, path: "../public/_nuxt/DRPtDdyW.js" }, "/_nuxt/DRoCcGAd.js": { type: "text/javascript; charset=utf-8", etag: '"d77-VikoVBOp1uQqdPj8kb+Iagb1aPs"', mtime: "2026-10-28T06:28:55.515Z", size: 3447, path: "../public/_nuxt/DRoCcGAd.js" }, "/_nuxt/DUPanOht.js": { type: "text/javascript; charset=utf-8", etag: '"fc5-/xWKBhWS912+3SHIyX971RxX/Aw"', mtime: "2026-10-28T06:28:55.515Z", size: 4037, path: "../public/_nuxt/DUPanOht.js" }, "/_nuxt/D_RMe9Vp.js": { type: "text/javascript; charset=utf-8", etag: '"ad0-ERSJNp+9jy4vjQlR9qAaCspbbgk"', mtime: "2026-10-28T06:28:55.515Z", size: 2768, path: "../public/_nuxt/D_RMe9Vp.js" }, "/_nuxt/DiDZZEqL.js": { type: "text/javascript; charset=utf-8", etag: '"506-olWfKORcjRabHWtpnQ9elEhQpZU"', mtime: "2026-10-28T06:28:55.515Z", size: 1286, path: "../public/_nuxt/DiDZZEqL.js" }, "/_nuxt/Dje6XMHP.js": { type: "text/javascript; charset=utf-8", etag: '"2fa-RgVdo/hDVhDbOjE7dAaneFNrBhg"', mtime: "2026-10-28T06:28:55.515Z", size: 762, path: "../public/_nuxt/Dje6XMHP.js" }, "/_nuxt/DoRJ1LK7.js": { type: "text/javascript; charset=utf-8", etag: '"3373-Mv2Y1+HkLpH47z1PL/sBmbJYbVk"', mtime: "2026-10-28T06:28:55.515Z", size: 13171, path: "../public/_nuxt/DoRJ1LK7.js" }, "/_nuxt/DoTJ3fRc.js": { type: "text/javascript; charset=utf-8", etag: '"e59-Sz41KWY4Ed62KwtTB8DmvLwTYX0"', mtime: "2026-10-28T06:28:55.515Z", size: 3673, path: "../public/_nuxt/DoTJ3fRc.js" }, "/_nuxt/Drie8Mey.js": { type: "text/javascript; charset=utf-8", etag: '"346-AJ1RBUGbXU0d6GRimuY8PEECtBU"', mtime: "2026-10-28T06:28:55.515Z", size: 838, path: "../public/_nuxt/Drie8Mey.js" }, "/_nuxt/DsSn80zL.js": { type: "text/javascript; charset=utf-8", etag: '"20b-vgW05EuMJp09mMfTxYO2OX3ixXc"', mtime: "2026-10-28T06:28:55.515Z", size: 523, path: "../public/_nuxt/DsSn80zL.js" }, "/_nuxt/LjUGY0W2.js": { type: "text/javascript; charset=utf-8", etag: '"11f2-q6VwtBlz6FKNbVP1Pv5tdPLD9so"', mtime: "2026-10-28T06:28:55.515Z", size: 4594, path: "../public/_nuxt/LjUGY0W2.js" }, "/_nuxt/N2YC78jn.js": { type: "text/javascript; charset=utf-8", etag: '"465-5hSIaOlPLd318gi9pqwNi/3DxSw"', mtime: "2026-10-28T06:28:55.515Z", size: 1125, path: "../public/_nuxt/N2YC78jn.js" }, "/_nuxt/StatusBadge.Bnd-q1nU.css": { type: "text/css; charset=utf-8", etag: '"185-9Wfc0dM4OCJZAQ3H5sKF3jp9mL4"', mtime: "2026-10-28T06:28:55.515Z", size: 389, path: "../public/_nuxt/StatusBadge.Bnd-q1nU.css" }, "/_nuxt/UiModal.DBB4qB6Q.css": { type: "text/css; charset=utf-8", etag: '"140-FCA8Pp/f6SNmT2yOeIuSXYzhQn8"', mtime: "2026-10-28T06:28:55.515Z", size: 320, path: "../public/_nuxt/UiModal.DBB4qB6Q.css" }, "/_nuxt/RmaXoM4B.js": { type: "text/javascript; charset=utf-8", etag: '"3288-UZHf2qcV8dd5x+x+AF/bsfIF8a4"', mtime: "2026-10-28T06:28:55.515Z", size: 12936, path: "../public/_nuxt/RmaXoM4B.js" }, "/_nuxt/_id_.CEypsjg0.css": { type: "text/css; charset=utf-8", etag: '"11d-6qNPIx/bHH4SIzHE3menNrXb/K4"', mtime: "2026-10-28T06:28:55.515Z", size: 285, path: "../public/_nuxt/_id_.CEypsjg0.css" }, "/_nuxt/_id_.DZ2IOmF6.css": { type: "text/css; charset=utf-8", etag: '"ee-aLSQjNbLoVzLLDlIDc4SPJvpDq8"', mtime: "2026-10-28T06:28:55.515Z", size: 238, path: "../public/_nuxt/_id_.DZ2IOmF6.css" }, "/_nuxt/_id_.vs7zx8Lw.css": { type: "text/css; charset=utf-8", etag: '"13d-/JBDv/MCqtGO8VmZVevq0QF4bvs"', mtime: "2026-10-28T06:28:55.515Z", size: 317, path: "../public/_nuxt/_id_.vs7zx8Lw.css" }, "/_nuxt/_recId_.ik-iL9lF.css": { type: "text/css; charset=utf-8", etag: '"16d-b3U2wczsHir7pCDabj9R0UB8yI8"', mtime: "2026-10-28T06:28:55.515Z", size: 365, path: "../public/_nuxt/_recId_.ik-iL9lF.css" }, "/_nuxt/client.BKjTRYhf.css": { type: "text/css; charset=utf-8", etag: '"c7-iV6f6Iu4EHUvrTVqRJOewZyP55c"', mtime: "2026-10-28T06:28:55.515Z", size: 199, path: "../public/_nuxt/client.BKjTRYhf.css" }, "/_nuxt/entry.DEX35-jb.css": { type: "text/css; charset=utf-8", etag: '"1102-CRAU6rOVGy/meSFkRwiP40yI5W8"', mtime: "2026-10-28T06:28:55.515Z", size: 4354, path: "../public/_nuxt/entry.DEX35-jb.css" }, "/_nuxt/error-404.DpKY_dMl.css": { type: "text/css; charset=utf-8", etag: '"a8d-ikaaK5LbtZuaZygnIu5mAjYDRiQ"', mtime: "2026-10-28T06:28:55.515Z", size: 2701, path: "../public/_nuxt/error-404.DpKY_dMl.css" }, "/_nuxt/error-500.CmR4p1fc.css": { type: "text/css; charset=utf-8", etag: '"79f-oUFNPOuVEcj5aJV0yQGGzo21VAE"', mtime: "2026-10-28T06:28:55.515Z", size: 1951, path: "../public/_nuxt/error-500.CmR4p1fc.css" }, "/_nuxt/gO-w-44M.js": { type: "text/javascript; charset=utf-8", etag: '"28e-Pn5LUhfnl5wdYTijH49eTWenRKw"', mtime: "2026-10-28T06:28:55.515Z", size: 654, path: "../public/_nuxt/gO-w-44M.js" }, "/_nuxt/oYDUav9_.js": { type: "text/javascript; charset=utf-8", etag: '"20a-VexxD0ESiuyixi4+N7Du4s5B97k"', mtime: "2026-10-28T06:28:55.515Z", size: 522, path: "../public/_nuxt/oYDUav9_.js" }, "/_nuxt/pages.Ba3O-VlV.css": { type: "text/css; charset=utf-8", etag: '"ea-frpygk8DrRpWOASYhxtA2FJMuaM"', mtime: "2026-10-28T06:28:55.515Z", size: 234, path: "../public/_nuxt/pages.Ba3O-VlV.css" }, "/_nuxt/pages.PW9KxdVE.css": { type: "text/css; charset=utf-8", etag: '"8a-ihZn1EFMcQ08bHUsemFabnqEymo"', mtime: "2026-10-28T06:28:55.515Z", size: 138, path: "../public/_nuxt/pages.PW9KxdVE.css" }, "/_nuxt/portal.klRHXpEn.css": { type: "text/css; charset=utf-8", etag: '"72f-485dQdeZFAPdcB8ynw5asdNqFLc"', mtime: "2026-10-28T06:28:55.515Z", size: 1839, path: "../public/_nuxt/portal.klRHXpEn.css" }, "/_nuxt/profile.BeUgw6L1.css": { type: "text/css; charset=utf-8", etag: '"b6-+cxp0q3sJsndnbKFdmpCywfjSt0"', mtime: "2026-10-28T06:28:55.515Z", size: 182, path: "../public/_nuxt/profile.BeUgw6L1.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-4JqJzeAOLcR/9KWBQ/SHeQvyAlw"', mtime: "2026-10-28T06:28:55.503Z", size: 71, path: "../public/_nuxt/builds/latest.json" }, "/_nuxt/public.DDYGdi06.css": { type: "text/css; charset=utf-8", etag: '"298-s4o27bH8v0nrgqiC9O2x33iO+5c"', mtime: "2026-10-28T06:28:55.515Z", size: 664, path: "../public/_nuxt/public.DDYGdi06.css" }, "/_nuxt/builds/meta/3e964c62-4f23-49e8-9f1f-3aa3fd349fd9.json": { type: "application/json", etag: '"58-jR4/Sa/lEyLZ0uX36VUygWDlBqs"', mtime: "2026-10-28T06:28:55.499Z", size: 88, path: "../public/_nuxt/builds/meta/3e964c62-4f23-49e8-9f1f-3aa3fd349fd9.json" } };
    Bi = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
    Ni = (function(e8) {
      const t8 = useNitroApp();
      return { async fetch(r3, a13, c5) {
        const u9 = {}, d7 = new URL(r3.url);
        if (e8.fetch) {
          const t9 = await e8.fetch(r3, a13, c5, d7, u9);
          if (t9) return t9;
        }
        return (async function(e9, t9, r4, a14 = new URL(e9.url), c6 = useNitroApp(), u10) {
          let d8;
          (function(e10) {
            return qn.test(e10.method);
          })(e9) && (d8 = s4.from(await e9.arrayBuffer()));
          return globalThis.__env__ = t9, c6.localFetch(a14.pathname + a14.search, { context: { waitUntil: /* @__PURE__ */ __name((e10) => r4.waitUntil(e10), "waitUntil"), _platform: { cf: e9.cf, cloudflare: { request: e9, env: t9, context: r4, url: a14, ...u10 } } }, host: a14.hostname, protocol: a14.protocol, method: e9.method, headers: e9.headers, body: d8 });
        })(r3, a13, c5, d7, t8, u9);
      }, scheduled(e9, r3, s5) {
        globalThis.__env__ = r3, s5.waitUntil(t8.hooks.callHook("cloudflare:scheduled", { controller: e9, env: r3, context: s5 }));
      }, email(e9, r3, s5) {
        globalThis.__env__ = r3, s5.waitUntil(t8.hooks.callHook("cloudflare:email", { message: e9, event: e9, env: r3, context: s5 }));
      }, queue(e9, r3, s5) {
        globalThis.__env__ = r3, s5.waitUntil(t8.hooks.callHook("cloudflare:queue", { batch: e9, event: e9, env: r3, context: s5 }));
      }, tail(e9, r3, s5) {
        globalThis.__env__ = r3, s5.waitUntil(t8.hooks.callHook("cloudflare:tail", { traces: e9, env: r3, context: s5 }));
      }, trace(e9, r3, s5) {
        globalThis.__env__ = r3, s5.waitUntil(t8.hooks.callHook("cloudflare:trace", { traces: e9, env: r3, context: s5 }));
      } };
    })({ fetch(e8, t8, r3, s5) {
      if (t8.ASSETS && (function(e9 = "") {
        if (Ii[e9]) return true;
        for (const t9 in Bi) if (e9.startsWith(t9)) return true;
        return false;
      })(s5.pathname)) return t8.ASSETS.fetch(e8);
    } });
  }
});

// server/index.mjs
init_nitro();
import "node:process";
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };
export {
  Ni as default
};
//# sourceMappingURL=index.js.map
