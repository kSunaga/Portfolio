<template>
  <p class="title">{{ name }}</p>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>

<style scoped>
  .title {
    margin-top: 5%;
    margin-bottom: 3%;
    text-align: center;
    font-size: 2rem;
  }
</style>
