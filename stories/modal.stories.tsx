import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Button from '../src/components/Button';
import Modal from '../src/components/Modal';

Modal.setAppElement('#root');

const defaultProps = {
  isOpen: true,
  withPadding: true,
  onDismiss: action('dismiss'),
};

const content = (
  <div>
    <div className="ux container">
      <div className="row">
        <div className="col-xs-12">
          <div />
        </div>
      </div>
    </div>
  </div>
);

const modalContent = (
  <div className="ux text-center" key="modalTxt">
    <h2 className="margin-bot-20">Modal</h2>
    <div className="text-line-height">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
);

const btnMain = (
  <Button
    main
    big
    fullWidth
    className="align-center margin-top"
    text="Close"
    onClick={action('clicked')}
    key="modalBtn"
  />
);

const btnLink = (
  <Button
    main
    big
    fullWidth
    link
    className="border-top align-center padding-v-20"
    text="Got It"
    onClick={action('clicked')}
    key="modalBtn"
  />
);

storiesOf('Modal', module)
  .add('default', () => (
    <>
      {content}
      <Modal {...defaultProps}>{modalContent}</Modal>
    </>
  ))
  .add('without padding', () => (
    <>
      content
      <Modal {...defaultProps} showDismiss={false} withPadding={false}>
        {modalContent}
      </Modal>
    </>
  ))
  .add('with dismiss', () => (
    <>
      content
      <Modal {...defaultProps} showDismiss>
        {modalContent}
      </Modal>
    </>
  ))
  .add('with regular pink button', () => (
    <>
      content
      <Modal {...defaultProps}>
        {modalContent}
        {btnMain}
      </Modal>
    </>
  ))
  .add('with link  button', () => (
    <>
      content
      <Modal {...defaultProps} withPadding={false}>
        <div className="padding-h padding-bot">{modalContent}</div>
        {btnLink}
      </Modal>
    </>
  ))
  .add('with mobile full screen', () => (
    <>
      content
      <Modal {...defaultProps} showDismiss={false} fullScreen>
        {modalContent}
      </Modal>
    </>
  ));

storiesOf('Modal/Playground', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      {[
        content,
        <Modal
          key="modal"
          {...defaultProps}
          isOpen={boolean('Open', true)}
          withPadding={boolean('withPadding', true)}
          fullScreen={boolean('Full Screen', false)}
          showDismiss={boolean('Dismiss', false)}
          minWidth={number('Min Width', 100)}
          maxWidth={number('Max Width', 100)}
          withoutOverlayBackground={boolean(
            'Without Overlay Background',
            false
          )}
          onTop={boolean('on Top', false)}
        >
          {modalContent}
        </Modal>,
      ]}
    </div>
  ));
