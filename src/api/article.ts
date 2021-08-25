import api from 'utils/api';
import { Article } from 'state/types';

const ArticleAPI = {
  all: (page = 1, limit = 10) =>
    api<{ results: Article[]; page: number; limit: number; totalPages: number; totoalResults: number }>({
      method: 'get',
      url: `/articles`,
      params: {
        page,
        limit,
      },
    }),
  get: (articleId: string) => api<Article>({ method: 'get', url: `/articles/${articleId}` }),
  create: (title: string, body: string, token: string) =>
    api<Article>({
      method: 'post',
      url: `/articles`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title,
        body,
      },
    }),
  update: (articleId: string, title: string, body: string, token: string) =>
    api<Article>({
      method: 'patch',
      url: `/articles/${articleId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title,
        body,
      },
    }),
  delete: (articleId: string, token: string) =>
    api<Article>({
      method: 'delete',
      url: `/articles/${articleId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default ArticleAPI;
