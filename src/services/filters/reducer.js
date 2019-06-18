import { UPDATE_FILTER, REFRESH_TERM_FILTER } from './actionTypes';

const initialState = {
  item: [],
  term: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload
      };
    case REFRESH_TERM_FILTER:
      return {
        ...state,
        term: action.payload
      };
    default:
      return state;
  }
}
