import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [],
    cart: [],
  },
  mutations: {
    ADD_TO_FAVORITES(state, card) {
      state.favorites.push(card);
    },
    REMOVE_FROM_FAVORITES(state, cardId) {
      state.favorites = state.favorites.filter((card) => card.id !== cardId);
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
  actions: {
    toggleFavorite({ commit, state }, card) {
      const index = state.favorites.findIndex((fav) => fav.id === card.id);
      if (index !== -1) {
        commit("REMOVE_FROM_FAVORITES", card.id);
      } else {
        commit("ADD_TO_FAVORITES", card);
      }
    },
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, productId) {
      commit("REMOVE_FROM_CART", productId);
    },
  },
  getters: {
    isFavorite: (state) => (cardId) => {
      return state.favorites.some((fav) => fav.id === cardId);
    },
    favorites: (state) => {
      return state.favorites;
    },
    cartItems(state) {
      return state.cart;
    },
    cartCount(state) {
      return state.cart.length;
    },
  },
});
