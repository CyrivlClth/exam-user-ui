<template>
  <div>
    <mu-list>
      <mu-list-item button :key="i" v-for="(v,i) in choices" @click="choose(i)">
        <mu-list-item-action>
          <mu-checkbox :label="Answer(i)+'# '+v" :value="i" v-model="value"/>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>


<script>
const AnswerMap = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E" };
export default {
  name: "multiple-choice",
  props: {
    answer: Number,
    choices: Array
  },
  data() {
    return {
      value: []
    };
  },
  created() {
    for (var i = 0; i < 5; i++) {
      var j = 1 << i;
      if (j === (j & this.answer)) {
        this.value.push(i);
      }
    }
  },
  computed: {
    select: {
      get: function() {
        var a = 0;
        for (var i = 0; i < this.value.length; i++) {
          a = a | (1 << this.value[i]);
        }
        return a;
      },
      set: function(newVal) {
        var i = this.value.indexOf(newVal);
        if (i > -1) {
          this.value.splice(i, 1);
        } else {
          this.value.push(newVal);
        }
      }
    }
  },
  methods: {
    choose(i) {
      this.select = i;
      this.$emit("change", this.select);
    },
    Answer(i) {
      return AnswerMap[i];
    }
  }
};
</script>
