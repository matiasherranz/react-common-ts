import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Modal from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal isOpen />, div);
});

it('doesnt render header by default', () => {
  const component = shallow(<Modal isOpen />);
  expect(
    component.find('.modal .modal-header .icon-ipsy-close-cross').length
  ).toBe(0);
});

it('shows header when showDismiss', () => {
  const component = shallow(<Modal showDismiss isOpen />);
  expect(
    component.find('.modal .modal-header .icon-ipsy-close-cross').length
  ).toBe(1);
});

it('should call onDismiss when the x on the header is clicked', () => {
  const onDismiss = jest.fn();
  const component = shallow(<Modal showDismiss isOpen onDismiss={onDismiss} />);
  component
    .find('.modal .modal-header .icon-ipsy-close-cross')
    .simulate('click');
  expect(onDismiss).toBeCalled();
});
