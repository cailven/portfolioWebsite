import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/styles/variables.scss'
import {
  create,
  NButton,
  NCard,
  NSpace,
  NTag,
  NTimeline,
  NInput
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NCard,
    NSpace,
    NTag,
    NTimeline,
    NInput
  ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(naive)

app.mount('#app') 