<script setup>
import tabelHari from "../assets/tabelHari.vue";
import tabelPasar from "../assets/tabelPasar.vue";
import tabelJodoh from "../assets/tabelJodoh.vue";
import tabelSio from "../assets/tabelSio.vue";
</script>
<template>
  <div class="w-full h-full flex flex-col items-center">
    <h1 class="font-poet text-4xl sm:text-7xl text-slate-900">
      Kumpulan Tabel
    </h1>
    <div
      class="flex max-sm:flex-col sm:flex-row max-sm:gap-y-8 sm:gap-x-4 w-full mt-8"
    >
      <div class="flex w-full flex-col items-center">
        <h3 class="font-poet text-2 sm:text-4xl text-slate-900 mb-4">
          Tabel Hari
        </h3>
        <tabelHari />
      </div>
      <div class="flex w-full flex-col items-center">
        <h3 class="font-poet text-2 sm:text-4xl text-slate-900 mb-4">
          Tabel Pasar
        </h3>
        <tabelPasar />
      </div>
    </div>
    <div
      class="flex max-sm:flex-col sm:flex-row max-sm:gap-y-8 sm:gap-x-4 w-full mt-8"
    >
      <div class="flex w-full flex-col items-center">
        <h3 class="font-poet text-2 sm:text-4xl text-slate-900 mb-4">
          Tabel Jodoh
        </h3>
        <tabelJodoh />
      </div>
      <div class="flex w-full flex-col items-center">
        <h3 class="font-poet text-2 sm:text-4xl text-slate-900 mb-4">
          Tabel Sio
        </h3>
        <tabelSio />
      </div>
    </div>
  </div>
</template>
