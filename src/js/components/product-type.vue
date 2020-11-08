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
        <type-card v-for="type in this.types" :key="type.id" v-bind:typeObject=type></type-card>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "product-type",
  data: function () {
    return {
      types: window.dataBase.types
    }
  }
}
</script>

<style scoped>

</style>
