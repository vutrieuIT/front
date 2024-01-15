<template>
  <div class="search-wrap flex justify-content-center align-items-center">
    <InputText class="search-box" type="text" v-model="keyword" />
    <Button
      class="button flex justify-content-center align-items-center"
      @click="search"
    >
      <i class="pi pi-search"></i>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default defineComponent({
  name: "VDTSearch",
  components: {
    InputText,
    Button,
  },
  emits: ["update:model-value"],
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const keyword = ref(props.modelValue);
    const search = () => {
      context.emit("update:model-value", keyword.value);
    };

    return {
      keyword,
      search,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-wrap {
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 4px 10px;
  border-radius: 2px;
  .search-box {
    flex: 1;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    border: none;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }
  }
  .button {
    height: 30px;
    min-width: 50px;
    margin-left: 10px;
  }
}
</style>
