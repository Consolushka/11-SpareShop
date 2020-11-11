<template>
  <article class="share shares-item">
    <div class="share__window">
      <div class="share__window-price">
        <p class="share__window-price-new">{{ product.newPrice }} &#8381</p>
        <p class="share__window-price-old">{{ product.price }} &#8381</p>
      </div>
      <img :src="product.imgPath" :alt="product.title" class="share__window-image">
      <h3 class="title title--h3 share__window-title">{{ product.title }}</h3>
    </div>
    <div class="share__timer">
      <p class="share__times-slogan">До конца акции осталось:</p>
      <div class="share__timer-remaining">
        <svg width="28" height="28">
          <use xlink:href="/assets/img/sprite.svg#icon-timer"></use>
        </svg>
        <p class="share__timer-remaining-time">{{ product.endOfSale.valueOf() }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "card-share",
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>
