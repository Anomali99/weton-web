<script setup>
import tableAbad from "./tableAbad.vue";
</script>
<template>
  <h2 class="w-full text-center">Petunjuk</h2>
  <div class="w-full font-sans text-sm mt-2">
    <ul class="list-decimal ml-4 mb-2">
      <li>Dibawah lingkaran tanggal adalah tahun.</li>
      <li>
        Didalam lingkaran tahun ada angka 1 s/d 100,
        <span class="font-bold">tahun kabisat (warna hitam)</span> dan
        <span class="font-bold text-yellow-700"
          >tahun basisthoh (warna kuning)</span
        >.
      </li>
      <li>
        Angka tahun berwarna hitam sesuai dengan petak bulan yang berwarna
        hitam.
      </li>
      <li>
        Angka tahun berwarna hitam sesuai dengan petak bulan yang berwarna
        kuning.
      </li>
      <li>Huruf ABC dan seterusnya adalah petak abad.</li>
    </ul>
  </div>
  <tableAbad />
  <h2 class="w-full text-center mt-4">Cara Penggunaan</h2>
  <div class="w-full font-sans text-sm mt-2">
    <ul class="list-decimal ml-4 mb-2">
      <li>
        Kumpulkan data tentang: Tahun, Bulan dan Tanggal, yang akan dicari
        adalah hari dan pasarnya.
      </li>
      <li>
        Posisikan petak bulan januari dibawah petak abad.
        <span class="text-gray-500"
          >(contoh: tahun 2022 termasuk abad 21, maka posisi bulan januari
          dibawah petak huruf A)</span
        >
      </li>
      <li>Posisikan angka tahun dibawah petak bulan yang dicari.</li>
      <li>
        Setelah itu cari tanggalnya kalau sudah ketemu lihat diatas tanggal
        tersebut, maka hari dan pasarnya sudah dapat dilihat.
        <span class="text-gray-500">(ketemu)</span>
      </li>
    </ul>
  </div>
</template>
