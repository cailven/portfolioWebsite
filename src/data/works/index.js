/**
 * 作品集数据
 * @typedef {Object} Work
 * @property {string} id - 作品唯一标识
 * @property {Object} title - 作品标题（多语言）
 * @property {string} title.zh - 中文标题
 * @property {string} title.en - 英文标题
 * @property {Object} description - 作品描述（多语言）
 * @property {string} description.zh - 中文描述
 * @property {string} description.en - 英文描述
 * @property {string} cover - 作品封面图片路径
 * @property {string[]} tags - 作品标签
 * @property {boolean} featured - 是否为精选作品
 */

/**
 * 所有作品数据
 * @type {Work[]}
 */
export const works = [
  {
    id: 'interactive-installation',
    title: {
      zh: '猜硬币',
      en: 'Guess Coin'
    },
    description: {
      zh: '点击后，猜硬币在哪个罐子下面',
      en: 'Click to guess which cup the coin is under'
    },
    cover: '/images/works/1.gif',
    tags: ['interactive', 'installation'],
    featured: false
  },
  {
    id: 'vr-experience',
    title: {
      zh: '罐子叠叠乐',
      en: 'Cup Stacker'
    },
    description: {
      zh: '物理引擎叠放罐子，点击后，罐子会掉落',
      en: 'Click to drop the cup'
    },
    cover: '/images/works/2.gif',
    tags: ['vr', 'unity'],
    featured: true
  },
  {
    id: 'mobile-game',
    title: {
      zh: '橘子跑酷',
      en: 'Orange Run'
    },
    description: {
      zh: '基于HTML5的移动端休闲游戏，通过点击或者声控橘子跳跃避开障碍物',
      en: 'HTML5-based mobile casual game, jumping over obstacles by clicking or voice control'
    },
    cover: '/images/works/3.gif',
    tags: ['mobile', 'game'],
    featured: true
  },
  {
    id: 'data-visualization',
    title: {
      zh: '橡胶脸',
      en: 'Rubber Face'
    },
    description: {
      zh: '使用Three.js技术，将人脸变成橡胶脸',
      en: 'Using Three.js technology, turn the face into a rubber face'
    },
    cover: '/images/works/4.gif',
    tags: ['web', 'threejs'],
    featured: true
  },
  {
    id: 'ar-marketing',
    title: {
      zh: 'AR烟花',
      en: 'AR Fireworks'
    },
    description: {
      zh: '基于ARKit开发的增强现实营销活动，通过手机扫描实现虚实结合的互动体验',
      en: 'Augmented reality marketing campaign based on ARKit, enabling mixed reality interactions through mobile scanning'
    },
    cover: '/images/works/5.gif',
    tags: ['ar', 'mobile'],
    featured: false
  },
  {
    id: 'smart-hardware',
    title: {
      zh: 'AR动画',
      en: 'AR Animation'
    },
    description: {
      zh: '结合AR，在微信内找平面，实现物理世界与数字世界的连接',
      en: 'Combining AR, find a flat surface in WeChat to connect physical and digital worlds'
    },
    cover: '/images/works/6.gif',
    tags: ['ar', 'mobile'],
    featured: false
  },
  {
    id: 'mobile-interaction',
    title: {
      zh: '粒子汽车',
      en: 'Particle Car'
    },
    description: {
      zh: '基于Three.js，实现粒子汽车,多方位展示，利用shader实现粒子效果',
      en: 'Based on Three.js, implement particle car, multi-angle display, using shader to achieve particle effect'
    },
    cover: '/images/works/7.gif',
    tags: ['web', 'threejs'],
    featured: false
  },
  {
    id: 'web-animation',
    title: {
      zh: '手淘年度账单',
      en: 'Taobao Annual Bill'
    },
    description: {
      zh: '使用TweenMax开发的高性能网页动画效果,内嵌手淘和支付宝，呈现流畅的视觉体验',
      en: 'High-performance web animations developed with TweenMax, embedded with Taobao and Alipay, delivering smooth visual experiences'
    },
    cover: '/images/works/8.gif',
    tags: ['web', 'animation'],
    featured: false
  },
  {
    id: 'mini-program',
    title: {
      zh: '咖啡小游戏',
      en: 'Coffee Mini Game'
    },
    description: {
      zh: '微信小程序社交应用，整合LBS和社交功能，打造便捷的用户体验',
      en: 'WeChat Mini Program social app, integrating LBS and social features for seamless user experience'
    },
    cover: '/images/works/9.gif',
    tags: ['mobile', 'mini-program'],
    featured: false
  },
  {
    id: 'interactive-game',
    title: {
      zh: '色彩跳跳球',
      en: 'Color Jump Ball'
    },
    description: {
      zh: '一个无限循环的跳跳球，通过点击屏幕，改变跳跳球的颜色，只有颜色相同，才能跳跃',
      en: 'An infinite loop of jumping balls, changing the color of the ball by clicking on the screen, only when the color is the same, can the ball jump'
    },
    cover: '/images/works/10.gif',
    tags: ['game', 'installation'],
    featured: false
  },
  {
    id: 'creative-visualization',
    title: {
      zh: '3D全景世界',
      en: '3D Panorama World'
    },
    description: {
      zh: '通过Threejs构建的创意数据可视化项目，通过艺术化的形式展现数据之美',
      en: 'Creative data visualization project presenting the beauty of data through artistic expression using Threejs'
    },
    cover: '/images/works/11.gif',
    tags: ['web', 'threejs'],
    featured: false
  },
  {
    id: 'mobile-ar-game',
    title: {
      zh: 'AR头套小程序',
      en: 'AR Headset Mini Program'
    },
    description: {
      zh: '基于小程序开发的移动AR游戏，将虚拟游戏元素与现实环境完美融合',
      en: 'Mobile AR game developed with ARCore, seamlessly blending virtual game elements with real environment using mini program'
    },
    cover: '/images/works/12.gif',
    tags: ['ar', 'mini-program'],
    featured: false
  }
]

/**
 * 获取精选作品
 * @param {number} [limit=3] - 返回作品数量
 * @returns {Work[]} 精选作品列表
 */
export const getFeaturedWorks = (limit = 3) => {
  return works.filter(work => work.featured).slice(0, limit)
}

/**
 * 根据ID获取作品
 * @param {string} id - 作品ID
 * @returns {Work|undefined} 作品数据
 */
export const getWorkById = (id) => {
  return works.find(work => work.id === id)
}

/**
 * 根据标签筛选作品
 * @param {string} tag - 标签名称
 * @returns {Work[]} 筛选后的作品列表
 */
export const getWorksByTag = (tag) => {
  if (tag === 'all') return works
  return works.filter(work => work.tags.includes(tag))
}

/**
 * 获取所有可用的标签
 * @returns {string[]} 标签列表
 */
export const getAllTags = () => {
  const tags = new Set()
  works.forEach(work => {
    work.tags.forEach(tag => tags.add(tag))
  })
  return ['all', ...Array.from(tags)]
} 