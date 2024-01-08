import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "../layouts/BaseLayout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BaseLayout,
    props: { namePage: "Base layout" },
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
