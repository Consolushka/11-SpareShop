<template>
  <article class="comparison">
    <div class="comparison__select" v-show="!isComparisonProdSelected">
      <div class="comparison__select-item" v-for="product in products" :key="product.id"
           @click="isComparisonProdSelected=true; selectedProd=product; ArrangeLocation()">
        <img :src="product.imgPath" :alt="product.title" width="60" height="100">
        <p class="comparison__select-item-title">{{ product.title }}</p>
      </div>
    </div>
    <div class="comparison__between" v-show="isComparisonProdSelected">
      <div class="comparison__between-item">
        <img :src="currentProd.imgPath" :alt="currentProd.imgPath" width="80" height="133">
        <p class="comparison__between-item-title">{{ currentProd.title }}</p>
        <ul class="comparison__between-item-chars chars">
          <li class="chars-item" v-for="characteristic in currentProd.char">
            <span>{{ characteristic.name }}</span>
            <span>{{ characteristic.value }}</span>
          </li>
        </ul>
      </div>
      <div class="comparison__between-item">
        <img :src="selectedProd.imgPath" :alt="selectedProd.imgPath" width="80" height="133">
        <p class="comparison__between-item-title">{{ selectedProd.title }}</p>
        <ul class="comparison__between-item-chars chars">
          <li class="chars-item" v-for="characteristic in selectedProd.char">
            <span>{{ characteristic.name }}</span>
            <span>{{ characteristic.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "comparison",
  props: {
    products: Object,
  },
  data() {
    return {
      currentProd: this.products[Number(window.location.search.replace('?id=', ''))],
      isComparisonProdSelected: false,
      selectedProd: {}
    }
  },
  mounted() {
    document.querySelectorAll(".comparison__select-item").forEach((item, index) => {
      if (index + 3 >= Object.keys(this.products).length) {
        item.setAttribute("style", "margin-bottom: 0");
      }
    });
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars";

.comparison {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 40vw;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid $neutral-primary;
}

.comparison__select {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.comparison__select-item {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid $neutral-placeholder;
  border-radius: 5px;
  margin-bottom: 10px;
  transition-duration: 300ms;

  &:hover {
    border-color: $neutral-secondary;
  }
}

.comparison__between {
  display: flex;
  justify-content: space-between;
}

.comparison__between-item {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid $neutral-placeholder;
  border-radius: 5px;
}
</style>
