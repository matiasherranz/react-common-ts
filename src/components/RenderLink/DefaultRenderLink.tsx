import React from 'react';
import type { RenderLinkProps } from './';

// TODO: Revisit type definition
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DefaultRenderLink = ({ url, children, ...props }: RenderLinkProps) => (
  <a href={url} {...props}>
    {children}
  </a>
);

export default DefaultRenderLink;
