<template>
  <div>
    <div class="title">
      <p v-if="update_flag">{{ update_flag }}</p>
      <p>新規言語作成画面</p>
    </div>
    <div class="body">
      <div class="form-group">
        <p>name</p>
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <p>description</p>
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group">
        <p>first experience</p>
        <input type="text" class="form-control" v-model="first_experience">
      </div>
      <div class="form-group">
        <p>color</p>
        <input type="text" class="form-control" v-model="color">
      </div>
      <button class="btn btn-primary" @click="push">送信</button>
      <router-link to="/admin/skills">
        <button class="btn btn-primary">戻る</button>
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
        first_experience: '',
        color: '',
        update_flag: ''
      }
    },
    methods: {
      push() {
        axios.post(`${process.env.VUE_APP_API_BASE_URL}/languages`, {
          name: this.name,
          description: this.description,
          first_experience: this.first_experience,
          color: this.color,
          // eslint-disable-next-line
          access_token: $cookies.get('access_token')
        }).then((response) => {
          this.update_flag = response.data.message
        })
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
