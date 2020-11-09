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
        <type-card v-for="type in types" :key="type.id" :typeObject=type></type-card>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "product-type",
  props: {
    types: Array
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.types {
  margin-bottom: 80px;
}

.types__search {
  margin-bottom: 80px;
}

.panel__list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-bottom: 15px;
}

.panel__list-item {
  white-space: nowrap;
  margin-right: 40px;
  font-size: 20px;

  &--active {
    font-weight: 600;
    border-bottom: 2px solid $primary-color;
  }
}

.panel__search-form-input-wrapper {
  position: relative;
}

.panel__search-form-input {
  padding: 15px;
  padding-left: 10px;
}

.types__list-item {
  height: 129px;
  margin-bottom: 30px;
  position: relative;
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid #CDCDCD;
  border-radius: 3px;
  transition-duration: 300ms;

  &:hover {
    .types__list-item-go {
      color: darken(#c4c4c4, 25%);
    }

    border-color: $default-color;

    .types__list-item-icon {
      svg {
        fill: none;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.types__list-item-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.types__list-item-title {
  font-weight: 700;
  padding-right: 40px;
  color: $default-color;
  font-size: 23px;
}

.types__list-item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 89px;
}

.types__list-item-icon {
  background-color: $primary-color;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 49px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: none;
  }
}

.types__list-item-go {
  font-weight: 400;
  transition-duration: 300ms;
  font-size: 20px;
  color: #C4C4C4;
}

</style>
