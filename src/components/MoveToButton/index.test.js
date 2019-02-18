import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MoveToButton from './index';

describe('Test <MoveToButton />', () => {
  it('should render with required props', () => {
    const wrapper = shallow(<MoveToButton code="RUB" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<MoveToButton code="RUB" onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
