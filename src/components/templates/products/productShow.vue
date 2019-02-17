<template>
  <div>
    <div class="show">
      <h1>{{ title }}</h1>
      <div>
        <img :src="image_url">
      </div>
      <div>
        <p>{{ description }}</p>
      </div>
      <div>
        <p>{{ body }}</p>
      </div>
      <p>使用技術</p>
      <div class="languages">
        <p class="language" v-for="language in languages" :key="language.id" :style="{border: `1px solid ${language.color}`}"> <router-link :to="{ name: 'skill', params: { id: language['langugage_id'] }}">{{ language['name'] }}</router-link></p>
      </div>
    </div>
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

  .show {
    text-align: center;
  }

  img {
    width: 30%;
    height: auto;
  }

  .language {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    color: white;
  }

</style>
