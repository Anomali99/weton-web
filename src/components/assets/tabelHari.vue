<script setup>
const day = [
  { hari: "Senin", jumlah: "4" },
  { hari: "Selasa", jumlah: "3" },
  { hari: "Rabu", jumlah: "7" },
  { hari: "Kamis", jumlah: "8" },
  { hari: "Jum'at", jumlah: "6" },
  { hari: "Sabtu", jumlah: "9" },
  { hari: "Ahad", jumlah: "5" },
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
      :key="item.kode"
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
