<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color: red">count组价的和为：{{ $store.state.sum }}</h2>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in $store.state.personList" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      console.log("添加成员");
      const personObj = { id: nanoid(), name: this.name };
      //   因为devtools与mutations交户，所以最好不要跳过actions=>mutations直接去改变state的值
      //   this.$store.state.personList.unshift(personObj);
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>