<template>
  <div class="home">
    <section class="hero">
      <LowpolyBackground />
      <div class="hero-content">
        <div class="profile-container">
          <div class="profile-image">
            <img src="/images/avatar.jpg" alt="Profile" />
          </div>
        </div>
        <div class="text-content">
          <h1 class="name">{{ $t('home.title') }}</h1>
          <h2 class="title">{{ $t('home.subtitle') }}</h2>
          <p class="intro">{{ $t('home.intro') }}</p>
          <div class="cta-buttons">
            <n-button type="primary" size="large" @click="$router.push('/portfolio')">
              <template #icon><i class="fas fa-briefcase"></i></template>
              {{ $t('home.viewWorks') }}
            </n-button>
            <n-button ghost size="large" @click="$router.push('/contact')">
              <template #icon><i class="fas fa-envelope"></i></template>
              {{ $t('home.contactMe') }}
            </n-button>
          </div>
        </div>
      </div>
    </section>

    <section v-if="false" class="experience-preview">
      <h2>
        <span class="accent-bar"></span>
        {{ $t('home.experience') }}
      </h2>
      <TimelineSimple />
      <div class="view-more">
        <router-link to="/experience" class="btn secondary">
          {{ $t('home.viewMore') }}
        </router-link>
      </div>
    </section>

    <section class="featured-works">
      <h2>
        <span class="accent-bar"></span>
        {{ $t('home.featuredWorks') }}
      </h2>
      <div class="works-grid">
        <WorkCard 
          v-for="work in featuredWorks" 
          :key="work.id"
          :work="work"
          @click="goToWork(work.id)"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import WorkCard from '@/components/WorkCard.vue'
import TimelineSimple from '@/components/TimelineSimple.vue'
import LowpolyBackground from '@/components/LowpolyBackground.vue'
import { getFeaturedWorks } from '@/data/works'

const router = useRouter()

const featuredWorks = ref(getFeaturedWorks())

const goToWork = (id) => {
  router.push(`/portfolio/${id}`)
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  .hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-xl);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
  }

  .profile-container {
    display: flex;
    justify-content: center;
    animation: float 6s ease-in-out infinite;
  }

  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 0 0 8px rgba(var(--color-primary-rgb), 0.1),
      0 0 40px rgba(0, 0, 0, 0.1);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.1);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .text-content {
    .name {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: var(--spacing-sm);
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0;
      animation: slideUp 0.8s ease forwards;
    }

    .title {
      font-size: 2.5rem;
      color: var(--color-text);
      margin-bottom: var(--spacing-md);
      font-weight: 600;
      opacity: 0;
      animation: slideUp 0.8s ease 0.2s forwards;
    }

    .intro {
      font-size: 1.2rem;
      color: var(--color-text-light);
      line-height: 1.8;
      margin-bottom: var(--spacing-lg);
      opacity: 0;
      animation: slideUp 0.8s ease 0.4s forwards;
    }

    .cta-buttons {
      display: flex;
      gap: var(--spacing-md);
      opacity: 0;
      animation: slideUp 0.8s ease 0.6s forwards;
    }
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式设计
@media (max-width: 1024px) {
  .hero {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: var(--spacing-lg);
    }

    .text-content {
      .name {
        font-size: 3rem;
      }
      .title {
        font-size: 2rem;
      }
    }

    .profile-image {
      width: 250px;
      height: 250px;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    .text-content {
      .name {
        font-size: 2.5rem;
      }
      .title {
        font-size: 1.5rem;
      }
      .cta-buttons {
        flex-direction: column;
      }
    }
  }
}

.experience-preview {
  padding: var(--spacing-xl);
  background: var(--color-bg);
  
  h2 {
    font-size: 2rem;
    margin-bottom: var(--spacing-xl);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    
    .accent-bar {
      width: 4px;
      height: 24px;
      background: var(--color-primary);
      border-radius: var(--radius-sm);
    }
  }
}

.featured-works {
  padding: var(--spacing-xl);
  background: var(--color-bg);
  
  h2 {
    font-size: 2rem;
    margin-bottom: var(--spacing-xl);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    
    .accent-bar {
      width: 4px;
      height: 24px;
      background: var(--color-primary);
      border-radius: var(--radius-sm);
    }
  }
  
  .works-grid {
    display: grid;
    gap: var(--spacing-lg);
    padding: var(--spacing-md);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      max-width: 900px;
      margin: 0 auto;
    }
    
    @media (min-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
      max-width: 1000px;
    }
  }
}
</style> 