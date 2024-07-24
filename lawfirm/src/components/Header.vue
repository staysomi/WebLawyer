<script setup>
import 'vue3-carousel/dist/carousel.css'
import { ref, computed, onMounted } from 'vue'
import WA from './LangsungWA.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => route.path);
const setCurrentPath = () => {
  if (currentPath.value === '/layanan-kami') {
    content.value = 2
  } else if (currentPath.value === '/tim-kami'){
    content.value = 3
  } else if (currentPath.value === '/hubungi-kami'){
    content.value = 4
  }
  console.log('logs', content.value)
}
onMounted(setCurrentPath)

const content = ref()
const contentChange = (num) => {
  content.value = num
}
</script>
<template>
  <div class="flex justify-around sticky top-0 w-full z-10 bg-white">
    <img src="../assets/img/icon.JPG" class="w-24 h-auto pt-4">
    <div class="flex justify-center" style="align-items: center;">
      <router-link to="/" class="navigation-item" @click="contentChange(1)">
        <div :class="{ active: content === 1 }">Beranda</div>
      </router-link>
      <router-link to="/layanan-kami" class="navigation-item" @click="contentChange(2)">
        <div :class="{ active: content === 2 }">Layanan Kami</div>
      </router-link>
      <router-link to="/tim-kami" class="navigation-item" @click="contentChange(3)">
        <div :class="{ active: content === 3 }">Tim Kami</div>
      </router-link>
      <router-link to="/hubungi-kami" class="navigation-item" @click="contentChange(4)">
        <div :class="{ active: content === 4 }">Hubungi Kami</div>
      </router-link>
    </div>
    <div style="display: flex; align-items: center;">
      <WA>
        <div class="hubungi-kami flex items-center rounded-full min-h-4 px-6 py-2">
          <div style="height: fit-content; ">0812-999-9999<br>
            <p style="font-size: smaller; margin:auto">Mulai Konsultasi</p>
          </div>
        </div>
      </WA>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>
.navigation-item {
  transition: color 0.3s ease, transform 0.3s ease;
  @apply h-full items-center flex px-8 cursor-pointer
}

.active {
  @apply text-[#fc9e4f]
}

.navigation-item:hover {
  @apply opacity-60 bg-slate-100 text-[#fc9e4f] h-full
}
</style>