<template>
  <router-view />
  <Toast />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLayout",
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
