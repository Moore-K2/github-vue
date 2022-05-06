<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color: red">
      <!-- count组件的和为：{{ $store.state.countAbout.sum }} -->
      count组件的和为：{{ sum }}
    </h2>
    <h2>第一个人的名字是：{{ firstPersonName }}</h2>
    <input
      type="text"
      v-model="name"
      @keyup.enter="add"
      placeholder="点击添加新人员"
    />
    <button @click="add">添加</button>
    <button @click="addWang">添加姓王的</button>
    <button @click="addApi">添加语录男</button>

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
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      // console.log("添加成员");
      const personObj = { id: nanoid(), name: this.name };
      //   因为devtools与mutations交户，所以最好不要跳过actions=>mutations直接去改变state的值
      //   this.$store.state.personList.unshift(personObj);
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      console.log("添加王姓成员");
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
    ...mapActions("personAbout", { addApi: "addApi" }),
  },
  computed: {
    ...mapState("countAbout", ["sum"]),
    ...mapState("personAbout", ["personList"]),
    // 展示第一个人的名字
    ...mapGetters("personAbout", ["firstPersonName"]),
    // displayFirstName() {
    //   return this.$store.getters["personAbout/firstPersonName"];
    // },
  },

  mounted() {
    console.log("##person", this);
  },
};
</script>

<style>
</style>