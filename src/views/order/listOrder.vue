<template>
  <div>
    <div class="larg" v-if="isProcessing">Loading</div>
    <div v-if="!isProcessing" class="search">
      <table>
        <thead>
          <tr class="filters">
            <th>Owner
              <select id="assigned-user-filter" class="form-control" v-model="criteria" @change="handleCriteria">
                <option :value="'self'">MYSELF</option>
                <option :value="'all'">ALL</option>
              </select>
            </th>
            <!-- <th>Rooms
              <select id="status-filter" class="form-control">
                <option>0</option>
                <option>1</option>
              </select>
            </th> -->
          </tr>
        </thead>
      </table>
    </div>
    <div v-if="!isProcessing" class="table" id="results">
      <div class='theader'>
        <div class='table_header'>Name</div>
        <div class='table_header'>Price</div>
        <div class='table_header'>Amount</div>
        <div class='table_header'>Created</div>
        <div class='table_header' v-if="criteria === 'all'">Owner</div>
      </div>
      <div class='table_row' v-for="{attributes, createdAt, id} in orders" :key="id">
        <div class='table_small'>
          <div class='table_cell'>Name</div>
          <div class='table_cell'>{{attributes.name}}</div>
        </div>
        <div class='table_small'>
          <div class='table_cell'>Price</div>
          <div class='table_cell'>{{attributes.price}}</div>
        </div>
        <div class='table_small'>
          <div class='table_cell'>Amount</div>
          <div class='table_cell'>{{attributes.amount}}</div>
        </div>
        <div class='table_small'>
          <div class='table_cell'>Created</div>
          <div class='table_cell'>{{createdAt | formatDate}}</div>
        </div>
        <div class='table_small' v-if="criteria === 'all'">
          <div class='table_cell'>Owner</div>
          <div class='table_cell'>{{attributes.owner.attributes.username}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'orderList',
  data() {
    return {
      criteria: 'self',
      error: null,
    }
  },
  computed: {
    ...mapGetters(['isProcessing', 'getOrders', 'getUser']),
    orders() {
      return this.getOrders
    },
  },
  methods: {
    ...mapActions(['fetchOrders']),
    handleCriteria() {
      this.fetchOrders(this.criteria)
    },
  },
  mounted() {
    this.fetchOrders(this.criteria)
  },
}
</script>
