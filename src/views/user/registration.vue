<template>
  <section class="user">
    <div class="registration">
        <div>
          <label for="username">User Name:</label>
          <input type="text" placeholder="input your username" name="username" id="username" v-model="username"/>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="input your password" v-model="password"/>
        </div>
        <div>
          <button @click="registration">regist</button> 
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'userRegistrationView',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['postUser']),
    registration() {
      const user = {}
      user.username = this.username
      user.password = this.password
      this.postUser(user)
    },
  },
}
</script>
