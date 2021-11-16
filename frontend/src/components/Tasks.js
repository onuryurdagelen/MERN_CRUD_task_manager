import React, { useEffect, useState, useCallback } from 'react';
import SingleTask from './SingleTask';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getTasks, deleteTask } from '../redux/actions/taskActions';
import { useHistory } from 'react-router-dom';
const Tasks = props => {
  const [error, setError] = useState(null);
  // const [tasks, getTasks] = useState('');
  // const { tasks } = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    props.getTasks();
  }, [props.tasks]);
  return (
    <section className='tasks-container'>
      <p className='loading-text'>Loading...</p>
      <div className='tasks'>
        {props.tasks &&
          props.tasks.map(task => (
            <SingleTask
              task={task.name}
              _id={task._id}
              key={task._id}
              completed={task.completed}
            />
          ))}
        ;
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks.tasks,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { getTasks, deleteTask })(Tasks);
