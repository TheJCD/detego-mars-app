import React, { useState } from 'react';
import ActiveTasksCounter from '../ActiveTasksCounter/ActiveTasksCounter';
import CurrentlyViewing from '../CurrentlyViewing/CurrentlyViewing';
import DeleteAll from '../DeleteAll/DeleteAll';

const SidebarComponent = ({count, selectedTask, setTasks, setCount, tasks}) => {
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

export default SidebarComponent;