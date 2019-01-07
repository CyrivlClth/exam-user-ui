<template>
  <div>
    <mu-appbar
      :z-depth="1"
      style="width:100%;position:fixed;top:0;max-width:800px;"
      title="用户登录"
      color="primary"
    >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{examname}},你好!接下来...
    </mu-appbar>
    <mu-paper :z-depth="0" style="padding:16px;margin-left:auto;margin-right:auto;margin-top:64px;">
      <mu-flex justify-content="around">
        <img src="../assets/logo.png">
      </mu-flex>
      <transition name="slide-right">
        <router-view></router-view>
      </transition>
    </mu-paper>
    <mu-bottom-nav
      :value.sync="shift"
      shift
      style="position:fixed;bottom:0;width:100%;max-width:800px;"
    >
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      examname: "AAA",
      shift: "movies"
    };
  }
};
</script>
