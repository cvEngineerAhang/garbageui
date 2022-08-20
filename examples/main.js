import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

// import JButton from "./components/button/button.vue";
// Vue.component(JButton.name,JButton);
import JUI from "../packages";
Vue.use(JUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
