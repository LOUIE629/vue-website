<template>
  <div class="box">
    <div class="block">
      <el-carousel height="430px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="cards">
      <el-row :gutter="20" class="row1">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV14Y411h7KY?share_source=copy_web"
            >
              <img src="../assets/images/video1.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV14Y411h7KY?share_source=copy_web"
                >【LOL】腕豪高燃混剪——爆锤小提莫</a
              >
            </div>
            <div>
              <el-icon><video-play /></el-icon>
              <span>1</span>
              <el-icon><timer /></el-icon>
              <span>03:06</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1i44y1L7Hq?share_source=copy_web"
            >
              <img src="../assets/images/video2.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1i44y1L7Hq?share_source=copy_web"
                >【LOL】上单霸主——诺手、腕豪精彩集锦</a
              >
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1Fr4y1n7Tv?share_source=copy_web"
            >
              <img src="../assets/images/video3.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1Fr4y1n7Tv?share_source=copy_web"
                >一口气看完间谍过家家（更新中）</a
              >
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="row2">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1si4y1S7wb?share_source=copy_web"
            >
              <img src="../assets/images/video4.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1si4y1S7wb?share_source=copy_web"
                >【漫威/高燃】爆肝3个月，只为这七分钟视听盛宴！Avengers Assemble！</a
              >
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV183411M7o1?share_source=copy_web"
            >
              <img src="../assets/images/video5.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV183411M7o1?share_source=copy_web"
                >围剿华尔街，对弈华盛顿，中国光伏是如何成为世界第一的？</a
              >
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <a
              href="https://www.bilibili.com/video/BV1qL4y1V7Tg?share_source=copy_web"
            >
              <img src="../assets/images/video6.png" />
            </a>
            <div style="padding: 14px">
              <a
                href="https://www.bilibili.com/video/BV1qL4y1V7Tg?share_source=copy_web"
                >鸣人这辈子最幸运的事是，当他爱上雏田时，雏田还爱着他！</a
              >
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
  text-align: left;
}
a:hover {
  color: #75beff;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.block {
  margin-top: 40px;
  margin-right: 20px;
}
.cards {
  margin-top: 40px;
}

</style>