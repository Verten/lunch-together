<template>
  <div>
    <div>
      <h3 class="form-title">Order Information</h3>
      <div class="form">
        <div class="success" v-if="info !== null">{{info.rawMessage}}</div>
        <div class="error" v-if="error !== null">{{error.rawMessage}}</div>
        <label for="orderName">Order Name</label><input type="text" placeholder="Order Name" name="orderName" id="orderName" v-model="order.name">
        <label for="orderName">Order Price</label><input type="text" placeholder="Order Price" name="orderPrice" id="orderPrice" @change="handleNumber" v-model="order.price">
        <label for="orderName">Order Amount</label><input type="text" placeholder="Order Amount" name="orderAmount" id="orderAmount" @change="handleNumber" v-model="order.amount">
        <button type="button" class="second-button" @click="postOrder">Submit</button>
      </div>
    </div>
    <div>
      <h3 class="order-image-title" @click="toggleImage">Monthly Menu <span class="entypo-down-open"></span></h3>
      <div class="order-image-box">
        <img src="http://www.dcyz.com/monthmenu/monthmenu.png" alt="" class="order-image"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint no-undef: 0 */
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'orderInit',
  data() {
    return {
      order: {
        name: '',
        price: 0,
        amount: 0,
      },
      info: null,
      error: null,
    }
  },
  computed: {
    ...mapGetters({
      getOwn: 'getUser',
    }),
  },
  methods: {
    ...mapActions({
      saveOrder: 'postOrder',
    }),
    toggleImage() {
      $('div.order-image-box > img').slideToggle(250)
      if ($('h3 > span').hasClass('close')) {
        $('h3 > span').removeClass('close')
      } else {
        $('h3 > span').addClass('close')
      }
    },
    handleNumber(e) {
      if (e.target.id === 'orderPrice') {
        this.order.price = e.target.value
      } else if (e.target.id === 'orderAmount') {
        this.order.amount = e.target.value
      }
    },
    postOrder() {
      this.order.owner = this.getOwn
      this.saveOrder(this.order).then(
        savedOrder => {
          this.info = {
            rawMessage: 'success',
          }
        },
        error => {
          this.error = error
        }
      )
    },
  },
}
</script>
