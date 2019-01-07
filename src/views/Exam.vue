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
              <span class="grey--text">{{question}}</span>
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

        <v-btn flat color="teal" to="/start/2">
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
import { UpdateStart } from "@/api/start";

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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.now = to.params.taskId - 1;
    });
  },
  beforeRouteUpdate(to, from, next) {
    UpdateStart({ index: this.now, answer: 2 })
      .then(res => {
        next();
      })
      .catch(() => {
        console.log("error");
        next(false);
      });
    // this.now = to.params.taskId - 1;
    // next();
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  computed: {
    question() {
      return this.$store.getters.sheetData.questions[this.now];
    }
  },
  created() {
    console.log(this.$store.getters.sheetData);
  },
  methods: {
    fetchData() {
      console.log(this.$route.params);
      this.taskId = this.$route.params.taskId;
    }
  }
};
</script>
