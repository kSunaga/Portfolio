<template>
  <div class="card">
    <img class="card-img-top" :src="image_url">
    <div class="card-body">
      <a :href="url"><h5>{{ title }}</h5></a>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image_url: String,
      title: String,
      description: String,
      url: String
    }
  }
</script>

<style scoped>
  .card {
    margin: 0 auto;
    width: 30rem;
    margin-bottom: 5%;
  }
</style>
