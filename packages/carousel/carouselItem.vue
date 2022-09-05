<template>
  <div class="j-carouselItem">
    <img class="imgs"  src="https://www.butterfly-global.com/en/products/item/37261_04.jpg"/>
  </div>
</template>

<script>
export default {
  name: "j-carousel-item",
};
</script>
<style lang="scss" scoped>
.j-carouselItem {
  padding: 0;
  margin: 0;
  width: inherit;
  height: inherit;
  .imgs{
    display: flex;
    height: 150px;
    width: 100%;
  }
}
</style>
