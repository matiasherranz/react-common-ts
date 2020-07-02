import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import IconButton, { SocialShareKeys } from '../src/components/IconButton';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .add('facebook', () => (
    <IconButton
      text={text('text', 'Share on Facebook')}
      socialShare={text('socialShare', 'facebook') as SocialShareKeys}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('clicked!')}
    />
  ))
  .add('facebook messenger', () => (
    <IconButton
      text={text('text', 'Message on Facebook')}
      socialShare={text('socialShare', 'messenger') as SocialShareKeys}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('clicked!')}
    />
  ))
  .add('sms', () => (
    <IconButton
      text={text('text', 'Invite with text message')}
      socialShare={text('socialShare', 'sms') as SocialShareKeys}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('clicked!')}
    />
  ))
  .add('email', () => (
    <IconButton
      text={text('text', 'Invite with email')}
      socialShare={text('socialShare', 'email') as SocialShareKeys}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('clicked!')}
    />
  ))
  .add('children', () => (
    <IconButton
      text={text('text', '')}
      socialShare={text('socialShare', '') as SocialShareKeys}
      fullWidth={boolean('fullWidth', false)}
      onClick={action('clicked!')}
    >
      <h1>{text('childrenText', 'This can also contain children')}</h1>
    </IconButton>
  ));
