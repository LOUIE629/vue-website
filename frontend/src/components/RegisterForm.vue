<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="120px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="账号" prop="account">
      <el-input v-model="registerUser.account" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        autocomplete="off"
        type="password"
      />
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmpassword">
      <el-input
        v-model="registerUser.confirmpassword"
        autocomplete="off"
        type="password"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleRegister('registerForm')"
      >
        注册
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    //@ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();

    //  const data={"account":"abcd","password":"123","confirmpassword":"123"};
    // const Account:string =  ctx.registerUser.account;
    // const Password = ctx.registerUser.password.toString();
    // const data = { account: Account, password: Password };
    //触发登录
    const handleRegister = (formName: string) => {
      // ctx.$refs[formName].validate((valid: boolean) => {
      //   if (valid) {
      //     axios.post("http://localhost:3000/user/register",{account:ctx.registerUser.account,password:ctx.registerUser.password}).then((res: any) => {
      //       //注册成功
      //       alert("submit!");
      //       //路由跳转
      //       router.push("/");
      //     })
      //   } else {
      //     console.log("error submit!");
      //     return false;
      //   }
      axios
        .post("http://localhost:3000/user/register", {
          account: ctx.registerUser.account,
          password: ctx.registerUser.password,
        })
        .then((res: any) => {
          //注册成功
          alert("注册成功!");
          router.push("/login");
        });
    };

    return { handleRegister };
  },
};
</script>

<style scoped>
@import "../assets/RegisterForm.css";
</style>
