<template>
  <div class="production-wrapper">
    <hr class="js-production-hr" :style="returnMargin">
    <ul class="production-list container container--left">
      <li class="production-list-item">
        <button class="btn btn--toggle">Каталог запчастей</button>
      </li>
      <li class="production-list-item">
        <button class="btn btn--toggle">Каталог ТО</button>
      </li>
      <li class="production-list-item production-list-item--active">
        <button class="btn btn--toggle">Шины</button>
      </li>
      <li class="production-list-item">
        <button class="btn btn--toggle">Диски</button>
      </li>
      <li class="production-list-item">
        <button class="btn btn--toggle">Аккумуляторы</button>
      </li>
      <li class="production-list-item">
        <button class="btn btn--toggle">Автомасла</button>
      </li>
      <li class="production-list-item">
        <button class="btn btn--toggle">Автолампы</button>
      </li>
      <li class="production-list-item">
        <button class="btn btn--toggle">Аксессуары</button>
      </li>
    </ul>
    <div class="production-fading mobile-only"></div>
    <hr class="js-production-hr" :style="returnMargin">
  </div>
</template>

<script>
export default {
  name: "production",
  computed: {
    returnMargin() {
      return "margin: 0 -" + Math.floor(((document.documentElement.clientWidth - 1170 - 16) / 2)).toString() + "px";
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.production-wrapper {
  position: relative;
  margin-bottom: 28px;

  hr {
    margin: 0;
  }
}

.production-fading {
  position: absolute;
  width: 25%;
  left: auto;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(270.12deg, #FFFFFF 0.16%, rgba(255, 255, 255, 0) 96.64%);
}

.production-list {
  padding: 14px 0;
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.production-list-item {
  font-size: 18px;
  margin-right: 15px;
  white-space: nowrap;
}

@media (min-width: 1170px) {
  .production-list {
    justify-content: space-between;
    overflow: visible;
  }

  .production-list-item {
    margin: 0;
    font-size: 20px;
    position: relative;

    &--active {

      &:before {
        position: absolute;
        bottom: -15.5px;
        content: "";
        width: 100%;
        height: 3px;
        background: $primary-color;
      }
    }
  }
}
</style>
