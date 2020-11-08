<template>
  <a href="" class="card">
    <div class="card__features">
      <div v-if="this.product.isSale" class="card__features__sales">sale</div>
      <button class="btn btn--icon card__features-item card__features__favorite">
        <svg width="25" height="22">
          <use xlink:href="/assets/img/sprite.svg#icon-favorite"></use>
        </svg>
      </button>
      <div v-if="this.product.isWinter" class="card__features-item card__features__winter">
        <svg width="28" height="31">
          <use xlink:href="/assets/img/sprite.svg#icon-winter"></use>
        </svg>
      </div>
      <div v-if="this.product.isSummer" class="card__features-item card__features__summer">
        <svg width="31" height="31">
          <use xlink:href="/assets/img/sprite.svg#icon-summer"></use>
        </svg>
      </div>
    </div>
    <img :src=product.imgPath :alt=product.title>
  </a>
</template>

<script>
export default {
  name: "product-card",
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>
