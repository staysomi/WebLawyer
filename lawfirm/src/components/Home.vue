<script setup>
import 'vue3-carousel/dist/carousel.css'
import WA from './LangsungWA.vue'

</script>
<template>
    <div class="home">
        <div class="grid grid-cols-2 gap-16 items-center">
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
            <div v-show="isVisible" class="animate-slideInFromRight justify-end flex">
                <div class="relative">
                    <img src="../assets/img/foto.JPG" class="w-72">
                    <div class="nametag absolute bottom-0">
                        <p class="text-xl text-blue-800 font-extrabold">Om Agung Test SPD SPD SPD SPD SPD</p>
                        <p class="text-md">Om Agung Test22222</p>
                    </div>
                </div>
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
    transform: translateX(-20%);
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.35);
    background-color: transparent;
    background-image: linear-gradient(240deg, #FFFFFF00 11%, #FFFFFF 59%);
    @apply p-4
}
</style>