import axios from "axios"
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const excludedRoutes = ["/api/user/register"];
    const shouldExclude = excludedRoutes.some(route => config.url.startsWith(route));


    if (!shouldExclude) {
      const token = Cookies.get(ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;