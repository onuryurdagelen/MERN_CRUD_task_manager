import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const TaskForm = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState('');

  const createTask = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/v1/tasks', {
        name,
      });
      console.log(data);
    } catch (error) {}
  };
  const handleChange = e => {
    e.preventDefault();
    setName(e.target.value);
    inputRef.current = name;
  };
  const handleSubmit = e => {
    e.preventDefault();
    createTask();
  };
  useEffect(() => {
    createTask();
  }, [name]);
  return (
    <React.Fragment>
      <form className='task-form' onSubmit={handleSubmit}>
        <h4>task manager</h4>
        <div className='form-control'>
          <input
            type='text'
            ref={inputRef}
            name='name'
            className='task-input'
            placeholder='e.g. wash dishes'
            onChange={handleChange}
            value={name}
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

export default TaskForm;
