<template>
  <transition appear>
    <div class="skill-card" :style="{border: `1px solid ${color}`}" @click="isShow = !isShow">
      <p class="skill-title" :style="{backgroundColor: color}">{{name}}</p>
      <div class="description" v-show="isShow">
        <p>経験月数{{date}}ヶ月</p>
        <p>{{description}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      name: String,
      description: String,
      color: String,
      date: String
    },
    data() {
      return {
        isShow: false
      }
    }
  }
</script>

<style scoped>

  .skill-card {
    width: 20%;
    display: inline-block;
    text-align: center;
    margin: 10px;
    margin-bottom: 50px;
  }

  .skill-title {
    padding: 5px;
  }

</style>
