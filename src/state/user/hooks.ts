import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { User } from 'state/types';
import { FormLogin } from 'pages/Login/types';
import {
  fetchLogin,
  fetchLogout,
  fetchRefreshToken,
  fetchRegister,
  fetchUser,
  toggleTheme as toggleThemeAction,
} from '.';

export const useTheme = (): [boolean, () => void] => {
  const dispatch = useAppDispatch();
  const isDark = useSelector<AppState, AppState['user']['isDark']>((state) => state.user.isDark);

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  return [isDark, toggleTheme];
};

export const useFetchUser = (): void => {
  const dispatch = useAppDispatch();
  const tokens = useSelector<AppState, AppState['user']['tokens']>((state) => state.user.tokens);

  useEffect(() => {
    if (tokens)
      if (Date.parse(tokens.access.expires) > Date.now()) {
        dispatch(fetchUser({ accessToken: tokens.access.token }));
      } else if (Date.parse(tokens.refresh.expires) > Date.now()) {
        dispatch(fetchRefreshToken({ refreshToken: tokens.refresh.token }));
      }
  }, [tokens, dispatch]);
};

export const useUser = (): {
  user: User | undefined;
  handleRegister: ({ username, password }: FormLogin) => void;
  handleLogin: ({ username, password }: FormLogin) => void;
  handleLogout: () => void;
} => {
  const dispatch = useAppDispatch();
  const { user, tokens } = useSelector<AppState, AppState['user']>((state) => state.user);

  const handleRegister = useCallback(
    ({ username, password }) => dispatch(fetchRegister({ username, password })),
    [dispatch],
  );

  const handleLogin = useCallback(({ username, password }) => dispatch(fetchLogin({ username, password })), [dispatch]);

  const handleLogout = useCallback(
    () => tokens && dispatch(fetchLogout({ refreshToken: tokens.refresh.token })),
    [dispatch, tokens],
  );

  return { user, handleRegister, handleLogin, handleLogout };
};
