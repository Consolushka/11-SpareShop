<template>
  <section class="category">
    <div class="container">
      <h2 class="category-title title title--h2">Шины</h2>
      <div class="category__render">
        <div class="category__render-wrapper">
          <button class="btn btn--icon category__render-sort" @click="ToggleSort">
            <svg width="13" height="19">
              <use xlink:href="/assets/img/sprite.svg#icon-sort"></use>
            </svg>
            По популярности
          </button>
          <button class="btn btn--icon category__render-filter" @click="SlideFilters" v-show="clientWidth<1170">
            <svg width="13" height="13">
              <use xlink:href="/assets/img/sprite.svg#icon-filter"></use>
            </svg>
            Фильтры
          </button>
        </div>
      </div>
      <div class="category__products-list">
        <filters :products="products"></filters>
        <div class="category__products-list-prod-wrapper">
          <category-page
            class="category__products-list-prod"
            :products="productsOnPage"
            :user="user"></category-page>
          <button
            v-if="ProdsOnPage<typeProds.length || selectedPage<NumberOfPages"
            class="btn btn--classic category__products-list-more"
            @click="ShowMoreProds">Показать больше
          </button>
          <div class="category__products-list-btns">
            <button
              v-for="i in NumberOfPages"
              class="btn btn--page"
              :class="{'btn--page--active': selectedPage===i}"
              v-if="ProdsOnPage<typeProds.length"
              @click="ChangePage(i)">{{ i }}
            </button>
          </div>
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
    types: Array,
    user: Object
  },
  data() {
    return {
      pageHelper: 0,
      selectedPage: 1,
      ProdsOnPage: 3,
      typeProds: this.types[Number(window.location.search.replace('?id=', ''))].prods,
      isPopularIncrease: true,
      productsOnPage: [],
      productsOfType: []
    }
  },
  computed: {
    clientWidth() {
      return document.documentElement.clientWidth;
    },
    NumberOfPages() {
      let count;
      if ((Math.floor(this.typeProds.length / this.ProdsOnPage) + 1) * this.ProdsOnPage - this.ProdsOnPage >= this.typeProds.length) {
        count = Math.floor(this.typeProds.length / this.ProdsOnPage);
      } else {
        count = Math.floor(this.typeProds.length / this.ProdsOnPage) + 1;
      }
      return count;
    }
  },
  methods: {
    SlideFilters() {
      document.querySelector("body").classList.add("js-slide-left");
    },
    ToggleSort() {
      this.GetProductsOnPage(this.sortArr(this.productsOfType, this.isPopularIncrease));
      this.isPopularIncrease = !this.isPopularIncrease;
    },
    sortArr(arr, isInc) {
      let newArr = arr.slice();
      if (isInc) {
        newArr.sort((a, b) => a.sold > b.sold ? 1 : -1);
      } else {
        newArr.sort((a, b) => a.sold < b.sold ? 1 : -1);
      }
      this.productsOfType = newArr;
      return newArr;
    },
    ChangePage(i) {
      this.selectedPage = i;
      this.GetProductsOnPage(this.productsOfType);
    },
    GetProductsOnPage(arr) {
      let newArr = [];
      for (let i = (this.selectedPage - 1) * 3; i < (this.selectedPage - 1) * this.ProdsOnPage + this.ProdsOnPage; i++) {
        if (arr[i]) {
          newArr.push(arr[i]);
        }
      }
      this.productsOnPage = newArr;
    },
    ShowMoreProds() {
      this.ProdsOnPage += 3;
      this.GetProductsOnPage(this.productsOfType);
    }
  },
  mounted() {
    let res = [];
    Object.values(this.products).forEach((item) => {
      if (this.typeProds.includes(item.id)) {
        res.push(item);
      }
    });
    this.productsOfType = res;
    this.productsOnPage = this.GetProductsOnPage(this.productsOfType);
    console.log(this.GetProductsOnPage(this.productsOfType));
    eventBus.$on("renderProds", (newArr) => {
      console.log(newArr);
      this.productsOfType = newArr;
      this.GetProductsOnPage(newArr);
    })
  },
  created() {
    if (document.documentElement.clientWidth >= 1170) {
      this.ProdsOnPage = 9;
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
  transform: translateX(-100vw);
}

@media (min-width: 1170px) {
  .category {
    .container {
      padding: 0;
    }
  }
  .category__products-list {
    display: flex;
  }
  .category__render {
    margin: 0;
    margin-bottom: 20px;
  }
}
</style>
