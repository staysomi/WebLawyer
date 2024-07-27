<template>
  <div>
    <Header />
    <slot></slot>
    <div class="relative bg-[url('../assets/img/catur.jpg')] bg-cover bg-center px-2 py-12 md:px-16 md:py-60">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <Transition name="fade">
        <div class="relative z-8 p-4 text-white animate-slideInFromBottom">
          <p class="md:text-xl">Langkah Pertama</p>
          <p class="text-xl md:text-3xl">Segera mulai langkah awal menemukan solusi hukum Anda bersama tim ahli kami.</p>
        </div>
      </Transition>
    </div>
    <div class="bg-blue-900 text-white w-full py-8 px-4 md:p-16">
      <WA>
        <p class="text-xl md:text-5xl">Mari Konsultasi</p>
      </WA><br>
      <hr><br>
      <p class="text-xs md:text-md">
      <p class="font-bold">Yudhistira Law Firm<br><br>
        Kantor Pusat :</p>
      <p class="font-mono font-thin">Jl. Ki Mangun Sarkoro No.IV, RT.007/RW.003, Prayan, Sobontoro, Kec. Boyolangu,
        Kabupaten Tulungagung, Jawa Timur
        66232</p>
      </p><br>
      <WA class="mb-4">
        <p class="text-xs md:text-md">Telepon : +628563542066</p>
      </WA>
      <router-link to="/">
        <div class="text-xs md:text-md my-2">Beranda</div>
      </router-link>
      <router-link to="/layanan-kami">
        <div class="text-xs md:text-md my-2">Layanan Kami</div>
      </router-link>
      <router-link to="/tim-kami">
        <div class="text-xs md:text-md my-2">Tim Kami</div>
      </router-link>
      <router-link to="/hubungi-kami">
        <div class="text-xs md:text-md my-2">Hubungi Kami</div>
      </router-link>
      <div class="mt-4"><hr></div>
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