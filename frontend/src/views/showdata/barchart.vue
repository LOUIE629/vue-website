<template>
  <div calss="box">
    <el-card class="card1">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <div id="container" ref="chart"></div>
    </el-card>

    <!-- <el-card class="card2">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <div id="container" ref="chart"></div>
    </el-card> -->
  </div>
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
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  }, //X轴
  yAxis: {
    type: "value",
  }, //Y轴
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      barWidth: "20%",
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
  box-sizing: border-box;
  height: 400px;
  width: 80%;
  margin: 0 auto;
}
.card1 {
    margin-top: 30px;
}
</style>
