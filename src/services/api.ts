import axios, { type AxiosError, type AxiosResponse } from 'axios';
import { API_ENDPOINT } from '@/config/constants';

const api = axios.create({
  baseURL: API_ENDPOINT,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // if (error.response?.status === 401) {
    //   localStorage.removeItem('authToken');
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

export default api;
