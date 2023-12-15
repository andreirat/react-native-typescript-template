import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from 'react-native-dotenv';
import { createNotifications } from 'react-native-notificated';

import { AccessToken } from '../utils';

interface ClientOptions {
  includeAuth?: boolean;
  includeNotification?: boolean;
  includeInterceptors?: boolean;
  isImageRequest?: boolean;
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: API_URL,
};

const imageRequestConfig: AxiosRequestConfig = {
  ...defaultConfig,
  headers: { 'Content-Type': 'image/jpeg' },
};

const { notify } = createNotifications();

const configureRequest = async (config: InternalAxiosRequestConfig, options?: ClientOptions) => {
  if (options?.includeAuth) {
    const accessToken = await AccessToken.get();
    if (accessToken) {
      config.headers = config.headers ?? {};
      config.headers['Authorization'] = accessToken;
    }
  }

  return config;
};

const handleResponse = (response: AxiosResponse) => response.data;

const handleError = (error: AxiosError<any>, showNotification?: boolean) => {
  const errorMessage =
    error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'Something went wrong. Please try again.';

  if (showNotification) {
    notify('error', {
      params: {
        title: 'Oh, no 😔',
        description: errorMessage,
        style: {
          multiline: 2,
        },
      },
    });
  }

  console.error('API Error:', error);
  return Promise.reject(error);
};

const createClient = (options: ClientOptions = {}): AxiosInstance => {
  const config = options.isImageRequest ? imageRequestConfig : defaultConfig;
  const client = axios.create(config);

  if (options.includeInterceptors) {
    client.interceptors.request.use(config => configureRequest(config, options));
    client.interceptors.response.use(handleResponse, error => handleError(error, options.includeNotification));
  }

  return client;
};

export default createClient;
