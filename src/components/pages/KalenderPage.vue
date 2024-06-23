<script setup>
import { ref, watch } from "vue";
import { kalender1, kalender2, kalender3 } from "../../assets/img";
import petunjuk from "../assets/petunjuk.vue";

const bulan = ref(0);
const tanggal = ref(0);

const checkBulan = () => {
  if (bulan.value > 34) {
    bulan.value = 0;
  } else if (bulan.value < 0) {
    bulan.value = 34;
  }
  const ka2 = document.getElementById("ka2");
  ka2.style.transform = `rotate(${bulan.value * 10.28571428571429}deg)`;
};
const checkTanggal = () => {
  if (tanggal.value > 34) {
    tanggal.value = 0;
  } else if (tanggal.value < 0) {
    tanggal.value = 34;
  }
  const ka3 = document.getElementById("ka3");
  ka3.style.transform = `rotate(${tanggal.value * 10.28571428571429}deg)`;
};
</script>

<template>
  <div class="w-full h-full flex flex-col items-center">
    <h1 class="font-poet text-2xl sm:text-7xl">Kalender Sepanjang Masa</h1>
    <div class="w-full">
      <div
        class="w-full h-max flex flex-col sm:flex-row sm:mt-12 mt-4 sm:gap-4"
      >
        <div
          class="w-full h-[100vw] sm:w-[40vw] sm:h-[40vw] relative overflow-hidden"
        >
          <img
            class="w-fit h-fit max-w-full absolute object-cover rounded-full"
            :src="kalender1"
            alt="kalender1"
          />
          <img
            id="ka2"
            class="w-fit h-fit max-w-full absolute object-cover rounded-full"
            :src="kalender2"
            alt="kalender2"
          />
          <img
            id="ka3"
            class="w-fit h-fit max-w-full absolute object-cover rounded-full"
            :src="kalender3"
            alt="kalender3"
          />
        </div>
        <div class="w-full sm:w-1/2">
          <div class="w-full bg-gray-400 rounded-xl p-8 text-white">
            <div class="flex items-center mb-4">
              <p>Bulan :</p>
              <input
                class="ml-2 max-w-16 bg-inherit"
                type="number"
                v-model="bulan"
                @input="checkBulan"
              />
            </div>
            <input
              class="w-full mb-8 accent-gray-800 cursor-pointer"
              type="range"
              min="0"
              max="34"
              v-model="bulan"
              @input="checkBulan"
            />
            <div class="flex items-center mb-4">
              <p>Tanggal :</p>
              <input
                class="ml-2 max-w-16 bg-inherit"
                type="number"
                v-model="tanggal"
                @input="checkTanggal"
              />
            </div>
            <input
              class="w-full accent-gray-800 cursor-pointer"
              type="range"
              min="0"
              max="34"
              v-model="tanggal"
              @input="checkTanggal"
            />
          </div>
          <div
            class="w-full bg-gray-300 mt-4 rounded-xl text-xl font-poet px-8 py-4"
          >
            <petunjuk />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
