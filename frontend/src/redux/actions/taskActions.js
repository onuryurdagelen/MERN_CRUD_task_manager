import * as actionTypes from './actionTypes';
import axios from 'axios';
export const getTasks = () => dispatch => {
  dispatch({ type: actionTypes.GET_TASKS_START });
  axios
    .get('http://localhost:5000/api/v1/tasks')
    .then(response =>
      dispatch({
        type: actionTypes.GET_TASKS_SUCCESS,
        payload: response.data,
      })
    )
    .catch(error =>
      dispatch({
        type: actionTypes.GET_TASKS_ERROR,
        payload: '404 Error',
      })
    );
};

export const getSingleTask = id => dispatch => {
  dispatch({ type: actionTypes.GET_SINGLE_TASK_START });
  axios
    .get(`http://localhost:5000/api/v1/tasks/${id}`)
    .then(response =>
      dispatch({
        type: actionTypes.GET_SINGLE_TASK_SUCCESS,
        payload: response.data.task,
      })
    )
    .catch(error =>
      dispatch({
        type: actionTypes.GET_SINGLE_TASK_ERROR,
        payload: '404 Error',
      })
    );
};

export const updateTask = (id, task) => dispatch => {
  dispatch({ type: actionTypes.EDIT_TASK_START });
  fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: task.name,
      completed: task.completed,
    }),
  })
    .then(response => {
      console.log(response);
      dispatch({
        type: actionTypes.EDIT_TASK_SUCCESS,
        payload: response,
      });
    })
    .catch(error =>
      dispatch({
        type: actionTypes.EDIT_TASK_ERROR,
        payload: error,
      })
    );
};

export const deleteTask = (id, tasks) => dispatch => {
  dispatch({ type: actionTypes.DELETE_TASK_START });
  fetch('http://localhost:5000/api/v1/tasks', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  })
    .then(response =>
      dispatch({
        type: actionTypes.DELETE_TASK_SUCCESS,
        payload: tasks.filter(task => task._id !== id),
      })
    )
    .catch(error =>
      dispatch({
        type: actionTypes.DELETE_TASK_ERROR,
        payload: error,
      })
    );
};
