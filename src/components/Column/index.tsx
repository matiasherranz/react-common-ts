import React, { ReactNode, ReactElement } from 'react';
import classNames from 'classnames';

import './Column.scss';

type ColumnsCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type OffsetCount = 0 | ColumnsCount;

type Props = {
  children?: ReactNode;
  className?: string;
  xs?: ColumnsCount;
  sm?: ColumnsCount;
  md?: ColumnsCount;
  lg?: ColumnsCount;
  xsOffset?: OffsetCount;
  smOffset?: OffsetCount;
  mdOffset?: OffsetCount;
  lgOffset?: OffsetCount;
  xsPush?: OffsetCount;
  smPush?: OffsetCount;
  mdPush?: OffsetCount;
  lgPush?: OffsetCount;
  xsPull?: OffsetCount;
  smPull?: OffsetCount;
  mdPull?: OffsetCount;
  lgPull?: OffsetCount;
};

const Column = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xsPush,
  smPush,
  mdPush,
  lgPush,
  xsPull,
  smPull,
  mdPull,
  lgPull,
}: Props): ReactElement => {
  const classes = classNames([
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xsOffset !== undefined && `col-xs-offset-${xsOffset}`,
    smOffset !== undefined && `col-sm-offset-${smOffset}`,
    mdOffset !== undefined && `col-md-offset-${mdOffset}`,
    lgOffset !== undefined && `col-lg-offset-${lgOffset}`,
    xsPush !== undefined && `col-xs-push-${xsPush}`,
    smPush !== undefined && `col-sm-push-${smPush}`,
    mdPush !== undefined && `col-md-push-${mdPush}`,
    lgPush !== undefined && `col-lg-push-${lgPush}`,
    xsPull !== undefined && `col-xs-pull-${xsPull}`,
    smPull !== undefined && `col-sm-pull-${smPull}`,
    mdPull !== undefined && `col-md-pull-${mdPull}`,
    lgPull !== undefined && `col-lg-pull-${lgPull}`,
    className,
  ]);

  return <div className={classes}>{children}</div>;
};

export default Column;
