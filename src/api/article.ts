import api from '.';
import { IArticleAPI } from './types';

const ArticleAPI: IArticleAPI = {
  all: (page = 1, limit = 10) =>
    api({
      method: 'get',
      url: `/articles`,
      params: {
        page,
        limit,
      },
    }),
  get: (articleId) => api({ method: 'get', url: `/articles/${articleId}` }),
  create: (title, body, accessToken) =>
    api({
      method: 'post',
      url: `/articles`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        title,
        body,
      },
    }),
  update: (articleId, title, body, accessToken) =>
    api({
      method: 'patch',
      url: `/articles/${articleId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        title,
        body,
      },
    }),
  delete: (articleId, accessToken) =>
    api({
      method: 'delete',
      url: `/articles/${articleId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default ArticleAPI;
