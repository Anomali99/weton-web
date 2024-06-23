<script setup>
const day = [
  { hari: "Legi", jumlah: "5" },
  { hari: "Pahing", jumlah: "9" },
  { hari: "Pon", jumlah: "7" },
  { hari: "Wage", jumlah: "4" },
  { hari: "Kliwon", jumlah: "8" },
];
</script>

<template>
  <div class="w-full flex flex-col font-sans text-sm">
    <div
      class="w-full flex flex-row justify-between text-white bg-black font-bold"
    >
      <p class="border-black border-solid border-2 w-full text-center">Pasar</p>
      <p
        class="border-black border-solid border-2 border-l-0 w-full text-center"
      >
        Jumlah
      </p>
    </div>
    <div
      v-for="item of day"
      :key="item.hari"
      class="w-full flex flex-row justify-between bg-white"
    >
      <p
        class="border-black border-solid border-2 w-full border-t-0 text-center"
      >
        {{ item.hari }}
      </p>
      <p
        class="border-black border-solid border-2 border-l-0 border-t-0 w-full text-center"
      >
        {{ item.jumlah }}
      </p>
    </div>
  </div>
</template>
