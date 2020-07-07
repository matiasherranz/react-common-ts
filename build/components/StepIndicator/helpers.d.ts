import { LineType } from './constants';
import type { StepClasses, StepIndicatorClasses, StepIndicatorTheme } from './constants';
export declare const mergeThemes: (defaultTheme: StepIndicatorTheme, customTheme?: StepIndicatorTheme | undefined) => StepIndicatorTheme;
declare type GetStepPropsInput = {
    classes: StepIndicatorClasses;
    currentDisplayNumber: number;
    theme: StepIndicatorTheme;
};
export declare type StepProps = {
    customClasses: StepClasses;
    stepDisplayNumber: number;
    lineType?: LineType;
    step: string;
    isFirstStep: boolean;
    lineStyles: Record<string, string | undefined>;
    indicatorStyles: Record<string, string>;
    labelStyles: Record<string, string>;
    isCurrent: boolean;
    isPrev: boolean;
    isNext: boolean;
};
export declare const getStepProps: ({ classes, currentDisplayNumber, theme, }: GetStepPropsInput) => (step: string, index: number) => StepProps;
export {};
