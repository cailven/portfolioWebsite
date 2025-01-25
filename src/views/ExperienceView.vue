<template>
  <div class="experience">
    <div class="left-section">
      <div class="header-content">
        <h1>{{ $t('experience.title') }}</h1>
        <p class="subtitle">{{ $t('experience.subtitle') }}</p>
        
        <div class="stats">
          <div class="stat-item">
            <div class="number">20+</div>
            <div class="label">{{ $t('experience.yearsExp') }}</div>
          </div>
          <div class="stat-item">
            <div class="number">50+</div>
            <div class="label">{{ $t('experience.projects') }}</div>
          </div>
          <div class="stat-item">
            <div class="number">10+</div>
            <div class="label">{{ $t('experience.awards') }}</div>
          </div>
        </div>
      </div>

      <div class="skills-section">
        <h3>{{ $t('experience.skills') }}</h3>
        <div class="skill-tags">
          <n-tag
            v-for="skill in skills"
            :key="skill"
            size="large"
            :bordered="false"
            round
          >
            {{ skill }}
          </n-tag>
        </div>
      </div>
      
      <div class="quote-section">
        <i class="fas fa-quote-left quote-icon"></i>
        <p class="quote-text">{{ $t('experience.quote') }}</p>
      </div>
    </div>
    
    <div class="main-content">
      <div class="content-wrapper">
        <div class="timeline-header">
          <h2>{{ $t('experience.careerPath') }}</h2>
          <p class="timeline-desc">{{ $t('experience.careerDesc') }}</p>
        </div>

        <div class="timeline">
          <div v-for="job in jobs" :key="job.company" class="timeline-item">
            <div class="timeline-header">
              <h3>{{ job.company }}</h3>
              <span class="period">{{ job.period }}</span>
            </div>
            
            <div class="timeline-content">
              <div class="job-info">
                <h4>{{ job.position }}</h4>
                <p class="highlight">{{ job.highlight }}</p>
              </div>
              
              <div class="section">
                <h5>
                  <i class="fas fa-tasks"></i>
                  {{ $t('experience.responsibilities') }}
                </h5>
                <ul>
                  <li v-for="(item, index) in job.responsibilities" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              
              <div class="section">
                <h5>
                  <i class="fas fa-trophy"></i>
                  {{ $t('experience.achievements') }}
                </h5>
                <ul>
                  <li v-for="(item, index) in job.achievements" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 添加技能标签数据
const skills = [
  'Vue.js', 'React', 'TypeScript',
  'WebGL', 'Three.js', 'Unity3D',
  'WebRTC', 'Node.js', 'Flutter',
  'Creative Coding', 'UX Design'
]

const jobs = computed(() => {
  const { tm } = useI18n()
  
  const vmlData = {
    period: t('experience.vml.period'),
    position: t('experience.vml.position'),
    highlight: t('experience.vml.highlight'),
    responsibilities: tm('experience.vml.responsibilities'),
    achievements: tm('experience.vml.achievements'),
    company: 'VML'
  }

  const flipscriptData = {
    period: t('experience.flipscript.period'),
    position: t('experience.flipscript.position'),
    highlight: t('experience.flipscript.highlight'),
    responsibilities: tm('experience.flipscript.responsibilities'),
    achievements: tm('experience.flipscript.achievements'),
    company: 'Flipscript'
  }

  const jindaliData = {
    period: t('experience.jindali.period'),
    position: t('experience.jindali.position'),
    highlight: t('experience.jindali.highlight'),
    responsibilities: tm('experience.jindali.responsibilities'),
    achievements: tm('experience.jindali.achievements'),
    company: t('experience.jindali.company')
  }

  const qianxingData = {
    period: t('experience.qianxing.period'),
    position: t('experience.qianxing.position'),
    highlight: t('experience.qianxing.highlight'),
    responsibilities: tm('experience.qianxing.responsibilities'),
    achievements: tm('experience.qianxing.achievements'),
    company: t('experience.qianxing.company')
  }

  // 返回所有工作经验数据
  return [vmlData, flipscriptData, jindaliData, qianxingData]
})

// 添加调试代码
console.log('Jobs data:', jobs.value)
</script>

<style lang="scss" scoped>
.experience {
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
}

.main-content {
  flex: 1;
  margin-left: 400px;
  min-height: 100vh;
  
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-xl);
  }
}

.left-section {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  padding: 0;  // 移除内边距
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
  }
  
  .skills-section {
    padding: var(--spacing-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    h3 {
      margin-bottom: var(--spacing-lg);
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.9);
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      
      :deep(.n-tag) {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
        
        &:hover {
          background: var(--color-primary);
          transform: translateY(-2px);
        }
      }
    }
  }
  
  .quote-section {
    padding: var(--spacing-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto;  // 将引用推到底部
    
    .quote-icon {
      font-size: 2rem;
      color: var(--color-primary);
      opacity: 0.5;
      margin-bottom: var(--spacing-md);
    }
    
    .quote-text {
      font-style: italic;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }
  }
}

.timeline {
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-primary);
    opacity: 0.2;
  }
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--color-primary);
    border: 3px solid var(--color-bg);
  }
  
  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    h3 {
      font-size: 1.4rem;
      color: var(--color-primary);
      margin: 0;
    }
    
    .period {
      color: var(--color-text-light);
    }
  }
  
  .timeline-content {
    background: var(--color-bg);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    box-shadow: var(--shadow-sm);
    
    .job-info {
      margin-bottom: 1.5rem;
      
      h4 {
        font-size: 1.2rem;
        margin: 0 0 0.5rem;
        color: var(--color-text);
      }
      
      .highlight {
        color: var(--color-text-light);
        margin: 0;
      }
    }
    
    .section {
      margin-bottom: 1.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      h5 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0 0 1rem;
        color: var(--color-text);
        font-size: 1rem;
        
        i {
          color: var(--color-primary);
        }
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          position: relative;
          padding: 0.5rem 0 0.5rem 1.5rem;
          line-height: 1.6;
          
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--color-primary);
            transform: translateY(-50%);
            opacity: 0.6;
          }
          
          &:hover {
            background: var(--color-bg-alt);
            padding-left: 2rem;
            border-radius: var(--radius-sm);
          }
        }
      }
    }
  }
}

// 移动端适配
@media (max-width: 768px) {
  .experience {
    flex-direction: column;
  }
  
  .left-section {
    position: relative;
    width: 100%;
    height: auto;
    
    .header-content {
      text-align: center;
      padding: var(--spacing-lg);
      
      h1 {
        font-size: 2rem;
      }
      
      .stats {
        margin-top: var(--spacing-lg);
        padding: 0;
      }
    }
    
    .skills-section {
      padding: var(--spacing-lg);
    }
    
    .quote-section {
      padding: var(--spacing-lg);
    }
  }
  
  .main-content {
    margin-left: 0;
    
    .content-wrapper {
      padding: var(--spacing-lg);
      
      .timeline-header {
        h2 {
          font-size: 1.8rem;
        }
      }
    }
  }
  
  .timeline {
    padding-left: 1.5rem;
    
    &::before {
      left: 0;
    }
    
    .timeline-item {
      &::before {
        left: -1.5rem;
      }
      
      .timeline-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        
        h3 {
          font-size: 1.2rem;
        }
      }
      
      .timeline-content {
        padding: var(--spacing-md);
      }
    }
  }
}

// 针对更小屏幕的优化
@media (max-width: 480px) {
  .left-section {
    .header-content {
      padding: var(--spacing-md);
      
      h1 {
        font-size: 1.8rem;
      }
      
      .stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
        
        .stat-item:last-child {
          grid-column: span 2;
        }
      }
    }
    
    .skills-section,
    .quote-section {
      padding: var(--spacing-md);
    }
  }
  
  .main-content {
    .content-wrapper {
      padding: var(--spacing-md);
    }
  }
  
  .timeline {
    .timeline-item {
      .timeline-content {
        padding: var(--spacing-sm);
      }
    }
  }
}
</style> 