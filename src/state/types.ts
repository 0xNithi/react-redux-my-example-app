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
  user: User | undefined;
  tokens: { access: Token; refresh: Token } | undefined;
  isDark: boolean;
}

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  error: boolean;
}
