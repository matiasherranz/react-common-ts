import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Grid, { Props as GridProps } from '../src/components/Grid';
import Row from '../src/components/Row';
import Column from '../src/components/Column';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div className="bootstrap-grid">
      <Grid
        gutterSize={text('gutterSize', '') as GridProps['gutterSize']}
        verticalGutter={boolean('verticalGutter', false)}
      >
        <Row>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              1
            </div>
          </Column>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              2
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className="border bg-gray-lightest text-center padding-15">
              3
            </div>
          </Column>
          <Column xs={6} sm={8}>
            <div className="border bg-gray-lightest text-center padding-15">
              4
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('vertical gutters', () => (
    <div className="bootstrap-grid">
      <Grid
        gutterSize={text('gutterSize', '') as GridProps['gutterSize']}
        verticalGutter={boolean('verticalGutter', true)}
      >
        <Row>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              1
            </div>
          </Column>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              2
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className="border bg-gray-lightest text-center padding-15">
              3
            </div>
          </Column>
          <Column xs={6} sm={8}>
            <div className="border bg-gray-lightest text-center padding-15">
              4
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('small gutter', () => (
    <div className="bootstrap-grid">
      <Grid
        gutterSize={text('gutterSize', 'small') as GridProps['gutterSize']}
        verticalGutter={boolean('verticalGutter', true)}
      >
        <Row>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              1
            </div>
          </Column>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              2
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className="border bg-gray-lightest text-center padding-15">
              3
            </div>
          </Column>
          <Column xs={6} sm={8}>
            <div className="border bg-gray-lightest text-center padding-15">
              4
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('medium gutter', () => (
    <div className="bootstrap-grid">
      <Grid
        gutterSize={text('gutterSize', 'medium') as GridProps['gutterSize']}
        verticalGutter={boolean('verticalGutter', true)}
      >
        <Row>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              1
            </div>
          </Column>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              2
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className="border bg-gray-lightest text-center padding-15">
              3
            </div>
          </Column>
          <Column xs={6} sm={8}>
            <div className="border bg-gray-lightest text-center padding-15">
              4
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('large gutter', () => (
    <div className="bootstrap-grid">
      <Grid
        gutterSize={text('gutterSize', 'large') as GridProps['gutterSize']}
        verticalGutter={boolean('verticalGutter', true)}
      >
        <Row>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              1
            </div>
          </Column>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              2
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className="border bg-gray-lightest text-center padding-15">
              3
            </div>
          </Column>
          <Column xs={6} sm={8}>
            <div className="border bg-gray-lightest text-center padding-15">
              4
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('outer gutter', () => (
    <div className="bootstrap-grid">
      <Grid
        gutterSize={text('gutterSize', 'large') as GridProps['gutterSize']}
        verticalGutter={boolean('verticalGutter', true)}
        outerGutter={boolean('outerGutter', true)}
      >
        <Row>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              1
            </div>
          </Column>
          <Column xs={12} sm={6}>
            <div className="border bg-gray-lightest text-center padding-15">
              2
            </div>
          </Column>
          <Column xs={6} sm={4}>
            <div className="border bg-gray-lightest text-center padding-15">
              3
            </div>
          </Column>
          <Column xs={6} sm={8}>
            <div className="border bg-gray-lightest text-center padding-15">
              4
            </div>
          </Column>
        </Row>
      </Grid>
    </div>
  ));
