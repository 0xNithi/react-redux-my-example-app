import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { User } from 'state/types';
import { fetchLogout, fetchRefreshToken, fetchUser, toggleTheme as toggleThemeAction } from '.';

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

export const useUser = (): { user: User | undefined; handleLogout: () => void } => {
  const dispatch = useAppDispatch();
  const { user, tokens } = useSelector<AppState, AppState['user']>((state) => state.user);

  const handleLogout = useCallback(
    () => tokens && dispatch(fetchLogout({ refreshToken: tokens.refresh.token })),
    [dispatch, tokens],
  );

  return { user, handleLogout };
};
