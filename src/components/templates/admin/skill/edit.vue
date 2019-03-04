<template>
  <div class="edit">
    <p v-show="message">{{ message }}</p>
    <div class="form-group">
      <p>name</p>
      <input type="text" v-model="name" class="form-control">
    </div>
    <div class="form-group">
      <p>description</p>
      <textarea v-model="description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <p>color</p>
      <input type="text" v-model="color" class="form-control">
    </div>
    <div class="form-group">
      <div v-for="product in products" :key="product.id">
        <p>{{ product.title }}</p>
        <input type="checkbox" :value="product.id" :checked="filterProductId(product_languages).includes(product.id)">
      </div>
    </div>
    <div class="button">
      <input type="button" class="btn btn-primary" @click="edit" value="送信">
      <router-link to="/admin/skills">
        <button class="btn btn-primary ml-5">戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        name: '',
        description: '',
        color: '',
        message: '',
        product_languages: [],
        products: []
      }
    },
    mounted() {
      this.getProducts();
      this.getLanguage();
    },
    methods: {
      edit() {
        axios.put(`${process.env.VUE_APP_API_BASE_URL}/languages/${this.$route.params.id}`, {
          name: this.name,
          description: this.description,
          color: this.color,
          // eslint-disable-next-line
          access_token: $cookies.get('access_token')
        }).then((response) => {
          this.message = response.data.message
        })
      },
      getProducts() {
        axios.get(`${process.env.VUE_APP_API_BASE_URL}/products`)
          .then(response => {
            this.products = response.data
          })
      },
      getLanguage() {
        axios.get(`${process.env.VUE_APP_API_BASE_URL}/languages/${this.$route.params.id}`)
          .then(res => {
              this.product_languages = res.data.product_languages,
                this.name = res.data.name,
                this.description = res.data.description,
                this.color = res.data.color
            }
          )
      },
      filterProductId(languages) {
        let ids = [];
        languages.forEach(language => {
          ids.push(language.product_id)
        });
        return ids;
      }
    }
  }
</script>

<style scoped>
  p {
    font-weight: bold;
    text-align: center;
  }

  .edit {
    width: 70%;
    margin: 3% auto;
  }

  .button {
    text-align: center;
  }

  .form-group {
    margin: 4% 0;
  }
</style>
