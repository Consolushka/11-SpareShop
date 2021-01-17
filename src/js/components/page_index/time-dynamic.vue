<template>
  <p class="js-dynamic-time">{{ timeRemainingString }}</p>
</template>

<script>
export default {
  name: "time-dynamic",
  props: {
    endTime: Date
  },
  data() {
    return {
      currentTime: new Date().valueOf(),
      endTimeValue: this.endTime.valueOf()
    }
  },
  computed: {
    timeRemainingString() {
      let hours = Math.floor((this.endTimeValue - this.currentTime) / 1000 / 3600).toString();
      let minutes = Math.floor((this.endTimeValue - this.currentTime - hours * 1000 * 3600) / 1000 / 60).toString();
      let secs = Math.floor((this.endTimeValue - this.currentTime - hours * 1000 * 3600 - minutes * 1000 * 60) / 1000).toString();
      return `${hours}:${minutes}:${secs}`;
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().valueOf();
    }, 1000);
  }
}
</script>

<style scoped>

</style>
