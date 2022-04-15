<template>
  <div class="container">
    <List />
    <Search />
  </div>
</template>

<script>
import Search from "./components/List.vue";
import List from "./components/Search.vue";

export default {
  name: "App",
  components: { Search, List },
};
</script>

<style>
</style>