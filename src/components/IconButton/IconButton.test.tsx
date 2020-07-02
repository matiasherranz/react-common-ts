import React from 'react';
import { render } from '@testing-library/react';

import IconButton from './IconButton';

describe('IconButton', () => {
  test('renders without crashing', () => {
    render(<IconButton />);
  });

  test('basic rendering with all props', () => {
    const { container } = render(
      <IconButton
        text="Share on Facebook"
        socialShare="facebook"
        fullWidth
        onClick={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('basic rendering only with text', () => {
    const text = 'Default button';
    const { container, getByText } = render(<IconButton text={text} />);
    expect(container).toMatchSnapshot();
    expect(getByText(text)).toBeVisible();
  });

  test('basic rendering with children', () => {
    const childrenText = 'Test children';
    const { container, getByText } = render(
      <IconButton>
        <p className="paragraph">{childrenText}</p>
      </IconButton>
    );

    const childrenElement = getByText(childrenText);
    expect(container).toMatchSnapshot();
    expect(childrenElement).toHaveClass('paragraph');
    expect(childrenElement).toBeVisible();
  });
});
