<template>
    <div class="section-1 px-32 py-8">
        <p>Tim Kami</p>
        <p class="text-3xl">INOVASI DAN KOLABORASI DALAM PERSPEKTIF HUKUM</p>
        <img src="https://placehold.co/600x400" alt="" class="w-full h-80 mt-4">
        <div class="grid grid-cols-2 justify-start">
            <div>Visi : Menegakkan Hukum seadil-adilnya serta dapat memberikn keadilan bagi Seluruh Rakyat Indonesia
            </div>
            <div>Misi :<br>
                1. Memberikan bantuan ataupun penyelesaian berazaskan keadilan<br>
                2. Bersikap profesional dalam menangani setiap perkara<br>
                3. Transparansi, bersih, tegak lurus
            </div>
        </div>
    </div>
    <div class="section-profile px-32 py-8">
        <p class="text-3xl">
            SEMUA PROFILE
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem voluptates accusamus
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
            <div class="flex justify-around mt-8">
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