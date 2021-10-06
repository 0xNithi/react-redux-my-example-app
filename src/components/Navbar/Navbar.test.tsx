import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from 'state';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

afterEach(cleanup);

test('Should navigates home when you click the logo', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  userEvent.click(screen.getAllByText('Example')[0]);
  expect(global.window.location.pathname).toEqual('/');
});

test('Should navigates home when you click the home link', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  userEvent.click(screen.getAllByText('Home')[0]);
  expect(global.window.location.pathname).toEqual('/');
});

test('Should navigates sign-in when you click the sign-in link', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  userEvent.click(screen.getAllByText('Sign in')[0]);
  expect(global.window.location.pathname).toEqual('/login');
});

test('Should navigates sign-up when you click the sign-up link', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  userEvent.click(screen.getAllByText('Sign up')[0]);
  expect(global.window.location.pathname).toEqual('/register');
});
