import React, { useState } from 'react';
import AddNewTask from './components/AddNewTask/AddNewTask';
import TaskList from './components/TaskList/TaskList';
import Image from './components/Image/Image';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState('No task selected');

  const updateTasks = (newTask) => {
    setTasks([...tasks, newTask]);
    setCount(count + 1);
  };

  return (
    <div className="app">
      <div className="header">
      </div>
      <Sidebar count={count} selectedTask={selectedTask} setTasks={setTasks} setCount={setCount} tasks={tasks}/>
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