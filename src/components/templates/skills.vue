<template>
  <div>
    <div class="title">
      <p>skills</p>
    </div>
    <div class="cards">
      <div class="language">
        <p>language</p>
        <div class="card-box">
          <transition appear>
            <div class="skill-card">
              <div class="ruby">
                <p class="skill-title">Ruby</p>
                <div class="description">
                  <p>説明</p>
                </div>
              </div>
            </div>
          </transition>
          <transition appear>
            <div class="skill-card js">
              <p>Javascript</p>
            </div>
          </transition>
          <div class="skill-card html">
            <p>HTML</p>
          </div>
          <div class="skill-card css">
            <p>CSS</p>
          </div>
          <div class="skill-card gas">
            <p>GAS</p>
          </div>
          <div class="skill-card php">
            <p>PHP</p>
          </div>
        </div>
      </div>
      <div class="framework">
        <p>framework</p>
        <div class="card-box">
          <div class="skill-card ror">
            <p>Ruby on Rails</p>
          </div>
          <div class="skill-card sinatra">
            <p>Sinatra</p>
          </div>
          <div class="skill-card vue">
            <p>Vue.js</p>
          </div>
        </div>
      </div>
      <div class="infra">
        <p>infractuer</p>
        <div class="skill-card ec2">
          <p>EC2</p>
        </div>
        <div class="skill-card s3">
          <p>S3</p>
        </div>
        <div class="skill-card lambda">
          <p>Lambda</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .skill-card p {
    color: white;
  }

  .title {
    text-align: center;
    margin-top: 5%;
  }

  .ruby {
    border: 1px solid red;
  }

  .cards {
    text-align: center;
  }

  .skill-card {
    width: 20%;
    display: inline-block;
    text-align: center;
    margin: 10px;
    margin-bottom: 50px;
  }

  .skill-card:hover {
    height: 200px;
    transition-delay: 0.5s;
  }


  .v-enter-active, .v-leave-active {
    transition: all 3s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }

  .skill-title {
    background-color: red;
  }

  .php {
    background-color: navy;
  }

  .html {
    background-color: orange;
  }

  .css {
    background-color: blue;
  }

  .gas {
    background-color: darkcyan;
  }

  .js {
    background-color: yellowgreen;
  }

  .ror {
    background-color: red;
  }

  .vue {
    background-color: green;
  }

  .ec2 {
    background-color: orangered;
  }

  .s3 {
    background-color: red;
  }

  .lambda {
    background-color: darkorange;
  }

  .sinatra {
    background-color: gray;
  }

</style>
