import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ArticlesState } from 'state/types';

export const initialState: ArticlesState = {
  data: [],
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const res = await fetch('https://node-express-my-example-app.vercel.app/v1/articles');
  const json = await res.json();
  return json;
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
