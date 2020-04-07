<template>
  <div id="app">
    <h2>{{$store.state.name}}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#app h2 {
  margin: 10px 0;
}
.left {
  display: block;
  float: left;
}
.right {
  display: block;
  float: right;
}
.clearfix:after {
  content: " "; /* 旧浏览器不支持空内容 */
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
</style>
