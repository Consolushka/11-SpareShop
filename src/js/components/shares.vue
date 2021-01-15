<template>
  <section class="shares">
    <div class="container">
      <VueSlickCarousel v-bind="settings">
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
  data() {
    return {
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 750,
        "autoplaySpeed": 3500,
        "cssEase": "linear"
      }
    }
  },
  computed: {
    items() {
      return this.sharedprod.map((item) => {
        let product = this.products[item.id];
        console.log(Number(product.price) - Number(item.sale));
        product['newPrice'] = Number(product.price) - Number(item.sale);
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
  position: relative;
}

.shares {
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
}

@media (min-width: 1170px) {
  .shares {
    width: 23%;
    padding: 0;

    .container {
      padding: 0;
    }

    .slick-slider {
      padding: 0;
    }
  }
}

</style>
