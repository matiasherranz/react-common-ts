export { default as DefaultRenderLink } from './DefaultRenderLink';

export type RenderLinkProps = {
  url?: string;
  onClick?: () => void;
  children: Node;
  [x: string]: unknown;
};
export type RenderLinkType = (props: RenderLinkProps) => Node;
