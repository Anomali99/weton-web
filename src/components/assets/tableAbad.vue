<script setup>
const abad = [
  { kode: "A", abad: "1", mulai: "1-100" },
  { kode: "B", abad: "2", mulai: "101-200" },
  { kode: "C", abad: "3", mulai: "201-300" },
  { kode: "D", abad: "4", mulai: "301-400" },
  { kode: "E", abad: "5", mulai: "401-500" },
  { kode: "F", abad: "6", mulai: "501-600" },
  { kode: "G", abad: "7", mulai: "601-700" },
  { kode: "H", abad: "8", mulai: "701-800" },
  { kode: "I", abad: "9", mulai: "801-900" },
  { kode: "J", abad: "10", mulai: "901-1000" },
  { kode: "K", abad: "11", mulai: "1001-1100" },
  { kode: "L", abad: "12", mulai: "1101-1200" },
  { kode: "M", abad: "13", mulai: "1201-1300" },
  { kode: "N", abad: "14", mulai: "1301-1400" },
  { kode: "O", abad: "15", mulai: "1401-1500" },
  { kode: "P", abad: "16", mulai: "1501-1600" },
  { kode: "Q", abad: "17", mulai: "1601-1700" },
  { kode: "R", abad: "18", mulai: "1701-1800" },
  { kode: "S", abad: "19", mulai: "1801-1900" },
  { kode: "T", abad: "20", mulai: "1901-2000" },
];
</script>

<template>
  <div class="w-full flex flex-col font-sans text-sm">
    <div
      class="w-full flex flex-row justify-between text-white bg-black font-bold"
    >
      <p class="border-black border-solid border-2 w-full text-center">Kode</p>
      <p
        class="border-black border-solid border-2 border-l-0 w-full text-center"
      >
        Abad
      </p>
      <p
        class="border-black border-solid border-2 border-l-0 w-full text-center"
      >
        Mulai Tahun
      </p>
    </div>
    <div
      v-for="item of abad"
      :key="item.kode"
      class="w-full flex flex-row justify-between bg-white"
    >
      <p
        class="border-black border-solid border-2 w-full border-t-0 text-center"
      >
        {{ item.kode }}
      </p>
      <p
        class="border-black border-solid border-2 border-l-0 border-t-0 w-full text-center"
      >
        {{ item.abad }}
      </p>
      <p
        class="border-black border-solid border-2 border-l-0 border-t-0 w-full text-center"
      >
        {{ item.mulai }}
      </p>
    </div>
    <div class="w-full flex text-white bg-black font-bold">
      <p class="w-full text-center">
        Mulai 2001 Abad kembali ke kode A (abad 21) dst.
      </p>
    </div>
  </div>
</template>
