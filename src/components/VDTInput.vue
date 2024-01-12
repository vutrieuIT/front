<template>
  <div>
    <div class="flex align-items-center gap-2">
      <span class="p-float-label mt-4 w-full">
        <PInputText
          class="w-full"
          :class="{ 'p-invalid': errorMessage }"
          id="value"
          min="0"
          :type="type"
          v-model="input"
        />
        <label for="value">{{ label }}</label>
      </span>
    </div>
    <div class="flex justify-content-between">
      <div class="w-full">
        <small class="p-error">{{ errorMessage }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import PInputText from "primevue/inputtext";

export default defineComponent({
  name: "VDTInput",
  components: {
    PInputText,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["update:model-value"],
  setup(props, context) {
    const input = ref(props.modelValue);

    watch(
      () => input.value,
      (newValue) => {
        context.emit("update:model-value", newValue);
      }
    );

    return {
      input,
    };
  },
});
</script>

<style scoped></style>
