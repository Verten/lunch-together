<template>
  <section class="detail-view">
    <div v-if="isProcessing">Loading</div>
    <div v-else>
      <div class="avatar">
        <img :src="user.avatar_url" :key="user.id" :alt="user.login">
      </div>
      <div class="detail">
        <span>name: {{user.login}}</span>
        <span>company: {{user.company}}</span>
        <span>blog: {{user.blog}}</span>
        <span>create: {{user.created_at}}</span>
      </div>
      <router-link :to="'/user'">
        Back to Home
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'userDetail',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getUser', 'isProcessing']),
    user() {
      return this.getUser === null? {} : this.getUser
    },
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
  mounted() {
    this.fetchUser(this.name)
  },
}
</script>

