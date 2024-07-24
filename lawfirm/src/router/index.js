import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LayananKami from '../components/LayananKami.vue'
import TimKami from '../components/TimKami.vue'
import HubungiKami from '../components/HubungiKami.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/layanan-kami', component: LayananKami },
  { path: '/tim-kami', component: TimKami },
  { path: '/hubungi-kami', component: HubungiKami },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router