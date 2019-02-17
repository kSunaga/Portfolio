<template>
  <div>
    <loading v-show="loading"></loading>
    <div class="products-list" v-show="!loading">
      <product-card :id="product['id']" :title="product['title']" :image_url="product['image_url']" :description="product['description']" :url="product['url']" v-for="product in products" :key="product.id"></product-card>
    </div>
  </div>
</template>

<script>
  import productCard from '../molecules/productCard.vue'
  import loading from '../atoms/loading.vue'
  import axios from 'axios'

  export default {
    components: {
      productCard,
      loading
    },
    data() {
      return {
        products: [],
        loading: true
      }
    },
    mounted() {
      const self = this;
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/products`)
        .then(response => {
          self.products = response.data
          self.loading = false
        })
    }
  }
</script>

<style scoped>
  .products-list {
    margin-bottom: 5%;
  }
</style>
