// Actions
export const SELECT_POCKET = 'pocketSelection/SELECT_POCKET';
export const SELECT_MOVE_TO = 'pocketSelection/SELECT_MOVE_TO';
export const RESET_MOVE_TO = 'pocketSelection/RESET_MOVE_TO';

// Action Creators
export const selectPocket = code => ({
  type: SELECT_POCKET,
  code
});

export const selectMoveTo = moveTo => ({
  type: SELECT_MOVE_TO,
  moveTo
});

export const resetMoveTo = () => ({
  type: RESET_MOVE_TO
});

// Selectors
export const selectedPocket = state => state.pocketSelection.selected;
export const selectedMoveTo = state => state.pocketSelection.moveTo;

const initialState = { selected: undefined, moveTo: undefined };

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_POCKET:
      return {
        ...state,
        selected: action.code
      };

    case SELECT_MOVE_TO:
      return {
        ...state,
        moveTo: action.moveTo
      };

    case RESET_MOVE_TO:
      return {
        ...state,
        moveTo: undefined
      };

    default:
      return state;
  }
};
