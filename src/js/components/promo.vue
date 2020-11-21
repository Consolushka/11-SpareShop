<template>
  <section class="promo">
    <div class="container container--full">
      <article class="promo-item">
        <VueSlickCarousel :arrows="true" :dots="true" class="desktop-only promo-slider">
          <img v-for="i in items" :key="i" srcset="/assets/img/promo-zap-desk.jpg">
        </VueSlickCarousel>
        <img src="/assets/img/promo-zap.png" alt="Запчасти" class="promo-item-image mobile-only">
      </article>
    </div>
  </section>
</template>

<script>import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {VueSlickCarousel},
  name: "promo",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="scss">
.promo {
  margin-bottom: 50px;
}

.promo-item-image {
  width: 100%;
  height: auto;
}

.promo {

  .slick-next:before,
  .slick-prev:before {
    color: #fff;
  }

  .slick-next {
    right: 25px;
  }

  .slick-prev {
    z-index: 1;
    left: 25px;
  }

  .slick-dots {
    bottom: 15px;

    li {
      width: 18px;
      height: 18px;

      button:before {
        color: transparent;
        width: 18px;
        border-radius: 50%;
        height: 18px;
        border: 2px solid #fff;
      }
    }

    li.slick-active {
      button:before {
        background: #fff;
      }
    }
  }
}

@media (min-width: 1170px) {
  .promo {
    width: 74%;
    margin-right: 30px;
  }

  .promo-slider {
    width: 100%;
  }
}

.desktop-only {
  display: none;
}

.mobile-only {
  display: block;
}

@media (min-width: 1170px) {
  .desktop-only {
    display: block;
  }
  .mobile-only {
    display: none;
  }

  .flex-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
}

</style>
