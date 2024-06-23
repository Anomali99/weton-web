<script setup>
import pokemons from "../../assets/data";
import { ref } from "vue";

const pokemon = ref(null);
const username = ref(null);
const user = ref("");

const cekKodam = () => {
  pokemon.value = pokemons[Math.floor(Math.random() * pokemons.length)];
  username.value = user.value;
};
</script>

<template>
  <div
    class="w-full h-max sm:h-[95vh] border-solid border-slate-800 border-2 rounded-xl p-4"
  >
    <div class="w-full h-full flex gap-x-4 max-sm:flex-col max-sm:gap-y-4">
      <div class="w-full max-w-1/2 flex flex-col gap-y-4">
        <div
          class="h-max sm:h-full bg-slate-800 shadow-amber-900 rounded-xl flex justify-center items-center max-sm:p-4 sm:py-16"
        >
          <form
            class="w-full sm:w-1/2 flex flex-col"
            @submit.prevent="cekKodam"
          >
            <label class="font-poet text-xl sm:text-3xl text-white" for="name"
              >Nama</label
            >
            <input
              class="my-1 sm:my-4 rounded-md sm:rounded-xl text-center p-1 text-sm sm:p-2 sm:text-xl border-slate-500 border-2 border-solid"
              type="text"
              name="mane"
              id="mane"
              v-model="user"
            />
            <button
              class="w-1/2 bg-slate-500 sm:p-2 rounded-md text-sm font-poet text-white mx-auto hover:bg-slate-700 border-solid border-slate-500 border-2"
            >
              cek
            </button>
          </form>
        </div>
        <h1
          v-if="username != null"
          class="w-full h-1/2 bg-slate-700 rounded-xl p-4 text-center font-poet text-white text-2xl sm:text-6xl content-center"
        >
          {{ username }} <span class="font-sans max-sm:hidden">>></span>
        </h1>
      </div>
      <div class="sm:w-1/3" v-if="pokemon != null">
        <h1
          class="w-full bg-slate-700 rounded-xl h-max p-4 mb-4 text-center font-poet text-white text-6xl"
        >
          kodam
        </h1>
        <div class="w-full bg-slate-500 rounded-xl h-max p-4">
          <img class="w-full" :src="pokemon.image_url" alt="image" />
          <h4 class="font-poet text-white text-3xl">{{ pokemon.name }}</h4>
        </div>
        <p class="w-full bg-slate-100 rounded-xl h-max p-4 mt-4">
          {{ pokemon.description }}
        </p>
      </div>
    </div>
  </div>
</template>
