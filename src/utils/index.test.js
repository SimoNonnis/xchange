import {
  filterCurrencyCodes,
  calculateExchange,
  sum,
  substract,
  updatePocketAmount
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

describe('Test sum()', () => {
  it('should return the sum of two values', () => {
    expect(sum(10, 10)).toEqual(20);
  });
});

describe('Test substract()', () => {
  it('should substract two values', () => {
    expect(substract(20, 15)).toEqual(5);
  });
});

describe('Test updatePocketAmount()', () => {
  it('should perform the sum operation and return max two digits decimal', () => {
    expect(updatePocketAmount(sum)(10, 5.22222)).toEqual(15.22);
  });

  it('should perform the substract operation and return max two digits decimal', () => {
    expect(updatePocketAmount(substract)(10, 5.22222)).toEqual(4.78);
  });
});
