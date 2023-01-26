import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig } from "axios";
import Config from "react-native-config";

import ENCRYPTION_ENUM from "utilities/encryption/encryptionEnum";
import actions from "./Constants";

export const instance = axios.create({
  baseURL: Config.API_URL,
  timeout: parseInt(Config.API_TIME_OUT || "0"),
});
instance.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const token = await AsyncStorage.getItem(ENCRYPTION_ENUM.access_token);

  if (request && request.url !== actions.LOGIN && request.headers && token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response.status);
  },
);
