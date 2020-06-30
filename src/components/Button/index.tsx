import React, { FC, SyntheticEvent } from 'react';
import classnames from 'classnames';

import './Button.scss';
import BaseButton, { BaseButtonProps } from '../BaseButton';

export interface ButtonProps extends BaseButtonProps {
  link?: boolean;
  secondary?: boolean;
  main?: boolean;
  big?: boolean;
  medium?: boolean;
  small?: boolean;
  outline?: boolean;
  disabled?: boolean;
  gray?: boolean;
  noPadding?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
}

const Button: FC<ButtonProps> = ({
  link,
  secondary,
  main,
  big,
  medium,
  small,
  outline = false,
  disabled = false,
  gray = false,
  noPadding = false,
  fullWidth = false,
  className,
  ...props
}) => {
  const classNames = classnames(
    {
      button: true,
      link,
      secondary,
      'btn-main': main,
      'btn-lg': big,
      'btn-md': medium,
      'btn-sm': small,
      'btn-outline': outline,
      'btn-disabled': disabled,
      'btn-gray': gray,
      'no-padding': noPadding,
      block: fullWidth,
    },
    className
  );

  return <BaseButton {...props} disabled={disabled} className={classNames} />;
};

export default Button;
