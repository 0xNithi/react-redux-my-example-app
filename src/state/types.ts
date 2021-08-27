export interface Token {
  token: string;
  expires: string;
}

export interface Article {
  id: string;
  title: string;
  body: string;
}

export interface UserState {
  user:
    | {
        id: string;
        username: string;
      }
    | undefined;
  tokens: { access: Token; refresh: Token } | undefined;
  isDark: boolean;
}

export interface ArticlesState {
  articles: Article[];
}
