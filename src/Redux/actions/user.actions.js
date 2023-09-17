import { userConstants } from './constants';
import axiosInstance from '../../helpers/axios';

export const registerUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.REGISTER_USER_REQUEST });
    const res = await axiosInstance.post(`/signup`, {
      ...user,
    });

    if (res.status === 201) {
      const { user } = res.data;
      dispatch({
        type: userConstants.REGISTER_USER_SUCCESS,
        payload: {
          user,
        },
      });
      // dispatch(getStudents());
      dispatch(getTeachers());
    } else {
      dispatch({
        type: userConstants.REGISTER_USER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    dispatch({ type: userConstants.GET_STUDENTS_REQUEST });
    const res = await axiosInstance.get(`/getUsers`);

    if (res.status === 201) {
      dispatch({
        type: userConstants.GET_STUDENTS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: userConstants.GET_STUDENTS_FAILURE });
    }
  };
};
export const getTeachers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.GET_TEACHERS_REQUEST });
      const res = await axiosInstance.get(`/getTeachers`);

      if (res.status === 200) {
        dispatch({
          type: userConstants.GET_TEACHERS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({ type: userConstants.GET_TEACHERS_FAILURE });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/user/deleteUser`, userId);
      dispatch({ type: userConstants.DELETE_USER_REQUEST });

      if (res.status === 200) {
        dispatch({
          type: userConstants.DELETE_USER_SUCCESS,
          payload: res.data,
        });
      }
      dispatch(getStudents());
    } catch (error) {
      dispatch({ type: userConstants.DELETE_USER_FAILURE });
    }
  };
};

export const updateUser = (theuser) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/user/editUser`, theuser);
      dispatch({ type: userConstants.UPDATE_USER_REQUEST });

      if (res.status === 201) {
        dispatch({
          type: userConstants.UPDATE_USER_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
      }
      dispatch(getStudents());
    } catch (error) {
      dispatch({ type: userConstants.UPDATE_USER_FAILURE });
    }
  };
};
