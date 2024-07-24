<template>
  <div>
    <Header />
    <slot></slot>
    <div class="relative bg-[url('../assets/img/catur.jpg')] bg-cover bg-center px-16 py-60">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <Transition name="fade">
        <div class="relative z-10 p-4 text-white animate-slideInFromBottom">
          <p>Langkah Pertama</p>
          <p class="text-3xl">Segera mulai langkah awal menemukan solusi hukum Anda bersama tim ahli kami.</p>
        </div>
      </Transition>
    </div>
    <div class="bg-blue-900 text-white w-full p-16">
      <WA>
        <p class="text-5xl">Mari Konsultasi</p>
      </WA><br>
      <hr><br>
      <p>Yudhistira Law Firm</p>
      Kantor :<br>
      Jl. Ki Mangun Sarkoro No.IV, RT.007/RW.003, Prayan, Sobontoro, Kec. Boyolangu, Kabupaten Tulungagung, Jawa Timur
      66232<br><br>
      <WA>Telepon : +628563542066</WA>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import WA from './LangsungWA.vue'
</script>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>