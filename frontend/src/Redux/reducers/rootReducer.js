import { combineReducers } from 'redux';
import authReducer from '../Auth/reducer';
import tasksReducer from '../Tasks/reducer';

const rootReducer = combineReducers({
  task: tasksReducer,
  auth: authReducer
});

export default rootReducer;