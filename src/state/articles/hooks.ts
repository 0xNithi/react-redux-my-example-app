import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { Article } from 'state/types';
import { fetchArticles, fetchCreateArticle } from '.';

export const useFetchArticles = (): { articles: Article[]; isLoading: boolean } => {
  const dispatch = useAppDispatch();
  const { articles, isLoading } = useSelector<AppState, AppState['articles']>((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return { articles, isLoading };
};

export const useArticle = (): {
  isLoading: boolean;
  handleCreate: ({ title, body }: { title: string; body: string }) => void;
} => {
  const dispatch = useAppDispatch();
  const tokens = useSelector<AppState, AppState['user']['tokens']>((state) => state.user.tokens);
  const isLoading = useSelector<AppState, AppState['articles']['isLoading']>((state) => state.articles.isLoading);

  const handleCreate = useCallback(
    ({ title, body }) => tokens && dispatch(fetchCreateArticle({ title, body, accessToken: tokens.access.token })),
    [tokens, dispatch],
  );

  return { isLoading, handleCreate };
};
