<template>
  <div class="login-page flex flex-column">
    <h1>Đăng nhập</h1>
    <form @submit.prevent="login">
      <VDTInput
        label="Tài khoản"
        type="text"
        id="username"
        v-model="username"
        required
      />
      <VDTInput
        label="Mật khẩu"
        type="password"
        id="password"
        v-model="password"
        required
      />
      <a href="">Quên mật khẩu?</a>
      <PButton class="mt-6" type="submit" label="Đăng nhập"></PButton>
    </form>

    <div class="separate flex align-items-center mt-3">
      <div class="line"></div>
      <p class="ml-2 mr-2">Phương thức khác</p>
      <div class="line"></div>
    </div>

    <div class="flex align-items-center justify-content-center w-full">
      <i class="pi pi-google"></i>
      <p class="ml-1">Google</p>
    </div>

    <div class="mt-3 flex w-full justify-content-center">
      Bạn chưa có tài khoản
      <a class="ml-2" href="">Đăng ký ngay</a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import VDTInput from "@/components/VDTInput.vue";
import PButton from "primevue/button";

export default {
  components: {
    VDTInput,
    PButton,
  },
  setup() {
    const username = ref("");
    const password = ref("");

    const login = () => {
      // TODO: gọi API đăng nhập
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style scoped lang="scss">
.login-page {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.separate {
  width: 100%;
}

.line {
  width: 20px;
  height: 1px;
  background-color: #ccc;
  flex: 1;
}
</style>
