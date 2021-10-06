import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Skeleton from './Skeleton';

afterEach(cleanup);

test('Should display properly', async () => {
  const { container } = render(<Skeleton />);

  expect(container.firstChild).toHaveClass('animate-pulse', 'rounded', 'w-full', 'h-full');
});
