import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { Article } from 'state/types';
import {
  fetchArticle,
  fetchArticles,
  fetchCreateArticle,
  fetchDeleteArticle,
  fetchEditArticle,
  initialize as initializeAction,
} from '.';

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
  error: boolean;
  handleView: (articleId: string) => Article | undefined;
  handleCreate: ({ title, body }: { title: string; body: string }) => void;
  handleEdit: ({ articleId, title, body }: { articleId: string; title: string; body: string }) => void;
  handleDelete: ({ articleId }: { articleId: string }) => void;
} => {
  const dispatch = useAppDispatch();
  const tokens = useSelector<AppState, AppState['user']['tokens']>((state) => state.user.tokens);
  const { articles, isLoading, error } = useSelector<AppState, AppState['articles']>((state) => state.articles);

  const handleView = useCallback(
    (articleId) => {
      const articleFound = articles.find((article) => article.id === articleId);
      if (!articleFound) dispatch(fetchArticle({ articleId }));
      return articleFound;
    },
    [articles, dispatch],
  );

  const handleCreate = useCallback(
    ({ title, body }) => tokens && dispatch(fetchCreateArticle({ title, body, accessToken: tokens.access.token })),
    [tokens, dispatch],
  );

  const handleEdit = useCallback(
    ({ articleId, title, body }) =>
      tokens && dispatch(fetchEditArticle({ articleId, title, body, accessToken: tokens.access.token })),
    [tokens, dispatch],
  );

  const handleDelete = useCallback(
    ({ articleId }) => tokens && dispatch(fetchDeleteArticle({ articleId, accessToken: tokens.access.token })),
    [tokens, dispatch],
  );

  useEffect(() => {
    dispatch(initializeAction());
  }, [dispatch]);

  return { isLoading, error, handleView, handleCreate, handleEdit, handleDelete };
};
