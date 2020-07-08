import React from 'react';
import { render } from '@testing-library/react';

import Modal from './index';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const { container } = render(<Modal isOpen ariaHideApp={false} />, {
    container: document.body.appendChild(div),
  });
  expect(container).toMatchSnapshot();
});

// TODO: revisit the rest of the tests using react-testing-library

// it('doesnt render header by default', () => {
//   const { container } = render(<Modal isOpen />);

//   expect(container.firstChild).not.toHaveClass(
//     '.modal .modal-header .icon-ipsy-close-cross'
//   );
// });

// it('shows header when showDismiss', () => {
//   const { container } = render(<Modal showDismiss isOpen />);
//   expect(
//     component.find('.modal .modal-header .icon-ipsy-close-cross').length
//   ).toBe(1);
// });

// it('should call onDismiss when the x on the header is clicked', () => {
//   const onDismiss = jest.fn();
//   const { container } = render(<Modal showDismiss isOpen onDismiss={onDismiss} />);
//   component
//     .find('.modal .modal-header .icon-ipsy-close-cross')
//     .simulate('click');
//   expect(onDismiss).toBeCalled();
// });
