<template>
  <div>
    <router-link to="/admin/skills"><button class="btn btn-primary">戻る</button></router-link>
    <p v-show="message">{{ message }}</p>
    <div class="form-group">
      <label>name</label>
      <input type="text" v-model="name" class="form-control">
    </div>
    <div class="form-group">
      <label>description</label>
      <textarea v-model="description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>color</label>
      <input type="text" v-model="color" class="form-control">
    </div>
    <input type="button" @click="edit" value="送信">
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
          color: this.color
        }).then(() => { this.message = '成功しました。'})
      }
    }
  }
</script>

<style scoped>
label {
  font-weight: bold;
}
</style>
