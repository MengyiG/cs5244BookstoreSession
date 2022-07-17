import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";
import { ShoppingCart } from "@/models/ShoppingCart";
Vue.use(Vuex);

export const CART_STORAGE_KEY = "cart";

export default new Vuex.Store({
  state: {
    categories: [],
    selectedCategoryName: "",
    selectedCategoryBooks: [],
    cart: new ShoppingCart(),
  },
  mutations: {
    //capturing the synchronous code that updates the state
    //state is current state, newCategories is the payload
    SET_CATEGORIES(state, newCategories) {
      state.categories = newCategories;
    },
    SET_CATEGORY(state, currentName) {
      state.selectedCategoryName = currentName;
    },
    SET_SELECTED_CATEGORY_BOOKS(state, newBooks) {
      state.selectedCategoryBooks = newBooks;
    },
    ADD_TO_CART(state, book) {
      state.cart.addItem(book, 1);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    // UPDATE_CART(state, item) {
    //   state.cart.update(item.book, item.quality);
    // },
    UPDATE_CART(state, { book, quantity }) {
      state.cart.update(book, quantity);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    SET_CART(state, shoppingCart) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(shoppingCart));
      let newCart = new ShoppingCart();
      shoppingCart.items.forEach((item) => {
        newCart.addItem(item.book, item.quantity);
      });
      state.cart = newCart;
    },
    CLEAR_CART(state) {
      localStorage.removeItem(CART_STORAGE_KEY);
      state.cart.clear();
    },
  },
  actions: {
    //capturing any asynchronous network calls, and other business logic
    fetchCategories(context) {
      ApiService.fetchCategories()
        .then((categories) => {
          console.log("Categories: ", categories);
          context.commit("SET_CATEGORIES", categories);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
    selectCategory(context, selectedCategoryName) {
      console.log("The selected category is: ", selectedCategoryName);
      context.commit("SET_CATEGORY", selectedCategoryName);
    },
    fetchSelectedCategoryBooks(context) {
      ApiService.fetchSelectedCategoryBooks(context.state.selectedCategoryName)
        .then((selectedCategoryBooks) => {
          console.log("SelectedCategoryBook: ", selectedCategoryBooks);
          context.commit("SET_SELECTED_CATEGORY_BOOKS", selectedCategoryBooks);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
    addToCart(context, book) {
      context.commit("ADD_TO_CART", book);
    },
    updateCart(context, { book, quantity }) {
      context.commit("UPDATE_CART", { book, quantity });
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
});
