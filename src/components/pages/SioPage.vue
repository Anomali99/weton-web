<script setup>
import { ketek, macan, kul, jaran } from "../../assets/img/index.js";
import getHasil from "../logic/cari.js";
import { getSio } from "../logic/primbon.js";
import { ref } from "vue";

const dateInput = ref("");
const kodam = ref(null);

const getSioImg = (str) => {
  switch (str) {
    case "Macan":
      return macan;
    case "Kul":
      return kul;
    case "Jaran":
      return jaran;
    case "Ketek":
      return ketek;
    default:
      return null;
  }
};

const handle = () => {
  const tgl = dateInput.value;
  const result = getHasil(tgl);
  const results = getSio(result.hari.neptu + result.pasar.neptu);
  kodam.value = {
    hari: result.hari.value,
    pasar: result.pasar.value,
    neptuH: result.hari.neptu,
    neptuP: result.pasar.neptu,
    sio: results.sio,
    sioInd: results.sioInd,
    sioImg: getSioImg(results.sio),
  };
};
</script>

<template>
  <div class="w-full h-full flex flex-col items-center">
    <h1 class="font-poet text-2xl sm:text-7xl">Mencari Sio</h1>
    <div
      class="mt-4 sm:mt-8 flex max-sm:flex-col sm:flex-row max-sm:gap-y-4 sm:gap-x-4 w-full"
    >
      <div
        class="w-full h-max sm:h-[50vh] bg-slate-800 shadow-amber-900 rounded-xl flex justify-center items-center max-sm:p-4 sm:py-16"
      >
        <form class="w-full sm:w-1/2 flex flex-col" @submit.prevent="handle">
          <label for="tgl" class="font-poet text-xl sm:text-3xl text-white"
            >Tanggal</label
          >
          <input
            class="my-1 sm:my-4 rounded-md sm:rounded-xl text-center p-1 text-sm sm:p-2 sm:text-xl border-slate-500 border-2 border-solid"
            type="date"
            id="tgl"
            v-model="dateInput"
          />
          <button
            class="w-1/2 sm:w-full bg-slate-500 sm:p-2 rounded-md text-sm font-poet text-white mx-auto hover:bg-slate-700 border-solid border-slate-500 border-2"
          >
            cek
          </button>
        </form>
      </div>
      <div
        v-if="kodam != null"
        class="sm:w-1/3 sm:min-w-max rounded-xl bg-slate-500 flex flex-col items-center pb-4"
      >
        <img :src="kodam.sioImg" alt="sio" />
        <p
          class="font-poet text-3xl text-white mb-2 border-b-2 border-solid border-white"
        >
          {{ kodam.sio }}
          <span class="text-gray-300">({{ kodam.sioInd }})</span>
        </p>
        <p class="text-xl font-bold text-white">Tanggal: {{ dateInput }}</p>
        <p class="text-xl font-bold text-white">
          {{ kodam.hari }}
          <span class="text-gray-300">({{ kodam.neptuH }})</span> +
          {{ kodam.pasar }}
          <span class="text-gray-300">({{ kodam.neptuP }})</span>
        </p>
        <p class="text-xl font-bold text-white">
          Total = {{ kodam.neptuH + kodam.neptuP }}
        </p>
      </div>
    </div>
  </div>
</template>
