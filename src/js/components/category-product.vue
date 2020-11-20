<template>
  <section class="category">
    <div class="container">
      <h2 class="category-title">Шины</h2>
      <div class="category__render">
        <button class="btn btn--icon category__render-sort">
          <svg width="13" height="19">
            <use xlink:href="/assets/img/sprite.svg#icon-sort"></use>
          </svg>
          По популярности
        </button>
        <button class="btn btn--icon category__render-filter">
          <svg width="13" height="13">
            <use xlink:href="/assets/img/sprite.svg#icon-filter"></use>
          </svg>
          Фильтры
        </button>
      </div>
      <div class="category__products-list">
        <category-page :products="selectPage(selectedPage)" :user="user"></category-page>
        <button v-for="i in pagesCount" @click="selectPage(i)">{{ i }}</button>
      </div>
    </div>
  </section>
</template>

<script>

import {eventBus} from "../../index";

export default {
  name: "category-product",
  props: {
    products: Object,
    category: String,
    user: Object
  },
  data() {
    return {
      pageHelper: 0,
      selectedPage: 1
    }
  },
  computed: {
    pagesCount() {
      console.log(Math.floor(Object.keys(this.products).length / 5) + 1);
      return Math.floor(Object.keys(this.products).length / 5) + 1;
    }
  },
  methods: {
    selectPage(page) {
      this.selectedPage = page;
      let newArr = [];
      page -= 1;
      for (let i = page * 3; i < page * 3 + 3 || this.products[i]; i++) {
        console.log(i);
        newArr.push(this.products[Object.keys(this.products)[i]]);
      }
      return newArr;
    },
    pageProducts(page) {
      let newArr = [];
      for (let i = page * 3; i < page * 3 + 3 || this.products[i]; i++) {
        console.log(i);
        newArr.push(this.products[Object.keys(this.products)[i]]);
      }
      console.log(newArr);
    }
  }
}
</script>

<style scoped>

</style>
