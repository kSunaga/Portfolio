<template>
  <div>
    <p class="title">制作物一覧</p>
  <div class="products-list">
    <div class="card">
      <img class="card-img-top" src="../../assets/portfolio.png">
      <div class="card-body">
        <a href="https://www.ksunaga-portfolio.com/"><h5>Portfolio</h5></a>
        <p>テキスト<br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <a href="#" class="btn btn-primary">ボタン</a>
      </div>
    </div>
  </div>
    <div class="products-list">
      <div class="card">
        <a href="https://regex-checker.herokuapp.com/"><img class="card-img-top" src="../../assets/regex.png"></a>
        <div class="card-body">
          <h5>正規表現チェッカー</h5>
          <p>テキスト<br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <a href="#" class="btn btn-primary">ボタン</a>
        </div>
      </div>
    </div>
    <div class="products-list">
      <div class="card">
        <img class="card-img-top" src="../../assets/tool.png">
        <div class="card-body">
          <h5>tool</h5>
          <p>テキスト<br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <a href="https://github.com/kSunaga" class="btn btn-primary">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

  .card {
    margin: 0 auto;
    width: 30rem;
  }
  h5 {
    text-align: center;
    margin-bottom: 15px;
  }
  .title {
    margin-top: 5%;
    margin-bottom: 3%;
    text-align: center;
    font-size: 2rem;
  }
  .products-list {
    margin-bottom: 5%;
  }
</style>
