import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from 'api/user';
import { UserState } from 'state/types';

export const initialState: UserState = {
  user: undefined,
  tokens: undefined,
  isDark: false,
};

export const fetchRegister = createAsyncThunk<
  {
    user: { id: string; username: string };
    tokens: { access: { token: string; expires: Date }; refresh: { token: string; expires: Date } };
  },
  { username: string; password: string }
>('user/fetchRegister', async ({ username, password }) => {
  const response = await UserApi.register(username, password);
  return response.data;
});

export const fetchLogin = createAsyncThunk<
  {
    user: { id: string; username: string };
    tokens: { access: { token: string; expires: Date }; refresh: { token: string; expires: Date } };
  },
  { username: string; password: string }
>('user/fetchLogin', async ({ username, password }) => {
  const response = await UserApi.login(username, password);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      });
  },
});

// Actions
export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
