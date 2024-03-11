import React, { useState } from 'react';

const AddNewTask = ({addTask}) => {

	//to show/not show the modal
	const [showModal, setShowModal] = useState(false);
  	const [taskName, setTaskName] = useState('');
  	const [owner, setNameOfOwner] = useState('');
  	const [assignedUser, setNameOfAssignedUser] = useState('');
  	const [taskDescription, setTaskDescription] = useState('');

	const createTask = () => {
	    setShowModal(true);
	};

	const addTaskNew = () => {
	    // Add task to list of tasks
	    const newTask = { id: Date.now(), name: taskName, description: taskDescription, owner: owner, assignedUser: assignedUser};
	    addTask(newTask);

	    // Reset fields and close modal
	    setTaskName('');
	    setTaskDescription('');
	    setNameOfOwner('');
	    setNameOfAssignedUser('');
	    setShowModal(false);
	};

	return (
		<>
        	<button className="btn btn-primary" onClick={createTask}>Add new task</button>
	        {showModal && (
	          <div className="card mt-2">
	            <div className="card-body">
	              <h2 className="card-title">Create New Task</h2>
	              <form>
					<div className="form-group">
						<label className="card-text">Task name:</label>
						<input className="form-control" type="text" value={taskName}  onChange={(e) => setTaskName(e.target.value)}  />
					</div>
	              	<div className="form-group">
		              	<label className="card-text">Task description:</label>
		                <textarea className="form-control" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
	                </div>
	                <div className="form-group">
		               	<label className="card-text">Task owner:</label>
		                <input className="form-control" value={owner} onChange={(e) => setNameOfOwner(e.target.value)} />
	                </div>
	                <div className="form-group">
	            		<label className="card-text">Assigned User:</label>
		                <input className="form-control" value={assignedUser} onChange={(e) => setNameOfAssignedUser(e.target.value)} />
	                </div>
	                <div className="mt-3">
		              <button className="btn btn-success" onClick={addTaskNew}>Add</button>
		              <button className="btn btn-secondary close ms-2" onClick={() => setShowModal(false)}>Cancel</button>
	            	</div>
	            	</form>
	            </div>
	          </div>
	        )}
	    </>
	)
}

export default AddNewTask;