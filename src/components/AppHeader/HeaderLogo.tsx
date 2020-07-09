import React, { FC } from 'react';
import type { HeaderLogoPropTypes } from './types';
import { headerTypes } from './types';
import { noop } from '../../lib/utils';

const HeaderLogo: FC<HeaderLogoPropTypes> = ({
  type,
  onClick,
  url,
  loading,
  RenderLink,
}: HeaderLogoPropTypes) => {
  const { SPLASH, CROSS, NATIVE_IOS, MOBILE, MINIMAL, DEFAULT } = headerTypes;
  switch (type) {
    case SPLASH:
      return (
        <button
          id="ipsy-logo-header"
          onClick={onClick}
          className="logo"
          aria-label="ipsy"
        >
          <span className="icon-ipsy-logo" />
        </button>
      );

    case NATIVE_IOS:
      return (
        <RenderLink
          id="ipsy-logo-header"
          className="logo nav-list-logo logo-center"
          onClick={onClick}
          url={url}
          aria-label="ipsy"
        >
          <span className="icon-ipsy-logo" />
        </RenderLink>
      );

    case MOBILE:
    case CROSS:
    case MINIMAL:
    case DEFAULT:
      return (
        <RenderLink
          id={type !== MOBILE ? 'ipsy-logo-header-container' : ''}
          url={url}
          aria-label="ipsy"
          onClick={type === MINIMAL && loading ? noop : onClick}
          className={type !== MOBILE ? 'block' : ''}
        >
          <div
            id="ipsy-logo-header"
            className={`logo ${
              MOBILE ? 'nav-list-logo inline-block' : MINIMAL ? 'pointer' : ''
            }`}
          >
            <span className="icon-ipsy-logo" />
          </div>
        </RenderLink>
      );
    default:
      return <></>;
  }
};

export default HeaderLogo;
