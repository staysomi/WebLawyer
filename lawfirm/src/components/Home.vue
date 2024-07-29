<script setup>
import 'vue3-carousel/dist/carousel.css'
import WA from './LangsungWA.vue'
import Slider from './SliderTim.vue'
import Dropdown from './DetailsDropdown.vue'
import Popup from './PopupBio.vue'

</script>
<template>
    <div class="home">
        <div class="md:grid md:grid-cols-2 md:gap-16 md:px-16 items-center z-1">
            <div v-show="isVisible" class="md:animate-slideInFromLeft px-4">
                <div>
                    <p class="text-2xl md:text-4xl xl:text-6xl mb-4 md:mt-10 font-bold animate-slideInFromTop">Wujudkan
                        Keadilan
                        Hukum Bersih Bersama Kami
                    </p>
                    <p>Tantowi Law – Menegakkan Hukum Yang Adil Bagi Seluruh Rakyat Indonesia
                    </p>
                    <div
                        class="flex justify-start md:gap-16 items-center mt-2 animate-slideInFromBottom md:animate-slideInFromLeft">
                        <WA>
                            <div class="hubungi-kami flex items-center w-fit md:px-6 md:py-4 rounded-full hover:text-gray-800 min-h-4 
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
            <div v-show="isVisible" class="bg-blue-900 md:hidden mt-8 p-4 text-white">
                <div class="animate-slideInFromBottom mt-8">
                    <p class="text-md">> Tantowi Law</p>
                    <p class="text-xl my-4 w-fit">Merupakan Kantor Hukum Terkemuka Di Tulungagung Yang Menegakkan Hukum
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
                    </div>
                </div>
            </div>
            <div v-show="isVisible" class="hidden md:animate-slideInFromRight md:justify-end md:flex">
                <div class="relative flex justify-center">
                    <img src="../assets/img/tim11x1.png" class="w-4/5">
                    <div class="nametag absolute left-0 bottom-0">
                        <p class="text-xl text-blue-800 font-extrabold">Muchamad Ilham Tantowi. S.H., M.H</p>
                        <p class="text-md">Founder TantowiLaw</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="isVisible" class="bg-blue-900 hidden md:flex justify-center py-4 text-white">
            <div class="animate-slideInFromBottom my-8 w-1/2">
                Kantor Advokat Terpercaya di Tulungagung yang dapat menyelesaikan setiap permasalahan hukum.
                <div class="grid grid-cols-2 gap-8 mt-4">
                    <img src="../assets/img/office.jpg" class="">
                    <div class="item-center relative">
                        <div class="absolute bottom-0">
                            <p class="text-xl">Jadikanlah kami rekan terpecaya dalam setiap permasalahan Hukum anda.</p>
                            <p class="text-md my-4 w-fit">Kami siap membantu setiap permasalahan hukum berdasarkan
                                Konstruksi Hukum yang tepat berdasarkn Analisa Hukum yang Efektif.</p>
                            <div class="flex gap-4">
                                <router-link to="/layanan-kami">
                                    <div
                                        class="hubungi-kami flex items-center w-fit rounded-full hover:text-gray-800 min-h-4 
                                                    !bg-white hover:!bg-blue-300 px-4 py-1 text-blue-800 border border-white">
                                        <p class="text-xs whitespace-nowrap uppercase">
                                            Layanan Kami</p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue-900 py-8 px-4 md:px-48 text-white">
            <p class="mb-4">Tim Kami</p>
            <p class="md:text-4xl mb-4">Advokat Profesional, Jujur, Tegak Lurus dan Berintegritas Tinggi.</p>
            <router-link to="/tim-kami">
                <div
                    class="cursor-pointer mb-4 py-1 px-4 w-fit h-fit text-lg hover:text-blue-900 hover:bg-gray-400 bg-transparent border border-gray-400 rounded-full text-white">
                    Tim Kami</div>
            </router-link>
            <Slider class="md:hidden" />
            <div class="hidden md:grid md:grid-cols-2 md:gap-8">
                <div v-for="item in tim">
                    <div class="flex w-full flex-col justify-center items-center">
                        <img :src="`src/assets/img/${item.tim}1x1.png`" alt="Slide Image"
                            class="bg-gradient-to-b from-gray-100 to-transparent w-4/5" />
                        <p class="text-lg">Advokat</p>
                        <p class="text-2xl">{{ item.name }}</p>
                        <router-link :to="item.tim">
                            <div
                                class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-lg bg-transparent hover:text-blue-900 hover:bg-gray-400 border border-gray-400 rounded-full text-white">
                                Lihat Bio</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:p-16 md:mt-16 p-6">
            <img src="../assets/img/kenapaharus.jpg" alt="">
            <div class="text-black md:py-8 md:px-16 mt-4">
                <p class="text-md">Mengapa Harus Ke TantowiLaw</p>
                <p class="text-xl w-fit mt-4 mb-2">Advokat Profeiaonal, Jujur, Tegak Lurus dan Berintegritas Tinggi</p>
                <Dropdown title="1. Jujur" class="cursor-pointer md:mt-4">
                    <li class="md:text-medium ml-8 mt-2">Jujur menangani perkara</li>
                    <li class="md:text-medium ml-8 mt-4">Jujur dalam menyampaikan analisa perkara kepada klien</li>
                    <li class="md:text-medium ml-8 mt-4">Jujur dalam penegakan hukum</li>
                </Dropdown>
                <Dropdown title="2. Totalitas" class="cursor-pointer md:mt-4">
                    <li class="md:text-medium ml-8 mt-2">Totalitas dalam menangani perkara</li>
                    <li class="md:text-medium ml-8 mt-4">Totalitas dalam penyelesaian perkara</li>
                    <li class="md:text-medium ml-8 mt-4">Totalitas dalam penegakan hukum</li>
                </Dropdown>
                <Dropdown title="3. Kredibilitas" class="cursor-pointer md:mt-4">
                    <li class="md:text-medium ml-8 mt-2">Berkualitas, berkapasitas dalam penegakan hukum</li>
                </Dropdown>
                <Dropdown title="4. Integritas" class="cursor-pointer md:mt-4">
                    <li class="md:text-medium ml-8 mt-2">Berwawasan dengan keilmuan hukum yang luas</li>
                </Dropdown>
                <Dropdown title="5. Tegak Lurus" class="cursor-pointer md:mt-4">
                    <li class="md:text-medium ml-8 mt-2">Berkomitmen secara tegak lurus dalam menangani dan
                        menyelesaikan setiap perkara berdasarkan azas-azas Ketuhanan</li>
                </Dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isVisible: false,
            tim: [
                { tim: 'tim1', name: 'Muchamad Ilham Tantowi. S.H., M.H' },
                { tim: 'tim2', name: 'Pak Arif. S.H., M.H' }
            ],
        }
    },
    mounted() {
        this.isVisible = true;
    },
    components: {
    },
    methods: {
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