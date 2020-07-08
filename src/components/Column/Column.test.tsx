import React from 'react';
import { render } from '@testing-library/react';

import Column from './index';

it('renders without crashing', () => {
  const { container } = render(<Column />);
  expect(container).toMatchSnapshot();
});
