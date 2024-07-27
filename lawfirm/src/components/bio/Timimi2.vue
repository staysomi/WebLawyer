<template>
    <div class="p-8 md:flex md:gap-20 md:justify-center">
        <div class="hidden md:flex md:flex-col">
            <Pengacara />
        </div>
        <div class="md:w-3/5">
            <p class="text-xs uppercase">Biodata Diri</p>
            <p class="text-md">Pak Arif</p>
            <div class="md:flex md:gap-8">
                <img src="../../assets/img/tim21x1.png" class="md:w-2/5 md:h-auto bg-gradient-to-b from-gray-100 to-blue-500 my-2">
                <div class="flex flex-col">
                    <p class="text-sm"> <span class="font-bold">Muchamad Ilham Tantowi. S.H., M.H</span> adalah pakar hukum
                        berpengalaman berkebangsaan Indonesia, memiliki latar belakang pendidikan yang solid
                        dengan gelar S1 dan S2 dalam Ilmu Hukum dari Universitas Islam Kadiri (UNISKA). Sebagai seorang advokat yang
                        terampil, beliau telah menangani berbagai kasus hukum yang kompleks di berbagai pengadilan di seluruh
                        Indonesia.</p><br>
                    <p>Dengan pengalaman yang luas, beliau telah berhasil menangani sejumlah perkara penting termasuk
                        sengketa tanah, gugatan pembagian waris, kasus-kasus pidana terkait narkoba, serta berbagai perkara perdata
                        dan pidana lainnya. Dedikasi beliau dalam memberikan perlindungan hukum dan advokasi yang kuat terhadap
                        klien-klien di berbagai tingkatan pengadilan menegaskan komitmen beliau untuk keadilan dan penegakan hukum
                        yang adil.</p>
                </div>
            </div>
            <p class="mt-4 text-sm">Job Advokat</p>
            <Dropdown title="Pendidikan" class="cursor-pointer">
                <li class="text-sm ml-4">S1 Ilmu Hukum (Uniska)</li>
                <li class="text-sm ml-4">S2 Ilmu Hukum (Uniska)</li>
            </Dropdown>
            <Dropdown title="Rekam Kerja" class="cursor-pointer">
                <div v-for="(item, index) in cases" class="flex mb-2">
                    <p class="text-sm ml-4">{{ index + 1 }}.</p>
                    <p class="text-sm ml-4">{{ item }}</p>
                </div>
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
                "Sidang Perkara Perdata Sengketa Tanah di Pengadilan Negeri Tulungagung",
                "Sidang Perkara Perdata Gugatan Pembagian Waris di Pengadilan Agama Tulungagung",
                "Sidang Perkara Pidana Narkoba di Pengadilan Negeri Tulungagung",
                "Banding Perkara Pidana Narkoba di Pengadilan Tinggi Surabaya",
                "Pendampingan Pidana Penyerobotan Tanah Di POLRES Pare",
                "Sidang Perkara Perdata Penetapan Ahli Waris di Pengadilan Agama Tulungagung",
                "Sidang Perkara Perdata Wanprestasi Sengketa antara Dua Perusahaan Tambang Nikel Di Pengadilan Negeri Boyolali",
                "Sidang Perkara Perdata Perbuatan Melawan Hukum Di Pengadilan Negeri Jakarta Pusat",
                "Perceraian Di Pengadilan Agama Kabupaten Kediri",
                "Sidang Perkara Perdata wanprestasi Arisan Online di Pengadilan Negeri Tulungagung",
                "Banding Perkara Perdata wanprestasi Arisan online di Pengadilan Tinggi Surabaya",
                "Pendampingan Perkara UU ITE ( Pencemaran Nama Baik ) Di Polres Tulungagung",
                "Pendampingan Perkara Pasal 266 ayat 2 ( Identitas ganda ) Di Polres Tulungagung",
                "Pendampingan Perkara Pidana pasal 385 KUHP (Penyerobotan Tanah) Di POLRES Blitar",
                "Sidang Perkara Perdata Perbuatan Melawan Hukum Melawan Salah Satu Desa Di Pengadilan Negeri Blitar",
                "Banding Perkara Perdata Perbuatan Melawan Hukum, Melawan Salah Satu Desa Di Pengadilan Tinggi Surabaya",
                "Sidang Perkara Perdata Perbuatan Melawan Hukum Di Pengadilan Negeri Tulungagung",
                "Banding perkara Perdata Perbuatan Melawan Hukum Di Pengadilan Tinggi Surabaya",
                "Permohonan Kasasi perkara Perdata Perbuatan Melawan Hukum Di Mahkamah Agung",
                "Sidang Perkara Perdata Perbuatan Melawan Hukum Di Pengadilan Negeri Kediri",
                "Sidang Perkara Perdata Perbuatan Melawan Hukum Melawan Salah Satu Instansi Pemerintah Di Pengadilan Negeri Tulungagung",
                "Sidang Perkara Pidana Pasal 266 ayat 2 ( Identitas ganda ) Di Pengadilan Negeri Tulungagung",
                "Sidang Perceraian di Pengadilan Agama Tulungagung",
                "Pendampingan Perkara Pidana Pasal 372 KUHP ( Penggelapan ) Di Polres Tulungagung",
                "Pendampingan Perkara Pidana Pasal 378 KUHP ( Penipuan ) Di Polres Tulungagung",
                "Pendampingan Perkara Pidana Pasal 378 KUHP ( Penipuan ) Di Polres Ponorogo",
                "Pendampingan Perkara Pidana Pasal 378 KUHP ( Penipuan ) Di Polres Blitar",
                "Pendampingan Perkara Pidana Pasal 368 KUHP ( Pemerasan ) Di Polsek Ngunut",
                "Pendampingan Perkara Non Litigasi",
                "Pendampingan Perkara Pidana Tindak Pidana Korupsi ( TIPIKOR ) Di Kejaksaan Negeri Pacitan",
                "Pendampingan Perkara Pidana Pasal 71 UU No. 20 tahun 2003 Di Polda Jatim",
                "Pendampingan Perkara Pidana Perlindungan Anak dan Wanita Di Polres Tulungagung",
                "Penyelesaian Non Litigasi Pasal 378 KUHP ( Penipuan )",
                "Sidang Gugatan Sederhana Di Pengadilan Negeri Tulungagung",
                "Pendampingan Class Action ( Non Litigasi )",
                "Pendampingan Non Litigasi Win – Win Solution Pasal 310 UU Lalu Lintas",
                "Pendampingan Non Litigasi Win – Win Solution UU ITE ( Pencemaran Nama Baik )",
                "Sidang Perkara Perdata Penetapan Perubahan Nama di Pengadilan Negeri Tulungagung",
                "Pendampingan Warga Negara Asing Di Kantor Imigrasi Blitar",
                "Pendampingan Penyerahan Ana Di PSAB Sidoarjo",
                "Sidang Perkara Perdata Gugatan Gono Gini Pengadilan Agama Tulungagung",
                "Perceraian Di Pengadilan Agama Kota Kediri"
            ]
        };
    }
};
</script>