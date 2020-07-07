import React, { FC, ReactNode, ReactElement, useState, useEffect } from 'react';

import './FullScreenLoading.scss';

/**
 * This component serves the cases where a fullscreen, interstitial loading
 * overlay is required. For non-fullscreen (like inside a button) loading,
 * take a look at the `Loading` component.
 *
 * Three cases are taken care of by the components on this file:
 * - A simple, full-screen loading interstitial, with an optional message,
 * - A full-screen interstitial with a different animated image than the
 *   default one. In this case, the optional message is shown above the image.
 * - A full-screen interstitial with a different image, but this time a
 *   non-animated one. In this case, special CSS classes are used to animate
 *   the image and make it slide from right to left.
 */

import rolling from './rolling.svg';
import heart from './heart.gif';

const IMAGE_TYPE_ANIMATED = 'ANIMATED';

type DefaultPropTypes = {
  loading?: boolean;
  children?: ReactNode;
  opacity?: number;
  zIndex?: number;
  spinnerWidth?: number;
  message?: ReactNode;
};

type TimeoutID = number;

export const DefaultFullScreenLoading: FC<DefaultPropTypes> = ({
  loading = false,
  children,
  opacity = 0.9,
  zIndex,
  spinnerWidth = 44,
  message,
}: DefaultPropTypes): ReactElement => {
  if (!loading) {
    return <div>{children}</div>;
  }

  // The original gif heart needed to be replaced with an animated svg (SVGs
  // look well on all screen sizes, while gifs don't).
  // Doing so, we still need to take care of the special case of IE11, where
  // animated SVGs don't work well.
  // The next line evaluates to `true` on IE11, and false on Edge and
  // other IEs/browsers
  const isIE11 =
    typeof window !== 'undefined' &&
    !!window.MSInputMethodContext &&
    !!document.documentMode;

  const style = {
    opacity,
    width: `${spinnerWidth}px`,
  };

  return (
    <div>
      {children}
      <div className="full-screen-loading" style={{ zIndex }}>
        <img src={isIE11 ? heart : rolling} alt="loading" style={style} />
        <p className="full-screen-loading-message">{message}</p>
      </div>
    </div>
  );
};

type PropTypes = DefaultPropTypes & {
  imageOverride?: string;
  imageOverrideType?: string;
  timeout?: number;
};

const FullScreenLoading: FC<PropTypes> = ({
  imageOverride,
  imageOverrideType,
  opacity = 1,
  spinnerWidth = 14,
  message = '',
  loading = false,
  timeout = 0,
  zIndex,
  children,
}: PropTypes): ReactElement => {
  let timeoutId: Nullable<TimeoutID> = null;
  const onByTimeout = !!(timeout && timeout > 0);
  const [on, setOn] = useState(onByTimeout);

  const hideInterstitial = () => setOn(false);

  const imageIsAnimated = (imageType?: string) =>
    imageType === IMAGE_TYPE_ANIMATED;

  useEffect(() => {
    if (timeout) {
      timeoutId = setTimeout(hideInterstitial, timeout);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!loading && !on) {
    return <div>{children}</div>;
  }

  if (!imageOverride) {
    return (
      <DefaultFullScreenLoading
        loading
        opacity={opacity}
        zIndex={zIndex}
        spinnerWidth={spinnerWidth}
        message={message}
      >
        {children}
      </DefaultFullScreenLoading>
    );
  }

  const style = {
    opacity,
    zIndex,
  };

  let markup;
  if (imageIsAnimated(imageOverrideType)) {
    markup = (
      <div className="full-screen-loading" style={style}>
        <img
          src={imageOverride}
          alt="animated loading"
          className="full-screen-loading-image-animated"
        />
        <p className="full-screen-loading-message animated-image-msg-width">
          {message}
        </p>
      </div>
    );
  } else {
    markup = (
      <div className="full-screen-loading" style={style}>
        <p className="full-screen-loading-message still-image-msg-width">
          {message}
        </p>
        <div className="wrapper">
          <div
            className="sliding-background"
            style={{ background: `url(${imageOverride}) repeat-x` }}
          />
        </div>
      </div>
    );
  }

  return <div>{markup}</div>;
};

export default FullScreenLoading;
