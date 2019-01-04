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
      </mu-paper>
    </mu-card>
  </div>
</template>

<script>
import { GetTask } from "@/api/tasks";

export default {
  props: ["taskId"],
  data() {
    return {
      item: null,
      notifications: false,
      value: []
    };
  },
  created() {
    this.getTask(this.taskId);
  },
  methods: {
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

