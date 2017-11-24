<template>
  <section>
  <div>
      hello world!
    </div>
    <router-link :to="'/user'">User List</router-link>
    <router-link :to="'/emoji'">Emoji List</router-link>
  </section>
</template>

<script>
export default {
  name: 'helloWorld',
}
</script>
