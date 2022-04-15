<template>
  <div class="row">
    <!-- 呈现页面 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <!-- 记得动态绑定： -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 开始页面 -->
    <div class="first" v-show="info.isFirst" style="font-family: MyFont4">
      欢迎来到git•Hub搜索界面！
    </div>
    <!-- 加载页面 -->
    <div class="first" v-show="info.isLoading" style="font-family: MyFont4">
      加载中...主人请等待...
    </div>
    <!-- 错误页面 -->
    <div class="error" v-show="info.msgError">出错啦：{{ info.msgError }}</div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: { isFirst: true, isLoading: false, users: [], msgError: "" },
    };
  },
  methods: {},
  mounted() {
    this.$bus.$on("updateData", (dataObj) => {
      console.log("我是List组件,已收到数据：");
      // this.users = dataObj.users;
      // this.info = dataObj;
      // es6语法，后面的跟前面的求并级，以后面的最新的替换前面的
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>

<style scoped>
.first {
  color: #67c23a;
  font-size: 50px;
  text-align: center;
}
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
  border: 1px solid beige;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
/* >表示card下面的所有第一代子代元素 */
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
/* 引入自定义字体 */
@font-face {
  font-family: Myfont;
  src: url("../assets/ttf/小豆岛闹闹体.ttf");
}

@font-face {
  font-family: Myfont2;
  src: url("../assets/ttf/1122.ttf");
}

@font-face {
  font-family: Myfont3;
  src: url("../assets/ttf/创客贴金刚体.ttf");
}
@font-face {
  font-family: Myfont4;
  src: url("../assets/ttf/YuanTi.ttf");
}
</style>