<template>
  <div class="card flex justify-content-center">
    <InputText type="text" v-model="value" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
export default defineComponent({
  name: "RegisterComponent",
  components: {
    InputText,
  },
  setup() {
    const value = ref("value");

    return {
      value,
    };
  },
});
</script>

<style scoped></style>
