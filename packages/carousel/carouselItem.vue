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
  //TODO 轮播图样式
  //   width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  height: inherit;
  .imgs {
    width: 100%;
    height: inherit;
    // width: 200px;
    // padding-right: 100%;
  }
}
</style>
