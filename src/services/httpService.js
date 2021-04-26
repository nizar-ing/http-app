import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const hasExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!hasExpectedError) {
    console.log("Loging the error: ", error);
    alert("An unexpected error occured.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  update: axios.update,
  delete: axios.delete,
};
