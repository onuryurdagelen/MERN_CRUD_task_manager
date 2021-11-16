import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../index.css';
import { connect } from 'react-redux';
import { getSingleTask, updateTask } from '../redux/actions/taskActions';

const EditTask = props => {
  const { taskID } = props.match.params;
  const history = useHistory();
  console.log(taskID);

  console.log(props);

  const { message } = props.message && props.message;
  console.log(message);

  let content = '';

  const singleTask = props.single_task && props.single_task;

  console.log(singleTask);

  const [name, setName] = useState(singleTask.name);
  const [completed, setCompleted] = useState(singleTask.completed);

  const editTaskHandler = e => {
    e.preventDefault();
    props.updateTask(taskID, { name, completed });
  };
  useEffect(() => {
    props.getSingleTask(taskID);
  }, [props.tasks]);

  if (props.isLoading) {
    content = <h1>Loading...</h1>;
  } else {
    if (!singleTask) {
      content = <h1>{message}</h1>;
    } else {
      content = (
        <React.Fragment>
          <form className='single-task-form' onSubmit={editTaskHandler}>
            <h4>Edit Task</h4>
            <div className='form-control'>
              <label>Task ID</label>
              <p className='task-edit-id'>{singleTask._id}</p>
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='task-edit-name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='completed'>completed</label>
              <input
                type='checkbox'
                name='completed'
                className='task-edit-completed'
                checked={completed}
                onChange={() => setCompleted(!completed)}
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
        </React.Fragment>
      );
    }
  }

  return <div className='container'>{content}</div>;
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    single_task: state.tasks.single_task,
    isLoading: state.tasks.isLoading,
    message: state.tasks.message,
    id: state.tasks.id,
  };
};
export default connect(mapStateToProps, { getSingleTask, updateTask })(
  EditTask
);
