import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, AppState } from 'state';
import { toggleTheme as toggleThemeAction } from '.';

export const useTheme = (): [boolean, () => void] => {
  const dispatch = useAppDispatch();
  const isDark = useSelector<AppState, AppState['user']['isDark']>((state) => state.user.isDark);

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  return [isDark, toggleTheme];
};
