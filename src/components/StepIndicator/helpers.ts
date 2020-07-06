import { STEP_VARIANTS, LineType } from './constants';
import type {
  StepClasses,
  StepIndicatorClasses,
  StepIndicatorTheme,
} from './constants';

export const mergeThemes = (
  defaultTheme: StepIndicatorTheme,
  customTheme?: StepIndicatorTheme
): StepIndicatorTheme =>
  customTheme
    ? Object.keys(defaultTheme).reduce(
        (acc, key) => ({
          ...acc,
          [key]: { ...defaultTheme[key], ...customTheme[key] },
        }),
        { ...defaultTheme }
      )
    : defaultTheme;

const getStepPositionIndicators = (
  currentDisplayNumber: number,
  stepDisplayNumber: number,
  stepIndex: number
) => ({
  isPrev: currentDisplayNumber > stepDisplayNumber,
  isCurrent: currentDisplayNumber === stepDisplayNumber,
  isNext: currentDisplayNumber < stepDisplayNumber,
  isFirstStep: stepIndex === 0,
});

type GetVariant = {
  isCurrent: boolean;
  isPrev: boolean;
};

const getVariant = ({ isCurrent, isPrev }: GetVariant): string => {
  if (isPrev) return STEP_VARIANTS.PREV;
  if (isCurrent) return STEP_VARIANTS.CURRENT;
  return STEP_VARIANTS.NEXT;
};

type GetStepPropsInput = {
  classes: StepIndicatorClasses;
  currentDisplayNumber: number;
  theme: StepIndicatorTheme;
};

export type StepProps = {
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

export const getStepProps = ({
  classes,
  currentDisplayNumber,
  theme,
}: GetStepPropsInput) => (step: string, index: number): StepProps => {
  const stepDisplayNumber = index + 1;
  const { isPrev, isCurrent, isNext, isFirstStep } = getStepPositionIndicators(
    currentDisplayNumber,
    stepDisplayNumber,
    index
  );

  const { linePrev, lineNext } = theme;
  const variant = getVariant({ isCurrent, isPrev });
  const stepTheme = theme[variant];
  const line = isCurrent || isPrev ? linePrev : lineNext;

  const lineStyles = { borderTopColor: line.color, borderTopStyle: line.type };
  const indicatorStyles = {
    backgroundColor: stepTheme.bg,
    color: stepTheme.text,
  };
  const labelStyles = { color: stepTheme.bottomText };

  const customClasses: StepClasses = classes[variant] || {};

  return {
    customClasses,
    stepDisplayNumber,
    lineType: line.type,
    step,
    isFirstStep,
    lineStyles,
    indicatorStyles,
    labelStyles,
    isCurrent,
    isPrev,
    isNext,
  };
};
