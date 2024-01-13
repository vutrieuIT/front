<template>
  <div class="flex flex-column align-items-center">
    <h1>Home Page</h1>
    <p>Here is the home page.</p>
    <div class="grid w-full">
      <div class="col-2">
        <!-- TODO navbar -->
      </div>
      <div class="grid col-10">
        <div class="sm:col-6 md:col-4 lg:col-3">
          <VDTProduct :product="product"></VDTProduct>
        </div>
        <div class="sm:col-6 md:col-4 lg:col-3">
          <VDTProduct :product="product"></VDTProduct>
        </div>
        <div class="sm:col-6 md:col-4 lg:col-3">
          <VDTProduct :product="product"></VDTProduct>
        </div>
        <div class="sm:col-6 md:col-4 lg:col-3">
          <VDTProduct :product="product"></VDTProduct>
        </div>
        <div class="sm:col-6 md:col-4 lg:col-3">
          <VDTProduct :product="product"></VDTProduct>
        </div>
        <div class="sm:col-6 md:col-4 lg:col-3">
          <VDTProduct :product="product"></VDTProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VDTProduct from "@/components/VDTProduct.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: {
    VDTProduct,
  },
  setup() {
    const product = {
      name: "Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2 Vui Vẻ Không Quạu Nha 2Vui Vẻ Không Quạu Nha 2",
      image:
        "https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png",
      quantity: 10,
      price: 100000000,
      discount: 10,
      numberSold: 0,
      rating: 4,
      sale: true,
    };

    return {
      product,
    };
  },
});
</script>
