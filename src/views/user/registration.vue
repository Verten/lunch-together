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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'userRegistrationView',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
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
  beforeUpdate(){
    if(this.user !== null){
      console.debug('user success registed, ', this.user.username)
      this.$router.push({path:'/'})
    }
  },
}
</script>
