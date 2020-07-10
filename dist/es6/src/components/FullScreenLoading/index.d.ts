import { FC, ReactNode } from 'react';
import './FullScreenLoading.scss';
declare type DefaultPropTypes = {
    loading?: boolean;
    children?: ReactNode;
    opacity?: number;
    zIndex?: number;
    spinnerWidth?: number;
    message?: ReactNode;
};
export declare const DefaultFullScreenLoading: FC<DefaultPropTypes>;
declare type PropTypes = DefaultPropTypes & {
    imageOverride?: string;
    imageOverrideType?: string;
    timeout?: number;
};
declare const FullScreenLoading: FC<PropTypes>;
export default FullScreenLoading;
