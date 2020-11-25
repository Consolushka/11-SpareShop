<template>
  <div class="container">
    <ul class="route">
      <li class="route-item">
        Главная
        <svg width="6" height="10" class="route-item-arrow">
          <use xlink:href="/assets/img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </li>
      <li class="route-item">
        Шины
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "route"
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.route {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
}

.route-item {
  font-size: 14px;
  color: $neutral-secondary;
  text-decoration: underline;
}

.route-item-arrow {
  margin: 0 20px;
}

</style>
