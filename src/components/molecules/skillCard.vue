<template>
  <transition appear>
    <div class="skill-card" :style="{border: `1px solid ${color}`}" @click="isShow = !isShow">
      <p class="skill-title" :style="{backgroundColor: color}">{{name}}</p>
      <div class="description" v-show="isShow">
        <p>経験月数{{date}}ヶ月</p>
        <p>{{description}}</p>
        <router-link :to="{ name: 'skill', params: {id: id}}">詳細</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      id: Number,
      name: String,
      description: String,
      color: String,
      date: Number
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
    color: white;
    padding: 5px;
  }

  .v-enter-active, .v-leave-active {
    transition: all 3s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }

</style>
