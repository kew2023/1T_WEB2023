<template>
  <div class="v-main-wrapper">
    <vCatalog></vCatalog>
    <vCart
    v-if="CART.length"
    :cart_data="CART"></vCart>
  </div>
</template>

<script>
/* eslint-disable */
import vCatalog from '@/components/v-catalog.vue'
import vCart from '@/components/v-cart.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  components: { vCatalog, vCart },
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