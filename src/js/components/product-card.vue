<template>
  <a href="" class="card">
    <div class="card__features">
      <div v-if="this.product.isSale" class="card__features__sales">sale</div>
      <button class="btn btn--icon card__features-item card__features__favorite">
        <svg width="25" height="22">
          <use xlink:href="/assets/img/sprite.svg#icon-favorite"></use>
        </svg>
      </button>
      <div v-if="this.product.isWinter" class="card__features-item card__features__winter">
        <svg width="28" height="31">
          <use xlink:href="/assets/img/sprite.svg#icon-winter"></use>
        </svg>
      </div>
      <div v-if="this.product.isSummer" class="card__features-item card__features__summer">
        <svg width="31" height="31">
          <use xlink:href="/assets/img/sprite.svg#icon-summer"></use>
        </svg>
      </div>
    </div>
    <img :src=product.imgPath :alt=product.title class="card__img">
    <div class="card__info">
      <h4 class="title title--h4">
        {{ product.title }}
      </h4>
      <p class="card__info-price">{{ product.price }} &#8381</p>
    </div>
    <button class="btn btn--icon btn--buy card__buy">
      <svg width="20" height="24">
        <use xlink:href="/assets/img/sprite.svg#icon-packet"></use>
      </svg>
    </button>
  </a>
</template>

<script>
export default {
  name: "product-card",
  props: {
    product: Object
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/utils/vars.scss';

.card {
  color: $default-color;
  display: block;
  text-align: center;
  border: 1px solid #CDCDCD;
  border-radius: 3px;
  padding-bottom: 31px;
  position: relative;
}

.card__features {
  height: 63px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.card__features-item {
  margin-right: 20px;
}

.card__features__sales {
  position: absolute;
  text-transform: uppercase;
  font-size: 12px;
  color: #ffffff;
  width: 63px;
  height: 25px;
  font-weight: 600;
  padding: 7px 15px;
  background: linear-gradient(91.1deg, $gradient-color 1.17%, $primary-color 99.31%);
  transform: rotate(-90deg);
  left: -20px;
  right: auto;
}

.card__buy {
  position: absolute;
  right: 0;
  bottom: 0;
}

</style>
