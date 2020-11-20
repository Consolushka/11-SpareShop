<template>
  <article>
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

<style scoped>

</style>
