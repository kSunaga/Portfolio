<template>
  <div class="loading">
    <p v-show="isTimeUp">サーバサイドがherokuの為、時間がかかっています。<br>少々お待ちください！</p>
    <img src="../../assets/ajax-loader.gif">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isTimeUp: false
      }
    },
    mounted() {
      setTimeout(this.toggle, 3000)
    },
    methods: {
      toggle() {
        this.isTimeUp = true
      }
    }
  }
</script>

<style scoped>
  .loading {
    text-align: center;
  }
</style>
