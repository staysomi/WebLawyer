import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LayananKami from '../components/LayananKami.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/layanan-kami', component: LayananKami }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router