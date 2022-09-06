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
  display: flex;
  // width: 300px;
  width: 50%;
  overflow: hidden;
  margin:  0 auto;
  border:1px solid red;
  // position: absolute;
  // left: -500px;
  // justify-content: center;
  // align-items: center;
  // background: red;
}
</style>
