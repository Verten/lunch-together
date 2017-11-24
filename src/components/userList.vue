<template>
  <section class="list-view">
      <h3>this is user list view</h3>
      <div v-if="processing">Loading...</div>
      <div v-else>
          <ul>
              <li v-for="user in users" :key="user.id" >
                <div class="avatar">
                  <img :src="user.avatar_url" :key="user.id" :alt="user.login">
                </div>
                <div class="name">
                  <router-link :to="'/user/' + user.login" class="item-title">
                    {{user.login}}
                  </router-link>
                </div>
              </li>
          </ul>
      </div>
      <router-link :to="'/'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// Don’t use arrow functions on an options property or callback
export default {
  name: 'userView',
  data() {
    return {
      title: 'to go Home',
    }
  },
  computed: {
    ...mapGetters(['getUsers', 'isProcessing']),
    users() {
      return this.getUsers
    },
    processing() {
      return this.isProcessing
    },
  },
  methods: {
    ...mapActions({
      fetchUsers: 'fetchUsers',
    }),
  },
  created() {
    console.info(this.$route)
    console.info(this.$store)
  },
  mounted() {
    this.fetchUsers()
  },
}
</script>
