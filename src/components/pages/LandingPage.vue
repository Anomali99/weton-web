<script setup>
import { abstrak_1, abstrak_2, harimau } from "../../assets/img";
</script>

<template>
  <section class="h-screen w-screen relative">
    <div class="absolute inset-0">
      <img
        class="absolute top-0 left-0 sm:w-[45vw] sm:h-1/3 h-[20vh] object-contain object-left-top"
        :src="abstrak_1"
        alt="Abstract 1"
      />
      <img
        class="absolute bottom-0 right-0 sm:w-1/3 h-1/3 sm:h-2/3 object-contain object-right-bottom"
        :src="abstrak_2"
        alt="Abstract 2"
      />
      <img
        class="absolute max-sm:bottom-10 max-sm:left-10 sm:top-12 sm:right-[15vw] sm:w-[25vw] sm:h-[25vw] w-[50vw] h-[50vw] object-contain object-right-top"
        :src="harimau"
        alt="Harimau"
      />
    </div>
    <div class="absolute h-screen w-screen">
      <div
        class="absolute top-1/4 max-sm:px-10 sm:top-60 sm:left-60 justify-center flex flex-col w-full sm:w-[35vw]"
      >
        <h1 class="font-poet text-5xl sm:text-8xl text-purple-900">Weton</h1>
        <p class="w-full font-poet sm:text-2xl mt-8 text-purple-900 text-wrap">
          Weton adalah aplikasi sederhana untuk menghitung neptu dan kecocokan
          seseorang. Aplikasi ini hanya sebuah kegabutan belaka, jadi jangan
          samapai terlalu dipercaya.
        </p>
        <div class="flex mt-6">
          <router-link
            class="text-white bg-purple-900 border-purple-900 border-solid border-2 w-1/3 flex justify-center items-center p-2 rounded-xl shadow-gray-400 hover:bg-purple-700"
            to="dashboard"
            ><span class="font-poet">start</span></router-link
          >
          <a
            class="text-purple-900 hover:text-white border-purple-900 border-solid border-2 w-1/3 flex justify-center items-center p-2 rounded-xl shadow-gray-400 hover:bg-purple-900 ml-4"
            href="https://github.com/Anomali99/weton-web"
          >
            <span class="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg> </span
            ><span class="font-poet ml-2">github</span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
