<script setup>
import 'vue3-carousel/dist/carousel.css'
import Dropdown from './DetailsDropdown.vue'
import Popup from './PopupBio.vue'

</script>
<template>
    <div class="about p-4">
        <h2 class="text-md font-semibold mt-10">Layanan Kami</h2>
        <p class="text-2xl font-semibold mt-4">Lorem ipsum dolor sit amet,
        <p class="text-2xl font-semibold">consectetur adipiscing elit.</p>
        </p>
    </div>

    <div class="mt-20 justify-center flex">
        <img src="../assets/img/hmm.png" class="">
    </div>

    <div>

        <div class="text-sm mt-20 flex justify-center">
            <!-- Konten 1 -->
            <div class="text-sm p-4 ">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>


            </div>

            <!-- Konten 2 -->
            <div class="text-sm p-4 hidden md:flex">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>
            </div>
        </div>
        <div @click="showPopup = true"
            class="cursor-pointer bg-blue-900 w-40 py-1 rounded-full hover:bg-blue-300 border-2 border-white text-center text-white text-sm ml-4 mt-4">
            LIHAT LEGALITAS</div>
    </div>


    <div class="layanan my-4 px-4">
        <p class="text-xl font-bold mt-20">SEMUA LAYANAN</p>
        <Dropdown title="Litgasi dan penyelesaian sengketa" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Non-Litgasi" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Korporasi dan Komersial" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Perdata" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Perburuhan" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Properti" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Keluarga" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Pidana" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Asisten Pajak" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Perizinan Usaha" class="cursor-pointer text-sm">
            <li class="text-sm ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
    </div>
    <Popup :isVisible="showPopup" @close="showPopup = false">
        <h2 class="text-sm font-bold mb-4 text-white">LEGALITAS</h2>
        <p class="text-medium mb-4 text-white">Akta notaris<br>
            Nomor: 18, tanggal : 28 Mei 2024 </p>
        <p class="text-medium mb-4 font-bold text-white">'Pengesahan Menteri Hukum dan Hak Asasi Manusia
            Republik Indonesia </p>
        <p class="text-medium mb-4 text-white">Nomor : AHU-0000656-AH.01.18 Tahun 2024, tanggal 28 Mei
            2024<br>
            NPWP : 20.667.326.1-655.000 <br>
            Nomor Induk Berusaha (NIB) : 2905240103183 </p>
    </Popup>
</template>


<script>
export default {
    components: {
        Popup,
    },
    data() {
        return {
            showPopup: false,
        };
    },

    methods: {
    },
};
</script>

<style scoped>
/* Optional: Additional styling */
</style>