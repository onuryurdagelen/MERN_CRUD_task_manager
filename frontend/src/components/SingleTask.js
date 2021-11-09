import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleTask = props => {
  return (
    <div className={`single-task ${props.completed && 'task-completed'}`}>
      <h5>
        <span>
          <i className='far fa-check-circle'></i>
        </span>
        {props.task}
      </h5>
      <div className='task-links'>
        <NavLink to='/edit-task' className='edit-link' onClick={props.onEdit}>
          <i className='fas fa-edit'></i>
        </NavLink>
        <button type='button' className='delete-btn' onClick={props.delete}>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
