<template>
  <div id="app">
    <J-Card title="Card title">
      <template v-slot:image> </template>
      <template v-slot:title> </template>
      <template v-slot:text> </template>
      <template v-slot:footer> </template>
    </J-Card>
    <!-- <J-Input
      type="password"
      disabled
      name=""
      placeholder="禁用输入框"
    ></J-Input>
    <J-Input type="password" name="" placeholder="请输入"></J-Input> -->
    <!-- <J-Input v-model="zs"></J-Input> -->
    <!-- <J-Dialog title="标题" direction="" top="" width="" :visible.sync="visible">
      <span>内容</span>
      <template v-slot:footer>
        <J-Button @click="visible = false"> 确定 </J-Button>
        <J-Button @click="visible = false"> 取消 </J-Button>
      </template>
    </J-Dialog>
    <J-Button round type="info" @click="visible = true">按钮</J-Button> -->

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
      zs: "zs",
    };
  },
  methods: {
    fn() {
      console.log("A");
    },
  },
};
</script>

<style lang="scss">
// #app {
//   display: flex;
//   flex-direction: column;
//   width: 280px;
//   height: 100px;
//   justify-content: space-around;
// }
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
