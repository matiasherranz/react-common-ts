import React, { ReactElement } from 'react';
import type { RenderLinkProps, RenderLinkType } from './index';

const withValidRenderLink = (RenderLink: RenderLinkType) => ({
  url,
  ...linkProps
}: RenderLinkProps): ReactElement => {
  if (url === '#' || url === '/#') {
    throw new Error(
      "Invalid Url: url can't be just '#' since anchors can't be used as buttons"
    );
  }
  return <RenderLink url={url} {...linkProps} />;
};

export default withValidRenderLink;
