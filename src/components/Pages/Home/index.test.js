import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { pocketsList, pocketsInfo, pocketsAmount, rates } from '../../../mocks';
import { Home } from './index';

describe('Test <Home />', () => {
  it('should render with required props', () => {
    const wrapper = shallow(
      <Home
        pocketsList={pocketsList}
        pocketsInfo={pocketsInfo}
        pocketsAmount={pocketsAmount}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call all action with isPolling = true', () => {
    const wrapper = shallow(
      <Home
        pocketsList={pocketsList}
        pocketsInfo={pocketsInfo}
        pocketsAmount={pocketsAmount}
        isPolling={true}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
