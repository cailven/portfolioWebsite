<template>
  <n-card
    class="work-card"
    :title="work.title[locale]"
    hoverable
    @click="$emit('click')"
  >
    <template #cover>
      <div class="work-image">
        <img :src="work.cover" :alt="work.title[locale]">
        <div class="overlay">
          <n-button type="primary" ghost>
            {{ $t('portfolio.viewDetails') }}
          </n-button>
        </div>
      </div>
    </template>
    <p class="description">{{ work.description[locale] }}</p>
    <template #footer>
      <n-space>
        <n-tag
          v-for="tag in work.tags"
          :key="tag"
          :bordered="false"
          round
          size="small"
        >
          {{ tag }}
        </n-tag>
      </n-space>
    </template>
  </n-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

defineProps({
  work: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.work-card {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    
    .overlay {
      opacity: 1;
    }
  }
  
  .work-image {
    position: relative;
    aspect-ratio: 9/16;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
  
  .description {
    color: var(--color-text-light);
    margin: var(--spacing-sm) 0;
    line-height: 1.5;
  }
}
</style> 