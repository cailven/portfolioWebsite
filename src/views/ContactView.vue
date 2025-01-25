<template>
  <div class="contact">
    <div class="left-section">
      <div class="header-content">
        <h1>{{ $t('contact.title') }}</h1>
        <p class="subtitle">{{ $t('contact.subtitle') }}</p>
      </div>
      
      <div class="basic-info">
        <n-card>
          <n-space vertical :size="24">
            <div 
              v-for="(item, index) in contactItems" 
              :key="index"
              class="contact-item"
            >
              <i :class="item.icon"></i>
              <div class="item-content">
                <div class="label">{{ item.label }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
            </div>
          </n-space>
        </n-card>
      </div>
    </div>

    <div class="main-content">
      <div class="content-wrapper">
        <div class="social-grid">
          <n-card 
            v-for="link in socialLinks" 
            :key="link.name"
            class="social-card"
            :class="link.type"
            hoverable
          >
            <a :href="link.url" target="_blank" rel="noopener">
              <div class="icon-wrapper">
                <i :class="link.icon"></i>
              </div>
              <div class="link-info">
                <span class="platform">{{ link.name }}</span>
                <span class="username">{{ link.username }}</span>
              </div>
            </a>
          </n-card>
        </div>

        <div class="qr-section">
          <n-card>
            <div class="qr-content">
              <div class="qr-image">
                <img src="/images/qrcode_for_gh.jpg" alt="公众号二维码">
              </div>
              <div class="qr-info">
                <h3>《圆爸的笔记》</h3>
                <p>{{ $t('contact.scanQRCode') }}</p>
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const contactItems = [
  {
    icon: 'fas fa-envelope',
    label: t('contact.email'),
    value: 'cailvenqq@126.com'
  },
  {
    icon: 'fas fa-phone',
    label: t('contact.phone'),
    value: '+86 15601883269'
  },
  {
    icon: 'fab fa-weixin',
    label: 'WeChat',
    value: 'cailven_zhang'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    username: '@cailven',
    url: 'https://github.com/cailven',
    icon: 'fab fa-github',
    type: 'github'
  },
  {
    name: 'LinkedIn',
    username: 'cailven.zhang',
    url: 'https://www.linkedin.com/in/cailven/',
    icon: 'fab fa-linkedin',
    type: 'linkedin'
  },
  {
    name: '豆瓣',
    username: 'cailven',
    url: 'https://www.douban.com/people/impua',
    icon: 'fas fa-book',
    type: 'douban'
  },
  {
    name: '微博',
    username: '@cailven',
    url: 'https://weibo.com/u/1436240057',
    icon: 'fab fa-weibo',
    type: 'weibo'
  },
  {
    name: '知乎',
    username: 'cailven',
    url: 'https://www.zhihu.com/people/cailven',
    icon: 'fab fa-zhihu',
    type: 'zhihu'
  },
  {
    name: '即刻',
    username: 'cailven',
    url: 'https://web.okjike.com/u/79EA3766-10F6-4907-8ED8-1BA32B1367A4',
    icon: 'fas fa-comment-dots',
    type: 'jike'
  }
]
</script>

<style lang="scss" scoped>
.contact {
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
  
  .basic-info {
    padding: var(--spacing-xl);
    flex: 1;
    
    :deep(.n-card) {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }
  
  i {
    font-size: 1.5rem;
    color: var(--color-primary);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    transition: all 0.3s ease;
  }
  
  &:hover i {
    background: var(--color-primary);
    color: white;
  }
  
  .item-content {
    .label {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.3rem;
    }
    
    .value {
      font-weight: 500;
      font-size: 1.1rem;
      color: white;
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

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  .social-card {
    transition: all 0.3s ease;
    
    a {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      text-decoration: none;
      color: inherit;
      padding: var(--spacing-md);
      
      .icon-wrapper {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-lg);
        background: var(--color-bg-alt);
        transition: all 0.3s ease;
        
        i {
          font-size: 1.8rem;
        }
      }
      
      .link-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        
        .platform {
          font-weight: 600;
          font-size: 1.2rem;
        }
        
        .username {
          font-size: 0.95rem;
          color: var(--color-text-light);
        }
      }
    }
    
    &.github:hover { 
      background: #24292e; 
      color: white;
      .icon-wrapper { background: rgba(255, 255, 255, 0.1); }
    }
    &.linkedin:hover { 
      background: #0077b5; 
      color: white;
      .icon-wrapper { background: rgba(255, 255, 255, 0.1); }
    }
    &.zhihu:hover { 
      background: #0084ff; 
      color: white;
      .icon-wrapper { background: rgba(255, 255, 255, 0.1); }
    }
    &.jike:hover { 
      background: #FFE411; 
      color: black;
      .icon-wrapper { background: rgba(0, 0, 0, 0.1); }
    }
    &.douban:hover { 
      background: #27a666; 
      color: white;
      .icon-wrapper { background: rgba(255, 255, 255, 0.1); }
    }
    &.weibo:hover { 
      background: #e6162d;
      color: white;
      .icon-wrapper { background: rgba(255, 255, 255, 0.1); }
    }
  }
}

.qr-section {
  .qr-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
    padding: var(--spacing-md);
    
    .qr-image {
      width: 160px;
      height: 160px;
      background: white;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .qr-info {
      h3 {
        font-size: 1.5rem;
        margin-bottom: var(--spacing-sm);
        color: var(--color-text);
      }
      
      p {
        color: var(--color-text-light);
        line-height: 1.6;
      }
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
  .contact {
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
  
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .qr-section {
    .qr-content {
      flex-direction: column;
      text-align: center;
      
      .qr-image {
        margin: 0 auto;
      }
    }
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
    
    .basic-info {
      padding: var(--spacing-md);
    }
  }
  
  .contact-item {
    padding: var(--spacing-sm);
    
    i {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
    
    .item-content {
      .value {
        font-size: 1rem;
      }
    }
  }
}
</style> 