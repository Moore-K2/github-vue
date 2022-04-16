<template>
  <div>
    <h1>当前求和为：{{ counter }}</h1>
    <div class="count">
      <!-- 加.number会将v-model捕获的n值强制转换为数字 -->
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter += this.n;
    },
    decrement() {
      this.counter -= this.n;
    },
    incrementOdd() {
      // counter为奇数再加，这儿如果是偶数，则counter%2 == 0, 0为false。进不去循环体
      if (this.counter % 2) {
        this.counter += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.counter += this.n;
      }, 300);
    },
  },
};
</script>

<style>
/* .count {
  width: 300px;
  display: flex;
  justify-content: space-evenly;
} */
button {
  margin-left: 5px;
}
</style>