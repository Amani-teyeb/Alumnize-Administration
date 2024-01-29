import { userConstants } from '../actions/constants';

const initState = {
  users: [],
  user: {},
  images: [],
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
        users: action.payload,
      };
      break;
    case userConstants.GET_STUDENTS_FAILURE:
      break;
    case userConstants.GET_TEACHERS_REQUEST:
      break;
    case userConstants.GET_TEACHERS_SUCCESS:
      state = {
        ...state,
        users: action.payload.teachers,
      };
      break;
    case userConstants.UPDATE_USER_REQUEST:
      break;
    case userConstants.UPDATE_USER_SUCCESS:
      state = {
        ...state,
      };
      break;
    case userConstants.UPDATE_USER_FAILURE:
      break;
    case userConstants.GET_TEACHERS_FAILURE:
      break;
    case userConstants.ADD_IMAGE_REQUEST:
      break;
    case userConstants.ADD_IMAGE_SUCCESS:
      state = {
        ...state,
      };
      break;
    case userConstants.ADD_IMAGE_FAILURE:
      break;

    case userConstants.GET_IMAGES_REQUEST:
      break;
    case userConstants.GET_IMAGES_SUCCESS:
      state = {
        ...state,
        images: action.payload.images,
      };
      break;
    case userConstants.GET_IMAGES_FAILURE:
      break;
    default:
      return state;
  }
  return state;
};
