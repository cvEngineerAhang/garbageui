<template>
  <!-- 遮罩 .self点击自己才触发 -->
  <div class="j-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <!-- 对话框 -->
    <div class="j-dialog" :style="{ width, marginTop: top }">
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
  </div>
</template>

<script>
export default {
  name: "JDialog",
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
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
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

  .j-dialog {
    border-radius: 5px;
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 0px;
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
}
</style>
