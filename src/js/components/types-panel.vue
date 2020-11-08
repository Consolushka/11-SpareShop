<template>
  <ul class="panel__list">
    <li class="panel__list-item" v-for="type in types" :key="type.id">
      <button class="btn" @click="changeType(type.id)">{{ type.title }}</button>
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
  }
}
</script>

<style lang="scss">

</style>
