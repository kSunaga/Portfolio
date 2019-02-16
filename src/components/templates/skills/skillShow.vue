<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <p>{{ first_experience }}</p>
    <p>{{ color }}</p>
    <p>使用プロダクト</p>
    <p v-for="product in use_products" :key="product.id">{{ product.title}}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
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

</style>
