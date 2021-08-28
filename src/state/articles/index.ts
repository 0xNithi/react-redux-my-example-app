import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticlesState } from 'state/types';
import ArticleAPI from 'api/article';

export const initialState: ArticlesState = {
  articles: [],
};

export const fetchArticles = createAsyncThunk<{
  results: Article[];
  page: number;
  limit: number;
  totalPages: number;
  totoalResults: number;
}>('articles/fetchArticles', async () => {
  const response = await ArticleAPI.all();
  return response.data;
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, { payload: { results } }) => {
      state.articles = results;
    });
  },
});

export default articlesSlice.reducer;
