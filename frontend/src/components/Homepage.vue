<template>
  <div class="box">
    <div class="block">
      <el-carousel height="430px">
        <el-carousel-item >
          <img src="../assets/images/pic1.jpg" />
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/images/pic2.jpg" />
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/images/pic3.jpg" />
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/images/pic4.jpg" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="cards">
      <el-row :gutter="20" class="row1">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV14Y411h7KY?share_source=copy_web"
              @click="playAdd1"
            >
              <img src="../assets/images/video1.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV14Y411h7KY?share_source=copy_web"
                @click="playAdd1"
                >【LOL】腕豪高燃混剪——爆锤小提莫</a
              >
            </div>
            <div class="play-time">
              <div>
              <el-icon><video-play /></el-icon>
              <span>{{ $store.state.video1play }}</span>
              </div>
              <div>
              <el-icon><timer /></el-icon>
              <span>03:06</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1i44y1L7Hq?share_source=copy_web"
              @click="playAdd2"
            >
              <img src="../assets/images/video2.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1i44y1L7Hq?share_source=copy_web"
                @click="playAdd2"
                >【LOL】上单霸主——诺手、腕豪精彩集锦</a
              >
            </div>
            <div class="play-time">
              <div>
              <el-icon><video-play /></el-icon>
              <span>{{ $store.state.video2play }}</span>
              </div>
              <div>
              <el-icon><timer /></el-icon>
              <span>03:25</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1Fr4y1n7Tv?share_source=copy_web"
              @click="playAdd3"
            >
              <img src="../assets/images/video3.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1Fr4y1n7Tv?share_source=copy_web"
                @click="playAdd3"
                >一口气看完间谍过家家（更新中）</a
              >
            </div>
            <div class="play-time">
              <div>
              <el-icon><video-play /></el-icon>
              <span>{{ $store.state.video3play }}</span>
              </div>
              <div>
              <el-icon><timer /></el-icon>
              <span>17:47</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="row2">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1si4y1S7wb?share_source=copy_web"
              @click="playAdd4"
            >
              <img src="../assets/images/video4.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1si4y1S7wb?share_source=copy_web"
                @click="playAdd4"
                >【漫威/高燃】爆肝3个月，只为这七分钟视听盛宴！</a
              >
            </div>
            <div class="play-time">
              <div>
              <el-icon><video-play /></el-icon>
              <span>{{ $store.state.video4play }}</span>
              </div>
              <div>
              <el-icon><timer /></el-icon>
              <span>07:21</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV183411M7o1?share_source=copy_web"
              @click="playAdd5"
            >
              <img src="../assets/images/video5.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV183411M7o1?share_source=copy_web"
                @click="playAdd5"
                >围剿华尔街，对弈华盛顿，中国光伏是如何成为世界第一的？</a
              >
            </div>
            <div class="play-time">
              <div>
              <el-icon><video-play /></el-icon>
              <span>{{ $store.state.video5play }}</span>
              </div>
              <div>
              <el-icon><timer /></el-icon>
              <span>37:56</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1qL4y1V7Tg?share_source=copy_web"
              @click="playAdd6"
            >
              <img src="../assets/images/video6.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1qL4y1V7Tg?share_source=copy_web"
                @click="playAdd6"
                >鸣人这辈子最幸运的事是，当他爱上雏田时，雏田还爱着他！</a
              >
            </div>
            <div class="play-time">
              <div>
              <el-icon><video-play /></el-icon>
              <span>{{ $store.state.video6play }}</span>
              </div>
              <div>
              <el-icon><timer /></el-icon>
              <span>05:21</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script  lang="ts">
import $store from "../store/index";

export default {
  setup() { 
    // let video1play = ref(0);
    let playAdd1 = () => $store.commit("playAdd1");
    let playAdd2 = () => $store.commit("playAdd2");
    let playAdd3 = () => $store.commit("playAdd3");
    let playAdd4 = () => $store.commit("playAdd4");
    let playAdd5 = () => $store.commit("playAdd5");
    let playAdd6 = () => $store.commit("playAdd6");

    // let playAdd = computed(() =>{
    //   video1play.value++
    // });

    return { 
      playAdd1,
      playAdd2,
      playAdd3,
      playAdd4,
      playAdd5,
      playAdd6,
      };
  },
};
</script>

<style lang="less" scoped>
//视频标题
a {
  height: 40px;
  text-decoration: none;
  color: black;
  text-align: left;
}
a:hover {
  color: #75beff;
}
//视频封面
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
//视频布局
.cards {
  margin-top: 40px;
}

.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}

.el-row .el-card {
  min-width: 100%;
  height: 100%;
  margin-right: 20px;
  transition: all 0.5s;
}
//跑马灯
.block {
  margin-top: 40px;
  margin-right: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
//整体页面布局
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

//视频点击量和时长样式
.play-time {
  height: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  margin-left: 15px;
}
</style>