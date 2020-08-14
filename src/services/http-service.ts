import axios, { AxiosResponse, AxiosError } from 'axios';

axios.defaults.baseURL = API_URL;
// axios.defaults.headers = { Authorization: webGlobal.token };

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      console.log('An unexpected error occurrred and could not get requested items.');
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};
