import { FC, ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButton';
declare enum SocialShare {
    email = 0,
    facebook = 1,
    messenger = 2,
    sms = 3,
    twitter = 4
}
export declare type SocialShareKeys = keyof typeof SocialShare;
export declare type IconButtonProps = {
    text?: string;
    socialShare?: SocialShareKeys;
    className?: string;
    fullWidth?: boolean;
    children?: ReactNode;
} & BaseButtonProps;
export declare type SocialShareType = {
    className?: string;
    iconClassName?: string;
};
declare const IconButton: FC<IconButtonProps>;
export default IconButton;
