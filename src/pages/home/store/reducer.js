import { Map } from "immutable";
import * as actionTypes from "./contence";
const defaultReducers = Map({
  list: [],
});

export default function reducer(state = defaultReducers, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("list", action.list);
    default:
      return state;
  }
}
