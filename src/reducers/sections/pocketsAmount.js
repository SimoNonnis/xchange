const GBP = 'GBP';
const EUR = 'EUR';
const USD = 'USD';
const RUB = 'RUB';

// Selectors
export const selectPocketsAmount = state => state.pocketsAmount;

const initialState = {
  [GBP]: {
    amount: 1000
  },
  [EUR]: {
    amount: 1500
  },
  [USD]: {
    amount: 2000
  },
  [RUB]: {
    amount: 2500
  }
};

export default (state = initialState, action) => {
  return state;
};
