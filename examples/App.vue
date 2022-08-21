<template>
  <div id="app">
    <J-Button round type="info" @click="visible = true">按钮</J-Button>
    <J-Dialog title="标题" top="10px" width="70%" :visible.sync="visible">
      <!-- <template v-slot:title>
        <h3>提示标题</h3>
      </template> -->
      <span>内容</span>
      <template v-slot:footer>
        <J-Button @click="visible = false"> 确定 </J-Button>
        <J-Button @click="visible = false"> 取消 </J-Button>
      </template>
    </J-Dialog>
    <!-- <div class="default">
      <J-Button round>default Button</J-Button>
      <J-Button round type="primary">primary Button</J-Button>
      <J-Button round type="success">success Button</J-Button>
      <J-Button round type="danger">danger Button</J-Button>
      <J-Button round type="warning">warning Button</J-Button>
      <J-Button round type="info">info Button</J-Button>
      <J-Button round type="gay"> Button</J-Button>
    </div> -->
    <!-- <J-Dialog title="title"></J-Dialog> -->
    <!-- <div>圆形按钮</div>
    <div class="circle">
      <J-Button @click="fn" circle>A</J-Button>
      <J-Button circle type="primary">B</J-Button>
      <J-Button circle type="success">C</J-Button>
      <J-Button circle type="danger">D</J-Button>
      <J-Button circle type="warning">E</J-Button>
      <J-Button circle type="info">F</J-Button>
      <J-Button circle type="gay">G</J-Button>
    </div>
    <br />
    <div>圆角按钮</div>
    <div class="default">
      <J-Button round>default Button</J-Button>
      <J-Button round type="primary">primary Button</J-Button>
      <J-Button round type="success">success Button</J-Button>
      <J-Button round type="danger">danger Button</J-Button>
      <J-Button round type="warning">warning Button</J-Button>
      <J-Button round type="info">info Button</J-Button>
      <J-Button round type="gay"> Button</J-Button>
    </div>
    <br />
    <div>普通按钮</div>
    <div class="default">
      <J-Button>default Button</J-Button>
      <J-Button type="primary">primary Button</J-Button>
      <J-Button type="success">success Button</J-Button>
      <J-Button type="danger">danger Button</J-Button>
      <J-Button type="warning">warning Button</J-Button>
      <J-Button type="info">info Button</J-Button>
      <J-Button type="gay"> Button</J-Button>
    </div>

    <br />
    <div>圆角朴素按钮</div>
    <div class="round">
      <J-Button round plain>default Button</J-Button>
      <J-Button round plain type="primary">primary Button</J-Button>
      <J-Button round plain type="success">success Button</J-Button>
      <J-Button round plain type="danger">danger Button</J-Button>
      <J-Button round plain type="warning">warning Button</J-Button>
      <J-Button round plain type="info">info Button</J-Button>
      <J-Button round plain type="gay"> Button</J-Button>
    </div>

    <br />
    <div>朴素按钮</div>
    <div class="plain">
      <J-Button plain>default Button</J-Button>
      <J-Button plain type="primary">primary Button</J-Button>
      <J-Button plain type="success">success Button</J-Button>
      <J-Button plain type="danger">danger Button</J-Button>
      <J-Button plain type="warning">warning Button</J-Button>
      <J-Button plain type="info">info Button</J-Button>
      <J-Button plain type="gay"> Button</J-Button>
    </div>

    <br />
    <div>禁用按钮</div>
    <div class="disabled">
      <J-Button disabled plain>default Button</J-Button>
      <J-Button disabled round type="primary">primary Button</J-Button>
      <J-Button disabled circle type="success">B</J-Button>
      <J-Button disabled type="danger">danger Button</J-Button>
      <J-Button disabled type="warning">warning Button</J-Button>
      <J-Button disabled type="info">info Button</J-Button>
      <J-Button disabled type="gay"> Button</J-Button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    fn() {
      console.log("A");
    },
    close(value) {
      this.visible = value;
    },
  },
};
</script>

<style lang="scss">
// .default,
// .plain,
// .round,
// .circle,
// .disabled {
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// }
</style>
