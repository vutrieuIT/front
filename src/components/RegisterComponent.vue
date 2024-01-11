<template>
  <div class="container flex flex-column align-items-center pt-2">
    <form class="form" action="">
      <div class="flex justify-content-between align-items-center">
        <h1 class="mb-1">Đăng ký</h1>
      </div>
      <div class="flex align-items-center gap-2">
        <span class="p-float-label mt-4 w-full">
          <PInputText
            class="w-full"
            :class="{ 'p-invalid': errorMessage.email }"
            id="email"
            v-model="email"
          />
          <label for="email">email</label>
        </span>
        <small id="text-error" class="p-error">{{
          errorMessage.email || "&nbsp;"
        }}</small>
      </div>
      <span class="p-float-label mt-4 w-full">
        <PInputText class="w-full" id="phone" v-model="phone" />
        <label for="phone">Số điện thoại</label>
      </span>
      <span class="p-float-label mt-4 w-full">
        <PInputText class="w-full" id="password" v-model="password" />
        <label for="password">Mật khẩu</label>
      </span>
      <span class="p-float-label mt-4 w-full">
        <PInputText
          class="w-full"
          id="passwordConfirm"
          v-model="passwordConfirm"
        />
        <label for="passwordConfirm">Xác nhận mật khẩu</label>
      </span>
      <div class="flex align-items-center mt-2">
        <PCheckbox v-model="acceptPolicy" :binary="true" />
        <label for="ingredient4" class="ml-2">
          Đồng ý với điều khoản của Shop
        </label>
      </div>
      <div class="card flex justify-content-center w-full mt-4">
        <PButton class="w-full" label="Submit" @click="onRegister()" />
      </div>
    </form>

    <div class="separate flex align-items-center mt-3">
      <div class="line"></div>
      <p class="ml-2 mr-2">Phương thức khác</p>
      <div class="line"></div>
    </div>

    <div class="flex align-items-center">
      <i class="pi pi-google"></i>
      <p class="ml-1">Google</p>
    </div>

    <div class="mt-3">
      Bạn đã có tài khoản
      <a href="">Đăng nhập ngay</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PInputText from "primevue/inputtext";
import PCheckbox from "primevue/checkbox";
import PButton from "primevue/button";

import { useToast } from "primevue/usetoast";

interface ErrorMessage {
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

// componet Đăng ký
export default defineComponent({
  name: "RegisterComponent",
  components: {
    PInputText,
    PCheckbox,
    PButton,
  },
  setup() {
    const ptoast = useToast();
    const email = ref<string>("");
    const phone = ref("");
    const password = ref("");
    const passwordConfirm = ref("");
    const acceptPolicy = ref<boolean>(false);
    const errorMessage = ref<ErrorMessage>({
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    });

    const validateRegisterForm = () => {
      if (!email.value || email.value === "") {
        errorMessage.value.email = "vui lòng nhập email";
      } else {
        errorMessage.value.email = "";
      }

      if (!phone.value || phone.value === "") {
        errorMessage.value.phone = "vui lòng nhập số điện thoại";
      }

      if (!password.value || password.value === "") {
        errorMessage.value.password = "vui lòng nhập mật khẩu";
      }

      if (!passwordConfirm.value || passwordConfirm.value !== password.value) {
        errorMessage.value.passwordConfirm = "mật khẩu không khớp";
      }
    };

    const onRegister = () => {
      validateRegisterForm();
      ptoast.add({
        severity: "info",
        summary: "Thông báo",
        detail: errorMessage.value.email,
        life: 3000,
      });
    };

    return {
      email,
      phone,
      password,
      passwordConfirm,
      errorMessage,
      acceptPolicy,
      validateRegisterForm,
      onRegister,
    };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #aaa;
}

.separate {
  width: 100%;
  max-width: 300px;
}
.form {
  width: 100%;
  max-width: 300px;
}

.line {
  width: 20px;
  height: 1px;
  background-color: #ccc;
  flex: 1;
}
</style>
