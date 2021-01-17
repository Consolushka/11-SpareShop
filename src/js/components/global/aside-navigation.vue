<template>
  <div class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          <svg width="14" height="15" class="navigation-list-item-icon">
            <use xlink:href="/assets/img/sprite.svg#icon-user-small"></use>
          </svg>
          Войти
        </a>
      </li>
      <li class="navigation-list-item btn btn--icon">
        <a href="#" class=" btn btn--icon">
          <svg width="14" height="15" class="navigation-list-item-icon">
            <use xlink:href="/assets/img/sprite.svg#icon-user-small"></use>
          </svg>
          Регистрация
        </a>
      </li>
      <li class="navigation-list-item btn btn--icon">
        <a href="#" class=" btn btn--icon">
          <svg width="17" height="15" class="navigation-list-item-icon">
            <use xlink:href="/assets/img/sprite.svg#icon-favorite"></use>
          </svg>
          Избранное
        </a>
      </li>
      <li class="navigation-list-item btn btn--icon">
        <a href="#" class=" btn btn--icon">
          <svg width="13" height="15" class="navigation-list-item-icon">
            <use xlink:href="/assets/img/sprite.svg#icon-shops"></use>
          </svg>
          Магазины
        </a>
      </li>
      <li class="navigation-list-item btn btn--reverse">
        <a href="#" class=" btn btn--icon">
          <svg width="16" height="26" class="navigation-list-item-icon">
            <use xlink:href="/assets/img/sprite.svg#icon-percent"></use>
          </svg>
          Акции
        </a>
      </li>
      <li class="navigation-list-item btn btn--icon">
        <a href="#" class=" btn btn--icon">
          <svg width="16" height="15" class="navigation-list-item-icon">
            <use xlink:href="/assets/img/sprite.svg#icon-delivery"></use>
          </svg>
          Доставка
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Каталог запчастей
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Каталог ТО
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Шины
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Диски
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Аккумуляторы
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Автомасла
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Автолампы
        </a>
      </li>
      <li class="navigation-list-item">
        <a href="#" class=" btn btn--icon">
          Аксессуары
        </a>
      </li>
    </ul>
    <p class="navigation-address">Санкт-Петербург, ул Большая Конюшенная, д 19</p>
  </div>
</template>

<script>
// Жду на курсе по вью: https://tocode.ru/curses/vuejs-s-nylya-do-pro
// Скидка по промокоду: "WEBPACK" ;)
import {eventBus} from "../../../index";

export default {
  data() {
    return {
      message: 'Example Vue component'
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars";

.navigation {
  width: 242px;
  position: fixed;
  height: 100vh;
  transform: translateX(-242px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.navigation-list {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.navigation-list-item {
  flex-grow: 1;
  width: 100%;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  a {
    color: #000000;
  }
}

.navigation-list-item-icon {
  margin-right: 12px;
}

.navigation-address {
  font-weight: 700;
  font-size: 20px;
  padding-left: 43px;
  padding-right: 18px;
  color: $default-color;
}

@media (min-width: $desktopWidth) {
  .navigation {
    display: none;
  }
}
</style>
