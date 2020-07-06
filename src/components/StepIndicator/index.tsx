// @flow

import React, { FC } from 'react';
import classNames from 'classnames';

import type {
  StepIndicatorClasses,
  StepIndicatorTheme,
  StepSize,
} from './constants';
import { mergeThemes, getStepProps } from './helpers';
import { defaultTheme } from './constants';

type StepIndicatorProps = {
  className?: string;
  classes?: StepIndicatorClasses;
  currentStep: number;
  stepSize?: StepSize;
  steps: Array<string>;
  theme?: StepIndicatorTheme;
};

const StepIndicator: FC<StepIndicatorProps> = ({
  className,
  currentStep: currentDisplayNumber = 1,
  stepSize = 'md',
  steps = [],
  theme: customTheme,
  classes = {},
}) => (
  <div className={classNames('step-indicator', className)}>
    {steps // getStepProps is a HOF, it returns a function with the contract that .map needs
      .map(
        getStepProps({
          currentDisplayNumber,
          classes,
          theme: mergeThemes(defaultTheme, customTheme),
        })
      )
      .map(
        ({
          customClasses,
          stepDisplayNumber,
          step,
          isFirstStep,
          lineStyles,
          indicatorStyles,
          labelStyles,
          isCurrent,
          isPrev,
          isNext,
          lineType,
        }) => (
          <div
            key={stepDisplayNumber}
            className={classNames({
              'step-indicator-current': isCurrent,
              'step-indicator-prev': isPrev,
              'step-indicator-next': isNext,
              [stepSize as string]: true,
            })}
          >
            {!isFirstStep && (
              <div
                className={classNames(
                  'step-indicator-line',
                  lineType,
                  customClasses.line
                )}
                style={lineStyles}
              />
            )}
            <div
              className={classNames('step-indicator-step', customClasses.step)}
              style={indicatorStyles}
            >
              {isPrev ? (
                <span className="icon-ipsy-check-med" />
              ) : (
                stepDisplayNumber
              )}
            </div>
            <span
              className={classNames(
                'small-print step-indicator-label',
                customClasses.label
              )}
              style={labelStyles}
            >
              {step}
            </span>
          </div>
        )
      )}
  </div>
);

export default StepIndicator;
