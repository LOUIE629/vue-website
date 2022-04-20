<template>
  <div class="container" :class="{ 'sign-up-mode': signUpMode }">
    <div class="forms-container">
      <div class="signin-signup">
        <!--登录-->
        <LoginForm :loginUser="loginUser" :loginRules="loginRules" />

        <!--注册-->
        <RegisterForm :registerUser="registerUser" :registerRules="registerRules" />

      </div>
    </div>
    <!--左右切换动画-->
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>欢迎!</h3>
          <button @click="signUpMode = !signUpMode" class="btn transparent">
            注册
          </button>
        </div>
        <img src="../assets/hong.jpg" class="image" alt="" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h3>欢迎!</h3>
          <button @click="signUpMode = !signUpMode" class="btn transparent">
            登录
          </button>
        </div>
        <img src="../assets/huang.jpg" class="image" alt="" />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { loginUser, loginRules } from "../utils/loginValidators";
import { registerUser, registerRules } from "../utils/RegisterValidators";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
export default {
  name: "LoginRegister",
  components: { LoginForm,RegisterForm },
  setup() {
    const signUpMode = ref(false);

    return { signUpMode, loginUser, loginRules, registerUser, registerRules };
  },
};
</script>


<style scoped>
@import "../assets/LoginRegisterAnime.css";
</style>

