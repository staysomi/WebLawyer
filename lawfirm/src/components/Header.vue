<script setup>
import 'vue3-carousel/dist/carousel.css'
import { ref, computed, onMounted } from 'vue'
import WA from './LangsungWA.vue'
import { useRoute } from 'vue-router';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const route = useRoute();
const currentPath = computed(() => route.path);
const setCurrentPath = () => {
  if (currentPath.value === '/layanan-kami') {
    content.value = 2
  } else if (currentPath.value === '/tim-kami') {
    content.value = 3
  } else if (currentPath.value === '/hubungi-kami') {
    content.value = 4
  }
}
onMounted(setCurrentPath)

const content = ref()
const contentChange = (num) => {
  content.value = num
}
</script>
<template>
  <div class="flex justify-between md:justify-around md:py-2 md:px-8 sticky top-0 w-full z-10 bg-white">
    <img src="../assets/img/icon.png" class="w-12 md:w-16 h-auto py-2 ml-8">
    <!-- Desktop Navbar -->
    <div class="hidden md:flex justify-center items-center">
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
    <div class="hidden md:flex items-center">
      <WA>
        <div class="hubungi-kami flex items-center rounded-full min-h-4 px-6 py-2">
          <div class="h-fit">0812-999-9999<br>
            <p class="text-sm m-auto">Mulai Konsultasi</p>
          </div>
        </div>
      </WA>
    </div>
    <!-- End Desktop Navbar -->

    <button @click="toggleSidebar" class="md:hidden mr-8 text-gray-800 focus:outline-none">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    <!-- Sidebar -->
    <div v-if="isSidebarOpen" class="w-4/5 h-full fixed text-white right-0 bg-gray-800 z-10">
      <div class="flex items-center justify-between p-4 bg-gray-900">
        <img src="../assets/img/icon.png" class="w-12 h-auto my-2">
        <button @click="toggleSidebar" class="text-gray-400 hover:text-white focus:outline-none md:hidden">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col items-left">
        <router-link to="/" class="navigation-item block py-2.5 px-4" @click="toggleSidebar(), contentChange(1)">
          <div :class="{ active: content === 1 }">Beranda</div>
        </router-link>
        <router-link to="/layanan-kami" class="navigation-item block py-2.5 px-4"
          @click="toggleSidebar(), contentChange(2)">
          <div :class="{ active: content === 2 }">Layanan Kami</div>
        </router-link>
        <router-link to="/tim-kami" class="navigation-item block py-2.5 px-4"
          @click="toggleSidebar(), contentChange(3)">
          <div :class="{ active: content === 3 }">Tim Kami</div>
        </router-link>
        <router-link to="/hubungi-kami" class="navigation-item block py-2.5 px-4"
          @click="toggleSidebar(), contentChange(4)">
          <div :class="{ active: content === 4 }">Hubungi Kami</div>
        </router-link>
      </div>
      <WA>
        <div class=" !bg-transparent flex border-2 border-gray-400 items-center w-fit ml-4 rounded-full min-h-4 mt-8 px-6 py-2">
          <div class="h-fit">0812-999-9999<br>
            <p class="text-xs m-auto">Mulai Konsultasi</p>
          </div>
        </div>
      </WA>
    </div>

    <!-- Overlay for mobile view -->
    <div v-if="isSidebarOpen" @click="toggleSidebar" class="fixed inset-0 bg-black opacity-50 md:hidden z-9"></div>
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