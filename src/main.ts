import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Item from "@/components/Sidebar/Item.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.component('Item', Item)
app.use(createPinia())
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
