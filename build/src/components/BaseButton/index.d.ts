import { FC, ReactNode, SyntheticEvent } from 'react';
export declare type BaseButtonProps = {
    to?: string;
    absolutePath?: boolean;
    submit?: boolean;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: (e: SyntheticEvent) => void;
    text?: string;
    children?: ReactNode;
};
declare const BaseButton: FC<BaseButtonProps>;
export default BaseButton;
