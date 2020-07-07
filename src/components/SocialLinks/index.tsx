import React, { FC } from 'react';
import FooterUrlConstants from '../Footer/footerUrlConstants';

import './SocialLinks.scss';

type SocialLinksProps = {
  facebook: boolean;
  instagram: boolean;
  pinterest: boolean;
  twitter: boolean;
  youtube: boolean;
  snapchat: boolean;
};

const LINKS_CONTENT = {
  facebook: FooterUrlConstants.IPSY_FACEBOOK_PAGE,
  instagram: FooterUrlConstants.IPSY_INSTAGRAM_PAGE,
  twitter: FooterUrlConstants.IPSY_TWITTER_PAGE,
  youtube: FooterUrlConstants.IPSY_YOUTUBE_PAGE,
  pinterest: FooterUrlConstants.IPSY_PINTEREST_PAGE,
  snapchat: FooterUrlConstants.IPSY_SNAPCHAT_PAGE,
};

const SocialLinks: FC<SocialLinksProps> = ({ ...props }: SocialLinksProps) => (
  <ul className="social-media">
    {Object.keys(LINKS_CONTENT).map((socialKey) =>
      props[socialKey] ? (
        <li className={socialKey} key={socialKey}>
          <a
            href={LINKS_CONTENT[socialKey]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialKey}
          >
            <span className={`fa icon-ipsy-${socialKey}`} />
          </a>
        </li>
      ) : null
    )}
  </ul>
);

export default SocialLinks;
