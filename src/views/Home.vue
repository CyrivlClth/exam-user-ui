<template>
  <mu-row gutter justify-content="center" class="button-wrapper">
    <mu-button round large color="indigo400">full width button</mu-button>
    <mu-button flat round large color="indigo400">full width button</mu-button>
  </mu-row>
</template>

<script>
export default {
  name: "home"
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
