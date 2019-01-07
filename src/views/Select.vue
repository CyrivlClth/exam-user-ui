<template>
  <mu-row gutter justify-content="center">
    <mu-select label="选择任务" filterable v-model="value" full-width>
      <mu-option v-for="k in options" :key="k.id" :label="k.name" :value="k.id"></mu-option>
    </mu-select>
    <mu-button @click="next()" full-width round large color="primary">开始考试</mu-button>
  </mu-row>
</template>

<script>
import { GetTest } from "@/api/test";

export default {
  name: "home",
  data() {
    return {
      options: null,
      value: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      GetTest()
        .then(res => {
          console.log(res.data);
          this.options = res.data;
        })
        .catch(() => {
          this.$router.push("/");
        });
    },
    next() {
      this.$router.push({
        name: "tasks",
        params: { taskId: parseInt(this.value) }
      });
    }
  }
};
</script>

<style lang="less">
</style>
