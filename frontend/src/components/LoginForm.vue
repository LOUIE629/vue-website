<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="loginRules"
    label-width="120px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="账号" prop="account">
      <el-input v-model="loginUser.account" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        autocomplete="off"
        type="password"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleLogin('loginForm')"
      >
        登录
      </el-button>
    </el-form-item>
    <!--找回密码，无-->
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    loginRules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    //@ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    //触发登录
    const handleLogin = (formName: string) => {
      // ctx.$refs[formName].validate((valid: boolean) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!");
      //     return false;
      //   }
      // });
      axios
        .post("http://localhost:3000/user/login", {
          account: ctx.loginUser.account,
          password: ctx.loginUser.password,
        })
        .then((res: any) => {
          //注册成功
          alert("登录成功!");
          router.push("/");
        });
    };

    return { handleLogin };
  },
};
</script>

<style scoped>
@import "../assets/css/LoginForm.css";
</style>
