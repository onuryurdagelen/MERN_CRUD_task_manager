import React, { useState, useEffect } from 'react';
// import Alert from './components/Alert';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import EditTask from './components/EditTask';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/edit-task/:taskID' component={EditTask} />
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route exact path='/'>
            <TaskForm />
            <Tasks />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
