<script setup>
import sidebar from "../assets/sidebar.vue";
import DashboardPage from "./DashboardPage.vue";
import SioPage from "./SioPage.vue";
import KalenderPage from "./KalenderPage.vue";
import JodohPage from "./JodohPage.vue";
import CekKodamPage from "./CekKodamPage.vue";
import TabelPage from "./TabelPage.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <sidebar />
  <div class="p-4 sm:ml-64 max-sm:mt-16">
    <SioPage v-if="route.meta.page == 'sio'" />
    <KalenderPage v-else-if="route.meta.page == 'kalender'" />
    <JodohPage v-else-if="route.meta.page == 'jodoh'" />
    <CekKodamPage v-else-if="route.meta.page == 'kodam'" />
    <TabelPage v-else-if="route.meta.page == 'tabel'" />
    <DashboardPage v-else />
  </div>
</template>
