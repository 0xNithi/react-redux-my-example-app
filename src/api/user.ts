import api from 'utils/api';
import { IUserAPI } from './types';

const UserApi: IUserAPI = {
  current: (accessToken) =>
    api({
      method: 'get',
      url: '/users',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  register: (username, password) =>
    api({
      method: 'post',
      url: '/auth/register',
      data: {
        username,
        password,
      },
    }),
  login: (username, password) =>
    api({
      method: 'post',
      url: '/auth/login',
      data: {
        username,
        password,
      },
    }),
  logout: (refreshToken) =>
    api({
      method: 'post',
      url: '/auth/logout',
      data: {
        refreshToken,
      },
    }),
  refresh: (refreshToken) =>
    api({
      method: 'post',
      url: '/auth/refresh-tokens',
      data: {
        refreshToken,
      },
    }),
  update: (accessToken, username, password) =>
    api({
      method: 'patch',
      url: '/users',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        username,
        password,
      },
    }),
};

export default UserApi;
