<template>
  <div class="products-list">
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
  </div>
</template>

<script>
  import productCard from '../molecules/productCard.vue'

  export default {
    components: {
      productCard
    }
  }
</script>

<style scoped>
  .products-list {
    margin-bottom: 5%;
  }
</style>
