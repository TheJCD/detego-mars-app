import React, { useState } from 'react';

const EditTask = ({setTasks, taskList, task}) => {
	const [editedTask, setEditedTask] = useState({});
  	const [selectedTask, setSelectedTask] = useState(null);
  	
	const handleEditTask = (task) => {
		setSelectedTask(task);
		setEditedTask({ ...task });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedTask({ ...editedTask, [name]: value });
	 };

	const handleSaveChanges = () => {
	    const updatedTasks = taskList.map(taskNew =>
	      taskNew.id === editedTask.id ? editedTask : taskNew
	    );
	    setTasks(updatedTasks);
	    setSelectedTask(null);
	};

	const closeEditedTask = () => setSelectedTask(null);

	return (
		<>
		<button className="btn btn-secondary ms-3" onClick={() => handleEditTask(task)}>Edit task</button>
		{selectedTask && (
		<div className="openTaskCard">
	        <h2 className="card-title">Edit Task</h2>
	        <div className="form-group">
				<label className="card-text">Task name:</label>
	            <input className="form-control" type="text" name="name" value={editedTask.name} onChange={handleChange} />
			</div>

			<div className="form-group">
				<label className="card-text">Task description:</label>
	           	<textarea className="form-control" name="description" value={editedTask.description} onChange={handleChange}/>
			</div>

			<div className="form-group">
				<label className="card-text">Task owner:</label> 
	        	<input className="form-control" type="text" name="owner" value={editedTask.owner} onChange={handleChange} />
			</div>

			<div className="form-group">
				<label className="card-text">Assigned user:</label>
	            <input className="form-control" type="text" name="assignedUser" value={editedTask.assignedUser} onChange={handleChange} />
			</div>
			<div className="mt-3">
	            <button className="btn btn-success" onClick={handleSaveChanges}>Save Changes</button>
	            <button className="btn btn-secondary ms-2" onClick={closeEditedTask}>Cancel Changes</button>
			</div>
  		</div>
		)}
  		</>
	)
}

export default EditTask;