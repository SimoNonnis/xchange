import { currenciesList, selected, rates as ratesResponse } from '../../mocks';
import pocketSelection, {
  SELECT_POCKET,
  SELECT_MOVE_TO,
  RESET_MOVE_TO
} from './pocketSelection';
import rates, {
  GET_RATES_START,
  GET_RATES_SUCCESS,
  GET_RATES_FAILED,
  POLLING_STOP
} from './rates';

describe('Test pocketSelection reducer', () => {
  it('should return the state if no valid action', () => {
    expect(pocketSelection(undefined, { type: 'FAKE_ACTION' })).toEqual({
      selected: undefined,
      moveTo: undefined
    });
  });

  it('should set the selected pocket if SELECT_POCKET action', () => {
    expect(
      pocketSelection(
        {
          selected: 'EUR',
          moveTo: undefined
        },
        { type: SELECT_POCKET, code: 'RUB' }
      )
    ).toEqual({
      selected: 'RUB',
      moveTo: undefined
    });
  });

  it('should set the moveTo pocket if SELECT_MOVE_TO action', () => {
    expect(
      pocketSelection(
        {
          selected: undefined,
          moveTo: 'RUB'
        },
        { type: SELECT_MOVE_TO, moveTo: 'EUR' }
      )
    ).toEqual({
      selected: undefined,
      moveTo: 'EUR'
    });
  });

  it('should reset the moveTo pocket if RESET_MOVE_TO action', () => {
    expect(
      pocketSelection(
        {
          selected: 'RUB',
          moveTo: 'EUR'
        },
        { type: RESET_MOVE_TO }
      )
    ).toEqual({
      selected: 'RUB',
      moveTo: undefined
    });
  });
});

describe('Test rates reducer', () => {
  it('should return the state if no valid action', () => {
    expect(rates(undefined, { type: 'FAKE_ACTION' })).toEqual({
      isLoading: false,
      isPolling: false,
      base: undefined,
      rates: {}
    });
  });

  it('should start the polling if GET_RATES_START action', () => {
    expect(
      rates(undefined, {
        type: GET_RATES_START,
        selectedPocket: selected,
        symbols: currenciesList
      })
    ).toEqual({
      isLoading: true,
      isPolling: true,
      base: undefined,
      rates: {}
    });
  });

  it('should set the rates if GET_RATES_SUCCESS action', () => {
    expect(
      rates(undefined, {
        type: GET_RATES_SUCCESS,
        base: selected,
        rates: ratesResponse
      })
    ).toEqual({
      isLoading: false,
      isPolling: true,
      base: selected,
      rates: ratesResponse
    });
  });

  it('should set the error if GET_RATES_FAILED action', () => {
    expect(
      rates(undefined, {
        type: GET_RATES_FAILED
      })
    ).toEqual({
      isLoading: false,
      isPolling: true,
      error: true,
      rates: {}
    });
  });

  it('should set the selected pocket if POLLING_STOP action', () => {
    expect(
      rates(undefined, {
        type: POLLING_STOP
      })
    ).toEqual({
      base: undefined,
      error: undefined,
      isLoading: false,
      isPolling: false,
      rates: {}
    });
  });
});
