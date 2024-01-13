<template>
  <div class="container">
    <img :src="product.image" alt="Product image" />
    <h1 class="product-name">{{ product.name }}</h1>
    <Rating v-model="rating" :cancel="false" :readonly="true" />
    <p>{{ product.price.toLocaleString() }}<sup>₫</sup></p>
    <p class="discount" v-if="product.discount">{{ product.discount }}%</p>
    <p v-if="product.sale">On Sale!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Product } from "@/interface/VDTInterface";
import Rating from "primevue/rating";
export default defineComponent({
  name: "VDTProduct",
  components: {
    Rating,
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    const rating = ref(props.product.rating);
    return {
      rating,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  border: 1px solid black;
  border-radius: 2px;
  width: 100%;
  max-width: 300px;
  position: relative;
  img {
    width: 100%;
  }
  .product-name {
    font-size: 1rem;
    line-height: 1rem;
    height: 2rem;
    // giới hạn 2 dòng
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-width: 300px;
  }

  .discount {
    position: absolute;
    top: calc(-0.75rem);
    right: calc(0.25rem);
    color: rgb(255, 255, 255);
    background-color: orange;
    display: inline-flex;
    justify-content: center;
    width: 50px;
    font-size: 1rem;
    line-height: 1rem;
    height: 1rem;
  }
}
</style>
