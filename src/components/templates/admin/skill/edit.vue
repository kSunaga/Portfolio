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
    <div class="button">
      <input type="button" class="btn btn-primary" @click="edit" value="送信">
      <router-link to="/admin/skills"><button class="btn btn-primary ml-5">戻る</button></router-link>
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
        message: ''
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/languages/${this.$route.params.id}`)
        .then(res => {
            this.name = res.data.name,
              this.description = res.data.description,
              this.color = res.data.color
          }
        )
    },
    methods: {
      edit() {
        axios.put(`${process.env.VUE_APP_API_BASE_URL}/languages/${this.$route.params.id}`, {
          name: this.name,
          description: this.description,
          color: this.color,
          access_token: $cookies.get('access_token')
        }).then(() => { this.message = '成功しました。'})
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
    margin: 0 auto;
    margin-top: 5%;
  }
  .button {
    text-align: center;
  }
  .form-group {
    margin: 4% 0;
  }
</style>
