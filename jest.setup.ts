import '@testing-library/jest-dom';

// Enzyme adapter setup
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme/lib/index';

Enzyme.configure({ adapter: new Adapter() });
