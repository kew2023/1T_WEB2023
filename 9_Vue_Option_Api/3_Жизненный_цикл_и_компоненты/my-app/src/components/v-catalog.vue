<template>
  <h2>Каталог!</h2>
  <div class="v-catalog">
    <vCatalogItem
    v-for="product in products" :key="product.article"
    :product_data="product"
    @add-product="article => console.log(article)"/>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item.vue'

export default {
  name: 'v-catalog',
  components: { vCatalogItem },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
  .v-catalog {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
