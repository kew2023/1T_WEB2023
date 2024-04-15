<template>
  <div class="v-cart">

    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link">
        <i class="material-icons medium">shopping_cart</i>
        {{ CART.length }}
      </div>
      <button class="btn">Back to Catalog</button>
    </router-link>

    <p v-if="!CART.length">You haven't got any products...</p>

    <h2>Cart!</h2>

    <vCartItem v-for="(product, index) in CART"
      :key="product.article"
      :cart_item_data="product"
      @deleteFromCart="() => deleteFromCart(index)"
    ></vCartItem>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters(['CART'])
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
