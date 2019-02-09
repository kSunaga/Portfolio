<template>
  <div>
    <title-label name="制作物一覧"></title-label>
    <product-list></product-list>
  </div>
</template>

<script>
  import productList from '../organisms/productList.vue'

  export default {
    components: {
      productList
    }
  }
</script>

<style scoped>


  h5 {
    text-align: center;
    margin-bottom: 15px;
  }
</style>
