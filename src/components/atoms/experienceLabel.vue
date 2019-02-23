<template>
  <div>
    <p>{{this.get_experience(experience)}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      experience: String
    },
    methods: {
      get_experience(exp) {
        const expDate = new Date(exp);
        const nowDate = new Date();
        const diff = nowDate.getTime() - expDate.getTime();
        const resultMonth = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30))
        return `${Math.floor(resultMonth / 12)}年${Math.ceil(resultMonth % 12)}ヶ月`
      }
    }
  }
</script>

<style scoped>

</style>
