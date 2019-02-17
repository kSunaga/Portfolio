<template>
  <div>
    <title-label name="Skill一覧"></title-label>
    <div class="cards">
      <div class="language">
        <skill-list></skill-list>
      </div>
    </div>
  </div>
</template>

<script>
  import skillList from '../../organisms/skillList.vue'


  export default {
    components: {
      skillList
    },
    data() {
      return {
        da: process.env.VUE_APP_API_BASE_URL
      }
    }
  }
</script>

<style scoped>

  .cards {
    text-align: center;
  }

  p {
    text-align: center;
    color: black;
  }
</style>
