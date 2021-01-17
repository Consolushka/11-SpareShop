<template>
  <div class="container">
    <ul class="route">
      <li class="route-item">
        <a href="index.html">
          Главная
        </a>
        <svg width="6" height="10" class="route-item-arrow">
          <use xlink:href="/assets/img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </li>
      <li class="route-item" v-if="deep>=2">
        <a :href="'category.html?id='+type.id">
          {{ type.title }}
        </a>
        <svg width="6" height="10" class="route-item-arrow" v-if="deep>2">
          <use xlink:href="/assets/img/sprite.svg#icon-arrow-right"></use>
        </svg>
      </li>
      <li class="route-item" v-if="deep>=3">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "route",
  props: {
    deep: Number,
    products: Object,
    types: Array
  },
  computed: {
    product() {
      return this.products[Number(window.location.search.replace('?id=', ''))]
    },
    type() {
      let res;
      if (this.deep > 2) {
        this.types.forEach((typeItem) => {
          if (typeItem.prods.includes(Number(window.location.search.replace('?id=', '')))) {
            res = typeItem;
          }
        })
      } else {
        res = this.types[Number(window.location.search.replace('?id=', ''))]
      }
      return res;
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars";

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
