<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }">
      <div v-for="(slide, index) in visibleSlides" :key="index" class="w-1/4 flex-shrink-0 p-2 justify-center">
        <div class="flex w-full flex-col justify-center">
          <img src="../assets/img/foto.JPG" alt="Slide Image" class="w-4/5 h-auto" />
          <p class="text-sm">Advokat</p>
          <p class="text-lg">Om Agung Test SSSSSSSS</p>
          <div @click="showPopup = true, sendPopupData(slide, slide + 'sasasasas')"
            class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-white">
            Lihat Bio</div>
        </div>
      </div>
    </div>
  </div>
  <Popup :isVisible="showPopup" @close="showPopup = false">
    <h2 class="text-xl font-bold mb-4">{{ popupTitle }}</h2>
    <p>{{ popupDescription }}</p>
  </Popup>
</template>
<script setup>
import Popup from './PopupBio.vue'
</script>
<script>
export default {
  components: {
    Popup,
  },
  data() {
    return {
      showPopup: false,
      currentIndex: 0,
      visibleItems: 4,
      slides: [
        'omagung1',
        'omagung2',
        'omagung3',
        'omagung4',
        'omagung5',
      ],
      autoSlideInterval: null,
      popupTitle: '',
      popupDescription: ''
    };
  },
  computed: {
    visibleSlides() {
      // Double the array to create the infinite loop effect
      return this.slides.concat(this.slides);
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
      if (this.currentIndex >= this.slides.length) {
        this.currentIndex = 0;
      }
    },
    prev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.slides.length - 1;
      }
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.next, 3000); // Change slide every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    sendPopupData(title, description){
      this.popupTitle = title
      this.popupDescription = description
    }
  },
};
</script>

<style scoped>
/* Optional: Additional styling */
</style>