<template>
    <div class="section-1">
        <h2 class="md:text-2xl font-semibold mt-5 md:ml-28 ml-4">Tim Kami</h2>
        <p class="md:text-4xl font-semibold mt-4 ml-4 mb-5 md:ml-28">INOVASI DAN KOLABORASI <br>DALAM PERSPEKTIF HUKUM</p>
        <img src="https://placehold.co/600x400" alt="" class="w-full md:h-60 md:mt-20">

        <div class="md:text-xl md:mt-20 p-4 md:ml-28 md:mr-10 md:flex md:justify-start md:items-start">
            <div class="md:text-xl md:mr-10">
        <h2 class="font-bold mt-4">VISI</h2>
        <p>Menegakkan Hukum seadil-adilnya serta dapat memberikan <br>keadilan bagi Seluruh Rakyat Indonesia</p>
    </div>

    <!-- Konten 2 -->
    <div class="md:text-xl ">
        <h2 class="font-bold mt-4">MISI</h2>
        <ul class="list-disc list-inside">
            <li>Memberikan bantuan ataupun penyelesaian berazaskan keadilan</li>
            <li>Bersikap profesional dalam menangani setiap perkara</li>
            <li>Transparansi, bersih, tegak lurus</li>
        </ul>
    </div>
</div>
    </div>
 
    <!-- <div class="text-center md:text-xl ">
        <h2 class="font-bold mt-6">MOTTO</h2>
        <p>Wujudkan Keadilan Hukum Bersih Bersama Kami</p>
    </div> -->

    <div class="section-profile ">
        <p class="md:text-2xl font-semibold mt-8 ml-4 md:ml-28">
            SEMUA PROFILE
        </p>
        <p class="ml-4 mt-4 md:text-xl md:ml-28">Tim kami terdiri dari advokat berpengalaman dan ahli yang terus mengembangkan <br>
            keterampilan melalui pelatihan berkelanjutan. </p>
            <div class="flex justify-around md:mt-10">
   <!-- Konten pertama -->
<div class="flex w-full flex-col justify-center items-center pb-10">
    <img src="../assets/img/tim11x1.png" alt="Slide Image" class="md:w-auto md:h-96 mt-6" />
    <p class="md:text-lg">Advokat</p>
    <p class="md:text-xl text-center">Muchamad Ilham Tantowi. S.H., M.H</p>
    <router-link to="tim1">
        <div
            class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-gray-400">
            Lihat Bio
        </div>
    </router-link>
</div>

<!-- Konten kedua -->
<div class="flex w-full flex-col justify-center items-center pb-10">
    <img src="../assets/img/tim21x1.png" alt="Slide Image" class="md:w-auto md:h-96" />
    <p class="md:text-lg">Advokat</p>
    <p class="md:text-xl">Arif Fathkurrohman, S.H.</p>
    <router-link to="tim2">
        <div
            class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-gray-400">
            Lihat Bio
        </div>
    </router-link>
</div>
            </div>
    </div>
</template>

<script setup>
</script>
<script>
export default {
    name: 'About',
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped>
/* Add your styles here */
</style>