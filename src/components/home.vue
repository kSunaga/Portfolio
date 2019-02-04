<template>
  <div>
    <div class="head-img">
      <p> kSunaga's Portfolio</p>
    </div>
    <div class="content">
      <div class="self-introduction">
        <h2>自己紹介</h2>
        <p>初めまして！<br>サーバサイドエンジニアのkSunagaと申します。<br>2018年新卒のエンジニア１年生です！</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .head-img {
    background-image: url("../assets/home.jpg");
    background-size: 100% auto;
    height: 250px;
  }
  .head-img > p{
    text-align: center;
    color: white;
    font-size: 65px;
    padding-top: 5%;
    opacity: 0.8;
    font-family: "Coic Sans MS";
  }

  .content {
    margin-top: 3%;
    text-align: center;
    padding-bottom: 1000px;
  }



</style>
