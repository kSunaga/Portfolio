<template>
  <div class="product">
    <router-link to="/admin/skills"><button class="btn btn-primary">スキルに移動</button></router-link>
    <div v-for="product in products" :key="product.id">
      <h1>{{ product['title'] }}</h1>
      <p>{{ product['description']}}</p>
      <p>{{ product['body']}}</p>
      <p>{{ product['url']}}</p>
      <p>{{ product['image_url']}}</p>
      <p>使われている言語</p>
      <p v-for="language in product['product_languages']" :key="language.id">{{ language['name']}}</p>
      <router-link :to="{ name: 'productEdit', params: { id: product['id'] }}">編集</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: []
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/products`)
        .then(response => {
          this.products = response.data
        })
    }
  }
</script>

<style scoped>
div:last-child {
  margin-bottom: 150px;
}
</style>
