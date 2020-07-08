import React from 'react';
import { render } from '@testing-library/react';

import Row from './index';

it('renders without crashing', () => {
  const { container } = render(<Row />);
  expect(container).toMatchSnapshot();
});
