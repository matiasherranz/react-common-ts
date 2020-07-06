import colors from '../../styles/colors';

export enum StepSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type StepClasses = {
  line?: string;
  step?: string;
  label?: string;
};

export type StepIndicatorClasses = {
  prevStep?: StepClasses;
  currentStep?: StepClasses;
  nextStep?: StepClasses;
};

export type LineType = 'solid' | 'dotted' | 'dashed';

export type Line = {
  color?: string;
  type?: LineType;
};

export type StepStyles = {
  bg?: string;
  text?: string;
  bottomText?: string;
};

export const STEP_VARIANTS = Object.freeze({
  PREV: 'prevStep',
  CURRENT: 'currentStep',
  NEXT: 'nextStep',
});

export type StepIndicatorTheme = {
  prevStep: StepStyles;
  currentStep: StepStyles;
  nextStep: StepStyles;
  linePrev: Line;
  lineNext: Line;
};

export const defaultTheme = {
  prevStep: {
    bg: colors.blue,
    text: colors.energizingBlue,
    bottomText: colors.energizingBlue,
  },
  currentStep: {
    bg: colors.energizingBlue,
    text: colors.white,
    bottomText: colors.energizingBlue,
  },
  nextStep: {
    bg: colors.grayLight,
    text: colors.grayMedium,
    bottomText: colors.grayMedium,
  },
  linePrev: {
    color: colors.energizingBlue,
    type: 'solid' as LineType,
  },
  lineNext: {
    color: colors.grayMedium,
    type: 'dashed' as LineType,
  },
};
