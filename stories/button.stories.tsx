import React, { FC, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from '../src/components/Button';
import '../src/index.scss';

type Props = {
  children: ReactNode;
};
const Content: FC<Props> = ({ children }) => (
  <div className="ux bootstrap-grid">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">{children}</div>
      </div>
    </div>
  </div>
);

const defaultProps = {
  main: true,
  noPadding: true,
  onClose: action('close'),
};

storiesOf('Button', module)
  .add('big', () => <Button main big text="Buy Now" />)
  .add('big full-width', () => <Button main big fullWidth text="Buy Now" />)
  .add('big outline', () => <Button main big outline text="Buy Now" />)
  .add('big disabled', () => <Button main big disabled text="Buy Now" />)
  .add('medium', () => <Button main medium text="Buy Now" />)
  .add('small', () => <Button main small text="Buy Now" />)
  .add('button link for modal', () => (
    <div className="bg-white">
      <Button
        main
        big
        fullWidth
        link
        className="border-top align-center padding-v-20"
        text="Got It"
        onClick={action('clicked')}
      />
    </div>
  ))
  .add('button medium nexto to button outline', () => (
    <div className="padding flat-white">
      <Button
        main
        medium
        outline
        className="margin-right"
        text="Back"
        onClick={action('clicked')}
      />
      <Button main medium text="Next" onClick={action('clicked')} />
    </div>
  ));

storiesOf('Button/Playground', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Content>
      <Button
        {...defaultProps}
        big={boolean('big', true)}
        medium={boolean('medium', false)}
        small={boolean('small', false)}
        outline={boolean('outline', false)}
        disabled={boolean('disabled', false)}
        gray={boolean('gray', false)}
        noPadding={boolean('noPadding', false)}
        fullWidth={boolean('fullWidth', false)}
        text="Buy Now"
      />
    </Content>
  ));
