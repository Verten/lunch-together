<template>
  <div class="larg">
    <div>
      <h3 class="form-title">Order Information</h3>
      <div class="form">
        <label for="orderName">Order Name</label><input type="text" placeholder="Order Name" name="orderName" id="orderName" v-model="order.name">
        <label for="orderName">Order Price</label><input type="number" placeholder="Order Price" name="orderPrice" id="orderPrice" v-model.number="order.price">
        <label for="orderName">Order Amount</label><input type="number" placeholder="Order Amount" name="orderAmount" id="orderAmount" v-model.number="order.amount">
        <button type="button" class="second-button" @click="postOrder">Submit</button>
        <div class="success" v-if="info !== null">{{info.rawMessage}}</div>
        <div class="error" v-if="error !== null">{{error.rawMessage}}</div>
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
import { isEmpty } from 'lodash'
import AV from '../../leancloud/storage'

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
    postOrder() {
      this.order.owner = AV.User.current()
      if (isEmpty(this.order.name)) {
        this.error = {
          rawMessage: 'please input order name',
        }
        return false
      }
      this.saveOrder(this.order).then(
        savedOrder => {
          this.info = {
            rawMessage: 'success',
          }
          this.error = null
          this.order = {
            name: '',
            price: 0,
            amount: 0,
          }
        },
        error => {
          this.error = error
          this.info = null
        }
      )
    },
  },
}
</script>
