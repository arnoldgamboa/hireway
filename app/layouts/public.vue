<template>
  <div class="public-layout">
    <header class="public-header">
      <div class="layout-container public-header__inner">
        <NuxtLink to="/" class="logo"><span class="brand-mark" aria-hidden="true">h<span><UiArrow /></span></span>hireway<span class="brand-period">.</span></NuxtLink>
        <nav class="nav">
          <NuxtLink to="/">Find a job</NuxtLink>
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
    <footer class="public-footer layout-container"><span>© {{ new Date().getFullYear() }} Hireway</span><span>Good work starts with a connection.</span><div><NuxtLink to="/privacy">Privacy</NuxtLink><NuxtLink to="/terms">Terms</NuxtLink></div></footer>
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
  padding-block: 1.4rem;
}

.logo {
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--ink);
  text-decoration: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
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
  padding-block: 1.75rem;
}
.logo{display:flex;align-items:center;gap:0;letter-spacing:-1px;font-weight:600}.brand-mark{display:inline-flex;position:relative;align-items:center;justify-content:center;width:32px;height:32px;background:var(--primary);color:white;border-radius:9px;font-size:25px;margin-right:10px;font-weight:500;letter-spacing:-2px}.brand-mark>span{font-size:17px;margin:0 0 9px -3px}.brand-period{color:#83a76b}.nav a{font-size:12px}.nav a.router-link-exact-active{color:var(--primary);position:relative}.nav a.router-link-exact-active:after{content:'';position:absolute;bottom:-25px;left:0;right:0;height:2px;background:var(--primary)}.public-footer{display:flex;justify-content:space-between;gap:15px;border-top:1px solid var(--line);padding-block:24px;font-size:10px;color:#8a9387}.public-footer div{display:flex;gap:20px}.public-footer a{color:inherit}@media(max-width:600px){.public-header__inner{flex-wrap:wrap;gap:20px}.nav{gap:20px}.nav a.router-link-exact-active:after{bottom:-10px}.public-footer{flex-wrap:wrap}.public-footer>span:nth-child(2){display:none}.public-main .layout-container{padding-block:20px}}
</style>
