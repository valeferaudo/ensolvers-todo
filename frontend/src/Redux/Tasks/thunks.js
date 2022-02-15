import {
    GET_TASKS_FETCHING,
    GET_TASKS_FULFILLED,
    GET_TASKS_REJECTED,
    UPDATE_TASK_FETCHING,
    UPDATE_TASK_FULFILLED,
    UPDATE_TASK_REJECTED,
  } from '../../Constants/actionTypes';
  
  const BASE_URL = `http://localhost:3000/api/tasks`;
  const getTasksFetching = () => ({
    type: GET_TASKS_FETCHING
  });
  
  const getTasksFulfilled = (payload) => ({
    type: GET_TASKS_FULFILLED,
    payload
  });
  
  const getTasksRejected = () => ({
    type: GET_TASKS_REJECTED
  });
  
  export const getTasks = () => {
    return (dispatch) => {
      dispatch(getTasksFetching());
      fetch(BASE_URL)
        .then((response) => {
          if (response.status === 200 || response.status === 201) return response.json();
          throw new Error(`HTTP ${response.status}`);
        })
        .then((response) => {
            console.log(response);
          dispatch(getTasksFulfilled(response.data));
        })
        .catch(() => {
          dispatch(getTasksRejected());
        });
    };
  };

  const updateTasksFetching = () => ({
    type: UPDATE_TASK_FETCHING
  });
  
  const updateTasksFullfiled = (payload, id) => ({
    type: UPDATE_TASK_FULFILLED,
    payload,
    id
  });
  
  const updateTasksRejected = () => ({
    type: UPDATE_TASK_REJECTED
  });
  
  export const updateTask = (task, id) => (dispatch) => {
    dispatch(updateTasksFetching());
    return fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then((data) => {
        if (data.status === 200 || data.status === 201) return data.json();
        throw new Error(`HTTP ${data.status}`);
      })
      .then(() => {
        dispatch(updateTasksFullfiled(id));
      })
      .catch(() => {
        dispatch(updateTasksRejected());
      });
  };