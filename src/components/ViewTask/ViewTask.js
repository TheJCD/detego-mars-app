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
		setSelectedTask('');
	}

	return (
		<>
			<button className="btn btn-info mr-1" onClick={openViewTask}>View Task</button>
			{viewTask && (
			<div className="viewTaskCard">
	            <div className="modal-content">
		            <h2>View Task</h2>
		            <p>Task name: {task.name}</p>
		            <p>Task description: {task.description}</p>
		            <p>Task owner: {task.owner}</p>
		            <p>Assigned user: {task.assignedUser}</p>
		            <div>
		            	<button className="btn btn-secondary close" onClick={closeViewTask}>Close</button>
	            	</div>
	            </div>
	  		</div>
			)}
  		</>
	)

}

export default ViewTask;