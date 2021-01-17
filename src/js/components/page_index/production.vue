<template>
  <div class="production-wrapper">
    <hr class="js-production-hr" :style="returnMargin">
    <ul class="production__list container container--left">
      <li class="production__list-item" :class="{'production__list-item--active': type===currType}"
          v-for="type in types" :key="type.id">
        <a :href="'category.html?id='+type.id" class="btn btn--toggle">{{ type.title }}</a>
      </li>
    </ul>
    <hr class="js-production-hr" :style="returnMargin">
  </div>
</template>

<script>
export default {
  name: "production",
  props: {
    types: Array,
    products: Object
  },
  computed: {
    returnMargin() {
      return "margin: 0 -" + Math.floor(((document.documentElement.clientWidth - 1170 - 18) / 2)).toString() + "px";
    },
    product() {
      return this.products[Number(window.location.search.replace('?id=', ''))]
    },
    currType() {
      let res;
      if (this.products !== undefined) {
        console.log('d');
        this.types.forEach((typeItem) => {
          if (typeItem.prods.includes(Number(window.location.search.replace('?id=', '')))) {
            res = typeItem;
          }
        })
      } else {
        res = this.types[Number(window.location.search.replace('?id=', ''))];
      }
      console.log(res);
      return res;
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars";

.production-wrapper {
  position: relative;
  margin-bottom: 28px;

  hr {
    margin: 0;
  }
}

.production__list {
  padding: 14px 0;
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.production__list-item {
  font-size: 18px;
  margin-right: 15px;
  white-space: nowrap;

  a {
    color: $default-color;
  }
}

@media (min-width: 1170px) {
  .production__list {
    justify-content: space-between;
    overflow: visible;
  }

  .production__list-item {
    margin: 0;
    font-size: 20px;
    position: relative;

    &:hover {
      .btn {
        color: $primary-color;
      }
    }

    &--active {
      &:before {
        position: absolute;
        bottom: -15.5px;
        content: "";
        width: 100%;
        height: 3px;
        background: $primary-color;
      }
    }
  }
}
</style>
