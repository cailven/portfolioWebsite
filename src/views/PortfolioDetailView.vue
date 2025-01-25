<template>
  <div v-if="work" class="work-detail">
    <header class="work-header">
      <h1>{{ work.title }}</h1>
      <div class="tags">
        <span v-for="tag in work.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="work-content">
      <div class="work-images">
        <img 
          v-for="(img, index) in work.images" 
          :key="index"
          :src="img.url" 
          :alt="img.alt"
        >
      </div>

      <div class="work-info">
        <section>
          <h2>项目描述</h2>
          <p>{{ work.description }}</p>
        </section>

        <section>
          <h2>技术栈</h2>
          <ul class="tech-list">
            <li v-for="tech in work.technologies" :key="tech">
              {{ tech }}
            </li>
          </ul>
        </section>

        <section>
          <h2>主要职责</h2>
          <ul>
            <li v-for="(resp, index) in work.responsibilities" 
                :key="index">
              {{ resp }}
            </li>
          </ul>
        </section>

        <section v-if="work.achievements">
          <h2>项目成果</h2>
          <p>{{ work.achievements }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getWorkById } from '@/api/works'

const route = useRoute()
const work = ref(null)

onMounted(async () => {
  const workId = route.params.id
  work.value = await getWorkById(workId)
})
</script> 