<template>
  <div class="aside">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
    >
    <!-- el-menu中设置router参数，让menu可以直接使用index.ts中的路径路由 -->
    <h3 class="menu-head">{{isCollapse ? '导航' : '网站数据监测系统'}}</h3>
      <el-menu-item index="homepage">
          <el-icon><home-filled /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
            <el-icon><warning /></el-icon>
          <span>数据展示</span>
        </template>
        <el-menu-item index="piechart">
            <el-icon><pie-chart /></el-icon>
            饼状图
        </el-menu-item>
        <el-menu-item index="linechart">
            <el-icon><trend-charts /></el-icon>
            折线图
        </el-menu-item>
        <el-menu-item index="barchart">
            <el-icon><compass /></el-icon>
            柱状图
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="userhome">
          <el-icon><user /></el-icon>
        <template #title>用户中心</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" >
import { computed } from "vue";
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();

    // element-plus自带的方法
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    
    //调用vuex store中存储的状态 ，该状态在head.vue中传入store
    let isCollapse = computed(()=>{
      return store.state.tab.isCollapse
    })

    return { isCollapse, handleOpen, handleClose };
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside{
    overflow: auto;
    height:100vh;
    display: -webkit-flex;
}
.menu-head{
    font-size: 20px;
    color: #fff;
    font-weight: 300px;
    text-align: center;
    line-height: 50px;
    height: 50px;
}
</style>