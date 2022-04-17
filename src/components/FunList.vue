<template>
  <div>
    <div class="category">
      <h3>{{ title }}</h3>
      <!-- 定义插槽 -->
      <slot>我是插槽1。组件使用者没有传数据时，出现</slot>
      <!-- <slot>我是插槽2。组件使用者没有传数据时，出现</slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FunList",
  props: ["title"],
};
</script>

<style scoped>
.category {
  /* 开启bfc.防止上下margin重叠; */
  overflow: hidden;
  background-color: antiquewhite;
  width: 200px;
  height: 300px;
}
h3 {
  margin-top: 20px;
  width: 100%;
  background-color: aqua;
  text-align: center;
}
</style>
