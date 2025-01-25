<template>
  <div class="lang-switch">
    <button 
      v-for="lang in languages" 
      :key="lang.code"
      :class="{ active: currentLocale === lang.code }"
      @click="changeLocale(lang.code)"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'EN' }
]

const currentLocale = computed(() => locale.value)

const changeLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<style lang="scss" scoped>
.lang-switch {
  position: fixed;
  top: var(--spacing-md);
  right: var(--spacing-md);
  z-index: 100;
  display: flex;
  gap: var(--spacing-xs);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 4px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: var(--radius-md);
    font-weight: 500;
    color: var(--color-text-light);
    transition: all 0.2s ease;
    
    &.active {
      background: var(--color-primary);
      color: white;
    }
    
    &:hover:not(.active) {
      background: var(--color-bg-alt);
      color: var(--color-primary);
    }
  }
}

// 移动端样式调整
@media (max-width: 768px) {
  .lang-switch {
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    
    button {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
  }
}
</style> 