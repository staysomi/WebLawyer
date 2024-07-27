<template>
    <div class="section-1">
        <h2 class="text-xs font-semibold mt-10 ml-5">Tim Kami</h2>
        <p class="text-2xl font-semibold ml-5">INOVASI DAN KOLABORASI <br>DALAM PERSPEKTIF HUKUM</p>
        <img src="https://placehold.co/600x400" alt="" class="w-full h-20 mt-2">

        <div class="text-sm mt-8 p-4">
            <!-- visi 1 -->
            <li class="font-bold">VISI</li>
            <p class="text-sm">Menegakkan Hukum seadil-adilnya serta dapat memberikan <br>keadilan bagi Seluruh
                Rakyat Indonesia</p>

            <!-- misi 2 -->
            <li class="font-bold">MISI</li>
            <li class="ml-4">Memberikan bantuan ataupun penyelesaian berazaskan keadilan</li>
            <li class="ml-4">Bersikap profesional dalam menangani setiap perkara</li>
            <li class="ml-4">Transparansi, bersih, tegak lurus</li>
        </div>
    </div>


    <div class="section-profile">
        <p class="text-xl font-semibold mt-10 ml-5">
            SEMUA PROFILE
        </p>
        <p class="ml-5 mt-4 text-sm">Tim kami terdiri dari advokat berpengalaman dan ahli yang terus mengembangkan
            keterampilan melalui pelatihan berkelanjutan. </p>
        <div class="flex justify-around mt-8">
            <div class="flex w-full flex-col justify-center items-center">
                <img src="../assets/img/tim11x1.png" alt="Slide Image" class="w-4/5 h-auto" />
                <p class="text-sm">Advokat</p>
                <p class="text-lg">Muchamad Ilham Tantowi. S.H., M.H</p>
                <router-link to="tim1">
                    <div
                        class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-gray-400">
                        Lihat Bio</div>
                </router-link>
            </div>
        </div>
        <div class="flex justify-around my-8">
            <div class="flex w-full flex-col justify-center items-center">
                <img src="../assets/img/tim21x1.png" alt="Slide Image" class="w-4/5 h-auto" />
                <p class="text-sm">Advokat</p>
                <p class="text-lg">Pak Arif</p>
                <router-link to="tim2">
                    <div
                        class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-gray-400">
                        Lihat Bio</div>
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