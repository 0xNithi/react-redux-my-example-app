import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from 'state';
import '@testing-library/jest-dom';

import ThemeSwitcher from './ThemeSwitcher';

afterEach(cleanup);

test('Should toggle theme', async () => {
  const { container } = render(
    <Provider store={store}>
      <ThemeSwitcher />
    </Provider>,
  );

  expect(container.querySelectorAll('svg')[0]).toHaveClass('text-pink-500');
  expect(container.querySelectorAll('svg')[1]).toHaveClass('text-gray-300');

  userEvent.click(screen.getByRole('button'));
  expect(container.querySelectorAll('svg')[0]).toHaveClass('dark:text-gray-600');
  expect(container.querySelectorAll('svg')[1]).toHaveClass('dark:text-pink-400');
});
