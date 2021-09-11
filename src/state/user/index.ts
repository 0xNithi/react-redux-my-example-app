import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from 'api/user';
import { Token, User, UserState } from 'state/types';

export const initialState: UserState = {
  user: undefined,
  tokens: undefined,
  isDark: false,
};

export const fetchRegister = createAsyncThunk<
  {
    user: User;
    tokens: {
      access: Token;
      refresh: Token;
    };
  },
  { username: string; password: string }
>('user/fetchRegister', async ({ username, password }) => {
  const response = await UserApi.register(username, password);
  return response.data;
});

export const fetchLogin = createAsyncThunk<
  {
    user: User;
    tokens: {
      access: Token;
      refresh: Token;
    };
  },
  { username: string; password: string }
>('user/fetchLogin', async ({ username, password }) => {
  const response = await UserApi.login(username, password);
  return response.data;
});

export const fetchLogout = createAsyncThunk<void, { refreshToken: string }>(
  'user/fetchLogout',
  async ({ refreshToken }) => {
    await UserApi.logout(refreshToken);
  },
);

export const fetchUser = createAsyncThunk<User, { accessToken: string }>('user/fetchUser', async ({ accessToken }) => {
  const response = await UserApi.current(accessToken);
  return response.data;
});

export const fetchRefreshToken = createAsyncThunk<
  {
    access: Token;
    refresh: Token;
  },
  { refreshToken: string }
>('user/fetchRefreshToken', async ({ refreshToken }) => {
  const response = await UserApi.refresh(refreshToken);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialize: (state) => {
      state.user = initialState.user;
      state.tokens = initialState.tokens;
    },
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, { payload: { user, tokens } }) => {
        state.user = user;
        state.tokens = tokens;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload: { user, tokens } }) => {
        state.user = user;
        state.tokens = tokens;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = undefined;
        state.tokens = undefined;
      })
      .addCase(fetchUser.fulfilled, (state, { payload: { id, username } }) => {
        state.user = {
          id,
          username,
        };
      })
      .addCase(fetchRefreshToken.fulfilled, (state, { payload: { access, refresh } }) => {
        state.tokens = {
          access,
          refresh,
        };
      });
  },
});

// Actions
export const { initialize, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
