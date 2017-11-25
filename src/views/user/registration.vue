<template>
<div class="wrapper">
	<div class="container">
		<h1>Welcome</h1>
		<form class="form">
			<input type="text" placeholder="Username" name="username" id="username" v-model="user.username"/>
			<input type="password" placeholder="Password" name="password" id="password" v-model="user.password"/>
      <input type="text" placeholder="Email" name="email" id="email" v-model="user.email"/>
			<button type="button" id="login-button" @click="registration">Regist</button>
      <button type="button" id="second-button" class="second-button" @click="back">Back</button>
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
      this.postUser(this.user)
    },
    back() {
      this.$router.push({ path: '/' })
    },
  },
  beforeUpdate() {
    if (this.registrationUser !== null) {
      console.debug('user success registed, ', this.user.username)
      this.$router.push({ path: '/' })
    }
  },
}
</script>
