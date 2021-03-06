const GBP = 'GBP';
const EUR = 'EUR';
const USD = 'USD';
const RUB = 'RUB';

// Selectors
export const selectPocketsList = state => state.pockets.list;
export const selectPocketsInfo = state => state.pockets.info;

const initialState = {
  list: [GBP, EUR, USD, RUB],
  info: {
    [GBP]: {
      code: GBP,
      name: 'British Pound',
      symbol: '£'
    },
    [EUR]: {
      code: EUR,
      name: 'Euro',
      symbol: '€'
    },
    [USD]: {
      code: USD,
      name: 'American Dollar',
      symbol: '$'
    },
    [RUB]: {
      code: RUB,
      name: 'Russian Ruble',
      symbol: '₽'
    }
  }
};

export default (state = initialState, action) => {
  return state;
};
