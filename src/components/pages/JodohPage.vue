<script setup>
import {
  sandang,
  pangan,
  papan,
  sekarat,
  pati,
} from "../../assets/img/index.js";
import getHasil from "../logic/cari.js";
import { getJodoh1 } from "../logic/primbon.js";
import { ref } from "vue";

const dateInput1 = ref("");
const dateInput2 = ref("");
const hasil = ref(null);

const getImg = (str) => {
  switch (str) {
    case "Pati":
      return pati;
    case "Sandang":
      return sandang;
    case "Papan":
      return papan;
    case "Pangan":
      return pangan;
    case "Sekarat":
      return sekarat;
    default:
      return null;
  }
};

const handle = () => {
  const tgl1 = dateInput1.value;
  const tgl2 = dateInput2.value;
  const result1 = getHasil(tgl1);
  const result2 = getHasil(tgl2);
  const results = getJodoh1(
    result1.hari.neptu + result1.pasar.neptu,
    result2.hari.neptu + result2.pasar.neptu
  );
  hasil.value = {
    hari1: result1.hari.value,
    hari2: result2.hari.value,
    pasar1: result1.pasar.value,
    pasar2: result2.pasar.value,
    neptuH1: result1.hari.neptu,
    neptuH2: result2.hari.neptu,
    neptuP1: result1.pasar.neptu,
    neptuP2: result2.pasar.neptu,
    hasil: results.hasil,
    img: getImg(results.hasil),
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
          <label for="tgl1" class="font-poet text-xl sm:text-3xl text-white"
            >Tanggal 1</label
          >
          <input
            class="my-1 sm:my-4 rounded-md sm:rounded-xl text-center p-1 text-sm sm:p-2 sm:text-xl border-slate-500 border-2 border-solid"
            type="date"
            id="tgl1"
            v-model="dateInput1"
          />
          <label for="tgl2" class="font-poet text-xl sm:text-3xl text-white"
            >Tanggal 2</label
          >
          <input
            class="my-1 sm:my-4 rounded-md sm:rounded-xl text-center p-1 text-sm sm:p-2 sm:text-xl border-slate-500 border-2 border-solid"
            type="date"
            id="tgl2"
            v-model="dateInput2"
          />
          <button
            class="w-1/2 sm:w-full bg-slate-500 sm:p-2 rounded-md text-sm font-poet text-white mx-auto hover:bg-slate-700 border-solid border-slate-500 border-2"
          >
            cek
          </button>
        </form>
      </div>
      <div
        v-if="hasil != null"
        class="sm:w-1/3 sm:min-w-max rounded-xl bg-slate-500 flex flex-col items-center p-8"
      >
        <img
          class="sm:w-[30vw] aspect-square object-cover"
          :src="hasil.img"
          alt="hasil"
        />
        <p
          class="font-poet text-3xl text-white mb-2 border-b-2 border-solid border-white"
        >
          {{ hasil.hasil }}
        </p>
        <p class="text-xl font-bold text-white">
          {{ dateInput1 }} <span class="text-gray-300">&</span> {{ dateInput2 }}
        </p>
        <p class="text-xl font-bold text-white">
          ({{ hasil.hari1 }}
          <span class="text-gray-300">({{ hasil.neptuH1 }})</span> +
          {{ hasil.pasar1 }}
          <span class="text-gray-300">({{ hasil.neptuP1 }})</span>) + ({{
            hasil.hari2
          }}
          <span class="text-gray-300">({{ hasil.neptuH2 }})</span> +
          {{ hasil.pasar2 }}
          <span class="text-gray-300">({{ hasil.neptuP2 }})</span>)
        </p>
        <p class="text-xl font-bold text-white">
          Total =
          {{ hasil.neptuH1 + hasil.neptuP1 + hasil.neptuH2 + hasil.neptuP2 }}
        </p>
      </div>
    </div>
  </div>
</template>
