import axios from "axios";
import { HOST_URL } from "./endpoints";
import { beginRequest, endRequest } from "../components/common/commonActions";
import { DispatchService } from "../services/dispatchService";
import { StorageKeys } from '../utils/constants';
import { AsyncStorage } from 'react-native';
const { getDispatch } = DispatchService;
const http = axios.create({
  baseURL: HOST_URL,
  timeout: 60 * 1000,
  headers: { Pragma: "no-cache" },
});

http.interceptors.request.use(
  config => {
    const cfg = config;
    const url = cfg.url.toLowerCase();
    let dispatch = getDispatch();
    dispatch && dispatch(beginRequest());
    if (url.endsWith('login')
      || url.endsWith('register')
      || url.endsWith('forgot-password')
      || url.endsWith('changepassword')) {  //to do
      return cfg;
    }
    return getAuthToken()
      .then((tokenResponse) => {
        cfg.headers.Authorization = `Bearer ${tokenResponse}`;
        return Promise.resolve(cfg);
      })
      .catch(error => Promise.reject(error));
  },
  error => {
    return Promise.reject(error);
  }
);



http.interceptors.response.use((response) => {
  let dispatch = getDispatch();
  dispatch && dispatch(endRequest());
  return response;
},
  (error) => {
    let dispatch = getDispatch();
    dispatch && dispatch(endRequest());
    return Promise.reject(error);
  }
);



const getAuthToken = () => new Promise((resolve, reject) => {
  AsyncStorage.getItem(StorageKeys.AccessToken, (err, data) => {
    if (data !== null) {
      resolve(data);
    } else {
      reject(err);
    }
  });
});
console.log("http service", Date.now());
export { http };
