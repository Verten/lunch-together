<template>
  <div class="dashboard">
    <span class="bckg"></span>
    <navigator-view></navigator-view>
    <main>
      <header-view :user="user"></header-view>
      <article>
        <router-view></router-view>
      </article>
    </main>
  </div>
</template>

<style src="../../components/style/dashboard.css"></style>
<style src="../../components/style/order.css"></style>

<script>
import navigatorView from '../../components/navigator.vue'
import headerView from '../../components/header.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.getUser()
    },
  },
  methods: {
    ...mapGetters(['getUser']),
  },
  mounted() {},
  components: {
    navigatorView,
    headerView,
  },
}
</script>

