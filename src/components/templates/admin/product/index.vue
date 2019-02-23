<template>
  <div class="product">
    <router-link to="/admin/skills"><button class="btn btn-primary" style="margin-top: 15px">スキルに移動</button></router-link>
    <div v-for="product in products" :key="product.id" class="products">
      <div class="h1">
        <h1>{{ product['title'] }}</h1>
      </div>
      <div class="form">
        <p class="bold">詳細</p>
        <p>{{ product['description']}}</p>
      </div>
      <div class="form">
        <p class="bold">本文</p>
        <p class="body">{{ product['body']}}</p>
      </div>
      <div class="form">
        <p class="bold">プロダクトURL</p>
        <p>{{ product['url']}}</p>
      </div>
      <div class="form">
        <p class="bold">画像URL</p>
        <p>{{ product['image_url']}}</p>
      </div>
      <div class="skills form">
        <p class="bold">使われている言語</p>
        <p v-for="language in product['product_languages']" :key="language.id">{{ language['name']}}</p>
      </div>
      <div class="form">
        <router-link :to="{ name: 'productEdit', params: { id: product['id'] }}" class="btn btn-primary">編集</router-link>
      </div>
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
  .product {
    text-align: center;
  }
  .bold {
    font-weight: bold;
  }
  .h1 {
    margin: 3% 0;
  }
  .form {
    margin: 3% 0;
  }
  .body {
    width: 50%;
    margin: 0 auto;
  }
</style>
