import * as React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from './HomeScreen';

describe('<HomeScreen />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
  