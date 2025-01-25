<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="copyright">
        © {{ currentYear }} {{ $t('footer.copyright') }}
      </div>
      <div class="social-links">
        <a href="https://github.com/cailven" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/cailven" target="_blank" rel="noopener">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.app-footer {
  margin-top: auto;
  padding: var(--spacing-md) 0;
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: var(--color-text-light);
  }
  
  .social-links {
    display: flex;
    gap: var(--spacing-md);
    
    a {
      color: var(--color-text-light);
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--color-primary);
      }
      
      i {
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .app-footer {
    display: none;
  }
}
</style> 