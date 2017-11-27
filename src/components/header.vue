<template>
  <div class="title">
    <h2>{{title}}</h2>
    <a href="javascript:void(0);">Hello {{user.username}} !</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'headerView',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getTitle']),
    title() {
      return this.getTitle
    },
  },
}
</script>

