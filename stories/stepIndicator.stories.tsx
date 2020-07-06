import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  array,
  color,
  select,
} from '@storybook/addon-knobs';

import StepIndicator from '../src/components/StepIndicator';
import colors from '../src/styles/colors';
import { StepSize, LineType } from '../src/components/StepIndicator/constants';

const optionsLineStyle = {
  solid: 'solid',
  dotted: 'dotted',
  dashed: 'dashed',
};

storiesOf('StepIndicator/Static', module)
  .addDecorator(withKnobs)
  .add('step 1', () => (
    <StepIndicator steps={['Step 1', 'Step 2']} currentStep={1} />
  ))
  .add('step 2', () => (
    <StepIndicator steps={['Step 1', 'Step 2']} currentStep={2} />
  ))
  .add('3 steps + long bottomText + custom theme', () => (
    <StepIndicator
      steps={['Sign up', 'Choose Product', 'Done!']}
      currentStep={2}
      //stepSize="lg"
      theme={{
        prevStep: {
          bg: colors.boticelli,
          text: colors.navy,
          bottomText: colors.navy,
        },
        currentStep: {
          bg: colors.navy,
          text: colors.white,
          bottomText: colors.navy,
        },
        nextStep: {
          bg: colors.grayLight,
          text: colors.grayMedium,
          bottomText: colors.navy,
        },
        linePrev: {
          color: colors.navy,
          type: 'solid',
        },
        lineNext: {
          color: colors.navy,
          type: 'solid',
        },
      }}
    />
  ));

storiesOf('StepIndicator/Playground', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <StepIndicator
      steps={array('steps', ['Step 1', 'Step 2', 'Step 3'], ',')}
      currentStep={number('currentStep', 2)}
      stepSize={select('stepSize', { ...StepSize }, StepSize.md)}
      theme={{
        prevStep: {
          bg: color('prevStep.bg', '#e6f1f5'),
          text: color('prevStep.text', '#216DB9'),
          bottomText: color('prevStep.bottomText', '#216DB9'),
        },
        currentStep: {
          bg: color('currentStep.bg', '#216DB9'),
          text: color('currentStep.text', '#FFFFFF'),
          bottomText: color('currentStep.bottomText', '#216DB9'),
        },
        nextStep: {
          bg: color('nextStep.bg', '#dddddd'),
          text: color('nextStep.text', '#767676'),
          bottomText: color('nextStep.bottomText', '#767676'),
        },
        linePrev: {
          color: color('linePrev.color', '#216DB9'),
          type: select('linePrev.type', optionsLineStyle, 'solid') as LineType,
        },
        lineNext: {
          color: color('lineNext.color', '#767676'),
          type: select(
            'lineNext.type',
            { ...optionsLineStyle },
            'dashed'
          ) as LineType,
        },
      }}
    />
  ));
