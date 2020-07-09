export type Callback = () => void;
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: Callback = () => {};

export const isInAndroidWeb = (): boolean => {
  return /(Android)/g.test(window.navigator.userAgent);
};
