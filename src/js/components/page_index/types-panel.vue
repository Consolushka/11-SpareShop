<template>
  <ul class="panel__list">
    <li class="panel__list-item" v-for="(type,index) in types" :key="type.id">
      <button class="panel__list-item-btn btn" :class="{'panel__list-item-btn--active': index===selectedTab}"
              :data-title="type.title" @click="changeType(type.id,index)" :data-type="type.id">{{
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
  data() {
    return {
      selectedTab: 0
    }
  },
  methods: {
    changeType(id, index) {
      this.selectedTab = index;
      this.$emit('changed-type', id);
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars";

.panel__list-item {
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: $primary-color;
  }
}
</style>
