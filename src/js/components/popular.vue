<template>
  <section class="popular">
    <div class="container">
      <h3 class="popular-title title title--h3">Популярные товары</h3>
      <ul class="panel__list popular__panel">
        <li class="panel__list-item popular__panel-item" v-for="type in types" :key="type.id">
          <button class="btn" @click="selectType(type.id)">{{ type.title }}</button>
        </li>
      </ul>
      <ul>
        <li v-for="popularItem in popular" :key="popularItem.id">
          <product-card v-bind:product=returnProduct(popularItem.id)></product-card>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "popular",
  data: function () {
    return {
      types: window.dataBase.types,
      popular: ''
    }
  },
  methods: {
    selectType: function (typeId) {
      this.popular = window.dataBase.popular[typeId]
    },
    returnProduct(productId) {
      console.log(window.dataBase.getProductById(productId))
      return window.dataBase.getProductById(productId);
    }
  }
}
</script>

<style scoped>

</style>
