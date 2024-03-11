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

	return (
		<>
		<button className="btn btn-secondary" onClick={() => handleEditTask(task)}>Edit task</button>
		{selectedTask && (
		<div className="marsModal">
			<div className="card-body">
            	<div className="modal-content">
	            {/*<span className="close" onClick={() => selectedTask(null)}>Cancel</span>*/}
		            <h2 className="card-title">Edit Task</h2>
		            <input className="form-control" type="text" name="name" value={editedTask.name} onChange={handleChange} />
		            <textarea className="form-control" name="description" value={editedTask.description} onChange={handleChange}/>
		            <input className="form-control" type="text" name="owner" value={editedTask.owner} onChange={handleChange} />
		            <input className="form-control" type="text" name="assignedUser" value={editedTask.assignedUser} onChange={handleChange} />
		            <button className="btn btn-success" onClick={handleSaveChanges}>Save Changes</button>
	            	</div>
            </div>
  		</div>
		)}
  		</>
	)
}

export default EditTask;