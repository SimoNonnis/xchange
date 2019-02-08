import { combineReducers } from 'redux';

import { pockets, counter } from './sections';

export default combineReducers({
  pockets,
  counter
});
