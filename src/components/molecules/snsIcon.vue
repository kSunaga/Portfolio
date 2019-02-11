<template>
  <div class="sns">
    <a href="https://twitter.com/ksunaga_"><img src="../../assets/twitter.svg" class="twitter"></a>
    <a href="https://github.com/kSunaga"><img src="../../assets/github.png" class="github"></a>
    <a href="https://www.facebook.com/profile.php?id=100014731847309"><img src="../../assets/facebook.png" class="facebook"></a>
  </div>
</template>

<style scoped>
  .sns {
    margin-top: 10%;
    text-align: center;
  }
  img {
    width: 75px;
    height: 75px;
    margin: 10px;
  }

  .twitter {-webkit-animation: bound .5s ease-in-out;}
  .github {-webkit-animation: bound .7s ease-in-out;}
  .facebook {-webkit-animation: bound 1s ease-in-out;}

  @-webkit-keyframes bound {
    0% {transform: scale(0) translate(0,-500px);}
    50% {transform: scaleX(2) translate(0,200px);}
    70% {transform: scaleY(.5) translate(0,-100px);}
    90% {transform: scaleX(1.5) translate(0,50px);}
    100% {transform: scale(1) translate(0,0);}
  }
</style>
