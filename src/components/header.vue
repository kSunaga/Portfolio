<template>
  <header class="sticky-top row">
    <div class="col-5"></div>
    <div class="title col-3">
      <router-link to="/"><p>kSunaga's portfolio</p></router-link>
    </div>
    <div class="link col-4">
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to="skills">Skills</router-link></p>
      <p><router-link to="products">Products</router-link></p>
      <p><router-link to="contact">Contact</router-link></p>
    </div>
  </header>
</template>

<style scoped>
  header {
    line-height: 4;
    border-bottom: solid 2px lightblue;
    background-color: white;
    border-top: solid 3px #85ce9e;
    font-family: "Comic Sans MS";
    font-size: larger;
    text-align: center;
  }
  .title {
    text-align: left;
  }
  .link p{
    padding-left: 15px;
    display: inline-block;
  }
</style>
