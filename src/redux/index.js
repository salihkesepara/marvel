import { combineReducers } from "redux";
import characters from "./reducers/characters";
import comics from "./reducers/comics";
import details from "./reducers/details";

const rootReducer = combineReducers({
  characters,
  comics,
  details
});

export default rootReducer;