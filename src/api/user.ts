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
};

export default UserApi;
