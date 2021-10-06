import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from './Layout';

afterEach(cleanup);

test('Should display properly', async () => {
  const { container } = render(
    <HelmetProvider>
      <Layout title="test" />
    </HelmetProvider>,
  );

  expect(container.firstChild).toHaveClass('p-2', 'mx-auto', 'mt-20', 'w-full', 'max-w-6xl');
});

test('Should have title properly', async () => {
  const context = {};
  HelmetProvider.canUseDOM = false;
  render(
    <HelmetProvider context={context}>
      <Layout title="test" />
    </HelmetProvider>,
  );

  expect((context as any).helmet.title.toString()).toContain('test');
});
