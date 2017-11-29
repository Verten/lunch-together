<template>
  <div class="title">
    <h2>{{title}}</h2>
    <a href="javascript:void(0)" @click="logout">Hello {{user.username}} !</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AV from '../leancloud/storage'

export default {
  name: 'headerView',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getTitle']),
    title() {
      return this.getTitle
    },
  },
  methods: {
    logout() {
      AV.User.logOut()
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

