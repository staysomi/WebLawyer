import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LayananKami from '../components/LayananKami.vue'
import TimKami from '../components/TimKami.vue'
import HubungiKami from '../components/HubungiKami.vue'
import Tim1 from '../components/bio/Timimi1.vue'
import Tim2 from '../components/bio/Timimi2.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/layanan-kami', component: LayananKami },
  { path: '/tim-kami', component: TimKami },
  { path: '/hubungi-kami', component: HubungiKami },
  { path: '/tim1', component: Tim1 },
  { path: '/tim2', component: Tim2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
      return { top: 0, behavior: 'smooth' }
  },
})

export default router