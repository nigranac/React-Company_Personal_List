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
      const selectedIndex = state.userlist.findIndex(
        (item) => item.id == action.payload.id
      );
      // console.log(selectedIndex);
      const copy = [...state.userlist];
      copy[Number(selectedIndex)].name = action.payload.name;
      copy[Number(selectedIndex)].email = action.payload.email;
      copy[Number(selectedIndex)].phone = action.payload.phone;
      copy[Number(selectedIndex)].website = action.payload.website;

      return { ...state, userlist: copy };

    case actionTypes.DELETE_USER:
      // const filteredList = state.userlist.filter(
      //   (item) => item.id !== action.payload
      // );
      // return { userlist: filteredList, ...state.userlist };
      const selectedIndexNew = state.userlist.findIndex(
        (item) => item.id == action.payload.id
      );
      console.log("selectedIndex", selectedIndexNew);

      const spliceList = state.userlist.splice(selectedIndexNew, 1);
      console.log("ssplişce", spliceList);
      console.log("stateUserLis", state.userlist);
      return { userlist: state.userlist };

    default:
      return state;
  }
};
