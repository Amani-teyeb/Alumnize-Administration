import { mycourselistConstants } from '../actions/constants';

const initState = {
  mycourseLists: [],
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case mycourselistConstants.GET_MYCOURSELIST_REQUEST:
      break;
    case mycourselistConstants.GET_MYCOURSELIST_SUCCESS:
      state = {
        ...state,
        mycourseLists: action.payload.courseLists,
      };
      break;
    case mycourselistConstants.GET_MYCOURSELIST_FAILURE:
      break;
    default:
      return state;
  }
  return state;
};
