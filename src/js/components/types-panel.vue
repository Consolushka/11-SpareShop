<template>
  <ul class="panel__list">
    <li class="panel__list-item" v-for="(type,index) in types" :key="type.id">
      <button class="panel__list-item-btn btn" :class="{'panel__list-item-btn--active': index===0}"
              :data-title="type.title" @click="changeType(type.id,type.title)" :data-type="type.id">{{
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
    changeType(id, title) {
      document.querySelectorAll('.panel__list-item-btn').forEach((item) => {
        console.log(item.dataset.title, title);
        if (item.dataset.title === title) {
          console.log('yes');
          item.classList.add('panel__list-item-btn--active');
        }
      })
      this.$emit('changed-type', id);
    }
  },
  mounted() {
    /*document.querySelectorAll(".panel__list-item-btn").forEach((item) => {
      item.addEventListener("click", (e) => {
        document.querySelectorAll(".panel__list-item-btn").forEach((sItem) => {
          sItem.classList.remove("panel__list-item-btn--active");
        });
        e.target.classList.add("panel__list-item-btn--active");
      })
    })*/
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
