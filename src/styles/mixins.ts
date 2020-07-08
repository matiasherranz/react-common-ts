import { pinkIpsy, white, black } from './variables';

export const bgTextColor = (bgColor: string, textColor: string): string => {
  return `
    background-color: ${bgColor};
    color: ${textColor};
  `;
};

export const roundedCorners = (val: string): string => {
  return `
    -webkit-border-radius: ${val};
    -moz-border-radius: ${val};
    border-radius: ${val};
  `;
};

export const boxSizing = (boxModel: string): string => {
  return `
    -webkit-box-sizing: ${boxModel};
    -moz-box-sizing: ${boxModel};
    box-sizing: ${boxModel};
  `;
};

export const boxShadow = (boxShadow: string): string => {
  return `
    -webkit-box-shadow: ${boxShadow};
    -moz-box-shadow: ${boxShadow};
    box-shadow: ${boxShadow};
  `;
};

export const avatarBasic = (length: string, radius: string): string => {
  return `
    width: ${length};
    height: ${length};
    -webkit-border-radius: ${radius};
    -moz-border-radius: ${radius};
    border-radius: ${radius};
  `;
};

export const calculateRem = (size: string): string => {
  // TODO add sass helpers
  return size;
};

export const fontSize = (size: string): string => {
  return `
    font-size: ${size};
    font-size: ${calculateRem(size)};
  `;
};

export const fontMainRegular = (): string => {
  return `
    font-family: 'NeueEinstellungRegular';
  `;
};

export const fontMainMedium = (): string => {
  return `
    font-family: 'NeueEinstellungMedium';
  `;
};

export const fontMainBold = (): string => {
  return `
    font-family: 'NeueEinstellungBold';
  `;
};

export const textLineHeight = (): string => {
  return `
    line-height: 1.5;
  `;
};

export const onFocus = (): string => {
  return `
    box-shadow: 0 0 4px 0 ${black} inset;
  `;
};

export const onFocusDarkBackground = (): string => {
  return `
    box-shadow: 0 0 4px 0 ${white} inset;
  `;
};

export const h5 = (): string => {
  return `
    @include ${fontMainRegular()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('16px')};
  `;
};

export const h6 = (): string => {
  return `
    @include ${fontMainBold()};
    font-size: ${calculateRem('14px')};
    @include ${textLineHeight()};
  `;
};

export const para = (): string => {
  return `
    @include ${fontMainRegular()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('14px')};
    margin-bottom: 10px;
  `;
};

export const smallPrint = (): string => {
  return `
    @include ${fontMainRegular()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('12px')};
  `;
};

export const h1XlM = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('40px')};
  `;
};

export const h1M = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('24px')};
  `;
};

export const h2M = (): string => {
  return `
    @include ${fontMainBold()};
    font-size: ${calculateRem('22px')};
    @include ${textLineHeight()};
  `;
};

export const h3M = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('18px')};
  `;
};

export const h4M = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('16px')};
  `;
};

// typography desktop
export const h1XlD = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('60px')};
  `;
};

export const h1D = (): string => {
  return `
    @include ${fontMainBold()};
    font-size: ${calculateRem('36px')};
    @include ${textLineHeight()};
  `;
};

export const h2D = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('28px')};
  `;
};

export const h3D = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('20px')};
  `;
};

export const h4D = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${textLineHeight()};
    font-size: ${calculateRem('18px')};
  `;
};

// Flex container
export const flexbox = (): string => {
  return `
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  `;
};

export const flexDirection = (direction: string): string => {
  return `
    -webkit-flex-direction: ${direction};
    -moz-flex-direction: ${direction};
    -ms-flex-direction: ${direction};
    flex-direction: ${direction};
  `;
};

export const verticalAlignRelative = (): string => {
  return `
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  `;
};

export const verticalAlignContent = (): string => {
  return `
    @include ${flexbox()};
    height: auto;
    align-items: center;
  `;
};

// generic transform
export const transform = (transforms: string): string => {
  return `
    -webkit-transform: ${transforms};
    -moz-transform: ${transforms};
    -ms-transform: ${transforms};
    transform: ${transforms};
  `;
};

// rotate
export const rotate = (deg: number): string => {
  return transform(`rotate(${deg}deg)`);
};

// scale
export const scale = (scale: number): string => {
  return transform(`scale(${scale})`);
};

// translate 2d
export const translate = (x: string, y: string): string => {
  return transform(`translate(${x}, ${y})`);
};

// translate 3d
export const translate3D = (x: string, y: string, z: string): string => {
  return transform(`translate3d(${x}, ${y}, ${z})`);
};

// skew
export const skew = (x: number, y: number): string => {
  return transform(`skew(${x}deg, ${y}deg)`);
};

// transform origin
export const transformOrigin = (origin: string): string => {
  return `
    -webkit-transform-origin: ${origin};
    -moz-transform-origin: ${origin};
    transform-origin: ${origin};
  `;
};

// simple transition
export const transition = (transitions: string): string => {
  return `
    -webkit-transition: ${transitions};
    -moz-transition: ${transitions};
    transition: ${transitions};
  `;
};

// simple transition with vendor prefixes
export const transitionPrefixes = (val: string): string => {
  return `
    transition: ${val};
  `;
};

// complex transition
export const transitionComplex = (val1: string, val2: string): string => {
  return `
    -webkit-transition: ${val1} ${val2};
    -moz-transition: ${val1} ${val2};
    transition: ${val1} ${val2};
  `;
};

// complex transition with vendor prefixes
export const transitionComplexPrefixes = (
  val1: string,
  val2: string
): string => {
  return `
  transition: ${val1}, ${val2};
  `;
};

// basic animation
export const animateBasic = (type: string): string => {
  return `
    -webkit-animation: ${type};
    -moz-animation: ${type};
    -ms-animation: ${type};
    animation: ${type};
  `;
};

// complex animation
export const animate = (
  type: string,
  fillMode: string,
  duration: string,
  delay: 0
): string => {
  return `
    -webkit-animation: ${type};
    -moz-animation: ${type};
    -ms-animation: ${type};
    animation: ${type};

    // To remain at the last keyframe value after animation is done
    -webkit-animation-fillmode: ${fillMode};
    -moz-animation-fillmode: ${fillMode};
    -ms-animation-fillmode: ${fillMode};
    animation-fillmode: ${fillMode};

    -webkit-animation-duration: ${duration};
    -moz-animation-duration: ${duration};
    -ms-animation-duration: ${duration};
    animation-duration: ${duration};

    -webkit-animation-delay: ${delay};
    -moz-animation-delay: ${delay};
    -ms-animation-delay: ${delay};
    animation-delay: ${delay};
  `;
};

// basic animation with delay
export const animateBasicDelay = (type: string): string => {
  return `
    -webkit-animation-delay: ${type};
    -moz-animation-delay: ${type};
    -ms-animation-delay: ${type};
    animation-delay: ${type};
  `;
};

export const linearGradient = (
  direction: string,
  colorStop1: string,
  colorStop2: string
): string => {
  return `
    background: -moz-linear-gradient(${direction}, ${colorStop1}, ${colorStop2});
    background: -webkit-linear-gradient(${direction}, ${colorStop1}, ${colorStop2});
    background: -o-linear-gradient(${direction}, ${colorStop1}, ${colorStop2});
    background: linear-gradient(${direction}, ${colorStop1}, ${colorStop2});
  `;
};

// grayscale filter for images
export const grayscale = (percentage: string): string => {
  return `
    -webkit-filter: grayscale(${percentage});
    -webkit-filter: grayscale(${percentage}/100%);
    -moz-filter: grayscale(${percentage});
    -ms-filter: grayscale(${percentage});
    -o-filter: grayscale(${percentage});
    filter: grayscale(${percentage});
  `;
};

// Background-clip
export const backgroundClip = (type: string): string => {
  return `
    -webkit-background-clip: ${type};
    -moz-background-clip: ${type};
    -ms-background-clip: ${type};
    -o-background-clip: ${type};
    background-clip: ${type};
  `;
};

// Webkit and Firefox appearance
export const appearance = (value: string): string => {
  return `
    -webkit-appearance: ${value};
    -moz-appearance: ${value};
  `;
};

// Button core
export const btnCore = (): string => {
  return `
    @include ${fontMainBold()};
    @include ${bgTextColor(pinkIpsy, white)};
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
    white-space: nowrap;
    line-height: 1;
    border: 1px solid ${pinkIpsy};
  `;
};

export const btnBgBorderHover = (
  bgColor: string,
  darkenPercentage: string
): string => {
  return `
    background-color: ${bgColor};
    border-color: ${bgColor};

    &:hover {
      background-color: darken(${bgColor}, ${darkenPercentage});
      border-color: darken(${bgColor}, ${darkenPercentage});
    }
  `;
};

export const grid = (gutter: number): string => {
  const padding = gutter / 2;
  return `
    padding-left: ${padding};
    padding-right: ${padding};
    & > .row {
      margin-left: -$padding;
      margin-right: -$padding;
      & > div[class*='col-'] {
        padding-left: ${padding};
        padding-right: ${padding};
      }
    }
    &.vertically-spaced-grid {
      & > .row > div[class*='col-'] {
        padding-top: ${padding};
        padding-bottom: ${padding};
      }
    }
  `;
};

// aspect ratio
export const aspectRatio = (width: number, height: number): string => {
  return `
    position: relative;
    display: block;
    width: 100%;
    padding-top: (${height} / ${width}) * 100%;
    > * {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `;
};
