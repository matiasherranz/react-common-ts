import React, { Fragment } from 'react';
import classnames from 'classnames';
import FooterUrlConstants from './footerUrlConstants';
import DefaultRenderLink from '../RenderLink/DefaultRenderLink';
import withValidRenderLink from '../RenderLink/withValidRenderLink';
import SocialLinks from '../SocialLinks';
import type { RenderLinkType } from '../RenderLink';

import './SEOFooter.scss';

type SEOFooterLink = {
  url: string;
  text: string;
};

type props = {
  copyrightYear?: number;
  hideOnMobile?: boolean;
  ShopRenderLink?: RenderLinkType;
  RenderLink?: RenderLinkType;
  footerTitle?: string;
  footerLinks?: SEOFooterLink[];
};

type CreateMobileLinkProps = {
  displayText: string;
  url: string;
};

const bottomLinks = [
  { url: FooterUrlConstants.PRIVACY_PAGE, displayText: 'Privacy' },
  { url: FooterUrlConstants.UGC_TERMS_PAGE, displayText: 'UGC Terms' },
  {
    url: FooterUrlConstants.CONTEST_TERMS_PAGE,
    displayText: 'Contest Terms & Conditions',
  },
  {
    url: FooterUrlConstants.COPYRIGHT_PAGE,
    displayText: 'Copyright and Intellectual Property Policy',
  },
  { url: FooterUrlConstants.TERMS_PAGE, displayText: 'Terms of Use' },
  {
    url: FooterUrlConstants.SUPPLY_CHAIN_TRANSPARENCY,
    displayText: 'Supply Chain Transparency',
  },
];

const totalLinks = bottomLinks.length;
const half = Math.round(totalLinks / 2);

// TODO (martinquintana): Remove this component and merge the code into Footer component when
// we implement SEOFooter in Shopper
// Reference: https://ipsycorp.atlassian.net/browse/APPS-4185
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SEOFooter = ({
  copyrightYear = new Date().getFullYear(),
  hideOnMobile,
  ShopRenderLink = DefaultRenderLink,
  RenderLink = DefaultRenderLink,
  footerTitle = '',
  footerLinks = [],
}: props) => {
  const ValidatedShopRenderLink = withValidRenderLink(ShopRenderLink);
  const ValidatedRenderLink = withValidRenderLink(RenderLink);

  const desktopBottomLinks = bottomLinks.map(({ displayText, url }) => (
    <div key={url} className="inline-block margin-right">
      <ValidatedRenderLink url={url}>{displayText}</ValidatedRenderLink>
    </div>
  ));

  const createMobileLink = ({ displayText, url }: CreateMobileLinkProps) => (
    <li key={url}>
      <ValidatedRenderLink url={url}>{displayText}</ValidatedRenderLink>
    </li>
  );

  const mobileBottomLinksLeft = (
    <ul>{bottomLinks.slice(0, half).map(createMobileLink)}</ul>
  );

  const mobileBottomLinksRight = (
    <ul>{bottomLinks.slice(half).map(createMobileLink)}</ul>
  );

  return (
    <footer
      role="contentinfo"
      className={classnames(
        {
          'footer-combine-mob-desktop': hideOnMobile,
        },
        'ux bootstrap-grid border-top footer-logged-out bg-gray-lightest'
      )}
    >
      <div className="container space-bot footer">
        <div className="row padding-bot border-bot">
          <div className="col-md-4">
            <ul>
              <li className="footer-title h4 margin-top-25">Connect with us</li>
            </ul>
            <SocialLinks
              facebook
              instagram
              twitter
              youtube
              pinterest
              snapchat
            />
          </div>
          <div id="must-read-links" className="col-md-8 row">
            {!!footerLinks.length && (
              <Fragment>
                <div className="col-md-12">
                  <ul>
                    <li className="footer-title h4 margin-top-25">
                      {footerTitle}
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="no-margin">
                    {footerLinks
                      .slice(0, footerLinks.length / 2)
                      .map((link) => (
                        <li className="ellipsis" key={link.url}>
                          <ValidatedRenderLink url={link.url}>
                            {link.text}
                          </ValidatedRenderLink>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="no-margin">
                    {footerLinks
                      .slice(footerLinks.length / 2, footerLinks.length)
                      .map((link) => (
                        <li className="ellipsis" key={link.url}>
                          <ValidatedRenderLink url={link.url}>
                            {link.text}
                          </ValidatedRenderLink>
                        </li>
                      ))}
                  </ul>
                </div>
              </Fragment>
            )}
          </div>
        </div>
        <div className="row padding-top padding-bot border-bot">
          <div className="col-md-4 row">
            <div className="col-xs-12">
              <ul>
                <li className="footer-title h4">IPSY</li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-12">
              <ul className="no-margin">
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.GLAM_BAG}>
                    Glam Bag
                  </ValidatedRenderLink>
                </li>
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.GLAM_BAG_PLUS}>
                    Glam Bag Plus
                  </ValidatedRenderLink>
                </li>
                <li>
                  <ValidatedRenderLink
                    url={FooterUrlConstants.GLAM_BAG_ULTIMATE}
                  >
                    Glam Bag Ultimate
                  </ValidatedRenderLink>
                </li>
                <li>
                  <ValidatedShopRenderLink url={FooterUrlConstants.SHOP_HOME}>
                    IPSY Shopper
                  </ValidatedShopRenderLink>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-12">
              <ul className="no-margin">
                <li>
                  <ValidatedShopRenderLink
                    url={FooterUrlConstants.SHOP_IPSY_OFFERS}
                  >
                    IPSY Offers
                  </ValidatedShopRenderLink>
                </li>
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.EVENTS_PAGE}>
                    IPSY Events
                  </ValidatedRenderLink>
                </li>
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.BLOG_HOME_PAGE}>
                    IPSY Blog
                  </ValidatedRenderLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 row">
            <div className="col-xs-12">
              <ul>
                <li className="footer-title h4">About</li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-12">
              <ul className="no-margin">
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.ABOUT_PAGE}>
                    Our Mission
                  </ValidatedRenderLink>
                </li>
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.PRESS_PAGE}>
                    Press
                  </ValidatedRenderLink>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-12">
              <ul className="no-margin">
                <li>
                  <ValidatedRenderLink
                    url={FooterUrlConstants.CAREERS_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </ValidatedRenderLink>
                </li>
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.SITEMAP_PAGE}>
                    Sitemap
                  </ValidatedRenderLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 row">
            <div className="col-xs-12">
              <ul>
                <li className="footer-title h4">Help</li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-12">
              <ul className="no-margin">
                <li>
                  <ValidatedRenderLink
                    url={FooterUrlConstants.HELP_DESK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help Center
                  </ValidatedRenderLink>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-12">
              <ul className="no-margin">
                <li>
                  <ValidatedRenderLink url={FooterUrlConstants.COMMUNITY_PAGE}>
                    Community Guidelines
                  </ValidatedRenderLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="padding-top-20">
          <div className="small-print tablet desktop">{desktopBottomLinks}</div>
          <div className="small-print tablet desktop padding-top-20">
            <div className="inline-block copyright small-print left">
              &copy; {copyrightYear} Personalized Beauty Discovery, Inc.
            </div>
          </div>
          <div className="small-print mobile">
            <div className="row">
              <div className="col-xs-6">{mobileBottomLinksLeft}</div>
              <div className="col-xs-6">{mobileBottomLinksRight}</div>
            </div>
            <div className="copyright">
              &copy; {copyrightYear} Personalized Beauty Discovery, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SEOFooter;
