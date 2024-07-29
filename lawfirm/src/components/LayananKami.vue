<script setup>
import 'vue3-carousel/dist/carousel.css'
import Dropdown from './DetailsDropdown.vue'
import Popup from './PopupBio.vue'

</script>
<template>
    <div class="about p-4">
        <h2 class="md:text-2xl font-semibold md:mt-10 md:ml-28">Layanan Kami</h2>
        <p class="md:text-4xl font-semibold mt-4 md:ml-28">Wujudkan Keadilan Hukum Bersih Bersama Kami</p>
    </div>

    <div class="mt-20 justify-center flex">
        <img src="../assets/img/hmm.png" class="">
    </div>

    <div>

        <div class="text-sm mt-20 flex flex-col md:flex-row">
            <!-- Konten 1 -->
            <div class="md:text-xl p-4 md:ml-28 ">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>


            </div>

            <!-- Konten 2 -->
            <div class="md:text-xl p-4 block md:mr-28 md:ml-10">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum.</p>
            </div>
        </div>
    </div>

    <div class="layanan my-4 px-4 md:ml-28 md:mr-40 mb-10">
        <p class="md:text-3xl font-bold mt-10 md:mt-20">LAYANAN KAMI</p>
        <Dropdown title="Hukum Perdata" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8 mt-2"> Hukum Corporate</li>
            <li class="md:text-medium ml-8 mt-4"> Hukum Properti</li>
            <li class="md:text-medium ml-8 mt-4"> Hukum Perindustrian</li>
            <li class="md:text-medium ml-8 mt-4"> Korporasi dan Komersial</li>
            <li class="md:text-medium ml-8 mt-4"> Hukum Keluarga</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Pidana" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8 mt-2">Hukum Pidana Umum</li>
            <li class="md:text-medium ml-8 mt-4">Hukum Pidana Khusus</li>
            <li class="md:text-medium ml-8 mt-4">Perlindungan Perempuan dan Anak</li>
            <li class="md:text-medium ml-8 mt-4">Tindak Pidana Korupsi</li>
        </Dropdown>
        <hr>
        <Dropdown title="Non Litgasi" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <!-- <Dropdown title="Hukum Perdata" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Perburuhan" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Properti" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Keluarga" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Hukum Pidana" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Asisten Pajak" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr>
        <Dropdown title="Perizinan Usaha" class="cursor-pointer md:text-xl md:mt-4">
            <li class="md:text-medium ml-8"> ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </Dropdown>
        <hr> -->
    </div>
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