<template>
  <div class="j-carouselItem">
    <img class="imgs" :src="src" />
  </div>
</template>

<script>
export default {
  name: "j-carousel-item",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.j-carouselItem {
  height: inherit;
  .imgs {
    position: relative;
    height: inherit;
  }
}
</style>
