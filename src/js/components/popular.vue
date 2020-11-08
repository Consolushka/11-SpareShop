<template>
  <section class="popular">
    <div class="container">
      <h3 class="popular-title title title--h3">Популярные товары</h3>
      <ul class="panel__list popular__panel">
        <li class="panel__list-item popular__panel-item" v-for="type in types" :key="type.id">
          <button class="btn" @click.prevent="selectType(type.id)">{{ type.title }}</button>
        </li>
      </ul>
      <ul>
        <li v-for="product in popularProducts">
          <product-card :product=product></product-card>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "popular",
  props: {
    types: Array,
    products: Object,
    popularList: Object,
  },
  data() {
    return {
      currentTypeId: 0
    }
  },
  computed: {
    popular() {
      return this.popularList[this.currentTypeId]
    },
    popularProducts() {
      if (!this.popular) {
        return {}
      }

      return Object.fromEntries(Object.entries(this.products).filter(([key, value]) => this.popular.includes(parseInt(key))));
    }
  },
  methods: {
    selectType: function (typeId) {
      this.currentTypeId = typeId;
    }
  }
}
</script>

<style scoped>

</style>
