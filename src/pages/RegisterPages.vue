<template>
  <div class="container flex flex-column align-items-center pt-2">
    <form class="form" action="">
      <div class="flex justify-content-between align-items-center">
        <h1 class="mb-1">Đăng ký</h1>
      </div>
      <VDTInput
        label="Email"
        v-model="email"
        :errorMessage="errorMessage.email"
      >
      </VDTInput>
      <VDTInput
        label="Số điện thoại"
        v-model="phone"
        :errorMessage="errorMessage.phone"
      />
      <VDTInput
        label="Mật khẩu"
        v-model="password"
        :errorMessage="errorMessage.password"
      ></VDTInput>
      <VDTInput
        label="Xác nhận mật khẩu"
        v-model="passwordConfirm"
        :errorMessage="errorMessage.passwordConfirm"
      ></VDTInput>
      <div class="flex align-items-center mt-2">
        <PCheckbox v-model="acceptPolicy" :binary="true" />
        <label for="ingredient4" class="ml-2">
          Đồng ý với điều khoản của Shop
        </label>
      </div>
      <div class="flex justify-content-center w-full mt-4">
        <PButton
          class="w-full"
          :disabled="!enableButton()"
          label="Submit"
          @click="onRegister()"
        />
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
import PCheckbox from "primevue/checkbox";
import PButton from "primevue/button";

import { useToast } from "primevue/usetoast";
import VDTInput from "../components/VDTInput.vue";

interface ErrorMessage {
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

// componet Đăng ký
export default defineComponent({
  name: "ResgisterPages",
  components: {
    PCheckbox,
    PButton,
    VDTInput,
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
      } else {
        errorMessage.value.phone = "";
      }

      if (!password.value || password.value === "") {
        errorMessage.value.password = "vui lòng nhập mật khẩu";
      } else {
        errorMessage.value.password = "";
      }

      if (!passwordConfirm.value || passwordConfirm.value !== password.value) {
        errorMessage.value.passwordConfirm = "mật khẩu không khớp";
      } else {
        errorMessage.value.passwordConfirm = "";
      }

      if (!acceptPolicy.value) {
        ptoast.add({
          severity: "error",
          summary: "Lỗi",
          detail: "Vui lòng đồng ý với điều khoản của Shop",
          life: 3000,
        });
      }
    };

    const onRegister = () => {
      validateRegisterForm();
    };

    const enableButton = () => {
      return (
        email.value !== "" &&
        phone.value !== "" &&
        password.value !== "" &&
        passwordConfirm.value !== "" &&
        acceptPolicy.value
      );
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
      enableButton,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #aaa;
  .form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
  }
}

.separate {
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
