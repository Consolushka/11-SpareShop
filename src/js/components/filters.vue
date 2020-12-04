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
            <label class="filters__form-season-state" :class="{'filters__form-season-state--active':isSummer}"
                   @click="isSummer = true; isWinter=false;">
              <span>Летние</span>
              <input name="season" class="visually-hidden" value="summer" type="radio">
            </label>
            <label class="filters__form-season-state" :class="{'filters__form-season-state--active':isWinter}"
                   @click="isSummer = false; isWinter=true;">
              <input name="season" class="visually-hidden" value="winter" type="radio">

              <span>Зимние</span>
            </label>
          </div>
        </div>
        <div v-show="formType==='params'">
          <div class="filters__form-type">
            <p class="filters__form-title filters__form-type-title">Тип шин</p>
            <div class="filters__form-type-wrapper">
              <label class="filters__form-checkbox">
                <input name="spare-type" class="visually-hidden" value="all" type="checkbox">
                Все
              </label>
              <label class="filters__form-checkbox">
                <input name="spare-type" class="visually-hidden" value="studded" type="checkbox">
                Шипованные
              </label>
              <label class="filters__form-checkbox">
                <input name="spare-type" class="visually-hidden" value="not-studded" type="checkbox">
                Не шипованные
              </label>
            </div>
            <div class="filters__form-price-wrapper">
              <p class="filters__form-title filters__form-price-title">Цена</p>
              <input type="range" min="0" max="25000" class="visually-hidden">
              <div class="filters__form-price">
                <div class="filters__form-price-curr"></div>
                <span class="btn filters__form-price-toggle filters__form-price-toggle--start"
                      @mousedown="StartDown"></span>
                <span class="btn filters__form-price-toggle filters__form-price-toggle--end"
                      @mousedown="EndDown"></span>
              </div>
              <div class="filters__form-price-state">

              </div>
            </div>
          </div>
          <div class="filter__form-diameter-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filter__form-diameter-title">Диаметр</p>
            <select name="diameter" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-profile-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filter__form-profile-title">Профиль</p>
            <select name="profile" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-width-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filter__form-width-title">Ширина</p>
            <select name="width" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
        </div>
        <div v-show="formType==='mark'">
          <div class="filter__form-mark-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filter__form-mark-title">Марка</p>
            <select name="mark" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-model-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filter__form-model-title">Модель</p>
            <select name="model" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-carcase-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filter__form-carcase-title">Кузов</p>
            <select name="carcase" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filter__form-mod-wrapper filters__form-select-wrapper">
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
      formType: "mark",
      isWinter: false,
      isSummer: false
    }
  },
  methods: {
    DisableSlide() {
      document.querySelector("body").classList.remove("js-slide-left");
    },
    moveStart(mouseEvt) {
      let toggle = document.querySelector(".filters__form-price-toggle--start");
      toggle.setAttribute("style", `left: ${mouseEvt.clientX - toggle.clientWidth * 2}px`);
      this.range();
    },
    moveEnd(mouseEvt) {
      let toggle = document.querySelector(".filters__form-price-toggle--end");
      toggle.setAttribute("style", `left: ${mouseEvt.clientX - toggle.clientWidth * 2}px`);
      this.range();
    },
    StartDown(e) {
      e.target.addEventListener("mousemove", this.moveStart);
      e.target.addEventListener("mouseup", () => {
        e.target.removeEventListener("mousemove", this.moveStart)
      });
    },
    EndDown(e) {
      e.target.addEventListener("mousemove", this.moveEnd);
      e.target.addEventListener("mouseup", () => {
        e.target.removeEventListener("mousemove", this.moveEnd)
      });
    },
    range() {
      let PriceRange = document.querySelector(".filters__form-price");
      let RangeCurr = PriceRange.querySelector(".filters__form-price-curr");
      let toggleStart = PriceRange.querySelector(".filters__form-price-toggle--start").getBoundingClientRect();
      let toggleEnd = PriceRange.querySelector(".filters__form-price-toggle--end").getBoundingClientRect();
      let width = toggleEnd.x - toggleStart.x;
      RangeCurr.setAttribute("style", `left: ${toggleStart.x - 16}px; width: ${width}px; right: ${toggleEnd.x - 16}px`);

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
}

.filters__form-season-state {
  display: flex;
  margin: 0 -16px 15px -16px;
  padding: 0 25px 6px 16px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;

  &::after {
    display: none;
    width: 14px;
    height: 14px;
    background: $primary-color;
    color: #ffffff;
    content: "✔";
  }

  &--active {
    &::after {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.filters__form-select-wrapper {
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: auto;
    right: 20px;
    top: 50px;
    width: 3px;
    background: $default-color;
    height: 10px;
    transition-duration: 300ms;
  }

  &:hover {
    &::after,
    &::before {
      background: $primary-color;
    }

    &::after {
      transform: translateX(-200%) rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }

  &::after {
    transform: translateX(-200%) rotate(-45deg);
  }

  &::before {
    transform: rotate(45deg);
  }
}

.filters__form-select {
  width: 100%;
  appearance: none;
  margin-bottom: 30px;
  padding: 12px 15px;
  border: 1px solid #E0E0E0;
}

.filters__form-type-wrapper {
  display: flex;
  flex-direction: column;
}

.filters__form-checkbox {
  padding-left: 20px;
}

.filters__form-checkbox input {
  position: relative;

  &::before,
  &::after {
    position: absolute;
    left: -8px;
    top: -50%;
    transform: translate(-50%, -100%);
    content: "";
    display: block;
  }

  &::before {
    width: 12px;
    height: 12px;
    border: 1.5px solid $primary-color;
    border-radius: 1px;
  }

  &::after {
    display: none;
    width: 7px;
    height: 7px;
    transform: translate(-50%, -135%);
    background: $primary-color;
  }

  &:checked {
    &::after {
      display: block;
    }
  }
}

.filters__form-price-wrapper {
  padding-bottom: 30px;
}

.filters__form-price {
  width: 100%;
  height: 2px;
  background: $neutral-light;
  position: relative;
}

.filters__form-price-toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: $primary-color;

  &--start {
    left: 0;
  }

  &--end {
    right: 0;
  }
}

.filters__form-price-curr {
  position: absolute;
  width: 98%;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  right: 3px;
  background: $primary-color;
}
</style>
