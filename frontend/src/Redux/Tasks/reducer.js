import {
  GET_TASKS_FETCHING,
  GET_TASKS_FULFILLED,
  GET_TASKS_REJECTED,
  UPDATE_TASK_FETCHING,
  UPDATE_TASK_FULFILLED,
  UPDATE_TASK_REJECTED,
} from '../../Constants/actionTypes';

const initialState = {
  isLoading: false,
  isLoadingForm: false,
  list: [],
  messageType: '',
  messageText: '',
  showMessage: false,
  task: {},
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TASKS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_TASKS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot get tasks',
      };
    case UPDATE_TASK_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TASK_FULFILLED:
      return {
        ...state,
        isLoading: false,
        messageType: 'success',
        messageText: 'Updated Task',
        list: state.list.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case UPDATE_TASK_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot update task',
      };
    default:
      return state;
  }
};

export default tasksReducer;
