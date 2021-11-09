import React, { useEffect, useState, useCallback } from 'react';
import SingleTask from './SingleTask';
import axios from 'axios';
import { compose } from '@reduxjs/toolkit';

const Tasks = props => {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const deleteSingleTask = async id => {
    console.log('girdi!');
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/tasks/${id}`
      );

      const data = response.json();
      console.log(data);
    } catch (error) {}
  };
  const fetchTasks = () => {
    axios
      .get('http://localhost:5000/api/v1/tasks')
      .then(response => response.data)
      .then(data => {
        const { tasks } = data;
        setTasks(tasks);
      });
  };
  // fetchTasks();
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <section className='tasks-container'>
      <p className='loading-text'>Loading...</p>
      <div className='tasks'>
        {tasks.map(task => {
          return (
            <SingleTask
              onDelete={deleteSingleTask(task._id)}
              onEdit={props.onEdit}
              completed={task.completed}
              task={task.name}
              key={task._id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tasks;
