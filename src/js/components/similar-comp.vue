<template>
  <section class="similar">
    <div class="container">
      <h3 class="title title--h3">С этим товаром покупают</h3>
      <types-panel :types="types"></types-panel>
    </div>
  </section>
</template>

<script>
export default {
  name: "similar-comp",
  props: {
    types: Array
  }
}
</script>

<style lang="scss">
.similar .panel__list-item .btn {
  text-transform: lowercase;
}
</style>
