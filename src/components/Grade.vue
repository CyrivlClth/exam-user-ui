<template>
  <div>
    <p :key="i" v-for="i in 300">{{i}}</p>
    <p :key="'i'+i" v-for="(v,i) in item">{{v}}</p>
  </div>
</template>

<script>
import { GetTask } from "@/api/tasks";
import Single from "./Choice/Single";
import Multiple from "./Choice/Multiple";
import Judge from "./Choice/Judge";

export default {
  props: ["taskId"],
  components: {
    Single,
    Multiple,
    Judge
  },
  data() {
    return {
      item: [],
      notifications: false,
      value: [1],
      t: null,
      t: 0
    };
  },
  watch: {
    value: function(n, o) {
      console.log(n);
    }
  },
  // created() {
  //   this.getTask(this.taskId);
  // },
  mounted() {
    this.scroll(this.item);
  },
  methods: {
    scroll(person) {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow && this.t < 10) {
          // person.push("123123");
          person.push(["!23", "1235"]);
          this.t++;
        }
      };
    },
    handleChange(o) {
      console.log(o);
      this.value = o;
    },
    getTask(id) {
      GetTask(id).then(res => {
        this.item = res.data[0];
        var a = parseInt(this.item.answer);
        for (var i = 0; i < 5; i++) {
          var j = 1 << i;
          var d = j & a;
          if (j === d) {
            this.value.push(i);
          }
        }
      });
    },
    updateAnswer(i) {
      this.$refs["child" + i][0].toggle();
      console.log(this.value);
    }
  }
};
</script>

<style lang="less">
// .mu-card-text {
//   text-align: left;
// }
</style>

