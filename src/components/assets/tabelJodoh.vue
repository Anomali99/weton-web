<script setup>
const day = [
  { kc: "Sandang", jumlah: "16, 21, 26, 31, 36" },
  { kc: "Pangan", jumlah: "17, 22, 27, 32" },
  { kc: "Papan", jumlah: "18, 23, 28, 33" },
  { kc: "Sekarat", jumlah: "14, 19, 24, 29, 34" },
  { kc: "Pati", jumlah: "15, 20, 25, 30, 35" },
];
</script>

<template>
  <div class="w-full flex flex-col font-sans text-sm">
    <div
      class="w-full flex flex-row justify-between text-white bg-black font-bold"
    >
      <p class="border-black border-solid border-2 w-full text-center">Hari</p>
      <p
        class="border-black border-solid border-2 border-l-0 w-full text-center"
      >
        Jumlah
      </p>
    </div>
    <div
      v-for="item of day"
      :key="item.kc"
      class="w-full flex flex-row justify-between bg-white"
    >
      <p
        class="border-black border-solid border-2 w-full border-t-0 text-center"
      >
        {{ item.kc }}
      </p>
      <p
        class="border-black border-solid border-2 border-l-0 border-t-0 w-full text-center"
      >
        {{ item.jumlah }}
      </p>
    </div>
  </div>
</template>
