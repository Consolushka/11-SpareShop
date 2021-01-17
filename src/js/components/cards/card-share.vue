<template>
  <a :href="'product.html?id='+product.id" class="share shares-item">
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
        <div class="share__timer-remaining-time">
          <time-dynamic :endTime="product.endOfSale"></time-dynamic>
        </div>
        <p class="share__timer-remaining-time"></p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "card-share",
  props: {
    product: Object
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars";

.share {
  text-align: center;
  position: relative;
  border: 1px solid #CDCDCD;
  border-radius: 3px;
  color: $default-color;

  &:before {
    position: absolute;
    z-index: 2;
    font-size: 12px;
    content: "акция";
    text-transform: uppercase;
    color: #fff;
    left: 0;
    top: 8px;
    display: block;
    padding: 6px 23px;
    background: linear-gradient(91.1deg, $gradient-color 1.17%, $primary-color 99.31%);
    transform: rotate(-90deg) translate(-25%, -119%)
  }
}

.share__window {
  position: relative;
  padding-top: 53px;
  margin-bottom: 15px;
}

.share__window-price {
  text-align: center;
  position: absolute;
  width: fit-content;
  right: 18px;
  top: 15px;
}

.share__window-price-new {
  color: $primary-color;
  font-size: 27px;
}

.share__window-price-old {
  color: $neutral-primary;
  position: relative;

  &:after {
    content: "";
    left: 0;
    bottom: 0;
    transform: rotate(-13deg) translateY(-12px);
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $neutral-primary;
  }
}

.share__window-image {
  margin-bottom: 15px;
}

.share__timer {
  background-color: $neutral-light;
  padding-top: 15px;
}

.share__timer-remaining {
  padding: 0 45px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;

  svg {
    margin-right: 15px;
  }
}
</style>
