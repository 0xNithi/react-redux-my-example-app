import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return axios
    .create({
      baseURL: 'https://node-express-my-example-app.vercel.app/v1/',
      responseType: 'json',
    })
    .request<T>(config);
};
