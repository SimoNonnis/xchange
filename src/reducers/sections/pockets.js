const initialState = [
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    amount: 1000,
    isSelected: false
  },
  { code: 'EUR', name: 'Euro', symbol: '€', amount: 1500, isSelected: true },
  {
    code: 'USD',
    name: 'American Dollar',
    symbol: '$',
    amount: 2000,
    isSelected: false
  },
  {
    code: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽',
    amount: 2500,
    isSelected: false
  }
];

export default (state = initialState, action) => {
  return state;
};
