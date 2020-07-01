import { SyntheticEvent } from 'react';

import { BaseButtonProps } from '../BaseButton';

type ButtonProps = {
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
} & BaseButtonProps;

export default ButtonProps;
