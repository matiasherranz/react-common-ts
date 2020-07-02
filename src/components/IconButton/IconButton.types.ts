import { ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButton';

enum SocialShare {
  email,
  facebook,
  messenger,
  sms,
  twitter,
}

type SocialShareKeys = keyof typeof SocialShare;

type IconButtonProps = {
  text?: string;
  socialShare?: SocialShareKeys;
  className?: string;
  fullWidth?: boolean;
  children?: ReactNode;
} & BaseButtonProps;

type SocialShareType = {
  className?: string;
  iconClassName?: string;
};

export { IconButtonProps, SocialShareType, SocialShareKeys };
