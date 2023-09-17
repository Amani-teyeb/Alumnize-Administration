import axiosInstance from '../../helpers/axios';

import { mycourselistConstants } from './constants';

export const getmycourseLists = () => {
  return async (dispatch) => {
    dispatch({ type: mycourselistConstants.GET_MYCOURSELIST_REQUEST });
    const res = await axiosInstance.get(`mycourse/getallcourseliste`);
    if (res.status === 200) {
      dispatch({
        type: mycourselistConstants.GET_MYCOURSELIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: mycourselistConstants.GET_MYCOURSELIST_FAILURE,
      });
    }
  };
};
