<template>
  <div class="card">
    <div>
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
