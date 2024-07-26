<script setup>
import 'vue3-carousel/dist/carousel.css'
import Dropdown from './DetailsDropdown.vue'
import Popup from './PopupBio.vue'

</script>
<template>
    <div class="about">
        <h2 class="text-xl font-semibold mt-10 ml-5">Layanan Kami</h2>
        <p class="text-2xl font-semibold ml-5 mt-4">Lorem ipsum dolor sit amet,
        <p class="text-2xl font-semibold ml-5">consectetur adipiscing elit.</p>
        </p>
    </div>

    <div class="mt-20 justify-center ml-12">
        <img src="../assets/img/hmm.png" class="">
    </div>

    <div>

        <div class="text-sm mt-20 flex justify-center">
            <!-- Konten 1 -->
            <div class="text-sm p-2 ">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>
                <div @click="showPopup = true, sendPopupData('LEGALITAS')"
                    class="cursor-pointer  bg-blue-900 w-40 py-3 rounded-full hover:bg-white border-2 border-white text-center text-white text-sm mt-4">
                    LIHAT LEGALITAS</div>
                <Popup :isVisible="showPopup" @close="showPopup = false">
                    <h2 class="text-sm font-bold mb-4 text-white">LEGALITAS</h2>
                    <p class="text-medium mb-4 text-white">Akta notaris hmmmmmmmmmmmmmmmmmmmmmmmmmmm <br>
                        Nomor: 18, tanggal : 28 Mei 2024 </p>
                    <p class="text-medium mb-4 font-bold text-white">'Pengesahan Menteri Hukum dan Hak Asasi Manusia
                        Republik Indonesia </p>
                    <p class="text-medium mb-4 text-white">Nomor : AHU-0000656-AH.01.18 Tahun 2024, tanggal 28 Mei
                        2024<br>
                        NPWP : 20.667.326.1-655.000 <br>
                        Nomor Induk Berusaha (NIB) : 2905240103183 </p>
                </Popup>
            </div>

            <!-- Konten 2 -->
            <div class="text-sm ml-8 p-2">
                Lorem ipsum dolor sit amet, adipiscing elit.
                <p>Nullam fringilla nec nisl id vehicula. Curabitur leo ante,</p>
                <p>ornare ac urna sodales, volutpat egestas ante.</p>
                <p>Praesent volutpat turpis nibh, vitae posuere erat elementum nec.</p>
            </div>
        </div>
    </div>


    <div class="layanan my-10 px-11">
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
</template>


<script>
export default {
    components: {
        Popup,
    },
    data() {
        return {
            showPopup: false,
            popupTitle: '',
            popupDescription: ''
        };
    },

    methods: {
        sendPopupData(title, description) {
            this.popupTitle = title
            this.popupDescription = description
        }
    },
};
</script>

<style scoped>
/* Optional: Additional styling */
</style>