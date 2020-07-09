import React, { FC, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { HeaderNativeIosType, headerTypes, HeaderType } from './types';
import { DefaultRenderLink } from '../RenderLink';
import HeaderLogo from './HeaderLogo';
import ButtonBarMobile from './ButtonBarMobile';

type BackButtonProps = {
  onBackClick: (event: MouseEvent<HTMLElement>) => void;
};

const BackButton = ({ onBackClick }: BackButtonProps) => (
  <button
    id="back-button-container"
    className="back-button"
    onClick={onBackClick}
  >
    <i className="icon-ipsy-caret-left gray-dark back-icon" />
  </button>
);

const HeaderNativeIos: FC<HeaderNativeIosType> = ({
  loading,
  activeTab,
  items,
  logo,
  minimum,
  user,
  RenderLink = DefaultRenderLink,
  cartItemsCount,
  onBackClick,
  canGoBack,
}: HeaderNativeIosType) => {
  const body = document.getElementsByTagName('body')[0];
  return (
    <header role="banner">
      <div className="header-height">
        <div className="header-wrapper fixed top border-bot">
          <div className="main-top-navigation ux">
            <nav role="navigation" className="nav-bar">
              <div className="relative top-nav-space">
                {!loading && canGoBack && (
                  <BackButton onBackClick={onBackClick} />
                )}
                <HeaderLogo
                  onClick={logo.handler}
                  url={logo.url}
                  type={headerTypes.NATIVE_IOS as HeaderType}
                  RenderLink={RenderLink}
                  loading={loading}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
      {body &&
        !(loading || minimum) &&
        ReactDOM.createPortal(
          <div className="ios-navigation-wrapper">
            <div className="ios-navigation ux">
              <div className="nav-bar">
                <ButtonBarMobile
                  loading={loading}
                  activeTab={activeTab}
                  isNativeIOS
                  items={items}
                  logo={logo}
                  user={user}
                  RenderLink={RenderLink}
                  cartItemsCount={cartItemsCount}
                />
              </div>
            </div>
          </div>,
          body
        )}
    </header>
  );
};

export default HeaderNativeIos;
