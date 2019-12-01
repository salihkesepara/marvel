import Immutable from "immutable";
import { status } from "../../constants";
import { REQUEST_COMICS, SUCCESS_COMICS, FAILURE_COMICS } from "../actions/comics";

const initialState = {
  status: status.NULL,
  data: [],
  message: '',
}

export default function comics(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMICS: {
      return Immutable.fromJS(state)
        .merge({
          status: status.PENDING,
        })
        .toJS();
    }
    case SUCCESS_COMICS: {
      return Immutable.fromJS(state)
        .merge({
          status: status.SUCCESS,
          data: action.payload,
          message: '',
        })
        .toJS();
    }
    case FAILURE_COMICS: {
      return Immutable.fromJS(state)
        .merge({
          status: status.FAILURE,
          data: [],
          message: action.message,
        })
        .toJS();
    }

    default:
      return state;
  }
}