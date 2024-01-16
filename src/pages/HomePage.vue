<template>
  <div>
    <VDTHeader />
    <VDTBanner class="mt-3" :products="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VDTHeader from "@/components/VDTHeader.vue";
import VDTBanner from "@/components/VDTBanner.vue";
import { Product } from "@/interface/VDTInterface";

export default defineComponent({
  name: "HomePage",
  components: { VDTHeader, VDTBanner },
  setup() {
    const products: Product[] = [
      {
        name: "girl xinh 1",
        image:
          "https://leplateau.edu.vn/wp-content/uploads/2023/11/anh-con-gai-cute-1.jpg",
        sale: false,
        numberSold: 0,
        price: 1000000,
        discount: 0,
        rating: 5,
      },
      {
        name: "girl xinh 2",
        sale: false,
        numberSold: 0,
        price: 10000000,
        discount: 5,
        rating: 4,
        image:
          "https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-851-1620472406599.jpeg",
      },
      {
        name: "girl xinh 3",
        sale: false,
        numberSold: 0,
        price: 50000000,
        discount: 7,
        rating: 4,
        image:
          "https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg",
      },
    ];
    return { products };
  },
});
</script>

<style lang="scss" scoped></style>
