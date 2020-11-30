import { GET_CHART } from "./action";

const initialState = {
  artists: [],
};

export function chartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHART: {
      return {
        ...state,
        artists: action.topArtist.tracks.track,
      };
    }
    default:
      return state;
  }
}
