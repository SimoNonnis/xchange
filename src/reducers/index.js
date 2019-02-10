import { combineReducers } from 'redux';

import { pockets, pocketSelection, rates } from './sections';

export default combineReducers({
  pockets,
  pocketSelection,
  rates
});
