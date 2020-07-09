import React, { FC } from 'react';
import classnames from 'classnames';
import HeaderLogo from './HeaderLogo';
import {
  ButtonBarMobilePropTypes,
  CartItemType,
  AccountItemType,
  headerTypes,
  DEFAULT_ACTIVE_TAB,
  HeaderType,
} from './types';
import { isInAndroidWeb } from '../../lib/utils';

const DEFAULT_CART_ITEMS = 0;

const CartItem = ({ item, cartItemsCount }: CartItemType) => (
  <>
    <div className="nav-menu-teaser cart-teaser">
      {cartItemsCount && (
        <span
          id="cart-products-count"
          className={classnames({ 'android-devices': isInAndroidWeb() })}
        >
          {cartItemsCount}
        </span>
      )}
    </div>
    <div className="nav-item-text">{item.title}</div>
  </>
);

const AccountItem = ({ item, user }: AccountItemType) => (
  <div className="nav-item-text relative">
    {user && user.shouldShowPaymentFailure && (
      <i className="alert icon-ipsy-error nav-menu-teaser-icon" />
    )}
    {user && user.isFreeBagReferrer && (
      <div
        className="nav-menu-teaser account-teaser"
        id="mobile-free-bag-invites-count"
      >
        <span className={classnames({ 'android-devices': isInAndroidWeb() })}>
          {user.numInvitesLeft}
        </span>
      </div>
    )}
    {item.title}
  </div>
);

const ButtonBarMobile: FC<ButtonBarMobilePropTypes> = ({
  items,
  user,
  logo,
  loading,
  activeTab = DEFAULT_ACTIVE_TAB,
  isNativeIOS,
  RenderLink,
  cartItemsCount = DEFAULT_CART_ITEMS,
}: ButtonBarMobilePropTypes) => (
  <div
    className={classnames('relative top-nav-space', { mobile: !isNativeIOS })}
  >
    {!isNativeIOS && (
      <HeaderLogo
        onClick={logo.handler}
        url={logo.url}
        type={headerTypes.MOBILE as HeaderType}
        RenderLink={RenderLink}
        loading={loading}
      />
    )}
    <ul className="main-list main-nav-list top-nav-space absolute">
      {items.map((item) => {
        const { name, handler, url, title } = item;
        return (
          <li
            key={`bar-btn-mobile-${name}`}
            id={`${item.name}-elem`}
            className={classnames('text-center', {
              active: activeTab === name,
            })}
          >
            <RenderLink url={url} onClick={handler}>
              <span
                className={`nav-item-icon icon-ipsy-${
                  name === 'glambag' ? 'glam-bag-03' : name
                }`}
              />
              {name === 'cart' && (
                <CartItem item={item} cartItemsCount={cartItemsCount} />
              )}
              {name === 'account' && <AccountItem item={item} user={user} />}
              {name !== 'cart' && name !== 'account' && (
                <div className="nav-item-text">{title}</div>
              )}
            </RenderLink>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ButtonBarMobile;
