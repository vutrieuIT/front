<template>
  <div class="header">
    <!-- navbar -->
    <div class="navbar flex justify-content-between">
      <div class="navbar-left flex align-items-center">
        <div class="navbar-left__download">Tải ứng dụng</div>
        <div class="navbar-left__connect flex align-items-center">
          Kết nối
          <i class="pi pi-facebook"></i>
          <i class="pi pi-google"></i>
        </div>
      </div>
      <div class="navbar-right flex align-items-center justify-content-end">
        <div class="notifycation">
          <i class="pi pi-bell"></i>
          <span>Thông báo</span>
        </div>
        <div class="help">
          <i class="pi pi-question-circle"></i>
          <span>Trợ giúp</span>
        </div>
        <div class="login">
          <i class="pi pi-user"></i>
          <span>Đăng nhập</span>
        </div>
        <div class="separate"></div>
        <div class="register">
          <i class="pi pi-user-plus"></i>
          <span>Đăng ký</span>
        </div>
      </div>
    </div>

    <!-- header search -->
    <div class="header-search flex justify-content-between align-items-center">
      <div class="logo">VDT Shop</div>
      <div class="search-bar">
        <VDTSeach v-model="keyword" />
      </div>
      <div class="cart flex justify-content-center align-items-center">
        <i class="pi pi-shopping-cart"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import VDTSeach from "@/components/VDTSearch.vue";

export default defineComponent({
  name: "VDTHeader",
  components: {
    VDTSeach,
  },
  setup() {
    const keyword = ref("");
    watch(
      () => keyword.value,
      () => {
        // TODO search API
      }
    );
    return {
      keyword,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 120px;
  background-image: linear-gradient(0, #5ba8a0, #cbe5ae);
  padding: 0 20px;
  // navbar
  .navbar {
    width: 100%;
    height: 50px;
    .navbar-left {
      width: 50%;
      height: 100%;
      .navbar-left__connect {
        margin-left: 20px;
        i {
          margin-left: 10px;
        }
      }
    }
    .navbar-right {
      width: 50%;
      height: 100%;
      .separate {
        width: 1px;
        height: 1.5rem;
        background-color: #461ae4;
      }
      div {
        margin: 0 8px;
        i {
          margin-right: 5px;
        }
      }
      .login {
        margin-right: 2px;
      }
      .register {
        margin-left: 2px;
      }
    }
  }

  .header-search {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      width: 120px;
      margin-right: 10px;
      color: #461ae4;
    }
    .search-bar {
      padding: 10px;
      flex: 1;
    }
    .cart {
      width: 50px;
      height: 50px;
      margin-left: 20px;
      i {
        font-size: 1.5rem;
        color: #461ae4;
      }
    }
  }
}
</style>
