<template>
  <div class="category__advert">
    <div class="container">
      <h3 class="title title--h3 category__advert-title">ШИНОМОНТАЖ</h3>
      <p class="category__advert-desc">Любой сложности и без очередей</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-advert"
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.category__advert {
  padding-top: 61px;
  padding-bottom: 46px;
  color: #ffffff;
  background: linear-gradient(91.1deg, $gradient-color 1.17%, $primary-color 99.31%);
  text-align: center;
}

.category__advert-title {
  font-size: 35px;
  margin-bottom: 29px;
  letter-spacing: 0.04em;
}

</style>
