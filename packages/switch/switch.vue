<template>
  <div class="j-switch" @click="handleChange">
    <div
      class="j-switch-circle"
      :style="{
        background: background,
        transform: transform,
        transition: 'ease 1s',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "JSwitch",
  data() {
    return {
      in: true,
      background: "aqua",
      transform: "translateX(0px)",
    };
  },
  methods: {
    handleChange() {
      this.in = !this.in;
      this.in ? (this.background = "aqua") : (this.background = "red");
      this.in
        ? (this.transform = "translateX(0px)")
        : (this.transform = "translateX(20px)");
    },
  },
};
</script>

<style lang="scss" scoped>
.j-switch {
  width: 40px;
  height: 20px;
  background: green;
  border-radius: 10px;
  &-circle {
    // background: red;
    width: 20px;
    height: inherit;
    border-radius: 50%;
  }
}
</style>
