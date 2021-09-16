export interface User {
  id: string;
  username: string;
}

export interface Token {
  token: string;
  expires: string;
}

export interface Article {
  id: string;
  title: string;
  body: string;
  user?: string;
}

export interface UserState {
  user?: User;
  tokens?: { access: Token; refresh: Token };
  isDark: boolean;
  error?: string;
}

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  error?: string;
}
