<template>
  <div class="product__similar">
    <h3 class="title title--h3 product__similar-title">С этим часто покупают</h3>
    <VueSlickCarousel v-bind="settings">
      <article class="popular__list-item" v-for="similarItem in similarProducts" :key="similarItem.id">
        <card-product
          :product="similarItem"
          :user="user">
        </card-product>
      </article>
    </VueSlickCarousel>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {VueSlickCarousel},
  name: "similar-comp",
  props: {
    products: Object,
    user: Object
  },
  data() {
    return {
      settings: {
        "arrows": false,
        "dots": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1170,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "infinite": true,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "infinite": true,
            }
          }
        ]
      },
      similarArray: this.products[Number(window.location.search.replace('?id=', ''))].similar,
    }
  },
  created() {
    console.log(this.products)
  },
  computed: {
    similarProducts() {
      let similarArray = [];
      this.similarArray.forEach((simProd) => {
        Object.keys(this.products).forEach((prodKey) => {
          if (simProd === this.products[prodKey].id) {
            similarArray.push(this.products[prodKey]);
          }
        })
      });
      return similarArray;
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.product__similar {
  margin-top: 81px;
  margin-bottom: 80px;
}

.product__similar-title {
  margin-bottom: 30px;
}

.popular__list-item {
  .card {
    margin-bottom: 15px;
  }
}

.slick-dots li button:before {
  content: "";
  opacity: 1;
  background: $neutral-primary;
  border-radius: 50%;
}

.slick-dots li.slick-active button:before {
  opacity: 1;
  background: $primary-color;
}
</style>
