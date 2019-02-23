<template>
  <div>
    <div class="back-product">
      <router-link to="/admin/products"><button class="btn btn-primary">プロダクトに移動</button></router-link>
    </div>
    <div v-for="language in languages" :key="language.id">
      <h1>{{ language['name'] }}</h1>
      <div class="body">
        <div class="description">
          <p style="font-weight: bold">詳細</p>
          <p>{{ language['description'] }}</p>
        </div>
        <div class="first_experience">
          <p style="font-weight: bold">実務経験</p>
          <p>{{ language['first_experience'] }}</p>
        </div>
        <div class="skill-id">
          <p style="font-weight: bold">スキルID</p>
          <p>{{ language['skill_id'] }}</p>
        </div>
        <div class="color">
          <p style="font-weight: bold">言語色</p>
          <p :style="{color: language['color']}">{{ language['color'] }}</p>
        </div>
        <p><router-link :to="{ name: 'skillEdit', params: {id: language['id']} }">編集</router-link></p>
      </div>
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
  h1 {
    text-align: center;
  }
  p{
    text-align: center;
  }
  .back-product {
    text-align: center;
    margin: 3% 0;
  }
</style>
