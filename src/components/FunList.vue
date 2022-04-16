<template>
  <div class="fun-container">
    <div class="demo">
      <h3>美食xxx</h3>
      <ul>
        <li>红烧鲈鱼xxx</li>
        <li>鱼香肉丝xxx</li>
        <li>麻辣烧烤xxx</li>
      </ul>
    </div>
    <div class="demo">
      <h3>电影xxx</h3>
      <ul>
        <li>欢乐喜剧人xxx</li>
        <li>成家班xxx</li>
        <li>末日来临xxx</li>
      </ul>
    </div>
    <div class="demo">
      <h3>运动xxx</h3>
      <ul>
        <li>打篮球xxx</li>
        <li>踢足球xxx</li>
        <li>玩桌游xxx</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunList",
};
</script>

<style>
.fun-container{
    display: flex;
    /* justify-content: space-around; */
     justify-content: space-evenly;
}
.demo{
    background-color:antiquewhite;
    width: 200px;
    height: 300px;
}
.demo h3{
    width: 100%;
    background-color: aqua;
    text-align: center;
}
</style>
