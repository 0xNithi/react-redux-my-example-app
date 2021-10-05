import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NotFound from './NotFound';

afterEach(cleanup);

test('Should display properly', async () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
  );

  expect(screen.getByRole('link')).not.toBeDisabled();
});
