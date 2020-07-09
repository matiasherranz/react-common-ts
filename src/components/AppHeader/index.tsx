import React, { FC } from 'react';
import HeaderMinimum from './HeaderMinimum';
import HeaderDefault from './HeaderDefault';
import HeaderNativeIos from './HeaderNativeIos';
import HeaderSplash from './HeaderSplash';
import HeaderCross from './HeaderCross';
import DefaultRenderLink from '../RenderLink/DefaultRenderLink';
import withValidRenderLink from '../RenderLink/withValidRenderLink';
import type {
  HeaderType,
  HeaderItemType,
  PropTypes,
  ResolveHeaderPropTypes,
  LogoType,
} from './types';
import { headerTypes } from './types';
import { getAuthItems, getNonAuthItems } from './items';
import './Header.scss';
import { RenderLinkType } from '../RenderLink';

const resolveHeaderType = ({
  isNativeIOS,
  minimum,
  splash,
  cross,
}: ResolveHeaderPropTypes) => {
  const { NATIVE_IOS, MINIMAL, SPLASH, CROSS, DEFAULT } = headerTypes;
  if (isNativeIOS) return NATIVE_IOS;
  if (minimum) return MINIMAL;
  if (splash) return SPLASH;
  if (cross) return CROSS;
  return DEFAULT;
};

const getHeader = (
  isAuth: boolean,
  headerType: HeaderType,
  items: HeaderItemType[],
  renderLink: RenderLinkType,
  logo: LogoType,
  props: PropTypes
) => {
  const RenderLink = withValidRenderLink(renderLink);
  const onBackClick = () => props.onBackClick && props.onBackClick();
  const { NATIVE_IOS, MINIMAL, SPLASH, CROSS } = headerTypes;
  if (props && props.minimum) {
    return <HeaderMinimum RenderLink={RenderLink} logo={logo} {...props} />;
  }
  switch (headerType) {
    case NATIVE_IOS:
      if (isAuth || props.loading) {
        return (
          <HeaderNativeIos
            items={items}
            isAuth={isAuth}
            logo={logo}
            onBackClick={onBackClick}
            RenderLink={RenderLink}
            {...props}
          />
        );
      }
      return (
        <HeaderDefault
          items={items}
          isAuth={isAuth}
          logo={logo}
          RenderLink={RenderLink}
          isNativeIOS
          {...props}
        />
      );

    case MINIMAL:
      return <HeaderMinimum RenderLink={RenderLink} logo={logo} {...props} />;
    case SPLASH:
      return <HeaderSplash RenderLink={RenderLink} logo={logo} {...props} />;
    case CROSS:
      return <HeaderCross RenderLink={RenderLink} logo={logo} {...props} />;
    default:
      return (
        <HeaderDefault
          items={items}
          isAuth={isAuth}
          logo={logo}
          RenderLink={RenderLink}
          isNativeIOS={false}
          {...props}
        />
      );
  }
};

const Header: FC<PropTypes> = ({
  RenderLink = DefaultRenderLink,
  ...props
}: PropTypes) => {
  const isAuth = !!props.user;
  const { isNativeIOS, minimum, splash, cross } = props;
  const headerType: HeaderType = resolveHeaderType({
    isNativeIOS,
    minimum,
    splash,
    cross,
  }) as HeaderType;
  const logo: LogoType = {
    handler: props.onLogoClick,
    url: props.getLogoUrl(),
    type: headerType,
  };
  const items: Array<HeaderItemType> = isAuth
    ? getAuthItems({ RenderLink, ...props })
    : getNonAuthItems({ RenderLink, ...props });

  return getHeader(isAuth, headerType, items, RenderLink, logo, props);
};

export default Header;
