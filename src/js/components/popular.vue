<template>
  <section class="popular">
    <div class="container">
      <h3 class="popular-title title title--h3">Популярные товары</h3>
      <types-panel :types="types" @changed-type="changeType"></types-panel>
      <ul class="popular__list">
        <li class="popular__list-item" v-for="popularItem in popularProducts" :key="popularItem.id">
          <product-card :product="popularItem"></product-card>
        </li>
      </ul>
      <a href="#" class="btn btn--classic popular-more">Показать еще</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "popular",
  props: {
    types: Array,
    populars: Object,
    products: Object
  },
  data: function () {
    return {
      currentTypeID: 0,
      popProducts: {}
    }
  },
  computed: {
    popularList() {
      console.log(this.populars[this.currentTypeID]);
      return this.populars[this.currentTypeID]
    },
    popularProducts() {
      if (this.popProducts[this.currentTypeID]) {
        return this.popProducts[this.currentTypeID];
      }

      return this.popProducts[this.currentTypeID] = Object.fromEntries(Object.entries(this.products).filter(([key, value]) => {
        return this.popularList.includes(parseInt(key))
      }));
    }
  },
  methods: {
    changeType(id) {
      this.currentTypeID = id;
    }
  }
}
</script>

<style lang="scss">
.popular {
  text-align: center;
  margin-bottom: 80px;
}

.popular-title {
  margin-bottom: 25px;
}

.popular .panel__list-item .btn {
  text-transform: lowercase;
}

.popular__list {
  margin-bottom: 40px;
}

.popular-more {
  margin: 0 auto;
  width: 252px;
  padding: 16px;
}
</style>
