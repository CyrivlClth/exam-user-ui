<template>
  <div>
    <mu-list>
      <mu-list-item button :key="i" v-for="(v,i) in choices" @click="choose(i)">
        <mu-list-item-action>
          <mu-radio :label="Answer(i)+'# '+v" :value="i" v-model="value"/>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>


<script>
const AnswerMap = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E" };
export default {
  name: "single-choice",
  props: ["answer", "choices"],
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
    },
    Answer(i) {
      return AnswerMap[i];
    }
  }
};
</script>
