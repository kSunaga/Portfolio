<template>
  <div>
    <div class="contact">
      <title-label name="お問い合わせ"></title-label>
      <p>気軽にお問い合わせください！</p>
    </div>
    <sns-icon></sns-icon>
  </div>
</template>

<script>
  import snsIcon from '../molecules/snsIcon.vue'

  export default {
    components: {
      snsIcon
    }
  }
</script>

<style scoped>
  .contact {
    margin-top: 5%;
    text-align: center;
  }
  p {
    margin-top: 3%;
  }
</style>
