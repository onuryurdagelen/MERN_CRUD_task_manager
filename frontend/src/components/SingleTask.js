import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { deleteTask, getTasks } from '../redux/actions/taskActions';

const SingleTask = props => {
  const deleteTaskHandler = () => {
    props.deleteTask(props._id, props.tasks);
  };

  useEffect(() => {}, []);

  return (
    <div
      key={props.key}
      className={`single-task ${props.completed && 'task-completed'}`}
      data-id={props._id}
    >
      <h5>
        <span>
          <i className='far fa-check-circle'></i>
        </span>
        {props.task}
      </h5>
      <div className='task-links'>
        <NavLink to={`/edit-task/${props._id}`} className='edit-link'>
          <i className='fas fa-edit'></i>
        </NavLink>
        <button
          type='button'
          className='delete-btn'
          onClick={deleteTaskHandler}
        >
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    id: state.tasks.id,
    tasks: state.tasks.tasks.tasks,
    isLoading: state.tasks.isLoading,
    message: state.tasks.message,
    response: state.tasks.response,
  };
};
export default connect(mapStateToProps, { deleteTask })(SingleTask);
