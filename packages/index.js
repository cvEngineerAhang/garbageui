import Vue from "vue";
import Button from "./button/button";
import Dialog from "./dialog/dialog";
import Input from "./input/input";
import Card from "./card/card";
import CardImage from "./card/cardImage";
const components = [Button, Dialog, Input, Card, CardImage];
const install = function (vue) {
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};

if (typeof window !== "undefined" && window.vue) {
  install(window.Vue);
}

export default {
  install,
};
