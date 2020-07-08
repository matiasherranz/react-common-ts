import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Footer from '../src/components/Footer';
import SEOFooter from '../src/components/Footer/SEOFooter';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('white footer', () => (
    <Footer useWhiteBackground={boolean('Use White Background', true)} />
  ))
  .add('dark footer', () => (
    <Footer useWhiteBackground={boolean('Use Dark Background', false)} />
  ));

const seoFooterTitle = 'SEO Footer Test';
const seoFooterLinks = [
  {
    text: 'Shop Great Gifts',
    url: 'https://www.ipsy.com/browse/gifts',
  },
  {
    text: 'Community favorite: Belief Moisturizing eye bomb',
    url: 'https://www.ipsy.com/product/p-jdqkqxd67074xtj',
  },
  {
    text: 'Luxie Beauty Brush, a must-try',
    url: 'https://www.ipsy.com/product/p-jksm34dc333dkkk',
  },
  {
    text: 'The Best Red Lipstick for Your Skin Tone',
    url: 'https://www.ipsy.com/blog/best-red-lipstick',
  },
  {
    text: 'DIY Geometric Nail Art Looks',
    url: 'https://www.ipsy.com/blog/step-by-step-nail-art',
  },
  {
    text: "Everything You've Ever Wanted to Know About Foundation",
    url: 'https://www.ipsy.com/blog/how-to-apply-foundation',
  },
];

storiesOf('SEOFooter', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SEOFooter
      footerTitle={seoFooterTitle}
      footerLinks={seoFooterLinks}
      copyrightYear={new Date().getFullYear()}
    />
  ));
