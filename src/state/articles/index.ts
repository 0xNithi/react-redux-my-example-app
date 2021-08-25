import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ArticlesState } from 'state/types';
import ArticleAPI from 'api/article';

export const initialState: ArticlesState = {
  data: [],
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await ArticleAPI.all();
  return response.data;
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  },
});

export default articlesSlice.reducer;
