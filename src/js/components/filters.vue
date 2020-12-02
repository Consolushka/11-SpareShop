<template>
  <div class="filters">
    <div class="container">
      <button class="filters__back btn btn--icon" @click="DisableSlide">
        <svg width="13" height="9">
          <use xlink:href="/assets/img/sprite.svg#icon-arrow-left"></use>
        </svg>
      </button>
      <p class="filters__form-title filters-title">Фильтры</p>
      <div class="filters__switch-wrapper">
        <button class="filters__form-title filters__switch btn"
                :class="{'filters__switch--active': formType==='params'}" @click="formType='params'">По параметрам
        </button>
        <button class="filters__form-title filters__switch btn" :class="{'filters__switch--active': formType==='mark'}"
                @click="formType='mark'">По марке
        </button>
      </div>
      <form class="filters__form">
        <div class="filters__form-season">
          <p class="filters__form-title filters__form-season-title">
            Сезонность
          </p>
          <div class="filters__form-season-wrapper">
            <label>
              <input name="season" value="summer" type="radio">
              <span>Летние</span>
            </label>
            <label>
              <input name="season" value="winter" type="radio">
              <span>Зимние</span>
            </label>
          </div>
        </div>
        <div v-if="formType==='params'">
          <div class="filters__form-type">
            <p class="filters__form-title filters__form-type-title">Тип шин</p>
            <div class="filters__form-type-wrapper">
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
              <p class="filters__form-title filters__form-price-title">Цена</p>
              <input type="range" min="0" max="25000">
              <div class="filters__form-price-state">

              </div>
            </div>
          </div>
          <div class="filter__form-diameter-wrapper">
            <p class="filters__form-title filter__form-diameter-title">Диаметр</p>
            <select name="diameter" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-profile-wrapper">
            <p class="filters__form-title filter__form-profile-title">Профиль</p>
            <select name="profile" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-width-wrapper">
            <p class="filters__form-title filter__form-width-title">Ширина</p>
            <select name="width" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
        </div>
        <div v-if="formType==='mark'">
          <div class="filter__form-mark-wrapper">
            <p class="filters__form-title filter__form-mark-title">Марка</p>
            <select name="mark" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-model-wrapper">
            <p class="filters__form-title filter__form-model-title">Модель</p>
            <select name="model" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-carcase-wrapper">
            <p class="filters__form-title filter__form-carcase-title">Кузов</p>
            <select name="carcase" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-mod-wrapper">
            <p class="filters__form-title filter__form-mod-title">Модификация</p>
            <select name="mod" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
        </div>
      </form>
    </div>
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
@import "src/assets/scss/utils/vars.scss";

.filters {
  font-size: 15px;
  color: $default-color;
  font-weight: 400;
  padding-top: 18px;
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateX(100%);
}

.filters-title {
  margin-bottom: 18px;
}

.filters__form-title {
  font-size: 16px;
  color: $default-color;
  font-weight: 600;
  margin-bottom: 15px;
}

.filters__back {
  text-align: center;
  position: absolute;
  top: 18px;
}

.filters-title {
  text-align: center;
}

.filters__switch-wrapper {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}

.filters__switch {
  color: $default-color;
  font-weight: 600;
  flex-grow: 1;
  padding: 10px 0;
  text-align: center;
  border: 1px solid #E0E0E0;

  &--active {
    color: #ffffff;
    border-color: $primary-color;
    background: $primary-color;
  }
}

.filters__form-season-title {
  font-size: 16px;
}

.filters__form-season-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 6px;
    margin-bottom: 15px;
  }
}

.filters__form-select {
  width: 100%;
  margin-bottom: 30px;
  padding: 12px 15px;
  border: 1px solid #E0E0E0;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: auto;
    right: 20px;
    top: 16px;
    width: 2px;
    height: 7px;
  }

  &::after {
    transform: rotate(-45deg);
  }

  &::before {
    transform: rotate(45deg);
  }
}

.filters__form-type-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
