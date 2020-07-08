import React from 'react';
import { render } from '@testing-library/react';

import Grid from './index';

it('renders without crashing', () => {
  const { container } = render(<Grid />);
  expect(container).toMatchSnapshot();
});
