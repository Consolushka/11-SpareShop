<template>
  <ul class="panel__list">
    <li class="panel__list-item" v-for="type in types" :key="type.id">
      <button class="panel__list-item-btn btn" @click="changeType(type.id)" :data-type="type.id">{{
          type.title
        }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "types-panel",
  props: {
    types: Array
  },
  methods: {
    changeType(id) {
      this.$emit('changed-type', id);
    }
  },
  mounted() {
    document.querySelectorAll(".panel__list-item-btn").forEach((item) => {
      item.addEventListener("click", (e) => {
        document.querySelectorAll(".panel__list-item-btn").forEach((sItem) => {
          sItem.classList.remove("panel__list-item-btn--active");
        });
        e.target.classList.add("panel__list-item-btn--active");
      })
    })
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.panel__list-item {
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: $primary-color;
  }
}
</style>
