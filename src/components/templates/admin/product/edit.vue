<template>
  <div>
    <router-link to="/admin/products"><button class="btn btn-primary">戻る</button></router-link>
    <p v-show="update_flag"> {{ update_flag }}</p>
    <p>product編集画面</p>
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
    <input type="button" @click="edit" value="送信">
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
        }).then(res => {
          this.update_flag = '成功しました。'
        })
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
</style>
