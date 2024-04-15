<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  data () {
    return {
      cart: []
    };
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>