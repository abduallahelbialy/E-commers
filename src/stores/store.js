// store.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    username: "",
    email: "",
    password: "",
  }),
  actions: {
    login(username) {
      this.isLoggedIn = true;
      this.username = username;
    },
    logout() {
      this.isLoggedIn = false;
      this.username = "";
    },
    signup(userData) {
      this.username = userData.username;
      this.email = userData.email;
      this.password = userData.password;
      this.isLoggedIn = true;
    },
  },
});
