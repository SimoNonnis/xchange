const initialState = [
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    amount: 1000,
    isDisabled: true
  },
  {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    amount: 1500,
    isDisabled: false
  },
  {
    code: 'USD',
    name: 'American Dollar',
    symbol: '$',
    amount: 2000,
    isDisabled: true
  },
  {
    code: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽',
    amount: 2500,
    isDisabled: false
  }
];

export default (state = initialState, action) => {
  return state;
};
