import React, { SyntheticEvent, FC, ReactNode } from 'react';
import Loading from '../Loading';

export type BaseButtonProps = {
  to?: string;
  absolutePath?: boolean;
  submit?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  text?: string;
  children?: ReactNode;
};

// TODO: Export from utils
type VoidCallback = () => void;
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: VoidCallback = () => {};

const AnchorButton: FC<BaseButtonProps> = ({
  to,
  text,
  children,
  className,
  ...props
}) => (
  <a className={className} href={to} {...props}>
    {text || children}
  </a>
);

const HtmlButton: FC<BaseButtonProps> = ({
  onClick,
  text,
  children,
  submit = false,
  ...props
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    {...props}
    onClick={(e) => {
      !submit && e.preventDefault();
      onClick && onClick(e);
    }}
  >
    {text || children}
  </button>
);

const BaseButton: FC<BaseButtonProps> = (props) => {
  const { to, loading = false, disabled, onClick = noop } = props;

  const handleClick = (e: SyntheticEvent) =>
    !loading && !disabled && onClick(e);

  if (loading) {
    return (
      <HtmlButton {...props} onClick={handleClick}>
        <Loading loading size={24} />
      </HtmlButton>
    );
  }

  if (to) {
    return <AnchorButton {...props} onClick={handleClick} />;
  }

  return <HtmlButton {...props} onClick={handleClick} />;
};

export default BaseButton;
