<template>
  <header>
  <h1>Lunch Together</h1>
  <nav>
    <ul>
      <li>
        <router-link data-title="New Order" :to="'/order'" @click.native="selectTitle('New Order')">New Order</router-link>
      </li>
      <li>
        <router-link data-title="Order List" :to="'/order/list'" @click.native="selectTitle('Order List')">Order List</router-link>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'navigatorView',
  methods: {
    ...mapMutations({
      select: 'SELECT_TITLE',
    }),
    selectTitle(title) {
      this.select(title)
    },
  },
}
</script>

