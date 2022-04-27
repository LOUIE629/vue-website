<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        
      </div>
    </template>

    <div id="container" ref="chart"></div>
  </el-card>
</template>
<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import * as echarts from "echarts";

//通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts = reactive({});
//定义好echarts的配置数据
let option = {
  series: [
    {
      type: "pie",
      data: [
        {
          value: 335,
          name: "直接访问",
        },
        {
          value: 234,
          name: "联盟广告",
        },
        {
          value: 1548,
          name: "搜索引擎",
        },
      ],
    },
  ], //配置项
};

//onMounted钩子函数
onMounted(() => {
  //初始化echarts
  init();
});

//初始化echarts实例方法
const init = () => {
  //初始化container容器
  myEcharts = echarts.init(chart.value);
  //传入数据
  myEcharts.setOption(option);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts.resize();
  };
};
</script>
<style scoped>
#container {

  height: 300px;


}
</style>
