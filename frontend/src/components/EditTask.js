import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const EditTask = () => {
  return (
    <div className='container'>
      <form className='single-task-form'>
        <h4>Edit Task</h4>
        <div className='form-control'>
          <label>Task ID</label>
          <p className='task-edit-id'></p>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' className='task-edit-name' />
        </div>
        <div className='form-control'>
          <label htmlFor='completed'>completed</label>
          <input
            type='checkbox'
            name='completed'
            className='task-edit-completed'
          />
        </div>
        <button type='submit' className='block btn task-edit-btn'>
          edit
        </button>
        <div className='form-alert'></div>
      </form>
      <NavLink to='/' className='btn back-link'>
        back to tasks
      </NavLink>
    </div>
  );
};

export default EditTask;
