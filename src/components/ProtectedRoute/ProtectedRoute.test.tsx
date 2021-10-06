import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import store from 'state';
import '@testing-library/jest-dom';

import ProtectedRoute from './ProtectedRoute';

afterEach(cleanup);

test('Should redirect to login page', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ProtectedRoute />
      </BrowserRouter>
    </Provider>,
  );

  expect(global.window.location.pathname).toEqual('/login');
});
