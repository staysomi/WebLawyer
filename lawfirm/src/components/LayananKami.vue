<script setup>
import 'vue3-carousel/dist/carousel.css'
import Dropdown from './DetailsDropdown.vue'

</script>
<template>
    <div class="about">
        <h2 class="text-2xl font-semibold mt-10 ml-28">Layanan Kami</h2>
        <p class="text-5xl font-semibold ml-28 mt-4">Lorem ipsum dolor sit amet,
        <p class="text-5xl font-semibold ml-28">consectetur adipiscing elit.</p>
        </p>
    </div>

    <div class="mt-20 justify-center ml-12">
        <img src="../assets/img/coba.png" class="">
    </div>

    <div>

        <div class="text-xl mt-20 ml-20 mr-10 flex">
            <!-- Konten 1 -->
            <div class="text-xl mt-auto">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>
            </div>

            <!-- Konten 2 -->
            <div class="text-xl mt-auto ml-56 mr-10">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>
            </div>
        </div>

        <div class="mt-8 ml-20">
            <div class="bg-blue-900 w-40 py-3 rounded-full hover:bg-white border-2 border-white text-center">
                <button class="font-bold text-white">LIHAT LEGALITAS</button>
            </div>
        </div>
    </div>

    <div class="layanan my-10 px-24">
        <p class="text-3xl font-bold mt-20">SEMUA LAYANAN</p>
        <Dropdown title="Litgasi dan penyelesaian sengketa"
            class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Non-Litgasi" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Korporasi dan Komersial" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Perdata" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Perburuhan" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Properti" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Keluarga" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Pidana" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Asisten Pajak" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Perizinan Usaha" class="cursor-pointer text-2xl">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
    </div>
</template>


<script>
export default {
}
</script>

<style scoped></style>