<template>
  <div>
    <h1>Каталог!</h1>
    <div class="v-catalog">
      <div class="v-catalog__list">
        <vCatalogItem
        v-for="product in PRODUCTS" :key="product.article"
        :product_data="product"
        @addToCart="data => addToCart(data)"/>
      </div>
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

/* eslint-disable */

export default {
  name: 'v-catalog',
  components: { vCatalogItem },
  props: {
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (data) {
      console.log(data)
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
    .then(res => {
      if (res.data) {
        console.log(res.data)        
      }
    })
  }
}
</script>

<style>
  .v-catalog, .v-catalog__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
