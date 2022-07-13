<template>
  <el-scrollbar>
    <el-card class="card">
      <template #header>
        <div class="card-header">
          <span class="title">视频数据统计分析</span>
        </div>
      </template>
      <div class="box2">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-card class="box3">
              <div class="title2">网站总播放量</div>
              <div class="data">{{videosum}}</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box3">
              <div class="title2">今日新增播放量</div>
              <div class="data">{{videosum-30}}</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box3">
              <div class="title2">网站视频数量</div>
              <div class="data">6</div>
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
              <div class="charts" ref="barchart"></div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box4">
              <div class="charts" ref="linechart1"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box4">
              <div class="charts" ref="linechart2"></div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </el-scrollbar>
</template>

<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import * as echarts from "echarts";
import { useStore } from "vuex";



const store = useStore();
//通过vue3.x中的refs标签用法，获取到container容器实例
const videosum = store.state.video1play + store.state.video2play + store.state.video3play + store.state.video4play + store.state.video5play + store.state.video6play;
const piechart = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts1 = reactive({});
//定义好echarts的配置数据
let option1 = {
  title: {
    text: "各视频总播放量占比",
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
      name: "各视频播放量占比",
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
          value: store.state.video1play,
          name: "video1",
        },
        {
          value: store.state.video2play,
          name: "video2",
        },
        {
          value: store.state.video3play,
          name: "video3",
        },
        {
          value: store.state.video4play,
          name: "video4",
        },
        {
          value: store.state.video5play,
          name: "video5",
        },
        {
          value: store.state.video6play,
          name: "video6",
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
const linechart1 = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts3 = reactive({});
//定义好echarts的配置数据
var time = new Date();
var month = time.getMonth() + 1;
var date = time.getDate();
let option3 = {
  tooltip:{

  },
  title: {
    text: '视频总播放量变化',
    x:'center',
    y:'5px',
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
      data: [
        14,
        16,
        17,
        20,
        24,
        videosum,
      ],
      type: "line",
    },
  ], //配置项
};
const linechart2 = ref(null);
//定义在本vue实例中的echarts实例
let myEcharts4 = reactive({});
//定义好echarts的配置数据
let option4 = {
  tooltip:{
  },
  title: {
    text: '视频每日新增总播放量变化',
    x:'center',
    y:'5px',
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
      data: [
        4,
        2,
        1,
        3,
        4,
        videosum-22,
      ],
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
  myEcharts2 = echarts.init(barchart.value);
  //传入数据
  myEcharts2.setOption(option2);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts2.resize();
  };
  myEcharts3 = echarts.init(linechart1.value);
  //传入数据
  myEcharts3.setOption(option3);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts3.resize();
  };
  myEcharts4 = echarts.init(linechart2.value);
  //传入数据
  myEcharts4.setOption(option4);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts4.resize();
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
