<script setup lang="ts">
const route = useRoute()
const store = useDemoStore()

const portal = computed(() => {
  if (route.path.startsWith('/hr')) return 'hr'
  if (route.path.startsWith('/client')) return 'client'
  return 'applicant'
})

const links = computed(() => {
  if (portal.value === 'applicant') {
    return [
      { to: '/applicant', label: 'Applications' },
      { to: '/applicant/profile', label: 'Profile' },
    ]
  }
  if (portal.value === 'client') {
    return [
      { to: '/client', label: 'Jobs' },
      { to: '/client/requests', label: 'Requests' },
      { to: '/client/wallet', label: 'Wallet' },
      { to: '/client/team', label: 'Team' },
    ]
  }
  return [
    { to: '/hr', label: 'Follow-ups' },
    { to: '/hr/requests', label: 'Requests' },
    { to: '/hr/jobs', label: 'Jobs' },
    { to: '/hr/clients', label: 'Clients' },
  ]
})

const portalLabel = computed(() => {
  if (portal.value === 'applicant') return 'Applicant portal'
  if (portal.value === 'client') return 'Client portal'
  return 'HR portal'
})

const notifications = computed(() => {
  if (portal.value === 'hr') return store.data.notifications.filter(n => n.userId === 'hana-cruz')
  if (portal.value === 'client') {
    const owner = store.clientOwner(store.ui.clientOrgId)
    return store.data.notifications.filter(n => n.userId === owner?.id)
  }
  return store.data.notifications.filter(n => n.userId === store.ui.applicantId)
})

const panelOpen = ref(false)
</script>

<template>
  <div class="portal-shell">
    <aside class="sidenav">
      <div class="brand">
        <NuxtLink to="/" class="wordmark"><span class="portal-mark"><UiArrow /></span> hireway.</NuxtLink>
        <div class="meta">{{ portalLabel }}</div>
      </div>
      <nav class="side-links">
        <NuxtLink v-for="(l, index) in links" :key="l.to" :to="l.to" :class="{ current: route.path === l.to || (index > 0 && route.path.startsWith(l.to + '/')) }"><span class="nav-number">0{{ index + 1 }}</span>{{ l.label }}<span class="nav-arrow"><UiArrow /></span></NuxtLink>
      </nav>
      <div class="sidenav-foot">
        <button type="button" class="bell" @click="panelOpen = !panelOpen">
          Notifications
          <span v-if="notifications.some(n => !n.read)" class="dot" />
        </button>
        <div v-if="panelOpen" class="notif-panel card">
          <div v-if="!notifications.length" class="meta">No notifications</div>
          <button
            v-for="n in notifications"
            :key="n.id"
            type="button"
            class="notif"
            :class="{ unread: !n.read }"
            @click="store.markNotificationRead(n.id)"
          >
            <strong>{{ n.title }}</strong>
            <span class="meta">{{ n.body }}</span>
          </button>
        </div>
      </div>
    </aside>
    <main class="portal-main">
      <div class="portal-topline"><span>WORKSPACE <span class="topline-divider">/</span> {{ portalLabel }}</span><NuxtLink to="/">Explore open roles <UiArrow /></NuxtLink></div>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.portal-shell {
  display: flex;
  min-height: calc(100vh - 3rem);
  align-items: stretch;
  width: 100%;
  max-width: var(--layout-max-width);
  margin-inline: auto;
}

.sidenav {
  width: 15rem;
  flex-shrink: 0;
  background: var(--surface);
  border-right: 1px solid var(--line);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wordmark {
  font-weight: 600;
  letter-spacing: -0.02em;
}

.side-links {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.side-links a {
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-btn);
  color: var(--ink-soft);
  text-decoration: none;
}

.side-links a.router-link-active {
  background: var(--tint);
  color: var(--primary);
  font-weight: 500;
}

.sidenav-foot {
  margin-top: auto;
  position: relative;
}

.bell {
  width: 100%;
  text-align: left;
  background: none;
  border: 1px solid var(--line);
  border-radius: var(--radius-btn);
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  position: relative;
}

.dot {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background: var(--danger);
  border-radius: 50%;
  transform: translateY(-50%);
}

.notif-panel {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  max-height: 14rem;
  overflow: auto;
}

.notif {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: var(--radius-btn);
}

.notif.unread {
  background: var(--tint);
}

.portal-main {
  flex: 1;
  min-width: 0;
  padding: 2rem;
}

@media (max-width: 60rem) {
  .portal-shell {
    flex-direction: column;
  }

  .sidenav {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding: 0.75rem 1rem;
  }

  .side-links {
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 0.25rem;
  }

  .sidenav-foot {
    display: none;
  }
}
.portal-shell{max-width:1440px;flex:1}.sidenav{width:230px;padding:34px 22px;background:#f0f3ed;border-right:1px solid #e0e6da;gap:32px}.wordmark{display:flex;gap:9px;align-items:center;font-size:25px;font-weight:600;letter-spacing:-1px;color:var(--primary);text-decoration:none}.portal-mark{display:grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--primary);color:white;font-size:23px}.brand>.meta{margin:12px 0 0 40px;font-size:10px}.side-links{gap:7px}.side-links a{display:flex;gap:12px;align-items:center;font-size:12px;padding:12px}.side-links a.router-link-active{background:transparent;color:var(--ink-soft);font-weight:400}.side-links a.current{background:white;color:var(--primary);font-weight:500;box-shadow:0 2px 5px #1e402908}.nav-number{font-size:9px;color:#95a28d}.nav-arrow{margin-left:auto;color:#7a8f70}.portal-main{padding:30px 40px 48px}.portal-topline{display:flex;justify-content:space-between;font-size:9px;letter-spacing:1px;color:#8b9584;margin-bottom:43px}.portal-topline>a{letter-spacing:0;font-size:10px}.topline-divider{margin-inline:10px;color:#bdc7b5}.bell{font-size:11px;background:#ffffff88;padding:12px}.notif-panel{width:280px;z-index:20}.notif strong{font-size:12px}.notif .meta{font-size:11px}@media(max-width:960px){.sidenav{width:100%;padding:20px;gap:16px}.brand{display:flex;align-items:center;justify-content:space-between}.brand>.meta{margin:0}.side-links a{padding:10px 14px}.portal-main{padding:24px}.portal-topline{margin-bottom:28px}.sidenav-foot{display:block}.bell{width:auto}.notif-panel{bottom:auto;top:100%;margin-top:8px}.nav-number{display:none}}@media(max-width:600px){.portal-main{padding:22px 20px}.portal-topline{font-size:8px;gap:8px}.portal-topline>a{font-size:9px}.side-links{gap:3px}.side-links a{font-size:11px;padding:10px}.nav-arrow{display:none}}
</style>
