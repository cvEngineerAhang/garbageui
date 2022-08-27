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
Vue.component(JCard.name, JCard);
import JCardImage from "./components/card/cardImage";
Vue.component(JCardImage.name, JCardImage);
import JCardListTitle from "./components/card/cardListTitle";
Vue.component(JCardListTitle.name, JCardListTitle);
import JCardListItem from "./components/card/cardListItem";
Vue.component(JCardListItem.name, JCardListItem);
import JCardListActions from "./components/card/cardListActions";
Vue.component(JCardListActions.name, JCardListActions);
// import garbageui from "../packages";
// Vue.use(garbageui);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
