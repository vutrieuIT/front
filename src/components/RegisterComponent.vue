<template>
  <div class="flex flex-column align-items-center">
    <form
      class="form flex flex-column justify-content-center"
      action=""
      method="get"
    >
      <h2 class="header-register align-self-center">Đăng kí</h2>
      <span class="mt-4 p-float-label">
        <InputText class="w-full" id="email" v-model="email" />
        <label for="email">Email</label>
      </span>
      <span class="mt-4 p-float-label">
        <InputText class="w-full" id="phone" v-model="phoneNumber" />
        <label for="phone">Số điện thoại</label>
      </span>
      <span class="mt-4 p-float-label">
        <InputText class="w-full" id="password" v-model="password" />
        <label for="password">Mật khẩu</label>
      </span>
      <span class="mt-4 p-float-label">
        <InputText
          class="w-full"
          id="passwordComfirm"
          v-model="passwordComfirm"
        />
        <label for="passwordComfirm">Xác thực mật khẩu</label>
      </span>

      <div class="flex align-items-center mt-8">
        <Checkbox
          id="checkbox-policy"
          v-model="checked"
          :binary="true"
        ></Checkbox>
        <label for="checkbox-policy">Đồng ý với điều khoản của Shop</label>
      </div>
      <div class="mt-8">
        <Button label="Đăng ký" @click.prevent="validate()"></Button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Validator } from "@/utils/Validator";
import { defineComponent, ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import { useToast } from "primevue/usetoast";

interface ErrorMessage {
  email: string;
  phoneNumber: string;
  password: string;
  passwordComfirm: string;
}

export default defineComponent({
  name: "RegisterComponent",
  components: {
    InputText,
    Button,
    Checkbox,
  },
  setup() {
    const email = ref<string>("");
    const phoneNumber = ref<string>("");
    const password = ref<string>("");
    const passwordComfirm = ref<string>("");
    const checked = ref(false);

    const toast = useToast();

    let errorMessage = ref<ErrorMessage>({
      email: "",
      phoneNumber: "",
      password: "",
      passwordComfirm: "",
    } as ErrorMessage);

    const validate = () => {
      if (Validator.isNullOrEmpty(email.value)) {
        errorMessage.value.email = "vui lòng nhập email";
      }
      if (Validator.isNullOrEmpty(phoneNumber.value)) {
        errorMessage.value.phoneNumber = "email";
      }
      if (Validator.isNullOrEmpty(email.value)) {
        errorMessage.value.email = "email";
      }
      if (Validator.isNullOrEmpty(email.value)) {
        errorMessage.value.email = "email";
      }

      toast.add({
        severity: "error",
        summary: "error",
        detail: "mess",
        life: 3000,
      });
    };

    return {
      email,
      phoneNumber,
      password,
      passwordComfirm,
      checked,
      validate,
    };
  },
});
</script>

<style scoped>
.header-register {
  color: rgb(63, 63, 255);
}
.form {
  width: 300px;
  height: 80vh;
}
</style>
