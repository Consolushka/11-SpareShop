<template>
  <div class="filters">
    <div class="container">
      <button class="filters__back btn btn--icon" @click="DisableSlide" v-show="clientWidth<1170">
        <svg width="13" height="9">
          <use xlink:href="/assets/img/sprite.svg#icon-arrow-left"></use>
        </svg>
      </button>
      <p class="filters__form-title filters-title">Фильтры</p>
      <div class="filters__switch-wrapper">
        <button class="filters__form-title filters__switch btn js-filters-param"
                :class="{'filters__switch--active': formType==='params'}" @click="GetCoef">По параметрам
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
              <input name="season" class="visually-hidden" value="summer" type="radio" @change="ChangeSeason">
            </label>
            <label class="filters__form-season-state" :class="{'filters__form-season-state--active':isWinter}"
                   @click="isSummer = false; isWinter=true;">
              <input name="season" class="visually-hidden" value="winter" type="radio" @change="ChangeSeason">

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
                      @mousedown="ToggleStartDown"></span>
                <span class="btn filters__form-price-toggle filters__form-price-toggle--end"
                      @mousedown="ToggleEndDown"></span>
              </div>
              <div class="filters__form-price-state">
                <label class="filters__form-price-state-curr">
                  от
                  <input type="text" @change="SetPrice(false)"
                         class="filters__form-price-state-input filters__form-price-state-input--start" value="0"
                         min="0">
                </label>
                <label class="filters__form-price-state-curr">
                  до
                  <input type="text" @change="SetPrice(false)"
                         class="filters__form-price-state-input filters__form-price-state-input--end" value="25000"
                         max="25000">
                </label>
              </div>
            </div>
          </div>
          <div class="filters__form-diameter filters__form-select-wrapper">
            <p class="filters__form-title filters__form-diameter-title">Диаметр</p>
            <select name="diameter" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filters__form-profile-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filters__form-profile-title">Профиль</p>
            <select name="profile" class="filters__form-profile filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filters__form-width-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filters__form-width-title">Ширина</p>
            <select name="width" class="filters__form-width filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
        </div>
        <div v-show="formType==='mark'">
          <div class="filters__form-mark-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filters__form-mark-title">Марка</p>
            <select name="mark" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filters__form-model-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filters__form-model-title">Модель</p>
            <select name="model" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filters__form-carcase-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filters__form-carcase-title">Кузов</p>
            <select name="carcase" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div class="filters__form-mod-wrapper filters__form-select-wrapper">
            <p class="filters__form-title filters__form-mod-title">Модификация</p>
            <select name="mod" class="filters__form-select">
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
        </div>
        <button class="filters__form-show btn btn--primary" @click="renderProducts" type="button">Показать</button>
      </form>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../../index";

const CONTAINER_PADDING = 14;

export default {
  name: "filters",
  props: {
    products: Object
  },
  data() {
    return {
      formType: "mark",
      isWinter: false,
      isSummer: false,
      priceCoef: 0,
      desktopMargin: this.clientWidth - 1170,
      currProds: []
    }
  },
  mounted() {
    if (this.clientWidth > 1170) {
      document.querySelector(".js-filters-param").textContent = "Параметры";
    }
  },
  computed: {
    clientWidth() {
      return document.documentElement.clientWidth;
    }
  },
  methods: {
    DisableSlide() {
      document.querySelector("body").classList.remove("js-slide-left");
    },
    MoveToggleStart(e) {
      let toggleStart = document.querySelector(".filters__form-price-toggle--start");
      let toggleEnd = document.querySelector(".filters__form-price-toggle--end");
      let mousePos = e.x - toggleStart.clientWidth / 2;
      let nextPos = mousePos - CONTAINER_PADDING;
      if (this.clientWidth >= 1170) {
        nextPos = mousePos - (this.clientWidth - 1170) / 2 + 9;
      }
      if (Math.trunc(nextPos + 1) >= 0) {
        if (mousePos + 30 <= toggleEnd.getBoundingClientRect().x) {
          toggleStart.setAttribute("style", `left: ${Math.trunc(nextPos)}px`);
          this.SetPrice(true);
        }
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", this.MoveToggleStart);
      })
    },
    MoveToggleEnd(e) {
      let toggleStart = document.querySelector(".filters__form-price-toggle--start");
      let toggleEnd = document.querySelector(".filters__form-price-toggle--end");
      let mousePos = e.x - toggleEnd.clientWidth / 2;
      let nextPos = mousePos - CONTAINER_PADDING;
      mousePos += 1;
      if (this.clientWidth >= 1170) {
        nextPos = mousePos - (this.clientWidth - 1170) / 2 + 9;
      }
      if (Math.trunc(mousePos + 1) * this.priceCoef <= 25000) {
        if (mousePos - 30 >= toggleStart.getBoundingClientRect().x) {
          toggleEnd.setAttribute("style", `left: ${Math.trunc(nextPos)}px`);
          this.SetPrice(true);
        }
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", this.MoveToggleEnd);
      })
    },
    ToggleStartDown() {
      document.addEventListener("mousemove", this.MoveToggleStart);
    },
    ToggleEndDown() {
      document.addEventListener("mousemove", this.MoveToggleEnd);
    },
    GetCoef() {
      this.formType = 'params';
      window.setTimeout(() => {
        if (this.priceCoef === 0) {
          this.priceCoef = 25000 / Math.trunc(document.querySelector(".filters__form-price-toggle--end").getBoundingClientRect().x);
        }
        console.log(this.priceCoef);
        this.SetPrice(true);
      }, 100);
    },
    SetPrice(isToggle) {
      let wrapper = document.querySelector(".filters__form-price-wrapper");
      let toggleStart = wrapper.querySelector(".filters__form-price-toggle--start");
      let toggleEnd = wrapper.querySelector(".filters__form-price-toggle--end");
      let inputStart = wrapper.querySelector(".filters__form-price-state-input--start");
      let inputEnd = wrapper.querySelector(".filters__form-price-state-input--end");
      if (isToggle) {
        inputStart.value = Math.trunc((Math.trunc(toggleStart.getBoundingClientRect().x) - CONTAINER_PADDING - 1) * this.priceCoef);
        if (this.clientWidth >= 1170) {
          inputStart.value = Math.trunc((Math.trunc(toggleStart.getBoundingClientRect().x - (this.clientWidth - 1170) / 2 + 9)) * this.priceCoef);
        }
        inputEnd.value = Math.trunc(Math.trunc(toggleEnd.getBoundingClientRect().x) * this.priceCoef);
      } else {
        toggleStart.setAttribute("style", `left: ${inputStart.value / this.priceCoef}px`);
        toggleEnd.setAttribute("style", `left: ${inputEnd.value / this.priceCoef - CONTAINER_PADDING}px`);
      }
      let rangeWidth = toggleEnd.getBoundingClientRect().x - toggleStart.getBoundingClientRect().x;
      let rangeLeft = toggleStart.getBoundingClientRect().x - CONTAINER_PADDING;
      if (this.clientWidth >= 1170) {
        rangeLeft -= (this.clientWidth - 1170) / 2 - CONTAINER_PADDING - 9;
      }
      wrapper.querySelector(".filters__form-price-curr").setAttribute("style", `width: ${rangeWidth}px; left: ${rangeLeft}px`);
    },
    DrawRange() {

    },
    renderProducts() {
      this.currProds = [];
      Object.keys(this.products).forEach((prod) => {
        if (this.isWinter === this.isSummer) {
          this.currProds.push(this.products[prod]);
        } else {
          if (this.isWinter === true) {
            if (this.products[prod].isWinter === true) {
              this.currProds.push(this.products[prod]);
            }
          } else {
            if (this.isSummer === true) {
              if (this.products[prod].isSummer === true) {
                this.currProds.push(this.products[prod]);
              }
            }
          }
        }
      });
      console.log(this.currProds);
      eventBus.$emit("renderProds", this.currProds);
    },
    ChangeSeason() {
      console.log("change");
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
  height: 100vh;
  top: 0;
  width: 100%;
  transform: translateX(calc(100vw - 16px));
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

  &:active {
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
  margin-bottom: 20px;
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
    left: -1px;
  }

  &--end {
    right: 1px;
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

.filters__form-price-state {
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
}


.filters__form-price-state-curr input {
  width: 50px;
  border-bottom: 1px solid $neutral-light;
}

@media (min-width: 1170px) {
  .filters {
    position: static;
    transform: none;
    width: 270px;
    margin-right: 19px;

    .container {
      padding: 0;
    }
  }

  .filters__switch {
    border: none;
    opacity: 0.5;
    text-transform: uppercase;

    &--active {
      background: none;
      color: $default-color;
      border-bottom: 1px solid $primary-color;
      opacity: 1;
    }
  }

  .filters__form-season-state {
    margin: 0;
    margin-bottom: 15px;
    border: none;
  }


  .filters__form-season-wrapper {
    flex-direction: row;
  }

  .filters__form-season-state {

    &::after {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      width: 14px;
      height: 14px;
      margin-left: 15px;
      background: $primary-color;
      color: #ffffff;
      content: "✔";
    }

    &--active {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
