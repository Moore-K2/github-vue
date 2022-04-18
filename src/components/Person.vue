<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color: red">
      <!-- count组件的和为：{{ $store.state.countAbout.sum }} -->
      count组件的和为：{{ sum }}
    </h2>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加性王的</button>
    <ul>
      <!-- <li
        v-for="person in $store.state.personAbout.personList"
        :key="person.id"
      > -->
      <li v-for="person in personList" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
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
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      console.log("添加王性成员");
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
  },
  computed: {
    ...mapState("countAbout", ["sum"]),
    ...mapState("personAbout", ["personList"]),
    // 展示第一个人的名字
    displayFirstName() {
      this.$store.getters["personAbout/firstPersonName"];
    },
  },

  mounted() {
    console.log("##person", this);
  },
};
</script>

<style>
</style>