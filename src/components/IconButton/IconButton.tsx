import React, { FC } from 'react';
import classnames from 'classnames';

import BaseButton from '../BaseButton';
import { IconButtonProps, SocialShareType } from './IconButton.types';

const socialShareTypes: Record<string, SocialShareType> = {
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
