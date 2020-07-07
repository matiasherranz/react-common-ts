import { ComponentType, ReactNode } from 'react';
export { default as DefaultRenderLink } from './DefaultRenderLink';

export type RenderLinkProps = {
  url?: string;
  onClick?: () => void;
  children: ReactNode;
  [x: string]: unknown;
};

export type RenderLinkType = ComponentType<RenderLinkProps>;
