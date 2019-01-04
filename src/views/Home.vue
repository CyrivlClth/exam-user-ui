<template>
  <mu-row gutter justify-content="center" class="button-wrapper">
    <mu-button to="/select" round large color="indigo400">full width button</mu-button>
    <mu-button flat round large color="indigo400">full width button</mu-button>
  </mu-row>
</template>

<script>
import { GetTest } from "@/api/test";

export default {
  name: "home",
  methods: {
    getData() {
      GetTest()
        .then(res => {
          console.log(res.data);
        })
        .catch(() => {
          console.log(111111);
        });
    }
  }
};
</script>

<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button {
    margin: 8px;
    width: 90%;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
