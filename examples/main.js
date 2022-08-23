import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import JButton from "./components/button/button.vue";
Vue.component(JButton.name, JButton);
import JDialog from "./components/dialog/dialog";
Vue.component(JDialog.name, JDialog);
import JInput from "./components/input/input";
Vue.component(JInput.name, JInput);
import JCard from "./components/card/card";
Vue.component(JCard.name,JCard);
// import garbageui from "../packages";
// Vue.use(garbageui);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
