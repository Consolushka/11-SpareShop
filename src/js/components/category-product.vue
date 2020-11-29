<template>
  <section class="category">
    <div class="container">
      <h2 class="category-title title title--h2">Шины</h2>
      <div class="category__render">
        <div class="category__render-wrapper">
          <button class="btn btn--icon category__render-sort">
            <svg width="13" height="19">
              <use xlink:href="/assets/img/sprite.svg#icon-sort"></use>
            </svg>
            По популярности
          </button>
          <button class="btn btn--icon category__render-filter" @click="SlideFilters">
            <svg width="13" height="13">
              <use xlink:href="/assets/img/sprite.svg#icon-filter"></use>
            </svg>
            Фильтры
          </button>
        </div>
      </div>
      <div class="category__products-list">
        <category-page
          class="category__products-list-prod"
          :products="selectPage"
          :user="user"></category-page>
        <button
          v-if="ProdsOnPage<category.length || selectedPage<pagesCount-1"
          class="btn btn--classic category__products-list-more"
          @click="ProdsOnPage+=2">Показать больше
        </button>
        <div class="category__products-list-btns">
          <button
            v-for="i in pagesCount"
            class="btn btn--page"
            :class="{'btn--page--active': selectedPage===i}"
            @click="selectedPage = i">{{ i }}
          </button>
        </div>
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
    category: Array,
    user: Object
  },
  data() {
    return {
      pageHelper: 0,
      selectedPage: 1,
      ProdsOnPage: 3
    }
  },
  computed: {
    pagesCount() {
      let count;
      if ((Math.floor(this.category.length / this.ProdsOnPage) + 1) * this.ProdsOnPage - this.ProdsOnPage >= this.category.length) {
        count = Math.floor(this.category.length / this.ProdsOnPage);
      } else {
        count = Math.floor(this.category.length / this.ProdsOnPage) + 1;
      }
      return count;
    },
    selectPage() {
      let newArr = [];
      for (let i = (this.selectedPage - 1) * 3; i < (this.selectedPage - 1) * this.ProdsOnPage + this.ProdsOnPage; i++) {
        if (this.products[this.category[i]]) {
          newArr.push(this.products[this.category[i]]);
        }
      }
      return newArr;
    }
  },
  methods: {
    SlideFilters() {
      document.querySelector("body").classList.add("js-slide-left");
    }
  }
}
</script>

<style lang="scss">

.category {
  margin-bottom: 80px;
}

.category-title {
  margin-bottom: 20px;
}

.category__render {
  margin: 0 -16px;
  margin-bottom: 20px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}

.category__render-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
}

.category__products-list-more {
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 50px;
  padding: 11px 43px;
}

.category__products-list-btns {
  display: flex;
  justify-content: flex-start;

  button {
    margin-right: 15px;
  }
}

.js-slide-left {
  transform: translateX(-100%);
}
</style>
