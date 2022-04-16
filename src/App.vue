<template>
  <div class="container">
    <!-- <FunList title="美食" :funList="foods">
      <div class="img">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0827%2Fe47e83b7j00qyi8hf005md200u000m5g00u000m5.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652686524&t=8f5517d1380b0a522ea764c0d0c789a4"
          alt=""
        />
        <a href="javascript:;">更多美食</a>
      </div>
    </FunList>

    <FunList title="电影" :funList="movies">
      <video controls src="./assets/video/test4.mp4"></video>
    </FunList>

    <FunList title="运动" :funList="sports">
      <ul>
        <li v-for="(item, index) in sports" :key="index">
          {{ item }}
        </li>
      </ul>
    </FunList> -->
    <count></count>
  </div>
</template>

<script>
import FunList from "./components/FunList.vue";
import Count from "./components/Count.vue";

export default {
  name: "App",
  components: { FunList, Count },
  data() {
    return {
      foods: ["红烧鲈鱼", "鱼香肉丝", "麻辣烧烤"],
      movies: ["欢乐喜剧人", "成家班", "末日来临"],
      sports: ["打篮球", "踢足球", "玩桌游"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-evenly;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>