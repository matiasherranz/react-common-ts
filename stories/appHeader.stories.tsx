import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

import Header from '../src/components/AppHeader';
import { SubscriptionStatus } from '../src/types/UserType';

const headerBaseProps = {
  getLogoUrl: () => '/logo',
  getLoginUrl: () => '/login',
  getJoinUrl: () => '/join',
  getShopUrl: () => '/shop',
  getCartUrl: () => '/cart',
  getPointsUrl: () => '/points',
  getAccountUrl: () => '/account',
  getGlambagUrl: () => '/glambag',
  getSubscribeUrl: () => '/subscribe',
  getReactivateUrl: () => '/reactivate',
};

const basicUser = {
  uuid: '1',
  firstname: 'test',
  lastname: 'testerson',
  displayName: 'McTest',
  email: 'test@test.test',
  isFreeBagReferrer: false,
  numInvitesLeft: 0,
  subscriptionStatus: 'ACTIVE',
};

storiesOf('AppHeader/Static Props', module)
  .add('minimum :: loading', () => (
    <Header
      minimum
      loading
      onLogoClick={action('onLogoClick')}
      {...headerBaseProps}
    />
  ))
  .add('minimum :: default', () => (
    <Header
      minimum
      loading={false}
      onLogoClick={action('onLogoClick')}
      {...headerBaseProps}
    />
  ))
  .add('minimum :: closable', () => (
    <Header
      minimum
      isClosable
      loading={false}
      onLogoClick={action('onLogoClick')}
      onCloseHandler={action('onCloseHandler')}
      {...headerBaseProps}
    />
  ))
  .add('minimum :: showExitLink', () => (
    <Header
      minimum
      loading={false}
      showExitLink
      onLogoClick={action('onLogoClick')}
      {...headerBaseProps}
    />
  ))
  .add('minimum :: showBeautyQuizText', () => (
    <Header
      minimum
      loading={false}
      showBeautyQuizText
      onLogoClick={action('onLogoClick')}
      {...headerBaseProps}
    />
  ))
  .add('default :: not authenticated', () => (
    <Header onLogoClick={action('onLogoClick')} {...headerBaseProps} />
  ))
  .add('default :: authenticated unsubscribed', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{ ...basicUser, subscriptionStatus: 'NONE' }}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated unsubscribed waitlisted', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{ ...basicUser, isWaitlisted: true }}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated unsubscribed waitlisted', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{
        ...basicUser,
        isWaitlisted: true,
      }}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated with shouldShowPaymentFailure', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{
        ...basicUser,
        shouldShowPaymentFailure: true,
      }}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated with isFreeBagReferrer', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{
        ...basicUser,
        isFreeBagReferrer: true,
        numInvitesLeft: 2,
      }}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated subscribed', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{
        ...basicUser,
        isSubscribed: true,
      }}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated subscribed with cart items', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{
        ...basicUser,
        isSubscribed: true,
        subscriptionStatus: SubscriptionStatus.ACTIVE,
      }}
      cartItemsCount={3}
      {...headerBaseProps}
    />
  ))
  .add('default :: authenticated and cart active tab', () => (
    <Header
      onLogoClick={action('onLogoClick')}
      user={{
        ...basicUser,
        isSubscribed: true,
        subscriptionStatus: SubscriptionStatus.ACTIVE,
      }}
      cartItemsCount={3}
      activeTab="cart"
      {...headerBaseProps}
    />
  ))
  .add('isNativeIOS :: default', () => (
    <Header
      isNativeIOS
      canGoBack
      user={{
        ...basicUser,
        isSubscribed: true,
        subscriptionStatus: SubscriptionStatus.ACTIVE,
      }}
      onLogoClick={action('logo clicked')}
      onBackClick={action('back clicked')}
      {...headerBaseProps}
    />
  ))
  .add('isNativeIOS :: loading', () => (
    <Header
      isNativeIOS
      loading
      onLogoClick={action('logo clicked')}
      onBackClick={action('back clicked')}
      {...headerBaseProps}
    />
  ))
  .add('splash :: default', () => (
    <Header
      splash
      onLogoClick={action('logo clicked')}
      onLoginClick={action('login clicked')}
      onJoinClick={action('join clicked')}
      {...headerBaseProps}
    />
  ))
  .add('splash :: alternative buttons (mobile)', () => (
    <Header
      splash
      useAlternativeButtons
      onLogoClick={action('logo clicked')}
      onLoginClick={action('login clicked')}
      onJoinClick={action('join clicked')}
      {...headerBaseProps}
    />
  ))
  .add('splash :: button in header (mobile)', () => (
    <Header
      splash
      buttonInHeader
      onLogoClick={action('logo clicked')}
      onLoginClick={action('login clicked')}
      onJoinClick={action('join clicked')}
      {...headerBaseProps}
    />
  ));

storiesOf('AppHeader/Play Ground', module)
  .addDecorator(withKnobs)
  .add('authenticated', () => (
    <Header
      minimum={boolean('minimum', false)}
      canGoBack={boolean('canGoBack', false)}
      isNativeIOS={boolean('isNativeIOS', false)}
      isNativeAndroid={boolean('isNativeAndroid', false)}
      loading={boolean('loading', false)}
      splash={boolean('splash', false)}
      cross={boolean('cross', false)}
      onCrossClick={action('cross clicked')}
      useAlternativeButtons={boolean('useAlternativeButtons (mobile)', false)}
      buttonInHeader={boolean('buttonInHeader (mobile)', false)}
      showExitLink={boolean('showExitLink', false)}
      user={{
        ...basicUser,
        isSubscribed: boolean('user isSubscribed', false),
        isWaitlisted: boolean('user isWaitlisted', false),
        shouldShowPaymentFailure: boolean(
          'user shouldShowPaymentFailure',
          false
        ),
        isFreeBagReferrer: boolean('user isFreeBagReferrer', false),
        numInvitesLeft: number('user numInvitesLeft', 0),
        subscriptionStatus: select(
          'Subscription sta tus',
          ['ACTIVE', 'NONE', 'WAITLIST', 'CANCELLED', 'DO_NOT_RENEW', 'PAUSED'],
          'ACTIVE'
        ),
      }}
      cartItemsCount={number('cartItemsCount', 0)}
      onLogoClick={action('logo clicked')}
      onBackClick={action('back clicked')}
      activeTab={select(
        'activeTab',
        ['shop', 'cart', 'points', 'account', 'glambag'],
        'shop'
      )}
      {...headerBaseProps}
    />
  ))
  .add('not authenticated', () => (
    <Header
      minimum={boolean('minimum', false)}
      loading={boolean('loading', false)}
      splash={boolean('splash', false)}
      cross={boolean('cross', false)}
      onCrossClick={action('cross clicked')}
      useAlternativeButtons={boolean('useAlternativeButtons (mobile)', false)}
      buttonInHeader={boolean('buttonInHeader (mobile)', false)}
      onLogoClick={action('logo clicked')}
      onBackClick={action('back clicked')}
      canGoBack={boolean('canGoBack', false)}
      isNativeIOS={boolean('isNativeIOS', false)}
      cartItemsCount={number('cartItemsCount', 0)}
      activeTab={select('activeTab', ['shop', 'cart'], 'shop')}
      {...headerBaseProps}
    />
  ));
