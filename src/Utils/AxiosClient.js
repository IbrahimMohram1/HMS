import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://upskilling-egypt.com:3000",
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
