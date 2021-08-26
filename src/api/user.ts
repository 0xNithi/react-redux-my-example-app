import api from 'utils/api';

const UserApi = {
  register: (username: string, password: string) =>
    api<{
      user: { id: string; username: string };
      tokens: { access: { token: string; expires: Date }; refresh: { token: string; expires: Date } };
    }>({
      method: 'post',
      url: '/auth/register',
      data: {
        username,
        password,
      },
    }),
  login: (username: string, password: string) =>
    api<{
      user: { id: string; username: string };
      tokens: { access: { token: string; expires: Date }; refresh: { token: string; expires: Date } };
    }>({
      method: 'post',
      url: '/auth/login',
      data: {
        username,
        password,
      },
    }),
};

export default UserApi;
