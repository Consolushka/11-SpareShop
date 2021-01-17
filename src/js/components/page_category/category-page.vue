<template>
  <article class="page">
    <card-product v-for="item in products" :product="item" :user="user" :key="item.id"></card-product>
  </article>
</template>

<script>
export default {
  name: "category-page",
  props: {
    products: Array,
    user: Object
  }
}
</script>

<style lang="scss">
@media(min-width: 1170px) {
  .page {
    width: 870px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;

    .card {
      width: 32%;

      &:not(:last-child) {
        margin-right: 11px;
      }
    }
  }
}
</style>
