<template>
  <div class="card">
    <div class="img-box">
      <img class="card-img" :src="imgUrl" alt="" mode="widthFix">
    </div>
    <p class="card-text">
      {{text}}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    imgUrl: String
  }
}
</script>

<style lang="less">
.card {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  .img-box{
    width: 100%;
    height: 80px;
    border: 1px solid red;
  }
  .card-img{
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .card-text{
    width: 100%;
    font: 14px;
    color: #666666;
  }
}
</style>
