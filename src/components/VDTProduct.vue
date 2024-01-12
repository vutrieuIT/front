<template>
  <div class="product">
    <img :src="product.image" alt="Product image" />
    <h1>{{ product.name }}</h1>
    <p>Quantity: {{ product.quantity }}</p>
    <p>Number Sold: {{ product.numberSold }}</p>
    <p>Rating: {{ product.rating }}</p>
    <p v-if="product.sale">On Sale!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "@/interface/VDTInterface";

export default defineComponent({
  name: "VDTProduct",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss"></style>
