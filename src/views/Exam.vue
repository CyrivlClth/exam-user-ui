<template>
  <v-app>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <!-- <v-scale-transition hide-on-leave>
          <router-view></router-view>
        </v-scale-transition>-->
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>
          <v-list-tile>
            <v-list-tile-action>
              <v-checkbox v-model="video"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="video = !video">
              <v-list-tile-sub-title>HA</v-list-tile-sub-title>
              <v-list-tile-title>Video sounds</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-card>
      </v-container>
    </v-content>
    <v-footer app>
      <v-bottom-nav :value="true" absolute color="transparent">
        <v-btn flat color="teal">
          <span>Recents</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn flat color="teal">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn flat color="teal">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-footer>
  </v-app>
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
      now: 0,
      list: null,
      video: false
    };
  },
  computed: {
    question() {
      return this.list.questions[this.now];
    }
  },
  created() {
    this.list = this.$store.getters.sheetData;
  },
  methods: {
    fetchData() {
      console.log(this.$route.params);
      this.taskId = this.$route.params.taskId;
    }
  }
};
</script>
