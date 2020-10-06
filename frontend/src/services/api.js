import axios from "axios";
import { getToken } from "./auth";
//substituir em produção a baseURL = //"http://127.0.0.1:3333" //process.env.REACT_APP_API_URL
const api = axios.create({
  baseURL: "http://127.0.0.1:3333" // process.env.REACT_APP_API_URL 
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
