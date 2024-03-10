import React, { useState } from 'react';

const EditTask = ({setTasks, taskList, task}) => {
	//monitoring state of the edited task
	const [editedTask, setEditedTask] = useState({});

	//monitoring selected task
  	const [selectedTask, setSelectedTask] = useState(null);

	const handleEditTask = (task) => {
		//this makes selectedTask true
		setSelectedTask(task);
		setEditedTask({ ...task });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedTask({ ...editedTask, [name]: value });
	 };

	const handleSaveChanges = () => {
		// setTasks([]);
	    const updatedTasks = taskList.map(taskNew =>
	      taskNew.id === editedTask.id ? editedTask : taskNew
	    );
	    setTasks(updatedTasks);
	    setSelectedTask(null);
	}; 

	return (
		<>
		<button className="btn btn-secondary" onClick={() => handleEditTask(task)}>Edit task</button>
		{selectedTask && (
		<div className="marsModal">
            <div className="modal-content">
            {/*<span className="close" onClick={() => selectedTask(null)}>Cancel</span>*/}
	            <h2>Edit Task</h2>
	            <input type="text" name="name" value={editedTask.name} onChange={handleChange} />
	            <textarea name="description" value={editedTask.description} onChange={handleChange}/>
	            <input type="text" name="owner" value={editedTask.owner} onChange={handleChange} />
	            <input type="text" name="assignedUser" value={editedTask.assignedUser} onChange={handleChange} />
	            <button className="btn btn-success" onClick={handleSaveChanges}>Save Changes</button>
            </div>
  		</div>
		)}
  		</>
	)

}

export default EditTask;