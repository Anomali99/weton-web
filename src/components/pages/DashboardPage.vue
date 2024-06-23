<script setup>
const navigation = [
  {
    name: "Sio",
    href: "sio",
    ket: "Fitur untuk mencari sio berdasarkan tanggal lahir. fitur ini fitur sungguhan.",
    icon: "M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z",
  },
  {
    name: "Kalender",
    href: "kalender",
    ket: "Fitur untuk mencari hari dan pasar tanggal lahir dengan kalender sepanjang masa. fitur ini fitur sungguhan.",
    icon: "M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z",
  },
  {
    name: "Jodoh",
    href: "jodoh",
    ket: "Fitur untuk mengecek kecocokan pasangan berdasarkan tanggal lahir. fitur ini fitur sungguhan.",
    icon: "M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z",
  },
  {
    name: "Cek Kodam",
    href: "kodam",
    ket: "Fitur untuk mengecek kodam. fitur ini hanya mainan belaka.",
    icon: "M680-360q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM480-160v-56q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v56H480Zm-80-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-160ZM80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q35 0 70 6t70 14l-34 34-34 34q-18-5-36-6.5t-36-1.5q-58 0-113.5 14T180-306q-10 5-15 14t-5 20v32h240v80H80Zm320-80Zm0-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Z",
  },
  {
    name: "Tabel",
    href: "tabel",
    ket: "Berisi tabel-tabel peritungan jawa.",
    icon: "M360-120q-33 0-56.5-23.5T280-200v-400q0-33 23.5-56.5T360-680h400q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H360Zm0-400h400v-80H360v80Zm160 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM360-360h80v-80h-80v80Zm320 0h80v-80h-80v80ZM360-200h80v-80h-80v80Zm320 0h80v-80h-80v80Zm-480-80q-33 0-56.5-23.5T120-360v-400q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v40h-80v-40H200v400h40v80h-40Z",
  },
];
</script>

<template>
  <div class="w-full h-full flex flex-col items-center">
    <h1 class="font-poet text-4xl sm:text-7xl text-slate-900">Dashboard</h1>
    <div
      class="max-w-full flex max-sm:flex-col sm:flex-row overflow-auto mt-8 max-sm:gap-y-4 sm:gap-x-4 overflow-x-auto custom-scrollbar"
    >
      <router-link
        v-for="item of navigation"
        :key="item.name"
        :to="item.href"
        class="w-full sm:w-80 sm:h-[30rem] bg-slate-600 hover:bg-slate-700 rounded-xl flex max-sm:flex-row sm:flex-col items-center pl-2 max-sm:py-2 sm:px-8"
      >
        <svg
          viewBox="0 -960 960 960"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          class="sm:mt-16 sm:border-b-2 border-solid border-emerald-50 material-symbols-outlined w-40 h-40 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        >
          <path :d="item.icon" />
        </svg>
        <div
          class="flex flex-col items-center max-sm:border-l-2 border-solid border-emerald-50 max-sm:w-3/4 max-sm:px-2"
        >
          <h3 class="sm:mt-8 font-poet text-4xl text-white text-center">
            {{ item.name }}
          </h3>
          <p class="text-white mt-2 sm:mt-4 text-center">{{ item.ket }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
