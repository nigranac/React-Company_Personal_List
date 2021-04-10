import * as actionTypes from "../action-types/actionTypes";

export const userReducer = (state = { userlist: [] }, action) => {
  switch (action.type) {
    case actionTypes.USER_LIST_REQUEST:
      return { loading: true };
    case actionTypes.USER_LIST_SUCCESS:
      return { loading: false, userlist: action.payload };
    case actionTypes.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.UPDATE_USER:
      console.log("das", action.payload);
      const updateIndex = state.userlist.map((user) => {
        if (user.id === action.payload.data.id) {
          return (user = action.payload.data);
        } else {
          return user;
        }
      });

      return { ...state, userlist: updateIndex };

    case actionTypes.DELETE_USER:
      const selectedIndexNew = state.userlist.findIndex(
        (item) => item.id == action.payload.id
      );

      const spliceList = state.userlist.splice(selectedIndexNew, 1);

      return { userlist: state.userlist };

    default:
      return state;
  }
};
