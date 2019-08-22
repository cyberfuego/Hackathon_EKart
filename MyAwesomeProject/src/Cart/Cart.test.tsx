import * as React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

describe('<Cart />', () => {
  test('renders', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper).toMatchSnapshot();
  });
});