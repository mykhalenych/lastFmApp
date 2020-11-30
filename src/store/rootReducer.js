import { combineReducers } from "redux";

import { chartReducer } from "./chart.reducer";
import { singleArtist } from "./singleArtist.reducer";
import {searchValue} from './search.reducer'
import {songReducer} from './song.reducer'

const rootReducer = combineReducers({
  chartReducer,
  singleArtist,
  searchValue,
  songReducer
});

export default rootReducer;
