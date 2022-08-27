import Vue from "vue";
import Button from "./button/button";
import Dialog from "./dialog/dialog";
import Input from "./input/input";
import Card from "./card/card";
import CardImage from "./card/cardImage";
import CardListTitle from "./card/cardListTitle";
import CardListItem from "./card/cardListItem";
import CardListActions from "./card/cardListActions";
const components = [
  Button,
  Dialog,
  Input,
  Card,
  CardImage,
  CardListTitle,
  CardListItem,
  CardListActions,
];
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
