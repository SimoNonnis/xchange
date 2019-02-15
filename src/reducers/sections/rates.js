import axios from 'axios';
import store from '../../store';
import { filterCurrencyCodes } from '../../utils';

// API_KEY
const API_KEY = '37015a81ba829dbc3fcb3ad2545a2241';
const REFRESH_TIME = 10000;

// Actions
export const GET_RATES_START = 'rates/GET_RATES_START';
export const GET_RATES_SUCCESS = 'rates/GET_RATES_SUCCESS';
export const GET_RATES_FAILED = 'rates/GET_RATES_FAILED';

// Action Creators
const getRatesStart = () => ({
  type: GET_RATES_START
});

const getRatesSuccess = ({ base, rates }) => ({
  type: GET_RATES_SUCCESS,
  base,
  rates
});

const getRatesFailed = () => ({
  type: GET_RATES_FAILED
});

const getRatesRequest = (api_key, base, symbols, dispatch) =>
  axios
    .get(
      `http://data.fixer.io/api/latest?access_key=${api_key}&base=${base}&symbols=${symbols}`
    )
    .then(
      ({ data }) =>
        dispatch(data.success ? getRatesSuccess(data) : getRatesFailed()),
      error => dispatch(getRatesFailed())
    );

export const getRates = () => {
  return (dispatch, getState) => {
    dispatch(getRatesStart());

    const { pockets, pocketSelection } = store.getState();
    const symbols = filterCurrencyCodes(pockets.list, pocketSelection.selected);

    getRatesRequest(
      API_KEY,
      pocketSelection.selected,
      symbols.toString(),
      dispatch
    );

    return setInterval(
      () =>
        getRatesRequest(
          API_KEY,
          pocketSelection.selected,
          symbols.toString(),
          dispatch
        ),
      REFRESH_TIME
    );
  };
};

// Selectors
export const selectedRates = state => state.rates.rates;

// Reducer
const initialState = {
  isLoading: false,
  base: undefined,
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
        isLoading: false,
        base: action.base,
        rates: action.rates
      };
    case GET_RATES_FAILED:
      return initialState;
    default:
      return state;
  }
};
