import { AxiosResponse } from 'axios';
import { Article, Token } from 'state/types';

export interface IArticleAPI {
  all: (
    page?: number,
    limit?: number,
  ) => Promise<
    AxiosResponse<{
      results: Article[];
      page: number;
      limit: number;
      totalPages: number;
      totoalResults: number;
    }>
  >;
  get: (articleId: string) => Promise<AxiosResponse<Article>>;
  create: (title: string, body: string, accessToken: string) => Promise<AxiosResponse<Article>>;
  update: (articleId: string, title: string, body: string, accessToken: string) => Promise<AxiosResponse<Article>>;
  delete: (articleId: string, accessToken: string) => Promise<AxiosResponse<Article>>;
}

export interface IUserAPI {
  current: (accessToken: string) => Promise<
    AxiosResponse<{
      id: string;
      username: string;
    }>
  >;
  register: (
    username: string,
    password: string,
  ) => Promise<
    AxiosResponse<{
      user: { id: string; username: string };
      tokens: { access: Token; refresh: Token };
    }>
  >;
  login: (
    username: string,
    password: string,
  ) => Promise<
    AxiosResponse<{
      user: { id: string; username: string };
      tokens: { access: Token; refresh: Token };
    }>
  >;
  logout: (refreshToken: string) => Promise<AxiosResponse>;
  refresh: (refreshToken: string) => Promise<AxiosResponse<{ access: Token; refresh: Token }>>;
}
