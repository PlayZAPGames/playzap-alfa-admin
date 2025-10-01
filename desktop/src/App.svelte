<script>
  import { Toaster } from 'svelte-french-toast'
  import { writable } from 'svelte/store'

  import Router from 'svelte-spa-router'
  import Login from './pages/Login.svelte'
  import Unauthorized from './pages/Unauthorized.svelte'
  import GamesRoute from './routes/GamesRoute.svelte'
  import { onMount } from 'svelte'
  import RedirectToLogin from './pages/redirect.svelte'



  const navItems = [
    { name: "GamesRoute", href: "/#" },
  ]

  const hash = writable(window.location.hash)
  const updateHash = () => hash.set(window.location.hash)

  onMount(() => {
    window.addEventListener('hashchange', updateHash)
    updateHash()
    return () => window.removeEventListener('hashchange', updateHash)
  })

  const routes = {
    '/': GamesRoute,
    '/login': Login,  
    '*': RedirectToLogin,

  }
</script>

<div class="app-layout">
  <div class="main-view">
    <Toaster position="top-right" />
    <Router {routes} />
  </div>
</div>

<style>
  .app-layout {
    display: flex;
    min-height: 100vh;
  }


  .main-view {
    min-width: 0px;
    flex: 1;
    /* padding: 20px; */
    transition: margin-left 0.3s ease;
  }
</style>
