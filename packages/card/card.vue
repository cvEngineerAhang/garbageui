<template>
  <div class="j-card">
    <!-- 卡片图片 -->
    <!-- <slot></slot> -->

    <!-- <div class="j-card__img"> -->
    <slot></slot>
    <!-- </div> -->
    <!-- <div class="j-card__main">
      <div class="j-card__header">
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </div>
      <div class="j-card__body">
        <slot name="text">
          <span>Greyhound divisely hello coldly fonwderfully</span>
        </slot>
      </div>
      <div class="j-card__footer">
        <slot name="footer">
          <J-Button type="success">BUTTON</J-Button>
          <J-Button>BUTTON</J-Button>
        </slot>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "j-card",
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
  // max-height: 150px;
  // height: 300px;
  width: 30%;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  // .j-card__main {
  //   min-height: 150px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   padding: 5px 10px;
  // }
  .j-card__img {
    border-radius: 5px 5px 0 0;
    min-height: initial;
    min-width: initial;
    // height: 100%;
    // background: red;
    // width: 100%;
  }
  // .j-card__header {
  //   font-size: 18px;
  //   font-weight: 500;
  // }
  // .j-card__body {
  //   color: #757575;
  // }
  // .j-card__footer {
  //   text-align: right;
  // }
}
</style>
