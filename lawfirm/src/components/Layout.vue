<template>
  <div>
    <Header />
    <slot></slot>
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
/* Layout-specific styling if needed */
</style>