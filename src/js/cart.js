import { loadHeaderFooter } from "./utils.mjs";
import Alert from "./Alert.js";
import ShoppingCart from "./ShoppingCart.mjs";

document.addEventListener("DOMContentLoaded", () => {

  new Alert().init();

  const element = document.querySelector(".product-list");
  const shoppingCart = new ShoppingCart(element);
  shoppingCart.init();

  loadHeaderFooter();
});