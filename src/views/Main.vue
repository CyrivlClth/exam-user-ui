<template>
  <v-app id="inspire" :dark="dark">
    <v-navigation-drawer app v-model="drawer" color="
    cyan">
      <v-btn @click="dark=!dark">aaa</v-btn>
    </v-navigation-drawer>
    <v-toolbar app absolute color="primary" dark>
      <v-toolbar-title>{{titleText}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container app>
        <v-scale-transition hide-on-leave>
          <router-view></router-view>
        </v-scale-transition>
      </v-container>
    </v-content>
    <v-footer>
      <v-bottom-nav fixed :value="true" :active.sync="bottomNav">
        <v-btn flat value="start" to="/" color="primary">
          <span>开始</span>
          <v-icon>beenhere</v-icon>
        </v-btn>
        <v-btn flat value="histroy" to="/history" color="primary">
          <span>历史</span>
          <v-icon>history</v-icon>
        </v-btn>
        <v-btn flat value="account" to="/account" color="primary">
          <span>用户</span>
          <v-icon>account_circle</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-footer>
  </v-app>
</template>


<script>
const titleMap = { start: "开始", histroy: "历史", account: "用户" };

export default {
  name: "home",
  computed: {
    titleText() {
      return titleMap[this.bottomNav];
    }
  },
  data() {
    return {
      examname: "AAA",
      shift: "movies",
      drawer: false,
      dark: false,
      bottomNav: ""
    };
  }
};
</script>

<style lang="less">
#inspire {
  margin: auto;
  max-width: 600px;
  // .v-toolbar {
  //   position: fixed;
  //   margin-bottom: 64px;
  //   left: auto;
  //   max-width: 600px;
  // }
  // .v-bottom-nav {
  // position: fixed;
  //   margin-top: 64px;
  //   margin: auto;
  // bottom: 0;
  //   left: auto;
  //   max-width: 600px;
  // }
}
// .v-toolbar {
//   margin: auto;
//   top: 0;
//   position: absolute;
//   max-width: 400px;
// }
</style>

