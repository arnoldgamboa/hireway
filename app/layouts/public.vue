<template>
  <div class="public-layout">
    <header class="public-header">
      <div class="layout-container public-header__inner">
        <NuxtLink to="/" class="logo">Hireway</NuxtLink>
        <nav class="nav">
          <NuxtLink to="/">Jobs</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/employers">For employers</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="public-main">
      <div class="layout-container">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.public-layout {
  min-height: calc(100vh - 3rem);
  display: flex;
  flex-direction: column;
}

.public-header {
  background: var(--surface);
  border-bottom: 1px solid var(--line);
}

.public-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1rem;
}

.logo {
  font-weight: 600;
  font-size: 1.125rem;
  color: var(--ink);
  text-decoration: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav a {
  color: var(--ink-soft);
  text-decoration: none;
  font-size: 0.9375rem;
}

.nav a.router-link-active {
  color: var(--primary);
  font-weight: 500;
}

.public-main {
  flex: 1;
  min-width: 0;
}

.public-main .layout-container {
  padding-block: 2rem;
}
</style>
