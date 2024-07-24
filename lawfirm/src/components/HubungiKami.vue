<template>
    <div class="about p-8">
        <img src="../assets/img/hubungikami-header.jpg" alt="" class="w-full mb-4">
        <p>Hubungi Kami</p>
        <p class="text-3xl">Untuk informasi lebih lanjut mengenai Yudhistira Law Firm atau layanan kami, silakan
            menghubungi kami tanpa ragu.</p>
        <WA class="mt-8 w-full flex justify-center">
            <img src="../assets/img/wa-button.png" alt="">
        </WA>
    </div>
</template>
<script setup>

import WA from './LangsungWA.vue'
</script>
<script>
export default {
    name: 'About'
}
</script>

<style scoped>
/* Add your styles here */
</style>
