import React, { useState } from 'react';
import EditTask from '../EditTask/EditTask';
import ViewTask from '../ViewTask/ViewTask';
import DeleteTask from '../DeleteTask/DeleteTask';

const TaskList = ({setTasks, taskList, setCount, count, setSelectedTask}) => {

  const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);
  const handleViewTaskChange = (value) => setIsViewTaskOpen(value);

	return (
    <>
    {taskList.map((task, index) => (
      <div key={index} className="border p-3 mt-3 ms-1">
        <div className="card-body">
          <h3 className="card-title mb-2">Task name: {task.name ? task.name : "No task name provided"}</h3>
          <p className="card-text">Task description: {task.description ? task.description : "No task description provided"}</p>
          <p className="card-text">Task owner: {task.owner ? task.owner : "No task owner provided"}</p>
          <p className="card-text">Assigned user: {task.assignedUser ? task.assignedUser : "No assigned user provided"}</p>
        </div>
        <div className="mt-3">
          <ViewTask  task={task} setSelectedTask={setSelectedTask} onViewTaskChange={handleViewTaskChange}/>
          <EditTask setTasks={setTasks} taskList={taskList} task={task} isViewTaskOpen={isViewTaskOpen}/>
          <DeleteTask setTasks={setTasks} taskList={taskList} task={task} setCount={setCount} count={count}/>
        </div>
        </div>
      ))}
    </>
  )
}

export default TaskList;