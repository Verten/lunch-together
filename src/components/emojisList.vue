<template>
  <section class="list-view">
      <h3>this is emojis list view</h3>
      <div v-if="isProcessing">Loading...</div>
      <div v-else>
        <img v-for="emoji in emojis" :key="emoji" :src="emoji" :alt="emoji" />
      </div>
      <router-link :to="'/'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "emojisView",
  data() {
    return {
      title: "go to Home"
    };
  },
  computed: {
    ...mapGetters(["getEmojis", "isProcessing"]),
    emojis() {
      return this.getEmojis;
    },
    processing() {
      return this.isProcessing;
    }
  },
  methods: {
    ...mapActions({
      fetchEmojis: "fetchEmojis"
    })
  },
  created() {
    console.info(this.$route);
    console.info(this.$store);
  },
  mounted() {
    this.fetchEmojis();
  }
};
</script>
