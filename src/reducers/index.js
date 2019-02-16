import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { pockets, pocketsAmount, pocketSelection, rates } from './sections';
import { getRatesEpic } from './sections/rates';

export const rootReducer = combineReducers({
  pockets,
  pocketsAmount,
  pocketSelection,
  rates
});

export const rootEpic = combineEpics(getRatesEpic);
