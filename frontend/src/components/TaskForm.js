import React, { useEffect, useRef, useState } from 'react';
import { getTasks } from '../redux/actions/taskActions';
import { useSelector, useDispatch, connect } from 'react-redux';
const TaskForm = props => {
  const [name, setName] = useState('');

  const addTaskHandler = e => {
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    });
  };
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <form className='task-form' onSubmit={addTaskHandler}>
        <h4>task manager</h4>
        <div className='form-control'>
          <input
            type='text'
            name='name'
            className='task-input'
            placeholder='e.g. wash dishes'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type='submit' className='btn submit-btn'>
            submit
          </button>
        </div>
        <div className='form-alert'></div>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks.tasks,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { getTasks })(TaskForm);
