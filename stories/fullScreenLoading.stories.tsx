/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  boolean,
  number,
  text,
  select,
} from '@storybook/addon-knobs';

import FullScreenLoading from '../src/components/FullScreenLoading';
import personalizationAnimatedImage from './images/personalization_animated_image.gif';
import personalizationStillImage from './images/personalization_still_image.jpg';

storiesOf('FullScreenLoading / Basic', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <div style={{ width: '500px', margin: 'auto', border: '1px solid' }}>
      <FullScreenLoading
        loading={boolean('loading', true)}
        opacity={number('opacity', 0.9)}
        spinnerWidth={number('spinnerWidth', 44)}
        message={text('message', 'Hi there! This is a loading message')}
      >
        Aloha! This is a fullscreen loading component.
      </FullScreenLoading>
    </div>
  ));

storiesOf('FullScreenLoading / Image override', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <div style={{ width: '500px', margin: 'auto', border: '1px solid' }}>
      <FullScreenLoading
        loading={boolean('loading', true)}
        opacity={number('opacity', 0.9)}
        message={text('message', 'Hi there! This is a loading message')}
        imageOverride={select<string | undefined>(
          'imageOverride',
          [undefined, personalizationAnimatedImage, personalizationStillImage],
          undefined
        )}
        imageOverrideType={select<string | undefined>(
          'imageOverrideType',
          [undefined, 'ANIMATED', 'NOT_ANIMATED'] as string[],
          undefined
        )}
      >
        Aloha! This is a fullscreen loading component.
      </FullScreenLoading>
    </div>
  ));

storiesOf('FullScreenLoading / Timeout', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <div style={{ width: '500px', margin: 'auto', border: '1px solid' }}>
      <FullScreenLoading
        opacity={number('opacity', 0.9)}
        spinnerWidth={number('spinnerWidth', 44)}
        message={text('message', 'Hi there! This is a loading message')}
        timeout={number('timeout', 5000)}
        imageOverride={select<string | undefined>(
          'imageOverride',
          [undefined, personalizationAnimatedImage, personalizationStillImage],
          undefined
        )}
        imageOverrideType={select<string | undefined>(
          'imageOverrideType',
          [undefined, 'ANIMATED', 'NOT_ANIMATED'] as string[],
          undefined
        )}
      >
        Aloha! This is a fullscreen loading component.
      </FullScreenLoading>
    </div>
  ));
