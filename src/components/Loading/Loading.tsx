import React, { FC } from 'react';
import styled from 'styled-components';

import { LoadingProps } from './Loading.types';
import loadingImage from './loading.svg';
import pinkLoadingImage from './rolling.svg';
/**
 * This component is designed and meant to be used in non-fullscreen contexts,
 * like buttons and such.
 * For fullscreen loading, take a look at the `FullScreenLoading` component.
 */

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  display: table;
`;

const StyledImage = styled.img`
  vertical-align: middle;
  display: inline-block;
  ${({ width }) => `width: ${width}px;`}
`;

const Loading: FC<LoadingProps> = ({
  loading = false,
  children,
  size = 50,
  pink = false,
}) => {
  if (!loading) {
    if (children) {
      return <div>{children}</div>;
    }
    return null;
  }
  return (
    <StyledDiv>
      <StyledImage
        width={size}
        src={pink ? pinkLoadingImage : loadingImage}
        alt="loading"
      />
    </StyledDiv>
  );
};

export default Loading;
