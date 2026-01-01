/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import axios from "axios";

// Utils & Config
import { HOST_API } from "../constants/config-global";

/* -------------------------------------------------------------------------- */
/*                         CENTRALIZED AXIOS INSTANCE                         */
/* -------------------------------------------------------------------------- */
const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

/* -------------------------------------------------------------------------- */
/*                              FETCH DATA AXIOS                              */
/* -------------------------------------------------------------------------- */
//@TO DO : Use it with SWR or React Query
//@TO DO : If you are using Typescript add this async (args: string | [string, AxiosRequestConfig])
export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axiosInstance.get(url, { ...config });
  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                  ENDPOINTS                                 */
/* -------------------------------------------------------------------------- */
export const endpoints = {
  auth: {
    login: '/auth/login',
  },
  movies: {
    list: '/posts',
    //details: (id) => `posts/${id}`
  }
};