<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
    <p>{{ description }}</p>
    <p>{{ url }}</p>
    <p>{{ image_url }}</p>
    <p>使用言語</p>
    <p v-for="language in languages" :key="language.id">{{ language['name'] }}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {

    data() {
      return {
        title: '',
        body: '',
        description: '',
        url: '',
        image_url: '',
        languages: []
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/products/${this.$route.params.id}`)
        .then(response => {
          this.title = response.data.title;
          this.body = response.data.body;
          this.description = response.data.description;
          this.url = response.data.url;
          this.image_url = response.data.image_url;
          this.languages = response.data.product_languages;
        })
    }
  }
</script>

<style scoped>

</style>
