import { GET_SINGLE_ARTIST } from "./action";

const initialState = {
  singleArtist: [],
};

export function singleArtist(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ARTIST: {
      return {
        ...state,
        singleArtist: action.artistDetails.artist,
      };
    }

    default:
      return state;
  }
}
