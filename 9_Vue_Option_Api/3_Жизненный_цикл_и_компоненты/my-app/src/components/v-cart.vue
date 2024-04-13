<template>
  <div class="v-cart">
    <vCartItem></vCartItem>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'

export default {
  name: 'v-cart',
  components: { vCartItem }
}
</script>

<style>
  .v-cart {
    width: auto;
  }
</style>
