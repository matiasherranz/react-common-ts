import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import SocialLinks from './';

it('SocialLinks renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SocialLinks facebook instagram twitter youtube pinterest snapchat />,
    div
  );
});

// TODO: Revisit this:
// it('should match snapshot', () => {
//   const wrapper = shallow(
//     <SocialLinks facebook instagram twitter youtube pinterest snapchat />
//   );
//   expect(toJSON(wrapper)).toMatchSnapshot();
// });
