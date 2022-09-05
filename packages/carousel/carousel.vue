<template>
  <div class="j-carousel" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "j-carousel",
  props: {
    height: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style lang="scss" scoped>
.j-carousel {
  width: 100%;
  background: red;
}
</style>
