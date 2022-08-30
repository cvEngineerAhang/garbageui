<template>
  <div
    class="j-switch"
    @click="handleChange"
    :style="{
      background: backgroundF,
      transition: 'ease .3s',
    }"
  >
    <!-- #FFCDD2 -->
    <div
      class="j-switch-circle"
      :style="{
        background: background,
        transform: transform,
        transition: 'ease .3s',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "JSwitch",
  data() {
    return {
      in: false,
      backgroundF: "#FFCDD2",
      background: "#EF5350",
      transform: "translateX(0px)",
    };
  },
  methods: {
    handleChange() {
      this.in = !this.in;
      // ((this.backgroundF = "#bbdefb"))
      // ((this.backgroundF = "#FFCDD2"))
      !this.in
        ? ((this.background = "#EF5350"), (this.backgroundF = "#FFCDD2"))
        : ((this.background = "#42A5F5"), (this.backgroundF = "#bbdefb"));
      !this.in
        ? (this.transform = "translateX(0px)")
        : (this.transform = "translateX(20px)");
      // console.log(this.in);
      this.$emit("change" || "click", this.in);
    },
  },
};
</script>

<style lang="scss" scoped>
.j-switch {
  width: 40px;
  height: 20px;
  // background: #bbdefb;
  cursor: pointer;
  border-radius: 10px;
  &-circle {
    // background: red;
    width: 20px;
    height: inherit;
    border-radius: 50%;
  }
}
</style>
