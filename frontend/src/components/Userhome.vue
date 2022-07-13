<template>
  <el-card class="card">
    <template #header>
      <div class="user">
        <img class="avatar" :src="avatar" />
        <div class="userinfo">
          <p class="name">用户:{{$store.state.CurrentUser.account}}</p>
        </div>
      </div>
    </template>
    <div class="login-info">
      <p class="time">登录时间：<span class="time">{{year+"/"+month+"/"+date}}</span></p>
      <p class="location">
        登录地点：<span class="location">{{ location.province }}{{ location.city }}</span>
      </p>
    </div>
  </el-card>
</template>

<script  lang="ts">
import axios from "axios";
import { reactive,ref } from "@vue/reactivity";

export default {
  setup() {
    const avatar = require("../assets/images/avatar.png");

    let location = reactive({
      //页面初始化数据
      province: "未知",
      city: "",
    });

    axios.get("/api").then((response: any) => {
      location.province = response.data.content.address_detail.province;
      location.city = response.data.content.address_detail.city;
    });

    var time = new Date();
    var year = time.getFullYear();
    //测试出来获得的月份比实际小一个月
	  var month = time.getMonth() + 1;
	  var date = time.getDate();
    return { avatar, location, year, month, date };
  },
};
</script>

<style lang="less" scoped>
.card {
  margin-top: 30px;
}
.user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
.userinfo {
  .name {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin-left: 40px;
  }
}
.login-info {
  .time {
    font-weight: 400;
    font-size: 20px;
    margin-top: 10px;
  }
  .location {
    font-weight: 400;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
}
</style>