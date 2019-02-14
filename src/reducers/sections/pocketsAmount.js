import { updatePocketAmount } from '../../utils';

const GBP = 'GBP';
const EUR = 'EUR';
const USD = 'USD';
const RUB = 'RUB';

// Actions
const ADD_TO_POCKET = 'pocketAmount/ADD_TO_POCKET';

// Action Creators
export const addToPocket = (pocket, amount) => ({
  type: ADD_TO_POCKET,
  pocket,
  amount
});

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
  switch (action.type) {
    case ADD_TO_POCKET:
      return {
        ...state,
        [action.pocket]: {
          amount: updatePocketAmount(state[action.pocket].amount, action.amount)
        }
      };
    default:
      return state;
  }
};
