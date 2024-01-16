<template>
  <div class="carousel flex">
    <Carousel
      class="carousel-wrappper"
      :value="products"
      :numVisible="1"
      circular
      :autoplayInterval="3000"
    >
      <template #item="product">
        <div class="flex">
          <img
            class="product-image"
            :src="product.data.image"
            :alt="product.data.name"
          />
          <div class="detail flex flex-column flex-1">
            <h3>{{ product.data.name }}</h3>
            <Rating
              v-model="product.data.rating"
              :cancel="false"
              :readonly="true"
            />
            <p>{{ product.data.numberSold }} đã bán</p>
            <p>Giảm giá: {{ product.data.discount }} %</p>
            <p :class="{ 'line-through': product.data.discount !== 0 }">
              {{ product.data.price.toLocaleString() }}<sup>đ</sup>
            </p>
            <p v-if="product.data.discount">
              {{
                priceSale(
                  product.data.price,
                  product.data.discount
                ).toLocaleString()
              }}<sup>đ</sup>
            </p>

            <div class="action flex justify-content-evenly absolute bottom-0">
              <Button icon="pi pi-search" rounded />
              <Button icon="pi pi-star-fill" rounded severity="secondary" />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
    <div class="static">Sale</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Carousel from "primevue/carousel";
import { Product } from "@/interface/VDTInterface";
import Button from "primevue/button";
import Rating from "primevue/rating";

export default defineComponent({
  name: "VDTBanner",
  components: { Carousel, Button, Rating },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      default: () => [],
    },
  },
  setup() {
    const priceSale = (price: number, discount: number) =>
      price - (price * discount) / 100;
    return {
      priceSale,
    };
  },
});
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  .carousel-wrappper {
    flex: 2;
    height: 300px;
    .product-image {
      width: 30%;
      height: 280px;
      object-fit: contain;
    }
    .detail {
      position: relative;
      margin: 0 20px;
      padding: 5px;
      height: 280px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      .action {
        height: 50px;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .static {
    flex: 1;
    height: 300px;
    background-color: #ccc;
  }
}
</style>
