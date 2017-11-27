<template>
<div class="wrapper">
	<div class="container">
		<h1>Welcome</h1>
		<form class="form">
			<input type="text" placeholder="Username" name="username" id="username" v-model="user.username">
			<input type="password" placeholder="Password" name="password" id="password" v-model="user.password">
			<button type="button" id="login-button" @click="login">Login</button>
      <button type="button" class="second-button" id="registration-button" @click="registration">Registration</button>
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
/* eslint no-undef: 0 */
import { mapActions } from 'vuex'
export default {
  name: 'userLoginView',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    ...mapActions(['fetchUser']),
    login() {
      $('form').fadeOut(500)
      $('.wrapper').addClass('form-success')
      this.fetchUser(this.user).then(
        loginedUser => {
          const { redirect = '/order' } = this.$route.query
          this.$router.push({
            path: `${redirect}`,
          })
        },
        error => {
          this.error = error
          $('form').fadeIn(500)
          $('.wrapper').removeClass('form-success')
        }
      )
    },
    registration() {
      this.$router.push({ path: '/registration' })
    },
  },
}
</script>
