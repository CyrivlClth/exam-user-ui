<template>
  <div>
    {{item}}
    <mu-card>
      <mu-card-header :title="item.question.chapter" :sub-title="'第'+item.question.no+'题'"></mu-card-header>
      <mu-card-text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.question.text}}</mu-card-text>
      <mu-paper :z-depth="1">
        <mu-list v-model="value">
          <mu-list-item button :ripple="false">
            <mu-list-item-title>Follow up</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="info"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item
            button
            :key="'listItem'+i"
            v-for="(v,i) in item.question.choices"
            @click="updateAnswer(i)"
          >
            <mu-list-item-action>
              <mu-checkbox v-if="v.type===1" :ref="'child'+i" :label="v" v-model="value" :value="i"></mu-checkbox>
              <mu-radio v-else :ref="'child'+i" :label="v" v-model="value" :value="i"></mu-radio>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>

        <Single :answer="value" :choices="item.question.choices" @change="handleChange"/>
        <Multiple :answer="item.answer" :choices="item.question.choices" @change="handleChange"/>
        <Judge :answer="item.answer" :choices="item.question.choices" @change="handleChange"/>
      </mu-paper>
    </mu-card>
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
      item: null,
      notifications: false,
      value: [1],
      t: null
    };
  },
  watch: {
    value: function(n, o) {
      console.log(n);
    }
  },
  created() {
    this.getTask(this.taskId);
  },
  methods: {
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

