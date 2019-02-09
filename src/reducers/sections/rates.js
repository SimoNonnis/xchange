// Actions
export const GET_RATES_START = 'rates/GET_RATES_START';
export const GET_RATES_SUCCESS = 'rates/GET_RATES_SUCCESS';
export const GET_RATES_FAILED = 'rates/GET_RATES_FAILED';

// Action Creators
export const getRates = () => {
  return dispatch => {
    dispatch({
      type: GET_RATES_START
    });
  };
};

// Reducer
const initialState = {
  isLoading: false,
  payload: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES_START:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};
