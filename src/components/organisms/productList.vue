<template>
  <div class="products-list">
    <product-card :title="product['title']" :image_url="product['image_url']" :description="product['description']" v-for="product in products" :key="product.id"></product-card>
  </div>
</template>

<script>
  import productCard from '../molecules/productCard.vue'
  import axios from 'axios'

  export default {
    components: {
      productCard
    },
    data() {
      return {
        products: []
      }
    },
    mounted() {
      const self = this
      axios.get('https://fierce-beyond-13003.herokuapp.com/products')
        .then(response => {
          self.products = response.data
        })
    }
  }
</script>

<style scoped>
  .products-list {
    margin-bottom: 5%;
  }
</style>
