<template>
  <div>
    <Grade :taskId="taskId"/>
  </div>
</template>

<script>
import Grade from "@/components/Grade";

export default {
  name: "exam",
  components: {
    Grade
  },
  data() {
    return {
      taskId: 0
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log(this.$route.params);
      this.taskId = this.$route.params.taskId;
    }
  },
  watch: { $router: "fetchData" }
};
</script>
