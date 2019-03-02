<template>
  <div>
    <p v-if="update_flag">{{ update_flag }}</p>
    <div class="title">
      <p>新規プロダクト作成画面</p>
    </div>
    <div class="body">
      <div class="form-group">
        <p>title</p>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <p>body</p>
        <input type="text" class="form-control" v-model="body">
      </div>
      <div class="form-group">
        <p>description</p>
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group">
        <p>url</p>
        <input type="text" class="form-control" v-model="url">
      </div>
      <div class="form-group">
        <p>image_url</p>
        <input type="text" class="form-control" v-model="image_url">
      </div>
      <button class="btn btn-primary" @click="push" style="margin-right: 15px">送信</button>
      <router-link to="/admin/products"><button class="btn btn-primary">戻る</button></router-link>
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
    methods: {
      push() {
        axios.post(`${process.env.VUE_APP_API_BASE_URL}/products`, {
          title: this.title,
          body: this.body,
          description: this.description,
          url: this.url,
          image_url: this.image_url,
          // eslint-disable-next-line
          access_token: $cookies.get('access_token')
        }).then(() => {
            this.update_flag = '成功しました。'
          }
        )
      }
    }
  }
</script>

<style scoped>

  .title {
    text-align: center;
  }

  .body {
    width: 75%;
    margin: 0 auto;
  }
</style>
