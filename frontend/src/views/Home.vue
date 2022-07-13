<template>
<!-- 使用ui框架中的container组件进行head、aside、main三块式布局 -->
  <div class="layout-container" style="height: 100%">
    <el-container style="height: 100%">
      <el-aside >
        <Aside />
      </el-aside>
      <el-container>
        <el-header >
          <Head />
        </el-header>
        <el-main class="main" >
          <!-- 用router-view实现不同vue页面在el-main中显示 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Aside from "../components/Aside.vue";
import Head from "../components/Head.vue";
import Homepage from "../components/Homepage.vue";
import Userhome from "../components/Userhome.vue";
export default {
  name: "Home",
  components: { Aside, Head, Homepage, Userhome },
};
</script>

<style scoped>
.el-header {
  background-color: #333;
  position: relative;
}
.main {
  padding-top: 0;
}
.el-aside {
  height: auto;
  width: auto;
}
</style>