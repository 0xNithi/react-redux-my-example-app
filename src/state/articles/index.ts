import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Article, ArticlesState } from 'state/types';
import ArticleAPI from 'api/article';

export const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: undefined,
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

export const fetchArticle = createAsyncThunk<
  Article,
  { articleId: string },
  {
    rejectValue: { message: string };
  }
>('articles/fetchArticle', async ({ articleId }, { rejectWithValue }) => {
  try {
    const response = await ArticleAPI.get(articleId);
    return response.data;
  } catch (err) {
    const error: AxiosError<{ message: string }> = err as AxiosError<{ message: string }>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

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

export const fetchDeleteArticle = createAsyncThunk<Article, { articleId: string; accessToken: string }>(
  'articles/fetchDeleteArticle',
  async ({ articleId, accessToken }) => {
    const response = await ArticleAPI.delete(articleId, accessToken);
    return response.data;
  },
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    initialize: (state) => {
      return { ...initialState, articles: state.articles };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticles.pending ||
          fetchArticle.pending ||
          fetchCreateArticle.pending ||
          fetchEditArticle.pending ||
          fetchDeleteArticle.pending,
        (state) => {
          state.isLoading = true;
        },
      )
      .addCase(fetchArticles.fulfilled, (state, { payload: { results } }) => {
        state.articles = results;
        state.isLoading = false;
      })
      .addCase(fetchArticle.fulfilled, (state, { payload }) => {
        state.articles = [...state.articles, payload];
        state.isLoading = false;
      })
      .addCase(fetchArticle.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.message;
      })
      .addCase(fetchCreateArticle.fulfilled || fetchEditArticle.fulfilled || fetchDeleteArticle.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

// Actions
export const { initialize } = articlesSlice.actions;

export default articlesSlice.reducer;
