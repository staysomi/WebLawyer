<script setup>
import 'vue3-carousel/dist/carousel.css'
</script>
<template>
  <div class="flex justify-around sticky top-0 w-full">
    <img src="../assets/img/icon.JPG" class="w-24 h-auto pt-4">
    <div class="flex justify-center" style="align-items: center;">
      <div class="navigation-item">
        <router-link to="/" class="block">Beranda</router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/layanan-kami" class="block">Layanan Kami</router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/tim-kami" class="block">Tim Kami</router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/hubungi-kami" class="block">Hubungi Kami</router-link>
      </div>
    </div>
    <div style="display: flex; align-items: center;">
    <div class="hubungi-kami flex items-center rounded-full min-h-4 px-6 py-2">
        <div style="height: fit-content; ">0812-999-9999<br><p style="font-size: smaller; margin:auto">Mulai Konsultasi</p></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
  
<style scoped>
  .navigation-item{
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
    @apply h-full items-center flex px-8
  }
  .navigation-item.active{
    color: #fc9e4f;
  }
  .navigation-item:hover{
    height: 100%;
    color: #fc9e4f;
    background-color: #ddd;
    opacity: 60%;
  }
  .hubungi-kami{
      cursor: pointer;
      background-color: whitesmoke;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
  .hubungi-kami:hover{
      background-color: yellow;
  }
</style>