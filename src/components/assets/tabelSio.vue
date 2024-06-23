<script setup>
const day = [
  { sio: "Kul", ind: "Keong", jumlah: "9, 13 17" },
  { sio: "Jaran", ind: "Kuda", jumlah: "10, 14, 18" },
  { sio: "Ketek", ind: "Monyet", jumlah: "7, 11, 15" },
  { sio: "Macan", ind: "Harimau", jumlah: "8, 12, 16" },
];
</script>

<template>
  <div class="w-full flex flex-col font-sans text-sm">
    <div
      class="w-full flex flex-row justify-between text-white bg-black font-bold"
    >
      <p class="border-black border-solid border-2 w-full text-center">Sio</p>
      <p
        class="border-black border-solid border-2 border-l-0 w-full text-center"
      >
        Jumlah
      </p>
    </div>
    <div
      v-for="item of day"
      :key="item.sio"
      class="w-full flex flex-row justify-between bg-white"
    >
      <p
        class="border-black border-solid border-2 w-full border-t-0 text-center"
      >
        {{ item.sio }} <span class="text-gray-500">({{ item.ind }})</span>
      </p>
      <p
        class="border-black border-solid border-2 border-l-0 border-t-0 w-full text-center"
      >
        {{ item.jumlah }}
      </p>
    </div>
  </div>
</template>
