<template>
  <a :href="'product.html?id='+product.id" class="card">
    <div class="card__features">
      <div v-if="this.product.isSale" class="card__features__sales">sale</div>
      <button class="btn btn--icon card__features-item card__features__favorite"
              :class="{'card__features__favorite--active': isActive}"
              @click.prevent="addToFav(product.id); isActive = !isActive">
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
      <h4 class="card__info-title title title--h4">
        {{ product.title }}
      </h4>
      <p class="card__info-price" v-if="product.inStock!==0">{{ product.price }} &#8381</p>
      <p class="card__info-price" v-else>Нет в наличии</p>
    </div>
    <button class="btn btn--icon btn--buy card__buy" @click.prevent="addToCart(product.id)">
      <svg width="20" height="24">
        <use xlink:href="/assets/img/sprite.svg#icon-packet"></use>
      </svg>
    </button>
  </a>
</template>

<script>
import {eventBus} from '../../../index.js'

export default {
  name: "product-card",
  props: {
    product: Object,
    user: Object
  },
  methods: {
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
    }
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars';

.card {
  color: $default-color;
  display: block;
  text-align: center;
  border: 1px solid #CDCDCD;
  border-radius: 3px;
  transition-duration: 300ms;
  padding-bottom: 31px;
  position: relative;
  height: 403px;
  margin-bottom: 30px;

  &:after {
    position: absolute;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    padding: 18px 22px;
    content: "быстрый просмотр";
    color: $default-color;
    background: #FFFFFF;
    opacity: 0.9;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &:hover {
    border-color: transparent;
    box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
    color: $primary-color;

    &:after {
      display: block;
    }
  }
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

.card__img {
  margin-bottom: 15px;
}

.card__info-title {
  margin-bottom: 20px;
}

.card__info-price {
  font-size: 30px;
  font-weight: 700;

}

.card__buy {
  position: absolute;
  right: 0;
  bottom: 0;
}

.card__features__favorite--active {
  svg {
    fill: $primary-color;
    stroke: $primary-color;
  }
}

</style>
