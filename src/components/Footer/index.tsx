import React, { ReactElement } from 'react';
import classnames from 'classnames';
import FooterUrlConstants from './footerUrlConstants';
import type { RenderLinkType } from '../RenderLink';

import DefaultRenderLink from '../RenderLink/DefaultRenderLink';
import withValidRenderLink from '../RenderLink/withValidRenderLink';
import SocialLinks from '../SocialLinks';

import './Footer.scss';

type props = {
  copyrightYear?: number;
  useWhiteBackground?: boolean;
  hideOnMobile?: boolean;
  ShopRenderLink?: RenderLinkType;
};

const ShopLinks = ({
  ShopRenderLink = DefaultRenderLink,
}: {
  ShopRenderLink: RenderLinkType;
}) => {
  const ValidatedRenderLink = withValidRenderLink(ShopRenderLink);

  return (
    <ul>
      <li className="footer-title h4">Shop</li>
      <li>
        <ValidatedRenderLink url={FooterUrlConstants.SHOP_HOME}>
          IPSY Shopper
        </ValidatedRenderLink>
      </li>
      <li>
        <ValidatedRenderLink url={FooterUrlConstants.SHOP_IPSY_OFFERS}>
          IPSY Offers
        </ValidatedRenderLink>
      </li>
    </ul>
  );
};

const HelpLinks = (
  <ul>
    <li className="footer-title h4">Help</li>
    <li>
      <a
        href={FooterUrlConstants.HELP_DESK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Help Center
      </a>
    </li>
    <li className="tablet desktop">
      <a href={FooterUrlConstants.COMMUNITY_PAGE}>Community Guidelines</a>
    </li>
    <li className="mobile long-line">
      <a href={FooterUrlConstants.COMMUNITY_PAGE}>Community Guidelines</a>
    </li>
  </ul>
);

const Footer = ({
  copyrightYear,
  useWhiteBackground,
  hideOnMobile,
  ShopRenderLink = DefaultRenderLink,
}: props): ReactElement => (
  <footer
    role="contentinfo"
    className={classnames(
      {
        'footer-logged-out bg-white': useWhiteBackground,
        'flat-gray-darkest': !useWhiteBackground,
        'footer-combine-mob-desktop': hideOnMobile,
      },
      'ux bootstrap-grid border-top'
    )}
  >
    <div className="container space-v">
      <div className="row footer">
        <div className="col-xs-6 col-xs-push-1 col-sm-4 col-sm-push-0 col-md-5">
          <div className="row">
            <div className="col-xs-9 col-sm-4 no-padding-right">
              <ul>
                <li className="footer-title h4">IPSY</li>
                <li>
                  <a href={FooterUrlConstants.ABOUT_PAGE}>About</a>
                </li>
                <li>
                  <a href={FooterUrlConstants.SITEMAP_PAGE}>Sitemap</a>
                </li>
                <li>
                  <a href={FooterUrlConstants.PRIVACY_PAGE}>Privacy</a>
                </li>
                <li>
                  <a href={FooterUrlConstants.PRESS_PAGE}>Press</a>
                </li>
                <li>
                  <a
                    href={FooterUrlConstants.CAREERS_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a href={FooterUrlConstants.EVENTS_PAGE}>IPSY Events</a>
                </li>
                <li>
                  <a href={FooterUrlConstants.BLOG_HOME_PAGE}>IPSY Blog</a>
                </li>
                <li className="mobile">
                  <a href={FooterUrlConstants.TERMS_PAGE}>Terms</a>
                </li>
                <li className="mobile">
                  <a href={FooterUrlConstants.UGC_TERMS_PAGE}>UGC Terms</a>
                </li>
                <li className="mobile long-line">
                  <a href={FooterUrlConstants.CONTEST_TERMS_PAGE}>
                    Contest Terms & Conditions
                  </a>
                </li>
                <li className="mobile long-line">
                  <a href={FooterUrlConstants.SUPPLY_CHAIN_TRANSPARENCY}>
                    Supply Chain Transparency
                  </a>
                </li>
                <li className="mobile long-line">
                  <a href={FooterUrlConstants.COPYRIGHT}>
                    Trademark & Copyright Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="tablet desktop col-sm-8 col-md-6 no-padding-right">
              <ul>
                <li>&nbsp;</li>
                <li>
                  <a href={FooterUrlConstants.TERMS_PAGE}>Terms</a>
                </li>
                <li>
                  <a href={FooterUrlConstants.UGC_TERMS_PAGE}>UGC Terms</a>
                </li>
                <li>
                  <a href={FooterUrlConstants.CONTEST_TERMS_PAGE}>
                    Contest Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href={FooterUrlConstants.SUPPLY_CHAIN_TRANSPARENCY}>
                    Supply Chain Transparency
                  </a>
                </li>
                <li>
                  <a href={FooterUrlConstants.COPYRIGHT}>
                    Trademark & Copyright Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xs-5 col-sm-3 col-md-3">
          <ShopLinks ShopRenderLink={ShopRenderLink} />
          <div className="mobile">{HelpLinks}</div>
        </div>

        <div className="col-xs-10 col-xs-push-1 col-sm-5 col-sm-push-0 col-md-4">
          <div className="tablet desktop">{HelpLinks}</div>
          <ul>
            <li className="footer-title h4 margin-top-25">Connect with us</li>
          </ul>
          <SocialLinks facebook instagram twitter youtube pinterest snapchat />
          <div className="copyright small-print">
            &copy; {copyrightYear} Personalized Beauty Discovery, Inc.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {
  copyrightYear: new Date().getFullYear(),
};

export default Footer;
