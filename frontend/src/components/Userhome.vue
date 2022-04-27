<template>
  <el-card class="card">
    <template #header>
      <div class="user">
        <img class="avatar" :src="avatar" />
        <div class="userinfo">
          <p class="name">用户</p>
          <p class="account">账户：louie</p>
        </div>
      </div>
    </template>
    <div class="login-info">
      <p class="time">上次登录时间：<span>2022-4-24</span></p>
      <p class="location">上次登录地点：<span>西安</span></p>
    </div>
  </el-card>
</template>

<script  lang="ts">
export default {
  setup() {
    const avatar = require("../assets/images/avatar.png");
    return { avatar };
  },
};
</script>

<style lang="less" scoped>
.card{
  margin-top: 30px;
}
.user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
.userinfo {
    .name {
      font-weight: 700;
      font-size: 25px;
      text-align: center;
    }
    .account {
      font-weight: 500;
      font-size: 25px;
      text-align: center;
    }
}

</style>