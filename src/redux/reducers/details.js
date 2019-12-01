import Immutable from "immutable";
import { SAVE_DETAILS } from "../actions/details";

const initialState = {
  data: [],
}

export default function details(state = initialState, action) {
  switch (action.type) {
    case SAVE_DETAILS: {
      return Immutable.fromJS(state)
        .merge({
          data: action.payload,
        })
        .toJS();
    }

    default:
      return state;
  }
}