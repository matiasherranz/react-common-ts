import React from 'react';
import { render } from '@testing-library/react';

import FullScreenLoading from './index';

it('renders without crashing', () => {
  const { container } = render(<FullScreenLoading />);
  expect(container).toMatchSnapshot();
});
