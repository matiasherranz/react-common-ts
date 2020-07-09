// Note: use RenderLink instead of button if need a url in the future
import React, { FC } from 'react';
import classnames from 'classnames';
import HeaderLogo from './HeaderLogo';
import { DefaultRenderLink } from '../RenderLink';
import { HeaderSplashPropTypes, headerTypes, HeaderType } from './types';

const HeaderSplash: FC<HeaderSplashPropTypes> = ({
  logo,
  onLoginClick,
  onJoinClick,
  useAlternativeButtons = false,
  buttonInHeader = false,
  RenderLink = DefaultRenderLink,
  loading,
}: HeaderSplashPropTypes) => {
  const renderContent = () => {
    if (useAlternativeButtons) {
      return (
        <div className="col-xs-9 col-xs-offset-1 align-right">
          <p
            className={classnames('h6 not-member-cta gray-medium', {
              'not-member-cta-reposition': buttonInHeader,
            })}
          >
            Not a member?
          </p>
          <button
            onClick={onLoginClick}
            id="login-splash-button"
            className="login-link-2"
          >
            <p className="h6 pink-accessible uppercase align-right">Log In</p>
          </button>
          <button id="get-started-splash-button" onClick={onJoinClick}>
            <div className="join-link-space inline-block">
              <p
                className={classnames('h6 uppercase', {
                  'button-link-color': buttonInHeader,
                  'pink-accessible': !buttonInHeader,
                })}
              >
                Get Started
              </p>
            </div>
          </button>
        </div>
      );
    }
    return (
      <div className="col-xs-7 col-xs-offset-3 align-right">
        <button
          onClick={onLoginClick}
          id="login-splash-button"
          className={classnames('inline-block', {
            'login-link-reposition': buttonInHeader,
          })}
        >
          <p className="h6 pink-accessible uppercase align-right">Log In</p>
        </button>
        <button
          onClick={onJoinClick}
          id="get-started-splash-button"
          className={classnames({
            'join-btn': buttonInHeader,
            'join-link-1': !buttonInHeader,
          })}
        >
          <div
            className={classnames('inline-block', {
              'join-link-space': !buttonInHeader,
            })}
          >
            <p
              className={classnames('h6 uppercase', {
                'button-link-color': buttonInHeader,
                'pink-accessible': !buttonInHeader,
              })}
            >
              Get Started
            </p>
          </div>
        </button>
      </div>
    );
  };
  return (
    <header role="banner">
      <div className="wrapper width-full">
        <div className="header-height">
          <div className="width-full header-wrapper fixed top border-bot">
            <div className="main-top-navigation align-center ux">
              <nav role="navigation" className="nav-bar relative">
                <div className="bootstrap-grid main-nav-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-2 align-left">
                        <HeaderLogo
                          RenderLink={RenderLink}
                          loading={loading}
                          onClick={logo.handler}
                          url={logo.url}
                          type={headerTypes.SPLASH as HeaderType}
                        />
                      </div>
                      {renderContent()}
                    </div>
                  </div>
                </div>
                {buttonInHeader && (
                  <div className="join-btn-wrapper absolute" />
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSplash;
