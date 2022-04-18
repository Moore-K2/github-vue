<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前和的10倍为：{{ bigSum }}</h2>
    <h3>我是{{ name }}，在{{ school }}读书</h3>
    <h2 style="color: red">
      <!-- Person组件中person的人数为：{{ $store.state.personList.length }} -->
      Person组件中person的人数为：???
    </h2>
    <div class="count">
      <!-- 加.number会将v-model捕获的n值强制转换为数字 -->
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd(n)">当前和为奇数再加</button>
      <button @click="incrementWait(n)">等一等再加</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // increment() {
    //   // dispatch与actions服务员对话，这儿可以直接与motations对话
    //   // this.$store.dispatch("jia", this.n);
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   // this.$store.dispatch("jian", this.n);
    //   this.$store.commit("JIAN", this.n);
    // },

    // 数组写法，要保证名字相同且<绑定事件>的时候就传参...mapActions(["JIA","JIAN"]),
    // increment:"JIA" <==>  increment(){commit("JIA",n)}
    // ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    // 开启命名空间后，组件中调用commit
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),

    // incrementOdd() {
    //   this.$store.dispatch("jiaodd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiawait", this.n);
    // },
    // ...mapActions替代上面
    // ...mapActions({ incrementOdd: "jiaodd", incrementWait: "jiawait" }),

    //开启命名空间后，组件中调用dispatch
    ...mapActions("countAbout", {
      incrementOdd: "jiaodd",
      incrementWait: "jiawait",
    }),
  },
  // 利用计算属性去调用vuex里的值，并呈现在页面上
  computed: {
    // 1 一般形式
    // sum() {
    //   return this.$store.state.sum;
    // },
    // name() {
    //   return this.$store.state.name;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // bigSum() {
    //   return this.$store.state.sum * 10;
    // },
    // 2 形式2 用...mapState生成计算属性（对象写法）
    // ...mapState({ sum: "sum", name: "name", school: "school" }),

    // 3 数组写法 mapState相当于调了 $store.state.personList
    ...mapState("countAbout", ["sum", "name", "school"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  mounted() {
    console.log("####", this);
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