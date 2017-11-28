<template>
  <div>
    <div v-if="isProcessing">Loading</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'orderList',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isProcessing']),
  },
  methods: {
    ...mapActions(['fetchOrders']),
  },
  mounted() {
    this.fetchOrders()
  },
}
</script>
