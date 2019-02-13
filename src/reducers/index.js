import { combineReducers } from 'redux';

import { pockets, pocketsAmount, pocketSelection, rates } from './sections';

export default combineReducers({
  pockets,
  pocketsAmount,
  pocketSelection,
  rates
});
