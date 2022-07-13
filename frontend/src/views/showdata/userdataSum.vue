<template>
  <el-scrollbar>
    <el-card class="card">
      <template #header>
        <div class="card-header">
          <span class="title">用户数据统计分析</span>
        </div>
      </template>
      <div class="box2">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-card class="box3">
              <div class="title2">网站总用户数</div>
              <div class="data">{{ User.UserNumber }}</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box3">
              <div class="title2">今日新增用户数</div>
              <div class="data">{{ User.UserNumber-7 }}</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box3">
              <div class="title2">用户来源最多省份</div>
              <div class="data">陕西省</div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box4">
              <div class="charts" ref="piechart"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box4">
              <div class="charts" ref="linechart1"></div>
            </el-card>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box4">
              <div class="charts" ref="barchart"></div>
            </el-card>
          </el-col>
        </el-row> -->
      </div>
    </el-card>
  </el-scrollbar>
</template>

<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import * as echarts from "echarts";
import { useStore } from "vuex";
import axios from "axios";

let User = reactive({
  UserNumber: "",
});
axios.get("http://localhost:3000/user/usernumber").then((response) => {
  User.UserNumber = response.data.count;
  // console.log(User.UserNumber)
});

const store = useStore();
//通过vue3.x中的refs标签用法，获取到container容器实例
const piechart = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts1 = reactive({});
//定义好echarts的配置数据
let option1 = {
  title: {
    text: "用户来源",
    x: "center",
    y: "5px",
  },
  tooltip: {
    trigger: "item",
    //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  series: [
    {
      name: "注册地",
      type: "pie",

      label: {
        normal: {
          show: true,
          formatter: "{b}",

          textStyle: {
            align: "center",
            baseline: "middle",
            fontFamily: "微软雅黑",
            fontSize: 15,
            fontWeight: "bolder",
          },
        },
      },
      data: [
        {
          name: "北京",
          value: 56,
        },
        {
          name: "上海",
          value: 25,
        },
        {
          name: "黑龙江",
          value: 34,
        },
        {
          name: "广东",
          value: 30,
        },
        {
          name: "陕西",
          value: 101,
        },
        {
          name: "四川",
          value: 13,
        },
      ],
    },
  ], //配置项
};

const barchart = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts2 = reactive({});
//定义好echarts的配置数据

let option2 = {
  title: {
    text: "各视频总播放量",
    x: "center",
    y: "5px",
  },
  tooltip: {
    show: true,
  },
  xAxis: {
    type: "category",
    data: ["video1", "video2", "video3", "video4", "video5", "video6"],
  }, //X轴
  yAxis: {
    type: "value",
  }, //Y轴
  series: [
    {
      data: [
        store.state.video1play,
        store.state.video2play,
        store.state.video3play,
        store.state.video4play,
        store.state.video5play,
        store.state.video6play,
      ],
      type: "bar",
      barWidth: "50%",
      grid: {
        x: 100,
      },
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            textStyle: {
              //数值样式
              fontFamily: "微软雅黑",
              fontSize: 15,
              fontWeight: "bolder",
            },
          },
        },
      },
    },
  ], //配置项
};
var time = new Date();
var month = time.getMonth() + 1;
var date = time.getDate();
const linechart1 = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts3 = reactive({});
//定义好echarts的配置数据
let option3 = {
  title: {
    text: "用户注册量变化",
    x: "center",
    y: "5px",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [month+'.'+(date-5),month+'.'+(date-4), month+'.'+(date-3), month+'.'+(date-2),month+'.'+(date-1), month+'.'+date],
  }, //X轴
  yAxis: {
    type: "value",
  }, //Y轴
  series: [
    {
      data: [11, 15, 26, 30, 45, 50],
      type: "line",
    },
  ], //配置项
};
//初始化echarts实例方法
const init = () => {
  //初始化container容器
  myEcharts1 = echarts.init(piechart.value);
  //传入数据
  myEcharts1.setOption(option1);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts1.resize();
  };
  // myEcharts2 = echarts.init(barchart.value);
  // //传入数据
  // myEcharts2.setOption(option2);
  // //additional：图表大小自适应窗口大小变化
  // window.onresize = () => {
  //   myEcharts2.resize();
  // };
  myEcharts3 = echarts.init(linechart1.value);
  //传入数据
  myEcharts3.setOption(option3);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts3.resize();
  };
};

//onMounted钩子函数
onMounted(() => {
  //初始化echarts
  init();
});
</script>

<style lang="less" scoped>
.card {
  margin-top: 30px;
  background-color: #f3f4fa;
}
.card-header {
  .title {
    font-weight: 700;
    font-size: 20px;
  }
}
.box2 {
}
.box3 {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12);
  background-color: white;
}
.title2 {
  font-weight: 300;
  font-size: 20px;
  margin-top: 10px;
}
.data {
  font-weight: 600;
  font-size: 30px;
  margin-top: 30px;
}
.charts {
  height: 400px;
}
.box4 {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12);
}

.el-row {
  margin-bottom: 20px;
}
</style>
