<template>
  <div class="j-card-list-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "j-card-list-item",
};
</script>

<style lang="scss" scoped>
.j-card-list-item {
  word-break: break-all;
  padding: 5px 10px;
  font-size: 18px;
  color: #757575;
  box-sizing: border-box;
}
</style>
