import React, { useState } from 'react';

const DeleteTask = ({setTasks, taskList, task, setCount, count}) => {
  	
	const deleteTask = () => {
		const updatedTasks = taskList.filter(taskCurr => taskCurr.id !== task.id);
		setTasks(updatedTasks);
		setCount(count - 1);
	};

	return (
		<>
			<button className="btn btn-danger"onClick={deleteTask}>Delete Task</button>
  		</>
	)
}

export default DeleteTask;