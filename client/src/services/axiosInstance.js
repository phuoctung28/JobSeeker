import axios from "axios";
const baseURL = "http://localhost:8080/api";

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

export default axiosInstance;