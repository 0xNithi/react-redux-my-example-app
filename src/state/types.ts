export interface Article {
  id: string;
  title: string;
  body: string;
}

export interface UserState {
  data:
    | {
        userId: string;
        username: string;
      }
    | undefined;
  token: string;
  isDark: boolean;
}

export interface ArticlesState {
  data: Article[];
}
