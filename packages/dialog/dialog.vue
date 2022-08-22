<template>
  <!-- 遮罩 .self点击自己才触发 -->
  <div>
    <transition name="dialog-fade__wrapper">
      <div class="j-dialog__wrapper" v-show="visible" @click.self="handleClose">
        <!-- 对话框 -->
      </div>
    </transition>
    <transition :name="dialogFade">
      <div class="j-dialog" v-show="visible" :style="{ width, marginTop: top }">
        <!-- 对话框头部 -->
        <div class="j-dialog__header">
          <slot name="title">
            <span class="j-dialog__title">{{ title }}</span>
          </slot>
          <!-- <button class="j-dialog__headerbtn">X</button> -->
        </div>
        <!-- 对话框主体 -->
        <div class="j-dialog__body">
          <slot></slot>
        </div>
        <!-- 对话框底部 -->
        <div class="j-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "JDialog",
  data() {
    return {
      dialogFade: "dialog-fade",
    };
  },
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "",
    },
  },
  created() {
    switch (this.direction) {
      case "left":
        this.dialogFade = "dialog-fade__left";
        break;
      case "top":
        this.dialogFade = "dialog-fade__top";
        break;
      case "right":
        this.dialogFade = "dialog-fade__right";
        break;
      case "bottom":
        this.dialogFade = "dialog-fade__bottom";
        break;
      default:
        this.dialogFade = "dialog-fade";
        break;
    }
    // console.log(this.direction, this.dialogFade);
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
//TODO fade-active
.dialog-fade__wrapper-enter-active {
  animation: wrapperFade 0.2s;
}
.dialog-fade__wrapper-leave-active {
  animation: wrapperFade 0.2s reverse;
}
@keyframes wrapperFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
// TODO default
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    // transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    // transform: translateY(0px);
  }
}
//  TODO fade__top
.dialog-fade__top-enter-active {
  animation: fade_top 0.3s;
}
.dialog-fade__top-leave-active {
  animation: fade_top 0.3s reverse;
}
@keyframes fade_top {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
// TODO fade__bottom
.dialog-fade__bottom-enter-active {
  animation: fade_bottom 0.3s;
}
.dialog-fade__bottom-leave-active {
  animation: fade_bottom 0.3s reverse;
}
@keyframes fade_bottom {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
// TODO fade__left
.dialog-fade__left-enter-active {
  animation: fade_left 0.3s;
}
.dialog-fade__left-leave-active {
  animation: fade_left 0.3s reverse;
}
@keyframes fade_left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
// TODO fade__right
.dialog-fade__right-enter-active {
  animation: fade_right 0.3s;
}
.dialog-fade__right-leave-active {
  animation: fade_right 0.3s reverse;
}
@keyframes fade_right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}





.j-dialog__wrapper {

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
}

.j-dialog {
  border-radius: 5px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1001;
  // bottom: 0;
  overflow: auto;
  margin: 0;
  margin: 15vh auto 50px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 30%;

  &__header {
    padding: 15px 20px 0px;
    .j-dialog__title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
      font-weight: bold;
    }
    // .j-dialog__title {
    // }
  }
  &__body {
    padding: 10px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  &__footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    .j-button:first-child {
      margin-right: 20px;
    }
  }
}
</style>
