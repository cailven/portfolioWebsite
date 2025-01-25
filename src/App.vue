<template>
  <div id="app">
    <LangSwitch />
    <nav :class="{ 'is-mobile': isMobile }">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/portfolio">{{ $t('nav.portfolio') }}</router-link>
      <router-link to="/experience">{{ $t('nav.experience') }}</router-link>
      <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
    </nav>
    <main class="main-content">
      <router-view/>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LangSwitch from '@/components/LangSwitch.vue'
import AppFooter from '@/components/AppFooter.vue'

const isMobile = ref(false)

const checkDevice = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

nav {
  padding: 2rem;
  text-align: center;
  
  a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0 1rem;
    
    &.router-link-active {
      color: var(--color-secondary);
    }
  }

  &.is-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 98;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    a {
      padding: 0.5rem;
      font-size: 0.9rem;
      flex: 1;
      text-align: center;
    }
  }
}

// 在移动端为固定导航栏添加底部间距
@media (max-width: 768px) {
  #app {
    padding-bottom: 60px;
  }
}
</style> 