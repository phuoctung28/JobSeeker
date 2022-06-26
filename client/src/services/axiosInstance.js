import queryString from "querystring";
import axios from "axios";
const baseURL = "http://localhost:8080/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 10000,
})

export default axiosInstance;