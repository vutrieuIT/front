import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import BaseLayout from "@/layouts/BaseLayout.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
const routes: Array<RouteRecordRaw> = [
  //   {
  //     path: "/",
  //     component: BaseLayout,
  //     props: { namePage: "Base layout" },
  //     children: [],
  //   },
  {
    path: "/",
    component: RegisterComponent,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
