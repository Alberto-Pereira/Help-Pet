import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 10000,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default api;
