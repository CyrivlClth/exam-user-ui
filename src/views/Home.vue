<template>
  <div>
    <mu-row>
      <mu-button to="/select" full-width round large color="primary">开始</mu-button>
    </mu-row>
    <mu-row>
      <mu-button full-width round large>full width button</mu-button>
    </mu-row>
  </div>
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
