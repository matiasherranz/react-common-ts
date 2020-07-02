import React from 'react';
import { render } from '@testing-library/react';

import IconButton from './IconButton';

describe('IconButton', () => {
  test('renders without crashing', () => {
    render(<IconButton />);
  });
});

// describe('IconButton', () => {
//   test('basic rendering with all props', () => {
//     const component = renderer.create(
//       <IconButton
//         text="Share on Facebook"
//         social="facebook"
//         fullWidth
//         onClick={() => {}}
//       />
//     );
//     expect(component.toJSON()).toMatchSnapshot();
//   });

//   test('basic rendering only with text', () => {
//     const component = renderer.create(<IconButton text="Default button" />);
//     expect(component.toJSON()).toMatchSnapshot();
//   });

//   test('basic rendering with children', () => {
//     const component = renderer.create(
//       <IconButton>
//         <p>Test children</p>
//       </IconButton>
//     );
//     expect(component.toJSON()).toMatchSnapshot();
//   });
// });
