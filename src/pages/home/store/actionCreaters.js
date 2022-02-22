import * as actionTypes from "./contence";

const changeTopListAction = (list) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  list,
});

export const getTopListAcion = () => {
  return (dispatch) => {
    dispatch(changeTopListAction([]));
  };
};
