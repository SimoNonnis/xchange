import store from '../../store';
// Actions
export const GET_RATES_START = 'rates/GET_RATES_START';
export const GET_RATES_SUCCESS = 'rates/GET_RATES_SUCCESS';
export const GET_RATES_FAILED = 'rates/GET_RATES_FAILED';

// Action Creators
const getRatesStart = code => ({
  type: GET_RATES_START,
  code
});

const getRatesSuccess = rates => ({
  type: GET_RATES_SUCCESS,
  rates
});

const getRatesFailed = () => ({
  type: GET_RATES_FAILED
});

export const getRates = code => {
  return (dispatch, getState) => {
    dispatch(getRatesStart(code));
    const { pockets, pocketSelection } = store.getState();

    console.log('pocketSelection.selected: ', pocketSelection.selected);
    console.log(
      'Not selected: ',
      filterCurrencyCodes(pockets, pocketSelection.selected)
    );
  };
};

// Utils
export const filterCurrencyCodes = (pockets, selected) =>
  pockets.filter(p => !p.code === selected).map(p => p.code);

// Reducer
const initialState = {
  isLoading: false,
  rates: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_RATES_SUCCESS:
      return {
        ...state,
        rates: action.rates,
        isLoading: false
      };
    case GET_RATES_FAILED:
      return initialState;
    default:
      return state;
  }
};
