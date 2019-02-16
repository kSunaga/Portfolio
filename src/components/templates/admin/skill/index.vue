<template>
  <div>
    <router-link to="/admin/products"><button class="btn btn-primary">プロダクトに移動</button></router-link>
    <div v-for="language in languages" :key="language.id">
      <h1>{{ language['name'] }}</h1>
      <p>{{ language['description'] }}</p>
      <p>{{ language['first_experience'] }}</p>
      <p>{{ language['skill_id'] }}</p>
      <p>{{ language['color'] }}</p>
      <router-link :to="{ name: 'skillEdit', params: {id: language['id']} }">編集</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        languages: []
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/languages`)
        .then(response => {
          this.languages = response.data
        })
    }
  }
</script>

<style scoped>
  div:last-child {
    margin-bottom: 150px;
  }
</style>
