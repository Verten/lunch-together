<template>
<div class="wrapper">
	<div class="container">
		<h1>Welcome</h1>
		<form >
			<input type="text" placeholder="Username" name="username" id="username" v-model="user.username"/>
			<input type="password" placeholder="Password" name="password" id="password" v-model="user.password"/>
      <input type="text" placeholder="Email" name="email" id="email" v-model="user.email"/>
			<button type="button" id="login-button" @click="registration">Regist</button>
      <button type="button" id="second-button" class="second-button" @click="back">Back</button>
      <div class="error" v-if="error !== null">{{error.rawMessage}}</div>
		</form>
	</div>
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
</template>

<style src="../../components/style/login.css"></style>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'userRegistrationView',
  data() {
    return {
      user: {
        username: '',
        password: '',
        email: '',
      },
      error: null,
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    registrationUser() {
      return this.getUser
    },
  },
  methods: {
    ...mapActions(['postUser']),
    registration() {
      // for the async action, we can return a promise
      this.postUser(this.user).then(
        _user => {
          this.$router.push({ path: '/' })
        },
        error => {
          this.error = error
        }
      )
    },
    back() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>
