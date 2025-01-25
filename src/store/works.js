import { defineStore } from 'pinia'

export const useWorksStore = defineStore('works', {
  state: () => ({
    works: [
      {
        id: 'virtual-live-studio',
        title: {
          zh: '虚拟直播间',
          en: 'Virtual Live Studio'
        },
        description: {
          zh: 'HTC Vive + 虚幻引擎开发的虚拟直播间',
          en: 'Virtual live studio developed with HTC Vive and Unreal Engine'
        },
        cover: '/images/virtual-live/cover.jpg',
        images: [
          {
            url: '/images/virtual-live/1.jpg',
            alt: {
              zh: '虚拟场景预览',
              en: 'Virtual Scene Preview'
            }
          }
        ],
        tags: ['VR', 'Unreal Engine'],
        technologies: ['Unreal Engine', 'HTC Vive', 'Blueprint'],
        responsibilities: {
          zh: [
            '负责虚拟场景搭建和灯光效果调整',
            '实现绿幕抠像和场景合成功能',
            '优化实时渲染性能'
          ],
          en: [
            'Responsible for virtual scene construction and lighting adjustment',
            'Implemented green screen keying and scene composition',
            'Optimized real-time rendering performance'
          ]
        },
        achievements: {
          zh: '项目获得团队一致好评，开创公司虚拟制作新方向',
          en: 'Project received unanimous praise and pioneered new direction in virtual production'
        }
      },
      // ... 其他作品
    ]
  }),

  getters: {
    getWorkById: (state) => (id) => {
      return state.works.find(work => work.id === id)
    },
    
    getFeaturedWorks: (state) => {
      return state.works.filter(work => work.featured)
    }
  }
}) 