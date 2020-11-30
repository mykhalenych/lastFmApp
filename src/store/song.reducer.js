import { GET_SEARCH_SONG } from "./action";

const initialState = {
  song: [],
};

export function songReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_SONG: {
      return {
        ...state,
        song: action.song.results.trackmatches.track,
      };
    }

    default:
      return state;
  }
}
