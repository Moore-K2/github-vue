<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading" style="text-align: center">
      Search Github Users
    </h3>
    <div style="text-align: center">
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />
      <!-- Non-Breaking Space” 的缩写，在HTML中，在nbsp前面加“&”后面加分号“；”时表示一个“空格” -->
      &nbsp;
      <button @click="searchUsers()">Search</button>
    </div>
  </section>
</template>

<script>
// 引入axios
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 首次初始化
      this.$bus.$emit("updateData", {
        isFirst: false,
        isLoading: true,
        msgError: "",
        users: [],
      });
      console.log(this.keyWord);
      // 地址里面带？,是get请求的query参数，要用``模板字符串，且要换成${}这样才能解析为js表达式
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了", response.data.items);
          this.$bus.$emit("updateData", {
            isFirst: false,
            isLoading: false,
            msgError: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败");
          this.$bus.$emit("updateData", {
            isFirst: false,
            isLoading: false,
            msgError: error.message,
            users: response.data.items,
          });
        }
      );
    },
  },
};
</script>

<style>
</style>