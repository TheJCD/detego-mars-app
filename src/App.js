import React, { useState } from 'react';
import AddNewTask from './components/AddNewTask/AddNewTask';
import TaskList from './components/TaskList/TaskList';
import ActiveTasksCounter from './components/ActiveTasksCounter/ActiveTasksCounter';
import DeleteAll from './components/DeleteAll/DeleteAll';
import CurrentlyViewing from './components/CurrentlyViewing/CurrentlyViewing';
import Image from './components/Image/Image';

import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {

  //array containing all tasks
  const [tasks, setTasks] = useState([]);

  //tracking tasks
  const [count, setCount] = useState(0);

  //monitoring selected task
  const [selectedTask, setSelectedTask] = useState('');

  //monitoring state of the edited task
  const [editedTask, setEditedTask] = useState({});

  const [currentTask, setCurrentTask] = useState('');

  const updateTasks = (newTask) => {
    setTasks([...tasks, newTask]);
    setCount(count + 1);
  };

  function Sidebar() {
    return (
      <div className="sidebar">
        <ActiveTasksCounter count={count}/>
        <CurrentlyViewing selectedTask={selectedTask}/>
        {tasks.length > 0 &&
          <DeleteAll setTasks={setTasks} setCount={setCount}/>
        }
       
      </div>
    );
  }

  function Header() {
    return (
      <div className="header">
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="main">
        <div className="content">
          <AddNewTask addTask={updateTasks} />
          <TaskList setTasks={setTasks} taskList={tasks} setCount={setCount} count={count} setSelectedTask={setSelectedTask}/>
        </div>
      </div>
    </div>
  );

}

export default App;