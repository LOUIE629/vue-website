<template>
  <div class="title">注册用户所在地展示</div>
  <div id="china-map"></div>
</template>

<script>
import "./china.js";

var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/chart/pie");
require("echarts/lib/component/markLine");
require("echarts/lib/component/geo");
require("echarts/lib/chart/scatter");
require("echarts/lib/chart/map");
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawCharts();
  },
  methods: {
    drawCharts() {
      // 基于准备好的dom，初始化echarts实例
      var chinaMap = echarts.init(document.getElementById("china-map"));
      window.onresize = chinaMap.resize; // 窗口或框架被调整大小时执行chinaMap.resize
      chinaMap.setOption({
        // 进行相关配置
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "#FF9B52", "#FFD068"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: false,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#293171",
              borderWidth: "2",
              areaColor: "#0A0F33",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: "注册用户", // 浮动框的标题
            type: "map",
            geoIndex: 0,
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
                value: 100,
              },
              {
                name: "四川",
                value: 13,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  font-family: Arial,"Microsoft YaHei";
  font-weight: bolder;
}
#china-map {
  height: 100%;
  margin-top: -50px;
}

</style>
