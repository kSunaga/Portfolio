<template>
  <div class="login-form">
    <div class="form-group">
      <label>email</label>
      <input type="text" class="form-control" placeholder="Eメールアドレス" v-model="email">
    </div>
    <div class="form-group">
      <label>パスワード</label>
      <input type="password" class="form-control" v-model="password">
    </div>
    <button class="btn btn-primary" @click="sendAuth">送信</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      sendAuth() {
        const self = this;
        axios.post('https://fierce-beyond-13003.herokuapp.com/api/v1/login', {
          name: this.email,
          password: this.password
        })
          .then(function (response) {
            self.$cookies.set('user_id', response.data.id)
            self.$cookies.set('access_token', response.data.auth_token)
            self.$router.push( '/admin/skills')
          })
      }
    }
  }
</script>

<style scoped>
  .login-form {
    margin-top: 5%;
  }
</style>
