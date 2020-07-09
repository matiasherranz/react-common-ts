import type { RenderLinkType } from '../RenderLink';
import { UserType } from '../../types/UserType';
import { MouseEvent } from 'react';

export const headerTypes = {
  NATIVE_IOS: 'NATIVE_IOS',
  MINIMAL: 'MINIMAL',
  MOBILE: 'MOBILE',
  SPLASH: 'SPLASH',
  CROSS: 'CROSS',
  DEFAULT: 'DEFAULT',
};

export const DEFAULT_ACTIVE_TAB = 'shop';

export type HeaderType = keyof typeof headerTypes;

export type HeaderItemType = {
  name: string;
  title: string;
  url: string;
  handler?: (event: MouseEvent<HTMLElement> | string | undefined) => void;
};

export type LogoType = {
  handler?: (event: MouseEvent<HTMLElement>) => void;
  url: string;
  type: HeaderType;
};

export type HeaderNativeIosType = {
  isAuth: boolean;
  loading?: boolean;
  activeTab?: string;
  items: Array<HeaderItemType>;
  logo: LogoType;
  user?: UserType;
  minimum?: boolean;
  RenderLink: RenderLinkType;
  cartItemsCount?: number;
  onBackClick: (event: MouseEvent<HTMLElement>) => void;
  canGoBack?: boolean;
};

export type HeaderMinimumType = {
  loading?: boolean;
  logo: LogoType;
  isClosable?: boolean;
  onCloseHandler?: (event: MouseEvent<HTMLElement>) => void;
  showExitLink?: boolean;
  showBeautyQuizText?: boolean;
  RenderLink: RenderLinkType;
};

export type HeaderLogoPropTypes = {
  type: HeaderType;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  url?: string;
  RenderLink: RenderLinkType;
  loading?: boolean;
};

export type HeaderDefaultType = {
  logo: LogoType;
  isNativeIOS: boolean;
  isAuth: boolean;
  items: Array<HeaderItemType>;
  user?: UserType;
  loading?: boolean;
  RenderLink: RenderLinkType;
  cartItemsCount?: number;
  activeTab?: string;
};

export type ResolveHeaderPropTypes = {
  isNativeIOS?: boolean;
  minimum?: boolean;
  splash?: boolean;
  cross?: boolean;
};

export type HeaderCrossType = {
  logo: LogoType;
  loading?: boolean;
  onCrossClick?: (event: MouseEvent<HTMLElement>) => void;
  RenderLink: RenderLinkType;
};

export type ButtonBarMobilePropTypes = {
  items: Array<HeaderItemType>;
  user?: UserType;
  logo: LogoType;
  loading?: boolean;
  activeTab?: string;
  isNativeIOS: boolean;
  RenderLink: RenderLinkType;
  cartItemsCount?: number;
};

export type CartItemType = {
  item: HeaderItemType;
  cartItemsCount?: number;
};

export type AccountItemType = {
  item: HeaderItemType;
  user?: UserType;
};

export type HeaderSplashPropTypes = {
  logo: LogoType;
  RenderLink: RenderLinkType;
  loading?: boolean;
  useAlternativeButtons?: boolean;
  buttonInHeader?: boolean;
  onLoginClick?: (event: MouseEvent<HTMLElement>) => void;
  onJoinClick?: (event: MouseEvent<HTMLElement>) => void;
};

export type PropTypes = {
  RenderLink?: RenderLinkType;
  isNativeIOS?: boolean;
  isNativeAndroid?: boolean;
  isClosable?: boolean;
  minimum?: boolean;
  splash?: boolean;
  cross?: boolean;
  rootRoute?: string;
  activeTab?: string;
  showExitLink?: boolean;
  showBeautyQuizText?: boolean;
  loading?: boolean;
  canGoBack?: boolean;
  user?: UserType;
  cartItemsCount?: number;
  useAlternativeButtons?: boolean;
  shouldShowPaymentFailure?: boolean;
  buttonInHeader?: boolean;
  onCloseHandler?: (event: MouseEvent<HTMLElement>) => void;
  onShopClick?: (rootRoute?: string) => void;
  onBackClick?: (event?: MouseEvent<HTMLElement>) => void;
  onCrossClick?: (event: MouseEvent<HTMLElement>) => void;
  onLogoClick?: (event: MouseEvent<HTMLElement>) => void;
  getLogoUrl: () => string;
  onLoginClick?: (event: MouseEvent<HTMLElement>) => void;
  onJoinClick?: (event: MouseEvent<HTMLElement>) => void;
  onCartClick?: (event: MouseEvent<HTMLElement>) => void;
  onGlambagClick?: (event: MouseEvent<HTMLElement>) => void;
  onPointsClick?: (event: MouseEvent<HTMLElement>) => void;
  onAccountClick?: (event: MouseEvent<HTMLElement>) => void;
  getLoginUrl: () => string;
  getJoinUrl: () => string;
  getShopUrl: () => string;
  getCartUrl: () => string;
  getPointsUrl: () => string;
  getAccountUrl: () => string;
  getGlambagUrl: () => string;
};
