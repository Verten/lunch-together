<template>
  <section class="user">
    <div class="login">
        <div>
          <label for="username">User Name:</label>
          <input type="text" placeholder="input your username" name="username" id="username" v-model="username"/>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="input your password" v-model="password"/>
        </div>
        <div>
          <button @click="login">Login</button> 
          Or 
          <router-link :to="'/registration'" class="link">
            Regist
          </router-link>
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'userLoginView',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['fetchUser']),
    login() {
      const user = {}
      user.username = this.username
      user.password = this.password
      this.fetchUser(user)
    },
  },
}
</script>
