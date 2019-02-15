import {
  filterCurrencyCodes,
  calculateExchange,
  incrementPocketAmount,
  decrementPocketAmount
} from './index';

describe('Test filterCurrencyCodes()', () => {
  it('should filter out the selected code', () => {
    expect(filterCurrencyCodes(['GBP', 'EUR', 'USD', 'RUB'], 'USD')).toEqual([
      'GBP',
      'EUR',
      'RUB'
    ]);
  });
});

describe('Test calculateExchange()', () => {
  it('should calculate amount based on a rate, returning only two decimal digits', () => {
    expect(calculateExchange(1, 78.23456)).toEqual(78.23);
  });
});
