<template>
  <div id="app">
    <div style="max-width:800px;margin:auto;background: white;">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  // text-align: center;
  // background: #2c3e50;
  // margin-top: 60px;
  // .container {
  //   width: 90%;
  // }
  height: 100%;
  background: white;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: white;
}
</style>
