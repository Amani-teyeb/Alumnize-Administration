import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import courseReducer from './course.reducers';
import themeReducers from './theme.reducers';
import userReducers from './user.reducers';
import mycourseListeReducers from './mycourseListe.reducers';
import chatReducers from './chat.reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  theme: themeReducers,
  user: userReducers,
  mycourseList: mycourseListeReducers,
  chat: chatReducers,
});
export default rootReducer;
