import React, { FC, ReactNode, ReactElement } from 'react';
import classNames from 'classnames';

export type Props = {
  children?: ReactNode;
  className?: string;
  gutterSize?: 'small' | 'medium' | 'large';
  verticalGutter?: boolean;
  outerGutter?: boolean;
};

const Grid: FC<Props> = ({
  children,
  className,
  gutterSize = 'large',
  verticalGutter,
  outerGutter,
}: Props): ReactElement => {
  const classes = classNames(
    {
      'vertically-spaced-grid': verticalGutter,
      [`${gutterSize}-gutter-grid`]: gutterSize,
      'no-outer-gutter': !outerGutter,
    },
    className,
    'grid container-fluid'
  );

  return <div className={classes}>{children}</div>;
};

export default Grid;
