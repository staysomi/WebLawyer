<script setup>
import 'vue3-carousel/dist/carousel.css'
import WA from './LangsungWA.vue'
import Slider from './SliderTim.vue'
import Dropdown from './DetailsDropdown.vue'
import Popup from './PopupBio.vue'

</script>
<template>
    <div class="home">
        <div class="md:grid md:grid-cols-2 md:gap-16 items-center z-1">
            <div v-show="isVisible" class="md:animate-slideInFromLeft p-4">
                <div>
                    <p class="text-2xl mb-4 font-bold animate-slideInFromTop">Wujudkan Keadilan Hukum Bersih Bersama Kami
                    </p>
                    <p>Tantowi Law – Menegakkan Hukum Yang Adil Bagi Seluruh Rakyat Indonesia
                    </p>
                    <div
                        class="flex justify-start md:justify-around items-center mt-2 animate-slideInFromBottom md:animate-slideInFromLeft">
                        <WA>
                            <div class="hubungi-kami flex items-center w-fit rounded-full hover:text-gray-800 min-h-4 
                                !bg-blue-800 hover:!bg-blue-300 px-4 py-2 text-white">
                                <p class="text-sm whitespace-nowrap uppercase">
                                    Mulai Konsultasi</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-2 h-auto" viewBox="0 0 24 24">
                                    <path fill="#fff" fill-rule="evenodd"
                                        d="M24 0v22.78h-2.87V4.9L2.03 24 0 21.97l19.1-19.1H1.26V0H24Z"></path>
                                </svg>
                            </div>
                        </WA>
                        <p class="text-sm hidden md:flex">Dipercayai beberapa orang</p>
                    </div>
                </div>
            </div>
            <div v-show="isVisible" class="bg-blue-900 md:hidden p-4 text-white">
                <div class="animate-slideInFromBottom mt-8">
                    <p class="text-md">> Tantowi Law</p>
                    <p class="text-xl mt-4 w-fit mb-4">Merupakan Kantor Hukum Terkemuka Di Tulungagung Yang Menegakkan Hukum
                        Seadil-Adilnya
                        Serta Dapat Memberikan Keadilan Bagi Seluruh Rakyat Indonesia</p>
                    <div class="flex gap-4">
                        <router-link to="/layanan-kami">
                            <div class="hubungi-kami flex items-center w-fit rounded-full hover:text-gray-800 min-h-4 
                                        !bg-white hover:!bg-blue-300 px-4 py-1 text-blue-800 border border-white">
                                <p class="text-xs whitespace-nowrap uppercase">
                                    Layanan Kami</p>
                            </div>
                        </router-link>
                        <div @click="showPopup = true" class="hubungi-kami flex items-center w-fit rounded-full hover:text-gray-800 min-h-4 
                                        !bg-transparent hover:!bg-blue-300 px-4 py-1 text-white border border-white">
                            <p class="text-xs whitespace-nowrap uppercase">
                                Lihat Legalitas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="isVisible" class="hidden md:animate-slideInFromRight md:justify-end md:flex md:p-16">
                <div class="relative flex justify-end">
                    <img src="../assets/img/tim1.png" class="w-3/5">
                    <div class="nametag absolute bottom-0">
                        <p class="text-xl text-blue-800 font-extrabold">Muchamad Ilham Tantowi. S.H., M.H</p>
                        <p class="text-md">Founder TantowiLaw</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue-600 p-8 text-white">
            <p class="mb-4">Tim Tantowi Law</p>
            <router-link to="/tim-kami">
                <div
                    class="cursor-pointer mb-4 py-1 px-4 w-fit h-fit text-xs bg-transparent border border-gray-400 rounded-full text-white">
                    Tim Kami</div>
            </router-link>
            <Slider />
        </div>
        <div class="md:grid md:grid-cols-2 md:p-16 md:mt-16 p-6">
            <img src="../assets/img/kenapaharus.jpg" alt="">
            <div class="text-black md:py-8 md:px-16 mt-4">
                <p class="text-md">Mengapa Harus Ke TantowiLaw</p>
                <p class="text-xl w-fit mt-4 mb-2">Dilakukan oleh tenaga ahli berintegritas, berfokus pada klien demi
                    hasil
                    maksimal</p>
                <Dropdown title="1. Jujur" class="cursor-pointer">
                    <p>This is the description text that appears when the dropdown is opened.</p>
                </Dropdown>
                <Dropdown title="2. Totalitas" class="cursor-pointer">
                    <p>This is the description text that appears when the dropdown is opened.</p>
                </Dropdown>
                <Dropdown title="3. Kredibilitas" class="cursor-pointer">
                    <p>This is the description text that appears when the dropdown is opened.</p>
                </Dropdown>
                <Dropdown title="4. Integritas" class="cursor-pointer">
                    <p>This is the description text that appears when the dropdown is opened.</p>
                </Dropdown>
                <Dropdown title="5. Tegak Lurus" class="cursor-pointer">
                    <p>This is the description text that appears when the dropdown is opened.</p>
                </Dropdown>
            </div>
        </div>
    </div>
    <Popup :isVisible="showPopup" @close="showPopup = false">
        <h2 class="text-2xl font-bold mb-4 text-white w-fit whitespace-normal">LEGALITAS</h2>
        <p class="text-sm mb-4 text-white w-fit whitespace-normal">Akta notaris<br>
            Nomor: 18, tanggal : 28 Mei 2024 </p>
        <p class="text-sm mb-4 font-bold text-white w-fit">'Pengesahan Menteri Hukum dan <br>
            Hak Asasi Manusia Republik Indonesia </p>
        <p class="text-sm mb-4 text-white w-fit">Nomor : AHU-0000656-AH.01.18 Tahun 2024, <br>
            Tanggal 28 Mei 2024<br>
            NPWP : 20.667.326.1-655.000 <br>
            Nomor Induk Berusaha (NIB) : 2905240103183 </p>
    </Popup>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isVisible: false,
            showPopup: false,
            popupTitle: '',
            popupDescription: ''
        }
    },
    mounted() {
        this.isVisible = true;
    },
    components: {
        Popup,
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
.nametag {
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.35);
    background-color: transparent;
    background-image: linear-gradient(240deg, #FFFFFF00 11%, #FFFFFF 59%);
    @apply p-4
}
</style>