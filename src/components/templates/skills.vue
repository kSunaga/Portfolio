<template>
  <div>
    <div class="title">
      <p>skills</p>
    </div>
    <div class="cards">
      <div class="language">
        <p>言語</p>
        <div class="card-box">
          <transition appear>
            <div class="skill-card">
              <p>Ruby</p>
            </div>
          </transition>
          <transition appear>
            <div class="skill-card php">
              <p>PHP</p>
            </div>
          </transition>
          <div class="skill-card">
            <p>AWS</p>
          </div>
          <div class="skill-card">
            <p>card</p>
          </div>
        </div>
        <div class="card-box">
          <div class="skill-card">
            <p>Ruby</p>
          </div>
          <div class="skill-card">
            <p>PHP</p>
          </div>
          <div class="skill-card">
            <p>AWS</p>
          </div>
          <div class="skill-card">
            <p>card</p>
          </div>
        </div>
      </div>
      <div class="framework">
        <p>フレームワーク</p>
        <div class="card-box">
          <div class="skill-card">
            <p>card</p>
          </div>
          <div class="skill-card">
            <p>card</p>
          </div>
          <div class="skill-card">
            <p>card</p>
          </div>
          <div class="skill-card">
            <p>card</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .title {
    text-align: center;
  }
  .cards {
    text-align: center;
  }
  .skill-card {
    border: 1px solid red;
    width: 20%;
    display: inline-block;
    text-align: center;
    margin: 10px;
    margin-bottom: 50px;
    height: 50px;
  }
  .skill-card:hover {
    height: 200px;
  }
  .v-enter-active, .v-leave-active {
    transition: all 3s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }

  .php {
  }


</style>
