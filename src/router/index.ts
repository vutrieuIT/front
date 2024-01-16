import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BaseLayout,
    props: { namePage: "Base layout" },
    children: [
      {
        path: "/",
        component: HomePage,
        children: [],
      },
      {
        path: "/register",
        component: RegisterPage,
        children: [],
      },
      {
        path: "/login",
        component: LoginPage,
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
