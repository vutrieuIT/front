<template>
  <router-view />
  <PToast />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PToast from "primevue/toast";

export default defineComponent({
  name: "BaseLayout",
  components: { PToast },
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
