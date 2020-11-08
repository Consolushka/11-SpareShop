<template>
  <li class="types__list-item card">
    <a href="#" class="btn btn--reverse types__list-item-link">
      <div class="types__list-item-info">
        <h4 class="types__list-item-title title--h4">{{ this.typeObject.title }}</h4>
        <p class="types__list-item-go">Перейти
          <svg width="6" height="10">
            <use xlink:href="/assets/img/sprite.svg#icon-small-arrow"></use>
          </svg>
        </p>
      </div>
      <div class="types__list-item-icon">
        <svg :width=this.typeObject.iconWidth :height=this.typeObject.iconHeight>
          <use :xlink:href=this.typeObject.iconPath></use>
        </svg>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "type-card",
  props: {
    typeObject: Object
  }
}
</script>

<style scoped>

</style>
