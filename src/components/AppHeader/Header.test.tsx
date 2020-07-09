import React, { ReactNode, ErrorInfo } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { SubscriptionStatus } from '../../types/UserType';

import Header from '.';

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

const headerBaseProps = {
  user: basicUser,
  getLogoUrl: () => '/logo',
  getLoginUrl: () => '/login',
  getJoinUrl: () => '/join',
  getShopUrl: () => '/shop',
  getCartUrl: () => '/cart',
  getPointsUrl: () => '/points',
  getAccountUrl: () => '/account',
  getGlambagUrl: () => '/glambag',
  getSubscribeUrl: () => '/subscribe',
  getSkipWaitlistUrl: () => '/skip',
  getReactivateUrl: () => '/reactivate',
  cartItemsCount: 0,
};

// Component to catch errors in components
class ErrorBoundary extends React.Component<{
  children: ReactNode;
  onError: (error: Error, info: ErrorInfo) => void;
}> {
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError(error, info);
  }

  render() {
    return this.props.children;
  }
}

describe('header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...headerBaseProps} />, div);
  });

  it('renders minimum without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...headerBaseProps} minimum />, div);
  });

  it('renders without crashing with the exit button on', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...headerBaseProps} showExitLink />, div);
  });

  it('renders without crashing with the beauty quiz text', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...headerBaseProps} showBeautyQuizText />, div);
  });

  describe('loading', () => {
    it('should not display "no thanks"', () => {
      const wrapper = shallow(
        <Header {...headerBaseProps} loading showExitLink />
      );
      expect(wrapper.contains('No Thanks')).toBe(false);
    });

    it('should not display "secure" text', () => {
      const wrapper = shallow(<Header {...headerBaseProps} loading />);
      expect(wrapper.contains('Secure')).toBe(false);
    });
  });

  describe('minimum', () => {
    describe('with thanks exit button', () => {
      const onLogoClick = jest.fn();
      const wrapper = mount(
        <Header
          {...headerBaseProps}
          minimum
          showExitLink
          onLogoClick={onLogoClick}
        />
      );

      it("contains the 'no thanks' text", () => {
        expect(wrapper.html()).toContain('No Thanks');
      });

      it('responds to click events in ipsy logo and the button', () => {
        wrapper.find('a#ipsy-logo-header-container').simulate('click');
        wrapper.find('a#ipsy-header-thanks-container').simulate('click');
        expect(onLogoClick).toHaveBeenCalledTimes(2);
      });
    });

    describe('without thanks exit button', () => {
      const onLogoClick = jest.fn();
      const wrapper = mount(
        <Header {...headerBaseProps} minimum onLogoClick={onLogoClick} />
      );

      it("contains the 'secure' text", () => {
        expect(wrapper.html()).toContain('Secure');
      });

      it("does not contain 'the beauty quiz' text", () => {
        expect(wrapper.html()).not.toContain('The Beauty Quiz');
      });

      it('responds to click events in ipsy logo and the button', () => {
        wrapper.find('a#ipsy-logo-header-container').simulate('click');
        expect(onLogoClick).toHaveBeenCalledTimes(1);
      });
    });
    describe('with the beauty quiz text', () => {
      const onLogoClick = jest.fn();
      const wrapper = mount(
        <Header
          {...headerBaseProps}
          minimum
          showBeautyQuizText
          onLogoClick={onLogoClick}
        />
      );

      it("contains 'the beauty quiz' text", () => {
        expect(wrapper.html()).toContain('The Beauty Quiz');
      });

      it("does not contain the 'secure' text", () => {
        expect(wrapper.html()).not.toContain('Secure');
      });

      it('responds to click events in ipsy logo and the button', () => {
        wrapper.find('a#ipsy-logo-header-container').simulate('click');
        expect(onLogoClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('native iOS', () => {
    const onLogoClick = jest.fn();
    const onBackClick = jest.fn();

    describe('with canGoBack', () => {
      const wrapper = mount(
        <Header
          {...headerBaseProps}
          isNativeIOS
          canGoBack
          onLogoClick={onLogoClick}
          onBackClick={onBackClick}
        />
      );

      it('header logo should be centered [logo-center class]', () => {
        expect(wrapper.find('a#ipsy-logo-header').hasClass('logo-center')).toBe(
          true
        );
      });

      it('Should have back button', () => {
        expect(wrapper.find('#back-button-container').exists()).toBe(true);
      });

      it('responds to click events on ipsy logo', () => {
        wrapper.find('a#ipsy-logo-header').simulate('click');
        expect(onLogoClick).toHaveBeenCalledTimes(1);
      });

      it('responds to click events on back-button', () => {
        wrapper.find('#back-button-container').simulate('click');
        expect(onBackClick).toHaveBeenCalledTimes(1);
      });
    });

    it('without canGoBack :: Should not have back button', () => {
      const wrapper = mount(
        <Header {...headerBaseProps} isNativeIOS onLogoClick={onLogoClick} />
      );
      expect(wrapper.find('#back-button-container').exists()).toBe(false);
    });

    it('with canGoBack & loading :: Should not have back button', () => {
      const wrapper = mount(
        <Header
          {...headerBaseProps}
          isNativeIOS
          loading
          canGoBack
          onLogoClick={onLogoClick}
        />
      );
      expect(wrapper.find('#back-button-container').exists()).toBe(false);
    });
  });

  describe('standard', () => {
    describe('not logged in', () => {
      it('should display log in, join, shop and cart buttons', () => {
        const onLogoClick = jest.fn();
        const wrapper = mount(
          <Header
            {...headerBaseProps}
            user={undefined}
            onLogoClick={onLogoClick}
          />
        );
        expect(wrapper.html()).toContain('Log In');
        expect(wrapper.html()).toContain('Join');
        expect(wrapper.html()).toContain('Shop');
        expect(wrapper.html()).toContain('icon-ipsy-cart');
      });
    });

    describe('logged in', () => {
      it('should not display log in button', () => {
        const wrapper = mount(<Header {...headerBaseProps} user={basicUser} />);
        expect(wrapper.html()).not.toContain('Log In');
      });

      it('should display the cart', () => {
        const wrapper = mount(<Header {...headerBaseProps} user={basicUser} />);
        expect(wrapper.html()).toContain('Cart');
      });
    });
  });

  describe('custom RenderLink', () => {
    it('should generate an error when the generated url is #', () => {
      const user = {
        ...basicUser,
        subscriptionStatus: SubscriptionStatus.ACTIVE,
      };
      const RenderLink = () => <p className="Link">Ignoring the props</p>;

      const wrapper = mount(
        <Header {...headerBaseProps} user={user} RenderLink={RenderLink} />
      );

      const links = wrapper.find('p.Link');
      expect(
        links.containsMatchingElement(
          <p className="Link">Ignoring the props</p>
        )
      ).toBe(true);
    });

    it('should use the custom component to render the links', () => {
      // catch the expected error from the console
      spyOn(console, 'error'); // eslint-disable-line no-undef
      const user = {
        ...basicUser,
        subscriptionStatus: SubscriptionStatus.ACTIVE,
      };
      const RenderLink = () => <p className="Link">Ignoring the props</p>;

      const getLogoUrl = () => '#';
      const onError = jest.fn();
      mount(
        <ErrorBoundary onError={onError}>
          <Header
            {...headerBaseProps}
            getLogoUrl={getLogoUrl}
            user={user}
            RenderLink={RenderLink}
          />
        </ErrorBoundary>
      );

      expect(onError).toHaveBeenCalledWith(
        // expect.any(Error),
        new Error(
          "Invalid Url: url can't be just '#' since anchors can't be used as buttons"
        ),
        expect.objectContaining({ componentStack: expect.any(String) })
      );
    });
  });
});
