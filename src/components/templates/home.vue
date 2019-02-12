<template>
  <div>
    <div class="content">
      <div class="self-introduction">
        <p>Welcome to kSunaga's Portfolio Site</p>
      </div>
    </div>
    <sns-icon></sns-icon>
  </div>
</template>

<script>
  import snsIcon from '../molecules/snsIcon.vue'
  export default {
    components: {snsIcon}
  }
</script>

<style scoped>

  .content {
    margin-top: 15%;
  }
  .self-introduction p {
    margin-top: 25px;
    text-align: center;
    width: 100%;
    font-size: 75px;
    font-family: Serif;
    color: navy;
  }

</style>
