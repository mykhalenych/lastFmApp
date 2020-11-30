import { SEARCH_SONG } from "./action";

const initialState = {
  search: [],
};

export function searchValue(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SONG: {
      return {
        ...state,
        search: action.text,
      };
    }

    default:
      return state;
  }
}
