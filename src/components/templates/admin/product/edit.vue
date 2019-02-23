<template>
  <div>
    <p class="back"><router-link to="/admin/products" class="back btn btn-primary">戻る</router-link></p>
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
      <input class="btn btn-primary" style="margin-top: 15px" type="button" @click="edit" value="送信">
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
        update_flag: ''
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/products/${this.$route.params.id}`)
        .then(response => {
          this.title = response.data.title,
            this.url = response.data.url,
            this.body = response.data.body,
            this.description = response.data.description,
            this.image_url = response.data.image_url
        })
    },
    methods: {
      edit() {
        axios.put(`${process.env.VUE_APP_API_BASE_URL}/products/${this.$route.params.id}`, {
          title: this.title,
          body: this.body,
          description: this.description,
          image_url: this.image_url
        }).then( () => { this.update_flag = '成功しました。'}
        )}
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
</style>
