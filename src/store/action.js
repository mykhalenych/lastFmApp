export const GET_CHART = "GET_CHART";
export const GET_SINGLE_ARTIST = "GET_SINGLE_ARTIST";
export const SEARCH_SONG = "SEARCH_SONG";
export const GET_SEARCH_SONG = "GET_SEARCH_SONG";

export function getFetch(url, type) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((item) => {
        return dispatch(fetchDataSuccess(item, type));
      });
  };
}
export function fetchDataSuccess(item, type) {
  if (type === "GET_CHART") {
    return {
      type: GET_CHART,
      topArtist: item,
    };
  } else if (type === "GET_SINGLE_ARTIST") {
    return {
      type: GET_SINGLE_ARTIST,
      artistDetails: item,
    };
  } else if (type === "GET_SEARCH_SONG") {
    return {
      type: GET_SEARCH_SONG,
      song: item,
    };
  }
}

export function handleSearch(e) {
  return {
    type: SEARCH_SONG,
    text: e.target.value,
  };
}
