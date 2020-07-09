import React, { FC } from 'react';
import ButtonBarMobile from './ButtonBarMobile';
import HeaderLogo from './HeaderLogo';
import {
  HeaderDefaultType,
  DEFAULT_ACTIVE_TAB,
  headerTypes,
  HeaderType,
  HeaderItemType,
} from './types';
import { DefaultRenderLink, RenderLinkType } from '../RenderLink';
import { UserType } from '../../types/UserType';

const renderCartItem = (
  item: HeaderItemType,
  isAuth: boolean,
  cartItemsCount: number | undefined,
  activeTab: string,
  RenderLink: RenderLinkType
) => {
  const cartAuthDetails = () => (
    <>
      <span className="nav-item-icon icon-ipsy-cart" />
      <span>{item.title}</span>
    </>
  );
  const cartNonAuthDetails = () => (
    <>
      <span className="mobile nav-item-icon icon-ipsy-cart icon-bold margin-h-10" />
      <span className="tablet desktop">
        <span className="nav-item-icon icon-ipsy-cart icon-bold padding-right-10" />
        <span>{item.title}</span>
      </span>
    </>
  );
  return (
    <div
      className={`${
        isAuth
          ? 'col-sm-2 col-lg-2 col-lg-offset-1 cart-wrapper'
          : 'inline-block col-sm-3 cart-wrapper'
      }`}
    >
      <RenderLink url={item.url} onClick={item.handler}>
        <div
          id="cart-item"
          className={`pointer relative inline-block uppercase nav-item ${
            activeTab === item.name && isAuth ? 'active' : ''
          }`}
        >
          <div className="nav-menu-teaser cart-teaser">
            {!!cartItemsCount && (
              <span id="cart-products-count-header">{cartItemsCount}</span>
            )}
          </div>
          {isAuth ? cartAuthDetails() : cartNonAuthDetails()}
        </div>
      </RenderLink>
    </div>
  );
};

const renderAccountItem = (
  item: HeaderItemType,
  user: UserType | undefined
) => (
  <>
    {user && user.shouldShowPaymentFailure && (
      <i className="alert icon-ipsy-error nav-menu-teaser-icon" />
    )}
    {user && user.isFreeBagReferrer && (
      <div
        className="nav-menu-teaser account-teaser"
        id="free-bag-invites-count"
      >
        <span>{user.numInvitesLeft}</span>
      </div>
    )}
    {item.title}
  </>
);

const renderAuthItems = (
  items: HeaderItemType[],
  activeTab: string,
  user: UserType | undefined,
  RenderLink: RenderLinkType
) =>
  items.map((item) => (
    <div key={`header-auth-item-${item.name}`} className="col-sm-3">
      <RenderLink url={item.url} onClick={item.handler}>
        <div
          id={`${item.name}-item`}
          className={`nav-item uppercase inline-block pointer relative ${
            activeTab === item.name ? 'active' : ''
          }`}
        >
          {item.name !== 'account' ? item.title : renderAccountItem(item, user)}
        </div>
      </RenderLink>
    </div>
  ));

const renderNonAuthItems = (
  items: HeaderItemType[],
  activeTab: string,
  RenderLink: RenderLinkType
) =>
  items.map((item) => (
    <div
      key={`header-non-auth-item-${item.name}`}
      className="inline-block col-sm-3"
    >
      <RenderLink url={item.url} onClick={item.handler}>
        <span
          className={`nav-item uppercase ${
            activeTab === item.name ? 'active' : ''
          }`}
        >
          {item.title}
        </span>
      </RenderLink>
    </div>
  ));

const HeaderDefault: FC<HeaderDefaultType> = ({
  logo,
  isAuth,
  isNativeIOS,
  items,
  user,
  loading,
  RenderLink = DefaultRenderLink,
  cartItemsCount,
  activeTab = DEFAULT_ACTIVE_TAB,
}: HeaderDefaultType) => {
  const cartItem = items.filter((item) => item.name === 'cart')[0];
  const basicItems = items.filter((item) => item.name !== 'cart');

  return (
    <div className="header-height">
      <div className="header-wrapper fixed top border-bot">
        <div className="main-top-navigation ux">
          <nav role="navigation" className="nav-bar">
            {isAuth && (
              <ButtonBarMobile
                items={items}
                logo={logo}
                user={user}
                RenderLink={RenderLink}
                cartItemsCount={cartItemsCount}
                loading={loading}
                activeTab={activeTab}
                isNativeIOS={isNativeIOS}
              />
            )}
            <div
              className={`bootstrap-grid ${
                isAuth ? 'main-nav-items tablet desktop' : 'main-nav-wrapper'
              }`}
            >
              <div className="container">
                <div className="row">
                  <div
                    className={
                      isAuth
                        ? 'col-xs-4 col-sm-2 align-left'
                        : 'col-xs-3 col-sm-2 no-padding'
                    }
                  >
                    <HeaderLogo
                      onClick={logo.handler}
                      url={logo.url}
                      type={headerTypes.DEFAULT as HeaderType}
                      RenderLink={RenderLink}
                      loading={loading}
                    />
                  </div>
                  <div
                    className={
                      isAuth
                        ? 'col-sm-8 col-lg-7 mid-section'
                        : 'col-xs-9 col-sm-10'
                    }
                  >
                    <div
                      className={isAuth ? 'row' : 'row logged-out-nav-items'}
                    >
                      {isAuth
                        ? renderAuthItems(
                            basicItems,
                            activeTab,
                            user,
                            RenderLink
                          )
                        : renderNonAuthItems(basicItems, activeTab, RenderLink)}
                      {!isAuth &&
                        renderCartItem(
                          cartItem,
                          isAuth,
                          cartItemsCount,
                          activeTab,
                          RenderLink
                        )}
                    </div>
                  </div>
                  {isAuth &&
                    renderCartItem(
                      cartItem,
                      isAuth,
                      cartItemsCount,
                      activeTab,
                      RenderLink
                    )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderDefault;
