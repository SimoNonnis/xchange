const initialState = {
  GBP: { name: 'British Pound', symbol: '£', amount: 1000, isSelected: false },
  EUR: { name: 'Euro', symbol: '€', amount: 1500, isSelected: true },
  USD: {
    name: 'American Dollar',
    symbol: '$',
    amount: 2000,
    isSelected: false
  },
  RUB: { name: 'Russian Ruble', symbol: '₽', amount: 2500, isSelected: false }
};

export default (state = initialState, action) => {
  return state;
};
