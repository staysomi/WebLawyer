<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }">
      <div v-for="(item, index) in visibleSlides" :key="index" class="w-full flex-shrink-0 justify-center">
        <div class="flex w-full flex-col justify-center items-center">
          <img :src="`src/assets/img/${item.tim}1x1.png`" alt="Slide Image"
            class="bg-gradient-to-b from-gray-100 to-transparent w-4/5" />
          <p class="text-sm">Advokat</p>
          <p class="text-md">{{ item.name }}</p>
          <router-link :to="item.tim">
            <div
            class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-white">
            Lihat Bio</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      visibleItems: 1,
      tim: [
        { tim: 'tim1', name: 'Muchamad Ilham Tantowi. S.H., M.H' },
        { tim: 'tim2', name: 'Pak Arif. S.H., M.H' }
      ],
      autoSlideInterval: null,
    };
  },
  computed: {
    visibleSlides() {
      return this.tim.concat(this.tim);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    next() {
      this.currentIndex++;
      if (this.currentIndex >= this.tim.length) {
        this.currentIndex = 0;
      }
    },
    prev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.tim.length - 1;
      }
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.next, 3000); // Change slide every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    }
  },
};
</script>

<style scoped>
/* Optional: Additional styling */
</style>