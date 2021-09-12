import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticlesState } from 'state/types';
import ArticleAPI from 'api/article';

export const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
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

export const fetchCreateArticle = createAsyncThunk<Article, { title: string; body: string; accessToken: string }>(
  'articles/fetchCreateArticle',
  async ({ title, body, accessToken }) => {
    const response = await ArticleAPI.create(title, body, accessToken);
    return response.data;
  },
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, { payload: { results } }) => {
        state.articles = results;
        state.isLoading = false;
      })
      .addCase(fetchCreateArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCreateArticle.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default articlesSlice.reducer;
