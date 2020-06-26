import React, { ReactChildren, ReactChild, SyntheticEvent } from 'react';

type Props = {
  to?: string;
  absolutePath?: boolean;
  submit?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  text?: string;
  children?: ReactChild | ReactChildren;
};

// TODO: Export from utils
export const noop = (...args: any) => {};

const HtmlButton = ({
  onClick,
  text,
  children,
  submit = false,
  ...props
}: Props) => (
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

const BaseButton = (props: Props) => {
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
