<template>
  <div id="app">
    <j-switch @change="handleChange"></j-switch>
    <!-- active-color="" inactive-color="" -->
    <!-- circle-active-color ="" circle-inactive-color=""  -->
    <!-- <J-Card title="Card title">
      <J-Card-Image :src="url" />
      <J-Card-List-title>
        <div>Card</div>
      </J-Card-List-title>
      <J-Card-List-Item>
        <div>Greyhound divisely hello coldly fonwderfully</div>
      </J-Card-List-Item>
      <J-Card-List-actions>
        <J-Button type="success">BUTTON</J-Button>
        <J-Button>BUTTON</J-Button>
      </J-Card-List-actions>
    </J-Card> -->

    <!-- <template v-slot:image> </template> -->
    <!-- <template v-slot:title> </template>
      <template v-slot:text> </template>
      <template v-slot:footer> </template> -->
    <!-- <J-Input
      type="password"
      disabled
      name=""
      placeholder="禁用输入框"
    ></J-Input>
    <J-Input type="password" name="" placeholder="请输入"></J-Input> -->
    <!-- <j-input v-model="zs"></j-input> -->
    <!-- <J-Dialog title="title" direction="" top="" width="" :visible.sync="visible">
      <span>title</span>
      <template v-slot:footer>
        <J-Button @click="visible = false"> OK </J-Button>
        <J-Button @click="visible = false"> CLOSE </J-Button>
      </template>
    </J-Dialog>
    <J-Button round type="info" @click="visible = true">BUTTON</J-Button> -->
    <!-- <j-card title="Card title">
      <j-card-image :src="url" />
      <j-card-list-title>
        <div>Card</div>
      </j-card-list-title>
      <j-card-list-item>
        <div>Greyhound divisely hello coldly fonwderfully</div>
      </j-card-list-item>
      <j-card-list-actions>
        <j-button type="success">BUTTON</j-button>
        <j-button>BUTTON</j-button>
      </j-card-list-actions>
    </j-card>
    <div class="default">
      <j-button round>default Button</j-button>
      <j-button round type="primary">primary Button</j-button>
      <j-button round type="success">success Button</j-button>
      <j-button round type="danger">danger Button</j-button>
      <j-button round type="warning">warning Button</j-button>
      <j-button round type="info">info Button</j-button>
      <j-button round type="gay"> Button</j-button>
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
      url: "https://www.butterfly-global.com/en/products/item/37261_04.jpg",
    };
  },
  methods: {
    fn() {
      console.log("A");
    },
    handleChange(e) {
      console.log(e);
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
