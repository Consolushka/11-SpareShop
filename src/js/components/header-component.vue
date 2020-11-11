<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <ul class="header-nav desktop-only">
          <li class="header-nav-item">
            <a href="#" class="header-nav-item-link">Магазины</a>
          </li>
          <li class="header-nav-item">
            <a href="#" class="header-nav-item-link">Акции</a>
          </li>
          <li class="header-nav-item">
            <a href="#" class="header-nav-item-link">Доставка и оплата</a>
          </li>
        </ul>
        <Push :width="242">
          <a id="home" href="#">
            <span>Войти</span>
          </a>
        </Push>
        <svg width="70" height="38">
          <use xlink:href="/assets/img/sprite.svg#icon-logo"></use>
        </svg>
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
          <button class="btn header__user-options-item btn--icon">
            <svg width="27" height="24">
              <use xlink:href="/assets/img/sprite.svg#icon-basket"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <production></production>
  </header>
</template>

<script>
import {Slide, Push} from 'vue-burger-menu'

export default {
  components: {
    Slide,
    Push
  },
  name: "header-component"
}
</script>

<style lang="scss">
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

.header__user-options {
  padding-top: 3px;
  display: flex;
}

.header__user-options-item {
  margin-right: 9.3px;
}

.line-style {
  height: 12%;
}

</style>
