<template>
  <v-layout row justify-center>
    <v-btn @click="next()" color="primary" block round large>{{btnText}}</v-btn>
  </v-layout>
</template>

<script>
import { GetStart } from "@/api/start";

export default {
  name: "home",
  data() {
    return {
      dialog: false,
      item: {
        has_exam: false
      },
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  computed: {
    btnText() {
      return this.item.has_exam ? "继续" : "开始";
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      GetStart()
        .then(res => {
          console.log(res.data);
          this.item = res.data;
        })
        .catch(() => {
          console.log(111111);
        });
    },
    next() {
      if (this.item.has_exam) {
        this.$router.push("/start/1");
      }
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
