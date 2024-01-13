import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";
import RegisterPages from "@/pages/RegisterPages.vue";
import LoginPages from "@/pages/LoginPages.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BaseLayout,
    props: { namePage: "Base layout" },
    children: [
      {
        path: "/",
        component: () => import("@/pages/HomePage.vue"),
        children: [],
      },
      {
        path: "/register",
        component: RegisterPages,
        children: [],
      },
      {
        path: "/login",
        component: LoginPages,
        children: [],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
