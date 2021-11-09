import React, { useState, useEffect } from 'react';
// import Alert from './components/Alert';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import EditTask from './components/EditTask';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [isEdited, SetIsEdited] = useState(false);

  const editHandler = () => {
    SetIsEdited(true);
  };
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/edit-task'>
            <EditTask />
          </Route>
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
