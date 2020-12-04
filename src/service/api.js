import axios from "axios";

const api = axios.create({
  baseURL: "https://helppet-backend.herokuapp.com",
});

export default api;
