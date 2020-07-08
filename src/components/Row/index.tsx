import React, { FC, ReactNode, ReactElement } from 'react';
import classNames from 'classnames';

import './Row.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const Row: FC<Props> = ({ children, className }: Props): ReactElement => {
  const classes = classNames(className, 'row');

  return <div className={classes}>{children}</div>;
};

export default Row;
