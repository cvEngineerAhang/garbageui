<template>
  <div class="j-card-list-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JCardListTitle",
};
</script>

<style lang="scss" scoped>
.j-card-list-title{
  word-break:break-all;
  padding:  5px 10px;
  font-size: 20px;
}
</style>
