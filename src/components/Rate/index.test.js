import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Rate from './index';

describe('Test <Rate />', () => {
  it('should render with required props', () => {
    const wrapper = shallow(<Rate selectedCode="RUB" name="Euro" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow(
      <Rate selectedCode="RUB" amount={1000} name="Euro" />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
