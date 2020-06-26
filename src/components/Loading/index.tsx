import React, { FC, ReactChildren, ReactChild, ReactElement } from 'react';

import loadingImage from './loading.svg';
import pinkLoadingImage from './rolling.svg';
/**
 * This component is designed and meant to be used in non-fullscreen contexts,
 * like buttons and such.
 * For fullscreen loading, take a look at the `FullScreenLoading` component.
 */

type Props = {
  loading?: boolean;
  size?: number;
  pink?: boolean;
};

const Loading: FC<Props> = ({
  loading = false,
  children,
  size = 50,
  pink = false,
}) => {
  const style = { width: `${size || 12}px` };
  if (!loading) {
    if (children) {
      return <div>{children}</div>;
    }
    return null;
  }
  return (
    <div className="loading">
      <img
        src={pink ? pinkLoadingImage : loadingImage}
        alt="loading"
        style={style}
      />
    </div>
  );
};

export default Loading;
