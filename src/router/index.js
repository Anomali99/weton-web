import { createMemoryHistory, createRouter } from "vue-router";

import LandingPage from "../components/pages/LandingPage.vue";
import MainPage from "../components/pages/MainPage.vue";

const routes = [
  { path: "/", component: LandingPage, name: "landing" },
  {
    path: "/dashboard",
    component: MainPage,
    name: "dashboard",
    meta: { page: "dashboard" },
  },
  {
    path: "/sio",
    component: MainPage,
    name: "sio",
    meta: { page: "sio" },
  },
  {
    path: "/kalender",
    component: MainPage,
    name: "kalender",
    meta: { page: "kalender" },
  },
  {
    path: "/jodoh",
    component: MainPage,
    name: "jodoh",
    meta: { page: "jodoh" },
  },
  {
    path: "/kodam",
    component: MainPage,
    name: "kodam",
    meta: { page: "kodam" },
  },
  {
    path: "/tabel",
    component: MainPage,
    name: "tabel",
    meta: { page: "tabel" },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
