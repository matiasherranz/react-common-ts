import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

import BaseButton, { BaseButtonProps } from '../BaseButton';

enum SocialShare {
  email,
  facebook,
  messenger,
  sms,
  twitter,
}

export type SocialShareKeys = keyof typeof SocialShare;

export type IconButtonProps = {
  text?: string;
  socialShare?: SocialShareKeys;
  className?: string;
  fullWidth?: boolean;
  children?: ReactNode;
} & BaseButtonProps;

export type SocialShareType = {
  className?: string;
  iconClassName?: string;
};

const socialShareTypes: Record<SocialShareKeys, SocialShareType> = {
  email: {
    className: '',
    iconClassName: 'ipsy-icon icon-ipsy-email',
  },
  facebook: {
    className: 'btn-facebook',
    iconClassName: 'ipsy-icon icon-ipsy-facebook',
  },
  messenger: {
    className: 'btn-facebook-messenger',
    iconClassName: 'ipsy-icon icon-ipsy-fb-messenger',
  },
  sms: {
    className: 'btn-invite-sms',
    iconClassName: 'ipsy-icon icon-ipsy-sms',
  },
  twitter: {
    className: 'btn-twitter',
    iconClassName: 'ipsy-icon icon-ipsy-twitter',
  },
};

const getSocialShareType = (type?: string): SocialShareType => {
  if (!type) return {};
  const result = socialShareTypes[type];
  return result || {};
};

const IconButton: FC<IconButtonProps> = ({
  text,
  socialShare,
  className,
  fullWidth,
  children,
  ...otherProps
}) => {
  const socialShareType = getSocialShareType(socialShare);

  return (
    <BaseButton
      className={classnames(
        {
          'btn-icon': true,
          'btn-social-media': socialShare,
          block: fullWidth,
        },
        className,
        socialShareType.className
      )}
      {...otherProps}
    >
      <span className={socialShareType.iconClassName} />
      {text || children}
    </BaseButton>
  );
};

export default IconButton;
