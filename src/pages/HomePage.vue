<template>
  <div>
    <VDTHeader />
    <h1>Home Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VDTHeader from "@/components/VDTHeader.vue";

export default defineComponent({
  name: "HomePage",
  components: { VDTHeader },
  setup() {
    return {};
  },
});
</script>
