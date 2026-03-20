import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://15.design.htmlacademy.pro/six-cities';
const timeout = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL,
    timeout,
  });

  return api;
};
