import { combineReducers } from 'redux';
import tasks from './tasksReducer';
const reducers = combineReducers({
  tasks,
});
export default reducers;
