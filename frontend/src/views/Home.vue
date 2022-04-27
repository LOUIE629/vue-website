<template>
<!-- 使用ui框架中的container组件进行head、aside、main三块式布局 -->
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header><Head /></el-header>
        <el-main>
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

<style lang = "less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>