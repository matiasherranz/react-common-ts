/* eslint-disable */
import React, { FC } from "react";
import classnames from "classnames";
import { DefaultRenderLink } from "../RenderLink";
import HeaderLogo from "./HeaderLogo";
import { HeaderMinimumType, headerTypes, HeaderType } from "./types";

const HeaderMinimum: FC<HeaderMinimumType> = ({
  loading,
  logo,
  showExitLink,
  showBeautyQuizText,
  isClosable,
  onCloseHandler,
  RenderLink = DefaultRenderLink,
}: HeaderMinimumType) => {
  const renderContent = () => {
    if (loading) return <></>;
    if (showExitLink) {
      return (
        <RenderLink
          id="ipsy-header-thanks-container"
          url={logo.url}
          onClick={logo.handler}
          className="gray-light inline-block"
        >
          No Thanks
        </RenderLink>
      );
    }
    if (showBeautyQuizText) {
      return (
        <div className="uppercase gray-darkest inline-block">
          The Beauty Quiz
        </div>
      );
    }
    return (
      <div className="uppercase gray-darkest inline-block">
        {isClosable ? (
          <span
            className="ipsy-icon icon-ipsy-close-cross gray-dark clickable-header-item"
            onClick={onCloseHandler}
          />
        ) : (
          <span className="ipsy-icon icon-ipsy-lock" />
        )}
        {!isClosable && "Secure"}
      </div>
    );
  };
  return (
    <header role="banner">
      <div className="header-height">
        <div className="header-wrapper fixed top border-bot">
          <div className="main-top-navigation align-center ux">
            <nav role="navigation" className="nav-bar">
              <div className="bootstrap-grid main-nav-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-4 col-sm-2 align-left">
                      <HeaderLogo
                        onClick={isClosable ? onCloseHandler : logo.handler}
                        url={!isClosable ? logo.url : undefined}
                        type={headerTypes.MINIMAL as HeaderType}
                        RenderLink={RenderLink}
                        loading={loading}
                      />
                    </div>
                    <div
                      className={classnames(
                        "col-sm-7 col-sm-offset-3 align-right",
                        {
                          "col-xs-7 col-xs-offset-1":
                            !loading && showBeautyQuizText,
                          "col-xs-4 col-xs-offset-4": !showBeautyQuizText,
                        }
                      )}
                    >
                      <div className="h6 min-header-text">
                        {renderContent()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimum;
