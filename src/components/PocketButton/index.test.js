import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PocketButton from './index';

describe('Test <PocketButton />', () => {
  it('should render with required props and selected = false', () => {
    const wrapper = shallow(
      <PocketButton
        code="RUB"
        name="Russian Ruble"
        symbol="₽"
        amount={1000}
        isSelected={false}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with required props and selected = true', () => {
    const wrapper = shallow(
      <PocketButton
        code="RUB"
        name="Russian Ruble"
        symbol="₽"
        amount={1000}
        isSelected={true}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <PocketButton
        code="RUB"
        name="Russian Ruble"
        symbol="₽"
        amount={1000}
        isSelected={false}
        onClick={onClick}
      />
    );

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
