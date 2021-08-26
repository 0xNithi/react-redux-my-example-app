import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { Article } from 'state/types';
import { fetchArticles } from '.';

export const useFetchArticles = (): { articles: Article[] } => {
  const dispatch = useAppDispatch();
  const { articles } = useSelector<AppState, AppState['articles']>((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return { articles };
};
