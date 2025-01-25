<template>
  <n-timeline>
    <n-timeline-item
      v-for="job in jobs"
      :key="job.company"
      :title="job.company"
      :content="job.highlight"
      :time="job.period"
    >
      <template #icon>
        <div class="timeline-icon" />
      </template>
      <template #header>
        <div class="job-header">
          <span class="company">{{ job.company }}</span>
          <span class="period">{{ job.period }}</span>
        </div>
      </template>
      <div class="job-content">
        <div class="position">{{ job.position }}</div>
        <p class="highlight">{{ job.highlight }}</p>
      </div>
    </n-timeline-item>
  </n-timeline>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const jobs = computed(() => [
  {
    period: '2012 - Present',
    company: 'VML',
    position: t('experience.vml.position'),
    highlight: t('experience.vml.highlight')
  },
  {
    period: '2009 - 2012',
    company: 'Flipscript',
    position: t('experience.flipscript.position'),
    highlight: t('experience.flipscript.highlight')
  }
])
</script>

<style lang="scss" scoped>
.timeline-icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-primary);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xs);
  
  .company {
    font-weight: 600;
    color: var(--color-primary);
  }
  
  .period {
    font-size: 0.9rem;
    color: var(--color-text-light);
  }
}

.job-content {
  .position {
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
  }
  
  .highlight {
    color: var(--color-text-light);
    margin: 0;
    font-size: 0.95rem;
  }
}
</style> 