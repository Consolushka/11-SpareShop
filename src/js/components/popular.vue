<template>
  <section class="popular">
    <div class="container">
      <h3 class="popular-title title title--h3">Популярные товары</h3>
      <types-panel :types="types" @changed-type="changeType"></types-panel>
      <div class="popular__list">
        <VueSlickCarousel v-if="clientWidth<1170" :arrows="true" :dots="true">
          <article class="popular__list-item" v-for="popularItem in popularProducts" :key="popularItem.id">
            <card-product
              :product="popularItem"
              :user="user"
              @addedProd="added"
            ></card-product>
          </article>
        </VueSlickCarousel>
        <div v-else>
          <VueSlickCarousel :arrows="true" :dots="true" v-if="popularListLength>4" :slidesToShow="3"
                            :slidesToScroll="1">
            <article class="popular__list-item" v-for="popularItem in popularProducts" :key="popularItem.id">
              <card-product
                :product="popularItem"
                :user="user"
                @addedProd="added"
              ></card-product>
            </article>
          </VueSlickCarousel>
        </div>
        <div class="popular__list-wrapper" v-else>
          <article class="popular__list-item" v-for="popularItem in popularProducts" :key="popularItem.id">
            <card-product
              :product="popularItem"
              :user="user"
              @addedProd="added"
            ></card-product>
          </article>
        </div>
      </div>
      <a href="#" class="btn btn--classic popular-more">Показать еще</a>
    </div>
  </section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {VueSlickCarousel},
  name: "popular",
  props: {
    types: Array,
    populars: Object,
    products: Object,
    user: Object
  },
  data: function () {
    return {
      currentTypeID: 0,
      popProducts: {}
    }
  },
  computed: {
    clientWidth() {
      return document.documentElement.clientWidth;
    },
    popularList() {
      return this.populars[this.currentTypeID]
    },
    popularListLength() {
      let count = 0;
      this.popularList.forEach((item, i) => {
        count = i;
      })
      console.log(count);
      return count;
    },
    popularProducts() {
      if (this.popProducts[this.currentTypeID]) {
        console.log(this.popProducts[this.currentTypeID]);
        return this.popProducts[this.currentTypeID];
      }

      return this.popProducts[this.currentTypeID] = Object.fromEntries(Object.entries(this.products).filter(([key, value]) => {
        return this.popularList.includes(parseInt(key))
      }));
    }
  },
  methods: {
    changeType(id) {
      this.currentTypeID = id;
    },
    added(len) {
      this.$emit('added-prod', len);
    }
  }
}
</script>

<style lang="scss">

@import "src/assets/scss/utils/vars.scss";

.popular {
  text-align: center;
  margin-bottom: 80px;
}

.popular-title {
  margin-bottom: 25px;
}

.popular .panel__list-item .btn {
  text-transform: lowercase;
}

.popular__list {
  margin-bottom: 40px;
}

.popular-more {
  margin: 0 auto;
  width: 252px;
  padding: 16px;
}

.popular {
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
  .popular__list-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .popular__list-item {
    width: 270px;
  }
}
</style>
