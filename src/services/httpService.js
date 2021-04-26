import axios from "axios";
import * as Sentry from "@sentry/react";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const hasExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!hasExpectedError) {
    Sentry.captureException(error);
    toast.error("An unexpected error occured.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  update: axios.update,
  delete: axios.delete,
};
