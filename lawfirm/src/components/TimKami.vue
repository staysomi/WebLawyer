
<template>
    <div class="section-1">
        <h2 class="text-xl font-semibold mt-10 ml-5">Tim Kami</h2>
        <p class="text-2xl font-semibold ml-5 mt-4">INOVASI DAN KOLABORASI <br>DALAM PERSPEKTIF HUKUM</p>
        <img src="https://placehold.co/600x400" alt="" class="w-full h-80 mt-8">

        <div class="text-xl mt-20 ml-20 mr-10 flex justify-center items-start">
    <!-- visi 1 -->
    <div class="text-xl mr-10">
        <h2 class="font-bold">VISI</h2>
        <p class="text-sm">Menegakkan Hukum seadil-adilnya serta dapat memberikan <br>keadilan bagi Seluruh Rakyat Indonesia</p>
    </div>

    <!-- misi 2 -->
    <div class="text-xl">
        <h2 class="font-bold">MISI</h2>
        <ul class="list-disc list-inside text-sm">
            <li>Memberikan bantuan ataupun penyelesaian berazaskan keadilan</li>
            <li>Bersikap profesional dalam menangani setiap perkara</li>
            <li>Transparansi, bersih, tegak lurus</li>
        </ul>
    </div>
</div>
    </div>

    
    <div class="section-profile">
        <p class="text-xl font-semibold mt-10 ml-5">
            SEMUA PROFILE
        </p>
        <p class="ml-5 mt-4 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem voluptates accusamus
            quisquam, fugit rem quaerat beatae, dolore ex, soluta totam expedita atque ab natus laudantium cupiditate in
            doloremque commodi?</p>
            <div class="flex justify-around mt-8">
                <div v-for="slide in slides.slice(0, 3)">
                    <div class="flex w-full flex-col justify-center items-center">
                        <img src="../assets/img/foto.JPG" alt="Slide Image" class="w-4/5 h-auto" />
                        <p class="text-sm">Advokat</p>
                        <p class="text-lg">Om Agung Test {{slide}}</p>
                        <div @click="showPopup = true, sendPopupData(slide, slide + 'sasasasas')"
                            class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-gray-400">
                            Lihat Bio</div>
                    </div>
                </div>
            </div>
            <div class="flex justify-around mt-8 mb-8">
                <div v-for="slide in slides.slice(3, 6)">
                    <div class="flex w-full flex-col justify-center items-center">
                        <img src="../assets/img/foto.JPG" alt="Slide Image" class="w-4/5 h-auto" />
                        <p class="text-sm">Advokat</p>
                        <p class="text-lg">Om Agung Test {{slide}}</p>
                        <div @click="showPopup = true, sendPopupData(slide, slide + 'sasasasas')"
                            class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-gray-400">
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
    name: 'About',
    data() {
        return {
            showPopup: false,
            popupTitle: '',
            popupDescription: '',
            slides: [
                'omagung1',
                'omagung2',
                'omagung3',
                'omagung4',
                'omagung5',
                'omagung6',
            ],
        }
    },
    methods: {
        sendPopupData(title, description) {
            this.popupTitle = title
            this.popupDescription = description
        }
    },
}
</script>

<style scoped>
/* Add your styles here */
</style>