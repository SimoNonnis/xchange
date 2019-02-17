import { timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import { filterCurrencyCodes } from '../../utils';

// API_KEY
const API_KEY = '37015a81ba829dbc3fcb3ad2545a2241';
const REFRESH_TIME = 10000;

// Actions
export const GET_RATES_START = 'rates/GET_RATES_START';
export const GET_RATES_SUCCESS = 'rates/GET_RATES_SUCCESS';
export const GET_RATES_FAILED = 'rates/GET_RATES_FAILED';
export const POLLING_STOP = 'rates/POLLING_STOP';

// Action Creators
export const getRates = (pocketsList, selectedPocket) => ({
  type: GET_RATES_START,
  selectedPocket,
  symbols: filterCurrencyCodes(pocketsList, selectedPocket)
});

const getRatesSuccess = ({ base, rates }) => ({
  type: GET_RATES_SUCCESS,
  base,
  rates
});

const getRatesFailed = () => ({
  type: GET_RATES_FAILED
});

export const pollingStop = () => ({
  type: POLLING_STOP
});

// START TODO

export const getRatesEpic = action$ =>
  action$.pipe(
    ofType(GET_RATES_START),
    mergeMap(action =>
      timer(0, REFRESH_TIME).pipe(
        takeUntil(action$.pipe(ofType(POLLING_STOP))),
        mergeMap(() =>
          ajax
            .getJSON(
              `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=${
                action.selectedPocket
              }&symbols=${action.symbols}`
            )
            .pipe(
              map(data =>
                data.success ? getRatesSuccess(data) : getRatesFailed()
              )
            )
        )
      )
    )
  );

// END TODO

// Selectors
export const selectedRates = state => state.rates.rates;
export const selectIsPolling = state => state.rates.isPolling;

// Reducer
const initialState = {
  isLoading: false,
  isPolling: false,
  base: undefined,
  rates: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES_START:
      return {
        ...state,
        isLoading: true,
        isPolling: true
      };

    case GET_RATES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isPolling: true,
        base: action.base,
        rates: action.rates
      };

    case GET_RATES_FAILED:
      return initialState;

    case POLLING_STOP:
      return {
        ...state,
        isPolling: false
      };

    default:
      return state;
  }
};
