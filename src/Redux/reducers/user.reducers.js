import { userConstants } from '../actions/constants';

const initState = {
  users: [],
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_USER_REQUEST:
      break;
    case userConstants.GET_STUDENTS_REQUEST:
      break;
    case userConstants.GET_STUDENTS_SUCCESS:
      state = {
        ...state,
        users: action.payload.users,
      };
      break;
    case userConstants.GET_STUDENTS_FAILURE:
      break;
    case userConstants.GET_TEACHERS_REQUEST:
      break;
    case userConstants.GET_TEACHERS_SUCCESS:
      state = {
        ...state,
        users: action.payload.users,
      };
      break;
    case userConstants.GET_TEACHER_FAILURE:
      break;

    default:
      return state;
  }
  return state;
};
