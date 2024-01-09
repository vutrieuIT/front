<template>
  <router-view />
  <Toast />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toast from "primevue/toast";
export default defineComponent({
  name: "BaseLayout",
  components: {
    Toast,
  },
  props: {
    namePage: {
      type: String,
      default: undefined,
    },
  },
  setup() {
    return {};
  },
});
</script>
