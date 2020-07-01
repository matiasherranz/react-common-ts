import React, { FC } from 'react';
import classnames from 'classnames';

import BaseButton from '../BaseButton';
import { ButtonProps } from './Button.types';

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
