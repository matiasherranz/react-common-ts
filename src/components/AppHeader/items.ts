import type { HeaderItemType, PropTypes } from './types';

export const getAuthItems = (props: PropTypes): HeaderItemType[] => {
  const glambagItem: HeaderItemType = {
    name: 'glambag',
    title: 'Glam Bag',
    url: props.getGlambagUrl(),
    handler: props.onGlambagClick,
  };
  const shopperItem: HeaderItemType = {
    name: 'shop',
    title: 'Shopper',
    url: props.getShopUrl(),
    handler: props.onShopClick,
  };
  const pointsItem: HeaderItemType = {
    name: 'points',
    title: 'Points',
    url: props.getPointsUrl(),
    handler: props.onPointsClick,
  };
  const accountItem: HeaderItemType = {
    name: 'account',
    title: 'Account',
    url: props.getAccountUrl(),
    handler: props.onAccountClick,
  };
  const cartItem: HeaderItemType = {
    name: 'cart',
    title: 'Cart',
    url: props.getCartUrl(),
    handler: props.onCartClick,
  };

  return [glambagItem, shopperItem, pointsItem, accountItem, cartItem];
};

export const getNonAuthItems = (props: PropTypes): HeaderItemType[] => {
  const logInItem: HeaderItemType = {
    name: 'login',
    title: 'Log In',
    url: props.getLoginUrl(),
    handler: props.onLoginClick,
  };
  const joinItem: HeaderItemType = {
    name: 'join',
    title: 'Join',
    url: props.getJoinUrl(),
    handler: props.onJoinClick,
  };
  const shopItem: HeaderItemType = {
    name: 'shop',
    title: 'Shop',
    url: props.getShopUrl(),
    handler: () => props.onShopClick && props.onShopClick(props.rootRoute),
  };
  const cartItem: HeaderItemType = {
    name: 'cart',
    title: 'Cart',
    url: props.getCartUrl(),
    handler: props.onCartClick,
  };

  return [logInItem, joinItem, shopItem, cartItem];
};
