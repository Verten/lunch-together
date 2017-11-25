<template>
<div class="wrapper">
	<div class="container">
		<h1>Welcome</h1>
		<form class="form">
			<input type="text" placeholder="Username" name="username" id="username" v-model="username">
			<input type="password" placeholder="Password" name="password" id="password" v-model="password">
			<button type="button" id="login-button" @click="login">Login</button>
      <button type="button" class="registration-button" id="registration-button" @click="registration">Registration</button>
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
      $('form').fadeOut(500)
      $('.wrapper').addClass('form-success')
      const user = {}
      user.username = this.username
      user.password = this.password
      this.fetchUser(user)
    },
    registration() {
      console.debug('redirect to registration page')
    },
  },
}
</script>
