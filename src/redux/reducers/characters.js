import Immutable from "immutable";
import { status } from "../../constants";
import { REQUEST_CHARACTERS, SUCCESS_CHARACTERS, FAILURE_CHARACTERS } from "../actions/characters";

const initialState = {
  status: status.NULL,
  data: [],
  message: '',
}

export default function characters(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CHARACTERS: {
      return Immutable.fromJS(state)
        .merge({
          status: status.PENDING,
        })
        .toJS();
    }
    case SUCCESS_CHARACTERS: {
      return Immutable.fromJS(state)
        .merge({
          status: status.SUCCESS,
          data: [...state.data, ...action.payload],
          message: '',
        })
        .toJS();
    }
    case FAILURE_CHARACTERS: {
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