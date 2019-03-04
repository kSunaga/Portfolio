<template>
  <div>
    <p class="back">
      <router-link to="/admin/products" class="back btn btn-primary">戻る</router-link>
    </p>
    <p v-show="update_flag"> {{ update_flag }}</p>
    <div class="body">
      <h1>編集画面</h1>
      <div class="form-group">
        <label>title</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>body</label>
        <textarea v-model="body"></textarea>
      </div>
      <div class="form-group">
        <label>description</label>
        <textarea v-model="description"></textarea>
      </div>
      <div class="form-group">
        <label>url</label>
        <input type="text" class="form-control" v-model="url">
      </div>
      <div class="form-group">
        <label>image_url</label>
        <input type="text" class="form-control" v-model="image_url">
      </div>
      <div class="form-group">
        <p>languages</p>
        <div class="language" v-for="language in languages" :key="language.id">
          <span>{{ language.name }}</span>
          <input type="checkbox" :id="language.name" :value="language.id" :checked="filterIds(product_languages).includes(language.id)">
        </div>
      </div>
      <input class="push btn btn-primary" style="margin-top: 15px" type="button" @click="edit" value="送信">
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
        update_flag: '',
        languages: [],
        product_languages: []
      }
    },
    mounted() {
      this.getProduct()
      this.getLanguages()
    },
    methods: {
      edit() {
        axios.put(`${process.env.VUE_APP_API_BASE_URL}/products/${this.$route.params.id}`, {
          title: this.title,
          body: this.body,
          description: this.description,
          image_url: this.image_url,
          // eslint-disable-next-line
          access_token: $cookies.get('access_token')
        }).then((response) => {
            this.update_flag = response.data.message
          }
        )
      },
      getLanguages() {
        axios.get(`${process.env.VUE_APP_API_BASE_URL}/languages`)
          .then(response => {
            this.languages = response.data
          })
      },
      getProduct() {
        axios.get(`${process.env.VUE_APP_API_BASE_URL}/products/${this.$route.params.id}`)
          .then(response => {
            this.title = response.data.title,
              this.url = response.data.url,
              this.body = response.data.body,
              this.description = response.data.description,
              this.image_url = response.data.image_url,
              this.product_languages = response.data.product_languages
          })
      },
      filterIds(product_languages) {
        let ids = [];
        product_languages.forEach(language => {
          ids.push(language.language_id)
        });
        return ids
      }
    }
  }
</script>

<style scoped>
  textarea {
    width: 100%;
  }

  label {
    font-weight: bold;
  }

  .back {
    text-align: center;
    margin-top: 15px;
  }

  .body {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }

  .form-group {
    margin-top: 4%;
  }

  .language {
    display: inline-block;
    margin-left: 15px;
  }

  .push {
    margin-bottom: 10%;
  }
</style>
