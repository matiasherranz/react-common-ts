import { SyntheticEvent, ReactNode } from 'react';

type BaseButtonProps = {
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

export default BaseButtonProps;
