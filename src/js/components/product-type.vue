<template>
  <section class="types">
    <div class="container">
      <article class="types__search">
        <div class="types__searching-panel panel">
          <ul class="panel__list">
            <li class="panel__list-item panel__list-item--active">
              <button class="btn">Поиск по Vin</button>
            </li>
            <li class="panel__list-item">
              <button class="btn">Поиск по Vin</button>
            </li>
            <li class="panel__list-item">
              <button class="btn">Поиск по Vin</button>
            </li>
            <li class="panel__list-item">
              <button class="btn">Поиск по Vin</button>
            </li>
          </ul>
          <form action="" class="panel__search-form form form--search">
            <label class="form-input-wrapper">
              <input type="text" class="panel__search-form-input form-input" placeholder="Введите марку автомобиля">
              <button class="btn btn--icon form--search-btn">
                <svg width="23" height="24">
                  <use xlink:href="/assets/img/sprite.svg#icon-search"></use>
                </svg>
              </button>
            </label>
          </form>
        </div>
      </article>
      <ul class="types__list">
        <li class="types__list-item card">
          <div class="types__list-item">
            <h4 class="types__list title title--h4"></h4>
            <button class="btn btn--reverse types__list-item-btn">Перейти
              <svg width="6" height="10">
                <use xlink:href="/assets/img/sprite.svg#icon-small-arrow"></use>
              </svg>
            </button>
          </div>
          <svg></svg>
          <div class="types__list-item">
            <h4 class="types__list title title--h4"></h4>
            <button class="btn btn--icon types__list-item-btn">Перейти
              <svg></svg>
            </button>
          </div>
          <svg></svg>
          <div class="types__list-item">
            <h4 class="types__list title title--h4"></h4>
            <button class="btn btn--icon types__list-item-btn">Перейти
              <svg></svg>
            </button>
          </div>
          <svg></svg>
          <div class="types__list-item">
            <h4 class="types__list title title--h4"></h4>
            <button class="btn btn--icon types__list-item-btn">Перейти
              <svg></svg>
            </button>
          </div>
          <svg></svg>
          <div class="types__list-item">
            <h4 class="types__list title title--h4"></h4>
            <button class="btn btn--icon types__list-item-btn">Перейти
              <svg></svg>
            </button>
          </div>
          <svg></svg>
          <div class="types__list-item">
            <h4 class="types__list title title--h4"></h4>
            <button class="btn btn--icon types__list-item-btn">Перейти
              <svg></svg>
            </button>
          </div>
          <svg></svg>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "product-type"
}
</script>

<style scoped>

</style>
