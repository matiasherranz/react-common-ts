import React, { SyntheticEvent, FC } from 'react';
import ReactModal, { setAppElement } from 'react-modal';
import classnames from 'classnames';

import isIE11 from '../../../utils/isIE11';

import './Modal.scss';

type PropTypes = {
  isOpen: boolean;
  children?: any;
  withPadding?: boolean;
  fullScreen?: boolean;
  showDismiss?: boolean;
  onDismiss?: (e: SyntheticEvent<unknown>) => void;
  onTop?: boolean;
  withoutOverlayBackground?: boolean;
  fixedHeight?: number;
  minWidth?: number | string;
  maxWidth?: number | string;
  overflowVisible?: boolean;
};

// The best way to position the modal is with flex box, but not all browsers support it
// In case we don't have support for flex box, we position things with display: table
const getModalStyles = (
  fixedHeight?: number,
  minWidth?: number | string,
  maxWidth?: number | string
) => {
  const overlay = {
    height: fixedHeight || '100%',
  };
  const content = {
    minWidth: minWidth || 'initial',
    maxWidth: maxWidth || 'initial',
  };

  return { overlay, content };
};

const Modal: FC<PropTypes> & {
  setAppElement: typeof setAppElement;
} = ({
  isOpen,
  children,
  withPadding,
  fullScreen,
  showDismiss,
  onDismiss,
  onTop,
  withoutOverlayBackground,
  fixedHeight,
  minWidth,
  maxWidth,
  overflowVisible,
  ...props
}: PropTypes) => {
    const supportsFlexBox = !isIE11();

    return (
      <ReactModal
        isOpen={isOpen}
        className={classnames('react-modal', { 'with-flexbox': supportsFlexBox })}
        overlayClassName={classnames('react-modal-overlay', {
          'with-flexbox': supportsFlexBox,
          'bg-transparent': withoutOverlayBackground,
        })}
        style={getModalStyles(fixedHeight, minWidth, maxWidth)}
        contentLabel="modal"
        onRequestClose={onDismiss}
        shouldCloseOnOverlayClick
        {...props}
      >
        <div
          className={classnames({
            modal: true,
            'with-padding': withPadding && !fullScreen,
            'full-screen': fullScreen,
            'on-top': onTop,
            'border-bot': withoutOverlayBackground,
            'overflow-visible': overflowVisible,
          })}
        >
          {showDismiss && (
            <div className="show-dismiss modal-header">
              <button
                aria-label="Close Modal"
                className="icon-ipsy-close-cross relative right pointer gray-dark"
                onClick={onDismiss}
              />
            </div>
          )}
          {children}
        </div>
      </ReactModal>
    );
  };

Modal.setAppElement = (...args) => setAppElement(...args);

export default Modal;
