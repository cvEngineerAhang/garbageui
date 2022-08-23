<template>
  <div class="j-card">
    <div class="j-card__img" v-if="$slots.image">
      <slot name="image"></slot>
      <!-- 卡片图片 -->
    </div>
    <div class="j-card__main">
      <div class="j-card__header">
        <!-- 卡片顶部 -->
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </div>
      <div class="j-card__body">
        <slot name="text">
          <span>Greyhound divisely hello coldly fonwderfully</span>
        </slot>
        <!-- 卡片内容 -->
      </div>
      <div class="j-card__footer">
        <!-- 卡片底部 -->
        <slot name="footer">
          <J-Button type="success">BUTTON</J-Button>
          <J-Button>BUTTON</J-Button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JCard",
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
};
</script>

<style lang="scss" scoped>
.j-card {
  min-height: 150px;
  min-width: 300px;
  // height: 300px;
  width: 30%;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  .j-card__main {
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .j-card__img {
    border-radius: 5px 5px 0 0;
    height: 180px;
    background: red;
    width: 100%;
  }
  .j-card__header {
    font-size: 18px;
    font-weight: 500;
  }
  .j-card__body {
    color: #757575;
  }
  .j-card__footer {
    text-align: right;
  }
}
</style>
