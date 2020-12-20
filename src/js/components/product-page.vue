<template>
  <div class="container">
    <section class="product">
      <div class="product-info">
        <h2 class="product__info-title title title--h2">{{ product.title }}</h2>
        <p class="product__info-id">Код товара - {{ product.id }}</p>
      </div>
      <div class="product__image">
        <svg class="product__image-season product__image-season--winter" v-show="product.isWinter">
          <svg width="28" height="31">
            <use xlink:href="/assets/img/sprite.svg#icon-winter"></use>
          </svg>
        </svg>
        <svg class="product__image-season product__image-season--summer" v-show="product.isSummer">
          <svg width="28" height="31">
            <use xlink:href="/assets/img/sprite.svg#icon-summer"></use>
          </svg>
        </svg>
        <img class="products__info-image" :src="product.imgPath" :alt="product.title">
        <button class="btn btn--primary">Купить</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "product-page",
  props: {
    products: Object
  },
  data() {
    return {
      product: this.products[Number(window.location.search.replace('?id=', ''))]
    }
  },
  mounted() {
    console.log(this.products);
  }
}
</script>

<style scoped>

</style>
