import canUseDOM from './canUseDOM';

const isIE11 = (): boolean =>
  canUseDOM ? /Trident.*rv[ :]*11\./.test(navigator.userAgent) : false;

export default isIE11;
