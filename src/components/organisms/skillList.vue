<template>
  <div class="card-box">
    <div class="language">
      <skill-card name="ruby" color="pink" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
    </div>
    <div class="infra">
      <p>framework</p>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
      <skill-card name="ruby" color="red" description="テスト"></skill-card>
    </div>
  </div>
</template>

<script>
  import skillCard from '../molecules/skillCard.vue'

  export default {
    components: {
      skillCard
    }
  }
</script>


<style scoped>

  /*.skill-card:hover {*/
    /*height: 200px;*/
    /*transition-delay: 0.5s;*/
  /*}*/
  /*.v-enter-active, .v-leave-active {*/
    /*transition: all 3s;*/
  /*}*/

  /*.v-enter, .v-leave-to {*/
    /*opacity: 0;*/
    /*transform: translateX(-60px);*/
  /*}*/
</style>
