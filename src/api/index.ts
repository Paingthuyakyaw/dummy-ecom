import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://dummyjson.com/",
});

export const headerJson = () => ({
  "Content-Type": "application/json",
});
