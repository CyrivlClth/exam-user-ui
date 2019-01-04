<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <mu-fade-transition>
      <mu-container>
        <router-view/>
      </mu-container>
    </mu-fade-transition>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.prit();
  },
  methods: {
    prit() {
      console.log(this.$route.params);
    }
  },
  watch: {
    $route: "prit"
  }
};
</script>

<style lang="less">
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  // text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
  .container {
    width: 90%;
  }
}
</style>
