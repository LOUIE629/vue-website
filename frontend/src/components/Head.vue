<template>
  <header>
    <div class="l-content">
      <el-button @click="HandleMenu">
        <el-icon><expand /></el-icon>
      </el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span>
          <img class="avatar" :src="avatar" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click.native="goUserhome">用户中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">返回登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script  lang="ts">
import router from "@/router";
import $store from "../store/index";

export default {
  setup() {
    const avatar = require("../assets/images/avatar.png");
    
  // 调用store中mutation中的方法改变iscollapse状态，传入store
    let HandleMenu = () => $store.commit('CollapseMenu');
    let logout = () => router.push('/');
    let goUserhome = () => router.push('/userhome');
    return { avatar, HandleMenu, logout, goUserhome };
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>