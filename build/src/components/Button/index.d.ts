import { FC } from 'react';
import { BaseButtonProps } from '../BaseButton';
export declare type ButtonProps = {
    link?: boolean;
    secondary?: boolean;
    main?: boolean;
    big?: boolean;
    medium?: boolean;
    small?: boolean;
    outline?: boolean;
    disabled?: boolean;
    gray?: boolean;
    noPadding?: boolean;
    fullWidth?: boolean;
    className?: string;
} & BaseButtonProps;
declare const Button: FC<ButtonProps>;
export default Button;
