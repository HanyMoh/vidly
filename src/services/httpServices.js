import axios from "axios";
import logger from "./logServices";
import { toast } from "react-toastify";

axios.defaults.headers.common["X-APP-Token"] = "hanz";
axios.defaults.headers.common["Cache-Control"] = "no-store, no-cache";
axios.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
