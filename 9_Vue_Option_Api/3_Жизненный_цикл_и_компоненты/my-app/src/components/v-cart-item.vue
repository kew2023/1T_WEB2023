<template>
  <div class="v-cart-item">
    <img :src="require('../assets/images/' + cart_item_data.image)" alt="img" class="v-cart-item__image">
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
      <p>{{ cart_item_data.about }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p> Quantity: </p>
      <span>
          {{ cart_item_data.quantity }}
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style>
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 20px;
    margin: 20px
  }
  .v-cart-item__image {
    min-width: 10%;
  }
</style>
