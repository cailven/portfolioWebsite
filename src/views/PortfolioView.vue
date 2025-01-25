<template>
  <div class="portfolio">
    <div class="left-section">
      <div class="header-content">
        <h1>{{ $t('portfolio.title') }}</h1>
        <p class="subtitle">{{ $t('portfolio.subtitle') }}</p>
      </div>
      
      <div class="filter-section">
        <n-card>
          <n-space vertical>
            <div class="filter-group">
              <h3>{{ $t('portfolio.filterTitle') }}</h3>
              <n-space>
                <n-tag 
                  v-for="tag in availableTags" 
                  :key="tag"
                  :bordered="false"
                  round
                  :type="currentTag === tag ? 'primary' : 'default'"
                  @click="filterByTag(tag)"
                >
                  {{ $t(`portfolio.tags.${tag}`) }}
                </n-tag>
              </n-space>
            </div>
          </n-space>
        </n-card>
      </div>
    </div>
    
    <div class="main-content">
      <div class="content-wrapper">
        <div class="work-grid">
          <n-card 
            v-for="work in filteredWorks" 
            :key="work.id"
            class="work-card"
            hoverable
            @click="goToWork(work.id)"
          >
            <div class="work-cover">
              <img :src="work.cover" :alt="work.title[locale]">
            </div>
            <div class="work-info">
              <h3>{{ work.title[locale] }}</h3>
              <p class="description">{{ work.description[locale] }}</p>
              <div class="tags">
                <n-tag 
                  v-for="tag in work.tags" 
                  :key="tag"
                  size="small"
                  :bordered="false"
                  round
                >
                  {{ $t(`portfolio.tags.${tag}`) }}
                </n-tag>
              </div>
            </div>
          </n-card>
        </div>
        
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { getAllTags, getWorksByTag } from '@/data/works'

const { locale } = useI18n()
const router = useRouter()

const currentTag = ref('all')
const availableTags = getAllTags()

const filteredWorks = computed(() => {
  return getWorksByTag(currentTag.value)
})

const filterByTag = (tag) => {
  currentTag.value = tag
}

const goToWork = (id) => {
  router.push(`/portfolio/${id}`)
}
</script>

<style lang="scss" scoped>
.portfolio {
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
}

.left-section {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 380px;
  background: var(--color-bg-dark);
  color: white;
  overflow-y: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  
  .header-content {
    padding: var(--spacing-xl);
    background: linear-gradient(
      to bottom,
      var(--color-bg-dark) 0%,
      rgba(37, 99, 235, 0.1) 100%
    );
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-sm);
      color: white;
    }
    
    .subtitle {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
  
  .filter-section {
    padding: var(--spacing-xl);
    flex: 1;
    
    :deep(.n-card) {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
}

.main-content {
  flex: 1;
  margin-left: 380px;
  min-height: 100vh;
  
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-xl);
  }
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  
  .work-card {
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
}

// 移动端适配
@media (max-width: 1024px) {
  .left-section {
    width: 340px;
  }
  
  .main-content {
    margin-left: 340px;
  }
}

@media (max-width: 768px) {
  .portfolio {
    flex-direction: column;
  }
  
  .left-section {
    position: relative;
    width: 100%;
    height: auto;
    
    .header-content {
      text-align: center;
      
      h1 {
        font-size: 2rem;
      }
    }
  }
  
  .main-content {
    margin-left: 0;
    
    .content-wrapper {
      padding: var(--spacing-md);
    }
  }
  
  .work-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .left-section {
    .header-content {
      padding: var(--spacing-lg) var(--spacing-md);
      
      h1 {
        font-size: 1.8rem;
      }
    }
    
    .filter-section {
      padding: var(--spacing-md);
    }
  }
}

.filter-group {
  h3 {
    color: white;
    margin-bottom: var(--spacing-md);
    font-size: 1.2rem;
  }
}

.work-card {
  overflow: hidden;
  
  .work-cover {
    aspect-ratio: 9/16;
    overflow: hidden;
    border-radius: var(--radius-md);
    margin: calc(var(--spacing-md) * -1);
    margin-bottom: var(--spacing-md);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .work-cover img {
    transform: scale(1.05);
  }
  
  .work-info {
    h3 {
      font-size: 1.2rem;
      margin-bottom: var(--spacing-sm);
    }
    
    .description {
      color: var(--color-text-light);
      margin-bottom: var(--spacing-md);
      line-height: 1.6;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xs);
    }
  }
}
</style> 