<template>
  <section class="shares">
    <div class="container">
      <VueSlickCarousel :arrows="true" :dots="true">
        <card-share v-for="item in items" :key="item.id" :product="item"></card-share>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {VueSlickCarousel},
  name: "shares",
  props: {
    sharedprod: Array,
    products: Object
  },
  computed: {
    items() {
      return this.sharedprod.map((item) => {
        let product = this.products[item.id]
        product['newPrice'] = product.price - item.sale;
        product['endOfSale'] = item.endOfSale;
        return product;
      })
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.shares {
  padding: 0 9px;
  margin-bottom: 80px;
}

.share {
  text-align: center;
  position: relative;
  border: 1px solid #CDCDCD;
  border-radius: 3px;

  &:before {
    position: absolute;
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

.slick-prev {
  left: 0;
  transform: translateX(-50%);
}

.slick-next {
  right: 0;
  transform: translateX(50%);
}

.slick-slider {
  padding: 0 20px;
}

.slick-prev:before,
.slick-next:before {
  color: $primary-color;
}

.slick-dots {
  width: 98%;
}

</style>
