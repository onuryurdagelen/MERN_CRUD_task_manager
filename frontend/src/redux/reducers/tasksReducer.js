import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  tasks: [],
  single_task: [],
  id: null,
  message: '',
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TASKS_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_TASKS_SUCCESS:
      return { ...state, tasks: action.payload, isLoading: false };
    case actionTypes.GET_TASKS_ERROR:
      return { ...state, isLoading: false, message: action.payload };

    case actionTypes.GET_SINGLE_TASK_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_SINGLE_TASK_SUCCESS:
      return { ...state, single_task: action.payload, isLoading: false };
    case actionTypes.GET_SINGLE_TASK_ERROR:
      return { ...state, message: action.payload, isLoading: false };

    case actionTypes.EDIT_TASK_START:
      console.log(action.payload);
      return { ...state, isLoading: true };
    case actionTypes.EDIT_TASK_SUCCESS:
      console.log(action.payload);
      return { ...state, tasks: action.payload, isLoading: false };
    case actionTypes.EDIT_TASK_ERROR:
      console.log(action.payload);
      return { ...state, message: action.payload, isLoading: false };

    case actionTypes.DELETE_TASK_START:
      return { ...state, isLoading: true };
    case actionTypes.DELETE_TASK_SUCCESS:
      console.log(action.payload);
      return { ...state, tasks: action.payload, isLoading: false };
    case actionTypes.DELETE_TASK_ERROR:
      console.log(action.payload);
      return { ...state, message: action.payload, isLoading: false };
    default:
      return state;
  }
};
export default taskReducer;
