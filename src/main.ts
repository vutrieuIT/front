import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";

import "@/assets/base.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import ToastService from "primevue/toastservice";

const app = createApp(App);
app.use(store);
app.use(router);

app.use(PrimeVue);
app.use(ToastService);

app.mount("#app");
