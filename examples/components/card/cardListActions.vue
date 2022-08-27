<template>
  <div class="j-card-list-actions">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JCardListActions",
};
</script>

<style lang="scss" scoped>
.j-card-list-actions {
  padding: 5px 10px;
  text-align: right;
}
</style>
