<template>
  <div class="lowpoly-background">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient 
          v-for="(gradient, index) in gradients" 
          :key="index"
          :id="`gradient-${index}`"
        >
          <stop offset="0%" :stop-color="gradient.start" :stop-opacity="gradient.opacity">
            <animate
              attributeName="stop-color"
              :values="gradient.startAnim"
              :dur="`${15 + index * 2}s`"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" :stop-color="gradient.end" :stop-opacity="gradient.opacity">
            <animate
              attributeName="stop-color"
              :values="gradient.endAnim"
              :dur="`${20 + index * 2}s`"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      
      <g>
        <path 
          v-for="(polygon, index) in polygons" 
          :key="index"
          :d="polygon.path"
          :fill="`url(#gradient-${index % gradients.length})`"
          :style="{ mixBlendMode: 'multiply' }"
        >
          <animate
            attributeName="d"
            :values="polygon.animation"
            :dur="`${30 + index * 2}s`"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 更新配色方案，参考图片的风格
const colors = {
  dark: '#1a1f35',
  primary: '#2563eb',
  secondary: '#3b82f6',
  accent: '#0ea5e9',
  highlight: '#0284c7',
  coral: '#ff6b6b',
  teal: '#4ecdc4'
}

const gradients = [
  {
    start: colors.dark,
    end: colors.primary,
    opacity: 0.08,
    startAnim: `${colors.dark};${colors.primary};${colors.dark}`,
    endAnim: `${colors.primary};${colors.teal};${colors.primary}`
  },
  {
    start: colors.coral,
    end: colors.teal,
    opacity: 0.06,
    startAnim: `${colors.coral};${colors.accent};${colors.coral}`,
    endAnim: `${colors.teal};${colors.highlight};${colors.teal}`
  },
  {
    start: colors.secondary,
    end: colors.accent,
    opacity: 0.04,
    startAnim: `${colors.secondary};${colors.highlight};${colors.secondary}`,
    endAnim: `${colors.accent};${colors.coral};${colors.accent}`
  }
]

const generatePolygons = () => {
  const polygons = []
  const numPolygons = 24 // 增加多边形数量
  const gridSize = Math.ceil(Math.sqrt(numPolygons))
  
  for (let i = 0; i < numPolygons; i++) {
    const points = []
    const numPoints = Math.floor(Math.random() * 3) + 4 // 4-6个点的多边形
    const baseX = (i % gridSize) * (100 / gridSize)
    const baseY = Math.floor(i / gridSize) * (100 / gridSize)
    const size = 100 / gridSize * 1.5 // 增大尺寸使多边形有重叠
    
    for (let j = 0; j < numPoints; j++) {
      const angle = (j / numPoints) * Math.PI * 2
      const radius = size * (0.5 + Math.random() * 0.3)
      const x = baseX + size/2 + Math.cos(angle) * radius
      const y = baseY + size/2 + Math.sin(angle) * radius
      points.push(`${x},${y}`)
    }
    
    const path = `M${points.join('L')}Z`
    const animPoints = []
    
    // 生成更柔和的动画路径
    for (let k = 0; k < 3; k++) {
      const animatedPoints = points.map(point => {
        const [x, y] = point.split(',')
        const offsetX = parseFloat(x) + (Math.random() * 2 - 1) * 2
        const offsetY = parseFloat(y) + (Math.random() * 2 - 1) * 2
        return `${offsetX},${offsetY}`
      })
      animPoints.push(`M${animatedPoints.join('L')}Z`)
    }
    
    polygons.push({
      path,
      animation: animPoints.join(';') + ';' + path
    })
  }
  
  return polygons
}

const polygons = ref(generatePolygons())
</script>

<style lang="scss" scoped>
.lowpoly-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
    filter: blur(30px);
    opacity: 0.7;
    transform: scale(1.1); // 稍微放大以覆盖边缘
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(
        circle at 30% 20%,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(236, 72, 153, 0.1) 0%,
        rgba(236, 72, 153, 0) 50%
      );
    z-index: 2;
  }

  // 添加噪点纹理
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.3;
    z-index: 1;
    pointer-events: none;
  }
}
</style> 