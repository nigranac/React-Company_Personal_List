import * as actionTypes from "../action-types/actionTypes";

export const updateUser = (info) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_USER,
    payload: info,
  });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_USER,
    payload: id,
  });
};

export const getUserlist = () => async (dispatch) => {
  dispatch({
    type: actionTypes.USER_LIST_REQUEST,
  });

  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataJson = await data.json();
    dispatch({
      type: actionTypes.USER_LIST_SUCCESS,
      payload: dataJson,
    });
  } catch (error) {}
};
