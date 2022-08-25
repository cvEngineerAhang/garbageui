<template>
  <div class="j-card-image">
    <img class="img" :src="src" />
  </div>
</template>

<script>
export default {
  name: "JCardImage",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.j-card-image {
  height: 100%;
  width: 100%;
  // height: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
