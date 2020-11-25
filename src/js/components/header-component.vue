<template>
  <header class="header" @addedProd="console.log('123123')">
    <div class="container">
      <div class="header-wrapper">
        <ul class="header-nav desktop-only">
          <li class="header-nav-item">
            <a href="#" class="link header-nav-item-link">Магазины</a>
          </li>
          <li class="header-nav-item">
            <a href="#" class="link header-nav-item-link">Акции</a>
          </li>
          <li class="header-nav-item">
            <a href="#" class="link header-nav-item-link">Доставка и оплата</a>
          </li>
        </ul>
        <Slide :width="'242'" class="mobile-only">
          <a id="home" href="#">
            <span>Войти</span>
          </a>
        </Slide>
        <a href="index.html" class="header-logo-wrapper">
          <svg class="header-logo">
            <use xlink:href="/assets/img/sprite.svg#icon-logo"></use>
          </svg>
        </a>
        <button class="header-location desktop-only btn btn--icon">
          <svg width="26" height="27">
            <use xlink:href="/assets/img/sprite.svg#icon-location"></use>
          </svg>
          <span>Санкт-Петербург, ул <br> Большая Конюшенная, д 19</span>
        </button>
        <div class="header__user-options">
          <button class="btn header__user-options-item btn--icon">
            <svg width="26" height="23">
              <use xlink:href="/assets/img/sprite.svg#icon-favorite"></use>
            </svg>
          </button>
          <button class="btn header__user-options-item btn--reverse">
            <svg width="21" height="25">
              <use xlink:href="/assets/img/sprite.svg#icon-user"></use>
            </svg>
          </button>
          <button class="btn header__user-options-item header__user-options-item--basket btn--icon">
            <svg width="27" height="24">
              <use xlink:href="/assets/img/sprite.svg#icon-basket"></use>
            </svg>
            <span class="header__user-options-item-count js-cart-count" style="display: none"></span>
          </button>
        </div>
      </div>
    </div>
    <production></production>
  </header>
</template>

<script>
import {Slide, Push} from 'vue-burger-menu'
import {eventBus} from '../../index.js'

export default {
  props: {
    cart: Object
  },
  components: {
    Slide,
    Push
  },
  name: "header-component",
  created() {
    eventBus.$on('addedProd', awesome => {
      document.querySelector('.js-cart-count').textContent = Object.keys(this.cart).length.toString();
      document.querySelector('.js-cart-count').removeAttribute("style");
    })
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";


.header {
  padding-top: 30px;
}

.header-menu-btn {
  padding-top: 3px;
}

.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 27px;
}

.header-logo {
  width: 70px;
  height: 38px;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  width: 457px;

  a {
    font-weight: 700;
    font-size: 20px;
  }
}

.header-location {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: $default-color;
  width: 330px;
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  font-family: $mainFont;

  svg {
    margin-right: 5px;
  }
}

.header__user-options {
  padding-top: 3px;
  display: flex;
}

.header__user-options-item {
  margin-right: 9.3px;

  &--basket {
    position: relative;
  }
}

.header__user-options-item-count {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translate(50%, 50%);
  background: $primary-color;
  border-radius: 50%;
  font-size: 13px;
  color: #ffffff;
}

.line-style {
  height: 12%;
}

@media (min-width: 1170px) {
  .header-wrapper {
    justify-content: flex-start;
    align-items: center;
  }

  .header-logo {
    width: 102px;
    height: 51px;
    margin: 0 auto;
  }

  .header__user-options {
    margin-left: auto;
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

  .header-nav.desktop-only {
    display: flex;
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
