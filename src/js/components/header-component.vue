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
        <button class="btn header-menu-btn">
          <svg width="33" height="27">
            <use xlink:href="/assets/img/sprite.svg#burger"></use>
          </svg>
        </button>
        <svg width="70" height="38">
          <use xlink:href="/assets/img/sprite.svg#logo"></use>
        </svg>
        <div class="header__user-options">
          <button class="btn header__user-options-item btn--icon">
            <svg width="26" height="23">
              <use xlink:href="/assets/img/sprite.svg#favorite"></use>
            </svg>
          </button>
          <button class="btn header__user-options-item btn--user">
            <svg width="21" height="25">
              <use xlink:href="/assets/img/sprite.svg#user"></use>
            </svg>
          </button>
          <button class="btn header__user-options-item btn--icon">
            <svg width="27" height="24">
              <use xlink:href="/assets/img/sprite.svg#basket"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <production></production>
  </header>
</template>

<script>
export default {
  name: "header-component"
}
</script>

<style scoped>

</style>
