import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticlesState } from 'state/types';
import ArticleAPI from 'api/article';

export const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: false,
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

export const fetchArticle = createAsyncThunk<Article, { articleId: string }>(
  'articles/fetchArticle',
  async ({ articleId }) => {
    const response = await ArticleAPI.get(articleId);
    return response.data;
  },
);

export const fetchCreateArticle = createAsyncThunk<Article, { title: string; body: string; accessToken: string }>(
  'articles/fetchCreateArticle',
  async ({ title, body, accessToken }) => {
    const response = await ArticleAPI.create(title, body, accessToken);
    return response.data;
  },
);

export const fetchEditArticle = createAsyncThunk<
  Article,
  { articleId: string; title: string; body: string; accessToken: string }
>('articles/fetchEditArticle', async ({ articleId, title, body, accessToken }) => {
  const response = await ArticleAPI.update(articleId, title, body, accessToken);
  return response.data;
});

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
      .addCase(fetchArticle.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchArticle.fulfilled, (state, { payload }) => {
        state.articles = [...state.articles, payload];
        state.isLoading = false;
      })
      .addCase(fetchArticle.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchCreateArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCreateArticle.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchEditArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEditArticle.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default articlesSlice.reducer;
