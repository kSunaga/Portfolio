<template>
  <transition appear>
    <div class="card">
      <img class="card-img-top" :src="image_url">
      <div class="card-body">
        <a :href="url"><h5>{{ title }}</h5></a>
        <p>{{ description }}</p>
      </div>
      <div class="show"><router-link :to="{ name: 'product', params: { id: id}}">詳細</router-link></div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      id: Number,
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
  .v-enter-active, .v-leave-active {
    transition: all 3s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }

  .show {
    text-align: center;
  }
</style>
