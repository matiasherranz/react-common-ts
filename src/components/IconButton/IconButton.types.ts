import { ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButton';

type IconButtonProps = {
  text?: string;
  socialShare?: string;
  className?: string;
  fullWidth?: boolean;
  children?: ReactNode;
} & BaseButtonProps;

type SocialShareType = {
  className?: string;
  iconClassName?: string;
};

export { IconButtonProps, SocialShareType };
