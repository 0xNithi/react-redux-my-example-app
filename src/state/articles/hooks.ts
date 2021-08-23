import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { Article } from 'state/types';
import { fetchArticles } from '.';

export const useFetchArticles = (): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
};

export const useArticles = (): { articles: Article[] } => {
  const { data } = useSelector<AppState, AppState['articles']>((state) => state.articles);
  return { articles: data };
};
