<template>
    <div class="p-8 md:flex md:gap-20 md:justify-center">
        <div class="hidden md:flex md:flex-col">
            <Pengacara />
        </div>
        <div class="md:w-3/5">
            <p class="text-xs uppercase">Biodata Diri</p>
            <p class="text-md">Arif Fathkurrohman, S.H.</p>
            <div class="md:flex md:gap-8">
                <img src="../../assets/img/tim21x1.png" class="md:w-2/5 md:h-auto bg-gradient-to-b from-gray-100 to-blue-500 my-2">
                <div class="flex flex-col">
                    <p class="text-sm"> <span class="font-bold">Arif Fathkurrohman, S.H.</span> adalah pakar hukum
                        berpengalaman berkebangsaan Indonesia, memiliki latar belakang pendidikan yang solid
                        dengan gelar S1 dalam Ilmu Hukum dari Universitas Tulungagung. Sebagai seorang advokat yang
                        terampil, beliau telah menangani berbagai kasus hukum yang kompleks di berbagai pengadilan di seluruh
                        Indonesia.</p>
                </div>
            </div>
            <p class="mt-4 text-sm">Job Advokat</p>
            <Dropdown title="Pendidikan" class="cursor-pointer">
                <li class="text-sm ml-4">S1 Ilmu Hukum (Universitas Tulungagung)</li>
            </Dropdown>
        </div>
        <div class="md:hidden">
            <Pengacara />
        </div>
    </div>
</template>
<script setup>
import Dropdown from '../DetailsDropdown.vue'
import Pengacara from '../PengacaraLainnya.vue'
</script>
<script>
export default {
    data() {
        return {
            cases: [
                
            ]
        };
    }
};
</script>