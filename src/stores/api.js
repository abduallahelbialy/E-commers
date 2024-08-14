import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";

export const getUsers = () => {
  return axios.get(`${baseURL}users`);
};

export const getProducts = () => {
  return axios.get(`${baseURL}products`);
};
