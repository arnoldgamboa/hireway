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
        <div class="wordmark">Hireway</div>
        <div class="meta">{{ portalLabel }}</div>
      </div>
      <nav class="side-links">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
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
      <slot />
    </main>
  </div>
</template>

<style scoped>
.portal-shell {
  display: flex;
  min-height: calc(100vh - 3rem);
  align-items: stretch;
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
</style>
