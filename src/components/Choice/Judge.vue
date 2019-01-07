<template>
  <div>
    <mu-list>
      <mu-list-item button @click="choose(0)">
        <mu-list-item-action>
          <mu-radio :label="'T# 正确'" :value="0" v-model="value"/>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item button @click="choose(1)">
        <mu-list-item-action>
          <mu-radio :label="'F# 错误'" :value="1" v-model="value"/>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>


<script>
export default {
  name: "judge-choice",
  props: ["answer"],
  data() {
    return {
      value: null
    };
  },
  created() {
    this.value = this.answer;
  },
  methods: {
    choose(i) {
      this.value = i;
      this.$emit("change", i);
    }
  }
};
</script>
