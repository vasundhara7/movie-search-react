import { combineReducers } from "redux";
import movieSearchReducer from "./movieSearchReducer";

export default combineReducers({
  movieSearch: movieSearchReducer,
});
