<template>
  <div class="show">
    <div class="title">
      <h1 :style="{ backgroundColor: color }">{{ name }}</h1>
    </div>
    <div class="info">
      <div class="clip">
        <label>詳細</label>
        <p>{{ description }}</p>
      </div>
      <div class="clip">
        <label>実務経験</label>
        <experience-label :experience="first_experience"></experience-label>
      </div>
      <div class="clip">
        <div>
          <label>使用プロダクト</label>
        </div>
        <div class="product" v-for="product in use_products" :key="product.id">
          <p class="product-title">{{ product.title }}</p>
          <router-link :to="{ name: 'product', params: { id: product.product_id }}">詳細を見る</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ExperienceLabel from '../../atoms/experienceLabel.vue'

  export default {

    components: { ExperienceLabel },
    data() {
      return {
        name: '',
        description: '',
        first_experience: '',
        color: '',
        use_products: []
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/languages/${this.$route.params.id}`)
        .then(res => {
          this.name = res.data.name;
          this.description = res.data.description;
          this.first_experience = res.data.first_experience;
          this.color = res.data.color;
          this.use_products = res.data.product_languages
        })
    }
  }
</script>

<style scoped>
  h1 {
  }

  .title {
    margin: 0 auto;
    width: 20%;
    text-align: center;
  }

  .show {
    padding-top: 10%;
    text-align: center;
  }

  label {
    font-weight: bold;
  }

  .info {
    margin-top: 5%;
  }

  .clip {
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid lightgrey;
  }

  .product {
    padding-top: 10px;
    display: inline-block;
    margin: 0 5%;
  }

  .product-title {
    font-size: x-large;
  }
</style>
