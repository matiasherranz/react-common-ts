// Note: use RenderLink instead of button if need a url in the future
import React, { FC, MouseEvent } from 'react';
import HeaderLogo from './HeaderLogo';
import { headerTypes } from './types';
import { DefaultRenderLink } from '../RenderLink';
import type { HeaderCrossType, HeaderType } from './types';

type GoBackButtonProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

const GoBackButton = ({ onClick }: GoBackButtonProps) => (
  <div className="col-xs-2 col-xs-offset-10 col-sm-offset-8 align-right">
    <button
      aria-label="Go Back"
      className="icon-ipsy-close-cross gray-dark"
      onClick={onClick}
    />
  </div>
);

const HeaderCross: FC<HeaderCrossType> = ({
  logo,
  loading,
  onCrossClick,
  RenderLink = DefaultRenderLink,
}: HeaderCrossType) => (
  <header role="banner">
    <div className="header-height">
      <div className="header-wrapper fixed top border-bot">
        <div className="main-top-navigation ux">
          <nav className="nav-bar">
            <div className="bootstrap-grid main-nav-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-xs-2 align-left tablet desktop">
                    <HeaderLogo
                      onClick={logo.handler}
                      url={logo.url}
                      type={headerTypes.CROSS as HeaderType}
                      RenderLink={RenderLink}
                      loading={loading}
                    />
                  </div>
                  <GoBackButton onClick={onCrossClick} />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default HeaderCross;
