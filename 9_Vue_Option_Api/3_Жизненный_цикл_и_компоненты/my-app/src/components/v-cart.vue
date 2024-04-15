<template>
  <div>
    <h1>Cart!</h1>
    <div class="v-cart">
      <vCartItem v-for="(product, index) in cart_data"
        :key="product.article"
        :cart_item_data="product"
        @deleteFromCart="() => deleteFromCart(index)"
      ></vCartItem>
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: { vCartItem },
  props: {
    cart_data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>
  .v-cart {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: grey;
    font-size: 20px;
    margin-bottom: 150px;

  }
  p{
    text-align: center;
  }
</style>
