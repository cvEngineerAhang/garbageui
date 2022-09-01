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
  props: {
    activeColor: {
      type: String,
      default: "#FFCDD2", //初始背景颜色
      // 开
    },
    inactiveColor: {
      type: String,
      default: "#bbdefb", // 触发背景颜色
      //关
    },
    circleActiveColor: {
      type: String,
      default: "#EF5350", //初始圆点颜色
    },
    circleInactiveColor: {
      type: String,
      default: "#42A5F5", //触发圆点颜色
    },
  },
  name: "j-switch",
  data() {
    if (this.activeColor === "") {
      console.error("active-color is empty🤨");
    }
    if (this.inactiveColor === "") {
      console.error("inactive-color is empty🤨");
    }
    if (this.circleActiveColor === "") {
      console.error("circle-active-color is empty🤨");
    }
    if (this.circleInactiveColor === "") {
      console.error("circle-inactive-color is empty🤨");
    }
    return {
      in: false,
      backgroundF: this.activeColor, //初始背景红色
      backgroundI: this.inactiveColor, //触发背景颜色
      background: this.circleActiveColor, //初始圆点红色
      backgroundC: this.circleInactiveColor, // 触发圆点颜色
      transform: "translateX(0px)",
    };
  },
  created() {
    console.log(this.activeColor, this.inactiveColor);
  },
  methods: {
    handleChange() {
      this.in = !this.in;
      this.in
        ? (this.backgroundF = this.backgroundI)
        : (this.backgroundF = this.activeColor);
      this.in
        ? (this.background = this.backgroundC)
        : (this.background = this.circleActiveColor);
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
