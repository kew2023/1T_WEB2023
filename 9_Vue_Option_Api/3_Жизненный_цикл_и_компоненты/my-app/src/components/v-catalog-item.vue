<template>
  <div class="v-catalog-item">
    <img :src="require('../assets/images/' + product_data.image)" alt="img" class="v-catalog-item__image">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <p class="v-catalog-item__about">{{ product_data.about }}</p>
    <button class="v-catalog-item__btn" @click="sendToParent">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    sendToParent () {
      this.$emit('add-product', this.product_data.article)
    }
  }
}
</script>

<style>
  .v-catalog-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 20px;
    margin: 20px
  }
  .v-catalog-item__btn {
    display: block;
    margin: 0 auto;
  }
</style>
