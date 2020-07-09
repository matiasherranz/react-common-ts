import { ComponentType, ReactNode, MouseEvent } from 'react';
export { default as DefaultRenderLink } from './DefaultRenderLink';

export type RenderLinkProps = {
  url?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  [x: string]: unknown;
};

export type RenderLinkType = ComponentType<RenderLinkProps>;
