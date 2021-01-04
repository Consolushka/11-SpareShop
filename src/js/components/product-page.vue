<template>
  <div class="container">
    <section class="product">
      <div class="product__main">
        <h2 class="product__main-title title title--h2">{{ product.title }}</h2>
        <p class="product__main-id">Код товара - {{ product.id }}</p>
        <div class="product__main-features" v-if="!smallScreen">
          <button class="btn btn--icon card__features-item card__features__favorite"
                  :class="{'card__features__favorite--active': isInFav}"
                  @click.prevent="addToFav(product.id); isInFav = !isInFav">
            <svg width="25" height="22">
              <use xlink:href="/assets/img/sprite.svg#icon-favorite"></use>
            </svg>
          </button>
          <button class="btn btn--icon card__features-item card__features__compare"
                  :class="{'card__features__compare--active': isInFav}"
                  @click.prevent="startCompare">
            <svg width="20" height="27">
              <use xlink:href="/assets/img/sprite.svg#icon-compare"></use>
            </svg>
          </button>
          <div class="product__main-features-rating">
            <svg
              width="23" height="23"
              class="btn btn--icon product__main-features-rating-star"
              v-for="(item,index) in 5"
              :class="{'product__main-features-rating-star--active': index+1<=product.rating}">
              <use xlink:href="/assets/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div v-if="!smallScreen">
          <types-panel :types="types" @changed-type="changeType"></types-panel>
          <div class="product__main-char" v-if="currentTypeId===0">
            <div class="product__main-char-item" v-for="char in product.char" :key="char.name">
              <p class="product__main-char-item-name">{{ char.name }}</p>
              <p class="product__main-char-item-value">{{ char.value }}</p>
            </div>
          </div>
          <div class="product__main-stock" v-if="currentTypeId===1">
            <p>Наличие на складе</p>
          </div>
        </div>
        <button class="btn btn--primary product__main-buy" v-if="!smallScreen" @click="addToCart">Купить</button>
      </div>
      <div class="product__image">
        <svg class="product__image-season product__image-season--winter" v-show="product.isWinter" width="28"
             height="31">
          <use xlink:href="/assets/img/sprite.svg#icon-winter"></use>
        </svg>
        <svg class="product__image-season product__image-season--summer" v-show="product.isSummer" width="28"
             height="31">
          <use xlink:href="/assets/img/sprite.svg#icon-summer"></use>
        </svg>
        <img class="products__image-pic" :src="product.imgPath" :alt="product.title">
        <p class="product__image-price title title--h1">{{ product.price.toLocaleString('ru') }} &#8381</p>
        <button class="btn btn--primary product__image-buy" v-if="smallScreen" @click="addToCart">Купить</button>
      </div>
      <div class="product__info" v-if="smallScreen">
        <vsa-list>
          <vsa-item v-for="item in listOfItems" :key="item.id">
            <vsa-heading>
              Название группы
            </vsa-heading>
            <vsa-content>
              Контент группы
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>
    </section>
  </div>
</template>

<script>

import {eventBus} from "../../index";

export default {
  name: "product-page",
  props: {
    products: Object,
    user: Object
  },
  data() {
    return {
      product: this.products[Number(window.location.search.replace('?id=', ''))],
      listOfItems: 4,
      settings: {
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
      types: [
        {
          id: 0,
          title: "Характеристики"
        },
        {
          id: 1,
          title: "Наличие на складе"
        }
      ],
      currentTypeId: 0,
      isInFav: false
    }
  },
  mounted() {
    this.changeType(0);
  },
  computed: {
    smallScreen() {
      if (document.documentElement.clientWidth < 1170) {
        return true;
      }
    },
    similarProducts() {
      let similarArray = [];
      this.product.similar.forEach((simProd) => {
        Object.keys(this.products).forEach((prodKey) => {
          if (simProd === this.products[prodKey].id) {
            similarArray.push(this.products[prodKey]);
          }
        })
      });
      return similarArray;
    }
  },
  methods: {
    changeType(id) {
      this.currentTypeId = id;
    },
    addToCart(id) {
      if (Object.keys(this.user.cart).includes(id.toString())) {
        this.user.cart[id].count++;
        eventBus.$emit('changedCountOfCartItem');
      } else {
        this.user.cart[id] = {id: id, count: 1};
        eventBus.$emit('addedProd', Object.keys(this.user.cart).length)
      }
    },
    addToFav(id) {
      if (!this.user.favorites.includes(id)) {
        this.user.favorites.push(id);
        console.log(this.user.favorites);
      }
    },
    startCompare() {
      console.log("comparing");
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.hidden {
  display: none;
}

.product {
  display: flex;
  flex-direction: column;

  .showed {
    display: block;
  }
}

.product__main-title {
  margin-bottom: 15px;
}

.product__main-id {
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 30px;
}

.product__main-buy {
  width: 177px;
}

.product__image {
  margin-bottom: 84px;
}

.product__image-season {
  display: block;
  margin-left: auto;
  margin-right: 0;
}

.products__image-pic {
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
}

.product__image-price {
  margin-bottom: 15px;
  text-align: center;
}

.product__image-buy {
  width: 100%;
}

.vsa-list {
  border: none;
}

.vsa-item {
  margin-bottom: 20px;
  border: none;
  background: #F9F9FC;
  border-bottom: none;
}

.vsa-item--is-active .vsa-item__heading, .vsa-item:not(:last-of-type) {
  border-bottom: none;
  border-top: none;
}

.vsa-item__trigger__content {
  font-weight: 400;
  font-size: 20px;
}

@media (min-width: 1170px) {
  .product {
    position: relative;
    flex-direction: row;

    .panel__list-item-btn--active {
      color: $primary-color;
    }
  }

  .product__main-title {
    font-size: 30px;
  }

  .product__main {
    flex-grow: 1;
    order: 2;
  }

  .product__main-features {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
  }

  .product__main-features-rating {
    display: flex;
    justify-content: flex-start;
  }

  .product__main-features-rating-star {
    margin-right: 7px;
    fill: #E2E2E2;

    &--active {
      fill: $primary-color;
    }
  }

  .product__main-char-item {
    border-bottom: 1px solid $neutral-primary;
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
    margin-bottom: 15px;
  }

  .product__main-char-item-name {
    width: 60%;
  }

  .product__main-char-item-value {
    width: 40%;
    text-align: left;
  }

  .product__image {
    margin-right: 125px;
  }
}
</style>
