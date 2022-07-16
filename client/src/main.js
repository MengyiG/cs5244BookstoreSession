import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "@/assets/css/global.css";
import store, { CART_STORAGE_KEY } from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store, //every component could reference the store
  render: function (h) {
    return h(App);
  },
  created() {
    const cartString = localStorage.getItem(CART_STORAGE_KEY);
    if (cartString) {
      const shoppingCart = JSON.parse(cartString);
      this.$store.commit("SET_CART", shoppingCart);
    }
  },
}).$mount("#app");
