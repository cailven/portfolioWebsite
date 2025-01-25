import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/views/PortfolioView.vue')
  },
  {
    path: '/portfolio/:id',  // 作品详情页深度链接
    name: 'PortfolioDetail',
    component: () => import('@/views/PortfolioDetailView.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('@/views/ExperienceView.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
}) 