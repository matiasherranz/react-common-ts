// Globally in your .storybook/preview.js.
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withInfo);
addDecorator(withKnobs);
