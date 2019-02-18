import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Rates } from './index';

const pocketsInfo = {
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£'
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  USD: {
    code: 'USD',
    name: 'American Dollar',
    symbol: '$'
  },
  RUB: {
    code: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽'
  }
};

const rates = {
  GBP: 1000,
  EUR: 2000,
  USD: 3000
};

describe('Test <Rates />', () => {
  it('should render with required props', () => {
    const wrapper = shallow(
      <Rates
        currenciesList={['GBP', 'EUR', 'USD']}
        pocketsInfo={pocketsInfo}
        rates={rates}
        selected="RUB"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
