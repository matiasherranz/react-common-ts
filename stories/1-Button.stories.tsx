import React, { ReactElement } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    info: { inline: true },
  },
};

export const Text = (): ReactElement => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = (): ReactElement => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
