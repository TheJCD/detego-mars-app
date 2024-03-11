import React, { useState } from 'react';

const ViewTask = ({task, setSelectedTask, onViewTaskChange}) => {
  	
	const [viewTask, setViewTask] = useState(false);

	const openViewTask = () => {
	  setViewTask(true);
	  setSelectedTask(task.name);
	  onViewTaskChange(true);
	};

	const closeViewTask = () => {
		setViewTask(false);
		onViewTaskChange(false);
		setSelectedTask('No task selected');
	}

	return (
		<>
		<button className="btn btn-info mr-1" onClick={openViewTask}>View Task</button>
		{viewTask && (
		<div className="openTaskCard">
            <h2>View Task</h2>
	            <p>Task name: {task.name ? task.name : "No task name provided"}</p>
	            <p>Task description: {task.description ? task.description : "No task description provided"}</p>
	            <p>Task owner: {task.owner ? task.owner : "No task owner provided"}</p>
	            <p>Assigned user: {task.assignedUser ? task.assignedUser : "No assigned user provided"}</p>
            <div>
            	<button className="btn btn-secondary close" onClick={closeViewTask}>Close</button>
        	</div>
  		</div>
		)}
  		</>
	)
}

export default ViewTask;