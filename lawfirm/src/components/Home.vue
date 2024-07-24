<script setup>
import 'vue3-carousel/dist/carousel.css'
import WA from './LangsungWA.vue'
import Slider from './SliderTim.vue'
import Dropdown from './DetailsDropdown.vue'

</script>
<template>
    <div class="home">
        <div class="grid grid-cols-2 gap-16 items-center z-1 p-4">
            <div v-show="isVisible" class="animate-slideInFromLeft">
                <div>
                    <p class="text-6xl font-bold">Your Expert Legal Advisor</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nulla, eum eos perferendis
                        omnis at nam aliquid voluptate animi debitis reiciendis pariatur provident aliquam voluptas sint
                        labore tempore tempora voluptatum!
                    </p>
                    <div class="flex justify-around items-center mt-8">
                        <WA>
                            <div
                                class="hubungi-kami flex items-center w-fit rounded-full text-black hover:text-white min-h-4 px-12 py-6 !bg-blue-300 hover:!bg-blue-800">
                                <p class="text-md">Mulai Konsultasi</p>
                            </div>
                        </WA>
                        <p>Dipercayai beberapa orang</p>
                    </div>
                </div>
            </div>
            <div v-show="isVisible" class="animate-slideInFromRight justify-end flex p-16">
                <div class="relative flex justify-end">
                    <img src="../assets/img/foto.JPG" style="width: 60%;">
                    <div class="nametag absolute bottom-0">
                        <p class="text-xl text-blue-800 font-extrabold">Om Agung Test SPD SPD SPD SPD SPD</p>
                        <p class="text-md">Om Agung Test22222</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue-600 p-8 text-white">
            <p>Tim Yudhistira</p>
            <router-link to="/tim-kami">
                <div
                    class="cursor-pointer mt-4 py-2 px-4 w-fit h-fit text-sm bg-transparent border border-gray-400 rounded-full text-white">
                    Tim Kami</div>
            </router-link>
            <Slider class="mt-4 flex justify-center" />
        </div>
        <div class="grid grid-cols-2 p-16 mt-16">
            <img src="../assets/img/kenapaharus.jpg" alt="">
            <div class="text-black py-8 px-16">
                Mengapa Harus Ke TantowiLaw
                <p class="text-2xl w-fit">Dilakukan oleh tenaga ahli berintegritas, berfokus pada klien demi hasil maksimal</p>
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
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        this.isVisible = true;
    }
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