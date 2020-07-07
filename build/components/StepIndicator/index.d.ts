import { FC } from 'react';
import type { StepIndicatorClasses, StepIndicatorTheme, StepSize } from './constants';
declare type StepIndicatorProps = {
    className?: string;
    classes?: StepIndicatorClasses;
    currentStep: number;
    stepSize?: StepSize;
    steps: Array<string>;
    theme?: StepIndicatorTheme;
};
declare const StepIndicator: FC<StepIndicatorProps>;
export default StepIndicator;
