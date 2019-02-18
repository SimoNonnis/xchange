import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { pocketsInfo, currenciesList, selected, rates } from '../../../mocks';
import { Rates } from './index';

describe('Test <Rates />', () => {
  it('should render with required props', () => {
    const wrapper = shallow(
      <Rates
        currenciesList={currenciesList}
        pocketsInfo={pocketsInfo}
        rates={rates}
        selected={selected}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
