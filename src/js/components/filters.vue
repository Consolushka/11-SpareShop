<template>
  <div class="filters">
    <button class="btn btn--icon" @click="DisableSlide">
      <svg width="13" height="9">
        <use xlink:href="/assets/img/sprite.svg#icon-arrow-left"></use>
      </svg>
    </button>
    <h3 class="title title--h3">Фильтры</h3>
    <div class="filters__switch">
      <button class="btn filters__switch">По параметрам</button>
      <button class="btn filters__switch">По марке</button>
    </div>
    <form class="filters__form">
      <label>
        <input name="season" value="summer" type="radio">
        Летние
      </label>
      <label>
        <input name="season" value="winter" type="radio">
        Зимние
      </label>
      <div v-if="formType==='params'">
        <div class="filters__form-type-wrapper">
          <div class="filters__form-type-title">Тип шин</div>
          <label>
            <input name="spare-type" value="all" type="checkbox">
            Все
          </label>
          <label>
            <input name="spare-type" value="studded" type="checkbox">
            Шипованные
          </label>
          <label>
            <input name="spare-type" value="not-studded" type="checkbox">
            Не шипованные
          </label>
        </div>
        <div class="filters__form-price-wrapper">
          <div class="filters__form-price-title">Тип шин</div>
          <input type="range" min="0" max="25000">
          <div class="filters__form-price-state">

          </div>
        </div>
        <div class="filter__form-diameter-wrapper">
          <p class="filter__form-diameter-title">Диаметр</p>
          <select name="diameter">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
        <div class="filter__form-profile-wrapper">
          <p class="filter__form-profile-title">Профиль</p>
          <select name="profile">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
        <div class="filter__form-width-wrapper">
          <p class="filter__form-width-title">Ширина</p>
          <select name="width">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
      </div>
      <div v-if="formType==='mark'">
        <div class="filter__form-mark-wrapper">
          <p class="filter__form-mark-title">Марка</p>
          <select name="mark">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
        <div class="filter__form-model-wrapper">
          <p class="filter__form-model-title">Модель</p>
          <select name="model">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
        <div class="filter__form-carcase-wrapper">
          <p class="filter__form-carcase-title">Кузов</p>
          <select name="carcase">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
        <div class="filter__form-mod-wrapper">
          <p class="filter__form-mod-title">Модификация</p>
          <select name="mod">
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "filters",
  data() {
    return {
      formType: "mark"
    }
  },
  methods: {
    DisableSlide() {
      document.querySelector("body").classList.remove("js-slide-left");
    }
  }
}
</script>

<style lang="scss">
.filters {
  position: absolute;
  width: 100%;
  transform: translateX(100%);
}
</style>
