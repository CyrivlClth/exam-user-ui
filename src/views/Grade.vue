<template>
  <div>
    <v-list v-show="!dialog" three-line>
      <div v-for="(item,i) in items" :key="item.id">
        <v-divider v-if="i!=0"></v-divider>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <h2>90</h2>
          </v-list-tile-avatar>
        </v-list-tile>
      </div>
    </v-list>
    <div v-show="dialog" class="text-xs-center">
      <v-progress-circular indeterminate :size="70" style="margin:50px" color="primary"/>
      <v-card-text>载入中...</v-card-text>
    </div>
  </div>
</template>

<script>
import { GetTest } from "@/api/test";

export default {
  data() {
    return {
      items: null,
      dialog: false
    };
  },
  created() {
    if (!this.items) this.getData();
  },
  methods: {
    getData() {
      this.dialog = true;
      GetTest()
        .then(res => {
          console.log(res.data);
          this.items = res.data.data;
          setTimeout(() => (this.dialog = false), 500);
        })
        .catch(() => {
          this.$router.push("/");
          setTimeout(() => (this.dialog = false), 500);
        });
    }
  }
};
</script>

